import type { Meta, StoryObj } from '@storybook/react';
import { MatchCard } from '../components/MatchCard';

const meta: Meta<typeof MatchCard> = {
  title: 'Components/MatchCard',
  component: MatchCard,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary'],
    },
    status: {
      control: 'select',
      options: ['upcoming', 'live', 'finished'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof MatchCard>;

export const Upcoming: Story = {
  args: {
    homeTeam: 'Montana State',
    awayTeam: 'University of Montana',
    date: '2024-02-15',
    time: '19:00',
    location: 'Bobcat Stadium',
    status: 'upcoming',
  },
};

export const Live: Story = {
  args: {
    homeTeam: 'Montana State',
    awayTeam: 'University of Montana',
    homeScore: 2,
    awayScore: 1,
    date: '2024-01-20',
    time: '19:00',
    location: 'Bobcat Stadium',
    status: 'live',
  },
};

export const Finished: Story = {
  args: {
    homeTeam: 'Montana State',
    awayTeam: 'University of Montana',
    homeScore: 3,
    awayScore: 2,
    date: '2024-01-10',
    time: '19:00',
    location: 'Bobcat Stadium',
    status: 'finished',
  },
};

export const FinishedDraw: Story = {
  args: {
    homeTeam: 'Montana State',
    awayTeam: 'Eastern Washington',
    homeScore: 1,
    awayScore: 1,
    date: '2024-01-05',
    time: '15:00',
    location: 'Bobcat Stadium',
    status: 'finished',
  },
};

export const Secondary: Story = {
  args: {
    homeTeam: 'Montana State',
    awayTeam: 'Idaho State',
    date: '2024-02-20',
    time: '18:00',
    location: 'Bobcat Stadium',
    status: 'upcoming',
    variant: 'secondary',
  },
};

export const AwayMatch: Story = {
  args: {
    homeTeam: 'Portland State',
    awayTeam: 'Montana State',
    homeScore: 1,
    awayScore: 2,
    date: '2024-01-15',
    time: '14:00',
    location: 'Viking Stadium',
    status: 'finished',
  },
};
