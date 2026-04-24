const { useState, useEffect } = React;

function Nav({ active, onJump }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const links = [
    { id: "home", label: "Anasayfa" },
    { id: "projects", label: "Projeler" },
    { id: "certs", label: "Sertifikalar" },
    { id: "xp", label: "Özgeçmiş" },
    { id: "about", label: "Hakkımda" },
  ];

  return (
    <>
      <nav className="nav">
        <div className="nav-brand">
          <span className="dot"></span>
          KKK
        </div>
        <div className="nav-links">
          {links.map(l => (
            <a key={l.id} href={`#${l.id}`} className={"nav-link" + (active === l.id ? " active" : "")}>
              {l.label}
            </a>
          ))}
        </div>
        <a href="#contact" className="nav-cta">İletişim</a>
        <button className="nav-mobile-btn" onClick={() => setMobileOpen(o => !o)} aria-label="menu">
          {mobileOpen ? <Icon.X/> : <Icon.Menu/>}
        </button>
      </nav>

      <div className={"mobile-menu" + (mobileOpen ? " open" : "")}>
        {links.map(l => (
          <a key={l.id} href={`#${l.id}`} onClick={() => setMobileOpen(false)}>{l.label}</a>
        ))}
        <a href="#contact" onClick={() => setMobileOpen(false)}>İletişim →</a>
      </div>
    </>
  );
}

window.Nav = Nav;
