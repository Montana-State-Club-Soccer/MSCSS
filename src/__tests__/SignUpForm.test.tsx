import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { SignUpForm } from '../components/SignUpForm';

describe('SignUpForm', () => {
  it('renders signup form fields', () => {
    render(<SignUpForm onSubmit={() => {}} />);
    
    expect(screen.getByLabelText('Full Name')).toBeInTheDocument();
    expect(screen.getByLabelText('Email')).toBeInTheDocument();
    expect(screen.getByLabelText('Password')).toBeInTheDocument();
    expect(screen.getByLabelText('Confirm Password')).toBeInTheDocument();
    expect(screen.getByLabelText(/I agree to the terms/)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Create Account' })).toBeInTheDocument();
  });

  it('handles form submission', async () => {
    const user = userEvent.setup();
    const onSubmit = vi.fn();
    render(<SignUpForm onSubmit={onSubmit} />);
    
    await user.type(screen.getByLabelText('Full Name'), 'John Doe');
    await user.type(screen.getByLabelText('Email'), 'john@example.com');
    await user.type(screen.getByLabelText('Password'), 'password123');
    await user.type(screen.getByLabelText('Confirm Password'), 'password123');
    await user.click(screen.getByLabelText(/I agree to the terms/));
    await user.click(screen.getByRole('button', { name: 'Create Account' }));
    
    expect(onSubmit).toHaveBeenCalledWith({
      name: 'John Doe',
      email: 'john@example.com',
      password: 'password123',
      confirmPassword: 'password123',
      agreeToTerms: true
    });
  });

  it('shows password mismatch error', async () => {
    const user = userEvent.setup();
    render(<SignUpForm onSubmit={() => {}} />);
    
    await user.type(screen.getByLabelText('Password'), 'password123');
    await user.type(screen.getByLabelText('Confirm Password'), 'different');
    await user.click(screen.getByRole('button', { name: 'Create Account' }));
    
    expect(screen.getByText('Passwords do not match')).toBeInTheDocument();
  });

  it('displays error message', () => {
    render(<SignUpForm onSubmit={() => {}} error="Email already exists" />);
    expect(screen.getByText('Email already exists')).toBeInTheDocument();
  });

  it('shows loading state', () => {
    render(<SignUpForm onSubmit={() => {}} isLoading={true} />);
    expect(screen.getByText('Creating account...')).toBeInTheDocument();
  });
});
