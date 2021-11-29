import React from 'react';

import user from '../../data/user.json';
import statistics from '../../data/statistics.json';
import friends from '../../data/friends.json';
import transactions from '../../data/transactions.json';

import Section from '../Section/Section';
import Profile from '../Profile/Profile';
import StatisticList from '../StatisticList/StatisticList';
import FriendList from '../FriendList/FriendList';
import TransactionHistory from '../TransactionHistory/TransactionHistory';

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
        <FriendList friends={friends} />
        <StatisticList title="Upload stats" stats={statistics} />
      </Section>
    </>
  );
}
