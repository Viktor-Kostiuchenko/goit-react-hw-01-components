import Section from './components/section/Section';
import Profile from './components/user/Profile';
import StatisticsList from './components/statistics/StatisticsList';
import FriendsList from './components/friends/FriendsList';
import TransactionHistory from './components/transactions/TransactionHistory';
import user from './data/user.json';
import statistics from './data/statistics.json';
import friends from './data/friends.json';
import transactions from './data/transactions.json';

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
      <Section>
        <Profile
          username={username}
          tag={tag}
          location={location}
          avatar={avatar}
          followers={followers}
          views={views}
          likes={likes}
        />
        <TransactionHistory items={transactions} />
        <FriendsList friends={friends} />
        <StatisticsList title="Upload stats" stats={statistics} />
      </Section>
    </>
  );
}
