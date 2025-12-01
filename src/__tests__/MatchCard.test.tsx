import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MatchCard } from '../components/MatchCard';

describe('MatchCard', () => {
  it('renders match information', () => {
    render(
      <MatchCard
        homeTeam="Team A"
        awayTeam="Team B"
        homeScore={2}
        awayScore={1}
        date="2024-01-15"
        time="19:00"
        location="Stadium"
        status="finished"
      />
    );
    
    expect(screen.getByText('Team A')).toBeInTheDocument();
    expect(screen.getByText('Team B')).toBeInTheDocument();
    expect(screen.getByText('2')).toBeInTheDocument();
    expect(screen.getByText('1')).toBeInTheDocument();
    expect(screen.getByText('Stadium')).toBeInTheDocument();
  });

  it('shows live indicator for live matches', () => {
    render(
      <MatchCard
        homeTeam="Team A"
        awayTeam="Team B"
        date="2024-01-15"
        time="19:00"
        status="live"
      />
    );
    
    expect(screen.getByText('LIVE')).toBeInTheDocument();
  });

  it('shows upcoming status', () => {
    render(
      <MatchCard
        homeTeam="Team A"
        awayTeam="Team B"
        date="2024-01-15"
        time="19:00"
        status="upcoming"
      />
    );
    
    expect(screen.getByText('Upcoming')).toBeInTheDocument();
  });

  it('applies secondary variant', () => {
    const { container } = render(
      <MatchCard
        homeTeam="Team A"
        awayTeam="Team B"
        date="2024-01-15"
        time="19:00"
        status="upcoming"
        variant="secondary"
      />
    );
    
    expect(container.querySelector('.border-secondary')).toBeInTheDocument();
  });
});
