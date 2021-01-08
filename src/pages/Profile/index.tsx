
import React from 'react';
import withPrivateRoute from '@/components/withPrivateRoute';
import { useRouter } from 'next/router';

const Profile = () => {
  const router = useRouter()
  return (
  <div>
    <p>This is a profile file...</p>
    <button onClick={e => {
      e.preventDefault()
      router.back();
    }}>
      Voltar...
    </button>
  </div>
  );
};

Profile.getInitialProps = async props => {
  console.info('##### Congratulations! You are authorized! ######', props);
  return {};
};

export default withPrivateRoute(Profile);
