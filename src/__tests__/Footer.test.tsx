import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Footer, FooterSection, FooterLink } from '../components/Footer';

describe('Footer', () => {
  it('renders footer with default copyright', () => {
    render(<Footer />);
    const currentYear = new Date().getFullYear();
    expect(screen.getByText(`© ${currentYear} Montana State Club Soccer. All rights reserved.`)).toBeInTheDocument();
  });

  it('renders footer with custom copyright', () => {
    render(<Footer copyright="© 2025 Custom Copyright" />);
    expect(screen.getByText('© 2025 Custom Copyright')).toBeInTheDocument();
  });

  it('renders footer with logo', () => {
    render(<Footer logo={<div>Montana State Soccer</div>} />);
    expect(screen.getByText('Montana State Soccer')).toBeInTheDocument();
  });

  it('renders footer with columns', () => {
    render(
      <Footer
        columns={[
          <FooterSection key="links" title="Quick Links">
            <FooterLink href="/">Home</FooterLink>
            <FooterLink href="/team">Team</FooterLink>
          </FooterSection>,
        ]}
      />
    );
    expect(screen.getByText('Quick Links')).toBeInTheDocument();
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('Team')).toBeInTheDocument();
  });

  it('renders footer with children', () => {
    render(
      <Footer>
        <div>Custom Content</div>
      </Footer>
    );
    expect(screen.getByText('Custom Content')).toBeInTheDocument();
  });
});

describe('FooterSection', () => {
  it('renders section with title', () => {
    render(
      <FooterSection title="Section Title">
        <li>Item 1</li>
      </FooterSection>
    );
    expect(screen.getByText('Section Title')).toBeInTheDocument();
  });

  it('renders section without title', () => {
    render(
      <FooterSection>
        <li>Item 1</li>
      </FooterSection>
    );
    expect(screen.getByText('Item 1')).toBeInTheDocument();
  });
});

describe('FooterLink', () => {
  it('renders link with href', () => {
    render(<FooterLink href="/test">Test Link</FooterLink>);
    const link = screen.getByText('Test Link');
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href', '/test');
  });

  it('applies hover styles', () => {
    render(<FooterLink href="/test">Test Link</FooterLink>);
    const link = screen.getByText('Test Link');
    expect(link).toHaveClass('hover:text-secondary');
  });
});
