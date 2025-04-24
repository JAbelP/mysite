import { motion, useScroll, useTransform } from 'framer-motion';
import React, { useRef } from 'react';
import styles from './styles.module.scss';

/**
 * A functional React component that renders a paragraph with a fade-in effect
 * based on the user's scroll position.
 *
 * @param {Object} props - The props object.
 * @param {string} props.paragraph - The text content to display inside the paragraph.
 * 
 * @returns {JSX.Element} A motion-enabled paragraph element with scroll-based opacity animation.
 */
export default function Paragraph({paragraph}) {

  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    // offset: ["start 0.9", "start 0.25"]
    offset: ["start 0.7", "start 0.45"]
  })

  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1])

  return (
    <motion.p 
      ref={container}         
      className={styles.paragraph}
      style={{opacity}}
    >
      {paragraph}
    </motion.p>
  )
}