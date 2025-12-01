import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { PlayerCard } from '../components/PlayerCard';

describe('PlayerCard', () => {
  it('renders player information', () => {
    render(
      <PlayerCard
        name="John Doe"
        position="Forward"
        number={10}
      />
    );
    
    expect(screen.getByText('John Doe')).toBeInTheDocument();
    expect(screen.getByText('Forward')).toBeInTheDocument();
    expect(screen.getByText('#10')).toBeInTheDocument();
  });

  it('renders with image', () => {
    render(
      <PlayerCard
        name="John Doe"
        position="Forward"
        number={10}
        image="/player.jpg"
      />
    );
    
    const img = screen.getByAltText('John Doe');
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute('src', '/player.jpg');
  });

  it('renders stats when provided', () => {
    render(
      <PlayerCard
        name="John Doe"
        position="Forward"
        number={10}
        stats={[
          { label: 'Goals', value: '15' },
          { label: 'Assists', value: '8' }
        ]}
      />
    );
    
    expect(screen.getByText('Goals')).toBeInTheDocument();
    expect(screen.getByText('15')).toBeInTheDocument();
    expect(screen.getByText('Assists')).toBeInTheDocument();
    expect(screen.getByText('8')).toBeInTheDocument();
  });

  it('applies secondary variant', () => {
    const { container } = render(
      <PlayerCard
        name="John Doe"
        position="Forward"
        number={10}
        variant="secondary"
      />
    );
    
    expect(container.querySelector('.bg-secondary')).toBeInTheDocument();
  });
});
