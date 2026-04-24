const { useEffect: useEffectA, useState: useStateA } = React;

function ScrollProgress() {
  const [p, setP] = useStateA(0);
  useEffectA(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const max = h.scrollHeight - h.clientHeight;
      setP(max > 0 ? (h.scrollTop / max) * 100 : 0);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return <div className="scroll-progress"><span style={{ '--p': p + '%' }}/></div>;
}

function useActiveSection() {
  const [active, setActive] = useStateA('home');
  useEffectA(() => {
    const ids = ['home', 'projects', 'certs', 'xp', 'about', 'contact'];
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) setActive(e.target.id);
      });
    }, { rootMargin: '-40% 0px -55% 0px' });
    ids.forEach(id => {
      const el = document.getElementById(id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);
  return active;
}

function useReveal() {
  useEffectA(() => {
    const els = document.querySelectorAll('.reveal');
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('in');
          obs.unobserve(e.target);
        }
      });
    }, { threshold: 0.08 });
    els.forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);
}

function App() {
  const active = useActiveSection();
  useReveal();

  return (
    <>
      <ScrollProgress/>
      <Nav active={active}/>
      <Hero/>
      <Projects/>
      <Certs/>
      <Experience/>
      <About/>
      <Contact/>
      <Tweaks/>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);
