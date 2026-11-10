import { useContext } from 'react';
import { ThemeContext } from '../../shared/theme/model/context/context';

/**
 * Токен в разных формах — на токенах самого проекта (tokens.css, тема ThemeContext): var(--x) у элемента,
 * короткое имя из темы, цепочка темы, неизвестное имя, токен в размере. Случай из step39-style-source (Tokens);
 * Tailwind-формы (text-accent, p-md) не перенесены — Tailwind в проекте нет.
 */
export default function ScreenTokens() {
  const theme = useContext(ThemeContext);
  const primary = theme?.sys.primary;
  return (
    <main style={{ padding: '32px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <h1>Tokens</h1>

      <h2 style={{ color: 'var(--sys-primary)' }}>Token var sys-primary</h2>

      <h3 style={{ color: primary }}>Short name primary</h3>

      <h3 style={{ color: theme?.sys.onSurface }}>Theme chain sys onSurface</h3>

      <h4 style={{ color: 'var(--legacy-ink)' }}>Unknown name legacy-ink</h4>

      <p style={{ fontSize: 'var(--typo-body-font-size)', lineHeight: 'var(--typo-body-line-height)' }}>Token font size typo-body</p>

      <div style={{ padding: '16px', backgroundColor: 'var(--ref-color-blue-500)', color: 'var(--sys-on-primary)' }}>Ref token fill blue-500</div>

      <p>Plain text for token write</p>
    </main>
  );
}
