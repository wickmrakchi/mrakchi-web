import { useState, useEffect } from 'react';
import servicesData, { Service } from '../data/services';

export const useServices = (): Service[] => {
  const [services, setServices] = useState<Service[]>([]);

  useEffect(() => {
    // In a real application, this would fetch from an API
    // For now, we'll use the static data
    setServices(servicesData);
  }, []);

  return services;
};