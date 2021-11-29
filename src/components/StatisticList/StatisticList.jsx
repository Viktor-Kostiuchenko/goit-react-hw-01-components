import PropTypes from 'prop-types';
import StatisticItem from './StatisticItem/StatisticItem';
import s from './StatisticList.module.css';

export default function StatisticList({ title, stats }) {
  return (
    <section className={s.statistics}>
      <h2 className={s.title}>{title}</h2>
      <ul className={s.statList}>
        {stats.map(stat => (
          <StatisticItem
            key={stat.id}
            label={stat.label}
            percentage={stat.percentage}
          />
        ))}
      </ul>
    </section>
  );
}

StatisticList.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  ),
};
