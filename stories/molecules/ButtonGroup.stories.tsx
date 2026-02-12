import type { Meta, StoryObj } from '@storybook/react';
import { ButtonGroup, ButtonGroupText } from '@/components/molecules/ButtonGroup';
import { Button } from '@/components/atoms/Button';
import { Separator } from '@/components/atoms/Separator';
import { Copy, Download, Share2 } from 'lucide-react';

const meta = {
  title: 'Molecules/ButtonGroup',
  component: ButtonGroup,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    orientation: {
      control: 'select',
      options: ['horizontal', 'vertical'],
      description: 'The orientation of the button group',
    },
  },
} satisfies Meta<typeof ButtonGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Horizontal: Story = {
  render: () => (
    <ButtonGroup>
      <Button variant="outline">First</Button>
      <Button variant="outline">Second</Button>
      <Button variant="outline">Third</Button>
    </ButtonGroup>
  ),
};

export const Vertical: Story = {
  render: () => (
    <ButtonGroup orientation="vertical">
      <Button variant="outline">First</Button>
      <Button variant="outline">Second</Button>
      <Button variant="outline">Third</Button>
    </ButtonGroup>
  ),
};

export const WithIcons: Story = {
  render: () => (
    <ButtonGroup>
      <Button variant="outline">
        <Copy /> Copy
      </Button>
      <Button variant="outline">
        <Download /> Download
      </Button>
      <Button variant="outline">
        <Share2 /> Share
      </Button>
    </ButtonGroup>
  ),
};

export const IconOnly: Story = {
  render: () => (
    <ButtonGroup>
      <Button variant="outline" size="icon">
        <Copy />
      </Button>
      <Button variant="outline" size="icon">
        <Download />
      </Button>
      <Button variant="outline" size="icon">
        <Share2 />
      </Button>
    </ButtonGroup>
  ),
};

export const WithText: Story = {
  render: () => (
    <ButtonGroup>
      <Button variant="outline">Copy</Button>
      <Separator orientation="vertical" className="h-4" />
      <ButtonGroupText>Format</ButtonGroupText>
      <Separator orientation="vertical" className="h-4" />
      <Button variant="outline">Paste</Button>
    </ButtonGroup>
  ),
};

export const MixedSizes: Story = {
  render: () => (
    <div className="space-y-4">
      <ButtonGroup>
        <Button variant="outline" size="sm">Small</Button>
        <Button variant="outline" size="sm">Group</Button>
      </ButtonGroup>
      <ButtonGroup>
        <Button variant="outline">Default</Button>
        <Button variant="outline">Group</Button>
      </ButtonGroup>
      <ButtonGroup>
        <Button variant="outline" size="lg">Large</Button>
        <Button variant="outline" size="lg">Group</Button>
      </ButtonGroup>
    </div>
  ),
};
