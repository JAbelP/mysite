'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import SectionHeader from '@/components/ui/SectionHeader';

const projects = [
  {
    name: 'Heidy De La Cruz',
    url: 'https://www.heidydelacruz.com',
    displayUrl: 'heidydelacruz.com',
    description: 'Podcast coaching website for a Latina entrepreneur. Built on WordPress with Google Ads integration, full SEO optimization, and a high-converting landing page.',
    tags: ['WordPress', 'Google Ads', 'SEO'],
    color: '#D4A843',
  },
  {
    name: 'Iglesia Hispana Macedonia',
    url: 'https://www.ihmacedonia.org',
    displayUrl: 'ihmacedonia.org',
    description: 'Trilingual church website (English, Spanish, Portuguese) with dynamic events, service times, sermon library, and multilingual SEO.',
    tags: ['Multilingual', 'i18n', 'SEO', 'React'],
    color: '#2563EB',
  },
  {
    name: 'Alaba a Dios Radio',
    url: 'https://www.alabaadios.net',
    displayUrl: 'alabaadios.net',
    description: 'Live-streaming Spanish Christian radio station. Custom Next.js app with real-time audio player, community chat, sponsor carousel, and donation flow.',
    tags: ['Next.js', 'Live Streaming', 'Custom App'],
    color: '#A3E635',
  },
];

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.article
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.6, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="group relative rounded-2xl overflow-hidden flex flex-col"
      style={{
        background: 'var(--surface-card)',
        border: `1px solid ${hovered ? project.color + '55' : 'var(--border-color)'}`,
        transition: 'border-color 0.3s ease, box-shadow 0.3s ease',
        boxShadow: hovered ? `0 8px 40px ${project.color}18` : 'none',
      }}
    >
      {/* Site preview iframe */}
      <div className="relative overflow-hidden" style={{ height: 220 }}>
        <div
          className="absolute inset-0 z-10 pointer-events-none"
          style={{
            background: `linear-gradient(to bottom, transparent 60%, var(--surface-card))`,
          }}
        />
        {/* Color accent bar at top */}
        <div className="absolute top-0 left-0 right-0 h-0.5 z-20" style={{ background: project.color }} />
        <iframe
          src={project.url}
          title={project.name}
          className="w-full border-0"
          style={{
            height: 600,
            transform: 'scale(0.366)',
            transformOrigin: 'top left',
            width: '273%',
            pointerEvents: 'none',
          }}
          loading="lazy"
          sandbox="allow-scripts allow-same-origin"
        />
      </div>

      {/* Card body */}
      <div className="p-6 flex flex-col flex-1">
        <div className="flex items-start justify-between mb-3">
          <div>
            <h3
              className="text-lg font-bold mb-0.5"
              style={{ fontFamily: 'Syne, sans-serif', color: 'var(--text-primary)' }}
            >
              {project.name}
            </h3>
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-mono transition-colors duration-200"
              style={{ color: project.color }}
            >
              ↗ {project.displayUrl}
            </a>
          </div>
        </div>

        <p
          className="text-sm leading-relaxed flex-1 mb-4"
          style={{ color: 'var(--text-secondary)', fontFamily: 'Inter, sans-serif' }}
        >
          {project.description}
        </p>

        <div className="flex flex-wrap gap-1.5">
          {project.tags.map(tag => (
            <span
              key={tag}
              className="text-xs px-2.5 py-0.5 rounded-full font-medium"
              style={{
                background: project.color + '18',
                color: project.color,
                fontFamily: 'Inter, sans-serif',
              }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.article>
  );
}

export default function Portfolio() {
  return (
    <section
      id="portfolio-section"
      className="py-24"
      style={{ background: 'var(--surface-bg)' }}
    >
      <div className="max-w-6xl mx-auto px-6">

        <SectionHeader
          eyebrow="Client Work"
          title="Real sites. Real results."
          subtitle="Every project is built from scratch. No templates, no shortcuts."
        />

        {/* Project grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <ProjectCard key={p.name} project={p} index={i} />
          ))}
        </div>

      </div>
    </section>
  );
}
