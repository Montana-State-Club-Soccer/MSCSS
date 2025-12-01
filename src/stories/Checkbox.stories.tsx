import type { Meta, StoryObj } from '@storybook/react';
import { Checkbox } from '../components/Checkbox';

const meta: Meta<typeof Checkbox> = {
  title: 'Components/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
  argTypes: {
    disabled: {
      control: 'boolean',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Checkbox>;

export const Default: Story = {
  args: {
    label: 'Accept terms and conditions',
  },
};

export const WithError: Story = {
  args: {
    label: 'I agree to the privacy policy',
    error: 'You must accept the privacy policy',
  },
};

export const Checked: Story = {
  args: {
    label: 'Remember me',
    defaultChecked: true,
  },
};

export const Disabled: Story = {
  args: {
    label: 'Cannot change this option',
    disabled: true,
  },
};

export const DisabledChecked: Story = {
  args: {
    label: 'Pre-selected option',
    disabled: true,
    defaultChecked: true,
  },
};
