import React from 'react';

const products = [
  { icon: '🏦', title: 'Daily Banking', desc: 'Transfer money, pay bills, check your card status, and manage beneficiaries — all through a single conversation.', cta: 'I want to do my daily banking' },
  { icon: '📊', title: 'Know Your Finances', desc: 'Check balances, review recent transactions, track spending patterns, and view your credit score — instantly.', cta: 'I want to know my finances' },
  { icon: '🎁', title: 'Apply for Products', desc: 'Open a chequing or savings account, apply for a credit card or loan — guided step by step with no paperwork.', cta: 'I want to apply for a product' },
  { icon: '💳', title: 'Card Management', desc: 'Lock, unlock, replace or set limits on your credit and debit cards — done in seconds without calling anyone.', cta: 'Help me manage my card' },
  { icon: '🔒', title: 'Secure & Private', desc: 'Multi-factor authentication, end-to-end encryption and real-time anomaly detection keep every transaction safe.', cta: 'Tell me about security' },
  { icon: '🤝', title: 'Lending & Mortgages', desc: 'Explore personal loans, auto financing or mortgage options personalised to your financial profile.', cta: 'I am interested in lending' },
];

export default function Products() {
  return (
    <section style={{ padding: '80px 40px', background: '#fff' }}>
      <div style={{ textAlign: 'center', marginBottom: 48 }}>
        <div style={{
          display: 'inline-block', fontSize: 12, fontWeight: 800, letterSpacing: 2,
          color: '#A100FF', textTransform: 'uppercase', marginBottom: 12,
        }}>What the agent handles</div>
        <h2 style={{ fontSize: 36, fontWeight: 900, color: '#0A0014' }}>
          Everything you need, one conversation away.
        </h2>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))',
        gap: 20, maxWidth: 1100, margin: '0 auto',
      }}>
        {products.map(({ icon, title, desc, cta }) => (
          <div key={title} style={{
            background: '#FAFAFA', borderRadius: 16, padding: '28px 26px',
            border: '1px solid #EDE5F8', transition: 'box-shadow .2s, transform .15s',
          }}
            onMouseEnter={e => { e.currentTarget.style.boxShadow = '0 8px 28px rgba(161,0,255,0.15)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
            onMouseLeave={e => { e.currentTarget.style.boxShadow = 'none'; e.currentTarget.style.transform = 'none'; }}
          >
            <div style={{ fontSize: 32, marginBottom: 14 }}>{icon}</div>
            <h3 style={{ fontSize: 17, fontWeight: 800, color: '#0A0014', marginBottom: 10 }}>{title}</h3>
            <p style={{ fontSize: 14, color: '#6B5B8A', lineHeight: 1.65, marginBottom: 20 }}>{desc}</p>
            <button style={{
              background: 'transparent', color: '#A100FF',
              border: '1.5px solid #A100FF', borderRadius: 9,
              padding: '8px 16px', fontSize: 13, fontWeight: 700, cursor: 'pointer',
            }}>Get started →</button>
          </div>
        ))}
      </div>
    </section>
  );
}
