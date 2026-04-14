import { motion } from 'framer-motion';
import { FadeUp, FadeIn } from '../components/SectionWrapper';
import StatCard from '../components/StatCard';
import { content } from '../data/content';

const icons = {
  location: (
    <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
    </svg>
  ),
  platform: (
    <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5" />
    </svg>
  ),
  demographics: (
    <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
    </svg>
  ),
};

export default function WhyMOA() {
  const { whymoa } = content;

  return (
    <section
      id="overview"
      style={{ backgroundColor: '#0A0E1A', paddingTop: '96px', paddingBottom: '0', overflow: 'hidden' }}
    >
      {/* Section Header */}
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 64px 80px', paddingLeft: 'clamp(24px, 5vw, 64px)', paddingRight: 'clamp(24px, 5vw, 64px)' }}>
        <FadeUp>
          <p style={{
            fontFamily: 'DM Sans, sans-serif',
            fontSize: '11px',
            letterSpacing: '0.25em',
            color: '#C9A84C',
            textTransform: 'uppercase',
            marginBottom: '16px',
          }}>
            · {whymoa.label}
          </p>
        </FadeUp>
        <FadeUp delay={0.1}>
          <h2 style={{
            fontFamily: 'Cormorant Garamond, serif',
            fontSize: 'clamp(40px, 7vw, 90px)',
            fontWeight: 300,
            color: '#F5F0E8',
            lineHeight: 1.0,
            marginBottom: '0',
          }}>
            {whymoa.heading}
            <br />
            <em style={{ color: '#C9A84C' }}>{whymoa.heading2}</em>
          </h2>
        </FadeUp>
        <FadeUp delay={0.18}>
          <div style={{ marginTop: '24px', width: '32px', height: '1px', background: '#C9A84C' }} />
        </FadeUp>
      </div>

      {/* Stats Grid */}
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 clamp(24px, 5vw, 64px)', marginBottom: '80px' }}>
        <FadeIn delay={0.1}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            border: '1px solid rgba(201,168,76,0.12)',
            background: 'linear-gradient(135deg, #141828 0%, #0A0E1A 100%)',
          }}>
            {whymoa.stats.map((stat, i) => (
              <div
                key={i}
                style={{
                  borderRight: i < 3 ? '1px solid rgba(201,168,76,0.12)' : 'none',
                }}
              >
                <StatCard
                  value={stat.value}
                  suffix={stat.suffix}
                  prefix={stat.prefix || ''}
                  label={stat.label}
                  decimals={stat.decimals}
                />
              </div>
            ))}
          </div>
        </FadeIn>
      </div>

      {/* Feature Cards */}
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 clamp(24px, 5vw, 64px)', marginBottom: '80px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
          {whymoa.features.map((feature, i) => (
            <FadeUp key={i} delay={i * 0.14}>
              <motion.div
                style={{
                  border: '1px solid rgba(201,168,76,0.12)',
                  padding: '36px 32px',
                  position: 'relative',
                  overflow: 'hidden',
                  cursor: 'default',
                  height: '100%',
                }}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
                className="group"
              >
                <div style={{
                  position: 'absolute', inset: 0,
                  background: 'linear-gradient(135deg, rgba(201,168,76,0.06), transparent)',
                  opacity: 0, transition: 'opacity 0.5s',
                }} className="group-hover:opacity-100" />

                <div style={{ position: 'relative' }}>
                  <div style={{ color: '#C9A84C', marginBottom: '20px' }}>
                    {icons[feature.icon]}
                  </div>
                  <h3 style={{
                    fontFamily: 'Cormorant Garamond, serif',
                    fontSize: '22px',
                    fontWeight: 400,
                    color: '#F5F0E8',
                    marginBottom: '12px',
                  }}>
                    {feature.title}
                  </h3>
                  <div style={{ width: '28px', height: '1px', background: 'rgba(201,168,76,0.4)', marginBottom: '14px' }} />
                  <p style={{
                    fontFamily: 'DM Sans, sans-serif',
                    fontSize: '14px',
                    lineHeight: 1.75,
                    color: 'rgba(245,240,232,0.5)',
                  }}>
                    {feature.body}
                  </p>
                </div>
              </motion.div>
            </FadeUp>
          ))}
        </div>
      </div>

      {/* Full-width image strip */}
      <div style={{
        position: 'relative',
        width: '100%',
        height: '300px',
        marginTop: '5rem',
        overflow: 'hidden',
      }}>
        <img
          src="https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?w=1920&q=80"
          alt="Mall of America interior"
          loading="lazy"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center 40%',
            opacity: 0.6,
          }}
          onError={(e) => {
            e.target.style.display = 'none';
            e.target.parentElement.style.background =
              'linear-gradient(135deg, #0A0E1A 0%, #141828 30%, #1A2540 60%, #0D1525 80%, #0A0E1A 100%)';
          }}
        />
        {/* Left/right fade */}
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(to right, #0A0E1A 0%, transparent 25%, transparent 75%, #0A0E1A 100%)',
        }} />
        {/* Caption */}
        <div style={{
          position: 'absolute', bottom: '1.5rem', right: '2rem',
          fontSize: '11px', letterSpacing: '0.2em', textTransform: 'uppercase',
          color: 'rgba(201,168,76,0.6)', fontFamily: 'DM Sans, sans-serif',
        }}>
          Mall of America — Bloomington, Minnesota
        </div>
      </div>
    </section>
  );
}
