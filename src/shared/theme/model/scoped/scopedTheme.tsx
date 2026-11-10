import { createContext, type ReactNode } from 'react';
import { ink, shades } from '../../palette';

/**
 * Тема с провайдером: у контекста НЕТ значения по умолчанию (null) — значение есть только под ThemeScope.
 * Источник темы ветки case/ts-tokens (.ude/project.json → themeContext.importSpec). Экраны вне ThemeScope получают null:
 * запись токена туда редактор отказывает («Move this element inside the theme provider…»).
 */
export interface ScopedTheme {
  ink: typeof ink;
  shades: typeof shades;
}

export const scopedTheme: ScopedTheme = { ink, shades };

export const ScopedThemeContext = createContext<ScopedTheme | null>(null);

export function ThemeScope({ children }: { children?: ReactNode }) {
  return <ScopedThemeContext.Provider value={scopedTheme}>{children}</ScopedThemeContext.Provider>;
}
