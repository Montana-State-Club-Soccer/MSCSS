import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Select } from '../components/Select';

describe('Select', () => {
  it('renders select element', () => {
    render(
      <Select>
        <option value="1">Option 1</option>
      </Select>
    );
    expect(screen.getByRole('combobox')).toBeInTheDocument();
  });

  it('renders with label', () => {
    render(
      <Select label="Choose option">
        <option value="1">Option 1</option>
      </Select>
    );
    expect(screen.getByLabelText('Choose option')).toBeInTheDocument();
  });

  it('displays error message', () => {
    render(
      <Select label="Choose" error="Selection required">
        <option value="">Select...</option>
      </Select>
    );
    expect(screen.getByText('Selection required')).toBeInTheDocument();
  });

  it('handles selection change', async () => {
    const user = userEvent.setup();
    render(
      <Select>
        <option value="1">Option 1</option>
        <option value="2">Option 2</option>
      </Select>
    );
    
    const select = screen.getByRole('combobox');
    await user.selectOptions(select, '2');
    expect(select).toHaveValue('2');
  });

  it('handles disabled state', () => {
    render(
      <Select disabled>
        <option value="1">Option 1</option>
      </Select>
    );
    expect(screen.getByRole('combobox')).toBeDisabled();
  });
});
