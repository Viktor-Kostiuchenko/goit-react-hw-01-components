import PropTypes from 'prop-types';
import s from './FriendItem.module.css';

export default function FriendItem({ id, avatar, name, isOnline }) {
  return (
    <>
      <li key={id} className={s.item}>
        <span
          className={s.status}
          style={{ backgroundColor: isOnline ? 'green' : 'red' }}
        >
          {isOnline ? 'on' : 'off'}
        </span>
        <img className={s.avatar} src={avatar} alt="User avatar" width="48" />
        <p className={s.name}>{name}</p>
      </li>
    </>
  );
}

FriendItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
};
