import type { Meta, StoryObj } from '@storybook/react';
import { Slider } from '@/components/organisms/Slider';

const meta = {
  title: 'Organisms/Slider',
  component: Slider,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    min: {
      control: 'number',
      description: 'Minimum value',
    },
    max: {
      control: 'number',
      description: 'Maximum value',
    },
    step: {
      control: 'number',
      description: 'Step increment',
    },
    defaultValue: {
      control: 'object',
      description: 'Default value(s)',
    },
  },
} satisfies Meta<typeof Slider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <div className="w-[400px] space-y-4">
      <Slider defaultValue={[50]} max={100} step={1} />
      <p className="text-sm text-center text-muted-foreground">Single value slider</p>
    </div>
  ),
};

export const Range: Story = {
  render: () => (
    <div className="w-[400px] space-y-4">
      <Slider defaultValue={[25, 75]} max={100} step={1} />
      <p className="text-sm text-center text-muted-foreground">Range slider</p>
    </div>
  ),
};

export const WithSteps: Story = {
  render: () => (
    <div className="w-[400px] space-y-4">
      <Slider defaultValue={[50]} max={100} step={10} />
      <p className="text-sm text-center text-muted-foreground">Step: 10</p>
    </div>
  ),
};

export const CustomRange: Story = {
  render: () => (
    <div className="w-[400px] space-y-4">
      <Slider defaultValue={[500]} min={0} max={1000} step={50} />
      <p className="text-sm text-center text-muted-foreground">Range: 0-1000, Step: 50</p>
    </div>
  ),
};

export const Disabled: Story = {
  render: () => (
    <div className="w-[400px] space-y-4">
      <Slider defaultValue={[50]} max={100} disabled />
      <p className="text-sm text-center text-muted-foreground">Disabled slider</p>
    </div>
  ),
};
