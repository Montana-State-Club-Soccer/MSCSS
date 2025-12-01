import type { Meta, StoryObj } from '@storybook/react';
import { Radio } from '../components/Radio';

const meta: Meta<typeof Radio> = {
  title: 'Components/Radio',
  component: Radio,
  tags: ['autodocs'],
  argTypes: {
    disabled: {
      control: 'boolean',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Radio>;

export const Default: Story = {
  args: {
    label: 'Option 1',
    name: 'option',
    value: '1',
  },
};

export const RadioGroup: Story = {
  render: () => (
    <div className="space-y-2">
      <Radio label="Small" name="size" value="small" />
      <Radio label="Medium" name="size" value="medium" defaultChecked />
      <Radio label="Large" name="size" value="large" />
    </div>
  ),
};

export const WithError: Story = {
  args: {
    label: 'Choose an option',
    error: 'Please select an option',
    name: 'choice',
    value: '1',
  },
};

export const Disabled: Story = {
  args: {
    label: 'Unavailable option',
    disabled: true,
    name: 'option',
    value: '1',
  },
};

export const DisabledChecked: Story = {
  args: {
    label: 'Pre-selected option',
    disabled: true,
    defaultChecked: true,
    name: 'option',
    value: '1',
  },
};
