import { IPriceData } from './types';

export const Prices: IPriceData[] = [
  {
    id: '1',
    name: 'Starter',
    description: 'Best option for personal use & for your next project.',
    price: '26',
    configuration: 'Individual',
    setupInfo: 'No setup, or hidden fees',
    teamSize: '1',
    support: '6',
    update: '6'
  },
  {
    id: '2',
    name: 'Company',
    description: 'Relevant for multiple users, extended & premium support.',
    price: '99',
    configuration: 'Individual',
    setupInfo: 'No setup, or hidden fees',
    teamSize: '10',
    support: '24',
    update: '24'
  },
  {
    id: '3',
    name: 'Enterprise',
    description:
      'Best for large scale uses and extended redistribution rights.',
    price: '499',
    configuration: 'Individual',
    setupInfo: 'No setup, or hidden fees',
    teamSize: '100+',
    support: '36',
    update: '36'
  }
];
