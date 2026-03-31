import Testimonials from '@/components/ui/Testimonials';

const testimonialData = [
  {
    name: 'Iglesia Hispana Macedonia',
    role: 'Church · ihmacedonia.org',
    image: '/TioChurch.png',
    feedback: 'Bright Byte did an awesome job on our site! It works great in three languages and looks amazing. Super easy to work with and really cared about the details. We are super happy with how it turned out!',
    website: 'https://www.ihmacedonia.org/',
    highlight: 'Trilingual site with SEO',
  },
  {
    name: 'Luz Y Vida',
    role: 'Ministry · luzyvidamc.com',
    image: '/LuzYVida.png',
    feedback: "Bright Byte built us a super fast site that looks great on any device. The mobile experience is smooth and loads instantly. They really nailed performance and design. Couldn't be happier with the results!",
    website: 'https://www.luzyvidamc.com/en',
    highlight: 'Mobile-first performance',
  },
];

export default function TestimonialsSection() {
  return <Testimonials testimonials={testimonialData} />;
}
