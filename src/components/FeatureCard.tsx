import { FC } from 'react';
import Link from 'next/link';

interface FeatureCardProps {
  title: string;
  description: string;
  phone?: string;
  button?: string;
}

const FeatureCard: FC<FeatureCardProps> = ({
  title,
  description,
  phone,
  button
}) => {
  return (
    <div className="card rounded-lg p-6 text-center hover:text-black hover:bg-white transition-all hover:scale-105 delay-150">
      <div className="">
        <div className="border-l-8 py-1 mb-2 border-green-500">
          <h2 className="text-xl font-bold mb-2">{title}</h2>
        </div>
        <p className="text-base">{description}</p>
      </div>
      {(phone || button) && (
        <div className="mt-10 flex justify-center flex-col gap-2">
          <Link href={`tel:${phone}`}>
            <a className="text-blue-500">{phone}</a>
          </Link>
          {button && (
            <button className="inline mx-auto px-7 text-yellow-500 border-blue-500  py-2 rounded-lg transition-all delay-100 hover:bg-blue-500 hover:border-none hover:text-white w-fit border-solid border-2">
              {button}
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default FeatureCard;
