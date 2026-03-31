'use client';

import { useState, type ComponentType, type AnchorHTMLAttributes } from 'react';
import Link from 'next/link';

export interface NavLink {
  label: string;
  href: string;
}

type AnchorProps = AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };

interface NavbarProps {
  links: NavLink[];
  /** Text logo — e.g. "BrightByte" split into two colored parts */
  logoText: string;
  logoAccent?: string;
  /** Optional logo image URL — overrides text logo */
  logoImageUrl?: string;
  logoImageAlt?: string;
  /** CTA button */
  ctaLabel?: string;
  ctaHref?: string;
  /** Extra slot e.g. language selector */
  extraNav?: React.ReactNode;
  /** Background color of the bar */
  bgColor?: string;
  /** Border color at the bottom */
  borderColor?: string;
  /** Color of nav link text */
  linkColor?: string;
  /** Color of nav link on hover */
  linkHoverColor?: string;
  /** Accent color — used for logo highlight, CTA button bg, and mobile menu highlights */
  accentColor?: string;
  /** Color of logo main text */
  logoColor?: string;
  /** Link component — swap next/link for react-router NavLink etc. */
  LinkComponent?: ComponentType<AnchorProps>;
}

export default function Navbar({
  links,
  logoText,
  logoAccent,
  logoImageUrl,
  logoImageAlt = 'Logo',
  ctaLabel,
  ctaHref,
  extraNav,
  bgColor = 'var(--bb-navy)',
  borderColor = 'rgba(212,168,67,0.12)',
  linkColor = 'var(--bb-cream-muted)',
  linkHoverColor = 'var(--bb-gold)',
  accentColor = 'var(--bb-gold)',
  logoColor = 'var(--bb-cream)',
  LinkComponent,
}: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const NavA = LinkComponent ?? ((props: AnchorProps) => <a {...props} />);

  // Split logoText at logoAccent for two-tone rendering
  const accentStart = logoAccent ? logoText.indexOf(logoAccent) : -1;
  const logoBefore = accentStart > -1 ? logoText.slice(0, accentStart) : logoText;
  const logoAfter  = accentStart > -1 ? logoText.slice(accentStart) : '';

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50"
      style={{ background: bgColor, borderBottom: `1px solid ${borderColor}` }}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="flex items-center">
          {logoImageUrl ? (
            <img src={logoImageUrl} alt={logoImageAlt} className="h-8 w-auto" />
          ) : (
            <span style={{ color: logoColor, fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: '1.2rem' }}>
              {logoBefore}
              {logoAfter && <span style={{ color: accentColor }}>{logoAfter}</span>}
            </span>
          )}
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map(l => (
            <NavA
              key={l.label}
              href={l.href}
              className="text-sm font-medium transition-colors duration-200"
              style={{ color: linkColor, fontFamily: 'Inter, sans-serif' }}
              onMouseEnter={e => (e.currentTarget.style.color = linkHoverColor)}
              onMouseLeave={e => (e.currentTarget.style.color = linkColor)}
            >
              {l.label}
            </NavA>
          ))}
          {extraNav}
        </nav>

        {/* Right side */}
        <div className="flex items-center gap-3">
          {ctaLabel && ctaHref && (
            <a
              href={ctaHref}
              className="hidden md:inline-flex btn btn-sm rounded-full px-5 text-sm font-bold"
              style={{
                background: `linear-gradient(135deg, ${accentColor} 0%, ${accentColor}cc 100%)`,
                color: 'var(--bb-navy)',
                border: 'none',
                fontFamily: 'Syne, sans-serif',
              }}
            >
              {ctaLabel}
            </a>
          )}

          {/* Mobile hamburger */}
          <button
            className="md:hidden btn btn-ghost btn-sm btn-circle"
            style={{ color: logoColor }}
            onClick={() => setMenuOpen(o => !o)}
            aria-label="Toggle menu"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {menuOpen
                ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              }
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          className="md:hidden px-6 pb-4 pt-2"
          style={{ background: bgColor, borderBottom: `1px solid ${borderColor}` }}
        >
          {links.map(l => (
            <a
              key={l.label}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              className="block py-3 text-sm font-medium border-b"
              style={{ color: linkColor, borderColor: 'rgba(248,245,240,0.08)', fontFamily: 'Inter, sans-serif' }}
            >
              {l.label}
            </a>
          ))}
          {ctaLabel && ctaHref && (
            <a
              href={ctaHref}
              onClick={() => setMenuOpen(false)}
              className="btn btn-sm rounded-full mt-4 w-full font-bold"
              style={{
                background: `linear-gradient(135deg, ${accentColor} 0%, ${accentColor}cc 100%)`,
                color: 'var(--bb-navy)',
                border: 'none',
                fontFamily: 'Syne, sans-serif',
              }}
            >
              {ctaLabel}
            </a>
          )}
        </div>
      )}
    </header>
  );
}
