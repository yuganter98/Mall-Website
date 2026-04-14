import { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FadeUp } from '../components/SectionWrapper';
import { content } from '../data/content';

const cardMeta = [
  { accentColor: '#FF6B35', cornerNum: '27', cornerLabel: 'Rides' },
  { accentColor: '#1B6CA8', cornerNum: '10K+', cornerLabel: 'Creatures' },
  { accentColor: '#4A9B6F', cornerNum: '4D', cornerLabel: 'Experience' },
  { accentColor: '#C9A84C', cornerNum: '\u221E', cornerLabel: 'Experiences' },
];

const VIDEO_SRC = 'https://videos.pexels.com/video-files/2795405/2795405-hd_1920_1080_30fps.mp4';

function LazyVideo() {
  const containerRef = useRef(null);
  const videoRef = useRef(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && videoRef.current && !loaded) {
          videoRef.current.src = VIDEO_SRC;
          videoRef.current.load();
          setLoaded(true);
        }
      },
      { rootMargin: '300px' }
    );
    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, [loaded]);

  return (
    <div
      ref={containerRef}
      style={{
        position: 'relative',
        width: '100%',
        height: '400px',
        overflow: 'hidden',
        marginBottom: '64px',
      }}
    >
      {/* Fallback gradient */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(135deg, #0A0E1A 0%, #0D1628 50%, #0A0E1A 100%)',
      }} />

      <video
        ref={videoRef}
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
      />

      {/* Dark overlay */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'rgba(10,14,26,0.4)',
      }} />

      {/* Edge fades */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(to right, #0A0E1A 0%, transparent 15%, transparent 85%, #0A0E1A 100%)',
      }} />

      {/* Centered text */}
      <div style={{
        position: 'absolute', inset: 0,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        zIndex: 2,
      }}>
        <FadeUp>
          <h3 style={{
            fontFamily: 'Cormorant Garamond, serif',
            fontSize: 'clamp(36px, 5vw, 64px)',
            fontWeight: 300,
            color: '#F5F0E8',
            textAlign: 'center',
            lineHeight: 1.1,
          }}>
            7 Acres. 27 Rides.{' '}
            <em style={{ color: '#C9A84C' }}>Zero Limits.</em>
          </h3>
        </FadeUp>
      </div>
    </div>
  );
}

