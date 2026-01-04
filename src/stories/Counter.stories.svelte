<script module>
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import Counter from '../lib/Counter.svelte';
  import { fn } from 'storybook/test';

  // More on how to set up stories at: https://storybook.js.org/docs/writing-stories
  const { Story } = defineMeta({
    title: 'poly-ui/Counter',
    component: Counter,
    // tags: ['autodocs'],
  });
</script>

<!-- More on writing stories with args: https://storybook.js.org/docs/writing-stories/args -->
<Story name="Default" args={{ startCount: 0, step: 1 }} />

<Story name="Start at 100, Step 10" args={{ startCount: 100, step: 10 }} />

<Story name="Start at 1000, Step -1" args={{ startCount: 1000, step: -1 }} />

<Story name="Start at 0, Step-1" args={{ startCount: 0, step: -1 }} />
