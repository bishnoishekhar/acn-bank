import React, { useEffect, useRef, useState } from 'react';

const DEPLOYMENT_NAME = import.meta.env.VITE_DEPLOYMENT_NAME ||
  'projects/483471568825/locations/us/apps/27be6c70-74dc-4e50-a3e8-25b032e7c965/deployments/7cbb68f9-147f-4698-be02-e7ea5fa5d1a3';

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [sdkReady, setSdkReady] = useState(false);
  const registeredRef = useRef(false);

  useEffect(() => {
    function registerSdk() {
      if (registeredRef.current) return;
      try {
        window.chatSdk.registerContext(
          window.chatSdk.prebuilts.ces.createContext({
            deploymentName: DEPLOYMENT_NAME,
            tokenBroker: {
              enableTokenBroker: true,
              enableRecaptcha: false,
            },
          })
        );
        registeredRef.current = true;
        setSdkReady(true);
      } catch (err) {
        console.error('[ACN Bank] SDK registration failed:', err);
      }
    }

    if (window.chatSdk) {
      registerSdk();
    } else {
      window.addEventListener('chat-messenger-loaded', registerSdk, { once: true });
    }

    return () => {
      window.removeEventListener('chat-messenger-loaded', registerSdk);
    };
  }, []);

  function toggleChat() {
    setOpen(o => !o);
    const el = document.querySelector('chat-messenger');
    if (el) {
      if (!open) el.open?.();
      else el.close?.();
    }
  }

  return (
    <>
      <div style={s.sdkHost}>
        <chat-messenger
          url-allowlist="*"
          custom-message-renderer
          style={{ display: open ? 'block' : 'none' }}
        >
          <chat-messenger-container
            chat-title="ACN Bank Assistant"
            chat-title-icon="https://gstatic.com/dialogflow-console/common/assets/ccai-favicons/conversational_agents.png"
            enable-file-upload
            enable-audio-input
          >
            <chat-reset-session-button
              slot="titlebar-actions"
              title-text="New chat"
            />
            <chat-toggle-dialog-button
              slot="titlebar-actions"
              title-text-expanded="Collapse"
              title-text-collapsed="Expand"
            />
            <chat-messenger-close-button
              slot="titlebar-actions"
              title-text="Close"
            />
          </chat-messenger-container>
        </chat-messenger>
      </div>

      <button
        style={s.fab}
        onClick={toggleChat}
        aria-label={open ? 'Close chat assistant' : 'Open chat assistant'}
      >
        <span style={{ fontSize: 22 }}>{open ? '✕' : '💬'}</span>
        {!open && <div style={s.fabDot} />}
      </button>
    </>
  );
}

const s = {
  sdkHost: {
    position: 'fixed',
    bottom: 88,
    right: 24,
    zIndex: 1000,
    width: 380,
  },
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
    zIndex: 1001,
    transition: 'background 0.15s',
    boxShadow: '0 4px 16px rgba(161,0,255,0.35)',
  },
  fabDot: {
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