export default function Entertainment() {
  const { entertainment } = content;
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ['-10%', '10%']);

  return (
    <section
      id="entertainment"
      ref={ref}
      style={{
        background: 'linear-gradient(180deg, #0A0E1A 0%, #0C1420 50%, #0A0E1A 100%)',
        paddingTop: '100px',
        paddingBottom: '100px',
        overflow: 'hidden',
        position: 'relative',
      }}
    >
      {/* Top separator */}
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '1px', background: 'linear-gradient(90deg, transparent 0%, rgba(201,168,76,0.2) 30%, rgba(201,168,76,0.2) 70%, transparent 100%)' }} />

      {/* Parallax dot grid */}
      <motion.div style={{ y: bgY, position: 'absolute', inset: '-20%', pointerEvents: 'none' }}>
        <div style={{
          position: 'absolute', inset: 0, opacity: 0.06,
          backgroundImage: 'radial-gradient(circle at 2px 2px, #C9A84C 1px, transparent 0)',
          backgroundSize: '44px 44px',
        }} />
      </motion.div>

      {/* Blue ambient glow */}
      <div style={{
        position: 'absolute', top: '50%', left: '50%',
        transform: 'translate(-50%,-50%)',
        width: '80vw', height: '60vh',
        background: 'radial-gradient(ellipse, rgba(27,108,168,0.07) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 clamp(24px, 5vw, 64px)', position: 'relative' }}>

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '72px' }}>
          <FadeUp>
            <p style={{
              fontFamily: 'DM Sans, sans-serif', fontSize: '11px',
              letterSpacing: '0.25em', color: '#C9A84C',
              textTransform: 'uppercase', marginBottom: '16px',
            }}>
              · {entertainment.label}
            </p>
          </FadeUp>
          <FadeUp delay={0.1}>
            <h2 style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontSize: 'clamp(40px, 7vw, 96px)',
              fontWeight: 300, color: '#F5F0E8',
              lineHeight: 0.98, marginBottom: '24px',
            }}>
              {entertainment.heading}<br />
              <em style={{ color: '#C9A84C' }}>{entertainment.heading2}</em>
            </h2>
          </FadeUp>
          <FadeUp delay={0.15}>
            <div style={{ width: '32px', height: '1px', background: '#C9A84C', margin: '0 auto 24px' }} />
          </FadeUp>
          <FadeUp delay={0.2}>
            <div style={{
              display: 'inline-block',
              border: '1px solid rgba(201,168,76,0.3)',
              padding: '10px 24px',
              fontFamily: 'DM Sans, sans-serif', fontSize: '10px',
              letterSpacing: '0.3em', color: '#C9A84C', textTransform: 'uppercase',
            }}>
              {entertainment.stat_label}
            </div>
          </FadeUp>
        </div>
      </div>

      {/* Video strip — full width, outside max-width container */}
      <LazyVideo />

      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 clamp(24px, 5vw, 64px)', position: 'relative' }}>
        {/* Feature Cards Grid */}
        <div className="entertainment-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '16px' }}>
          {entertainment.features.map((feat, i) => {
            const meta = cardMeta[i];
            return (
              <FadeUp key={i} delay={i * 0.12}>
                <motion.div
                  style={{
                    border: '1px solid rgba(201,168,76,0.1)',
                    paddingTop: '2.5rem',
                    paddingLeft: '28px', paddingRight: '28px', paddingBottom: '36px',
                    position: 'relative', overflow: 'hidden',
                    cursor: 'default', minHeight: '320px',
                    display: 'flex', flexDirection: 'column',
                  }}
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.3 }}
                  className="group"
                >
                  {/* Colored accent bar */}
                  <div style={{
                    position: 'absolute', top: 0, left: 0, right: 0,
                    height: '3px', background: meta.accentColor,
                  }} />
                  {/* Hover gradient */}
                  <div style={{
                    position: 'absolute', inset: 0, opacity: 0,
                    transition: 'opacity 0.5s',
                    background: `linear-gradient(to bottom, ${feat.colorRgba}, transparent)`,
                  }} className="group-hover:opacity-100" />

                  {/* Corner number */}
                  <div style={{
                    position: 'absolute', top: '16px', right: '20px',
                    textAlign: 'right', pointerEvents: 'none',
                  }}>
                    <div style={{
                      fontFamily: 'Cormorant Garamond, serif', fontSize: '48px',
                      fontWeight: 300, color: 'rgba(255,255,255,0.15)', lineHeight: 1,
                    }}>{meta.cornerNum}</div>
                    <div style={{
                      fontFamily: 'DM Sans, sans-serif', fontSize: '9px',
                      letterSpacing: '0.2em', color: 'rgba(255,255,255,0.12)',
                      textTransform: 'uppercase', marginTop: '2px',
                    }}>{meta.cornerLabel}</div>
                  </div>

                  <div style={{ position: 'relative', flex: 1, display: 'flex', flexDirection: 'column' }}>
                    <h3 style={{
                      fontFamily: 'Cormorant Garamond, serif', fontSize: '21px',
                      fontWeight: 400, color: '#F5F0E8', marginBottom: '8px',
                      transition: 'color 0.3s',
                    }} className="group-hover:text-[#C9A84C]">{feat.title}</h3>
                    <p style={{
                      fontFamily: 'DM Sans, sans-serif', fontSize: '10px',
                      letterSpacing: '0.18em', color: 'rgba(201,168,76,0.55)',
                      textTransform: 'uppercase', marginBottom: '16px',
                    }}>{feat.subtitle}</p>
                    <div style={{ width: '28px', height: '1px', background: 'rgba(201,168,76,0.3)', marginBottom: '16px', transition: 'width 0.5s' }} className="group-hover:w-16" />
                    <p style={{
                      fontFamily: 'DM Sans, sans-serif', fontSize: '13.5px',
                      lineHeight: 1.72, color: 'rgba(245,240,232,0.42)', flex: 1,
                    }}>{feat.description}</p>
                  </div>
                </motion.div>
              </FadeUp>
            );
          })}
        </div>

        {/* Bottom "27" display */}
        <FadeUp delay={0.1}>
          <div style={{ marginTop: '96px', borderTop: '1px solid rgba(201,168,76,0.1)', paddingTop: '64px', textAlign: 'center' }}>
            <div style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontSize: 'clamp(72px, 14vw, 200px)',
              fontWeight: 700, color: 'rgba(201,168,76,0.15)',
              lineHeight: 0.9, userSelect: 'none',
            }}>27</div>
            <p style={{
              fontFamily: 'DM Sans, sans-serif', fontSize: '10px',
              letterSpacing: '0.4em', color: 'rgba(245,240,232,0.4)',
              textTransform: 'uppercase', marginTop: '-8px',
            }}>Rides inside the nation's largest indoor theme park</p>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
