import { IPriceData, IFeatureData } from './types';

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

export const Features: IFeatureData[] = [
  {
    id: '1',
    title: 'Contact Management',
    description:
      'Centralize and manage customer information, interactions, and communication history for a comprehensive view of your relationships.'
  },
  {
    id: '2',
    title: 'Lead and Opportunity Tracking',
    description:
      'Capture and track leads throughout the sales cycle, from initial contact to closing deals, ensuring efficient pipeline management and follow-up.'
  },
  {
    id: '3',
    title: 'Task and Activity Management',
    description:
      'Assign and track tasks, appointments, and activities for individuals or teams, ensuring efficient collaboration and follow-through on important actions.'
  },
  {
    id: '4',
    title: 'Reporting and Analytics',
    description:
      'Gain valuable insights into sales performance, customer behavior, and team productivity through customizable reports and analytics dashboards.'
  },
  {
    id: '5',
    title: 'Customer Service and Support',
    description:
      'Manage support tickets, track customer issues, and ensure timely resolution through the CRM system, providing exceptional customer service.'
  },
  {
    id: '6',
    title: 'Workflow Automation',
    description:
      'Automate routine tasks and processes, such as lead assignment, email notifications, and follow-up reminders, to improve efficiency and reduce manual effort.'
  },
  {
    id: '7',
    title: 'Email Integration',
    description:
      'Integrate with popular email platforms to sync and track email communications, ensuring a unified view of customer interactions and improving response times.'
  },
  {
    id: '8',
    title: 'Mobile CRM',
    description:
      'Access and manage your CRM data on the go with mobile apps, empowering your team to stay connected and productive from anywhere.'
  },
  {
    id: '9',
    title: 'Sales Automation',
    description:
      'Automate repetitive sales tasks, such as lead assignment, email sequences, and follow-up reminders, to streamline your sales process and increase productivity.'
  }
];
