'use client';

import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import HeroSection from '@/components/landingPageComponents/heroSection';
import Services from '@/components/landingPageComponents/servicesSection/services';
import StatsBar from '@/components/landingPageComponents/StatsBar';
import Portfolio from '@/components/landingPageComponents/Portfolio';
import Testimonials from '@/components/landingPageComponents/testimonials';
import About from '@/components/landingPageComponents/About';

function ContactSection({ contactRef }: { contactRef: React.RefObject<HTMLDivElement> }) {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
    service: 'website',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formState),
      });
      if (res.ok) {
        setIsSubmitted(true);
        setFormState({ name: '', email: '', message: '', service: 'website' });
      }
    } catch (err) {
      console.error('Contact form error:', err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact-section"
      ref={contactRef}
      className="py-24 relative overflow-hidden"
      style={{ background: 'var(--bb-navy)' }}
    >
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(var(--bb-cream) 1px, transparent 1px),
            linear-gradient(90deg, var(--bb-cream) 1px, transparent 1px)
          `,
          backgroundSize: '64px 64px',
        }}
      />
      {/* Gold glow */}
      <div
        className="absolute bottom-0 right-0 w-96 h-96 pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(212,168,67,0.07) 0%, transparent 70%)',
          transform: 'translate(30%, 30%)',
        }}
      />

      <div className="max-w-6xl mx-auto px-6 relative">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-14"
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="bb-divider" />
            <span
              className="text-xs uppercase tracking-widest font-semibold"
              style={{ color: 'var(--bb-gold)', fontFamily: 'Syne, sans-serif' }}
            >
              Get In Touch
            </span>
          </div>
          <h2
            className="text-4xl md:text-5xl font-bold mb-3"
            style={{ fontFamily: 'Syne, sans-serif', color: 'var(--bb-cream)' }}
          >
            Let&apos;s build something.
          </h2>
          <p
            className="text-lg max-w-lg"
            style={{ color: '#64748B', fontFamily: 'Inter, sans-serif' }}
          >
            Share your project details and we&apos;ll get back to you the same day. No pressure, no pitch deck.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">

          {/* Left info panel */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-2 flex flex-col justify-between"
          >
            <div className="space-y-6">
              <div>
                <p
                  className="text-xs uppercase tracking-widest font-semibold mb-2"
                  style={{ color: 'var(--bb-gold)', fontFamily: 'Syne, sans-serif' }}
                >
                  Phone
                </p>
                <a
                  href="tel:9195279777"
                  className="text-lg font-semibold transition-colors duration-200"
                  style={{ color: 'var(--bb-cream)', fontFamily: 'Syne, sans-serif' }}
                >
                  (919) 527-9777
                </a>
              </div>
              <div>
                <p
                  className="text-xs uppercase tracking-widest font-semibold mb-2"
                  style={{ color: 'var(--bb-gold)', fontFamily: 'Syne, sans-serif' }}
                >
                  Email
                </p>
                <a
                  href="mailto:abelpinales97@gmail.com"
                  className="text-base transition-colors duration-200"
                  style={{ color: '#94A3B8', fontFamily: 'Inter, sans-serif' }}
                >
                  abelpinales97@gmail.com
                </a>
              </div>
              <div>
                <p
                  className="text-xs uppercase tracking-widest font-semibold mb-2"
                  style={{ color: 'var(--bb-gold)', fontFamily: 'Syne, sans-serif' }}
                >
                  Location
                </p>
                <p style={{ color: '#94A3B8', fontFamily: 'Inter, sans-serif' }}>
                  Raleigh, NC (available remotely)
                </p>
              </div>
            </div>

            {/* Mini trust strip */}
            <div
              className="mt-10 p-5 rounded-xl"
              style={{ background: 'var(--bb-navy-soft)', border: '1px solid var(--border-color)' }}
            >
              <p
                className="text-sm font-semibold mb-1"
                style={{ color: 'var(--bb-cream)', fontFamily: 'Syne, sans-serif' }}
              >
                Fast response
              </p>
              <p
                className="text-sm"
                style={{ color: '#64748B', fontFamily: 'Inter, sans-serif' }}
              >
                Every inquiry gets a response within hours, not days.
              </p>
            </div>
          </motion.div>

          {/* Right form */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-3"
          >
            <div
              className="rounded-2xl p-8"
              style={{ background: 'var(--bb-navy-soft)', border: '1px solid var(--border-color)' }}
            >
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4 }}
                  className="text-center py-12"
                >
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                    style={{ background: 'rgba(212,168,67,0.15)' }}
                  >
                    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="var(--bb-gold)" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3
                    className="text-2xl font-bold mb-2"
                    style={{ fontFamily: 'Syne, sans-serif', color: 'var(--bb-cream)' }}
                  >
                    Message sent!
                  </h3>
                  <p
                    className="mb-6"
                    style={{ color: '#64748B', fontFamily: 'Inter, sans-serif' }}
                  >
                    I&apos;ll be in touch with you shortly.
                  </p>
                  <button
                    className="btn btn-gold-outline rounded-full px-8"
                    onClick={() => setIsSubmitted(false)}
                  >
                    Send another
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label
                        className="block text-xs font-semibold mb-2 uppercase tracking-wide"
                        style={{ color: 'var(--bb-gold)', fontFamily: 'Syne, sans-serif' }}
                      >
                        Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formState.name}
                        onChange={handleChange}
                        placeholder="Your name"
                        required
                        className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all duration-200"
                        style={{
                          background: 'var(--bb-navy)',
                          border: '1px solid var(--border-color)',
                          color: 'var(--bb-cream)',
                          fontFamily: 'Inter, sans-serif',
                        }}
                        onFocus={e => (e.currentTarget.style.borderColor = 'var(--bb-gold)')}
                        onBlur={e => (e.currentTarget.style.borderColor = 'var(--border-color)')}
                      />
                    </div>
                    <div>
                      <label
                        className="block text-xs font-semibold mb-2 uppercase tracking-wide"
                        style={{ color: 'var(--bb-gold)', fontFamily: 'Syne, sans-serif' }}
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formState.email}
                        onChange={handleChange}
                        placeholder="your@email.com"
                        required
                        className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all duration-200"
                        style={{
                          background: 'var(--bb-navy)',
                          border: '1px solid var(--border-color)',
                          color: 'var(--bb-cream)',
                          fontFamily: 'Inter, sans-serif',
                        }}
                        onFocus={e => (e.currentTarget.style.borderColor = 'var(--bb-gold)')}
                        onBlur={e => (e.currentTarget.style.borderColor = 'var(--border-color)')}
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      className="block text-xs font-semibold mb-2 uppercase tracking-wide"
                      style={{ color: 'var(--bb-gold)', fontFamily: 'Syne, sans-serif' }}
                    >
                      Service
                    </label>
                    <select
                      name="service"
                      value={formState.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all duration-200"
                      style={{
                        background: 'var(--bb-navy)',
                        border: '1px solid var(--border-color)',
                        color: 'var(--bb-cream)',
                        fontFamily: 'Inter, sans-serif',
                      }}
                      onFocus={e => (e.currentTarget.style.borderColor = 'var(--bb-gold)')}
                      onBlur={e => (e.currentTarget.style.borderColor = 'var(--border-color)')}
                    >
                      <option value="website">Website Design & Development</option>
                      <option value="seo">SEO & Google Rankings</option>
                      <option value="ads">Google Ads Management</option>
                      <option value="automation">Business Automations</option>
                      <option value="app">Custom Web App</option>
                      <option value="hosting">Hosting & Migration</option>
                      <option value="social">Social Media Management</option>
                      <option value="other">Not sure yet</option>
                    </select>
                  </div>

                  <div>
                    <label
                      className="block text-xs font-semibold mb-2 uppercase tracking-wide"
                      style={{ color: 'var(--bb-gold)', fontFamily: 'Syne, sans-serif' }}
                    >
                      Message
                    </label>
                    <textarea
                      name="message"
                      value={formState.message}
                      onChange={handleChange}
                      placeholder="Tell us about your project. The more detail, the better."
                      required
                      rows={5}
                      className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all duration-200 resize-none"
                      style={{
                        background: 'var(--bb-navy)',
                        border: '1px solid var(--border-color)',
                        color: 'var(--bb-cream)',
                        fontFamily: 'Inter, sans-serif',
                      }}
                      onFocus={e => (e.currentTarget.style.borderColor = 'var(--bb-gold)')}
                      onBlur={e => (e.currentTarget.style.borderColor = 'var(--border-color)')}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn btn-gold rounded-full w-full text-base"
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
              )}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

export default function Home() {
  const contactRef = useRef<HTMLDivElement>(null);

  const scrollToContact = () => {
    contactRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <main style={{ overflowX: 'hidden' }}>
      <HeroSection scrollToContact={scrollToContact} />
      <StatsBar />
      <Portfolio />
      <Testimonials />
      <Services />
      <About />
      <ContactSection contactRef={contactRef} />
    </main>
  );
}
