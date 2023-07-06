import { FC } from 'react';
import { IUserData } from '../types';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';

interface IPropTypes {
  data: IUserData[];
}

export const Company: FC<IPropTypes> = ({ data }) => {
  return (
    <>
      <section className="bg-gray-50 dark:bg-gray-800  flex  justify-center">
        <div className="w-[600px] h-[300px]">
          <Carousel
            className="px-10"
            infiniteLoop={true}
            interval={3000}
            autoPlay={true}
            showStatus={false}
            showArrows={false}
            showIndicators={false}
            showThumbs={false}
          >
            {data?.map(user => {
              return (
                <div
                  key={user.id}
                  className=" h-[260px] flex justify-center items-center rounded-md text-white bg-opacity-10 backdrop-blur-sm "
                >
                  <div>
                    <div className="mb-4 w-fit mx-auto">
                      <h1 className="text-4xl m-0 text-end font-bold text-green-400">
                        {user.company.name}
                      </h1>
                      <p className="pacifi text-end text-sm p-0 m-0">
                        {user.company.catchPhrase}
                      </p>
                    </div>
                    <div>
                      <figcaption className="flex items-center justify-center mt-6 space-x-3">
                        <a href="https://www.freepik.com/free-photo/bohemian-man-with-his-arms-crossed_1157693.htm#query=png%20avatars&position=0&from_view=keyword&track=ais">
                          <img
                            className="w-6 h-6 rounded-full"
                            src="/ceo.jpg"
                            alt=""
                          />
                        </a>

                        <div className="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
                          <div className="pr-3 text-sm font-light text-gray-500 dark:text-gray-400">
                            CEO
                          </div>
                          <div className="pl-3 font-medium text-gray-900 dark:text-white">
                            <p className="text-xl font[Inter]"> {user.name}</p>
                          </div>
                        </div>
                      </figcaption>
                    </div>
                  </div>
                </div>
              );
            })}
          </Carousel>
        </div>
      </section>
    </>
  );
};
