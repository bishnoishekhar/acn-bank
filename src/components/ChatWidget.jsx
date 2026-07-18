import React, { useState } from 'react';
import ChatWindow from './ChatWindow.jsx';

export default function ChatWidget() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <ChatWindow
        isOpen={open}
        onClose={() => setOpen(false)}
        onReset={() => {}}
        intent={null}
      />

      <button
        style={s.fab}
        onClick={() => setOpen(o => !o)}
        aria-label={open ? 'Close chat' : 'Open chat'}
      >
        <span style={{ fontSize: 22 }}>{open ? '✕' : '💬'}</span>
        {!open && <div style={s.dot} />}
      </button>
    </>
  );
}

const s = {
  fab: {
    position: 'fixed',
    bottom: 24,
    right: 24,
    width: 54,
    height: 54,
    borderRadius: '50%',
    background: '#A100FF',
    border: 'none',
    cursor: 'pointer',
    color: '#fff',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 10001,
    boxShadow: '0 4px 16px rgba(161,0,255,0.35)',
  },
  dot: {
    position: 'absolute',
    top: 3,
    right: 3,
    width: 14,
    height: 14,
    borderRadius: '50%',
    background: '#22C55E',
    border: '2px solid #fff',
  },
};
