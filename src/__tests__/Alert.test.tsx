import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Alert } from '../components/Alert';

describe('Alert', () => {
  it('renders alert with children', () => {
    render(<Alert>Test alert</Alert>);
    expect(screen.getByText('Test alert')).toBeInTheDocument();
  });

  it('renders info type by default', () => {
    render(<Alert>Info message</Alert>);
    const alert = screen.getByRole('alert');
    expect(alert).toHaveClass('bg-blue-50');
  });

  it('renders success type', () => {
    render(<Alert type="success">Success message</Alert>);
    const alert = screen.getByRole('alert');
    expect(alert).toHaveClass('bg-green-50');
  });

  it('renders warning type', () => {
    render(<Alert type="warning">Warning message</Alert>);
    const alert = screen.getByRole('alert');
    expect(alert).toHaveClass('bg-yellow-50');
  });

  it('renders error type', () => {
    render(<Alert type="error">Error message</Alert>);
    const alert = screen.getByRole('alert');
    expect(alert).toHaveClass('bg-red-50');
  });

  it('calls onClose when close button is clicked', async () => {
    const user = userEvent.setup();
    const onClose = vi.fn();
    render(<Alert onClose={onClose}>Dismissible alert</Alert>);
    
    const closeButton = screen.getByLabelText('Dismiss alert');
    await user.click(closeButton);
    expect(onClose).toHaveBeenCalled();
  });

  it('does not render close button when onClose is not provided', () => {
    render(<Alert>Alert without close</Alert>);
    expect(screen.queryByLabelText('Dismiss alert')).not.toBeInTheDocument();
  });
});
