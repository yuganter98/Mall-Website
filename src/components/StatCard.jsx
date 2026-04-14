import { useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { useCountUp } from '../hooks/useCountUp';

export default function StatCard({ value, suffix = '', prefix = '', label, decimals = 0 }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const { count, start } = useCountUp(value, 2200, decimals);

  useEffect(() => {
    if (isInView) start();
  }, [isInView]);

  return (
    <motion.div
      ref={ref}
      className="text-center py-8 px-4"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
    >
      <div
        className="text-5xl md:text-6xl lg:text-7xl font-light tracking-tight mb-3"
        style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', color: '#C9A84C' }}
      >
        {prefix}{decimals > 0 ? count.toFixed(decimals) : Math.floor(count)}{suffix}
      </div>
      <div className="text-xs tracking-[0.2em] uppercase text-[#F5F0E8]/50 mt-2">
        {label}
      </div>
    </motion.div>
  );
}
