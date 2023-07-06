import { FC } from 'react';
export const Hero: FC = () => {
  return (
    <>
      <section className="bg-white dark:bg-gray-900">
        <div className="grid max-w-screen-xl px-4 pt-20 pb-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 lg:pt-28">
          <div className="mr-auto place-self-center lg:col-span-7">
            <h1 className="max-w-2xl mb-4 text-3xl font-extrabold leading-none tracking-tight md:text-3xl xl:text-5xl dark:text-white">
              Unleash the Power of <br />
              Content Management <br /> Building digital
            </h1>
            <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
              {`Don't let data loss bring your business to a halt. Experience
              peace of mind with our reliable data backup and recovery services,
              keeping your information safe and accessible.`}
            </p>
          </div>
          <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
            <img src="./heros.jpg" alt="hero " />
          </div>
        </div>
      </section>
    </>
  );
};
