import { motion } from 'framer-motion';
import CTAButton from '../components/CTAButton';
import { content } from '../data/content';

export default function Hero() {
  const { hero } = content;

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      style={{
        position: 'relative',
        width: '100%',
        height: '100vh',
        overflow: 'hidden',
        background: '#0A0E1A',
      }}
    >
      {/* VIDEO BACKGROUND WRAPPER */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          overflow: 'hidden',
          zIndex: 0,
        }}
      >
        <video
          autoPlay
          muted
          loop
          playsInline
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            minWidth: '100%',
            minHeight: '100%',
            width: 'auto',
            height: 'auto',
            objectFit: 'cover',
          }}
        >
          <source
            src="https://videos.pexels.com/video-files/3209828/3209828-uhd_2560_1440_25fps.mp4"
            type="video/mp4"
          />
          <source
            src="https://videos.pexels.com/video-files/1851190/1851190-hd_1920_1080_25fps.mp4"
            type="video/mp4"
          />
        </video>

        {/* Ken Burns is applied to a SEPARATE overlay div, not the video */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            animation: 'subtleZoom 25s ease-in-out infinite alternate',
            transformOrigin: 'center center',
          }}
        />

        {/* Dark overlay for text readability */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(135deg, rgba(10,14,26,0.70) 0%, rgba(10,14,26,0.45) 50%, rgba(10,14,26,0.70) 100%)',
            zIndex: 1,
          }}
        />

        {/* Bottom fade into next section */}
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: '250px',
            background: 'linear-gradient(to bottom, transparent 0%, #0A0E1A 100%)',
            zIndex: 2,
          }}
        />
      </div>

      {/* Diagonal texture overlay */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 3,
        backgroundImage: 'repeating-linear-gradient(45deg, rgba(201,168,76,0.02) 0px, rgba(201,168,76,0.02) 1px, transparent 1px, transparent 60px)',
        pointerEvents: 'none',
      }} />

      {/* Gold orbs for ambient glow */}
      <div className="hero-orb-1" style={{
        position: 'absolute', top: '10%', left: '15%',
        width: '55vw', height: '55vw', maxWidth: '800px', maxHeight: '800px',
        borderRadius: '50%', zIndex: 3,
        background: 'radial-gradient(circle, rgba(201,168,76,0.08) 0%, transparent 60%)',
        pointerEvents: 'none',
      }} />
      <div className="hero-orb-2" style={{
        position: 'absolute', bottom: '5%', right: '10%',
        width: '45vw', height: '45vw', maxWidth: '650px', maxHeight: '650px',
        borderRadius: '50%', zIndex: 3,
        background: 'radial-gradient(circle, rgba(201,168,76,0.06) 0%, transparent 60%)',
        pointerEvents: 'none',
      }} />

      {/* Content */}
      <div style={{
        position: 'absolute', top: '50%', left: '50%',
        transform: 'translate(-50%, -50%)',
        zIndex: 10, textAlign: 'center',
        padding: '0 24px', maxWidth: '1100px', width: '100%',
      }}>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          style={{
            fontFamily: 'DM Sans, sans-serif',
            fontSize: '11px',
            letterSpacing: '0.35em',
            color: '#C9A84C',
            textTransform: 'uppercase',
            marginBottom: '24px',
            fontWeight: 400,
          }}
        >
          {hero.label}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 44 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.95, delay: 0.75, ease: [0.25, 0.1, 0.25, 1] }}
          style={{
            fontFamily: 'Cormorant Garamond, Georgia, serif',
            fontSize: 'clamp(48px, 10.5vw, 124px)',
            fontWeight: 300,
            color: '#F5F0E8',
            lineHeight: 0.95,
            letterSpacing: '-0.01em',
            marginBottom: '28px',
          }}
        >
          {hero.headline}
        </motion.h1>

        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 0.9, delay: 1.05, ease: [0.25, 0.1, 0.25, 1] }}
          style={{
            width: '80px', height: '1px',
            background: 'linear-gradient(90deg, transparent, #C9A84C, transparent)',
            margin: '0 auto 28px',
            transformOrigin: 'left center',
          }}
        />

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.15 }}
          style={{
            fontFamily: 'Cormorant Garamond, serif',
            fontSize: 'clamp(16px, 2.4vw, 27px)',
            fontStyle: 'italic',
            fontWeight: 300,
            color: 'rgba(245,240,232,0.75)',
            letterSpacing: '0.03em',
            marginBottom: '52px',
          }}
        >
          {hero.subheadline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.4 }}
          className="hero-ctas"
          style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}
        >
          <CTAButton variant="outline" onClick={() => scrollToSection('overview')}>
            {hero.cta_primary}
          </CTAButton>
          <CTAButton variant="primary" onClick={() => scrollToSection('contact')}>
            {hero.cta_secondary}
          </CTAButton>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2, duration: 1 }}
        style={{
          position: 'absolute', bottom: '40px', left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px',
          cursor: 'pointer', zIndex: 10,
        }}
        onClick={() => scrollToSection('overview')}
      >
        <span style={{
          fontFamily: 'DM Sans', fontSize: '9px',
          letterSpacing: '0.4em', color: 'rgba(245,240,232,0.3)',
          textTransform: 'uppercase',
        }}>Scroll</span>
        <div className="scroll-chevron">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="1.5">
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </div>
      </motion.div>
    </section>
  );
}
