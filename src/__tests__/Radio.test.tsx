import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Radio } from '../components/Radio';

describe('Radio', () => {
  it('renders radio element', () => {
    render(<Radio />);
    expect(screen.getByRole('radio')).toBeInTheDocument();
  });

  it('renders with label', () => {
    render(<Radio label="Option 1" />);
    expect(screen.getByLabelText('Option 1')).toBeInTheDocument();
  });

  it('handles checked state', async () => {
    const user = userEvent.setup();
    render(<Radio label="Option" />);
    const radio = screen.getByRole('radio');
    
    await user.click(radio);
    expect(radio).toBeChecked();
  });

  it('displays error message', () => {
    render(<Radio label="Option" error="Selection required" />);
    expect(screen.getByText('Selection required')).toBeInTheDocument();
  });

  it('handles disabled state', () => {
    render(<Radio disabled />);
    expect(screen.getByRole('radio')).toBeDisabled();
  });
});
