import './card-box.css';
import type { ReactNode } from 'react';

export function NoStyle({ children }: { children?: ReactNode }) {
  return <div className="probe-card-box">{children}</div>;
}
