import { motion } from 'framer-motion';

// Pure layout wrapper — no animation logic, just semantic grouping
export function SectionWrapper({ children, className = '', id }) {
  return (
    <div id={id} className={className}>
      {children}
    </div>
  );
}

// Self-contained scroll-reveal animation — works anywhere, no parent required
export function FadeUp({ children, className = '', delay = 0 }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.65, ease: [0.25, 0.1, 0.25, 1], delay }}
    >
      {children}
    </motion.div>
  );
}

// Reusable fade-in for non-directional reveals
export function FadeIn({ children, className = '', delay = 0 }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.8, ease: 'easeOut', delay }}
    >
      {children}
    </motion.div>
  );
}
