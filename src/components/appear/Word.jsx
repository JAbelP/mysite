import { motion, useScroll, useTransform } from 'framer-motion';
import React, { useRef } from 'react';
import styles from './styles.module.scss';

/**
 * A React component that renders a paragraph with animated words based on scroll progress.
 * Each word in the paragraph is wrapped in a `Word` component, which animates its appearance
 * as the user scrolls.
 *
 * @param {Object} props - The props object.
 * @param {string} props.paragraph - The paragraph text to be displayed and animated.
 * @returns {JSX.Element} A paragraph element with animated words.
 */
export default function Paragraph({paragraph}) {

  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start 0.9", "start 0.25"]
  })

  const words = paragraph.split(" ")
  return (
    <p 
      ref={container}         
      className={styles.paragraph}
    >
    {
      words.map( (word, i) => {
        const start = i / words.length
        const end = start + (1 / words.length)
        return <Word key={i} progress={scrollYProgress} range={[start, end]}>{word}</Word>
      })
    }
    </p>
  )
}

const Word = ({children, progress, range}) => {
  const opacity = useTransform(progress, range, [0, 1])
  return <span className={styles.word}>
    <span className={styles.shadow}>{children}</span>
    <motion.span style={{opacity: opacity}}>{children}</motion.span>
  </span>
}
