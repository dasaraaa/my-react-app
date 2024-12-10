import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { services } from './ServicesData'; // Ensure this imports the updated services data
import Header from './Header';
import Footer from './Footer';

const ServicesDetails = () => {
  const { id } = useParams(); // Get the service id from the URL
  const service = services.find(service => service.id === parseInt(id)); // Find the service by id

  const [currentSlide, setCurrentSlide] = useState(0);
  
  if (!service) {
    return <h2>Service not found!</h2>;
  }

  const productsPerSlide = 3;
  const totalSlides = Math.ceil(service.products.length / productsPerSlide);

  const nextSlide = () => {
    if (currentSlide < totalSlides - 1) {
      setCurrentSlide((prevSlide) => prevSlide + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide((prevSlide) => prevSlide - 1);
    }
  };

  const getDisplayedProducts = () => {
    const startIndex = currentSlide * productsPerSlide;
    return service.products.slice(startIndex, startIndex + productsPerSlide);
  };

  return (
    <div className="service-detail py-24">
      <Header />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="font-bold text-4xl sm:text-5xl text-center mb-6">{service.name}</h1>
        <p className="text-center text-lg sm:text-xl text-gray-600 mb-12">{service.description}</p>

        {/* Slider for products */}
        <div className="flex items-center justify-between mb-6">
          <button 
            onClick={prevSlide} 
            className="px-4 py-2 bg-gray-800 text-white rounded-full"
            disabled={currentSlide === 0} // Disable prev button if it's the first slide
          >
            Prev
          </button>
          <div className="flex gap-4 sm:gap-6 overflow-hidden">
            {getDisplayedProducts().map((product) => (
              <div key={product.id} className="product-card bg-white border rounded-xl shadow-xl overflow-hidden w-full sm:w-1/2 md:w-1/3 lg:w-1/3">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-64 object-cover transform hover:scale-105 transition-all duration-500"
                />
                <div className="p-6">
                  <h3 className="font-semibold text-2xl text-black mb-4">{product.name}</h3>
                  <p className="text-gray-500 text-lg mb-4">{product.description}</p>
                  <h4 className="text-xl font-bold text-indigo-600">{product.price}</h4>
                </div>
              </div>
            ))}
          </div>
          <button 
            onClick={nextSlide} 
            className="px-4 py-2 bg-gray-800 text-white rounded-full"
            disabled={currentSlide === totalSlides - 1} // Disable next button if it's the last slide
          >
            Next
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ServicesDetails;
