import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from 'next/image';

/**
 * AnimatedPhone is a React functional component that renders a phone mockup
 * with animation effects based on the user's scroll position.
 *
 * @param {Object} props - The properties passed to the component.
 * @param {number} [props.rotation=0] - The rotation angle (in degrees) to apply to the phone mockup.
 * @param {React.ReactNode} [props.children] - Custom content to display inside the phone mockup.
 * 
 * @returns {JSX.Element} A motion-enabled div containing a phone mockup with scroll-based animations.
 *
 * @requires useRef - React hook for creating a reference to the DOM element.
 * @requires useScroll - Framer Motion hook for tracking scroll progress of a target element.
 * @requires useTransform - Framer Motion hook for mapping scroll progress to animation values.
 * @requires motion - Framer Motion component for enabling animations.
 */
export default function AnimatedPhone(props) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref, // Tracks the element
    offset: ["start end", "center center"], // Start animating when the element enters the viewport
  });

  // Animate position and opacity based on scroll
  const x = useTransform(scrollYProgress, [0, 1], [100, 0]); // Moves from right to center
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]); // Fades in

  return (
    <motion.div
      ref={ref}
      className="col-start-2 row-start-1"
      style={{ x, opacity }}
    >
      <div
        className={`mockup-phone border-l-gray-500`}
        style={{ transform: `rotate(${props.rotation || 0}deg)` }}
      >
        <div className="mockup-phone-camera"></div>
        <div className="mockup-phone-display w-80 h-[685px] relative">
          <Image
            src="/path/to/image.jpg"
            alt="Description"
            width={500}
            height={500}
            className="absolute inset-0 w-full h-full object-cover"
          />
          {props.children && (
            <div className="absolute inset-0 flex items-center justify-center text-white text-xl font-bold z-10">
              {props.children}
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}
