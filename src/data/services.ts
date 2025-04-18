export interface Service {
  id: number;
  title: string;
  description: string;
  price: string;
  type: 'hosting' | 'bot' | 'website';
  features: string[];
}

const services: Service[] = [
  // {
  //   id: 1,
  //   title: 'Web Hosting Services',
  //   description: 'Reliable and fast hosting solutions for your website with 24/7 support and maintenance.',
  //   price: 'From $9.99/month',
  //   type: 'hosting',
  //   features: [
  //     '99.9% Uptime Guarantee',
  //     'Free SSL Certificate',
  //     'Daily Backups',
  //     '24/7 Technical Support',
  //     'Easy Control Panel',
  //     'Multiple Databases'
  //   ]
  // },
  {
    id: 2,
    title: 'Discord Bot Development',
    description: 'Custom Discord bots tailored to your server needs with advanced features and functionality.',
    price: 'From $49.99',
    type: 'bot',
    features: [
      'Custom Commands',
      'Moderation Features',
      'Role Management',
      'Music Playback',
      'Server Statistics',
      'Unlimited Updates'
    ]
  },
  {
    id: 3,
    title: 'Website Development',
    description: 'Professional website design and development services to establish your online presence.',
    price: 'From $199.99',
    type: 'website',
    features: [
      'Responsive Design',
      'SEO Optimization',
      'Contact Forms',
      'Content Management',
      'Social Media Integration',
      'Performance Optimization'
    ]
  },
  {
    id: 4,
    title: 'Premium Bot Hosting',
    description: 'Dedicated hosting for your Discord bots with high availability and performance.',
    price: 'From $14.99/month',
    type: 'hosting',
    features: [
      'Dedicated Resources',
      'Automatic Restarts',
      'Performance Monitoring',
      'Scheduled Backups',
      'Multi-bot Support',
      'Technical Assistance'
    ]
  },
  {
    id: 5,
    title: 'E-Commerce Website',
    description: 'Complete e-commerce solutions to sell your products or services online.',
    price: 'From $349.99',
    type: 'website',
    features: [
      'Product Catalog',
      'Shopping Cart',
      'Secure Payment Integration',
      'Order Management',
      'Customer Accounts',
      'Inventory Tracking'
    ]
  },
  {
    id: 6,
    title: 'Advanced Discord Bot',
    description: 'Sophisticated Discord bots with custom features, database integration, and advanced functionalities.',
    price: 'From $149.99',
    type: 'bot',
    features: [
      'Custom Database Integration',
      'Advanced Analytics',
      'API Integrations',
      'Economy System',
      'Custom Games',
      'Auto-moderation'
    ]
  }
];

export default services;