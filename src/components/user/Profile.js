import PropTypes from 'prop-types';
import s from './Profile.module.css';

export default function Profile({
  username,
  tag,
  location,
  avatar,
  followers,
  views,
  likes,
}) {
  return (
    <section className={s.profile}>
      <h1 className={s.user}>{'User'}</h1>
      <img src={avatar} alt={username} className={s.avatar} width="300" />
      <div className={s.description}>
        <p className={s.name}>{username}</p>
        <p className={s.tag}>@{tag}</p>
        <p className={s.location}>{location}</p>
        <ul className={s.stats}>
          <li className={s.item}>
            <span className="label">Views</span>
            <span className={s.quantity}>{views}</span>
          </li>
          <li className={s.item}>
            <span className="label">Followers</span>
            <span className={s.quantity}>{followers}</span>
          </li>
          <li className={s.item}>
            <span className="label">Likes</span>
            <span className={s.quantity}>{likes}</span>
          </li>
        </ul>
      </div>
    </section>
  );
}

Profile.propTypes = {
  avatar: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  followers: PropTypes.number.isRequired,
  views: PropTypes.number.isRequired,
  likes: PropTypes.number.isRequired,
};
