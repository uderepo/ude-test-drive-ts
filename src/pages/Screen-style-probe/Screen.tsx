import './probe.css';
import { NoStyle } from '../../components/NoStyle/Component';
import { PassStyle } from '../../components/PassStyle/Component';

/**
 * Проба источников стиля: только класс, у элемента поверх класса, !important поверх элемента, класс с условием
 * ширины, обычное правило CSS, раскладка от класса, экземпляр передаёт style, экземпляр без style, скрытие классом
 * и атрибутом. Случай из operator-check-0511 (Screen-probe); классы с префиксом экрана.
 */
export default function ScreenStyleProbe() {
  return (
    <div style={{ width: '100%' }}>
      <p className="probe-pad" style={{ color: '#113' }}>1 class only</p>
      <p className="probe-pad" style={{ padding: '3px', color: 'blue' }}>2 inline over class</p>
      <p className="probe-pad-important" style={{ padding: '3px' }}>3 important over inline</p>
      <p className="probe-pad-wide">4 width condition</p>
      <p className="probe-plain-card" style={{ width: '100%' }}>5 plain css rule</p>
      <div className="probe-row-class">
        <span>6 layout from class</span>
      </div>
      <PassStyle style={{ backgroundColor: '#D9D9D9' }}>7 instance passes style</PassStyle>
      <NoStyle>8 instance without style</NoStyle>
      <p className="probe-hidden-class">9 hidden by class</p>
      <p hidden>10 hidden by attribute</p>
    </div>
  );
}
