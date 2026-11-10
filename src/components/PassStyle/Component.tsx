import './card-box.css';
import type { CSSProperties, ReactNode } from 'react';

export function PassStyle({ style, children }: { style?: CSSProperties; children?: ReactNode }) {
  return (
    <div className="probe-card-box" style={style}>
      {children}
    </div>
  );
}
