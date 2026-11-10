import { ScopedThemeContext } from '@/shared/theme/model/scoped/scopedTheme';
import { useContext } from 'react';

/** Короткое имя из деструктуризации темы: const { ink } = theme; color: ink.other. Случай из token-value-ts (Screen-home). */
export default function ScreenTsShort() {
  const theme = useContext(ScopedThemeContext);
  const ink = theme?.ink;
  return (
    <main style={{ padding: '32px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <h1>TS short name</h1>
      <div style={{ padding: '16px', color: ink?.other }}>Short ink other</div>
    </main>
  );
}
