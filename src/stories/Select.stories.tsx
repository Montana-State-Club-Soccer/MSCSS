import type { Meta, StoryObj } from '@storybook/react';
import { Select } from '../components/Select';

const meta: Meta<typeof Select> = {
  title: 'Components/Select',
  component: Select,
  tags: ['autodocs'],
  argTypes: {
    disabled: {
      control: 'boolean',
    },
    fullWidth: {
      control: 'boolean',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Select>;

export const Default: Story = {
  args: {
    label: 'Country',
    children: (
      <>
        <option value="">Select a country...</option>
        <option value="us">United States</option>
        <option value="ca">Canada</option>
        <option value="uk">United Kingdom</option>
      </>
    ),
  },
};

export const WithHelperText: Story = {
  args: {
    label: 'Position',
    helperText: 'Select your playing position',
    children: (
      <>
        <option value="">Select position...</option>
        <option value="gk">Goalkeeper</option>
        <option value="df">Defender</option>
        <option value="mf">Midfielder</option>
        <option value="fw">Forward</option>
      </>
    ),
  },
};

export const WithError: Story = {
  args: {
    label: 'Team',
    error: 'Please select a team',
    children: (
      <>
        <option value="">Select a team...</option>
        <option value="team1">Team 1</option>
        <option value="team2">Team 2</option>
      </>
    ),
  },
};

export const Disabled: Story = {
  args: {
    label: 'Status',
    disabled: true,
    children: (
      <>
        <option value="active">Active</option>
        <option value="inactive">Inactive</option>
      </>
    ),
  },
};
