import React from 'react';
import { GetStaticProps } from 'next';
import Head from 'next/head';
import { Main } from '@/components/page/homepage/Main';
import fetchChartData from '@/utils/helper';
import { IDataPieChart, IdataAreaChart } from '@/interface/IChartData';

export const getStaticProps: GetStaticProps = async () => {
  const commonFilters = [
    `areaType=nation`,
    `areaName=england`
  ];

  const structureForPieChart = {
    date: "date",
    deathRate: "newDeaths28DaysByPublishDate"
  };

  const structureForAreaChart = {
    date: "date",
    confirmedRate: "newCasesByPublishDate"
  };

  const dataPieChart = await fetchChartData('https://api.coronavirus.data.gov.uk/v1/data', commonFilters, structureForPieChart);
  const dataAreaChart = await fetchChartData('https://api.coronavirus.data.gov.uk/v1/data', commonFilters, structureForAreaChart);

  return {
    props: {
      dataPieChart: dataPieChart.data,
      dataAreaChart: dataAreaChart.data,
    },
    revalidate: 60,
  };
};

interface HomeProps {
  dataPieChart: IDataPieChart[];
  dataAreaChart: IdataAreaChart[];
}

const Home: React.FC<HomeProps> = ({ dataPieChart, dataAreaChart }) => {
  return (
    <div>
      <Head>
        <title>Homepage | Data Visualization App</title>
      </Head>
      <Main dataPieChart={dataPieChart} dataAreaChart={dataAreaChart} />
    </div>
  );
};

export default Home;
