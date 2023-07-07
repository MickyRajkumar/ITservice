import React from 'react';
import Head from 'next/head';
import type { NextPage } from 'next';
import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';

const AboutUs: NextPage = () => {
  return (
    <>
      <Head>
        <title>NextJs | About Us</title>
        <meta
          name="description"
          content="getAmind are dedicated to revolutionizing the way businesses manage their customer relationships. We understand that customer satisfaction and loyalty are crucial factors in the success of any organization. That's why we provide cutting-edge CRM solutions tailored to meet the unique needs of our clients"
        />
      </Head>
      <div>
        <Header />
        <div className="bg-white dark:bg-gray-800 font-[inter]">
          <div className="w-[90%] md:w-full  mx-auto">
            <div className="aboutUsBack pt-16 flex justify-center items-center h-[100vh]">
              <div className="w-[60%] text-black intro px-10  py-20">
                <div className="w-fit mx-auto mb-8  text-orange-500">
                  <h1 className="text-5xl font-bold mb-0 mx-2 text-center">
                    Welcome to getAmind
                  </h1>
                  <div className="bg-blue-500 h-1"></div>
                </div>
                <div className="text-2xl text-white">
                  {/* <div className="text-2xl "> */}
                  <p className="indent-5">
                    With years of experience in the industry, we have developed
                    a deep understanding of the challenges businesses face when
                    it comes to effectively managing customer interactions,
                    streamlining sales processes, and fostering long-term
                    customer relationships. Our team of experts combines their
                    extensive knowledge with the latest technological
                    advancements to deliver comprehensive CRM solutions that
                    drive growth and maximize efficiency.
                  </p>
                </div>
              </div>
            </div>
            <section className="bg-gray-50 py-20 dark:bg-gray-900">
              <div className="max-w-screen-xl cardHover flex w-[80%] gap-10 p-9 mx-auto">
                <div className="my-10">
                  <img src="./mission.jpg" alt="mission" />
                </div>
                <div className="mx-auto w-[80%]">
                  <h1 className="text-4xl text-center mb-8 font-bold">
                    -Mission-
                  </h1>
                  <p className="indent-10 text-xl">
                    Our mission is to empower businesses of all sizes to build
                    meaningful and profitable relationships with their
                    customers. We believe that a well-implemented CRM system can
                    be a game-changer, helping organizations to streamline their
                    operations, improve customer satisfaction, and ultimately
                    boost their bottom line. We are committed to providing
                    top-notch CRM services that enable our clients to achieve
                    their business goals and stay ahead in today&apos;s
                    competitive landscape.
                  </p>
                </div>
              </div>
            </section>
            <section className="bg-gray-50 py-20 dark:bg-gray-800">
              <div className="max-w-screen-xl flex w-[80%] gap-10 p-9 mx-auto">
                <div className="mx-auto w-[100%]">
                  <div className="pb-20">
                    <h1 className="text-4xl font-bold text-center mb-10">
                      - Our Services -
                    </h1>
                    <p className="text-xl text-center">
                      We offer a wide range of CRM services that are designed to
                      address the diverse needs of businesses across various
                      industries. Our comprehensive suite of services includes
                    </p>
                  </div>
                  <ul className="gap-4 grid grid-cols-3 text-xl">
                    <li className="px-8 py-14 liHover rounded-lg">
                      <h1 className="font-bold text-center mb-5 text-2xl text-blue-500">
                        Implementation
                      </h1>
                      We specialize in seamless CRM implementation, ensuring
                      that our clients&apos; systems are set up correctly from
                      the start. Our experts work closely with your team to
                      understand your business processes and configure the CRM
                      system to align with your specific requirements.
                    </li>
                    <li className="px-8 py-14 liHover rounded-lg">
                      <h1 className="font-bold text-center mb-5 text-2xl text-blue-500">
                        Customization
                      </h1>
                      We understand that every business is unique. That&apos;s
                      why we offer CRM customization services to tailor the CRM
                      solution to your specific needs. Whether it&apos;s
                      customizing workflows, creating personalized dashboards,
                      or integrating third-party applications, we ensure that
                      the CRM system works perfectly for your organization.
                    </li>
                    <li className="px-8 py-14 liHover rounded-lg">
                      <h1 className="font-bold text-center mb-5 text-2xl text-blue-500">
                        Data Migration and Integration
                      </h1>
                      Transitioning to a new CRM system can be daunting,
                      especially when it comes to migrating and integrating
                      existing data. Our team of experts has extensive
                      experience in data migration and integration, ensuring a
                      smooth and secure transfer of your valuable customer data
                      into the new CRM system.
                    </li>
                    <li className="px-8 py-14 liHover rounded-lg">
                      <h1 className="font-bold text-center mb-5 text-2xl text-blue-500">
                        Training and Support
                      </h1>
                      We believe that successful CRM implementation goes beyond
                      just technology. We provide comprehensive training and
                      ongoing support to ensure that your team is fully equipped
                      to leverage the CRM system effectively. Our dedicated
                      support team is available to address any questions or
                      concerns that may arise, helping you make the most out of
                      your CRM investment.
                    </li>
                    <li className="px-8 py-14 liHover rounded-lg">
                      <h1 className="font-bold text-center mb-5 text-2xl text-blue-500">
                        Maintenance
                      </h1>
                      Our commitment to your success extends beyond
                      implementation. We provide ongoing support and maintenance
                      services to ensure the smooth operation of your CRM
                      system. Our dedicated support team is available to address
                      any technical issues, answer questions, and provide
                      guidance whenever you need it. We also proactively monitor
                      the system to identify and resolve any potential issues
                      before they impact your business.
                    </li>
                    <li className="px-8 py-14 liHover rounded-lg">
                      <h1 className="font-bold text-center mb-5 text-2xl text-blue-500">
                        Upgrades and Enhancements
                      </h1>
                      As technology evolves, so should your CRM system. We help
                      you stay up to date with the latest CRM advancements by
                      performing system upgrades and implementing new features
                      and enhancements. Our team ensures a seamless transition
                      during upgrades, minimizing disruptions to your daily
                      operations.
                    </li>
                  </ul>
                </div>
              </div>
            </section>
            <section className="bg-gray-50 py-20 dark:bg-gray-900">
              <div className="max-w-screen-xl flex w-[80%] gap-10 p-9 mx-auto">
                <div className="mx-auto w-[100%]">
                  <h1 className="text-4xl font-bold text-center mb-10">
                    - Why Choose Us -
                  </h1>
                  <ul className="gap-4 grid grid-cols-3 text-xl">
                    <li className="px-8 py-14 liHover rounded-lg">
                      <h1 className="font-bold text-center mb-5 text-2xl text-blue-500">
                        Expertise
                      </h1>
                      Our team consists of highly skilled professionals with
                      extensive experience in CRM implementation and management.
                      We stay up-to-date with the latest trends and technologies
                      in the industry to provide you with the best solutions.
                    </li>
                    <li className="px-8 py-14 liHover rounded-lg">
                      <h1 className="font-bold text-center mb-5 text-2xl text-blue-500">
                        Customization
                      </h1>
                      We understand that every business has unique requirements.
                      Our CRM solutions are highly customizable to ensure a
                      perfect fit for your organization.
                    </li>
                    <li className="px-8 py-14 liHover rounded-lg">
                      <h1 className="font-bold text-center mb-5 text-2xl text-blue-500">
                        Customer-Centric Approach
                      </h1>
                      At getAmind, we prioritize your success. We take the time
                      to understand your business goals and challenges,
                      providing personalized solutions that align with your
                      objectives.
                    </li>
                    <li className="px-8 py-14 liHover rounded-lg">
                      <h1 className="font-bold text-center mb-5 text-2xl text-blue-500">
                        Seamless Integration
                      </h1>
                      We have expertise in integrating CRM systems with various
                      other business applications, ensuring a seamless flow of
                      data across your organization.
                    </li>
                    <li className="px-8 py-14 liHover rounded-lg">
                      <h1 className="font-bold text-center mb-5 text-2xl text-blue-500">
                        Ongoing Support
                      </h1>
                      Our commitment to your success doesn&apos;t end with
                      implementation. We offer continuous support and training
                      to help you maximize the value of your CRM investment.
                    </li>
                  </ul>
                </div>
              </div>
            </section>
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default AboutUs;
