import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Input } from '../components/Input';

describe('Input', () => {
  it('renders input element', () => {
    render(<Input placeholder="Enter text" />);
    expect(screen.getByPlaceholderText('Enter text')).toBeInTheDocument();
  });

  it('renders with label', () => {
    render(<Input label="Email" />);
    expect(screen.getByLabelText('Email')).toBeInTheDocument();
  });

  it('displays error message', () => {
    render(<Input label="Password" error="Password is required" />);
    expect(screen.getByText('Password is required')).toBeInTheDocument();
    expect(screen.getByLabelText('Password')).toHaveAttribute('aria-invalid', 'true');
  });

  it('displays helper text', () => {
    render(<Input label="Username" helperText="Choose a unique username" />);
    expect(screen.getByText('Choose a unique username')).toBeInTheDocument();
  });

  it('applies fullWidth class', () => {
    render(<Input label="Full Width" fullWidth />);
    const input = screen.getByLabelText('Full Width');
    expect(input).toHaveClass('w-full');
  });

  it('handles disabled state', () => {
    render(<Input label="Disabled" disabled />);
    const input = screen.getByLabelText('Disabled');
    expect(input).toBeDisabled();
    expect(input).toHaveClass('disabled:bg-gray-200');
  });

  it('applies error styles when error is present', () => {
    render(<Input label="Email" error="Invalid email" />);
    const input = screen.getByLabelText('Email');
    expect(input).toHaveClass('border-red-500');
  });

  it('renders with icon', () => {
    const icon = <span data-testid="icon">📧</span>;
    render(<Input label="Email" icon={icon} />);
    expect(screen.getByTestId('icon')).toBeInTheDocument();
  });
});
