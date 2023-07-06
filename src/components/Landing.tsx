import { FC } from 'react';
import { Hero } from './Hero';
import { Trust } from './Trust';
import { Quote } from './Quote';
import { Pricing } from './Pricing';

export const Landing: FC = () => {
  return (
    <div className=" w-full flex justify-center items-center">
      <div>
        <Hero />
        {/* trust */}
        <Trust />

        {/* Quote*/}
        <Quote />

        {/* Pricing */}
        <Pricing />
      </div>
    </div>
  );
};
