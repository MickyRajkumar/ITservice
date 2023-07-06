import { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
const Custom404: NextPage = () => {
  return (
    <>
      <Head>
        <title>404 Not Found - NextJs</title>

        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="description" />
        <meta name="author" content="Micky Rajkumar" />
      </Head>

      <main className="flex flex-1 items-center justify-center">
        <div className="flex flex-1 h-screen flex-col items-center justify-center">
          <div>
            <Image src="/giphy1.gif" alt="404" width={300} height={300}></Image>
          </div>
          <h1 className="font-bold text-2xl md:text-5xl py-6">
            404 - Page Not Found
          </h1>
          <Link rel="stylesheet" href="/">
            <button className="py-1 transition-all mx-auto rounded-lg px-4 bg-blue-600 hover:bg-[blue] font-semibold text-white">
              <i className="fa-solid fa-chevron-left"></i>
              &nbsp; Back to Home
            </button>
          </Link>
        </div>
      </main>
    </>
  );
};

export default Custom404;
