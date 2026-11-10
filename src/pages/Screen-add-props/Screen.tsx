import './add-props.css';
import { PassCard } from '../../components/PassCard/Component';
import { DropCard } from '../../components/DropCard/Component';

const marginSpread = { margin: '3px' };
const borderSpread = { border: '2px solid rgb(0, 0, 200)' };

/**
 * «Add …» в панели: свойство задано классом / у элемента / и тем и другим / спредом / нигде — для margin,
 * border, radius, fill; раскладка от класса (flex / grid / inline-flex) и у элемента; типографика классом;
 * экземпляр, который передаёт style, и тот, что не передаёт. Случай из inspector-3.6b; Tailwind-классы
 * заменены обычными CSS-правилами с префиксом экрана.
 */
export default function ScreenAddProps() {
  return (
    <main style={{ padding: '24px' }}>
      <h1 className="add-rule-color">RuleColor</h1>
      <h2 className="add-no-color">NoColor</h2>
      {/* margin: класс / у элемента / оба / спред / нигде */}
      <p className="add-margin">MarginClass</p>
      <p style={{ margin: '8px' }}>MarginInline</p>
      <p className="add-margin" style={{ margin: '8px' }}>MarginBoth</p>
      <p style={{ ...marginSpread }}>MarginSpread</p>
      <p>MarginNone</p>
      <p style={{ marginTop: 4 }}>MarginTop4</p>
      <p style={{ margin: 8 }}>MarginNum8</p>
      {/* border */}
      <p className="add-border">BorderClass</p>
      <p style={{ border: '1px solid rgb(0, 128, 0)' }}>BorderInline</p>
      <p className="add-border" style={{ border: '1px solid rgb(0, 128, 0)' }}>BorderBoth</p>
      <p style={{ ...borderSpread }}>BorderSpread</p>
      <p>BorderNone</p>
      {/* corner radius */}
      <p className="add-radius">RadiusClass</p>
      <p style={{ borderRadius: '8px' }}>RadiusInline</p>
      <p>RadiusNone</p>
      {/* fill */}
      <p className="add-fill">FillClass</p>
      <p style={{ backgroundColor: 'rgb(255, 200, 0)' }}>FillInline</p>
      <p>FillNone</p>
      {/* layout */}
      <div className="add-flex">FlexClass</div>
      <div className="add-grid">GridClass</div>
      <div className="add-inline-flex">InlineFlexClass</div>
      <div>DivPlain</div>
      <div style={{ display: 'flex' }}>FlexNoDir</div>
      <p className="add-typo-lg">TypoClass</p>
      <div>BareTag</div>
      <PassCard>PassCard</PassCard>
      <DropCard>DropCard</DropCard>
    </main>
  );
}
