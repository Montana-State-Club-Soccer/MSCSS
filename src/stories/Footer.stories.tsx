import type { Meta, StoryObj } from '@storybook/react';
import { Footer, FooterSection, FooterLink } from '../components/Footer';

const meta: Meta<typeof Footer> = {
  title: 'Components/Footer',
  component: Footer,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Footer>;

const logoSection = (
  <div>
    <h2 className="text-secondary font-bold text-xl md:text-2xl mb-3 md:mb-4">Montana State Soccer</h2>
    <p className="text-sm md:text-base text-white/80">
      Building champions on and off the field since 2010.
    </p>
  </div>
);

export const Default: Story = {
  args: {
    logo: logoSection,
    columns: [
      <FooterSection key="quick-links" title="Quick Links">
        <FooterLink href="/">Home</FooterLink>
        <FooterLink href="/team">Team</FooterLink>
        <FooterLink href="/schedule">Schedule</FooterLink>
        <FooterLink href="/news">News</FooterLink>
      </FooterSection>,
      <FooterSection key="about" title="About">
        <FooterLink href="/about">About Us</FooterLink>
        <FooterLink href="/contact">Contact</FooterLink>
        <FooterLink href="/join">Join Team</FooterLink>
        <FooterLink href="/sponsors">Sponsors</FooterLink>
      </FooterSection>,
      <FooterSection key="connect" title="Connect">
        <FooterLink href="https://facebook.com">Facebook</FooterLink>
        <FooterLink href="https://twitter.com">Twitter</FooterLink>
        <FooterLink href="https://instagram.com">Instagram</FooterLink>
        <FooterLink href="mailto:info@mscss.com">Email</FooterLink>
      </FooterSection>,
    ],
  },
};

export const WithCustomCopyright: Story = {
  args: {
    logo: logoSection,
    copyright: '© 2025 MSCS. Proudly representing Montana State.',
    columns: [
      <FooterSection key="links" title="Links">
        <FooterLink href="/">Home</FooterLink>
        <FooterLink href="/team">Team</FooterLink>
      </FooterSection>,
    ],
  },
};

export const Minimal: Story = {
  args: {
    logo: (
      <div className="text-center md:text-left">
        <h2 className="text-secondary font-bold text-xl md:text-2xl">MSCS</h2>
      </div>
    ),
    copyright: '© 2025 Montana State Club Soccer',
  },
};

export const WithSocialIcons: Story = {
  args: {
    logo: logoSection,
    columns: [
      <FooterSection key="team" title="Team">
        <FooterLink href="/roster">Roster</FooterLink>
        <FooterLink href="/coaches">Coaches</FooterLink>
        <FooterLink href="/staff">Staff</FooterLink>
      </FooterSection>,
      <FooterSection key="info" title="Information">
        <FooterLink href="/schedule">Schedule</FooterLink>
        <FooterLink href="/results">Results</FooterLink>
        <FooterLink href="/standings">Standings</FooterLink>
      </FooterSection>,
      <FooterSection key="social" title="Follow Us">
        <FooterLink href="https://facebook.com">Facebook</FooterLink>
        <FooterLink href="https://twitter.com">Twitter/X</FooterLink>
        <FooterLink href="https://instagram.com">Instagram</FooterLink>
        <FooterLink href="https://youtube.com">YouTube</FooterLink>
      </FooterSection>,
    ],
  },
};

export const FullWidth: Story = {
  args: {
    logo: logoSection,
    columns: [
      <FooterSection key="about" title="About Us">
        <FooterLink href="/mission">Our Mission</FooterLink>
        <FooterLink href="/history">History</FooterLink>
        <FooterLink href="/achievements">Achievements</FooterLink>
        <FooterLink href="/facilities">Facilities</FooterLink>
      </FooterSection>,
      <FooterSection key="team" title="Team">
        <FooterLink href="/roster">Current Roster</FooterLink>
        <FooterLink href="/alumni">Alumni</FooterLink>
        <FooterLink href="/tryouts">Tryouts</FooterLink>
        <FooterLink href="/youth">Youth Program</FooterLink>
      </FooterSection>,
      <FooterSection key="support" title="Support">
        <FooterLink href="/donate">Donate</FooterLink>
        <FooterLink href="/volunteer">Volunteer</FooterLink>
        <FooterLink href="/sponsor">Become a Sponsor</FooterLink>
        <FooterLink href="/shop">Team Shop</FooterLink>
      </FooterSection>,
    ],
  },
};
