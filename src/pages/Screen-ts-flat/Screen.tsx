import { brandPrimary, brandSurface, radiusCard } from '@/shared/theme/flatTokens';

/** Чужая форма токенов: плоские константы модуля, прямой импорт без темы и провайдера. */
export default function ScreenTsFlat() {
  return (
    <main style={{ padding: '32px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <h1>TS flat tokens</h1>
      <div style={{ padding: '16px', color: brandPrimary, backgroundColor: brandSurface, borderRadius: radiusCard }}>Flat brand tokens</div>
    </main>
  );
}
