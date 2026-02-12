import type { Meta, StoryObj } from '@storybook/react';
import {
  ItemGroup,
  Item,
  ItemSeparator,
  ItemContent,
  ItemTitle,
  ItemDescription,
  ItemAction,
  ItemGraphic,
  ItemMeta,
} from '@/components/molecules/Item';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/atoms/Avatar';
import { Button } from '@/components/atoms/Button';
import { Badge } from '@/components/atoms/Badge';
import { Mail, MessageSquare, Phone, User, Calendar } from 'lucide-react';

const meta = {
  title: 'Molecules/Item',
  component: Item,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'outline', 'muted'],
      description: 'The visual variant of the item',
    },
    size: {
      control: 'select',
      options: ['default', 'sm'],
      description: 'The size of the item',
    },
  },
} satisfies Meta<typeof Item>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <div className="w-[400px]">
      <ItemGroup>
        <Item>
          <ItemContent>
            <ItemTitle>Item Title</ItemTitle>
            <ItemDescription>Item description goes here</ItemDescription>
          </ItemContent>
        </Item>
      </ItemGroup>
    </div>
  ),
};

export const WithAvatar: Story = {
  render: () => (
    <div className="w-[400px]">
      <ItemGroup>
        <Item>
          <ItemGraphic>
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </ItemGraphic>
          <ItemContent>
            <ItemTitle>John Doe</ItemTitle>
            <ItemDescription>Software Engineer</ItemDescription>
          </ItemContent>
        </Item>
      </ItemGroup>
    </div>
  ),
};

export const WithIcon: Story = {
  render: () => (
    <div className="w-[400px]">
      <ItemGroup>
        <Item>
          <ItemGraphic>
            <Mail className="h-4 w-4" />
          </ItemGraphic>
          <ItemContent>
            <ItemTitle>New Message</ItemTitle>
            <ItemDescription>You have a new message from John</ItemDescription>
          </ItemContent>
        </Item>
      </ItemGroup>
    </div>
  ),
};

export const WithAction: Story = {
  render: () => (
    <div className="w-[400px]">
      <ItemGroup>
        <Item>
          <ItemGraphic>
            <User className="h-4 w-4" />
          </ItemGraphic>
          <ItemContent>
            <ItemTitle>John Doe</ItemTitle>
            <ItemDescription>john@example.com</ItemDescription>
          </ItemContent>
          <ItemAction>
            <Button size="sm" variant="outline">
              View
            </Button>
          </ItemAction>
        </Item>
      </ItemGroup>
    </div>
  ),
};

export const WithMeta: Story = {
  render: () => (
    <div className="w-[400px]">
      <ItemGroup>
        <Item>
          <ItemGraphic>
            <MessageSquare className="h-4 w-4" />
          </ItemGraphic>
          <ItemContent>
            <ItemTitle>Meeting Reminder</ItemTitle>
            <ItemDescription>Team sync at 2:00 PM</ItemDescription>
          </ItemContent>
          <ItemMeta>
            <Badge>New</Badge>
          </ItemMeta>
        </Item>
      </ItemGroup>
    </div>
  ),
};

export const List: Story = {
  render: () => (
    <div className="w-[400px]">
      <ItemGroup>
        <Item>
          <ItemGraphic>
            <Mail className="h-4 w-4" />
          </ItemGraphic>
          <ItemContent>
            <ItemTitle>Email</ItemTitle>
            <ItemDescription>john@example.com</ItemDescription>
          </ItemContent>
        </Item>
        <ItemSeparator />
        <Item>
          <ItemGraphic>
            <Phone className="h-4 w-4" />
          </ItemGraphic>
          <ItemContent>
            <ItemTitle>Phone</ItemTitle>
            <ItemDescription>+1 234 567 8900</ItemDescription>
          </ItemContent>
        </Item>
        <ItemSeparator />
        <Item>
          <ItemGraphic>
            <Calendar className="h-4 w-4" />
          </ItemGraphic>
          <ItemContent>
            <ItemTitle>Birthday</ItemTitle>
            <ItemDescription>January 1, 1990</ItemDescription>
          </ItemContent>
        </Item>
      </ItemGroup>
    </div>
  ),
};

export const Variants: Story = {
  render: () => (
    <div className="w-[400px] space-y-4">
      <ItemGroup>
        <Item variant="default">
          <ItemContent>
            <ItemTitle>Default Variant</ItemTitle>
            <ItemDescription>This is the default variant</ItemDescription>
          </ItemContent>
        </Item>
      </ItemGroup>
      <ItemGroup>
        <Item variant="outline">
          <ItemContent>
            <ItemTitle>Outline Variant</ItemTitle>
            <ItemDescription>This is the outline variant</ItemDescription>
          </ItemContent>
        </Item>
      </ItemGroup>
      <ItemGroup>
        <Item variant="muted">
          <ItemContent>
            <ItemTitle>Muted Variant</ItemTitle>
            <ItemDescription>This is the muted variant</ItemDescription>
          </ItemContent>
        </Item>
      </ItemGroup>
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div className="w-[400px] space-y-4">
      <ItemGroup>
        <Item size="default">
          <ItemContent>
            <ItemTitle>Default Size</ItemTitle>
            <ItemDescription>This is the default size</ItemDescription>
          </ItemContent>
        </Item>
      </ItemGroup>
      <ItemGroup>
        <Item size="sm">
          <ItemContent>
            <ItemTitle>Small Size</ItemTitle>
            <ItemDescription>This is the small size</ItemDescription>
          </ItemContent>
        </Item>
      </ItemGroup>
    </div>
  ),
};
