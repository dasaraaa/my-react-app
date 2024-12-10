import React from 'react';
import { Link } from 'react-router-dom';

const ServicesList = ({ services }) => {
  return (
    <div>
      <h1>Shërbimet tona</h1>
      <ul>
        {services.map((service) => (
          <li key={service.id}>
            <Link to={`/services/${service.id}`}>{service.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ServicesList;
