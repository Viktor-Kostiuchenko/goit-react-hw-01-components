import PropTypes from 'prop-types';
import StatisticsItem from './StatisticsItem';

export default function StatisticsList({ title, stats }) {
  return (
    <section className="statistics">
      <h2 className="title">{title}</h2>
      <ul className="stat-list">
        {stats.map(stat => (
          <li key={stat.id} className="item">
            <StatisticsItem label={stat.label} percentage={stat.percentage} />
          </li>
        ))}
      </ul>
    </section>
  );
}

StatisticsList.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  ),
};
