import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Checkbox } from '../components/Checkbox';

describe('Checkbox', () => {
  it('renders checkbox element', () => {
    render(<Checkbox />);
    expect(screen.getByRole('checkbox')).toBeInTheDocument();
  });

  it('renders with label', () => {
    render(<Checkbox label="Accept terms" />);
    expect(screen.getByLabelText('Accept terms')).toBeInTheDocument();
  });

  it('handles checked state', async () => {
    const user = userEvent.setup();
    render(<Checkbox label="Accept" />);
    const checkbox = screen.getByRole('checkbox');
    
    await user.click(checkbox);
    expect(checkbox).toBeChecked();
  });

  it('displays error message', () => {
    render(<Checkbox label="Accept" error="Must accept terms" />);
    expect(screen.getByText('Must accept terms')).toBeInTheDocument();
  });

  it('handles disabled state', () => {
    render(<Checkbox disabled />);
    expect(screen.getByRole('checkbox')).toBeDisabled();
  });
});
