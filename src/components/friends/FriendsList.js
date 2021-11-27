import PropTypes from 'prop-types';
import FriendsItem from './FriendsItem';
import s from './FriendsList.module.css';

export default function FriendsList({ friends }) {
  return (
    <section className={s.friends}>
      <h2 className={s.title}>{'Friends'}</h2>
      <ul className={s.friendList}>
        {friends.map(friend => (
          <FriendsItem
            key={friend.id}
            avatar={friend.avatar}
            name={friend.name}
            isOnline={friend.isOnline}
          />
        ))}
      </ul>
    </section>
  );
}

FriendsList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ),
};
