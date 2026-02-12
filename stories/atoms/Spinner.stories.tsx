import type { Meta, StoryObj } from '@storybook/react';
import { Spinner } from '@/components/atoms/Spinner';

const meta = {
  title: 'Atoms/Spinner',
  component: Spinner,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Spinner>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const Small: Story = {
  args: {
    className: 'size-3',
  },
};

export const Large: Story = {
  args: {
    className: 'size-8',
  },
};

export const WithText: Story = {
  render: () => (
    <div className="flex items-center gap-2">
      <Spinner />
      <span>Loading...</span>
    </div>
  ),
};
