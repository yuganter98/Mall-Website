import { motion } from 'framer-motion';
import { FadeUp } from '../components/SectionWrapper';
import CTAButton from '../components/CTAButton';

const columns = [
  {
    title: 'The Luxury Wing',
    text: "A dedicated corridor for premium and aspirational brands, separate from the main retail flow. The environment your brand deserves.",
  },
  {
    stat: '15+',
    statLabel: 'Luxury & Premium Brands',
    text: "From established luxury houses to rising premium labels, the wing curates an audience that spends.",
  },
  {
    title: 'Flagship Opportunity',
    text: "Be the first. Define the market. Mall of America's luxury corridor has space for the brand that wants to own the room.",
  },
];

export default function Luxury() {
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="luxury"
      style={{
        position: 'relative',
        backgroundColor: '#0A0E1A',
        paddingTop: '100px',
        paddingBottom: '100px',
        overflow: 'hidden',
      }}
    >
      {/* Gold gradient overlay at top */}
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, height: '40%',
        background: 'linear-gradient(180deg, rgba(201,168,76,0.04) 0%, transparent 100%)',
        pointerEvents: 'none',
      }} />

      {/* Top separator */}
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, height: '1px',
        background: 'linear-gradient(90deg, transparent 0%, rgba(201,168,76,0.25) 30%, rgba(201,168,76,0.25) 70%, transparent 100%)',
      }} />

      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 clamp(24px, 5vw, 64px)', position: 'relative' }}>

        {/* Header */}
        <div style={{ marginBottom: '72px', maxWidth: '560px' }}>
          <FadeUp>
            <p style={{
              fontFamily: 'DM Sans, sans-serif',
              fontSize: '11px',
              letterSpacing: '0.25em',
              color: '#C9A84C',
              textTransform: 'uppercase',
              marginBottom: '16px',
            }}>
              · Luxury
            </p>
          </FadeUp>

          <FadeUp delay={0.1}>
            <h2 style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontSize: 'clamp(40px, 7vw, 96px)',
              fontWeight: 300,
              color: '#F5F0E8',
              lineHeight: 0.98,
              marginBottom: '24px',
            }}>
              Where Prestige
              <br />
              <em style={{ color: '#C9A84C' }}>Finds Its Address.</em>
            </h2>
          </FadeUp>

          <FadeUp delay={0.15}>
            <div style={{ width: '32px', height: '1px', background: '#C9A84C', marginBottom: '24px' }} />
          </FadeUp>

          <FadeUp delay={0.2}>
            <p style={{
              fontFamily: 'DM Sans, sans-serif',
              fontSize: '15px',
              lineHeight: 1.85,
              color: 'rgba(245,240,232,0.7)',
              maxWidth: '500px',
            }}>
              Mall of America's luxury corridor is home to the region's most coveted brands.
              An elevated retail environment designed for discerning shoppers and the brands
              that earn their loyalty.
            </p>
          </FadeUp>
        </div>
      </div>

      {/* Full-width editorial image */}
      <motion.div
        style={{
          position: 'relative',
          width: '100%',
          height: '500px',
          overflow: 'hidden',
          marginBottom: '80px',
        }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 1.2, delay: 0.2 }}
      >
        <img
          src="https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=1920&q=80"
          alt="Luxury retail corridor"
          loading="lazy"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center',
            display: 'block',
          }}
          onError={(e) => {
            e.target.style.display = 'none';
            e.target.parentElement.style.background =
              'linear-gradient(135deg, #0A0E1A 0%, #1A1505 30%, #2A1E08 60%, #0A0E1A 100%)';
          }}
        />

        {/* Left/right gradient fades */}
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(to right, #0A0E1A 0%, transparent 30%, transparent 70%, #0A0E1A 100%)',
        }} />

        {/* Bottom gradient */}
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(to bottom, transparent 50%, rgba(10,14,26,0.8) 100%)',
        }} />

        {/* Ghost text overlay */}
        <div style={{
          position: 'absolute', inset: 0,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          pointerEvents: 'none',
        }}>
          <span style={{
            fontFamily: 'Cormorant Garamond, serif',
            fontSize: 'clamp(100px, 16vw, 180px)',
            fontWeight: 700,
            color: 'rgba(255,255,255,0.06)',
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            userSelect: 'none',
          }}>
            Luxury
          </span>
        </div>
      </motion.div>

      {/* 3-Column Feature Row */}
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 clamp(24px, 5vw, 64px)' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr 1fr',
          gap: '0',
          alignItems: 'start',
        }}>
          {columns.map((col, i) => (
            <FadeUp key={i} delay={i * 0.15}>
              <div style={{
                padding: '0 clamp(16px, 3vw, 40px)',
                borderLeft: i > 0 ? '1px solid rgba(201,168,76,0.2)' : 'none',
              }}>
                {col.stat ? (
                  <>
                    <div style={{
                      fontFamily: 'Cormorant Garamond, serif',
                      fontSize: 'clamp(48px, 6vw, 72px)',
                      fontWeight: 300,
                      color: '#C9A84C',
                      lineHeight: 0.95,
                      marginBottom: '8px',
                    }}>
                      {col.stat}
                    </div>
                    <p style={{
                      fontFamily: 'DM Sans, sans-serif',
                      fontSize: '10px',
                      letterSpacing: '0.3em',
                      color: 'rgba(245,240,232,0.5)',
                      textTransform: 'uppercase',
                      marginBottom: '20px',
                    }}>
                      {col.statLabel}
                    </p>
                  </>
                ) : (
                  <h3 style={{
                    fontFamily: 'Cormorant Garamond, serif',
                    fontSize: '24px',
                    fontWeight: 400,
                    color: '#F5F0E8',
                    marginBottom: '16px',
                  }}>
                    {col.title}
                  </h3>
                )}

                <div style={{ width: '24px', height: '1px', background: 'rgba(201,168,76,0.35)', marginBottom: '16px' }} />

                <p style={{
                  fontFamily: 'DM Sans, sans-serif',
                  fontSize: '14px',
                  lineHeight: 1.8,
                  color: 'rgba(245,240,232,0.45)',
                }}>
                  {col.text}
                </p>
              </div>
            </FadeUp>
          ))}
        </div>

        {/* CTA */}
        <FadeUp delay={0.3}>
          <div style={{ textAlign: 'center', marginTop: '72px' }}>
            <p style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontSize: '18px',
              fontStyle: 'italic',
              color: 'rgba(245,240,232,0.5)',
              marginBottom: '24px',
            }}>
              Interested in our luxury corridor?
            </p>
            <CTAButton variant="outline" onClick={() => scrollToSection('contact')}>
              Request Luxury Leasing Information →
            </CTAButton>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
