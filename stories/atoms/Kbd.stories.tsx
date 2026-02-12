import type { Meta, StoryObj } from '@storybook/react';
import { Kbd, KbdGroup } from '@/components/atoms/Kbd';
import { Command } from 'lucide-react';

const meta = {
  title: 'Atoms/Kbd',
  component: Kbd,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Kbd>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Ctrl',
  },
};

export const WithIcon: Story = {
  render: () => (
    <Kbd>
      <Command className="size-3" />
    </Kbd>
  ),
};

export const Group: Story = {
  render: () => (
    <KbdGroup>
      <Kbd>
        <Command className="size-3" />
      </Kbd>
      <Kbd>K</Kbd>
    </KbdGroup>
  ),
};

export const MultipleKeys: Story = {
  render: () => (
    <div className="flex items-center gap-2">
      <span>Press</span>
      <KbdGroup>
        <Kbd>Ctrl</Kbd>
        <Kbd>Shift</Kbd>
        <Kbd>P</Kbd>
      </KbdGroup>
      <span>to open command palette</span>
    </div>
  ),
};
