import { ScopedThemeContext } from '@/shared/theme/model/scoped/scopedTheme';
import { useContext } from 'react';

/**
 * Токен TS-модуля через тему: цепочка theme.ink.accent, вложенный корень с чужим именем theme.shades.brand.main,
 * элемент без style (сюда «Add …» с токеном). Случай из token-value-ts и пробы S5д.
 */
export default function ScreenTsProvided() {
  const theme = useContext(ScopedThemeContext);
  return (
    <main style={{ padding: '32px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <h1>TS tokens via theme</h1>
      <div style={{ padding: '16px', backgroundColor: theme?.ink?.accent }}>Chain ink accent</div>
      <div style={{ padding: '16px', color: theme?.shades?.brand?.main }}>Nested shades brand main</div>
      <p>Element without style</p>
    </main>
  );
}
