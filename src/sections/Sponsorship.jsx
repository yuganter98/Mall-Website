import { motion } from 'framer-motion';
import { FadeUp } from '../components/SectionWrapper';
import CTAButton from '../components/CTAButton';

const audienceStats = [
  { value: '40M', label: 'Annual Visitors' },
  { value: '60%', label: 'Out-of-State Visitors' },
  { value: '$85K+', label: 'Avg. Household Income' },
  { value: '105M', label: 'Annual Social Impressions' },
  { value: '18–45', label: 'Core Demographic Age Range' },
];

const tiers = [
  {
    name: 'Presenting Partner',
    tag: 'Flagship Tier',
    price: 'Custom Investment',
    benefits: [
      'Naming rights on a key venue or activation space',
      '360\u00B0 integrated campaign across digital, physical, and social',
      'Dedicated brand zone (min. 2,000 sq ft activation space)',
      'VIP event access and co-branded programming',
      'Exclusive category rights',
      '12-month minimum commitment',
    ],
    cta: 'Discuss Presenting Partnership',
    borderColor: 'rgba(201,168,76,0.5)',
  },
  {
    name: 'Premier Partner',
    tag: 'Recommended',
    price: 'Starting at $250K/year',
    benefits: [
      'Branded activation space (500\u20131,000 sq ft)',
      'Digital display network inclusion (40+ screens)',
      'Social media co-branding (4M+ followers)',
      'Event sponsorship (3 signature events)',
      'Quarterly audience reporting',
      '6-month minimum commitment',
    ],
    cta: 'Explore Premier Partnership',
    borderColor: 'rgba(201,168,76,0.35)',
  },
  {
    name: 'Brand Partner',
    tag: 'Entry Level',
    price: 'Starting at $50K/year',
    benefits: [
      'Pop-up activation space (up to 200 sq ft)',
      'Digital display inclusion',
      'Social media feature (2x per quarter)',
      'Access to MOA event calendar',
      'Monthly performance reports',
    ],
    cta: 'Start a Conversation',
    borderColor: 'rgba(201,168,76,0.2)',
  },
];

const activations = [
  {
    brand: 'Nike Air Max Launch',
    details: 'Central Rotunda \u00B7 3-day activation \u00B7 85,000 direct engagements',
    gradient: 'rgba(201,168,76,0.1)',
  },
  {
    brand: 'Samsung Galaxy Experiential',
    details: 'North Garden \u00B7 7-day activation \u00B7 120,000 product demos',
    gradient: 'rgba(27,108,168,0.1)',
  },
  {
    brand: 'Target Holiday Takeover',
    details: 'East Broadway \u00B7 6-week campaign \u00B7 2.1M impressions',
    gradient: 'rgba(74,155,111,0.1)',
  },
];

