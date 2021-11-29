import React from 'react';
import PropTypes from 'prop-types';
import FriendItem from './FriendItem/FriendItem';
import s from './FriendList.module.css';

export default function FriendList({ friends }) {
  return (
    <section className={s.friends}>
      <h2 className={s.title}>{'Friends'}</h2>
      <ul className={s.friendList}>
        {friends.map(friend => (
          <li key={friend.id} className={s.item}>
            <FriendItem
              avatar={friend.avatar}
              name={friend.name}
              isOnline={friend.isOnline}
            ></FriendItem>
          </li>
        ))}
      </ul>
    </section>
  );
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ),
};
