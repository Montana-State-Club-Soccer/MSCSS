import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Textarea } from '../components/Textarea';

describe('Textarea', () => {
  it('renders textarea element', () => {
    render(<Textarea />);
    expect(screen.getByRole('textbox')).toBeInTheDocument();
  });

  it('renders with label', () => {
    render(<Textarea label="Message" />);
    expect(screen.getByLabelText('Message')).toBeInTheDocument();
  });

  it('displays error message', () => {
    render(<Textarea label="Message" error="Field is required" />);
    expect(screen.getByText('Field is required')).toBeInTheDocument();
  });

  it('displays helper text', () => {
    render(<Textarea label="Message" helperText="Max 500 characters" />);
    expect(screen.getByText('Max 500 characters')).toBeInTheDocument();
  });

  it('handles user input', async () => {
    const user = userEvent.setup();
    render(<Textarea label="Message" />);
    const textarea = screen.getByRole('textbox');
    
    await user.type(textarea, 'Test message');
    expect(textarea).toHaveValue('Test message');
  });

  it('handles disabled state', () => {
    render(<Textarea disabled />);
    expect(screen.getByRole('textbox')).toBeDisabled();
  });
});
