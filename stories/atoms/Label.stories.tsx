import type { Meta, StoryObj } from '@storybook/react';
import { Label } from '@/components/atoms/Label';

const meta = {
  title: 'Atoms/Label',
  component: Label,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Label>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Label Text',
  },
};

export const Required: Story = {
  render: () => (
    <Label>
      Email <span className="text-destructive">*</span>
    </Label>
  ),
};

export const WithDescription: Story = {
  render: () => (
    <div className="space-y-1">
      <Label>Username</Label>
      <p className="text-xs text-muted-foreground">Choose a unique username</p>
    </div>
  ),
};
