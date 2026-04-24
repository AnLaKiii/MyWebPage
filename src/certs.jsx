const { useRef: useRefC, useState: useStateC, useEffect: useEffectC } = React;

function Certs() {
  const ref = useRefC(null);
  const [atStart, setAtStart] = useStateC(true);
  const [atEnd, setAtEnd] = useStateC(false);

  const checkScroll = () => {
    const el = ref.current;
    if (!el) return;
    setAtStart(el.scrollLeft <= 8);
    setAtEnd(el.scrollLeft + el.clientWidth >= el.scrollWidth - 8);
  };

  useEffectC(() => {
    checkScroll();
    const el = ref.current;
    if (!el) return;
    el.addEventListener("scroll", checkScroll);
    window.addEventListener("resize", checkScroll);
    return () => {
      el.removeEventListener("scroll", checkScroll);
      window.removeEventListener("resize", checkScroll);
    };
  }, []);

  const scroll = (dir) => {
    const el = ref.current;
    if (!el) return;
    el.scrollBy({ left: dir * (el.clientWidth * 0.8), behavior: "smooth" });
  };

  return (
    <section className="section" id="certs" data-screen-label="Certifications">
      <div className="wrap">
        <div className="certs-head">
          <div>
            <span className="eyebrow">02 / Sertifikalar</span>
            <h2 className="section-title">Sürekli <i>öğrenme</i>.</h2>
          </div>
          <div className="certs-nav">
            <button onClick={() => scroll(-1)} disabled={atStart} aria-label="Geri"><Icon.Left/></button>
            <button onClick={() => scroll(1)} disabled={atEnd} aria-label="İleri"><Icon.Right/></button>
          </div>
        </div>
      </div>

      <div className="wrap">
        <div className="certs-scroll" ref={ref}>
          {CERTS.map((c, i) => (
            c.type === "pdf" ? (
              <a key={i} className="cert cert-pdf" href={c.file} target="_blank" rel="noopener">
                <div className="img">
                  <object data={c.file + "#toolbar=0&navpanes=0&scrollbar=0&view=FitH"} type="application/pdf" aria-label={c.title}>
                    <div className="pdf-fallback">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
                        <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/>
                        <path d="M14 2v6h6"/>
                      </svg>
                      <span>PDF Sertifika</span>
                    </div>
                  </object>
                  <span className="pdf-pill">PDF · Aç</span>
                </div>
                <h4>{c.title}</h4>
                <div className="issuer">{c.issuer}</div>
                <span className="cat">{c.cat}</span>
              </a>
            ) : (
              <div className="cert" key={i}>
                <div className="img"><img src={c.img} alt={c.title}/></div>
                <h4>{c.title}</h4>
                <div className="issuer">{c.issuer}</div>
                <span className="cat">{c.cat}</span>
              </div>
            )
          ))}
        </div>
      </div>

      {DOCS.length > 0 && (
        <div className="wrap" style={{ marginTop: 56 }}>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: 16, marginBottom: 20 }}>
            <h3 style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--ink-3)', textTransform: 'uppercase', letterSpacing: '0.12em', margin: 0, fontWeight: 500 }}>
              Referans Belgeleri
            </h3>
            <div style={{ flex: 1, height: 1, background: 'var(--line)' }}></div>
          </div>
          <div className="docs-grid">
            {DOCS.map((d, i) => (
              <a key={i} href={d.pdf} target="_blank" rel="noopener" className="doc-card">
                <div className="doc-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
                    <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/>
                    <path d="M14 2v6h6"/>
                    <path d="M9 13h6M9 17h4" strokeLinecap="round"/>
                  </svg>
                  <span className="doc-badge">PDF</span>
                </div>
                <div className="doc-meta">
                  <div className="doc-title">{d.title}</div>
                  <div className="doc-issuer">{d.issuer}</div>
                </div>
                <div className="doc-arrow">
                  <Icon.Arrow style={{ width: 16, height: 16 }}/>
                </div>
              </a>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}

window.Certs = Certs;
