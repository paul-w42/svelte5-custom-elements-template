declare module '*.svelte' {
  import type { LegacyComponentType } from 'svelte';

  const component: LegacyComponentType & {
    element: CustomElementConstructor;
  };

  export default component;
}