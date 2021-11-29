import PropTypes from 'prop-types';
import s from './TransactionHistory.module.css';
import TransactionItem from './TransactionItem/TransactionItem';

export default function TransactionHistory({ items }) {
  return (
    <section className="transactions">
      <h2 className={s.title}>{'Transactions'}</h2>
      <table className="transaction-history">
        <thead className={s.thead}>
          <tr>
            <th className={s.th}>Type</th>
            <th className={s.th}>Amount</th>
            <th className={s.th}>Currency</th>
          </tr>
        </thead>
        <tbody>
          {items.map(item => (
            <TransactionItem
              key={item.id}
              type={item.type}
              amount={item.amount}
              currency={item.currency}
            />
          ))}
        </tbody>
      </table>
    </section>
  );
}

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  ),
};
