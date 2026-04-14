import { motion } from 'framer-motion';
import { FadeUp, FadeIn } from '../components/SectionWrapper';
import { content } from '../data/content';

const GradientImage = ({ src, alt, style }) => (
  <div style={{ position: 'relative', overflow: 'hidden', ...style }}>
    <img
      src={src}
      alt={alt}
      loading="lazy"
      style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', transition: 'transform 0.7s ease' }}
      onMouseEnter={(e) => { e.currentTarget.style.transform = 'scale(1.05)'; }}
      onMouseLeave={(e) => { e.currentTarget.style.transform = 'scale(1)'; }}
      onError={(e) => {
        e.target.style.display = 'none';
        e.target.parentElement.style.background =
          'linear-gradient(135deg, #1A1505 0%, #2A1E08 50%, #141010 100%)';
      }}
    />
    <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.45), transparent)' }} />
  </div>
);

export default function Dining() {
  const { dining } = content;

  return (
    <section
      id="dining"
      style={{ backgroundColor: '#F5F0E8', color: '#0A0E1A', overflow: 'hidden', paddingTop: '96px', paddingBottom: '96px' }}
    >
      {/* Top gold line separator */}
      <div style={{ height: '1px', background: 'linear-gradient(90deg, transparent 0%, #C9A84C 30%, #C9A84C 70%, transparent 100%)', marginBottom: '0', opacity: 0.35 }} />

      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 clamp(24px, 5vw, 64px)' }}>

        {/* Header Row */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '48px', alignItems: 'flex-end', marginBottom: '64px' }}>
          <div>
            <FadeUp>
              <p style={{
                fontFamily: 'DM Sans, sans-serif',
                fontSize: '11px',
                letterSpacing: '0.25em',
                color: '#C9A84C',
                textTransform: 'uppercase',
                marginBottom: '16px',
              }}>
                · {dining.label}
              </p>
            </FadeUp>
            <FadeUp delay={0.1}>
              <h2 style={{
                fontFamily: 'Cormorant Garamond, serif',
                fontSize: 'clamp(36px, 5.5vw, 80px)',
                fontWeight: 300,
                color: '#0A0E1A',
                lineHeight: 1.0,
              }}>
                {dining.heading}
                <br />
                <em style={{ color: '#C9A84C' }}>{dining.heading2}</em>
              </h2>
            </FadeUp>
            <FadeUp delay={0.15}>
              <div style={{ marginTop: '20px', width: '32px', height: '1px', background: '#C9A84C' }} />
            </FadeUp>
          </div>

          <div>
            <FadeUp delay={0.18}>
              <p style={{
                fontFamily: 'DM Sans, sans-serif',
                fontSize: '15px',
                lineHeight: 1.9,
                color: 'rgba(10,14,26,0.65)',
                marginBottom: '32px',
              }}>
                {dining.body}
              </p>
            </FadeUp>

            {/* Mini stats */}
            <FadeUp delay={0.28}>
              <div style={{ display: 'flex', gap: '36px' }}>
                {dining.stats.map((s, i) => (
                  <div key={i}>
                    <div style={{
                      fontFamily: 'Cormorant Garamond, serif',
                      fontSize: '28px',
                      fontWeight: 300,
                      color: '#C9A84C',
                      lineHeight: 1,
                      marginBottom: '4px',
                    }}>
                      {s.value}
                    </div>
                    <div style={{
                      fontFamily: 'DM Sans, sans-serif',
                      fontSize: '10px',
                      letterSpacing: '0.18em',
                      color: 'rgba(10,14,26,0.45)',
                      textTransform: 'uppercase',
                    }}>
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>
            </FadeUp>
          </div>
        </div>

        {/* Mosaic Image Grid */}
        <FadeIn delay={0.15}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '2fr 1fr 1fr',
              gridTemplateRows: '1fr 1fr',
              gap: '8px',
              height: 'clamp(300px, 50vw, 580px)',
              marginBottom: '64px',
            }}
          >
            <GradientImage
              src={dining.images[0].url}
              alt={dining.images[0].alt}
              style={{ gridColumn: '1', gridRow: '1 / span 2' }}
            />
            <GradientImage src={dining.images[1].url} alt={dining.images[1].alt} style={{}} />
            <GradientImage src={dining.images[2].url} alt={dining.images[2].alt} style={{}} />
            <GradientImage src={dining.images[3].url} alt={dining.images[3].alt} style={{ gridColumn: '2 / span 2' }} />
          </div>
        </FadeIn>

        {/* Pull Quote */}
        <FadeUp delay={0.1}>
          <div style={{
            textAlign: 'center',
            padding: '56px 0',
            borderTop: '1px solid rgba(201,168,76,0.2)',
            borderBottom: '1px solid rgba(201,168,76,0.2)',
          }}>
            <div style={{
              width: '32px',
              height: '1px',
              background: 'linear-gradient(90deg, transparent, #C9A84C, transparent)',
              margin: '0 auto 32px',
            }} />
            <blockquote style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontSize: 'clamp(24px, 4vw, 50px)',
              fontStyle: 'italic',
              fontWeight: 300,
              color: '#0A0E1A',
              lineHeight: 1.25,
              maxWidth: '820px',
              margin: '0 auto',
            }}>
              "{dining.pull_quote}"
            </blockquote>
            <div style={{
              width: '32px',
              height: '1px',
              background: 'linear-gradient(90deg, transparent, #C9A84C, transparent)',
              margin: '32px auto 0',
            }} />
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
