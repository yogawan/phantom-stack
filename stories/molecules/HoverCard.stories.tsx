import type { Meta, StoryObj } from '@storybook/react';
import { HoverCard, HoverCardTrigger, HoverCardContent } from '@/components/molecules/HoverCard';
import { Button } from '@/components/atoms/Button';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/atoms/Avatar';
import { CalendarDays } from 'lucide-react';

const meta = {
  title: 'Molecules/HoverCard',
  component: HoverCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof HoverCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <HoverCard>
      <HoverCardTrigger asChild>
        <Button variant="link">@nextjs</Button>
      </HoverCardTrigger>
      <HoverCardContent className="w-80">
        <div className="flex justify-between space-x-4">
          <Avatar>
            <AvatarImage src="https://github.com/vercel.png" />
            <AvatarFallback>VC</AvatarFallback>
          </Avatar>
          <div className="space-y-1">
            <h4 className="text-sm font-semibold">@nextjs</h4>
            <p className="text-sm">
              The React Framework – created and maintained by @vercel.
            </p>
            <div className="flex items-center pt-2">
              <CalendarDays className="mr-2 h-4 w-4 opacity-70" />{' '}
              <span className="text-xs text-muted-foreground">
                Joined December 2021
              </span>
            </div>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  ),
};

export const SimpleText: Story = {
  render: () => (
    <HoverCard>
      <HoverCardTrigger asChild>
        <Button variant="outline">Hover me</Button>
      </HoverCardTrigger>
      <HoverCardContent>
        <div className="space-y-2">
          <h4 className="text-sm font-semibold">Information</h4>
          <p className="text-sm text-muted-foreground">
            This is a simple hover card with just text content.
          </p>
        </div>
      </HoverCardContent>
    </HoverCard>
  ),
};

export const WithLink: Story = {
  render: () => (
    <div className="text-sm">
      For more information, check out{' '}
      <HoverCard>
        <HoverCardTrigger asChild>
          <a
            href="https://github.com"
            className="underline underline-offset-4 hover:text-primary"
          >
            GitHub
          </a>
        </HoverCardTrigger>
        <HoverCardContent className="w-80">
          <div className="space-y-2">
            <h4 className="text-sm font-semibold">GitHub</h4>
            <p className="text-sm text-muted-foreground">
              GitHub is where over 100 million developers shape the future of
              software, together.
            </p>
          </div>
        </HoverCardContent>
      </HoverCard>
      .
    </div>
  ),
};

export const CustomDelay: Story = {
  render: () => (
    <HoverCard openDelay={100} closeDelay={100}>
      <HoverCardTrigger asChild>
        <Button variant="outline">Fast hover</Button>
      </HoverCardTrigger>
      <HoverCardContent>
        <p className="text-sm">This card appears quickly!</p>
      </HoverCardContent>
    </HoverCard>
  ),
};
