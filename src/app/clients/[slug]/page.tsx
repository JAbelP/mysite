import pool from '@/lib/db';
import { notFound } from 'next/navigation';

interface Lead {
  company_name: string;
  service_type: string;
  description: string;
  contact_phone: string;
  contact_email: string;
  website: string;
  primary_color: string;
  secondary_color: string;
  accent_color: string;
  slogan: string;
  contact_address: string;
  linkedin: string;
  instagram: string;
  facebook: string;
}

export default async function ClientPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  const { rows } = await pool.query<Lead>(
    'SELECT * FROM leads WHERE slug = $1 AND status != $2',
    [slug, 'discarded']
  );

  if (!rows.length) notFound();

  const lead = rows[0];
  const primary   = lead.primary_color   || '#1a1a2e';
  const secondary = lead.secondary_color || '#ffffff';
  const accent    = lead.accent_color    || primary;

  return (
    <>
      {/* BrightByte bar */}
      <div style={{
        background: '#0f172a',
        padding: '8px 20px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}>
        <span style={{ color: '#94a3b8', fontSize: '12px' }}>
          Website by{' '}
          <a
            href="https://brightbyte.dev"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: '#60a5fa', textDecoration: 'none', fontWeight: 600 }}
          >
            BrightByte
          </a>
        </span>
        <a
          href="https://brightbyte.dev"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: '#60a5fa', fontSize: '11px', textDecoration: 'none' }}
        >
          Get your own site →
        </a>
      </div>

      {/* Generated client homepage */}
      <div style={{ '--primary': primary, '--secondary': secondary, '--accent': accent } as React.CSSProperties}>

        {/* Hero */}
        <section style={{ background: primary, color: '#fff', padding: '80px 24px', textAlign: 'center' }}>
          <h1 style={{ fontSize: '2.5rem', fontWeight: 800, margin: '0 0 12px' }}>
            {lead.company_name}
          </h1>
          {lead.slogan && (
            <p style={{ fontSize: '1.2rem', opacity: 0.85, margin: '0 0 32px' }}>
              {lead.slogan}
            </p>
          )}
          {lead.contact_phone && (
            <a href={`tel:${lead.contact_phone}`} style={{
              display: 'inline-block',
              background: accent,
              color: '#fff',
              padding: '14px 32px',
              borderRadius: '8px',
              fontWeight: 700,
              fontSize: '1.1rem',
              textDecoration: 'none',
            }}>
              Call Now — {lead.contact_phone}
            </a>
          )}
        </section>

        {/* About */}
        {lead.description && (
          <section style={{ padding: '60px 24px', maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
            <h2 style={{ color: primary, marginBottom: '16px' }}>About Us</h2>
            <p style={{ fontSize: '1.1rem', lineHeight: 1.7, color: '#374151' }}>
              {lead.description}
            </p>
          </section>
        )}

        {/* Contact */}
        <section style={{ background: secondary, padding: '60px 24px', textAlign: 'center' }}>
          <h2 style={{ color: primary, marginBottom: '24px' }}>Get In Touch</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', alignItems: 'center' }}>
            {lead.contact_phone && (
              <a href={`tel:${lead.contact_phone}`} style={{ color: primary, fontSize: '1.2rem', fontWeight: 700, textDecoration: 'none' }}>
                📞 {lead.contact_phone}
              </a>
            )}
            {lead.contact_email && (
              <a href={`mailto:${lead.contact_email}`} style={{ color: primary, textDecoration: 'none' }}>
                📧 {lead.contact_email}
              </a>
            )}
            {lead.contact_address && (
              <p style={{ color: '#374151', margin: 0 }}>📍 {lead.contact_address}</p>
            )}
          </div>

          {/* Socials */}
          {(lead.linkedin || lead.instagram || lead.facebook) && (
            <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', marginTop: '24px' }}>
              {lead.linkedin  && <a href={lead.linkedin}  target="_blank" rel="noopener noreferrer" style={{ color: primary }}>LinkedIn</a>}
              {lead.instagram && <a href={`https://instagram.com/${lead.instagram.replace('@','')}`} target="_blank" rel="noopener noreferrer" style={{ color: primary }}>Instagram</a>}
              {lead.facebook  && <a href={lead.facebook}  target="_blank" rel="noopener noreferrer" style={{ color: primary }}>Facebook</a>}
            </div>
          )}
        </section>

        {/* Footer */}
        <footer style={{ background: primary, color: 'rgba(255,255,255,0.6)', padding: '20px 24px', textAlign: 'center', fontSize: '13px' }}>
          © {new Date().getFullYear()} {lead.company_name}. All rights reserved.
        </footer>
      </div>
    </>
  );
}
