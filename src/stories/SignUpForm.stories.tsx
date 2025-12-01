import type { Meta, StoryObj } from '@storybook/react';
import { SignUpForm } from '../components/SignUpForm';

const meta: Meta<typeof SignUpForm> = {
  title: 'Components/SignUpForm',
  component: SignUpForm,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof SignUpForm>;

export const Default: Story = {
  args: {
    onSubmit: (data) => console.log('Sign up submitted:', data),
  },
};

export const WithError: Story = {
  args: {
    onSubmit: (data) => console.log('Sign up submitted:', data),
    error: 'Email address is already registered',
  },
};

export const Loading: Story = {
  args: {
    onSubmit: (data) => console.log('Sign up submitted:', data),
    isLoading: true,
  },
};
