import { motion, useScroll, useTransform } from 'framer-motion';
import React, { useRef } from 'react';
import styles from './styles.module.scss';

/**
 * A React component that renders a list with animated `<li>` elements based on scroll progress.
 *
 * @param {Object} props - The props object.
 * @param {string[]} props.items - The list of items to be displayed and animated.
 * @returns {JSX.Element} A list element with animated `<li>` elements.
 *
 * @example
 * <AnimatedList items={["Item 1", "Item 2", "Item 3"]} />
 */
export default function AnimatedList({ items }) {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start 0.9", "start 0.550"],
  });

  return (
    <ul ref={container} className={styles.list}>
      {items.map((item, i) => {
        const start = i / items.length;
        const end = start + 1 / items.length;
        return (
          <AnimatedListItem key={i} progress={scrollYProgress} range={[start, end]}>
            {item}
          </AnimatedListItem>
        );
      })}
    </ul>
  );
}

const AnimatedListItem = ({ children, progress, range }) => {
  const opacity = useTransform(progress, range, [0, 1]);
  const translateX = useTransform(progress, range, [100, 0]); // Slide in from the right

  return (
    <motion.li
      style={{
        opacity: opacity,
        x: translateX,
      }}
      className={`${styles.listItem} mb-3`} // Added margin-bottom for vertical spacing
    >
      {children}
    </motion.li>
  );
};
