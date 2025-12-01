import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Badge } from '../components/Badge';

describe('Badge', () => {
  it('renders children correctly', () => {
    render(<Badge>New</Badge>);
    expect(screen.getByText('New')).toBeInTheDocument();
  });

  it('applies primary styles by default', () => {
    render(<Badge>Primary</Badge>);
    expect(screen.getByText('Primary')).toHaveClass('bg-primary');
  });

  it('applies secondary variant styles', () => {
    render(<Badge variant="secondary">Secondary</Badge>);
    expect(screen.getByText('Secondary')).toHaveClass('bg-secondary');
  });

  it('applies responsive classes by default', () => {
    render(<Badge>Badge</Badge>);
    expect(screen.getByText('Badge')).toHaveClass('text-xs', 'md:text-sm');
  });

  it('applies custom className', () => {
    render(<Badge className="custom-class">Badge</Badge>);
    expect(screen.getByText('Badge')).toHaveClass('custom-class');
  });
});
