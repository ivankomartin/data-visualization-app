import React from 'react';
import Main from '@/components/page/homepage/Main';
import Head from 'next/head';

const Home: React.FC = () => {
  return (
    <div>
      <Head>
        <title>Homepage | Data Visualization App</title>
      </Head>
      <Main />
    </div>
  );
};

export default Home;
