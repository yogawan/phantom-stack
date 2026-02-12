import type { Meta, StoryObj } from '@storybook/react';
import { ScrollArea, ScrollBar } from '@/components/molecules/ScrollArea';
import { Separator } from '@/components/atoms/Separator';

const meta = {
  title: 'Molecules/ScrollArea',
  component: ScrollArea,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ScrollArea>;

export default meta;
type Story = StoryObj<typeof meta>;

const tags = Array.from({ length: 50 }).map(
  (_, i, a) => `v1.2.0-beta.${a.length - i}`
);

export const Vertical: Story = {
  render: () => (
    <ScrollArea className="h-72 w-48 rounded-md border">
      <div className="p-4">
        <h4 className="mb-4 text-sm font-medium leading-none">Tags</h4>
        {tags.map((tag) => (
          <div key={tag}>
            <div className="text-sm">
              {tag}
            </div>
            <Separator className="my-2" />
          </div>
        ))}
      </div>
    </ScrollArea>
  ),
};

export const Horizontal: Story = {
  render: () => (
    <ScrollArea className="w-96 whitespace-nowrap rounded-md border">
      <div className="flex w-max space-x-4 p-4">
        {Array.from({ length: 20 }).map((_, i) => (
          <figure key={i} className="shrink-0">
            <div className="overflow-hidden rounded-md">
              <div className="h-[150px] w-[150px] bg-muted flex items-center justify-center">
                <span className="text-sm text-muted-foreground">Image {i + 1}</span>
              </div>
            </div>
            <figcaption className="pt-2 text-xs text-muted-foreground">
              Photo {i + 1}
            </figcaption>
          </figure>
        ))}
      </div>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  ),
};

export const Both: Story = {
  render: () => (
    <ScrollArea className="h-72 w-96 rounded-md border">
      <div className="p-4">
        <h4 className="mb-4 text-sm font-medium leading-none">Content Area</h4>
        <div className="w-[800px]">
          {Array.from({ length: 30 }).map((_, i) => (
            <div key={i} className="mb-2">
              <div className="text-sm">
                This is a very long line of text that extends beyond the visible area to demonstrate horizontal scrolling. Line {i + 1}
              </div>
              <Separator className="my-2" />
            </div>
          ))}
        </div>
      </div>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  ),
};

export const CustomHeight: Story = {
  render: () => (
    <ScrollArea className="h-96 w-64 rounded-md border">
      <div className="p-4">
        <h4 className="mb-4 text-sm font-medium leading-none">Custom Height</h4>
        {Array.from({ length: 40 }).map((_, i) => (
          <div key={i}>
            <div className="text-sm">Item {i + 1}</div>
            <Separator className="my-2" />
          </div>
        ))}
      </div>
    </ScrollArea>
  ),
};

export const WithPadding: Story = {
  render: () => (
    <ScrollArea className="h-72 w-48 rounded-md border">
      <div className="p-6 space-y-3">
        <h4 className="text-sm font-medium leading-none">With Padding</h4>
        {Array.from({ length: 30 }).map((_, i) => (
          <div key={i} className="text-sm">
            Item {i + 1}
          </div>
        ))}
      </div>
    </ScrollArea>
  ),
};
