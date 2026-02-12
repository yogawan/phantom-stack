import type { Meta, StoryObj } from '@storybook/react';
import { Field, FieldLabel, FieldDescription, FieldError } from '@/components/molecules/Field';
import { Input } from '@/components/atoms/Input';
import { Textarea } from '@/components/atoms/Textarea';

const meta = {
  title: 'Molecules/Field',
  component: Field,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    orientation: {
      control: 'select',
      options: ['vertical', 'horizontal', 'responsive'],
      description: 'Layout orientation of the field',
    },
  },
} satisfies Meta<typeof Field>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <div className="w-[400px]">
      <Field>
        <FieldLabel>Email</FieldLabel>
        <Input type="email" placeholder="Enter your email" />
        <FieldDescription>We'll never share your email.</FieldDescription>
      </Field>
    </div>
  ),
};

export const WithError: Story = {
  render: () => (
    <div className="w-[400px]">
      <Field data-invalid="true">
        <FieldLabel>Username</FieldLabel>
        <Input placeholder="Enter username" aria-invalid />
        <FieldError>Username is required</FieldError>
      </Field>
    </div>
  ),
};

export const WithTextarea: Story = {
  render: () => (
    <div className="w-[400px]">
      <Field>
        <FieldLabel>Bio</FieldLabel>
        <Textarea placeholder="Tell us about yourself" />
        <FieldDescription>Brief description for your profile.</FieldDescription>
      </Field>
    </div>
  ),
};

export const Horizontal: Story = {
  render: () => (
    <div className="w-[500px]">
      <Field orientation="horizontal">
        <FieldLabel className="w-32">Email</FieldLabel>
        <div className="flex-1">
          <Input type="email" placeholder="Enter your email" />
          <FieldDescription>We'll never share your email.</FieldDescription>
        </div>
      </Field>
    </div>
  ),
};
