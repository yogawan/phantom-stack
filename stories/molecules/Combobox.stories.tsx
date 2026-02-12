import type { Meta, StoryObj } from '@storybook/react';
import { 
  Combobox,
  ComboboxTrigger,
  ComboboxValue,
  ComboboxClear,
  ComboboxPopover,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
  ComboboxEmpty
} from '@/components/molecules/Combobox';
import { InputGroup } from '@/components/molecules/InputGroup';

const frameworks = [
  { value: 'next.js', label: 'Next.js' },
  { value: 'react', label: 'React' },
  { value: 'vue', label: 'Vue' },
  { value: 'svelte', label: 'Svelte' },
  { value: 'angular', label: 'Angular' },
];

const meta = {
  title: 'Molecules/Combobox',
  component: Combobox,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Combobox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <div className="w-[300px]">
      <Combobox>
        <InputGroup>
          <ComboboxInput placeholder="Select framework..." />
          <ComboboxTrigger>
            <ComboboxValue />
          </ComboboxTrigger>
          <ComboboxClear />
        </InputGroup>
        <ComboboxPopover>
          <ComboboxList>
            <ComboboxEmpty>No framework found.</ComboboxEmpty>
            {frameworks.map((framework) => (
              <ComboboxItem key={framework.value} value={framework.value}>
                {framework.label}
              </ComboboxItem>
            ))}
          </ComboboxList>
        </ComboboxPopover>
      </Combobox>
    </div>
  ),
};

export const WithDefaultValue: Story = {
  render: () => (
    <div className="w-[300px]">
      <Combobox defaultValue="react">
        <InputGroup>
          <ComboboxInput placeholder="Select framework..." />
          <ComboboxTrigger>
            <ComboboxValue />
          </ComboboxTrigger>
          <ComboboxClear />
        </InputGroup>
        <ComboboxPopover>
          <ComboboxList>
            <ComboboxEmpty>No framework found.</ComboboxEmpty>
            {frameworks.map((framework) => (
              <ComboboxItem key={framework.value} value={framework.value}>
                {framework.label}
              </ComboboxItem>
            ))}
          </ComboboxList>
        </ComboboxPopover>
      </Combobox>
    </div>
  ),
};

export const Searchable: Story = {
  render: () => (
    <div className="w-[300px]">
      <Combobox>
        <InputGroup>
          <ComboboxInput placeholder="Search framework..." />
          <ComboboxTrigger>
            <ComboboxValue />
          </ComboboxTrigger>
          <ComboboxClear />
        </InputGroup>
        <ComboboxPopover>
          <ComboboxList>
            <ComboboxEmpty>No framework found.</ComboboxEmpty>
            {frameworks.map((framework) => (
              <ComboboxItem key={framework.value} value={framework.value}>
                {framework.label}
              </ComboboxItem>
            ))}
          </ComboboxList>
        </ComboboxPopover>
      </Combobox>
    </div>
  ),
};
