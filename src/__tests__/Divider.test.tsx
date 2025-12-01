import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { Divider } from '../components/Divider';

describe('Divider', () => {
  it('renders divider', () => {
    const { container } = render(<Divider />);
    expect(container.querySelector('hr')).toBeInTheDocument();
  });

  it('applies primary variant by default', () => {
    const { container } = render(<Divider />);
    const hr = container.querySelector('hr');
    expect(hr).toHaveClass('border-gray-200');
  });

  it('applies secondary variant', () => {
    const { container } = render(<Divider variant="secondary" />);
    const hr = container.querySelector('hr');
    expect(hr).toHaveClass('border-secondary');
  });
});
