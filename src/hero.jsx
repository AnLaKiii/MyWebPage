const { useState: useStateH, useEffect: useEffectH } = React;

function Hero() {
  const phrases = [
    "building reliable data systems",
    "çalışıyor ve öğreniyor",
    "from SQL to LSTM",
    "anomali tespiti ile",
  ];
  const [idx, setIdx] = useStateH(0);
  const [text, setText] = useStateH("");
  const [deleting, setDeleting] = useStateH(false);

  useEffectH(() => {
    const target = phrases[idx % phrases.length];
    let t;
    if (!deleting && text.length < target.length) {
      t = setTimeout(() => setText(target.slice(0, text.length + 1)), 55);
    } else if (!deleting && text.length === target.length) {
      t = setTimeout(() => setDeleting(true), 1800);
    } else if (deleting && text.length > 0) {
      t = setTimeout(() => setText(target.slice(0, text.length - 1)), 30);
    } else if (deleting && text.length === 0) {
      setDeleting(false);
      setIdx(i => i + 1);
    }
    return () => clearTimeout(t);
  }, [text, deleting, idx]);

  return (
    <section className="hero" id="home">
      <div className="hero-grid"></div>
      <div className="hero-glow"></div>
      <div className="hero-glow two"></div>

      <div className="wrap hero-inner">
        <div className="hero-tag">
          <span className="pulse"></span>
          <span>{PROFILE.available ? "Yeni fırsatlara açık" : "Şu anda meşgul"}</span>
          <span style={{ color: 'var(--ink-3)', marginLeft: 4 }}>· {PROFILE.location}</span>
        </div>

        <h1 className="hero-title">
          <span className="name">Kaan Kürşat</span>
          <span className="name"><i>Kılıç</i>.</span>
        </h1>

        <div className="hero-typed">
          <span className="prompt">~/kaan</span>
          <span>$</span>
          <span>{text}</span>
          <span className="caret"></span>
        </div>

        <p className="hero-sub">
          Marmara Üniversitesi Bilgisayar Mühendisliği mezunuyum.
          Veritabanı yönetimi, veri analizi ve yapay zekâ alanlarında projeler geliştiriyorum —
          SQL'den LSTM'e, üretimdeki sistemleri gözetleyen şeyler inşa etmeyi seviyorum.
        </p>

        <div className="hero-cta">
          <a href="#projects" className="btn primary">
            Projelerimi gör <Icon.Arrow/>
          </a>
          <a href="cv.pdf" target="_blank" className="btn ghost">
            <Icon.Download/> CV indir
          </a>
          <a href={PROFILE.github} target="_blank" className="btn ghost">
            <Icon.Github/> GitHub
          </a>
        </div>

        <div className="hero-stats">
          <div>
            <div className="num">4<i>+</i></div>
            <div className="lbl">Yıl deneyim</div>
          </div>
          <div>
            <div className="num">14</div>
            <div className="lbl">GitHub repo</div>
          </div>
          <div>
            <div className="num">10<i>+</i></div>
            <div className="lbl">Sertifika</div>
          </div>
          <div>
            <div className="num">6</div>
            <div className="lbl">Dil / framework</div>
          </div>
        </div>
      </div>
    </section>
  );
}

window.Hero = Hero;
