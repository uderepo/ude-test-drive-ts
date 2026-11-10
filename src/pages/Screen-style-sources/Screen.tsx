import styles from './Screen.module.css';
import './style-sources.css';

/**
 * Откуда значение стиля: правило класса, у элемента, нигде, класс + у элемента, !important над элементом,
 * CSS-модуль, правило из двух классов, наследование от родителя, значение по умолчанию; span в обычном и во flex-блоке.
 * Случай из step39-style-source (Sources); классы Tailwind заменены обычными CSS-правилами — Tailwind в проекте нет.
 */
export default function ScreenStyleSources() {
  return (
    <main style={{ padding: '32px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <h1>Style sources</h1>

      <div className="src-card">Class rule card</div>

      <div style={{ padding: '24px', backgroundColor: '#fef3c7' }}>Inline padding 24</div>

      <div>Nothing set block</div>

      <div className="src-pad" style={{ padding: '10px' }}>Class pad 16 and inline 10</div>

      <div className="src-important" style={{ padding: '30px' }}>Important pad 8 over inline 30</div>

      <div className={styles.card}>CSS module card</div>

      <div className="src-rule src-boost">Two-class CSS rule</div>

      <div style={{ color: '#065f46' }}>
        <p>Inherited green text</p>
      </div>

      <p>Default text</p>

      <section>
        <span>Span in plain block</span>
      </section>

      <div className="src-flex">
        <span>Span in flex</span>
      </div>
    </main>
  );
}
