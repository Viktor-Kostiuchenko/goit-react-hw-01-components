import PropTypes from 'prop-types';
import TransactionItem from './TransactionItem';

export default function TransactionHistory({ items }) {
  return (
    <section className="transactions">
      <table className="transaction-history">
        <thead>
          <tr>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
          </tr>
        </thead>
        <tbody>
          {items.map(item => (
            <tr key={item.id} className="tr">
              <TransactionItem
                type={item.type}
                amount={item.amount}
                currency={item.currency}
              />
            </tr>
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
