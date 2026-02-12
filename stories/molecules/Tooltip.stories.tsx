import type { Meta, StoryObj } from '@storybook/react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/molecules/Tooltip';
import { Button } from '@/components/atoms/Button';

const meta = {
  title: 'Molecules/Tooltip',
  component: Tooltip,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <TooltipProvider>
        <Story />
      </TooltipProvider>
    ),
  ],
} satisfies Meta<typeof Tooltip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button variant="outline">Hover me</Button>
      </TooltipTrigger>
      <TooltipContent>
        <p>This is a tooltip</p>
      </TooltipContent>
    </Tooltip>
  ),
};

export const WithTextTrigger: Story = {
  render: () => (
    <Tooltip>
      <TooltipTrigger asChild>
        <span className="underline cursor-help">Hover over me</span>
      </TooltipTrigger>
      <TooltipContent>
        <p>Additional information appears here</p>
      </TooltipContent>
    </Tooltip>
  ),
};

export const MultiLine: Story = {
  render: () => (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button>Info</Button>
      </TooltipTrigger>
      <TooltipContent>
        <p>This tooltip has multiple lines</p>
        <p>of helpful information</p>
      </TooltipContent>
    </Tooltip>
  ),
};
