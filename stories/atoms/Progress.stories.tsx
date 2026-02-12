import type { Meta, StoryObj } from '@storybook/react';
import { Progress } from '@/components/atoms/Progress';

const meta = {
  title: 'Atoms/Progress',
  component: Progress,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    value: {
      control: { type: 'range', min: 0, max: 100, step: 1 },
      description: 'Current progress value (0-100)',
    },
  },
} satisfies Meta<typeof Progress>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    value: 50,
  },
  render: (args) => (
    <div className="w-[300px] space-y-2">
      <Progress {...args} />
      <p className="text-sm text-center">{args.value}%</p>
    </div>
  ),
};

export const Empty: Story = {
  args: {
    value: 0,
  },
  render: (args) => (
    <div className="w-[300px]">
      <Progress {...args} />
    </div>
  ),
};

export const Half: Story = {
  args: {
    value: 50,
  },
  render: (args) => (
    <div className="w-[300px]">
      <Progress {...args} />
    </div>
  ),
};

export const Complete: Story = {
  args: {
    value: 100,
  },
  render: (args) => (
    <div className="w-[300px]">
      <Progress {...args} />
    </div>
  ),
};
