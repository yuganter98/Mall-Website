import { motion } from 'framer-motion';
import { FadeUp } from '../components/SectionWrapper';
import CTAButton from '../components/CTAButton';
import { content } from '../data/content';

export default function Events() {
  const { events } = content;

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const allStats = [
    ...events.stats,
    { value: "60+", label: "Brand Partners Annually" },
  ];

  return (
    <section
      id="events"
      style={{
        background: 'linear-gradient(180deg, #0A0E1A 0%, #06090F 100%)',
        paddingTop: '100px',
        paddingBottom: '100px',
        overflow: 'hidden',
        position: 'relative',
      }}
    >
      {/* Top separator */}
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '1px', background: 'linear-gradient(90deg, transparent 0%, rgba(201,168,76,0.2) 30%, rgba(201,168,76,0.2) 70%, transparent 100%)' }} />

      {/* "EVENTS" watermark */}
      <div style={{
        position: 'absolute', top: 0, right: '-2%',
        fontFamily: 'Cormorant Garamond, serif',
        fontSize: 'clamp(120px, 22vw, 340px)',
        color: 'rgba(201,168,76,0.025)',
        fontWeight: 700, lineHeight: 0.85,
        userSelect: 'none', pointerEvents: 'none', overflow: 'hidden',
      }}>
        EVENTS
      </div>

      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 clamp(24px, 5vw, 64px)', position: 'relative' }}>

        {/* Header */}
        <div style={{ marginBottom: '80px' }}>
          <FadeUp>
            <p style={{
              fontFamily: 'DM Sans, sans-serif',
              fontSize: '11px',
              letterSpacing: '0.25em',
              color: '#C9A84C',
              textTransform: 'uppercase',
              marginBottom: '16px',
            }}>
              · {events.label}
            </p>
          </FadeUp>
          <FadeUp delay={0.1}>
            <h2 style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontSize: 'clamp(36px, 6vw, 90px)',
              fontWeight: 300,
              color: '#F5F0E8',
              lineHeight: 0.98,
            }}>
              {events.heading}
              <br />
              <em style={{ color: '#C9A84C' }}>{events.heading2}</em>
            </h2>
          </FadeUp>
          <FadeUp delay={0.16}>
            <div style={{ marginTop: '20px', width: '32px', height: '1px', background: '#C9A84C' }} />
          </FadeUp>
        </div>

        {/* Timeline + Stats Row */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '64px', marginBottom: '100px', alignItems: 'start' }}>

          {/* Left — Timeline */}
          <div>
            <FadeUp>
              <p style={{
                fontFamily: 'DM Sans, sans-serif',
                fontSize: '10px',
                letterSpacing: '0.35em',
                color: 'rgba(245,240,232,0.35)',
                textTransform: 'uppercase',
                marginBottom: '32px',
              }}>
                Event Types
              </p>
            </FadeUp>
            <ul style={{ borderLeft: '1px solid rgba(201,168,76,0.2)', listStyle: 'none', margin: 0, padding: '0 0 0 28px' }}>
              {events.timeline.map((item, i) => (
                <FadeUp key={i} delay={0.05 + i * 0.07}>
                  <motion.li
                    style={{ position: 'relative', paddingBottom: '24px', cursor: 'default' }}
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                    className="group"
                  >
                    <div style={{
                      position: 'absolute', left: '-35px', top: '7px',
                      width: '8px', height: '8px', borderRadius: '50%',
                      background: 'rgba(201,168,76,0.35)', transition: 'background 0.3s',
                    }} className="group-hover:bg-[#C9A84C]" />
                    <span style={{
                      fontFamily: 'Cormorant Garamond, serif',
                      fontSize: 'clamp(18px, 2vw, 26px)',
                      fontWeight: 300,
                      color: 'rgba(245,240,232,0.65)',
                      transition: 'color 0.3s',
                    }} className="group-hover:text-[#F5F0E8]">
                      {item}
                    </span>
                  </motion.li>
                </FadeUp>
              ))}
            </ul>
          </div>

          {/* Right — Stats Container */}
          <FadeUp delay={0.15}>
            <div style={{
              border: '1px solid rgba(201,168,76,0.25)',
              borderLeft: '3px solid #C9A84C',
              padding: '3rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '0',
            }}>
              {allStats.map((stat, i) => (
                <div key={i}>
                  {i > 0 && (
                    <div style={{
                      height: '1px',
                      background: 'linear-gradient(90deg, #C9A84C, transparent)',
                      margin: '28px 0',
                      opacity: 0.35,
                    }} />
                  )}
                  <div>
                    <div style={{
                      fontFamily: 'Cormorant Garamond, serif',
                      fontSize: 'clamp(52px, 6vw, 80px)',
                      fontWeight: 300,
                      color: '#C9A84C',
                      lineHeight: 0.95,
                      marginBottom: '8px',
                    }}>
                      {stat.value}
                    </div>
                    <p style={{
                      fontFamily: 'DM Sans, sans-serif',
                      fontSize: '11px',
                      letterSpacing: '0.3em',
                      color: 'rgba(245,240,232,0.6)',
                      textTransform: 'uppercase',
                    }}>
                      {stat.label}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </FadeUp>
        </div>

        {/* Venue Cards */}
        <div style={{ marginBottom: '72px' }}>
          <FadeUp>
            <p style={{
              fontFamily: 'DM Sans, sans-serif',
              fontSize: '10px',
              letterSpacing: '0.4em',
              color: 'rgba(245,240,232,0.25)',
              textTransform: 'uppercase',
              textAlign: 'center',
              marginBottom: '40px',
            }}>
              Signature Venues
            </p>
          </FadeUp>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '16px' }}>
            {events.venues.map((venue, i) => (
              <FadeUp key={i} delay={0.08 + i * 0.12}>
                <motion.div
                  style={{
                    border: '1px solid rgba(201,168,76,0.12)',
                    padding: '36px 32px',
                    position: 'relative',
                    overflow: 'hidden',
                    height: '100%',
                  }}
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.3 }}
                  className="group"
                >
                  <div style={{
                    position: 'absolute', inset: 0,
                    background: 'linear-gradient(to bottom, rgba(201,168,76,0.05), transparent)',
                    opacity: 0, transition: 'opacity 0.5s',
                  }} className="group-hover:opacity-100" />

                  <div style={{ position: 'relative' }}>
                    <div style={{
                      fontFamily: 'Cormorant Garamond, serif',
                      fontSize: '28px',
                      color: 'rgba(201,168,76,0.45)',
                      marginBottom: '20px',
                      transition: 'color 0.3s',
                    }} className="group-hover:text-[#C9A84C]">
                      {venue.icon}
                    </div>

                    <h3 style={{
                      fontFamily: 'Cormorant Garamond, serif',
                      fontSize: '24px',
                      fontWeight: 400,
                      color: '#F5F0E8',
                      marginBottom: '4px',
                    }}>
                      {venue.name}
                    </h3>

                    <p style={{
                      fontFamily: 'DM Sans, sans-serif',
                      fontSize: '10px',
                      letterSpacing: '0.18em',
                      color: 'rgba(201,168,76,0.65)',
                      textTransform: 'uppercase',
                      marginBottom: '16px',
                    }}>
                      {venue.tagline}
                    </p>

                    <div style={{ width: '28px', height: '1px', background: 'rgba(201,168,76,0.3)', marginBottom: '16px', transition: 'width 0.5s' }} className="group-hover:w-16" />

                    <p style={{
                      fontFamily: 'DM Sans, sans-serif',
                      fontSize: '13.5px',
                      lineHeight: 1.72,
                      color: 'rgba(245,240,232,0.4)',
                      marginBottom: '20px',
                    }}>
                      {venue.description}
                    </p>

                    <div style={{
                      fontFamily: 'DM Sans, sans-serif',
                      fontSize: '10px',
                      letterSpacing: '0.18em',
                      color: 'rgba(201,168,76,0.55)',
                      textTransform: 'uppercase',
                    }}>
                      {venue.capacity}
                    </div>
                  </div>
                </motion.div>
              </FadeUp>
            ))}
          </div>
        </div>

        {/* CTA */}
        <FadeUp delay={0.1}>
          <div style={{ textAlign: 'center' }}>
            <CTAButton variant="outline" onClick={() => scrollToSection('contact')}>
              {events.cta} →
            </CTAButton>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
