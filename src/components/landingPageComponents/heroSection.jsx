'use client';

import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function HeroSection({ scrollToContact }) {
  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: 'var(--bb-cream)' }}
    >
      {/* Background grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage: `
            linear-gradient(var(--bb-navy) 1px, transparent 1px),
            linear-gradient(90deg, var(--bb-navy) 1px, transparent 1px)
          `,
          backgroundSize: '64px 64px',
        }}
      />

      {/* Gold glow blob top-right */}
      <div
        className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(212,168,67,0.12) 0%, transparent 70%)',
          transform: 'translate(30%, -30%)',
        }}
      />

      <div className="relative max-w-6xl mx-auto px-6 pt-24 pb-16 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">

          {/* ── Left column ── */}
          <div>
            {/* Eyebrow */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={0}
              className="inline-flex items-center gap-2 mb-6"
            >
              <span
                className="w-8 h-px"
                style={{ background: 'var(--bb-gold)' }}
              />
              <span
                className="text-xs uppercase tracking-[0.2em] font-semibold"
                style={{ color: 'var(--bb-gold-dim)', fontFamily: 'Syne, sans-serif' }}
              >
                Websites · Marketing · Growth
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={1}
              className="text-4xl md:text-5xl lg:text-6xl leading-[1.05] mb-6"
              style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, color: 'var(--bb-navy)' }}
            >
              Your Business
              <br />
              Deserves a Website
              <br />
              <span className="text-gold-gradient">That Works.</span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={2}
              className="text-lg leading-relaxed mb-4 max-w-md"
              style={{ color: '#4B5563', fontFamily: 'Inter, sans-serif' }}
            >
              Bright Byte builds fast, high-converting websites and handles the tech so you can focus on your business.
            </motion.p>

            {/* CTAs */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={3}
              className="flex flex-wrap gap-3"
            >
              <button
                onClick={scrollToContact}
                className="btn btn-gold rounded-full px-8 text-base"
              >
                Start a Project
              </button>
              <a
                href="#portfolio-section"
                className="btn btn-gold-outline rounded-full px-8 text-base"
              >
                See Our Work
              </a>
            </motion.div>

            {/* Trust signals */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={4}
              className="flex items-center gap-6 mt-10"
            >
              <div>
                <p className="text-2xl font-display font-bold" style={{ color: 'var(--bb-gold-dim)', fontFamily: 'Syne, sans-serif' }}>5+</p>
                <p className="text-xs" style={{ color: '#6B7280', fontFamily: 'Inter, sans-serif' }}>Sites Launched</p>
              </div>
              <div style={{ width: 1, height: 32, background: 'rgba(15,23,42,0.15)' }} />
              <div>
                <p className="text-2xl font-display font-bold" style={{ color: 'var(--bb-gold-dim)', fontFamily: 'Syne, sans-serif' }}>$1k+</p>
                <p className="text-xs" style={{ color: '#6B7280', fontFamily: 'Inter, sans-serif' }}>Saved Per Client/yr</p>
              </div>
              <div style={{ width: 1, height: 32, background: 'rgba(15,23,42,0.15)' }} />
              <div>
                <p className="text-2xl font-display font-bold" style={{ color: 'var(--bb-gold-dim)', fontFamily: 'Syne, sans-serif' }}>100%</p>
                <p className="text-xs" style={{ color: '#6B7280', fontFamily: 'Inter, sans-serif' }}>Client Satisfaction</p>
              </div>
            </motion.div>
          </div>

          {/* ── Right column — service ticker ── */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="hidden lg:flex flex-col justify-center"
          >
            <div
              className="rounded-2xl p-8 relative overflow-hidden"
              style={{
                background: 'var(--bb-navy)',
                border: '1px solid rgba(212,168,67,0.2)',
                boxShadow: '0 8px 48px rgba(15,23,42,0.18)',
              }}
            >
              {/* Gold corner accent */}
              <div
                className="absolute top-0 right-0 w-32 h-32 rounded-full pointer-events-none"
                style={{
                  background: 'radial-gradient(circle, rgba(212,168,67,0.12) 0%, transparent 70%)',
                  transform: 'translate(40%, -40%)',
                }}
              />

              <p
                className="text-xs uppercase tracking-widest mb-6 font-semibold"
                style={{ color: 'var(--bb-gold)', fontFamily: 'Syne, sans-serif' }}
              >
                What we do
              </p>

              {[
                { num: '01', label: 'Website Design & Dev' },
                { num: '02', label: 'SEO & Google Rankings' },
                { num: '03', label: 'Google Ads Management' },
                { num: '04', label: 'Business Automations' },
                { num: '05', label: 'Custom Web Apps' },
                { num: '06', label: 'Hosting & Migrations' },
                { num: '07', label: 'Social Media' },
              ].map((item, i) => (
                <motion.div
                  key={item.num}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 + i * 0.08, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  className="flex items-center gap-4 py-3 group cursor-default"
                  style={{ borderBottom: i < 6 ? '1px solid var(--border-color)' : 'none' }}
                >
                  <span
                    className="text-xs font-mono font-bold tabular-nums"
                    style={{ color: 'var(--bb-gold-dim)', minWidth: '2rem' }}
                  >
                    {item.num}
                  </span>
                  <span
                    className="text-base font-medium transition-colors duration-200 group-hover:text-gold"
                    style={{ color: 'var(--bb-cream)', fontFamily: 'Syne, sans-serif' }}
                  >
                    {item.label}
                  </span>
                  <span
                    className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-sm"
                    style={{ color: 'var(--bb-gold)' }}
                  >
                    →
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs tracking-widest uppercase" style={{ color: '#9CA3AF', fontFamily: 'Inter, sans-serif' }}>Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
          className="w-px h-8"
          style={{ background: 'linear-gradient(to bottom, var(--bb-gold), transparent)' }}
        />
      </motion.div>
    </section>
  );
}
