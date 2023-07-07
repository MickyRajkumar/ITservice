import React from 'react';
import Head from 'next/head';
import type { NextPage } from 'next';
import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';

const MarketPlace: NextPage = () => {
  return (
    <>
      <Head>
        <title>NextJs | Market-Places</title>
        <meta
          name="description"
          content="getAmind are dedicated to revolutionizing the way businesses manage their customer relationships. We understand that customer satisfaction and loyalty are crucial factors in the success of any organization. That's why we provide cutting-edge CRM solutions tailored to meet the unique needs of our clients"
        />
      </Head>
      <div>
        <Header />
        <div className=" mx-auto bg-white dark:bg-gray-900">
          <div className="flex justify-center items-center  h-[90vh]">
            <h1 className="text-8xl">Comming Soon</h1>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default MarketPlace;
