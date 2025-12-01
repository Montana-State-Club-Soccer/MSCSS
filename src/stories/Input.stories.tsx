import type { Meta, StoryObj } from '@storybook/react';
import { Input } from '../components/Input';
import { Mail, Search } from 'lucide-react';

const meta = {
  title: 'Components/Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: 'Enter text...',
  },
};

export const WithLabel: Story = {
  args: {
    label: 'Email Address',
    placeholder: 'you@example.com',
    type: 'email',
  },
};

export const WithError: Story = {
  args: {
    label: 'Password',
    type: 'password',
    error: 'Password must be at least 8 characters',
    placeholder: '••••••••',
  },
};

export const WithHelperText: Story = {
  args: {
    label: 'Username',
    helperText: 'Choose a unique username',
    placeholder: 'johndoe',
  },
};

export const WithIcon: Story = {
  args: {
    label: 'Email',
    icon: <Mail className="w-5 h-5" />,
    placeholder: 'you@example.com',
    type: 'email',
  },
};

export const SearchInput: Story = {
  args: {
    icon: <Search className="w-5 h-5" />,
    placeholder: 'Search players...',
  },
};

export const Disabled: Story = {
  args: {
    label: 'Disabled Input',
    placeholder: 'Cannot edit',
    disabled: true,
  },
};

export const FullWidth: Story = {
  args: {
    label: 'Full Width',
    placeholder: 'This input spans full width',
    fullWidth: true,
  },
  parameters: {
    layout: 'padded',
  },
};
