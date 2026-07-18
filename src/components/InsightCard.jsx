import React from 'react';

const BRAND = '#A100FF';

const insights = [
  {
    icon: '📈',
    label: 'Credit Score',
    value: '742',
    unit: '/ 900',
    trend: '+12 this month',
    trendUp: true,
    desc: 'Good standing. You\'re in the top 28% of ACN Bank customers.',
    accent: '#A100FF',
    bar: 82,
  },
  {
    icon: '💸',
    label: 'Monthly Spending',
    value: '$3,240',
    unit: '/ $4,000',
    trend: '−8% vs last month',
    trendUp: true,
    desc: 'You\'re on track. $760 remaining in your budget this month.',
    accent: '#0284C7',
    bar: 81,
  },
  {
    icon: '🏦',
    label: 'Savings Rate',
    value: '18%',
    unit: 'of income',
    trend: '+3% vs last month',
    trendUp: true,
    desc: 'Above the recommended 15%. Your emergency fund goal is 74% complete.',
    accent: '#059669',
    bar: 74,
  },
  {
    icon: '🧾',
    label: 'Upcoming Bills',
    value: '$1,850',
    unit: 'due this month',
    trend: '4 bills remaining',
    trendUp: null,
    desc: 'Hydro, Netflix, Rogers, and mortgage payment scheduled for next 14 days.',
    accent: '#D97706',
    bar: 60,
  },
];

function ScoreBar({ pct, color }) {
  return (
    <div style={{
      height: 5, borderRadius: 99, background: '#EDE5F8',
      margin: '10px 0 14px', overflow: 'hidden',
    }}>
      <div style={{
        height: '100%', width: `${pct}%`, borderRadius: 99,
        background: `linear-gradient(90deg,${color}99,${color})`,
        transition: 'width 0.6s ease',
      }} />
    </div>
  );
}

export default function InsightCard() {
  return (
    <section style={{ padding: '72px 40px', background: '#F8F4FF' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: 44 }}>
          <div style={{
            display: 'inline-block', fontSize: 12, fontWeight: 800, letterSpacing: 2,
            color: BRAND, textTransform: 'uppercase', marginBottom: 12,
          }}>AI Financial Insights</div>
          <h2 style={{ fontSize: 34, fontWeight: 900, color: '#0A0014' }}>
            Your money, understood at a glance.
          </h2>
          <p style={{ fontSize: 15, color: '#6B5B8A', marginTop: 12, maxWidth: 480, margin: '12px auto 0' }}>
            The AI assistant surfaces personalised insights from your accounts — no spreadsheets required.
          </p>
        </div>

        {/* Cards grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: 20,
        }}>
          {insights.map(({ icon, label, value, unit, trend, trendUp, desc, accent, bar }) => (
            <div key={label} style={{
              background: '#fff', borderRadius: 18, padding: '22px 22px 18px',
              border: '1px solid #EDE5F8', borderTop: `4px solid ${accent}`,
              boxShadow: '0 2px 16px rgba(161,0,255,0.07)',
              transition: 'box-shadow .2s, transform .15s',
            }}
              onMouseEnter={e => {
                e.currentTarget.style.boxShadow = `0 8px 28px ${accent}22`;
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.boxShadow = '0 2px 16px rgba(161,0,255,0.07)';
                e.currentTarget.style.transform = 'none';
              }}
            >
              {/* Icon + label */}
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 14 }}>
                <span style={{
                  fontSize: 20, width: 40, height: 40, borderRadius: 11,
                  background: `${accent}14`, display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>{icon}</span>
                <span style={{ fontSize: 12.5, fontWeight: 700, color: '#8A7CA8', letterSpacing: 0.3 }}>{label}</span>
              </div>

              {/* Value */}
              <div style={{ display: 'flex', alignItems: 'baseline', gap: 5 }}>
                <span style={{ fontSize: 30, fontWeight: 900, color: '#0A0014', letterSpacing: '-0.5px' }}>{value}</span>
                <span style={{ fontSize: 13, fontWeight: 600, color: '#B0A4C8' }}>{unit}</span>
              </div>

              {/* Progress bar */}
              <ScoreBar pct={bar} color={accent} />

              {/* Trend badge */}
              {trend && (
                <div style={{ marginBottom: 10 }}>
                  <span style={{
                    fontSize: 11.5, fontWeight: 700, padding: '3px 9px', borderRadius: 20,
                    background: trendUp === true ? '#EAFBF0' : trendUp === false ? '#FFF1F1' : '#F5F1FB',
                    color: trendUp === true ? '#059669' : trendUp === false ? '#DC2626' : '#6B5B8A',
                  }}>
                    {trendUp === true ? '▲ ' : trendUp === false ? '▼ ' : ''}{trend}
                  </span>
                </div>
              )}

              {/* Description */}
              <p style={{ fontSize: 12.5, color: '#8A7CA8', lineHeight: 1.6, margin: 0 }}>{desc}</p>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div style={{ textAlign: 'center', marginTop: 40 }}>
          <p style={{ fontSize: 14, color: '#8A7CA8', marginBottom: 16 }}>
            Ask the assistant anything about your finances.
          </p>
          <button style={{
            background: `linear-gradient(135deg,${BRAND},#7000BB)`,
            color: '#fff', border: 'none', borderRadius: 12,
            padding: '13px 32px', fontSize: 15, fontWeight: 700, cursor: 'pointer',
            boxShadow: '0 6px 20px rgba(161,0,255,0.3)',
          }}>
            Chat with your AI banker →
          </button>
        </div>

      </div>
    </section>
  );
}
