import type { Meta, StoryObj } from '@storybook/react';
import { Alert } from '../components/Alert';

const meta: Meta<typeof Alert> = {
  title: 'Components/Alert',
  component: Alert,
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      options: ['info', 'success', 'warning', 'error'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Alert>;

export const Info: Story = {
  args: {
    type: 'info',
    children: 'This is an informational message.',
  },
};

export const Success: Story = {
  args: {
    type: 'success',
    children: 'Your changes have been saved successfully!',
  },
};

export const Warning: Story = {
  args: {
    type: 'warning',
    children: 'Please review your information before submitting.',
  },
};

export const Error: Story = {
  args: {
    type: 'error',
    children: 'An error occurred while processing your request.',
  },
};

export const Dismissible: Story = {
  args: {
    type: 'info',
    children: 'This alert can be dismissed.',
    onClose: () => console.log('Alert dismissed'),
  },
};

export const LongContent: Story = {
  args: {
    type: 'warning',
    children: 'This is a longer alert message that contains multiple sentences. It demonstrates how the alert component handles longer content. The text should wrap nicely within the alert container.',
  },
};
