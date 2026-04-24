const { useState: useStateP, useMemo: useMemoP } = React;

function ProjectCard({ p }) {
  const onMove = (e) => {
    const r = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty('--mx', `${e.clientX - r.left}px`);
    e.currentTarget.style.setProperty('--my', `${e.clientY - r.top}px`);
  };

  return (
    <a
      href={p.repo}
      target="_blank"
      rel="noopener"
      className={"proj-card" + (p.featured ? " feat" : "")}
      onMouseMove={onMove}
    >
      <div className="top">
        <div className="lang-chip">
          <span className="bullet" style={{ background: p.langColor }}></span>
          {p.lang}
        </div>
        <div className="arrow">
          <Icon.Arrow style={{ width: 18, height: 18 }}/>
        </div>
      </div>
      <h3>{p.title}</h3>
      <p className="desc">{p.desc}</p>
      <div className="tags">
        {p.tags.map(t => <span key={t} className="tag">{t}</span>)}
      </div>

      {p.featured && (
        <svg className="graphic" viewBox="0 0 320 260" fill="none" aria-hidden="true">
          <g stroke="var(--accent)" strokeOpacity="0.5" strokeWidth="1">
            <path d="M10 200 Q 60 80, 110 140 T 210 100 T 310 60" fill="none"/>
            <path d="M10 220 Q 60 180, 110 200 T 210 170 T 310 140" fill="none" strokeOpacity="0.25"/>
          </g>
          <g fill="var(--accent)">
            <circle cx="60" cy="120" r="3"/>
            <circle cx="110" cy="140" r="3"/>
            <circle cx="160" cy="110" r="4"/>
            <circle cx="210" cy="100" r="3"/>
            <circle cx="260" cy="80" r="3"/>
            <circle cx="160" cy="110" r="10" fillOpacity="0.2"/>
          </g>
          <g stroke="var(--line)" strokeWidth="1">
            <line x1="0" y1="60" x2="320" y2="60" strokeDasharray="2 4"/>
            <line x1="0" y1="140" x2="320" y2="140" strokeDasharray="2 4"/>
            <line x1="0" y1="220" x2="320" y2="220" strokeDasharray="2 4"/>
          </g>
        </svg>
      )}
    </a>
  );
}

function Projects() {
  const cats = [
    { id: "all", label: "Hepsi" },
    { id: "ai", label: "AI / ML" },
    { id: "yazilim", label: "Yazılım" },
  ];
  const [cat, setCat] = useStateP("all");

  const filtered = useMemoP(() => {
    if (cat === "all") return PROJECTS;
    return PROJECTS.filter(p => p.category === cat);
  }, [cat]);

  return (
    <section className="section" id="projects" data-screen-label="Projects">
      <div className="wrap">
        <div className="projects-head">
          <div>
            <span className="eyebrow">01 / Projeler</span>
            <h2 className="section-title">GitHub'da neler <i>inşa</i> ediyorum</h2>
          </div>
          <div className="right">
            <span>14 public repo</span>
            <a href={PROFILE.github} target="_blank">
              github.com/AnLaKiii <Icon.Arrow style={{ width: 12, height: 12 }}/>
            </a>
          </div>
        </div>

        <div className="proj-filter">
          {cats.map(c => (
            <button
              key={c.id}
              className={cat === c.id ? "active" : ""}
              onClick={() => setCat(c.id)}
            >
              {c.label}
              <span style={{ marginLeft: 6, opacity: 0.6, fontSize: 11 }}>
                {c.id === "all" ? PROJECTS.length : PROJECTS.filter(p => p.category === c.id).length}
              </span>
            </button>
          ))}
        </div>

        <div className="proj-grid">
          {filtered.map(p => <ProjectCard key={p.id} p={p}/>)}
        </div>
      </div>
    </section>
  );
}

window.Projects = Projects;
