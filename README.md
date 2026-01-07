# Svelte 5 Custom Elements Template

This repository is a **template for building a custom elements (web components) library** using **Svelte 5**.

Although Svelte is used to author the components, the compiled output consists of **standards-based custom elements**. These elements can be used in **any environment that supports HTML and JavaScript**, including:

- React (19+)
- Angular
- Vue
- ***many other frameworks***
- Plain HTML with JavaScript

This makes the resulting library framework-agnostic and suitable for use across multiple applications and tech stacks.

This library is configured to use typescript with vite and storybook, the latter currently being configured to display Svelte components, not compiled custom elements.

Quick note: This library template as it is works for my own purposes right now, and I am not in any way attempting to imply it is the best solution. I found updated documentation on configuring a template library to be hard to come by though and wanted to post a working version for both my future self and others.

## Why Custom Elements?

While custom elements make it possible to reuse components across different frameworks, the larger benefit is reduced coupling. By separating your component library from a specific framework, you lower the cost and risk of future framework upgrades or migrations, even when the components are initially built for a single application.

## Developing

Executing a development server:

```sh
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

Everything inside `src/lib` is part of your library, everything inside `src/routes` can be used as a showcase or preview app.

## Building

To test that you can build your library:

```sh
npm pack --dry-run
```

Execute w/o the option to build a usable package.

To create a production version of your showcase app (note - update the version number inside **package.json** if installing or elsewhere or publishing):

```sh
npm run build
```

The build script currently includes a **`cp`** command to copy a types file into the output dist folder, this is to be used by a consuming client as to alleviate any linting or type errors during client development.

After running the above, package the output via:

```sh
npm pack
```

This packaged file can be copied to another project and installed there directly using the **`npm install`** command, i.e. **`npm install my-library-0.0.1.tgz`**. This will register the **my-library** package at verison **0.0.1** as installed in your application.

To publish to npm after packaging the output:

```sh
npm publish --access=public
```


## Storybook

Storybook is currently setup to test custom web elements (NOT Svelte components), so what we see by executing storybook right now is the custom element as it appears after the build step, not a svelte component inside a svelte application.

Run storybook via:

```sh
npm run storybook
```

This will start the storybook runtime and load a page in your browser that displays the storybook dashboard.  This window will contain a list of components on the left hand side that there are stories for, as well as a story for each component (there can be multiple) that has been included in that comopnents story file.

See the **`./src/stories/Counter.stories.ts`** file for an example of a stories file. 

This stories file sets up a default meta object, and then below that contains separate blocks detailing different instances of the component we would like to display, each instance using or exercising the component in a slightly different manner.

[Storybook for Custom Web Elements](https://storybook.js.org/docs/get-started/frameworks/web-components-vite)


## Requirements for creating custom elements

An example custom component is a simple variation of the default **Counter** component, located in **`src/lib/Counter.svelte`**. Note the **`svelte:options`** element at the top of the component that defines the custom element name as well as any name changes for its attributes in addition to type definitions (type 'String' is default if left undefined).


```ts
  <svelte:options
    customElement={{
      tag: "ui-counter",
      props: {
        // rename startCount to start-count when used in consuming app
        startCount: { attribute: 'start-count', type: 'Number'},
        // set 'step' to a type 'Number' vs default String typing
        step: { attribute: 'step', type: 'Number'}
      }
    }}
  />

  <script lang="ts">
    let {startCount = 0, step = 1} = $props();

    let count: number = $derived(startCount)

    const increment = () => {
      count += step;
    }
  </script>

  <button onclick={increment}>
    count is {count}
  </button>
// ...
```

See the [Svelte Custom Elements documentation](https://svelte.dev/docs/svelte/custom-elements) page for more information.


- use the **`svelte:options`** tag to define the custom element tag name and props. 
  - Custom Elements must have a **-** (dash) in the name, i.e. **my-element**
  - see [Custom Elements](https://svelte.dev/docs/svelte/custom-elements) for more information
  - prop/attribute names must be converted to kebab-case, i.e. "startCount" to "start-count"
  - valid property types in the **`svelte:options`** props object are 'String', 'Number', 'Boolean', 'Array', and 'Object'.
- an import entry must be added to the **`src/index.ts`** file, i.e. for the **Counter** component the entry is: **`import './lib/Counter.svelte';`**, this triggers compilation of the component to a custom web element.
- define the custom element by its registered name in two places inside the **`src/custom-elements.d.ts file`** to define its attribute/prop types used by consuming applications depending on type. Use the registered attribute names to do this, i.e. **`start-count`** inside the **`Counter`** component, and not **`startCount`** which is used inside the Svelte code

## Consuming application

To make custom elements available to the largest namespace possible, import your library in an originating file, i.e. an index or main.tsx file.  For instance, you can import it in the top of a main.tsx file as:

```ts
  import 'my-library';
```

In a corresponding application you may need to add a (change the name for your own library) **my-library.d.ts** file in the **`src/`** directory with the following content:

```ts
  /// <reference types="my-library/types" />
```

