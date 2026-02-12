import type { Meta, StoryObj } from '@storybook/react';
import { Empty, EmptyHeader, EmptyMedia, EmptyTitle, EmptyDescription, EmptyContent } from '@/components/molecules/Empty';
import { Button } from '@/components/atoms/Button';
import { Plus, Inbox } from 'lucide-react';

const meta = {
  title: 'Molecules/Empty',
  component: Empty,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Empty>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <div className="w-[500px]">
      <Empty>
        <EmptyHeader>
          <EmptyMedia>
            <Inbox className="size-12 text-muted-foreground" />
          </EmptyMedia>
          <EmptyTitle>No messages</EmptyTitle>
          <EmptyDescription>
            You don't have any messages yet. Start a conversation to see them here.
          </EmptyDescription>
        </EmptyHeader>
        <EmptyContent>
          <Button>
            <Plus />
            New Message
          </Button>
        </EmptyContent>
      </Empty>
    </div>
  ),
};

export const WithIcon: Story = {
  render: () => (
    <div className="w-[500px]">
      <Empty>
        <EmptyHeader>
          <EmptyMedia variant="icon">
            <Inbox />
          </EmptyMedia>
          <EmptyTitle>No items found</EmptyTitle>
          <EmptyDescription>
            Get started by creating a new item.
          </EmptyDescription>
        </EmptyHeader>
        <EmptyContent>
          <Button>
            <Plus />
            Create Item
          </Button>
        </EmptyContent>
      </Empty>
    </div>
  ),
};

export const Simple: Story = {
  render: () => (
    <div className="w-[500px]">
      <Empty>
        <EmptyHeader>
          <EmptyTitle>Nothing here yet</EmptyTitle>
          <EmptyDescription>
            Content will appear here once available.
          </EmptyDescription>
        </EmptyHeader>
      </Empty>
    </div>
  ),
};
