import type { Meta, StoryObj } from '@storybook/react';
import { DirectionProvider, useDirection } from '@/components/atoms/Direction';

// Demo component to show direction effect
const DirectionDemo = () => {
  const dir = useDirection();
  
  return (
    <div className="space-y-4 p-6 border rounded-lg bg-background">
      <div className="text-sm font-medium">Current Direction: {dir}</div>
      <div className="space-y-2">
        <p className="text-muted-foreground">
          This text will flow according to the direction: {dir === 'rtl' ? 'Right-to-Left' : 'Left-to-Right'}
        </p>
        <div className="flex gap-2 items-center">
          <div className="h-8 w-8 bg-primary text-primary-foreground rounded flex items-center justify-center">1</div>
          <div className="h-8 w-8 bg-primary text-primary-foreground rounded flex items-center justify-center">2</div>
          <div className="h-8 w-8 bg-primary text-primary-foreground rounded flex items-center justify-center">3</div>
        </div>
      </div>
    </div>
  );
};

const meta = {
  title: 'Atoms/Direction',
  component: DirectionProvider,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A provider component for setting text direction (LTR/RTL) and a hook to read the current direction.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    dir: {
      control: 'select',
      options: ['ltr', 'rtl'],
      description: 'The text direction',
    },
  },
} satisfies Meta<typeof DirectionProvider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const LeftToRight: Story = {
  render: (args) => (
    <DirectionProvider {...args} dir="ltr">
      <DirectionDemo />
    </DirectionProvider>
  ),
};

export const RightToLeft: Story = {
  render: (args) => (
    <DirectionProvider {...args} dir="rtl">
      <DirectionDemo />
    </DirectionProvider>
  ),
};

export const WithArabicText: Story = {
  render: (args) => (
    <DirectionProvider {...args} dir="rtl">
      <div className="space-y-4 p-6 border rounded-lg bg-background" dir="rtl">
        <div className="text-sm font-medium">الاتجاه الحالي: من اليمين إلى اليسار</div>
        <div className="space-y-2">
          <p className="text-muted-foreground">
            هذا نص تجريبي باللغة العربية لإظهار تأثير الاتجاه من اليمين إلى اليسار
          </p>
          <div className="flex gap-2 items-center">
            <div className="h-8 w-8 bg-primary text-primary-foreground rounded flex items-center justify-center">١</div>
            <div className="h-8 w-8 bg-primary text-primary-foreground rounded flex items-center justify-center">٢</div>
            <div className="h-8 w-8 bg-primary text-primary-foreground rounded flex items-center justify-center">٣</div>
          </div>
        </div>
      </div>
    </DirectionProvider>
  ),
};

export const UseDirectionHook: Story = {
  render: (args) => (
    <div className="space-y-4">
      <DirectionProvider {...args} dir="ltr">
        <div className="p-4 border rounded-lg">
          <DirectionDemo />
        </div>
      </DirectionProvider>
      <DirectionProvider {...args} dir="rtl">
        <div className="p-4 border rounded-lg">
          <DirectionDemo />
        </div>
      </DirectionProvider>
    </div>
  ),
};
