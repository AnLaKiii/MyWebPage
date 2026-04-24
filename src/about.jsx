function About() {
  return (
    <section className="section" id="about" data-screen-label="About">
      <div className="wrap">
        <span className="eyebrow">04 / Hakkımda</span>
        <h2 className="section-title">Bir <i>mühendis</i> olarak ben.</h2>

        <div className="about-grid">
          <div className="about-photo">
            <img src="images/image_2.jpg" alt="Kaan Kürşat Kılıç"/>
            <span className="sig">Kaan K.</span>
          </div>

          <div className="about-text">
            <p>
              Merhaba! Ben <strong>Kaan</strong>. Marmara Üniversitesi Bilgisayar Mühendisliği'nden mezunum ve şu sıralar
              Yönetim Bilişim Sistemleri alanında eğitimime devam ediyorum.
            </p>
            <p>
              Bir veri tabanı danışmanlık firmasında <strong>DBA</strong> olarak çalışırken performans izleme,
              güvenlik ve yedekleme süreçlerinde sorumluluk aldım. Bu sırada yapay zekâ destekli anomali tespiti
              projesinde hem <strong>ML/DL modellerini</strong> eğittim hem de Python ile otomasyon araçları geliştirdim.
            </p>
            <p>
              Öğrenmeye açık, meraklı ve disiplinli biriyim. Hedefim; yazılım, veri ve yapay zekâ alanlarında
              hem teknik hem de analitik bakış açımı geliştirerek <strong>gerçek etki yaratan çözümler</strong> üretmek.
            </p>

            <div className="skills">
              {SKILLS.map((s, i) => (
                <div key={i} className="skill-group">
                  <h5>{s.group}</h5>
                  <div className="skill-tags">
                    {s.items.map(t => <span key={t} className="skill-tag">{t}</span>)}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

window.About = About;
