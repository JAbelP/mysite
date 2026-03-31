'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionHeader from '@/components/ui/SectionHeader';

const services = [
  {
    num: "01",
    title: "Website Design & Development",
    desc: "We build you a website that looks great, loads fast, and turns visitors into paying customers. Works perfectly on phones and computers.",
    tags: ["Custom Design", "Mobile-Friendly", "Fast Loading"],
  },
  {
    num: "02",
    title: "SEO & Google Rankings",
    desc: "Get found. From technical SEO to content strategy, we've gotten clients ranking on page one and kept them there.",
    tags: ["Google Rankings", "Search Traffic", "Local SEO"],
  },
  {
    num: "03",
    title: "Google Ads Management",
    desc: "Paid search that actually pays off. We set up, optimize, and manage Google Ads campaigns so your budget works harder.",
    tags: ["Paid Ads", "Campaign Setup", "Budget Optimization"],
  },
  {
    num: "04",
    title: "Business Automations",
    desc: "Stop doing repetitive tasks by hand. We set up smart systems that handle follow-ups, reminders, and reports automatically while you focus on running your business.",
    tags: ["Time Savings", "Lead Follow-Up", "Auto Workflows"],
  },
  {
    num: "05",
    title: "Custom Web Applications",
    desc: "Need something that doesn't exist off the shelf? We build custom online tools tailored exactly to how your business works.",
    tags: ["Custom Tools", "Built for You", "Web Software"],
  },
  {
    num: "06",
    title: "Hosting & Migration",
    desc: "We've saved clients $1,000+ per year by migrating them off GoDaddy onto Google Workspace and modern hosting. Stop overpaying.",
    tags: ["Google Workspace", "Cost Savings", "Easy Move"],
  },
  {
    num: "07",
    title: "Social Media Management",
    desc: "Consistent, on-brand content that keeps your audience engaged. We handle posting so you can handle your business.",
    tags: ["Content", "Scheduling", "Branding"],
  },
  {
    num: "08",
    title: "Translation & Multilingual",
    desc: "Reach more people. We've built trilingual sites for churches and community orgs covering Spanish, Portuguese, and English seamlessly.",
    tags: ["Spanish", "Portuguese", "English"],
  },
];

/* ── Desktop card (unchanged look) ── */
function ServiceCard({ s, i }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
      className="bb-card rounded-xl p-6 flex flex-col group cursor-default"
    >
      <span
        className="text-xs font-mono font-bold mb-4 block"
        style={{ color: 'var(--bb-gold-dim)' }}
      >
        {s.num}
      </span>
      <h3
        className="text-base font-bold mb-3 leading-snug"
        style={{ fontFamily: 'Syne, sans-serif', color: 'var(--text-primary)' }}
      >
        {s.title}
      </h3>
      <p
        className="text-sm leading-relaxed flex-1"
        style={{ color: 'var(--text-secondary)', fontFamily: 'Inter, sans-serif' }}
      >
        {s.desc}
      </p>

      <button
        onClick={() => setOpen(o => !o)}
        className="mt-4 text-left text-xs font-semibold flex items-center gap-1 transition-colors duration-200"
        style={{
          color: 'var(--bb-gold)',
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          padding: 0,
          fontFamily: 'Inter, sans-serif',
        }}
      >
        Details {open ? '▴' : '▾'}
      </button>

      {open && (
        <div className="flex flex-wrap gap-1 mt-3">
          {s.tags.map(tag => (
            <span
              key={tag}
              className="text-xs px-2 py-0.5 rounded-full font-medium"
              style={{
                background: 'rgba(212,168,67,0.1)',
                color: 'var(--bb-gold)',
                fontFamily: 'Inter, sans-serif',
              }}
            >
              {tag}
            </span>
          ))}
        </div>
      )}
    </motion.div>
  );
}

/* ── Mobile accordion row ── */
function ServiceAccordionRow({ s, i, isOpen, onToggle }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-20px' }}
      transition={{ duration: 0.4, delay: i * 0.04, ease: [0.22, 1, 0.36, 1] }}
      style={{ borderBottom: '1px solid var(--border-color)' }}
    >
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between py-4 text-left"
        style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '1rem 0' }}
      >
        <div className="flex items-center gap-3">
          <span
            className="text-xs font-mono font-bold tabular-nums"
            style={{ color: 'var(--bb-gold-dim)', minWidth: '1.75rem' }}
          >
            {s.num}
          </span>
          <span
            className="text-base font-bold leading-snug"
            style={{ fontFamily: 'Syne, sans-serif', color: 'var(--text-primary)' }}
          >
            {s.title}
          </span>
        </div>
        <span
          className="ml-4 flex-shrink-0 text-lg leading-none transition-transform duration-300"
          style={{
            color: 'var(--bb-gold)',
            transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)',
            display: 'inline-block',
          }}
        >
          +
        </span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            style={{ overflow: 'hidden' }}
          >
            <div className="pb-4">
              <p
                className="text-sm leading-relaxed mb-3"
                style={{ color: 'var(--text-secondary)', fontFamily: 'Inter, sans-serif' }}
              >
                {s.desc}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {s.tags.map(tag => (
                  <span
                    key={tag}
                    className="text-xs px-2.5 py-0.5 rounded-full font-medium"
                    style={{
                      background: 'rgba(212,168,67,0.1)',
                      color: 'var(--bb-gold)',
                      fontFamily: 'Inter, sans-serif',
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function Services() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (i) => setOpenIndex(prev => prev === i ? null : i);

  return (
    <section
      id="services-section"
      className="py-24 relative"
      style={{ background: 'var(--surface-bg)' }}
    >
      <div className="max-w-6xl mx-auto px-6">

        <SectionHeader
          eyebrow="What We Offer"
          title="Everything your business needs online."
          subtitle="No package deals. No upsells. Just the services that make sense for your goals."
        />

        {/* Mobile: accordion list */}
        <div className="md:hidden">
          {services.map((s, i) => (
            <ServiceAccordionRow
              key={s.num}
              s={s}
              i={i}
              isOpen={openIndex === i}
              onToggle={() => toggle(i)}
            />
          ))}
        </div>

        {/* Desktop: card grid */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {services.map((s, i) => (
            <ServiceCard key={s.num} s={s} i={i} />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <p
            className="text-base mb-4"
            style={{ color: 'var(--text-secondary)', fontFamily: 'Inter, sans-serif' }}
          >
            Not sure what you need? Let&apos;s figure it out together.
          </p>
          <a href="#contact-section" className="btn btn-gold rounded-full px-10">
            Get a Free Consultation
          </a>
        </motion.div>

      </div>
    </section>
  );
}
