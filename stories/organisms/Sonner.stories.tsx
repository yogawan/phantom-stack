import type { Meta, StoryObj } from '@storybook/react';
import { Toaster } from '@/components/organisms/Sonner';
import { Button } from '@/components/atoms/Button';
import { toast } from 'sonner';

const meta = {
  title: 'Organisms/Sonner',
  component: Toaster,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Toaster>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <div className="space-y-4">
      <Toaster />
      <Button
        onClick={() =>
          toast('Event has been created', {
            description: 'Sunday, December 03, 2023 at 9:00 AM',
          })
        }
      >
        Show Toast
      </Button>
    </div>
  ),
};

export const Success: Story = {
  render: () => (
    <div className="space-y-4">
      <Toaster />
      <Button
        onClick={() =>
          toast.success('Success!', {
            description: 'Your changes have been saved.',
          })
        }
      >
        Show Success Toast
      </Button>
    </div>
  ),
};

export const Error: Story = {
  render: () => (
    <div className="space-y-4">
      <Toaster />
      <Button
        onClick={() =>
          toast.error('Error!', {
            description: 'Something went wrong. Please try again.',
          })
        }
      >
        Show Error Toast
      </Button>
    </div>
  ),
};

export const Warning: Story = {
  render: () => (
    <div className="space-y-4">
      <Toaster />
      <Button
        onClick={() =>
          toast.warning('Warning!', {
            description: 'This action cannot be undone.',
          })
        }
      >
        Show Warning Toast
      </Button>
    </div>
  ),
};

export const Info: Story = {
  render: () => (
    <div className="space-y-4">
      <Toaster />
      <Button
        onClick={() =>
          toast.info('Info', {
            description: 'Here is some useful information.',
          })
        }
      >
        Show Info Toast
      </Button>
    </div>
  ),
};

export const Loading: Story = {
  render: () => (
    <div className="space-y-4">
      <Toaster />
      <Button
        onClick={() => {
          const loadingToast = toast.loading('Loading...', {
            description: 'Please wait while we process your request.',
          });
          setTimeout(() => {
            toast.dismiss(loadingToast);
            toast.success('Done!', {
              description: 'Your request has been completed.',
            });
          }, 3000);
        }}
      >
        Show Loading Toast
      </Button>
    </div>
  ),
};

export const WithAction: Story = {
  render: () => (
    <div className="space-y-4">
      <Toaster />
      <Button
        onClick={() =>
          toast('Event has been created', {
            description: 'Sunday, December 03, 2023 at 9:00 AM',
            action: {
              label: 'Undo',
              onClick: () => console.log('Undo'),
            },
          })
        }
      >
        Show Toast with Action
      </Button>
    </div>
  ),
};

export const Promise: Story = {
  render: () => (
    <div className="space-y-4">
      <Toaster />
      <Button
        onClick={() => {
          const promise = () =>
            new Promise((resolve) => setTimeout(() => resolve({ name: 'Sonner' }), 2000));

          toast.promise(promise, {
            loading: 'Loading...',
            success: () => {
              return 'Success! Your data has been loaded.';
            },
            error: 'Error loading data',
          });
        }}
      >
        Show Promise Toast
      </Button>
    </div>
  ),
};

export const Multiple: Story = {
  render: () => (
    <div className="space-y-4">
      <Toaster />
      <div className="flex gap-2">
        <Button onClick={() => toast('First notification')}>Toast 1</Button>
        <Button onClick={() => toast('Second notification')}>Toast 2</Button>
        <Button onClick={() => toast('Third notification')}>Toast 3</Button>
      </div>
    </div>
  ),
};

export const CustomDuration: Story = {
  render: () => (
    <div className="space-y-4">
      <Toaster />
      <div className="flex gap-2">
        <Button
          onClick={() =>
            toast('Short duration', {
              duration: 1000,
            })
          }
        >
          1 Second
        </Button>
        <Button
          onClick={() =>
            toast('Long duration', {
              duration: 10000,
            })
          }
        >
          10 Seconds
        </Button>
      </div>
    </div>
  ),
};
