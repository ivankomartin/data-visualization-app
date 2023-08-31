import { GetStaticProps } from 'next';
import React from 'react';
import { Main } from '@/components/page/homepage/Main';
import Head from 'next/head';
import { IChartData } from '@/interface/IChartData';

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch('https://api.coronavirus.data.gov.uk/v1/data');
  const data = await res.json();

  return {
    props: {
      data:data.data
    },
  };
};

interface HomeProps {
  data: IChartData[]; 
}

const Home: React.FC<HomeProps> = ({ data }) => {

  return (
    <div>
      <Head>
        <title>Homepage | Data Visualization App</title>
      </Head>
      <Main data={data} />
    </div>
  );
};

export default Home;
