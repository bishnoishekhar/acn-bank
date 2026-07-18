import React from 'react';

const cardStyle = {
  background: 'linear-gradient(135deg,#B62BFF 0%,#7000BB 100%)',
  borderRadius: 20, padding: '28px 32px', color: '#fff',
  boxShadow: '0 20px 60px rgba(161,0,255,0.35)',
  width: 340, position: 'relative', overflow: 'hidden',
};

export default function Hero() {
  return (
    <section style={{
      padding: '80px 40px',
      background: 'linear-gradient(160deg,#F5EEFF 0%,#fff 55%)',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      gap: 80, flexWrap: 'wrap',
    }}>
      {/* Left copy */}
      <div style={{ maxWidth: 520 }}>
        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: 8,
          background: '#EDE5F8', borderRadius: 20, padding: '5px 14px',
          fontSize: 12.5, fontWeight: 700, color: '#7000BB', marginBottom: 22,
        }}>
          <span style={{ width: 7, height: 7, borderRadius: '50%', background: '#A100FF', display: 'inline-block' }} />
          Agentic AI · Built on Accenture × Google GECX
        </div>

        <h1 style={{ fontSize: 52, fontWeight: 900, lineHeight: 1.1, color: '#0A0014', marginBottom: 20 }}>
          Your time matters.<br />
          <span style={{ color: '#A100FF' }}>We act fast.</span>
        </h1>
        <p style={{ fontSize: 17, color: '#6B5B8A', lineHeight: 1.7, marginBottom: 32, maxWidth: 440 }}>
          Finally, banking on your terms. No queues, no long calls, no paperwork —
          just tell us what you need and it's handled, securely and personally.
        </p>

        <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap', marginBottom: 48 }}>
          <button style={{
            background: '#A100FF', color: '#fff', border: 'none',
            borderRadius: 12, padding: '14px 30px', fontSize: 16, fontWeight: 700,
            boxShadow: '0 8px 24px rgba(161,0,255,0.35)', cursor: 'pointer',
          }}>Get started →</button>
          <button style={{
            background: 'transparent', color: '#A100FF',
            border: '1.5px solid #A100FF', borderRadius: 12,
            padding: '13px 28px', fontSize: 16, fontWeight: 700, cursor: 'pointer',
          }}>See what it can do</button>
        </div>

        <div style={{ display: 'flex', gap: 32, flexWrap: 'wrap' }}>
          {[['50+','Banking actions'],['<30s','Task completion'],['24/7','Always on'],['4.8★','Satisfaction']].map(([val, lbl]) => (
            <div key={lbl}>
              <div style={{ fontSize: 24, fontWeight: 900, color: '#A100FF' }}>{val}</div>
              <div style={{ fontSize: 12, color: '#8A7CA8', fontWeight: 600, marginTop: 2 }}>{lbl}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Credit card visual */}
      <div style={{ position: 'relative' }}>
        <div style={cardStyle}>
          <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at 70% 20%,rgba(255,255,255,0.15),transparent 60%)', borderRadius: 20 }} />
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 28 }}>
            <span style={{ fontWeight: 800, fontSize: 16 }}>ACN Bank</span>
            <span style={{ fontSize: 12, fontWeight: 700, background: 'rgba(255,255,255,0.2)', padding: '3px 10px', borderRadius: 20 }}>Platinum</span>
          </div>
          <div style={{
            width: 42, height: 32, borderRadius: 6, background: 'linear-gradient(135deg,#FFD700,#FFA500)',
            marginBottom: 24, boxShadow: '0 2px 8px rgba(0,0,0,0.3)',
          }} />
          <div style={{ display: 'flex', gap: 14, fontSize: 16, fontWeight: 700, letterSpacing: 2, marginBottom: 24 }}>
            <span>5412</span><span>7534</span><span>8901</span><span>4242</span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
            <div>
              <div style={{ fontSize: 9, opacity: 0.7, letterSpacing: 1, textTransform: 'uppercase' }}>Card Holder</div>
              <div style={{ fontWeight: 700, fontSize: 14 }}>CHANDER BISHNOI</div>
            </div>
            <div>
              <div style={{ fontSize: 9, opacity: 0.7, letterSpacing: 1, textTransform: 'uppercase' }}>Expires</div>
              <div style={{ fontWeight: 700, fontSize: 14 }}>09/29</div>
            </div>
            <div style={{ fontSize: 22, fontStyle: 'italic', fontWeight: 900, opacity: 0.9 }}>VISA</div>
          </div>
        </div>

        {/* Floating badges */}
        {[
          { text: '✅  Transfer complete · 3s', top: -16, right: -24, delay: '0s' },
          { text: '🎁  Pre-approved · 5× points', bottom: -14, left: -20, delay: '.6s' },
        ].map(({ text, top, bottom, right, left, delay }) => (
          <div key={text} style={{
            position: 'absolute', top, bottom, right, left,
            background: '#fff', borderRadius: 12, padding: '8px 14px',
            fontSize: 12.5, fontWeight: 700, color: '#140025',
            boxShadow: '0 6px 20px rgba(0,0,0,0.12)',
            animation: `float 3s ease-in-out infinite ${delay}`,
            whiteSpace: 'nowrap',
          }}>{text}</div>
        ))}
      </div>

      <style>{`
        @keyframes float {
          0%,100% { transform: translateY(0); }
          50% { transform: translateY(-6px); }
        }
      `}</style>
    </section>
  );
}
