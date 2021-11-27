import PropTypes from 'prop-types';
import s from './StatisticsItem.module.css';

export default function StatisticsItem({ id, label, percentage }) {
  function randomColor() {
    let r = Math.floor(Math.random() * 256);
    let g = 100 + Math.floor(Math.random() * 256);
    let b = 50 + Math.floor(Math.random() * 256);
    let bgColor = 'rgb(' + r + ',' + g + ',' + b + ')';
    return bgColor;
  }
  return (
    <>
      <li
        key={id}
        className={s.item}
        style={{ backgroundColor: randomColor() }}
      >
        <span className={s.label}>{label}</span>
        <span className={s.percentage}>{percentage}%</span>
      </li>
    </>
  );
}

StatisticsItem.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};
