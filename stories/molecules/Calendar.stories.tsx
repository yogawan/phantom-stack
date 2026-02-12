import type { Meta, StoryObj } from '@storybook/react';
import { Calendar } from '@/components/molecules/Calendar';
import { useState } from 'react';

const meta = {
  title: 'Molecules/Calendar',
  component: Calendar,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    mode: {
      control: 'select',
      options: ['single', 'multiple', 'range'],
      description: 'The selection mode of the calendar',
    },
  },
} satisfies Meta<typeof Calendar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Single: Story = {
  render: () => {
    const [date, setDate] = useState<Date | undefined>(new Date());
    
    return (
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        className="rounded-md border"
      />
    );
  },
};

export const Multiple: Story = {
  render: () => {
    const [dates, setDates] = useState<Date[] | undefined>([]);
    
    return (
      <Calendar
        mode="multiple"
        selected={dates}
        onSelect={setDates}
        className="rounded-md border"
      />
    );
  },
};

export const Range: Story = {
  render: () => {
    const [range, setRange] = useState<{ from?: Date; to?: Date } | undefined>();
    
    return (
      <Calendar
        mode="range"
        selected={range}
        onSelect={setRange}
        className="rounded-md border"
      />
    );
  },
};

export const WithoutOutsideDays: Story = {
  render: () => {
    const [date, setDate] = useState<Date | undefined>(new Date());
    
    return (
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        showOutsideDays={false}
        className="rounded-md border"
      />
    );
  },
};

export const WithDropdowns: Story = {
  render: () => {
    const [date, setDate] = useState<Date | undefined>(new Date());
    
    return (
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        captionLayout="dropdown"
        fromYear={2020}
        toYear={2030}
        className="rounded-md border"
      />
    );
  },
};

export const Disabled: Story = {
  render: () => {
    const [date, setDate] = useState<Date | undefined>(new Date());
    
    return (
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        disabled={{ before: new Date() }}
        className="rounded-md border"
      />
    );
  },
};
