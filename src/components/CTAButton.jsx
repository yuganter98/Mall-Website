import { motion } from 'framer-motion';

export default function CTAButton({ children, variant = 'primary', href, onClick, className = '' }) {
  const base =
    'inline-flex items-center gap-2 px-8 py-4 text-sm tracking-[0.15em] uppercase font-medium transition-all duration-300 cursor-pointer select-none relative overflow-hidden';

  const variants = {
    primary:
      'bg-[#C9A84C] text-[#0A0E1A] hover:bg-[#E2C97E] shadow-[0_0_30px_rgba(201,168,76,0.3)] hover:shadow-[0_0_50px_rgba(201,168,76,0.5)]',
    outline:
      'border border-[#C9A84C] text-[#C9A84C] hover:bg-[#C9A84C] hover:text-[#0A0E1A]',
    blue:
      'bg-[#1B6CA8] text-white hover:bg-[#2A85CA] shadow-[0_0_30px_rgba(27,108,168,0.3)]',
    ghost:
      'text-[#C9A84C] hover:text-[#E2C97E] pb-1 px-0',
  };

  const Tag = href ? 'a' : 'button';

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className="inline-block"
    >
      <Tag
        href={href}
        onClick={onClick}
        className={`${base} ${variants[variant]} ${variant === 'ghost' ? 'cta-underline-hover' : ''} ${className}`}
      >
        {children}
        {/* Sliding underline for ghost variant */}
        {variant === 'ghost' && (
          <span
            style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              width: '100%',
              height: '1px',
              background: '#C9A84C',
              transform: 'scaleX(0)',
              transformOrigin: 'left',
              transition: 'transform 0.3s ease',
            }}
            className="cta-underline"
          />
        )}
      </Tag>
    </motion.div>
  );
}
