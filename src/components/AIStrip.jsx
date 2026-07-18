import React from 'react';

const steps = [
  { n: '01', title: 'Tell us what you need', desc: 'Type naturally — no forms, no menus. Just say "transfer $500 to John" or "what\'s my balance?"' },
  { n: '02', title: 'Verify your identity', desc: 'Quick PIN or OTP check keeps your account secure. Done in seconds.' },
  { n: '03', title: 'Done — instantly', desc: 'The AI agent executes the action, confirms it in chat, and sends you a receipt.' },
];

export default function AIStrip() {
  return (
    <section style={{
      background: 'linear-gradient(135deg,#140025 0%,#2D0060 100%)',
      padding: '80px 40px', color: '#fff',
    }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 56 }}>
          <div style={{
            display: 'inline-block', fontSize: 12, fontWeight: 800, letterSpacing: 2,
            color: '#C570FF', textTransform: 'uppercase', marginBottom: 12,
          }}>How it works</div>
          <h2 style={{ fontSize: 36, fontWeight: 900, color: '#fff' }}>
            Agentic AI that actually does the work.
          </h2>
          <p style={{ fontSize: 16, color: '#B09ACC', marginTop: 14, maxWidth: 520, margin: '14px auto 0' }}>
            Powered by Google Conversational Agents (GECX) and Accenture's banking intelligence layer.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(260px,1fr))', gap: 24 }}>
          {steps.map(({ n, title, desc }) => (
            <div key={n} style={{
              background: 'rgba(255,255,255,0.06)', borderRadius: 16,
              border: '1px solid rgba(255,255,255,0.1)', padding: '28px 26px',
            }}>
              <div style={{
                fontSize: 12, fontWeight: 900, color: '#A100FF',
                background: 'rgba(161,0,255,0.2)', borderRadius: 8,
                padding: '4px 10px', display: 'inline-block', marginBottom: 16,
              }}>{n}</div>
              <h3 style={{ fontSize: 18, fontWeight: 800, marginBottom: 10 }}>{title}</h3>
              <p style={{ fontSize: 14, color: '#C3AEDD', lineHeight: 1.65 }}>{desc}</p>
            </div>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: 48 }}>
          <p style={{ fontSize: 13, color: '#7A6A9A', fontWeight: 600 }}>
            Secured by Google Cloud · ISO 27001 · SOC 2 Type II · PCI DSS Level 1
          </p>
        </div>
      </div>
    </section>
  );
}
