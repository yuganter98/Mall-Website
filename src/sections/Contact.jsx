import { motion } from 'framer-motion';
import { FadeUp } from '../components/SectionWrapper';
import { content } from '../data/content';

// Inline SVG icons keyed by iconType
function ContactIcon({ type }) {
  const props = {
    width: 32,
    height: 32,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "#C9A84C",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round",
  };

  if (type === 'storefront') {
    return (
      <svg {...props}>
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    );
  }
  if (type === 'star') {
    return (
      <svg {...props}>
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    );
  }
  // calendar
  return (
    <svg {...props}>
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
      <line x1="16" y1="2" x2="16" y2="6" />
      <line x1="8" y1="2" x2="8" y2="6" />
      <line x1="3" y1="10" x2="21" y2="10" />
    </svg>
  );
}

export default function Contact() {
  const { contact } = content;

  return (
    <section
      id="contact"
      style={{
        background: 'linear-gradient(150deg, #0A0E1A 0%, #0C1220 40%, #0A0E1A 100%)',
        minHeight: '100vh',
        paddingTop: '100px',
        paddingBottom: '0',
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden',
        position: 'relative',
      }}
    >
      {/* Top separator */}
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '1px', background: 'linear-gradient(90deg, transparent 0%, rgba(201,168,76,0.3) 30%, rgba(201,168,76,0.3) 70%, transparent 100%)' }} />

      {/* Gold ambient glow from top */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: '50%',
        transform: 'translateX(-50%)',
        width: '70vw',
        height: '50vh',
        background: 'radial-gradient(ellipse at 50% 0%, rgba(201,168,76,0.07) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      {/* Decorative inner border */}
      <div style={{
        position: 'absolute',
        inset: '20px',
        border: '1px solid rgba(201,168,76,0.1)',
        pointerEvents: 'none',
      }} />

      {/* Main content */}
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 clamp(24px, 5vw, 64px)', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', paddingBottom: '80px' }}>

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '72px' }}>
          <FadeUp>
            <p style={{
              fontFamily: 'DM Sans, sans-serif',
              fontSize: '11px',
              letterSpacing: '0.25em',
              color: '#C9A84C',
              textTransform: 'uppercase',
              marginBottom: '20px',
            }}>
              · Get in Touch
            </p>
          </FadeUp>
          <FadeUp delay={0.1}>
            <h2 style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontSize: 'clamp(42px, 8vw, 104px)',
              fontWeight: 300,
              color: '#F5F0E8',
              lineHeight: 0.95,
              marginBottom: '20px',
            }}>
              {contact.heading}
            </h2>
          </FadeUp>
          <FadeUp delay={0.15}>
            <div style={{ width: '32px', height: '1px', background: '#C9A84C', margin: '0 auto 20px' }} />
          </FadeUp>
          <FadeUp delay={0.2}>
            <p style={{
              fontFamily: 'DM Sans, sans-serif',
              fontSize: '15px',
              lineHeight: 1.8,
              color: 'rgba(245,240,232,0.5)',
              maxWidth: '500px',
              margin: '0 auto',
            }}>
              {contact.subheading}
            </p>
          </FadeUp>
        </div>

        {/* Action Path Cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '16px' }}>
          {contact.paths.map((path, i) => (
            <FadeUp key={i} delay={0.1 + i * 0.12}>
              <motion.a
                href={`mailto:${path.email}`}
                style={{
                  display: 'block',
                  border: '1px solid rgba(201,168,76,0.15)',
                  padding: '44px 36px',
                  position: 'relative',
                  overflow: 'hidden',
                  textDecoration: 'none',
                  cursor: 'pointer',
                  height: '100%',
                }}
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
                className="group"
              >
                {/* Hover glow */}
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to bottom, rgba(201,168,76,0.06), transparent)',
                  opacity: 0,
                  transition: 'opacity 0.5s',
                }} className="group-hover:opacity-100" />

                <div style={{ position: 'relative' }}>
                  {/* SVG icon */}
                  <div style={{ marginBottom: '28px' }}>
                    <ContactIcon type={path.iconType} />
                  </div>

                  <h3 style={{
                    fontFamily: 'Cormorant Garamond, serif',
                    fontSize: '28px',
                    fontWeight: 400,
                    color: '#F5F0E8',
                    marginBottom: '12px',
                    transition: 'color 0.3s',
                  }} className="group-hover:text-[#C9A84C]">
                    {path.title}
                  </h3>

                  <div style={{ width: '28px', height: '1px', background: 'rgba(201,168,76,0.35)', marginBottom: '16px', transition: 'width 0.5s' }} className="group-hover:w-16" />

                  <p style={{
                    fontFamily: 'DM Sans, sans-serif',
                    fontSize: '14px',
                    lineHeight: 1.75,
                    color: 'rgba(245,240,232,0.45)',
                    marginBottom: '32px',
                  }}>
                    {path.description}
                  </p>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <span style={{
                      fontFamily: 'DM Sans, sans-serif',
                      fontSize: '11px',
                      letterSpacing: '0.2em',
                      textTransform: 'uppercase',
                      color: '#C9A84C',
                      transition: 'color 0.3s',
                    }} className="group-hover:text-[#E2C97E]">
                      {path.cta}
                    </span>
                    <motion.span
                      style={{ color: '#C9A84C', fontSize: '14px' }}
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
                    >
                      →
                    </motion.span>
                  </div>
                </div>
              </motion.a>
            </FadeUp>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer style={{
        borderTop: '1px solid rgba(201,168,76,0.2)',
        marginTop: 'auto',
      }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '32px clamp(24px, 5vw, 64px)', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '24px' }}>

          {/* Logo */}
          <div>
            <div style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontSize: '18px',
              fontWeight: 400,
              color: '#C9A84C',
              letterSpacing: '0.25em',
              textTransform: 'uppercase',
              marginBottom: '4px',
            }}>
              Mall of America
            </div>
            <p style={{
              fontFamily: 'DM Sans, sans-serif',
              fontSize: '11px',
              color: 'rgba(245,240,232,0.22)',
            }}>
              © 2025 Mall of America. All rights reserved.
            </p>
          </div>

          {/* Social */}
          <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap' }}>
            {contact.social.map((s, i) => (
              <a
                key={i}
                href={s.url}
                style={{
                  fontFamily: 'DM Sans, sans-serif',
                  fontSize: '11px',
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  color: 'rgba(245,240,232,0.28)',
                  textDecoration: 'none',
                  transition: 'color 0.3s',
                }}
                className="hover:text-[#C9A84C]"
              >
                {s.name}
              </a>
            ))}
          </div>

          {/* Tagline */}
          <p style={{
            fontFamily: 'Cormorant Garamond, serif',
            fontSize: '13px',
            fontStyle: 'italic',
            color: 'rgba(245,240,232,0.18)',
          }}>
            Bloomington, Minnesota
          </p>
        </div>
      </footer>
    </section>
  );
}
