const { useState: useStateT, useEffect: useEffectT } = React;

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "theme": "dark",
  "accent": "amber"
}/*EDITMODE-END*/;

function Tweaks() {
  const [visible, setVisible] = useStateT(false);
  const [theme, setTheme] = useStateT(() => localStorage.getItem('kkk-theme') || TWEAK_DEFAULTS.theme);
  const [accent, setAccent] = useStateT(() => localStorage.getItem('kkk-accent') || TWEAK_DEFAULTS.accent);

  useEffectT(() => {
    const onMsg = (e) => {
      if (!e.data || !e.data.type) return;
      if (e.data.type === '__activate_edit_mode') setVisible(true);
      if (e.data.type === '__deactivate_edit_mode') setVisible(false);
    };
    window.addEventListener('message', onMsg);
    window.parent.postMessage({ type: '__edit_mode_available' }, '*');
    return () => window.removeEventListener('message', onMsg);
  }, []);

  useEffectT(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem('kkk-theme', theme);
    window.parent.postMessage({ type: '__edit_mode_set_keys', edits: { theme } }, '*');
  }, [theme]);

  useEffectT(() => {
    document.documentElement.dataset.accent = accent;
    localStorage.setItem('kkk-accent', accent);
    window.parent.postMessage({ type: '__edit_mode_set_keys', edits: { accent } }, '*');
  }, [accent]);

  if (!visible) return null;

  const colors = ["amber", "lime", "cyan", "violet", "rose"];

  return (
    <div className="tweaks">
      <h4>Tweaks</h4>
      <div className="tweak-row">
        <label>Karanlık tema</label>
        <div className={"toggle" + (theme === 'dark' ? ' on' : '')} onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}></div>
      </div>
      <div className="tweak-row">
        <label>Vurgu rengi</label>
        <div className="swatches">
          {colors.map(c => (
            <div
              key={c}
              className={"swatch" + (accent === c ? ' active' : '')}
              data-c={c}
              onClick={() => setAccent(c)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

window.Tweaks = Tweaks;
