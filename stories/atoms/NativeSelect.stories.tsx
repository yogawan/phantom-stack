import type { Meta, StoryObj } from '@storybook/react';
import { NativeSelect, NativeSelectOption } from '@/components/atoms/NativeSelect';

const meta = {
  title: 'Atoms/NativeSelect',
  component: NativeSelect,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['default', 'sm'],
      description: 'The size of the select',
    },
    disabled: {
      control: 'boolean',
      description: 'Disable the select',
    },
  },
} satisfies Meta<typeof NativeSelect>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <NativeSelect>
      <NativeSelectOption value="">Select an option</NativeSelectOption>
      <NativeSelectOption value="option1">Option 1</NativeSelectOption>
      <NativeSelectOption value="option2">Option 2</NativeSelectOption>
      <NativeSelectOption value="option3">Option 3</NativeSelectOption>
    </NativeSelect>
  ),
};

export const Small: Story = {
  render: () => (
    <NativeSelect size="sm">
      <NativeSelectOption value="">Select</NativeSelectOption>
      <NativeSelectOption value="option1">Option 1</NativeSelectOption>
      <NativeSelectOption value="option2">Option 2</NativeSelectOption>
    </NativeSelect>
  ),
};

export const Disabled: Story = {
  render: () => (
    <NativeSelect disabled>
      <NativeSelectOption value="">Disabled</NativeSelectOption>
      <NativeSelectOption value="option1">Option 1</NativeSelectOption>
    </NativeSelect>
  ),
};
