'use client';

import { motion } from 'framer-motion';
import SectionHeader from '@/components/ui/SectionHeader';

const services = [
  {
    num: "01",
    title: "Website Design & Development",
    desc: "Custom-built sites in Next.js or WordPress. Fast, mobile-first, and designed to convert visitors into customers. Not just look pretty.",
    tags: ["Next.js", "WordPress", "Mobile-First"],
  },
  {
    num: "02",
    title: "SEO & Google Rankings",
    desc: "Get found. From technical SEO to content strategy, we've gotten clients ranking on page one and kept them there.",
    tags: ["On-Page SEO", "Technical SEO", "Analytics"],
  },
  {
    num: "03",
    title: "Google Ads Management",
    desc: "Paid search that actually pays off. We set up, optimize, and manage Google Ads campaigns so your budget works harder.",
    tags: ["PPC", "Campaign Setup", "Optimization"],
  },
  {
    num: "04",
    title: "Business Automations",
    desc: "Stop doing the same tasks manually. We build automations that handle lead follow-ups, reports, and workflows while you focus on what matters.",
    tags: ["Zapier", "n8n", "Custom Workflows"],
  },
  {
    num: "05",
    title: "Custom Web Applications",
    desc: "Need something that doesn't exist off the shelf? We build custom web apps in Next.js and HTML tailored to your exact workflow.",
    tags: ["Next.js", "React", "Full-Stack"],
  },
  {
    num: "06",
    title: "Hosting & Migration",
    desc: "We've saved clients $1,000+ per year by migrating them off GoDaddy onto Google Workspace and modern hosting. Stop overpaying.",
    tags: ["Google Workspace", "GoDaddy Migration", "Cost Savings"],
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
    tags: ["i18n", "Spanish", "Portuguese"],
  },
];

export default function Services() {
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

        {/* Service grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {services.map((s, i) => (
            <motion.div
              key={s.num}
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
              <div className="flex flex-wrap gap-1 mt-4">
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
            </motion.div>
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
