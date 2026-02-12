import type { Meta, StoryObj } from '@storybook/react';
import { Toggle } from '@/components/atoms/Toggle';
import { Bold, Italic, Underline } from 'lucide-react';

const meta = {
  title: 'Atoms/Toggle',
  component: Toggle,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'outline'],
      description: 'The visual style variant',
    },
    size: {
      control: 'select',
      options: ['default', 'sm', 'lg'],
      description: 'The size of the toggle',
    },
    disabled: {
      control: 'boolean',
      description: 'Disable the toggle',
    },
  },
} satisfies Meta<typeof Toggle>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: <Bold />,
  },
};

export const WithText: Story = {
  args: {
    children: 'Toggle',
  },
};

export const Outline: Story = {
  args: {
    variant: 'outline',
    children: <Italic />,
  },
};

export const Small: Story = {
  args: {
    size: 'sm',
    children: <Underline />,
  },
};

export const Large: Story = {
  args: {
    size: 'lg',
    children: <Bold />,
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    children: <Bold />,
  },
};
