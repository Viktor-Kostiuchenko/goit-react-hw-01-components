import PropTypes from 'prop-types';
import FriendsItem from './FriendsItem';

export default function FriendsList({ friends }) {
  return (
    <section className="friends">
      <ul className="friend-list">
        {friends.map(friend => (
          <li key={friend.id} className="item">
            <FriendsItem
              avatar={friend.avatar}
              name={friend.name}
              isOnline={friend.isOnline}
            />
          </li>
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
