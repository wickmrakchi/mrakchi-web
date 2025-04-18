import React from 'react';
import ServiceCard from './ServicesCard';
import { Server, Bot, Code } from 'lucide-react';
import { useServices } from '../hooks/useServices';

const Services: React.FC = () => {
  const services = useServices();

  const serviceIcons = {
    hosting: <Server size={24} />,
    bot: <Bot size={24} />,
    website: <Code size={24} />
  };

  return (
    <section id="services" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <span className="inline-block px-3 py-1 bg-red-100 dark:bg-red-900 text-red-600 dark:text-red-300 rounded-full text-sm font-medium mb-4">
            Services
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            What I Offer
          </h2>
          <p className="max-w-2xl mx-auto text-gray-700 dark:text-gray-300">
            Professional solutions for your digital needs - from hosting services to custom Discord bots and website development.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              title={service.title}
              description={service.description}
              price={service.price}
              icon={serviceIcons[service.type as keyof typeof serviceIcons]}
              features={service.features}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;