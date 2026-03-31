'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import SectionHeader from './SectionHeader';

export interface Testimonial {
  name: string;
  role?: string;
  image?: string;
  feedback: string;
  website?: string;
  highlight?: string;
}

interface TestimonialsProps {
  eyebrow?: string;
  title?: string;
  testimonials: Testimonial[];
  /** Section background color */
  bgColor?: string;
  /** Card background color */
  cardBgColor?: string;
  /** Card border color */
  cardBorderColor?: string;
  /** Accent color for stars, badges, highlights */
  accentColor?: string;
  /** Text color for quotes */
  quoteColor?: string;
  /** Text color for names */
  nameColor?: string;
  /** Text color for roles */
  roleColor?: string;
  /** Whether to show star ratings */
  showStars?: boolean;
}

function Stars({ color }: { color: string }) {
  return (
    <div className="flex gap-0.5 mb-4">
      {[...Array(5)].map((_, i) => (
        <svg key={i} className="w-4 h-4" viewBox="0 0 20 20" fill={color}>
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials({
  eyebrow = 'Client Reviews',
  title = 'What Our Clients Say',
  testimonials,
  bgColor = 'var(--bb-navy-soft)',
  cardBgColor = 'var(--surface-card)',
  cardBorderColor = 'var(--border-color)',
  accentColor = 'var(--bb-gold)',
  quoteColor = 'var(--text-secondary)',
  nameColor = 'var(--text-primary)',
  roleColor = 'var(--text-muted)',
  showStars = true,
}: TestimonialsProps) {
  const cols = testimonials.length === 1
    ? 'max-w-2xl mx-auto'
    : testimonials.length === 2
    ? 'grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto'
    : 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6';

  return (
    <section
      id="testimonial-section"
      className="py-24 relative"
      style={{ background: bgColor }}
    >
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] pointer-events-none"
        style={{ background: `radial-gradient(ellipse, ${accentColor}10 0%, transparent 70%)` }}
      />

      <div className="max-w-6xl mx-auto px-6 relative">
        <SectionHeader
          eyebrow={eyebrow}
          title={title}
          centered
          accentColor={accentColor}
          titleColor='var(--bb-cream)'
        />

        <div className={cols}>
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="rounded-2xl p-8 flex flex-col transition-all duration-200"
              style={{
                background: cardBgColor,
                border: `1px solid ${cardBorderColor}`,
              }}
            >
              {showStars && <Stars color={accentColor} />}

              {t.highlight && (
                <span
                  className="inline-block text-xs px-3 py-1 rounded-full font-medium mb-4 self-start"
                  style={{
                    background: `${accentColor}18`,
                    color: accentColor,
                    fontFamily: 'Inter, sans-serif',
                  }}
                >
                  {t.highlight}
                </span>
              )}

              <blockquote
                className="text-base leading-relaxed flex-1 mb-6"
                style={{ color: quoteColor, fontFamily: 'Inter, sans-serif', fontStyle: 'italic' }}
              >
                &ldquo;{t.feedback}&rdquo;
              </blockquote>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  {t.image && (
                    <Image
                      src={t.image}
                      alt={t.name}
                      width={44}
                      height={44}
                      className="rounded-full object-cover"
                      style={{ border: `2px solid ${accentColor}` }}
                    />
                  )}
                  <div>
                    <p className="text-sm font-bold" style={{ fontFamily: 'Syne, sans-serif', color: nameColor }}>
                      {t.name}
                    </p>
                    {t.role && (
                      <p className="text-xs" style={{ color: roleColor, fontFamily: 'Inter, sans-serif' }}>
                        {t.role}
                      </p>
                    )}
                  </div>
                </div>
                {t.website && (
                  <a
                    href={t.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-medium transition-colors duration-200"
                    style={{ color: accentColor }}
                  >
                    Visit ↗
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