export default function Sponsorship() {
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="sponsorship"
      style={{
        backgroundColor: '#0A0E1A',
        paddingTop: '100px',
        paddingBottom: '0',
        overflow: 'hidden',
        position: 'relative',
      }}
    >
      {/* Top separator */}
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '1px', background: 'linear-gradient(90deg, transparent 0%, rgba(201,168,76,0.25) 30%, rgba(201,168,76,0.25) 70%, transparent 100%)' }} />

      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 clamp(24px, 5vw, 64px)', position: 'relative' }}>

        {/* PART A — Header */}
        <div style={{ marginBottom: '72px', maxWidth: '620px' }}>
          <FadeUp>
            <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '11px', letterSpacing: '0.25em', color: '#C9A84C', textTransform: 'uppercase', marginBottom: '16px' }}>
              · Sponsorship
            </p>
          </FadeUp>
          <FadeUp delay={0.1}>
            <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(40px, 7vw, 96px)', fontWeight: 300, color: '#F5F0E8', lineHeight: 0.98, marginBottom: '24px' }}>
              Your Brand.<br />
              <em style={{ color: '#C9A84C' }}>40 Million Impressions.</em>
            </h2>
          </FadeUp>
          <FadeUp delay={0.15}>
            <div style={{ width: '32px', height: '1px', background: '#C9A84C', marginBottom: '24px' }} />
          </FadeUp>
          <FadeUp delay={0.2}>
            <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '15px', lineHeight: 1.85, color: 'rgba(245,240,232,0.65)' }}>
              Mall of America is more than a retail destination — it's a national media platform.
              Partner with us to reach one of the most diverse, high-intent audiences in North America.
            </p>
          </FadeUp>
        </div>

        {/* PART B — Audience Data Bar */}
        <FadeUp delay={0.1}>
          <div style={{
            border: '1px solid rgba(201,168,76,0.3)',
            padding: '3rem',
            marginBottom: '80px',
          }}>
            <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '10px', letterSpacing: '0.35em', color: '#C9A84C', textTransform: 'uppercase', marginBottom: '32px' }}>
              The Audience
            </p>
            <div className="sponsorship-stats-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '24px' }}>
              {audienceStats.map((s, i) => (
                <div key={i}>
                  <div style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(36px, 4vw, 56px)', fontWeight: 300, color: '#C9A84C', lineHeight: 0.95, marginBottom: '8px' }}>
                    {s.value}
                  </div>
                  <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '11px', letterSpacing: '0.15em', color: 'rgba(245,240,232,0.6)', textTransform: 'uppercase' }}>
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </FadeUp>

        {/* PART C — Partnership Tiers */}
        <div style={{ marginBottom: '80px' }}>
          <FadeUp>
            <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '10px', letterSpacing: '0.35em', color: 'rgba(245,240,232,0.35)', textTransform: 'uppercase', marginBottom: '32px' }}>
              Partnership Tiers
            </p>
          </FadeUp>

          <div className="sponsorship-tiers-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px' }}>
            {tiers.map((tier, i) => (
              <FadeUp key={i} delay={0.08 + i * 0.12}>
                <motion.div
                  style={{
                    border: `1px solid ${tier.borderColor}`,
                    padding: '36px 32px',
                    position: 'relative',
                    overflow: 'hidden',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                  }}
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.3 }}
                  className="group"
                >
                  {/* Hover glow */}
                  <div style={{
                    position: 'absolute', inset: 0,
                    background: 'linear-gradient(to bottom, rgba(201,168,76,0.05), transparent)',
                    opacity: 0, transition: 'opacity 0.5s',
                  }} className="group-hover:opacity-100" />

                  <div style={{ position: 'relative', flex: 1, display: 'flex', flexDirection: 'column' }}>
                    {/* Tag */}
                    <span style={{
                      fontFamily: 'DM Sans, sans-serif', fontSize: '9px',
                      letterSpacing: '0.25em', textTransform: 'uppercase',
                      color: '#C9A84C', marginBottom: '20px',
                    }}>
                      {tier.tag}
                    </span>

                    {/* Name */}
                    <h3 style={{
                      fontFamily: 'Cormorant Garamond, serif', fontSize: '28px',
                      fontWeight: 400, color: '#F5F0E8', marginBottom: '8px',
                    }}>
                      {tier.name}
                    </h3>

                    {/* Price */}
                    <p style={{
                      fontFamily: 'DM Sans, sans-serif', fontSize: '13px',
                      color: 'rgba(201,168,76,0.75)', marginBottom: '24px',
                    }}>
                      {tier.price}
                    </p>

                    <div style={{ width: '24px', height: '1px', background: 'rgba(201,168,76,0.3)', marginBottom: '20px' }} />

                    {/* Benefits */}
                    <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 auto 0', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                      {tier.benefits.map((b, j) => (
                        <li key={j} style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                          <span style={{ color: '#C9A84C', fontSize: '8px', lineHeight: '20px', flexShrink: 0 }}>&#9679;</span>
                          <span style={{
                            fontFamily: 'DM Sans, sans-serif', fontSize: '13px',
                            lineHeight: 1.6, color: 'rgba(245,240,232,0.5)',
                          }}>
                            {b}
                          </span>
                        </li>
                      ))}
                    </ul>

                    {/* CTA */}
                    <div style={{ marginTop: '28px' }}>
                      <span
                        style={{
                          fontFamily: 'DM Sans, sans-serif', fontSize: '11px',
                          letterSpacing: '0.15em', textTransform: 'uppercase',
                          color: '#C9A84C', cursor: 'pointer', transition: 'color 0.3s',
                        }}
                        onClick={() => scrollToSection('contact')}
                        className="hover:text-[#E2C97E]"
                      >
                        {tier.cta} →
                      </span>
                    </div>
                  </div>
                </motion.div>
              </FadeUp>
            ))}
          </div>
        </div>

        {/* PART D — Activation Examples */}
        <div style={{ marginBottom: '80px' }}>
          <FadeUp>
            <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '10px', letterSpacing: '0.35em', color: 'rgba(245,240,232,0.35)', textTransform: 'uppercase', marginBottom: '32px' }}>
              Past Activations
            </p>
          </FadeUp>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px' }}>
            {activations.map((act, i) => (
              <FadeUp key={i} delay={0.05 + i * 0.1}>
                <div style={{
                  border: '1px solid rgba(201,168,76,0.2)',
                  padding: '2rem',
                  background: `linear-gradient(135deg, ${act.gradient}, transparent)`,
                  transition: 'border-color 0.3s',
                }} className="group">
                  <h4 style={{
                    fontFamily: 'Cormorant Garamond, serif', fontSize: '22px',
                    fontWeight: 400, color: '#F5F0E8', marginBottom: '12px',
                  }}>
                    {act.brand}
                  </h4>
                  <p style={{
                    fontFamily: 'DM Sans, sans-serif', fontSize: '12px',
                    color: 'rgba(201,168,76,0.7)', letterSpacing: '0.02em',
                  }}>
                    {act.details}
                  </p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </div>

      {/* PART E — Bottom CTA Strip */}
      <FadeUp>
        <div style={{
          background: 'rgba(201,168,76,0.08)',
          padding: 'clamp(48px, 6vw, 80px) clamp(24px, 5vw, 64px)',
          textAlign: 'center',
        }}>
          <h3 style={{
            fontFamily: 'Cormorant Garamond, serif',
            fontSize: 'clamp(28px, 4vw, 48px)',
            fontWeight: 300, color: '#F5F0E8',
            marginBottom: '28px',
          }}>
            Ready to reach 40 million people?
          </h3>
          <div style={{ display: 'flex', gap: '24px', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap' }}>
            <CTAButton variant="primary" onClick={() => scrollToSection('contact')}>
              Download Sponsorship Deck →
            </CTAButton>
            <span
              style={{
                fontFamily: 'DM Sans, sans-serif', fontSize: '12px',
                color: '#C9A84C', cursor: 'pointer', transition: 'color 0.3s',
                letterSpacing: '0.05em',
              }}
              onClick={() => scrollToSection('contact')}
            >
              Or speak to our partnerships team →
            </span>
          </div>
        </div>
      </FadeUp>
    </section>
  );
}
