import MultiMain, { MultiSide } from '../../components/Component-multi/Component';

/** Соседние компоненты в файле экрана и экземпляры двух компонентов из одного файла. */
function Badge({ label }: { label: string }) {
  return <b style={{ padding: '2px 6px', backgroundColor: '#fde68a' }}>{label}</b>;
}

export default function ScreenMultiComponent() {
  return (
    <main style={{ padding: '32px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <h1>Multi component</h1>
      <Badge label="Local badge" />
      <MultiMain />
      <MultiSide />
    </main>
  );
}
