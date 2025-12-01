import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Header } from '../components/Header';

describe('Header', () => {
  const mockNavItems = [
    { label: 'Home', href: '/' },
    { label: 'Team', href: '/team' },
    { label: 'Schedule', href: '/schedule' },
  ];

  it('renders header with logo', () => {
    render(<Header logo="Montana State Soccer" />);
    expect(screen.getByText('Montana State Soccer')).toBeInTheDocument();
  });

  it('renders navigation items', () => {
    render(<Header navItems={mockNavItems} />);
    expect(screen.getAllByText('Home')).toHaveLength(1);
    expect(screen.getAllByText('Team')).toHaveLength(1);
    expect(screen.getAllByText('Schedule')).toHaveLength(1);
  });

  it('renders action buttons', () => {
    render(
      <Header
        navItems={mockNavItems}
        actions={<button>Sign In</button>}
      />
    );
    expect(screen.getAllByText('Sign In')).toHaveLength(1);
  });

  it('toggles mobile menu', async () => {
    const user = userEvent.setup();
    render(<Header navItems={mockNavItems} />);
    
    const menuButton = screen.getByLabelText('Toggle menu');
    await user.click(menuButton);
    
    expect(screen.getAllByText('Home')).toHaveLength(2);
  });

  it('applies sticky class when sticky prop is true', () => {
    const { container } = render(<Header sticky />);
    expect(container.querySelector('.sticky')).toBeInTheDocument();
  });

  it('closes mobile menu when nav item is clicked', async () => {
    const user = userEvent.setup();
    render(<Header navItems={mockNavItems} />);
    
    const menuButton = screen.getByLabelText('Toggle menu');
    await user.click(menuButton);
    
    const homeLinks = screen.getAllByText('Home');
    await user.click(homeLinks[1]);
  });
});
