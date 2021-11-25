import PropTypes from 'prop-types';

export default function FriendsItem({ avatar, name, isOnline }) {
  return (
    <>
      <span className="status">{isOnline}</span>
      <img className="avatar" src={avatar} alt="User avatar" width="48" />
      <p className="name">{name}</p>
    </>
  );
}

FriendsItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
};
