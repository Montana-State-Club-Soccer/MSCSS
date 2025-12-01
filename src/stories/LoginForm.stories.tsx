import type { Meta, StoryObj } from '@storybook/react';
import { LoginForm } from '../components/LoginForm';

const meta: Meta<typeof LoginForm> = {
  title: 'Components/LoginForm',
  component: LoginForm,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof LoginForm>;

export const Default: Story = {
  args: {
    onSubmit: (data) => console.log('Login submitted:', data),
  },
};

export const WithError: Story = {
  args: {
    onSubmit: (data) => console.log('Login submitted:', data),
    error: 'Invalid email or password',
  },
};

export const Loading: Story = {
  args: {
    onSubmit: (data) => console.log('Login submitted:', data),
    isLoading: true,
  },
};
