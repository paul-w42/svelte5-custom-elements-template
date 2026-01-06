import type { Preview } from '@storybook/web-components';

// Side-effect imports: this is what registers the elements
import '../src/lib/Counter.svelte';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
