import type { Meta, StoryObj } from '@storybook/web-components';

// import '../lib/counter.js';

interface CounterArgs {
  startCount: number;
  step: number;
}

const meta: Meta<CounterArgs> = {
  title: 'poly-ui/Counter',
  component: 'ui-counter',
  argTypes: {
    startCount: { control: 'number' },
    step: { control: 'number' },
  },
  render: (args) => {
    const el = document.createElement('ui-counter') as any;
    el.startCount = args.startCount;
    el.step = args.step;
    return el;
  },
};

export default meta;

type Story = StoryObj<CounterArgs>;

export const Default: Story = {
  args: {
    startCount: 0,
    step: 1,
  },
};

export const StartAt100Step10: Story = {
  name: 'Start at 100, Step 10',
  args: {
    startCount: 100,
    step: 10,
  },
};
