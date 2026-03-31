'use client';

import { motion } from 'framer-motion';
import SectionHeader from '@/components/ui/SectionHeader';

const skills = [
  'Next.js', 'React', 'WordPress', 'Tailwind CSS',
  'Google Ads', 'SEO', 'Automations', 'Nodemailer',
  'Google Workspace', 'Live Streaming', 'i18n', 'Framer Motion',
];

export default function About() {
  return (
    <section
      id="about-section"
      className="py-24 relative overflow-hidden"
      style={{ background: 'var(--surface-bg)' }}
    >
      {/* Offset gold blob */}
      <div
        className="absolute top-0 left-0 w-96 h-96 pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(212,168,67,0.06) 0%, transparent 70%)',
          transform: 'translate(-30%, -30%)',
        }}
      />

      <div className="max-w-6xl mx-auto px-6 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left — text */}
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <SectionHeader
              eyebrow="About Bright Byte"
              title="Built for results."
              className="mb-6"
            />

            <div
              className="space-y-4 text-base leading-relaxed"
              style={{ color: 'var(--text-secondary)', fontFamily: 'Inter, sans-serif' }}
            >
              <p>
                Bright Byte delivers websites, automations, Google Ads, and the tech infrastructure that small businesses need to grow, without the overhead of a bloated agency.
              </p>
              <p>
                We&apos;ve helped churches go trilingual, gotten coaches ranking on Google, set up live radio streams, and saved clients over $1,000 a year by moving them off overpriced hosting.
              </p>
              <p>
                Fast turnarounds. Transparent pricing. Real results, not reports.
              </p>
            </div>

            <div className="mt-8 flex gap-4">
              <a href="#contact-section" className="btn btn-gold rounded-full px-8">
                Work With Me
              </a>
              <a href="tel:9195279777" className="btn btn-gold-outline rounded-full px-8">
                (919) 527-9777
              </a>
            </div>
          </motion.div>

          {/* Right — skills grid */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          >
            <div
              className="rounded-2xl p-8"
              style={{
                background: 'var(--surface-card)',
                border: '1px solid var(--border-color)',
              }}
            >
              <p
                className="text-xs uppercase tracking-widest font-semibold mb-6"
                style={{ color: 'var(--bb-gold)', fontFamily: 'Syne, sans-serif' }}
              >
                Tools & Technologies
              </p>

              <div className="flex flex-wrap gap-2">
                {skills.map((skill, i) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + i * 0.05, duration: 0.3 }}
                    className="px-3 py-1.5 rounded-full text-sm font-medium"
                    style={{
                      background: 'var(--surface-bg)',
                      border: '1px solid var(--border-color)',
                      color: 'var(--text-secondary)',
                      fontFamily: 'Inter, sans-serif',
                    }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>

              {/* Divider */}
              <div className="my-6" style={{ height: 1, background: 'var(--border-color)' }} />

              {/* Quick facts */}
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: 'Based in', value: 'Raleigh, NC' },
                  { label: 'Languages', value: 'EN · ES · PT' },
                  { label: 'Availability', value: 'Open to projects' },
                  { label: 'Response time', value: 'Same day' },
                ].map(f => (
                  <div key={f.label}>
                    <p className="text-xs mb-0.5" style={{ color: 'var(--text-muted)', fontFamily: 'Inter, sans-serif' }}>{f.label}</p>
                    <p className="text-sm font-semibold" style={{ color: 'var(--text-primary)', fontFamily: 'Syne, sans-serif' }}>{f.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
