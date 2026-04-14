import { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { FadeUp } from '../components/SectionWrapper';
import CTAButton from '../components/CTAButton';
import { content } from '../data/content';

const expandedData = [
  {
    heading: 'The Flagship Opportunity',
    copy: "Mall of America's luxury wing offers dedicated flagship space for premium brands seeking the region's most affluent audience. Located in a curated corridor with controlled adjacencies.",
    specs: [
      { label: 'Space', value: '2,000\u201315,000 sq ft available' },
      { label: 'Term', value: '3\u201310 year leases' },
      { label: 'Traffic', value: '8M+ luxury-segment visitors/year' },
      { label: 'Co-tenants', value: 'Nordstrom, Coach, Michael Kors' },
    ],
    cta: 'Request Luxury Leasing Package',
  },
  {
    heading: 'Inline & End-Cap Positions',
    copy: "Four floors of premium retail real estate across multiple corridors. From 500 sq ft boutiques to 10,000 sq ft flagships, with positions available across all traffic tiers.",
    specs: [
      { label: 'Space', value: '500\u201310,000 sq ft' },
      { label: 'Term', value: '1\u20135 year leases' },
      { label: 'Traffic', value: '40M annual visitors' },
      { label: 'Categories', value: 'Fashion, Beauty, Tech, Home, Sport' },
    ],
    cta: 'View Available Spaces',
  },
  {
    heading: 'Short-Term & Seasonal Formats',
    copy: "Test markets, launch products, or build brand awareness with flexible pop-up formats ranging from kiosk to full activation spaces. Available week-by-week or seasonally.",
    specs: [
      { label: 'Space', value: '50\u2013500 sq ft' },
      { label: 'Term', value: '1 week to 6 months' },
      { label: 'Setup', value: '24-hour turnover available' },
      { label: 'Peak periods', value: 'Holiday, Back-to-School, Summer' },
    ],
    cta: 'Check Pop-Up Availability',
  },
];

const statBoxes = [
  { num: '3', label: 'Anchor Tenants' },
  { num: '4', label: 'Floors' },
  { num: '5.6M', label: 'Sq Ft' },
  { num: '40M', label: 'Visitors / Yr' },
];

export default function Retail() {
  const { retail } = content;
  const [openCard, setOpenCard] = useState(-1);
  const rightPanelRef = useRef(null);
  const isRightInView = useInView(rightPanelRef, { once: true, margin: '-100px' });

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="retail"
      style={{ backgroundColor: '#0A0E1A', overflow: 'hidden', position: 'relative' }}
    >
      <div style={{ height: '1px', background: 'linear-gradient(90deg, transparent 0%, rgba(201,168,76,0.25) 30%, rgba(201,168,76,0.25) 70%, transparent 100%)' }} />

      <div className="retail-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', minHeight: '100vh' }}>
        {/* Left — Text */}
        <div className="retail-left" style={{
          display: 'flex', flexDirection: 'column', justifyContent: 'center',
          paddingTop: 'clamp(60px, 8vw, 120px)',
          paddingBottom: 'clamp(60px, 8vw, 120px)',
          paddingLeft: 'clamp(100px, 8vw, 140px)',
          paddingRight: 'clamp(24px, 5vw, 80px)',
          position: 'relative',
        }}>
          <div style={{
            position: 'absolute', inset: 0,
            background: 'radial-gradient(ellipse at 0% 50%, rgba(201,168,76,0.06) 0%, transparent 65%)',
            pointerEvents: 'none',
          }} />

          <div style={{ position: 'relative', maxWidth: '540px' }}>
            <FadeUp>
              <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '11px', letterSpacing: '0.25em', color: '#C9A84C', textTransform: 'uppercase', marginBottom: '16px' }}>
                · {retail.label}
              </p>
            </FadeUp>
            <FadeUp delay={0.1}>
              <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(34px, 4.5vw, 68px)', fontWeight: 300, color: '#F5F0E8', lineHeight: 1.05, marginBottom: '20px' }}>
                {retail.heading}
              </h2>
            </FadeUp>
            <FadeUp delay={0.15}>
              <div style={{ width: '32px', height: '1px', background: '#C9A84C', marginBottom: '24px' }} />
            </FadeUp>
            <FadeUp delay={0.2}>
              <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '15px', lineHeight: 1.85, color: 'rgba(245,240,232,0.55)', marginBottom: '40px' }}>
                {retail.subtext}
              </p>
            </FadeUp>

            {/* Accordion Cards */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '40px' }}>
              {retail.categories.map((cat, i) => {
                const isOpen = openCard === i;
                const exp = expandedData[i];

                return (
                  <FadeUp key={i} delay={0.25 + i * 0.1}>
                    <motion.div
                      style={{
                        border: '1px solid rgba(201,168,76,0.12)',
                        cursor: 'pointer',
                        position: 'relative',
                        overflow: 'hidden',
                      }}
                      onClick={() => setOpenCard(isOpen ? -1 : i)}
                      className="group"
                    >
                      <div style={{
                        position: 'absolute', inset: 0,
                        background: 'linear-gradient(135deg, rgba(201,168,76,0.07), transparent)',
                        opacity: isOpen ? 1 : 0,
                        transition: 'opacity 0.4s',
                      }} />

                      {/* Summary header */}
                      <div style={{ position: 'relative', padding: '20px 24px' }}>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '4px' }}>
                          <h3 style={{
                            fontFamily: 'Cormorant Garamond, serif', fontSize: '19px',
                            fontWeight: 400, color: isOpen ? '#C9A84C' : '#F5F0E8',
                            transition: 'color 0.3s',
                          }}>
                            {cat.title}
                          </h3>
                          <motion.span
                            animate={{ rotate: isOpen ? 180 : 0 }}
                            transition={{ duration: 0.3 }}
                            style={{ color: '#C9A84C', fontSize: '14px', flexShrink: 0 }}
                          >
                            &#9662;
                          </motion.span>
                        </div>
                        <p style={{
                          fontFamily: 'DM Sans, sans-serif', fontSize: '10px',
                          letterSpacing: '0.18em', color: 'rgba(201,168,76,0.6)',
                          textTransform: 'uppercase',
                        }}>
                          {cat.tagline}
                        </p>
                      </div>

                      {/* Expanded content */}
                      <AnimatePresence>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
                            style={{ overflow: 'hidden' }}
                          >
                            <div style={{ padding: '0 24px 24px', position: 'relative' }}>
                              <div style={{ width: '100%', height: '1px', background: 'rgba(201,168,76,0.15)', marginBottom: '20px' }} />
                              <h4 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '16px', color: '#F5F0E8', marginBottom: '10px' }}>
                                {exp.heading}
                              </h4>
                              <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '13px', lineHeight: 1.7, color: 'rgba(245,240,232,0.5)', marginBottom: '20px' }}>
                                {exp.copy}
                              </p>
                              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '20px' }}>
                                {exp.specs.map((spec, j) => (
                                  <div key={j} style={{ borderLeft: '2px solid rgba(201,168,76,0.3)', paddingLeft: '12px' }}>
                                    <div style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '9px', letterSpacing: '0.2em', color: 'rgba(201,168,76,0.6)', textTransform: 'uppercase', marginBottom: '2px' }}>
                                      {spec.label}
                                    </div>
                                    <div style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '13px', color: 'rgba(245,240,232,0.7)' }}>
                                      {spec.value}
                                    </div>
                                  </div>
                                ))}
                              </div>
                              <span
                                style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '11px', letterSpacing: '0.12em', textTransform: 'uppercase', color: '#C9A84C' }}
                                onClick={(e) => { e.stopPropagation(); scrollToSection('contact'); }}
                              >
                                {exp.cta} →
                              </span>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  </FadeUp>
                );
              })}
            </div>

            <FadeUp delay={0.55}>
              <CTAButton variant="ghost" onClick={() => scrollToSection('contact')}>
                {retail.cta} →
              </CTAButton>
            </FadeUp>
          </div>
        </div>

        {/* Right — Visual Panel */}
        <div
          ref={rightPanelRef}
          style={{
            position: 'relative', overflow: 'hidden', minHeight: '60vh',
            background: 'linear-gradient(135deg, #0D1628 0%, #0A0E1A 100%)',
          }}
        >
          <div style={{
            position: 'absolute', inset: 0, opacity: 0.05,
            backgroundImage: 'linear-gradient(rgba(201,168,76,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(201,168,76,0.6) 1px, transparent 1px)',
            backgroundSize: '64px 64px', pointerEvents: 'none',
          }} />
          <div style={{
            position: 'absolute', left: 0, top: 0, bottom: 0, width: '1px',
            background: 'linear-gradient(to bottom, transparent, rgba(201,168,76,0.3) 30%, rgba(201,168,76,0.3) 70%, transparent)',
          }} />

          <div style={{
            position: 'absolute', inset: 0,
            display: 'flex', flexDirection: 'column',
            alignItems: 'center', justifyContent: 'center', padding: '48px',
          }}>
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              animate={isRightInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 1.4, ease: [0.25, 0.1, 0.25, 1] }}
              style={{
                position: 'absolute', top: '50%', left: '50%',
                transform: 'translate(-50%, -55%)',
                fontFamily: 'Cormorant Garamond, serif',
                fontSize: 'clamp(140px, 18vw, 220px)',
                fontWeight: 700, color: 'rgba(201,168,76,0.12)',
                lineHeight: 0.85, letterSpacing: '-0.02em',
                userSelect: 'none', pointerEvents: 'none', whiteSpace: 'nowrap',
              }}
            >520+</motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={isRightInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.6, duration: 0.8 }}
              style={{
                position: 'absolute', top: 'calc(50% + 60px)',
                fontFamily: 'DM Sans, sans-serif', fontSize: '10px',
                letterSpacing: '0.4em', color: 'rgba(245,240,232,0.25)',
                textTransform: 'uppercase',
              }}
            >Stores</motion.p>

            <div style={{
              position: 'relative', zIndex: 2,
              display: 'grid', gridTemplateColumns: '1fr 1fr',
              gap: '1px', width: '100%', maxWidth: '380px', marginTop: '40px',
            }}>
              {statBoxes.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 24 }}
                  animate={isRightInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.3 + i * 0.12, duration: 0.6 }}
                  whileHover={{ y: -3 }}
                  style={{
                    border: '1px solid rgba(201,168,76,0.4)',
                    padding: '2rem', textAlign: 'center',
                    background: 'rgba(201,168,76,0.05)',
                    transition: 'border-color 0.3s',
                  }}
                >
                  <div style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '32px', fontWeight: 300, color: '#C9A84C', lineHeight: 1, marginBottom: '8px' }}>
                    {item.num}
                  </div>
                  <div style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '10px', letterSpacing: '0.18em', color: 'rgba(245,240,232,0.4)', textTransform: 'uppercase' }}>
                    {item.label}
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={isRightInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.9, duration: 0.8 }}
              style={{ width: '100%', maxWidth: '380px', marginTop: '32px', textAlign: 'center' }}
            >
              <div style={{ height: '1px', background: 'rgba(201,168,76,0.3)', marginBottom: '20px' }} />
              <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '11px', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(201,168,76,0.7)', lineHeight: 1.7 }}>
                Flagship corridors. Luxury wing. Pop-up studios.<br />Every format. Every opportunity.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
