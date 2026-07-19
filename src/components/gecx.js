let _onResponse = null;

export function setResponseHandler(fn) {
  _onResponse = fn;
}

/* ── Send message via the SDK element ── */
export function gecxSend(text) {
  const m = document.querySelector('chat-messenger');
  console.log('[ACN] gecxSend el:', !!m, 'sendRequest:', typeof m?.sendRequest);
  if (m && typeof m.sendRequest === 'function') {
    m.sendRequest('query', text);
  }
}

/* ── Reset session ── */
export function resetGecx() {
  const resetBtn = document.querySelector('chat-reset-session-button');
  if (resetBtn) resetBtn.click();
  const m = document.querySelector('chat-messenger');
  if (m && typeof m.resetSession === 'function') m.resetSession();
}

let _interceptorInstalled = false;

/* ── Fetch interceptor — catches runSession responses ── */
export function installFetchInterceptor() {
  if (_interceptorInstalled) return;
  _interceptorInstalled = true;
  const _orig = window.fetch;
  window.fetch = function (url, opts) {
    const p = _orig.apply(this, arguments);
    if (url && url.toString().includes('runSession')) {
      p.then((r) => {
        r.clone().json().then((data) => {
          if (_onResponse && data?.outputs) {
            _onResponse(data.outputs);
          }
        }).catch(() => {});
      }).catch(() => {});
    }
    return p;
  };
}

/* ── Event listener fallback ── */
export function installEventListeners() {
  ['df-response-received', 'ces-response-received', 'chat-response-received'].forEach((n) => {
    window.addEventListener(n, (e) => {
      if (_onResponse && e.detail?.outputs) _onResponse(e.detail.outputs);
    });
  });
}

export function bootstrapGecx() {
  installFetchInterceptor();
  installEventListeners();
}

/* ── initGecx: no-op — registration now done in index.html before React loads ── */
export function initGecx() {}
