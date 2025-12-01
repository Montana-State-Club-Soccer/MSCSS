import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Heading } from '../components/Heading';

describe('Heading', () => {
  it('renders children correctly', () => {
    render(<Heading>Test Heading</Heading>);
    expect(screen.getByText('Test Heading')).toBeInTheDocument();
  });

  it('renders as h2 by default', () => {
    render(<Heading>Default Heading</Heading>);
    const heading = screen.getByText('Default Heading');
    expect(heading.tagName).toBe('H2');
  });

  it('renders as specified heading level', () => {
    render(<Heading as="h1">H1 Heading</Heading>);
    const heading = screen.getByText('H1 Heading');
    expect(heading.tagName).toBe('H1');
  });

  it('applies responsive size classes based on semantic level', () => {
    const { rerender } = render(<Heading as="h1">H1</Heading>);
    expect(screen.getByText('H1')).toHaveClass('text-3xl', 'sm:text-4xl');

    rerender(<Heading as="h6">H6</Heading>);
    expect(screen.getByText('H6')).toHaveClass('text-sm', 'sm:text-base');
  });

  it('applies bold weight by default', () => {
    render(<Heading>Bold Heading</Heading>);
    expect(screen.getByText('Bold Heading')).toHaveClass('font-bold');
  });

  it('applies primary color by default', () => {
    render(<Heading>Colored Heading</Heading>);
    expect(screen.getByText('Colored Heading')).toHaveClass('text-primary');
  });

  it('applies secondary color variant', () => {
    render(<Heading variant="secondary">Gold Heading</Heading>);
    expect(screen.getByText('Gold Heading')).toHaveClass('text-secondary');
  });

  it('applies custom className', () => {
    render(<Heading className="custom-class">Custom</Heading>);
    expect(screen.getByText('Custom')).toHaveClass('custom-class');
  });
});
