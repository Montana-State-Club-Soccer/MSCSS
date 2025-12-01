import type { Meta, StoryObj } from '@storybook/react';
import { Header } from '../components/Header';
import { Button } from '../components/Button';
import { Logo } from '../components/Logo';

const meta: Meta<typeof Header> = {
  title: 'Components/Header',
  component: Header,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Header>;

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'Team', href: '/team' },
  { label: 'Schedule', href: '/schedule' },
  { label: 'News', href: '/news' },
  { label: 'Contact', href: '/contact' },
];

export const Default: Story = {
  args: {
    logo: 'Montana State Soccer',
    navItems,
  },
};

export const WithActions: Story = {
  args: {
    logo: 'MSCS',
    navItems,
    actions: (
      <>
        <Button variant="secondary">Sign In</Button>
        <Button variant="primary">Join Team</Button>
      </>
    ),
  },
};

export const Sticky: Story = {
  args: {
    logo: 'Montana State Soccer',
    navItems,
    sticky: true,
    actions: <Button variant="secondary">Sign In</Button>,
  },
  render: (args) => (
    <div>
      <Header {...args} />
      <div className="h-[200vh] bg-gradient-to-b from-gray-100 to-gray-300 p-8">
        <h1 className="text-2xl font-bold mb-4">Scroll down to see sticky header</h1>
        <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <p className="mb-4">Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <p className="mb-4">Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
      </div>
    </div>
  ),
};

export const WithCustomLogo: Story = {
  args: {
    logo: <Logo size="md" />,
    navItems,
    actions: <Button variant="secondary">Sign In</Button>,
  },
};

export const MinimalNav: Story = {
  args: {
    logo: 'MSCS',
    navItems: [
      { label: 'Home', href: '/' },
      { label: 'Team', href: '/team' },
      { label: 'Contact', href: '/contact' },
    ],
  },
};
