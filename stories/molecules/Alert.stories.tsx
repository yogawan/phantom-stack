import type { Meta, StoryObj } from '@storybook/react';
import { Alert, AlertTitle, AlertDescription } from '@/components/molecules/Alert';
import { AlertCircle, Terminal } from 'lucide-react';

const meta = {
  title: 'Molecules/Alert',
  component: Alert,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'destructive'],
      description: 'The visual style variant of the alert',
    },
  },
} satisfies Meta<typeof Alert>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <div className="w-[400px]">
      <Alert>
        <Terminal />
        <AlertTitle>Heads up!</AlertTitle>
        <AlertDescription>
          You can add components to your app using the cli.
        </AlertDescription>
      </Alert>
    </div>
  ),
};

export const Destructive: Story = {
  render: () => (
    <div className="w-[400px]">
      <Alert variant="destructive">
        <AlertCircle />
        <AlertTitle>Error</AlertTitle>
        <AlertDescription>
          Your session has expired. Please log in again.
        </AlertDescription>
      </Alert>
    </div>
  ),
};

export const TitleOnly: Story = {
  render: () => (
    <div className="w-[400px]">
      <Alert>
        <Terminal />
        <AlertTitle>This is an alert title</AlertTitle>
      </Alert>
    </div>
  ),
};

export const WithoutIcon: Story = {
  render: () => (
    <div className="w-[400px]">
      <Alert>
        <AlertTitle>Simple Alert</AlertTitle>
        <AlertDescription>
          This alert doesn't have an icon.
        </AlertDescription>
      </Alert>
    </div>
  ),
};
