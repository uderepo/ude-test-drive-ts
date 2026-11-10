/** Компонентный файл с двумя компонентами: экспорт по умолчанию и именной (открываются из Components по отдельности). */
export default function MultiMain() {
  return (
    <section style={{ padding: '16px', border: '1px solid #cbd5e1' }}>
      <h2>Multi main</h2>
    </section>
  );
}

export function MultiSide() {
  return (
    <aside style={{ padding: '12px', backgroundColor: '#f1f5f9' }}>
      <p>Multi side</p>
    </aside>
  );
}
