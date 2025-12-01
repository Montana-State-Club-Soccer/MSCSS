import type { Meta, StoryObj } from '@storybook/react';
import { Heading } from '../components/Heading';

const meta = {
  title: 'Components/Typography/Heading',
  component: Heading,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    as: {
      control: 'select',
      options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
    },
    variant: {
      control: 'select',
      options: ['primary', 'secondary'],
    },
  },
} satisfies Meta<typeof Heading>;

export default meta;
type Story = StoryObj<typeof meta>;

export const H1: Story = {
  args: {
    children: 'Montana State Club Soccer',
    as: 'h1',
  },
};

export const H1Secondary: Story = {
  args: {
    children: 'Montana State Club Soccer',
    as: 'h1',
    variant: 'secondary',
  },
};

export const H2: Story = {
  args: {
    children: 'Season 2025 Schedule',
    as: 'h2',
  },
};

export const H3: Story = {
  args: {
    children: 'Team Roster',
    as: 'h3',
  },
};

export const H4: Story = {
  args: {
    children: 'Match Details',
    as: 'h4',
  },
};

export const H5: Story = {
  args: {
    children: 'Player Stats',
    as: 'h5',
  },
};

export const H6: Story = {
  args: {
    children: 'Additional Info',
    as: 'h6',
  },
};
