"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const words = ["Website Design", "Copywriting", "Hosting", "SEO", "Analytics", "Marketing", "Social Media"];

/**
 * A React functional component that renders a typing effect animation.
 * The component cycles through an array of words, typing and deleting each word
 * with a configurable speed and pause duration.
 *
 * @component
 * @returns {JSX.Element} A motion-enhanced div containing the animated text and a blinking cursor.
 *
 * @remarks
 * - The typing and deleting speeds are controlled by the `speed` variable.
 * - The component uses `useState` to manage the current word index, the displayed text, 
 *   and whether the text is being deleted.
 * - The `useEffect` hook handles the typing and deleting logic, updating the text at intervals.
 * - A blinking cursor is implemented using `motion.span` from Framer Motion.
 *
 * @example
 * ```tsx
 * import TypingEffect from './TypingHero';
 *
 * function App() {
 *   return (
 *     <div>
 *       <TypingEffect />
 *     </div>
 *   );
 * }
 * ```
 */
export default function TypingEffect() {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const handleTyping = () => {
      const currentWord = words[index];
      if (isDeleting) {
        setText((prev) => prev.slice(0, -1));
        if (text === "") {
          setIsDeleting(false);
          setIndex((prev) => (prev + 1) % words.length);
        }
      } else {
        setText(currentWord.slice(0, text.length + 1));
        if (text === currentWord) {
          setTimeout(() => setIsDeleting(true), 1000); // Pause before deleting
        }
      }
    };

    const timer = setTimeout(handleTyping, 200);
    return () => clearTimeout(timer);
  }, [index, isDeleting, text]); // Added missing dependencies

  return (
    <motion.div className="text-2xl font-mono text-white">
      {text}
      <motion.span
        animate={{ opacity: [0, 1] }}
        transition={{ repeat: Infinity, duration: 0.8 }}
      >
        |
      </motion.span>
    </motion.div>
  );
}
