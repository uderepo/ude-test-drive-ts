import './unreadable.css';

const preset = { padding: '14px', backgroundColor: '#e0f2fe' };
const boxProps = { className: 'unr-box', title: 'from props' };
const styles = { card: { padding: '12px', border: '1px solid #94a3b8' } };

/** Классы, собранные функцией — как у clsx, без пакета: своя маленькая функция в файле экрана. */
function cx(...parts: Array<string | false | null | undefined>): string {
  return parts.filter(Boolean).join(' ');
}

/**
 * Формы, которые редактор не читает как значение: выражение, спред style={{...x}}, спред {...props},
 * класс функцией, стиль из объекта. Случай из step39-style-source (Unreadable); clsx и Tailwind
 * заменены своей функцией и обычными CSS-классами — пакетов в проекте нет.
 */
export default function ScreenUnreadable() {
  const items = ['a', 'b', 'c'];
  const highlighted = items.length > 2;
  const accentColor = highlighted ? '#b91c1c' : '#1d4ed8';
  const gap = 8;
  return (
    <main style={{ padding: '32px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <h1>Unreadable forms</h1>

      <h2 style={{ color: accentColor }}>Expression color</h2>

      <div style={{ padding: gap * 2, backgroundColor: '#fafafa' }}>Expression padding</div>

      <div style={{ ...preset }}>Spread style preset</div>

      <div {...boxProps}>Spread props box</div>

      <div className={cx('unr-pad', highlighted && 'unr-highlight')}>Classes from a function</div>

      <div style={styles.card}>Style from object</div>
    </main>
  );
}
