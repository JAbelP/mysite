import Image from 'next/image';

export default function Testimonials() {
  const testimonials = [
    {
      name: "Iglesia Hispana Macedonia",
      image: "/TioChurch.png",
      feedback: "Bright Byte did an awesome job on our site! It works great in three languages and looks amazing. Super easy to work with and really cared about the details. We’re super happy with how it turned out!",
      website: "https://www.ihmacedonia.org/",
    },
    {
      name: "Luz Y Vida",
      image: "/LuzYVida.png",
      feedback: "Bright Byte built us a super fast site that looks great on any device. The mobile experience is smooth and loads instantly. They really nailed performance and design. Couldn’t be happier with the results!",
      website: "https://www.luzyvidamc.com/en",
    },
  ];

  return (
    <section className="py-16 bg-base-200 text-base-content">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">What Our Clients Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="card bg-base-100 shadow-lg">
              <div className="card-body">
                <div className="flex items-center mb-4">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={500}
                    height={500}
                    className="w-16 h-16 rounded-full mr-4"
                  />
                  <div>
                    <h3 className="text-xl font-bold">{testimonial.name}</h3>
                    <a
                      href={testimonial.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary underline"
                    >
                      Visit Website
                    </a>
                  </div>
                </div>
                <p className="text-lg">{testimonial.feedback}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
