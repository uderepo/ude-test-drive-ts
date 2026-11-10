import type { CSSProperties, ReactNode } from 'react';

/** Экземпляр передаёт style в разметку — свойства, добавленные экземпляру, видны. */
export function PassCard({ style, children }: { style?: CSSProperties; children?: ReactNode }) {
  return <div style={style}>{children}</div>;
}
