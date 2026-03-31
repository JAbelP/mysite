'use client';

import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const navLinks = [
  { label: 'Services', href: '#services-section' },
  { label: 'Work',     href: '#portfolio-section' },
  { label: 'Reviews',  href: '#testimonial-section' },
  { label: 'About',    href: '#about-section' },
];

const footerServices = [
  { label: 'Website Design', href: '#services-section' },
  { label: 'SEO & Rankings', href: '#services-section' },
  { label: 'Hosting',        href: '#services-section' },
  { label: 'Google Ads',     href: '#services-section' },
  { label: 'Automations',    href: '#services-section' },
  { label: 'Custom Web Apps',href: '#services-section' },
  { label: 'Social Media',   href: '#services-section' },
];

const footerWork = [
  { label: 'heidydelacruz.com', href: 'https://www.heidydelacruz.com', external: true },
  { label: 'ihmacedonia.org',   href: 'https://www.ihmacedonia.org',   external: true },
  { label: 'alabaadios.net',    href: 'https://www.alabaadios.net',    external: true },
  { label: 'luzyvidamc.com',    href: 'https://www.luzyvidamc.com',    external: true },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="bb-dark">
      <head>
        <title>Bright Byte | Web Design, SEO & Digital Solutions</title>
        <meta name="description" content="Bright Byte builds fast, high-converting websites, handles SEO, Google Ads, automations, and saves businesses thousands by migrating away from overpriced hosting." />
        <meta property="og:title" content="Bright Byte | Web Design, SEO & Digital Solutions" />
        <meta property="og:description" content="Custom websites, SEO, Google Ads, automations & more. Serving small businesses with big-agency results." />
        <meta property="og:type" content="website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={`${geistSans.variable} antialiased`}>

        <Navbar
          links={navLinks}
          logoText="BrightByte"
          logoAccent="Byte"
          ctaLabel="Get a Quote"
          ctaHref="#contact-section"
        />

        {children}

        <Footer
          brandName="BrightByte"
          brandAccent="Byte"
          tagline="Building fast, high-converting digital experiences for small businesses. No bloated agencies. No hidden fees. Just results."
          primaryCta={{ label: 'Start a Project', href: '#contact-section' }}
          secondaryCta={{ label: '(919) 527-9777', href: 'tel:9195279777' }}
          columns={[
            { heading: 'Services',    links: footerServices },
            { heading: 'Client Work', links: footerWork },
          ]}
          copyright={`© ${new Date().getFullYear()} Bright Byte. All rights reserved.`}
          footnote="Built with Next.js · Deployed with care"
        />

      </body>
    </html>
  );
}
