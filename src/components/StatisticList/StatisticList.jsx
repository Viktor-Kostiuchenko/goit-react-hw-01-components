import React from 'react';
import PropTypes from 'prop-types';
import StatisticItem from './StatisticItem/StatisticItem';
import { randomColor } from '../../helpers/helpers';
import s from './StatisticList.module.css';

export default function StatisticList({ title, stats }) {
  return (
    <section className={s.statistics}>
      <h2 className={s.title}>{title}</h2>
      <ul className={s.statList}>
        {stats.map(stat => (
          <li
            key={stat.id}
            className={s.item}
            style={{ backgroundColor: randomColor() }}
          >
            <StatisticItem
              key={stat.id}
              label={stat.label}
              percentage={stat.percentage}
            ></StatisticItem>
          </li>
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
