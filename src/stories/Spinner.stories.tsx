import type { Meta, StoryObj } from '@storybook/react';
import { Spinner } from '../components/Spinner';

const meta: Meta<typeof Spinner> = {
  title: 'Components/Spinner',
  component: Spinner,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Spinner>;

export const Default: Story = {
  args: {},
};

export const WithLabel: Story = {
  args: {
    label: 'Loading...',
  },
};

export const LoadingData: Story = {
  args: {
    label: 'Loading data...',
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    label: 'Processing...',
  },
};

export const InContainer: Story = {
  render: () => (
    <div className="flex items-center justify-center h-64 border border-gray-200 rounded">
      <Spinner label="Loading content..." />
    </div>
  ),
};
