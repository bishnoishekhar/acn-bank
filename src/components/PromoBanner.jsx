import React, { useState } from 'react';

export default function PromoBanner() {
  const [visible, setVisible] = useState(true);
  if (!visible) return null;
  return (
    <div style={{
      background: 'linear-gradient(90deg,#A100FF,#7000BB)',
      color: '#fff', textAlign: 'center',
      padding: '10px 48px', fontSize: 13.5, fontWeight: 600,
      position: 'relative',
    }}>
      🎁&nbsp; Limited offer: Open a chequing account today and earn 5× rewards points for 90 days.&nbsp;
      <a href="#" style={{ color: '#E0BAFF', textDecoration: 'underline' }}>Learn more →</a>
      <button
        onClick={() => setVisible(false)}
        aria-label="Dismiss"
        style={{
          position: 'absolute', right: 16, top: '50%', transform: 'translateY(-50%)',
          background: 'transparent', border: 'none', color: '#fff',
          fontSize: 18, lineHeight: 1, cursor: 'pointer', opacity: 0.7,
        }}
      >×</button>
    </div>
  );
}
