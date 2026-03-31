'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

function CountUp({ target, prefix = '', suffix = '' }: { target: number; prefix?: string; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 1200;
    const step = 16;
    const increment = target / (duration / step);
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, step);
    return () => clearInterval(timer);
  }, [inView, target]);

  return (
    <span ref={ref}>
      {prefix}{count}{suffix}
    </span>
  );
}

const stats = [
  { value: 1000, prefix: '$', suffix: '+', label: 'Saved per client / year', sub: 'via GoDaddy → Google Workspace migrations' },
  { value: 5,    prefix: '',  suffix: '+', label: 'Sites launched',           sub: 'WordPress, Next.js & custom HTML' },
  { value: 3,    prefix: '',  suffix: '',  label: 'Languages supported',       sub: 'English · Spanish · Portuguese' },
  { value: 100,  prefix: '',  suffix: '%', label: 'Client satisfaction',       sub: 'Every client. Every project.' },
];

export default function StatsBar() {
  return (
    <section
      className="relative overflow-hidden py-20"
      style={{ background: 'var(--bb-navy-soft)' }}
    >
      {/* Gold top border */}
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, var(--bb-gold), transparent)' }} />

      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4">
          {stats.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="text-center lg:text-left lg:px-6 relative"
            >
              {i > 0 && (
                <div
                  className="hidden lg:block absolute left-0 top-1/2 -translate-y-1/2 w-px h-12"
                  style={{ background: 'var(--border-color)' }}
                />
              )}
              <p
                className="text-4xl md:text-5xl font-bold mb-1"
                style={{ fontFamily: 'Syne, sans-serif', color: 'var(--bb-gold)' }}
              >
                <CountUp target={s.value} prefix={s.prefix} suffix={s.suffix} />
              </p>
              <p
                className="text-sm font-semibold mb-1"
                style={{ color: 'var(--bb-cream)', fontFamily: 'Syne, sans-serif' }}
              >
                {s.label}
              </p>
              <p
                className="text-xs"
                style={{ color: '#64748B', fontFamily: 'Inter, sans-serif' }}
              >
                {s.sub}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Gold bottom border */}
      <div className="absolute bottom-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, var(--bb-gold), transparent)' }} />
    </section>
  );
}
