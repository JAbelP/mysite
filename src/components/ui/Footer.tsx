interface FooterLink {
  label: string;
  href: string;
  external?: boolean;
}

interface FooterColumn {
  heading: string;
  links: FooterLink[];
}

interface FooterProps {
  brandName: string;
  brandAccent?: string;
  tagline?: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  columns?: FooterColumn[];
  copyright?: string;
  footnote?: string;
  /** Background color */
  bgColor?: string;
  /** Top border color */
  borderColor?: string;
  /** Accent color for headings, hover states, CTA */
  accentColor?: string;
  /** Muted text color for links */
  mutedColor?: string;
  /** Brand/logo text color */
  brandColor?: string;
}

export default function Footer({
  brandName,
  brandAccent,
  tagline,
  primaryCta,
  secondaryCta,
  columns = [],
  copyright,
  footnote,
  bgColor = 'var(--bb-navy)',
  borderColor = 'rgba(212,168,67,0.15)',
  accentColor = 'var(--bb-gold)',
  mutedColor = '#64748B',
  brandColor = 'var(--bb-cream)',
}: FooterProps) {
  const accentStart = brandAccent ? brandName.indexOf(brandAccent) : -1;
  const nameBefore = accentStart > -1 ? brandName.slice(0, accentStart) : brandName;
  const nameAfter  = accentStart > -1 ? brandName.slice(accentStart) : '';

  const totalCols = 2 + columns.length;
  const gridClass = totalCols <= 2 ? 'grid-cols-1 md:grid-cols-2'
    : totalCols === 3 ? 'grid-cols-1 md:grid-cols-3'
    : 'grid-cols-1 md:grid-cols-4';

  return (
    <footer style={{ background: bgColor, borderTop: `1px solid ${borderColor}` }}>
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className={`grid ${gridClass} gap-10`}>

          {/* Brand block — always spans 2 cols when 4-col layout */}
          <div className={columns.length >= 2 ? 'md:col-span-2' : ''}>
            <p style={{ color: brandColor, fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: '1.4rem', marginBottom: '0.75rem' }}>
              {nameBefore}
              {nameAfter && <span style={{ color: accentColor }}>{nameAfter}</span>}
            </p>
            {tagline && (
              <p className="text-sm leading-relaxed max-w-xs mb-5" style={{ color: mutedColor, fontFamily: 'Inter, sans-serif' }}>
                {tagline}
              </p>
            )}
            <div className="flex flex-wrap gap-3">
              {primaryCta && (
                <a
                  href={primaryCta.href}
                  className="btn btn-sm rounded-full font-bold"
                  style={{
                    background: `linear-gradient(135deg, ${accentColor} 0%, ${accentColor}cc 100%)`,
                    color: '#0F172A',
                    border: 'none',
                    fontFamily: 'Syne, sans-serif',
                    WebkitTextFillColor: '#0F172A',
                  }}
                >
                  {primaryCta.label}
                </a>
              )}
              {secondaryCta && (
                <a
                  href={secondaryCta.href}
                  className="btn btn-sm rounded-full font-bold"
                  style={{
                    background: 'transparent',
                    color: accentColor,
                    border: `1.5px solid ${accentColor}`,
                    fontFamily: 'Syne, sans-serif',
                  }}
                >
                  {secondaryCta.label}
                </a>
              )}
            </div>
          </div>

          {/* Dynamic columns */}
          {columns.map(col => (
            <div key={col.heading}>
              <p
                className="text-xs uppercase tracking-widest mb-4 font-semibold"
                style={{ color: accentColor, fontFamily: 'Syne, sans-serif' }}
              >
                {col.heading}
              </p>
              {col.links.map(link => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.external ? '_blank' : undefined}
                  rel={link.external ? 'noopener noreferrer' : undefined}
                  className="block text-sm py-1 transition-colors duration-150"
                  style={{ color: mutedColor, fontFamily: 'Inter, sans-serif' }}
                  onMouseEnter={e => (e.currentTarget.style.color = link.external ? accentColor : brandColor)}
                  onMouseLeave={e => (e.currentTarget.style.color = mutedColor)}
                >
                  {link.external ? `↗ ${link.label}` : link.label}
                </a>
              ))}
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        {(copyright || footnote) && (
          <div
            className="mt-12 pt-6 flex flex-col md:flex-row justify-between items-center gap-3"
            style={{ borderTop: '1px solid rgba(248,245,240,0.06)' }}
          >
            {copyright && (
              <p className="text-xs" style={{ color: '#64748B', fontFamily: 'Inter, sans-serif' }}>
                {copyright}
              </p>
            )}
            {footnote && (
              <p className="text-xs" style={{ color: '#64748B', fontFamily: 'Inter, sans-serif' }}>
                {footnote}
              </p>
            )}
          </div>
        )}
      </div>
    </footer>
  );
}
