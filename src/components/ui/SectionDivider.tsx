interface SectionDividerProps {
  center?: boolean;
  color?: string;
  width?: string;
  height?: string;
  className?: string;
}

export default function SectionDivider({
  center = false,
  color = 'var(--bb-gold)',
  width = '3rem',
  height = '2px',
  className = '',
}: SectionDividerProps) {
  return (
    <div
      className={className}
      style={{
        width,
        height,
        background: color,
        display: 'block',
        ...(center ? { marginLeft: 'auto', marginRight: 'auto' } : {}),
      }}
    />
  );
}
