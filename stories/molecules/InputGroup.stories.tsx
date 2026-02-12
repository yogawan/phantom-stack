import type { Meta, StoryObj } from '@storybook/react';
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
  InputGroupButton,
  InputGroupTextarea,
} from '@/components/molecules/InputGroup';
import { Button } from '@/components/atoms/Button';
import { Kbd } from '@/components/atoms/Kbd';
import { Search, Send, DollarSign, AtSign, Calendar } from 'lucide-react';

const meta = {
  title: 'Molecules/InputGroup',
  component: InputGroup,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof InputGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <div className="w-[400px]">
      <InputGroup>
        <InputGroupAddon>
          <Search />
        </InputGroupAddon>
        <InputGroupInput placeholder="Search..." />
      </InputGroup>
    </div>
  ),
};

export const WithButton: Story = {
  render: () => (
    <div className="w-[400px]">
      <InputGroup>
        <InputGroupInput placeholder="Enter your email..." />
        <InputGroupButton>
          <Send />
        </InputGroupButton>
      </InputGroup>
    </div>
  ),
};

export const WithCurrency: Story = {
  render: () => (
    <div className="w-[400px]">
      <InputGroup>
        <InputGroupAddon>
          <DollarSign />
        </InputGroupAddon>
        <InputGroupInput type="number" placeholder="0.00" />
        <InputGroupAddon align="inline-end">USD</InputGroupAddon>
      </InputGroup>
    </div>
  ),
};

export const WithEmail: Story = {
  render: () => (
    <div className="w-[400px]">
      <InputGroup>
        <InputGroupAddon>
          <AtSign />
        </InputGroupAddon>
        <InputGroupInput type="email" placeholder="username" />
        <InputGroupAddon align="inline-end">@example.com</InputGroupAddon>
      </InputGroup>
    </div>
  ),
};

export const WithKeyboard: Story = {
  render: () => (
    <div className="w-[400px]">
      <InputGroup>
        <InputGroupAddon>
          <Search />
        </InputGroupAddon>
        <InputGroupInput placeholder="Search..." />
        <InputGroupAddon align="inline-end">
          <Kbd>⌘K</Kbd>
        </InputGroupAddon>
      </InputGroup>
    </div>
  ),
};

export const BlockStart: Story = {
  render: () => (
    <div className="w-[400px]">
      <InputGroup>
        <InputGroupAddon align="block-start">
          <Calendar />
          Label
        </InputGroupAddon>
        <InputGroupInput placeholder="Enter value..." />
      </InputGroup>
    </div>
  ),
};

export const BlockEnd: Story = {
  render: () => (
    <div className="w-[400px]">
      <InputGroup>
        <InputGroupInput placeholder="Enter value..." />
        <InputGroupAddon align="block-end">
          <Calendar />
          Helper text
        </InputGroupAddon>
      </InputGroup>
    </div>
  ),
};

export const WithTextarea: Story = {
  render: () => (
    <div className="w-[400px]">
      <InputGroup>
        <InputGroupAddon align="block-start">Message</InputGroupAddon>
        <InputGroupTextarea placeholder="Type your message..." rows={4} />
        <InputGroupButton align="inline-end">
          <Send />
        </InputGroupButton>
      </InputGroup>
    </div>
  ),
};

export const Multiple: Story = {
  render: () => (
    <div className="w-[400px] space-y-4">
      <InputGroup>
        <InputGroupAddon>From</InputGroupAddon>
        <InputGroupInput type="date" />
        <InputGroupAddon align="inline-end">To</InputGroupAddon>
        <InputGroupInput type="date" />
      </InputGroup>
    </div>
  ),
};
