import React from 'react';
import Head from 'next/head';
import FeatureCard from '../../components/FeatureCard';
import type { NextPage } from 'next';
import { ContactData } from '../../data';
import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';

const ContactUs: NextPage = () => {
  return (
    <>
      <Head>
        <title>NextJs | Contact</title>
        <meta
          name="description"
          content="getAmind are dedicated to revolutionizing the way businesses manage their customer relationships. We understand that customer satisfaction and loyalty are crucial factors in the success of any organization. That's why we provide cutting-edge CRM solutions tailored to meet the unique needs of our clients"
        />
      </Head>
      <div>
        <Header />
        <div className=" mx-auto bg-white dark:bg-gray-900">
          <div className="contactUsBack flex justify-center md:pt-44  text-black  3xl:pt-56  h-[85vh]">
            <div className="w-[30%]">
              <div>
                <h1 className="text-3xl font-bold text-center mb-8">
                  Get in touch
                </h1>
              </div>
              <div className="text-xl">
                <p>
                  Whether you’re curious about features, a free trial, or even
                  press—we’re ready to answer any and all questions.
                </p>
              </div>
            </div>
          </div>
          <div className="relative w-[80%] mx-auto">
            <div className="grid translate-y-[-150px] h-fit text-black grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {ContactData.map(item => {
                return (
                  <FeatureCard
                    key={item.id}
                    title={item.title}
                    description={item.description}
                    phone={item?.phone}
                    button={item?.button}
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

export default ContactUs;
