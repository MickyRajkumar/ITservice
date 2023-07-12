import type { GetServerSideProps, NextPage } from 'next';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { AxiosResponse } from 'axios';
import { IUserData, IError, IResponse, IUsersData } from '../types';
import { fetchUsers } from '../../http';
import { Company } from '../components/Company';
import { Hero } from '../components/Hero';
import { Trust } from '../components/Trust';
import { Quote } from '../components/Quote';
import { Pricing } from '../components/Pricing';
import { PrismaClient } from '@prisma/client';
import createUser from './api/users/create';

const client = new PrismaClient();

interface IPropTypes {
  users: {
    items: IUserData[];
  };
  posts: {
    items: IUsersData[];
  };
  error: {
    items: IError;
  };
}

const Home: NextPage<IPropTypes> = ({ users, posts }) => {
  const data = users?.items;
  // const err = error.items?.error;
  const [userss, setUsers] = useState(null);

  useEffect(() => {
    fetch('/api/users/users')
      .then(res => {
        return res.json();
      })
      .then(data => {
        setUsers(data);
      })
      .catch(error => {
        console.error('Error creating user:', error.message);
      });

    fetch('/api/users/create', {
      method: 'post',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },

      //make sure to serialize your JSON body
      body: JSON.stringify({
        name: 'pathou',
        email: 'myPassweaworad@gmail.com'
      })
    }).then(response => {
      console.log(response.status);
    });
  }, []);

  // if (err) {
  //   return (
  //     <div className="flex justify-center items-center h-[100vh] w-full">
  //       <h1 className="text-8xl font-bold">Something went Wrong</h1>
  //       <p className="text-5xl font-bold">Try again Later.........</p>
  //     </div>
  //   );
  // }

  return (
    <>
      <Head>
        <title>NextJs</title>
        <meta
          name="description"
          content="getAmind are dedicated to revolutionizing the way businesses manage their customer relationships. We understand that customer satisfaction and loyalty are crucial factors in the success of any organization. That's why we provide cutting-edge CRM solutions tailored to meet the unique needs of our clients"
        />
      </Head>

      <main>
        <Header />
        <Hero />
        <Company data={data} />
        <Trust />
        <Quote />
        <Pricing />
        <Footer />
      </main>
    </>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps = async () => {
  try {
    const posts = await client.users.findMany();

    const {
      data: users
    }: AxiosResponse<IResponse<IUserData[]>, any> = await fetchUsers();

    const error: Partial<IError> = {
      error: false
    };

    return {
      props: {
        users: {
          items: users
        },
        posts: {
          items: posts
        },
        error: {
          items: error
        }
      }
    };
  } catch (e) {
    console.log('+++++', e);
    const error: Partial<IError> = {
      error: true
    };
    return {
      props: {
        error: {
          items: error
        }
      }
    };
  }
};
