import React from 'react';

const s = {
  nav: {
    position: 'sticky', top: 0, zIndex: 100,
    display: 'flex', alignItems: 'center', justifyContent: 'space-between',
    padding: '0 40px', height: 64,
    background: 'rgba(255,255,255,0.92)', backdropFilter: 'blur(12px)',
    borderBottom: '1px solid #EDE5F8',
  },
  logo: { display: 'flex', alignItems: 'center', gap: 10, fontWeight: 800, fontSize: 20, color: '#0A0014' },
  mark: {
    width: 34, height: 34, borderRadius: 10,
    background: 'linear-gradient(135deg,#B62BFF,#7000BB)',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    color: '#fff', fontWeight: 900, fontSize: 16,
  },
  links: { display: 'flex', gap: 28, fontSize: 14, fontWeight: 600, color: '#2D1F4A' },
  link: { cursor: 'pointer', transition: 'color .15s' },
  btns: { display: 'flex', gap: 10, alignItems: 'center' },
  signIn: {
    background: 'transparent', border: '1.5px solid #A100FF', borderRadius: 9,
    padding: '8px 18px', fontSize: 14, fontWeight: 700, color: '#A100FF',
  },
  open: {
    background: 'linear-gradient(135deg,#B62BFF,#7000BB)',
    border: 'none', borderRadius: 9,
    padding: '8px 18px', fontSize: 14, fontWeight: 700, color: '#fff',
  },
};

export default function Navbar() {
  return (
    <nav style={s.nav}>
      <div style={s.logo}>
        <div style={s.mark}>»</div>
        ACN Bank
      </div>
      <div style={s.links}>
        {['Products', 'Services', 'Investing', 'About'].map(l => (
          <a key={l} href="#" style={s.link}>{l}</a>
        ))}
      </div>
      <div style={s.btns}>
        <button style={s.signIn}>Sign in</button>
        <button style={s.open}>Open account</button>
      </div>
    </nav>
  );
}
