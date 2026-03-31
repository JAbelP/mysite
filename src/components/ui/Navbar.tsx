'use client';

import { useState } from 'react';
import Link from 'next/link';

export interface NavLink {
  label: string;
  href: string;
}

interface NavbarProps {
  links: NavLink[];
  logoText: string;
  logoAccent?: string;
  logoImageUrl?: string;
  logoImageAlt?: string;
  ctaLabel?: string;
  ctaHref?: string;
}

const GOLD = '#D4A843';
const NAVY = '#0F172A';
const CREAM = '#F8F5F0';
const CREAM_MUTED = '#C8C3BB'; // used in mobile menu links

export default function Navbar({
  links,
  logoText,
  logoAccent,
  logoImageUrl,
  logoImageAlt = 'Logo',
  ctaLabel,
  ctaHref,
}: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  const accentStart = logoAccent ? logoText.indexOf(logoAccent) : -1;
  const logoBefore = accentStart > -1 ? logoText.slice(0, accentStart) : logoText;
  const logoAfter  = accentStart > -1 ? logoText.slice(accentStart) : '';

  function scrollTo(href: string) {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <header style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 50,
      background: NAVY,
      borderBottom: `1px solid rgba(212,168,67,0.15)`,
    }}>
      <div style={{
        maxWidth: '72rem',
        margin: '0 auto',
        padding: '0 1.5rem',
        height: '4rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}>

        {/* Logo */}
        <Link href="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
          {logoImageUrl ? (
            <img src={logoImageUrl} alt={logoImageAlt} style={{ height: '2rem', width: 'auto' }} />
          ) : (
            <span style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: '1.2rem', color: CREAM }}>
              {logoBefore}
              {logoAfter && <span style={{ color: GOLD }}>{logoAfter}</span>}
            </span>
          )}
        </Link>

        {/* Right side */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          {ctaLabel && ctaHref && (
            <button
              onClick={() => scrollTo(ctaHref)}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: '9999px',
                padding: '0 1.25rem',
                height: '2rem',
                fontSize: '0.875rem',
                fontWeight: 700,
                fontFamily: 'Syne, sans-serif',
                background: 'transparent',
                color: GOLD,
                border: `2px solid ${GOLD}`,
                cursor: 'pointer',
                whiteSpace: 'nowrap',
                outline: 'none',
                WebkitAppearance: 'none',
              }}
            >
              {ctaLabel}
            </button>
          )}

          {/* Hamburger — always visible */}
          <button
            onClick={() => setMenuOpen(o => !o)}
            aria-label="Toggle menu"
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              color: menuOpen ? GOLD : CREAM,
              padding: '0.25rem',
              display: 'flex',
              alignItems: 'center',
              transition: 'color 0.2s',
            }}
            onMouseEnter={e => (e.currentTarget.style.color = GOLD)}
            onMouseLeave={e => (e.currentTarget.style.color = menuOpen ? GOLD : CREAM)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
        <div style={{
          background: NAVY,
          borderBottom: `1px solid rgba(212,168,67,0.15)`,
          padding: '0.5rem 1.5rem 1rem',
        }}>
          {links.map(l => (
            <a
              key={l.label}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              style={{
                display: 'block',
                padding: '0.75rem 0',
                fontSize: '0.875rem',
                fontWeight: 500,
                fontFamily: 'Inter, sans-serif',
                color: CREAM_MUTED,
                textDecoration: 'none',
                borderBottom: '1px solid rgba(248,245,240,0.08)',
              }}
            >
              {l.label}
            </a>
          ))}
          {ctaLabel && ctaHref && (
            <button
              onClick={() => { setMenuOpen(false); scrollTo(ctaHref); }}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '100%',
                marginTop: '1rem',
                borderRadius: '9999px',
                height: '2.5rem',
                fontSize: '0.875rem',
                fontWeight: 700,
                fontFamily: 'Syne, sans-serif',
                background: 'transparent',
                color: GOLD,
                border: `2px solid ${GOLD}`,
                cursor: 'pointer',
                outline: 'none',
                WebkitAppearance: 'none',
              }}
            >
              {ctaLabel}
            </button>
          )}
        </div>
      )}
    </header>
  );
}
