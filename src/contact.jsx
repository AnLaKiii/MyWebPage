const { useState: useStateCt } = React;

function Contact() {
  const [copied, setCopied] = useStateCt(false);
  const copy = () => {
    navigator.clipboard?.writeText(PROFILE.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <section className="contact" id="contact" data-screen-label="Contact">
      <div className="wrap">
        <div className="contact-inner">
          <span className="eyebrow">05 / İletişim</span>
          <h2>Birlikte bir şey <i>yapalım</i> mı?</h2>
          <p style={{ fontSize: 18, color: 'var(--ink-2)', maxWidth: '48ch', margin: '0 0 32px' }}>
            Yeni fırsatlara, iş birliklerine ve ilginç teknik sohbetlere her zaman açığım.
            En hızlı bana e-posta üzerinden ulaşabilirsiniz.
          </p>

          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <a href={`mailto:${PROFILE.email}`} className="btn primary">
              <Icon.Mail/> Bana yaz
            </a>
            <button className="btn ghost" onClick={copy}>
              <Icon.Copy/> {copied ? "Kopyalandı!" : PROFILE.email}
            </button>
          </div>

          <div className="contact-grid">
            <div className="contact-item">
              <div className="lbl">E-posta</div>
              <a href={`mailto:${PROFILE.email}`}>{PROFILE.email}</a>
            </div>
            <div className="contact-item">
              <div className="lbl">Telefon</div>
              <a href={`tel:${PROFILE.phone.replace(/\s/g, '')}`}>{PROFILE.phone}</a>
            </div>
            <div className="contact-item">
              <div className="lbl">Konum</div>
              <div className="val">{PROFILE.location}</div>
            </div>
            <div className="contact-item">
              <div className="lbl">Yanıt süresi</div>
              <div className="val" style={{ fontSize: 22 }}>
                <span style={{ color: 'var(--accent)' }}>●</span> Genellikle 24 saat içinde
              </div>
            </div>
          </div>

          <div className="socials">
            <a href={PROFILE.github} target="_blank" aria-label="GitHub"><Icon.Github/></a>
            <a href={PROFILE.linkedin} target="_blank" aria-label="LinkedIn"><Icon.Linkedin/></a>
            <a href={`mailto:${PROFILE.email}`} aria-label="Email"><Icon.Mail/></a>
          </div>
        </div>
      </div>

      <footer className="foot">
        <div className="wrap foot-inner">
          <div>
            <span className="dot"></span>
            Tüm sistemler çalışıyor · {new Date().getFullYear()}
          </div>
          <div>
            Kaan Kürşat Kılıç · İstanbul
          </div>
        </div>
      </footer>
    </section>
  );
}

window.Contact = Contact;
