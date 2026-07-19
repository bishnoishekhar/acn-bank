import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar.jsx';
import PromoBanner from './components/PromoBanner.jsx';
import Hero from './components/Hero.jsx';
import Products from './components/Products.jsx';
import InsightCard from './components/InsightCard.jsx';
import AIStrip from './components/AIStrip.jsx';
import ChatWindow from './components/ChatWindow.jsx';
import { bootstrapGecx } from './components/gecx';

export default function App() {
  const [chatOpen, setChatOpen] = useState(false);
  const [chatIntent, setChatIntent] = useState(null);

  // Bootstrap fetch interceptor + event listeners on page load — same as acn-bank-demo
  useEffect(() => {
    bootstrapGecx();
  }, []);

  const openChat = (intent = null) => {
    setChatOpen(true);
    setChatIntent(intent);
  };

  return (
    <div className="page">
      <Navbar onChatOpen={() => openChat()} />
      <PromoBanner />
      <Hero onChatOpen={openChat} />
      <Products onChatOpen={openChat} />
      <InsightCard />
      <AIStrip />

      {/* FAB */}
      <button
        style={fab}
        onClick={() => openChat()}
        aria-label="Open chat"
      >
        <span style={{ fontSize: 22 }}>{chatOpen ? '✕' : '💬'}</span>
        {!chatOpen && <div style={dot} />}
      </button>

      {/* Custom chat window — same pattern as acn-bank-demo */}
      <ChatWindow
        isOpen={chatOpen}
        onClose={() => setChatOpen(false)}
        onReset={() => {}}
        intent={chatIntent}
      />
    </div>
  );
}

const fab = {
  position: 'fixed', bottom: 24, right: 24,
  width: 54, height: 54, borderRadius: '50%',
  background: '#A100FF', border: 'none', cursor: 'pointer',
  color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center',
  zIndex: 10001, boxShadow: '0 4px 16px rgba(161,0,255,0.35)',
};
const dot = {
  position: 'absolute', top: 3, right: 3,
  width: 14, height: 14, borderRadius: '50%',
  background: '#22C55E', border: '2px solid #fff',
};
