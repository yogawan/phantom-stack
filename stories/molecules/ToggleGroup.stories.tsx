import type { Meta, StoryObj } from '@storybook/react';
import { ToggleGroup, ToggleGroupItem } from '@/components/molecules/ToggleGroup';
import { Bold, Italic, Underline, AlignLeft, AlignCenter, AlignRight } from 'lucide-react';

const meta = {
  title: 'Molecules/ToggleGroup',
  component: ToggleGroup,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      options: ['single', 'multiple'],
      description: 'The type of toggle group',
    },
    variant: {
      control: 'select',
      options: ['default', 'outline'],
      description: 'The visual variant',
    },
    size: {
      control: 'select',
      options: ['default', 'sm', 'lg'],
      description: 'The size of the toggle items',
    },
  },
} satisfies Meta<typeof ToggleGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Single: Story = {
  render: () => (
    <ToggleGroup type="single" variant="outline">
      <ToggleGroupItem value="left" aria-label="Align left">
        <AlignLeft />
      </ToggleGroupItem>
      <ToggleGroupItem value="center" aria-label="Align center">
        <AlignCenter />
      </ToggleGroupItem>
      <ToggleGroupItem value="right" aria-label="Align right">
        <AlignRight />
      </ToggleGroupItem>
    </ToggleGroup>
  ),
};

export const Multiple: Story = {
  render: () => (
    <ToggleGroup type="multiple" variant="outline">
      <ToggleGroupItem value="bold" aria-label="Toggle bold">
        <Bold />
      </ToggleGroupItem>
      <ToggleGroupItem value="italic" aria-label="Toggle italic">
        <Italic />
      </ToggleGroupItem>
      <ToggleGroupItem value="underline" aria-label="Toggle underline">
        <Underline />
      </ToggleGroupItem>
    </ToggleGroup>
  ),
};

export const WithText: Story = {
  render: () => (
    <ToggleGroup type="single" variant="outline">
      <ToggleGroupItem value="left">
        <AlignLeft />
        Left
      </ToggleGroupItem>
      <ToggleGroupItem value="center">
        <AlignCenter />
        Center
      </ToggleGroupItem>
      <ToggleGroupItem value="right">
        <AlignRight />
        Right
      </ToggleGroupItem>
    </ToggleGroup>
  ),
};

export const DefaultVariant: Story = {
  render: () => (
    <ToggleGroup type="single" variant="default">
      <ToggleGroupItem value="bold">
        <Bold />
      </ToggleGroupItem>
      <ToggleGroupItem value="italic">
        <Italic />
      </ToggleGroupItem>
      <ToggleGroupItem value="underline">
        <Underline />
      </ToggleGroupItem>
    </ToggleGroup>
  ),
};

export const Small: Story = {
  render: () => (
    <ToggleGroup type="single" variant="outline" size="sm">
      <ToggleGroupItem value="left">
        <AlignLeft />
      </ToggleGroupItem>
      <ToggleGroupItem value="center">
        <AlignCenter />
      </ToggleGroupItem>
      <ToggleGroupItem value="right">
        <AlignRight />
      </ToggleGroupItem>
    </ToggleGroup>
  ),
};

export const Large: Story = {
  render: () => (
    <ToggleGroup type="single" variant="outline" size="lg">
      <ToggleGroupItem value="left">
        <AlignLeft />
      </ToggleGroupItem>
      <ToggleGroupItem value="center">
        <AlignCenter />
      </ToggleGroupItem>
      <ToggleGroupItem value="right">
        <AlignRight />
      </ToggleGroupItem>
    </ToggleGroup>
  ),
};

export const WithSpacing: Story = {
  render: () => (
    <ToggleGroup type="single" variant="outline" spacing={4}>
      <ToggleGroupItem value="bold">
        <Bold />
      </ToggleGroupItem>
      <ToggleGroupItem value="italic">
        <Italic />
      </ToggleGroupItem>
      <ToggleGroupItem value="underline">
        <Underline />
      </ToggleGroupItem>
    </ToggleGroup>
  ),
};

export const Disabled: Story = {
  render: () => (
    <ToggleGroup type="single" variant="outline" disabled>
      <ToggleGroupItem value="bold">
        <Bold />
      </ToggleGroupItem>
      <ToggleGroupItem value="italic">
        <Italic />
      </ToggleGroupItem>
      <ToggleGroupItem value="underline">
        <Underline />
      </ToggleGroupItem>
    </ToggleGroup>
  ),
};

export const WithDefaultValue: Story = {
  render: () => (
    <ToggleGroup type="single" variant="outline" defaultValue="center">
      <ToggleGroupItem value="left">
        <AlignLeft />
      </ToggleGroupItem>
      <ToggleGroupItem value="center">
        <AlignCenter />
      </ToggleGroupItem>
      <ToggleGroupItem value="right">
        <AlignRight />
      </ToggleGroupItem>
    </ToggleGroup>
  ),
};
