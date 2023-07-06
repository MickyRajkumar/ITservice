import { FC } from 'react';

interface FeatureCardProps {
  title: string;
  description: string;
}

const FeatureCard: FC<FeatureCardProps> = ({ title, description }) => {
  return (
    <div className="card rounded-lg p-6">
      <h2 className="text-xl font-bold mb-2">{title}</h2>
      <p className="text-base">{description}</p>
    </div>
  );
};

export default FeatureCard;
