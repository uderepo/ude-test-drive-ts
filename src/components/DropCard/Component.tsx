import type { ReactNode } from 'react';

/** Экземпляр style не принимает — свойству, добавленному экземпляру, некуда дойти. */
export function DropCard({ children }: { children?: ReactNode }) {
  return <div>{children}</div>;
}
