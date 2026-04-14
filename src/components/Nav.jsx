import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { content } from '../data/content';

export default function Nav() {
  const [activeSection, setActiveSection] = useState('overview');
  const [scrollProgress, setScrollProgress] = useState({});
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);
  const { items } = content.nav;

  useEffect(() => {
    const checkDesktop = () => setIsDesktop(window.innerWidth >= 1024);
    checkDesktop();
    window.addEventListener('resize', checkDesktop);
    return () => window.removeEventListener('resize', checkDesktop);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = items.map(({ id }) => document.getElementById(id)).filter(Boolean);
      const progress = {};
      let currentActive = activeSection;

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        const windowH = window.innerHeight;

        if (rect.top < windowH * 0.6 && rect.bottom > 0) {
          currentActive = section.id;
          const totalScrollable = Math.max(rect.height - windowH, 1);
          const scrolled = Math.min(Math.max(-rect.top, 0), totalScrollable);
          progress[section.id] = Math.min(scrolled / totalScrollable, 1);
        } else if (rect.bottom <= 0) {
          progress[section.id] = 1;
        } else {
          progress[section.id] = 0;
        }
      });

      setActiveSection(currentActive);
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    setMobileOpen(false);
  };

  return (
    <>
      {/* Desktop Sidebar */}
      {isDesktop && (
        <nav style={{
          position: 'fixed', left: 0, top: 0, height: '100%', zIndex: 50,
          display: 'flex', flexDirection: 'column', justifyContent: 'center',
          padding: '0 16px 0 32px', pointerEvents: 'auto',
        }}>
          {/* MOA logo mark */}
          <div style={{
            position: 'absolute', top: '32px', left: '32px',
            fontFamily: 'Cormorant Garamond, serif',
            fontSize: '11px', letterSpacing: '0.3em',
            color: '#C9A84C', textTransform: 'uppercase', fontWeight: 400,
          }}>
            MOA
          </div>

          <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: '28px' }}>
            {items.map(({ label, id }) => {
              const isActive = activeSection === id;
              const prog = scrollProgress[id] || 0;

              return (
                <li
                  key={id}
                  style={{ display: 'flex', alignItems: 'center', gap: '14px', cursor: 'pointer' }}
                  onClick={() => scrollToSection(id)}
                >
                  {/* Progress bar — 2px wide */}
                  <div style={{
                    position: 'relative',
                    width: '2px', height: '28px',
                    background: 'rgba(255,255,255,0.08)',
                    overflow: 'hidden', flexShrink: 0,
                  }}>
                    <motion.div
                      style={{ position: 'absolute', top: 0, left: 0, width: '100%', background: '#C9A84C' }}
                      animate={{ height: `${prog * 100}%` }}
                      transition={{ duration: 0.15, ease: 'linear' }}
                    />
                  </div>

                  {/* Label — brighter when active */}
                  <span style={{
                    fontFamily: 'DM Sans, sans-serif',
                    fontSize: '10px',
                    letterSpacing: '0.22em',
                    textTransform: 'uppercase',
                    color: isActive ? '#C9A84C' : 'rgba(255,255,255,0.28)',
                    fontWeight: isActive ? 500 : 400,
                    transition: 'color 0.3s',
                    whiteSpace: 'nowrap',
                  }}
                  onMouseEnter={(e) => { if (!isActive) e.currentTarget.style.color = 'rgba(255,255,255,0.6)'; }}
                  onMouseLeave={(e) => { if (!isActive) e.currentTarget.style.color = 'rgba(255,255,255,0.28)'; }}
                  >
                    {label}
                  </span>
                </li>
              );
            })}
          </ul>
        </nav>
      )}

      {/* Mobile hamburger button */}
      {!isDesktop && (
        <div style={{ position: 'fixed', top: '24px', right: '24px', zIndex: 50 }}>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            style={{
              width: '48px', height: '48px',
              display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: '6px',
              background: 'rgba(10,14,26,0.85)',
              border: '1px solid rgba(201,168,76,0.2)',
              cursor: 'pointer', backdropFilter: 'blur(12px)',
            }}
            aria-label="Toggle menu"
          >
            <motion.span
              animate={{ rotate: mobileOpen ? 45 : 0, y: mobileOpen ? 7 : 0 }}
              style={{ display: 'block', width: '20px', height: '1px', background: '#C9A84C', transformOrigin: 'center' }}
            />
            <motion.span
              animate={{ opacity: mobileOpen ? 0 : 1 }}
              style={{ display: 'block', width: '20px', height: '1px', background: '#C9A84C' }}
            />
            <motion.span
              animate={{ rotate: mobileOpen ? -45 : 0, y: mobileOpen ? -7 : 0 }}
              style={{ display: 'block', width: '20px', height: '1px', background: '#C9A84C', transformOrigin: 'center' }}
            />
          </button>
        </div>
      )}

      {/* Mobile overlay menu */}
      <AnimatePresence>
        {mobileOpen && !isDesktop && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            style={{
              position: 'fixed', inset: 0, zIndex: 40,
              background: 'rgba(10,14,26,0.97)', backdropFilter: 'blur(20px)',
              display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center',
            }}
          >
            <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: '36px', textAlign: 'center' }}>
              {items.map(({ label, id }, i) => (
                <motion.li
                  key={id}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.07, duration: 0.4 }}
                >
                  <button
                    onClick={() => scrollToSection(id)}
                    style={{
                      fontFamily: 'Cormorant Garamond, serif',
                      fontSize: 'clamp(28px, 6vw, 42px)',
                      fontWeight: 300,
                      color: '#F5F0E8',
                      background: 'none', border: 'none', cursor: 'pointer',
                      letterSpacing: '0.05em', transition: 'color 0.3s',
                    }}
                    onMouseEnter={(e) => { e.currentTarget.style.color = '#C9A84C'; }}
                    onMouseLeave={(e) => { e.currentTarget.style.color = '#F5F0E8'; }}
                  >
                    {label}
                  </button>
                </motion.li>
              ))}
            </ul>

            <p style={{
              position: 'absolute', bottom: '40px',
              fontFamily: 'DM Sans, sans-serif',
              fontSize: '11px', letterSpacing: '0.3em',
              color: 'rgba(245,240,232,0.2)', textTransform: 'uppercase',
            }}>
              Esc to close
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
