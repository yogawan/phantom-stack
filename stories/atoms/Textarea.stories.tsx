import type { Meta, StoryObj } from '@storybook/react';
import { Textarea } from '@/components/atoms/Textarea';

const meta = {
  title: 'Atoms/Textarea',
  component: Textarea,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    placeholder: {
      control: 'text',
      description: 'Placeholder text',
    },
    disabled: {
      control: 'boolean',
      description: 'Disable the textarea',
    },
    rows: {
      control: 'number',
      description: 'Number of visible rows',
    },
  },
} satisfies Meta<typeof Textarea>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: 'Enter your message...',
  },
};

export const WithValue: Story = {
  args: {
    value: 'This is a multi-line text area\nwith some content\nin multiple lines.',
    rows: 5,
  },
};

export const Disabled: Story = {
  args: {
    placeholder: 'Disabled textarea',
    disabled: true,
    value: 'Cannot edit this text',
  },
};
