import Profile from './components/user/Profile';
import StatisticsList from './components/statistics/StatisticsList';
import user from './data/user.json';
import statistics from './data/statistics.json';

export default function App() {
  const {
    username,
    tag,
    location,
    avatar,
    stats: { followers, views, likes },
  } = user;
  return (
    <>
      <Profile
        username={username}
        tag={tag}
        location={location}
        avatar={avatar}
        followers={followers}
        views={views}
        likes={likes}
      />
      <StatisticsList title="Upload stats" stats={statistics} />
    </>
  );
}
