import type { Meta, StoryObj } from '@storybook/react';
import { PlayerCard } from '../components/PlayerCard';

const meta: Meta<typeof PlayerCard> = {
  title: 'Components/PlayerCard',
  component: PlayerCard,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof PlayerCard>;

export const Default: Story = {
  args: {
    name: 'John Doe',
    position: 'Forward',
    number: 10,
  },
};

export const WithImage: Story = {
  args: {
    name: 'John Doe',
    position: 'Forward',
    number: 10,
    image: 'https://via.placeholder.com/300x400',
  },
};

export const WithStats: Story = {
  args: {
    name: 'John Doe',
    position: 'Forward',
    number: 10,
    image: 'https://via.placeholder.com/300x400',
    stats: [
      { label: 'Goals', value: '15' },
      { label: 'Assists', value: '8' },
      { label: 'Appearances', value: '25' },
      { label: 'Minutes', value: '2,250' },
    ],
  },
};

export const Secondary: Story = {
  args: {
    name: 'Jane Smith',
    position: 'Midfielder',
    number: 8,
    variant: 'secondary',
    stats: [
      { label: 'Goals', value: '12' },
      { label: 'Assists', value: '10' },
    ],
  },
};

export const Goalkeeper: Story = {
  args: {
    name: 'Mike Johnson',
    position: 'Goalkeeper',
    number: 1,
    image: 'https://via.placeholder.com/300x400',
    stats: [
      { label: 'Clean Sheets', value: '10' },
      { label: 'Saves', value: '85' },
      { label: 'Appearances', value: '28' },
    ],
  },
};

export const NoStats: Story = {
  args: {
    name: 'Alex Brown',
    position: 'Defender',
    number: 5,
  },
};
