import './focus.css';

/**
 * Значения только при состоянии: карточка меняет заливку при наведении, кнопка — обводку при фокусе.
 * Случай из step39-style-source (no-widths/Plain); классы с префиксом экрана.
 */
export default function ScreenFocus() {
  return (
    <main style={{ padding: '32px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <h1>Hover and focus</h1>
      <div className="focus-card">Hover card</div>
      <button className="focus-action">Focus action</button>
    </main>
  );
}
