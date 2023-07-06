import React from 'react';
import Head from 'next/head';
import FeatureCard from '../components/FeatureCard';
import type { NextPage } from 'next';
import { Features } from '../data';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';

const FeaturePage: NextPage = () => {
  return (
    <>
      <Head>
        <title>NextJs</title>
        <meta
          name="description"
          content="NextJS starter template using TypeScript and Tailwind CSS, and includes VSCode + Prettier + ESLint. created By  Micky Rajkumar"
        />
      </Head>
      <div>
        <Header />
        <div className="w-[90%] mx-auto">
          <div className="featureback flex justify-center md:pt-28  3xl:pt-56  h-[85vh]">
            <div className="w-[60%]">
              <div>
                <h1 className="text-3xl font-bold text-center mb-8">
                  CRM Features
                </h1>
              </div>
              <div className="text-xl">
                <p>
                  Exceptional customer service is at the heart of every
                  successful business. Our CRM solution is equipped with
                  features that enhance your customer support, enabling you to
                  manage tickets, track customer issues, and provide timely
                  resolutions. By centralizing customer interactions, our CRM
                  ensures that no customer is overlooked, fostering loyalty and
                  satisfaction. Deliver exceptional support experiences that set
                  your business apart with our CRM solution.
                </p>
              </div>
            </div>
          </div>
          <div className="relative w-[80%] mb-10 min-h-[50vh] mx-auto">
            <div className="grid absolute top-[-200px] grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {Features.map(item => {
                return (
                  <FeatureCard
                    key={item.id}
                    title={item.title}
                    description={item.description}
                  />
                );
              })}
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default FeaturePage;
