import React from 'react'
import ServiceDetails from '../Components/ServiceDetails/ServiceDetails'
import WhyChooseUs from '../Components/WhyChooseUs/WhyChooseUs'
import Features from '../Components/Features/Features'
import { useLocation } from 'react-router-dom';
import serviceData from './serviceData';

export default function DetailsPage() {
  const location = useLocation();

  // Extract the service name from the query string
  const queryParams = new URLSearchParams(location.search);
  const serviceName = queryParams.get('service');

  const service = serviceData.find(service => service.title.toLowerCase() === serviceName.toLowerCase());

  // Check if the service exists
  if (!service) {
    return <div>Service not found</div>;
  }

  return (
    <>
    <ServiceDetails title={service.title} description={service.description} />
    <Features features={service.features} />
    <WhyChooseUs/>
    </>
  )
}