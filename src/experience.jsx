function XpItem({ item }) {
  return (
    <div className={"xp-item" + (item.current ? " current" : "")}>
      <div className="xp-date">
        <span>{item.date}</span>
        {item.current && <span style={{ padding: '2px 8px', background: 'var(--accent-soft)', color: 'var(--accent)', borderRadius: 4, fontSize: 10 }}>ŞU AN</span>}
      </div>
      <h4>{item.title}</h4>
      <div className="xp-org">{item.org}</div>
      <p className="xp-desc">{item.desc}</p>
    </div>
  );
}

function Experience() {
  return (
    <section className="section" id="xp" data-screen-label="Experience">
      <div className="wrap">
        <span className="eyebrow">03 / Özgeçmiş</span>
        <h2 className="section-title">Deneyim & <i>eğitim</i>.</h2>

        <div className="xp-grid">
          <div className="xp-col">
            <h3>Deneyim</h3>
            {EXPERIENCE.map((x, i) => <XpItem key={i} item={x}/>)}
          </div>
          <div className="xp-col">
            <h3>Eğitim</h3>
            {EDUCATION.map((x, i) => <XpItem key={i} item={x}/>)}
          </div>
        </div>
      </div>
    </section>
  );
}

window.Experience = Experience;
