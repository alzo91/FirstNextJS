
import React from 'react';
import withPrivateRoute from '@/components/withPrivateRoute';
import Link from 'next/link';

const Dashboard = () => {
  return (
  <div>
    <p>This is a Dashboard page which is private.</p>
    <Link href="/Profile">Acesse o Profile</Link>
  </div>);
};

Dashboard.getInitialProps = async props => {
  console.info('##### Congratulations! You are authorized! ######', props);
  return {};
};

export default withPrivateRoute(Dashboard);
