import { FC } from 'react';
export const Quote: FC = () => {
  return (
    <>
      <section className="bg-gray-50 dark:bg-gray-800">
        <div className="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-24 lg:px-6">
          <figure className="max-w-screen-md mx-auto">
            <blockquote>
              <p className="text-xl font-medium text-gray-900 md:text-2xl dark:text-white">
                &#34; It is supposed to be automatic, but actually you have to
                push this button.&#34;
              </p>
            </blockquote>
            <figcaption className="flex items-center justify-center mt-6 space-x-3">
              <a href="https://www.freepik.com/free-photo/bohemian-man-with-his-arms-crossed_1157693.htm#query=png%20avatars&position=0&from_view=keyword&track=ais">
                <img className="w-6 h-6 rounded-full" src="/ceo.jpg" alt="" />
              </a>

              <div className="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
                <div className="pr-3 font-medium text-gray-900 dark:text-white">
                  Pathou Rajkumar
                </div>
                <div className="pl-3 text-sm font-light text-gray-500 dark:text-gray-400">
                  CEO at unPLUG
                </div>
              </div>
            </figcaption>
          </figure>
        </div>
      </section>
    </>
  );
};
