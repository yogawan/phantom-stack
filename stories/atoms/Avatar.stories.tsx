import type { Meta, StoryObj } from '@storybook/react';
import { Avatar, AvatarImage, AvatarFallback, AvatarBadge } from '@/components/atoms/Avatar';

const meta = {
  title: 'Atoms/Avatar',
  component: Avatar,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'default', 'lg'],
      description: 'The size of the avatar',
    },
  },
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <Avatar {...args}>
      <AvatarImage src="https://github.com/shadcn.png" alt="Avatar" />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  ),
};

export const WithFallback: Story = {
  render: (args) => (
    <Avatar {...args}>
      <AvatarImage src="/invalid-image.jpg" alt="Avatar" />
      <AvatarFallback>JD</AvatarFallback>
    </Avatar>
  ),
};

export const Small: Story = {
  render: (args) => (
    <Avatar {...args} size="sm">
      <AvatarImage src="https://github.com/shadcn.png" alt="Avatar" />
      <AvatarFallback>SM</AvatarFallback>
    </Avatar>
  ),
};

export const Large: Story = {
  render: (args) => (
    <Avatar {...args} size="lg">
      <AvatarImage src="https://github.com/shadcn.png" alt="Avatar" />
      <AvatarFallback>LG</AvatarFallback>
    </Avatar>
  ),
};

export const WithBadge: Story = {
  render: (args) => (
    <Avatar {...args}>
      <AvatarImage src="https://github.com/shadcn.png" alt="Avatar" />
      <AvatarFallback>CN</AvatarFallback>
      <AvatarBadge />
    </Avatar>
  ),
};
