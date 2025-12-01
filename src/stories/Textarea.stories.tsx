import type { Meta, StoryObj } from '@storybook/react';
import { Textarea } from '../components/Textarea';

const meta: Meta<typeof Textarea> = {
  title: 'Components/Textarea',
  component: Textarea,
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
type Story = StoryObj<typeof Textarea>;

export const Default: Story = {
  args: {
    label: 'Message',
    placeholder: 'Enter your message...',
  },
};

export const WithHelperText: Story = {
  args: {
    label: 'Comments',
    placeholder: 'Enter your comments...',
    helperText: 'Maximum 500 characters',
  },
};

export const WithError: Story = {
  args: {
    label: 'Description',
    placeholder: 'Enter description...',
    error: 'This field is required',
  },
};

export const Disabled: Story = {
  args: {
    label: 'Message',
    placeholder: 'Cannot edit this field',
    disabled: true,
  },
};

export const FullWidth: Story = {
  args: {
    label: 'Message',
    placeholder: 'Full width textarea',
    fullWidth: true,
  },
};
