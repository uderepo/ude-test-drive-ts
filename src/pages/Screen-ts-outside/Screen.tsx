import { ScopedThemeContext } from '@/shared/theme/model/scoped/scopedTheme';
import { useContext } from 'react';

/**
 * Экран ВНЕ провайдера темы: адрес в routes.tsx не обёрнут ThemeScope, контекст без значения по умолчанию даёт null.
 * Запись токена темы сюда — отказ «Move this element inside the theme provider in the code, or pick a value instead of a token.»
 */
export default function ScreenTsOutside() {
  const theme = useContext(ScopedThemeContext);
  return (
    <main style={{ padding: '32px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <h1>TS outside provider</h1>
      <div style={{ padding: '16px', color: theme?.ink?.accent }}>Outside chain ink accent</div>
      <p>Outside element without style</p>
    </main>
  );
}
