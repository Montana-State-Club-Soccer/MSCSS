import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '../components/Button';
import { Mail, ArrowRight, Download } from 'lucide-react';

const meta = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary'],
    },
    iconPosition: {
      control: 'select',
      options: ['left', 'right'],
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: 'Primary Button',
    variant: 'primary',
  },
};

export const Secondary: Story = {
  args: {
    children: 'Secondary Button',
    variant: 'secondary',
  },
};

export const WithIconLeft: Story = {
  args: {
    children: 'Send Email',
    icon: Mail,
    iconPosition: 'left',
  },
};

export const WithIconRight: Story = {
  args: {
    children: 'Continue',
    icon: ArrowRight,
    iconPosition: 'right',
  },
};

export const FullWidth: Story = {
  args: {
    children: 'Full Width Button',
    fullWidth: true,
  },
  parameters: {
    layout: 'padded',
  },
};

export const Disabled: Story = {
  args: {
    children: 'Disabled Button',
    disabled: true,
  },
};

export const WithIcon: Story = {
  args: {
    children: 'Download',
    icon: Download,
  },
};
