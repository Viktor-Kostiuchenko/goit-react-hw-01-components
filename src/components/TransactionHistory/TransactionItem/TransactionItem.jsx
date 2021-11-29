import PropTypes from 'prop-types';
import s from './TransactionItem.module.css';

export default function TransactionItem({ id, type, amount, currency }) {
  return (
    <>
      <tr key={id} className={s.tr}>
        <td>{type}</td>
        <td>{amount}</td>
        <td>{currency}</td>
      </tr>
    </>
  );
}

TransactionItem.propTypes = {
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
};
