import SectionDivider from './SectionDivider';

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  /** Color of the eyebrow text and divider line */
  accentColor?: string;
  /** Color of the title */
  titleColor?: string;
  /** Color of the subtitle */
  subtitleColor?: string;
  titleSize?: string;
  className?: string;
}

export default function SectionHeader({
  eyebrow,
  title,
  subtitle,
  centered = false,
  accentColor = 'var(--bb-gold)',
  titleColor = 'var(--text-primary)',
  subtitleColor = 'var(--text-secondary)',
  titleSize = 'text-4xl md:text-5xl',
  className = '',
}: SectionHeaderProps) {
  return (
    <div className={`mb-16 ${centered ? 'text-center' : ''} ${className}`}>
      {eyebrow && (
        <div className={`flex items-center gap-3 mb-4 ${centered ? 'justify-center' : ''}`}>
          {centered ? (
            <>
              <SectionDivider color={accentColor} />
              <span
                className="text-xs uppercase tracking-widest font-semibold"
                style={{ color: accentColor, fontFamily: 'Syne, sans-serif' }}
              >
                {eyebrow}
              </span>
              <SectionDivider color={accentColor} />
            </>
          ) : (
            <>
              <SectionDivider color={accentColor} />
              <span
                className="text-xs uppercase tracking-widest font-semibold"
                style={{ color: accentColor, fontFamily: 'Syne, sans-serif' }}
              >
                {eyebrow}
              </span>
            </>
          )}
        </div>
      )}
      <h2
        className={`${titleSize} font-bold`}
        style={{ fontFamily: 'Syne, sans-serif', color: titleColor }}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-4 text-lg ${centered ? 'max-w-2xl mx-auto' : 'max-w-xl'}`}
          style={{ color: subtitleColor, fontFamily: 'Inter, sans-serif' }}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
