'use client';
import HeroSection from "@/components/landingPageComponents/heroSection";
import Services from "@/components/landingPageComponents/servicesSection/services";
import Bullet from "@/components/appear/Bullet";
import { motion } from "framer-motion";
import Paragraph from "@/components/appear/Paragraph";
import Phone from "@/components/appear/Phone";

export default function Home() {
  const contactRef = useRef<HTMLDivElement>(null);

  const scrollToContact = () => {
    contactRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  function ContactSection() {
    const [formState, setFormState] = useState({
      name: "",
      email: "",
      message: "",
      service: "website",
    })
  
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [isSubmitted, setIsSubmitted] = useState(false)
  
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
      setFormState({
        ...formState,
        [e.target.name]: e.target.value,
      })
    }
  
    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault()
      setIsSubmitting(true)
  
      // Simulate form submission
      setTimeout(() => {
        setIsSubmitting(false)
        setIsSubmitted(true)
        setFormState({
          name: "",
          email: "",
          message: "",
          service: "website",
        })
      }, 1500)
    }
  
    return (
      <section ref={contactRef} className="py-16 bg-gradient-to-b from-neutral to-neutral-focus text-neutral-content">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-12">
              <motion.h2
                className="text-4xl md:text-5xl font-bold mb-4"
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                Let's Work Together
              </motion.h2>
              <motion.p
                className="text-xl max-w-2xl mx-auto"
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
              >
                Ready to take your digital presence to the next level? Get in touch today and let's create something
                amazing together!
              </motion.p>
            </div>
  
            <div className="card bg-base-100 shadow-2xl overflow-hidden">
              <div className="md:flex">
                <div className="md:w-1/3 bg-primary p-8 text-primary-content flex flex-col justify-center">
                  <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 mr-3"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>
                      <span>(919) 527-9777</span>
                    </div>
                    <div className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 mr-3"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                      <span>abelpinales97@gmail.com</span>
                    </div>
                    <div className="flex items-center">
                    </div>
                  </div>
                  <div className="mt-8">
                    <h4 className="font-semibold mb-3">Follow Us</h4>
                    <div className="flex space-x-4">
                      <a href="#" className="btn btn-circle btn-sm btn-outline">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          className="bi bi-facebook"
                          viewBox="0 0 16 16"
                        >
                          <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                        </svg>
                      </a>
                      <a href="#" className="btn btn-circle btn-sm btn-outline">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          className="bi bi-twitter"
                          viewBox="0 0 16 16"
                        >
                          <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                        </svg>
                      </a>
                      <a href="#" className="btn btn-circle btn-sm btn-outline">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          className="bi bi-linkedin"
                          viewBox="0 0 16 16"
                        >
                          <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                        </svg>
                      </a>
                      <a href="#" className="btn btn-circle btn-sm btn-outline">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          className="bi bi-instagram"
                          viewBox="0 0 16 16"
                        >
                          <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="md:w-2/3 p-8">
                  {isSubmitted ? (
                    <motion.div
                      className="text-center py-8"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5 }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-16 w-16 mx-auto text-success mb-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <h3 className="text-2xl font-bold mb-2 text-base-content">Message Sent!</h3>
                      <p className="text-lg text-base-content">We'll be in touch with you shortly.</p>
                      <button className="btn btn-primary mt-6" onClick={() => setIsSubmitted(false)}>
                        Send Another Message
                      </button>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleSubmit}>
                      <h3 className="text-2xl font-bold mb-6 text-base-content">Send Us a Message</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="form-control">
                          <label className="label">
                            <span className="label-text">Name</span>
                          </label>
                          <input
                            type="text"
                            name="name"
                            value={formState.name}
                            onChange={handleChange}
                            placeholder="Your name"
                            className="input input-bordered"
                            required
                          />
                        </div>
  
                        <div className="form-control">
                          <label className="label">
                            <span className="label-text">Email</span>
                          </label>
                          <input
                            type="email"
                            name="email"
                            value={formState.email}
                            onChange={handleChange}
                            placeholder="Your email"
                            className="input input-bordered"
                            required
                          />
                        </div>
                      </div>
  
                      <div className="form-control mt-4">
                        <label className="label">
                          <span className="label-text">Service Interested In</span>
                        </label>
                        <select
                          className="select select-bordered w-full"
                          name="service"
                          value={formState.service}
                          onChange={handleChange}
                        >
                          <option value="website">Website Design</option>
                          <option value="social">Social Media Management</option>
                          <option value="hosting">Website Hosting</option>
                          <option value="seo">SEO Services</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
  
                      <div className="form-control mt-4">
                        <label className="label">
                          <span className="label-text">Message</span>
                        </label>
                        <textarea
                          className="textarea textarea-bordered h-32"
                          name="message"
                          value={formState.message}
                          onChange={handleChange}
                          placeholder="Tell us about your project"
                          required
                        ></textarea>
                      </div>
  
                      <div className="form-control mt-6">
                        <button className={`btn btn-primary ${isSubmitting ? "loading" : ""}`} disabled={isSubmitting}>
                          {isSubmitting ? "Sending..." : "Send Message"}
                        </button>
                      </div>
                    </form>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <main className="">
      <HeroSection />
      <Services />
      
      <div className="phone-w-details flex justify-center">
        <div className="PHONE MODE block md:hidden overflow-x-hidden">
          <Phone rotation={0} />
          <div className="mockup-phone border-gray-500 border-primary my-5">
            <div className="mockup-phone-camera"></div>
            <div className="mockup-phone-display w-80 h-[685px] relative">
              <div className="absolute inset-0 flex items-center justify-center text-white text-xl font-bold">
                <ul className="text-center text-4xl text-wrap px-5">
                  <li className="mb-8">Mobile Ready Websites</li>
                  <li className="mb-8">Blazing Fast Sites :|</li>
                  <li className="mb-8">Affordable Prices</li>
                </ul>
              </div>
              <img
                alt="wallpaper"
                src="https://img.daisyui.com/images/stock/453966.webp"
              />
            </div>
          </div>
        </div>

        <div className="FULL MODE hidden md:block">
          <div className="mx-auto py-9 grid grid-cols-2 gap-1">
            <div className="col-start-1 row-start-1 flex items-center justify-end pr-8 text-5xl">
              <div className="capitalize">

              <div className="items-end text-right mb-14">
                <Paragraph paragraph="Built for Mobile" />
                <Paragraph paragraph="Perfect Everywhere" />
              </div>


              <div className="px-10 text-right text-3xl">

                <Bullet
                  items={[
                    "Fast",
                    "responsive",
                    "Optimized for all screens",
                  ]}
                />
              </div>
              </div>

            </div>

            <Phone rotation={12} />
          </div>
        </div>
      </div>
    </main>
  );
}


