import PropTypes from 'prop-types';
import { randomColor } from '../../../helpers/helpers';
import s from './StatisticItem.module.css';

export default function StatisticItem({ id, label, percentage }) {
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

StatisticItem.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};
