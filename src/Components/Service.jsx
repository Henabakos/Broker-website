import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const ServicePage = () => {
  return (
    <div className="min-h-screen bg-gray-100">
        <Navbar/>
        <section className="bg-hero-pattern2 bg-cover bg-center h-screen flex items-center justify-center text-center">
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 flex justify-center md:justify-start mb-8 md:mb-0">
          <img src="about-us.jpg" alt="About Us" className="w-full h-auto md:w-3/4 rounded-lg shadow-lg " />
        </div>
        <div className="md:w-1/2 md:pl-12">
          <h2 className="text-5xl font-bold md:text-center mb-8 text-center text-orange-500">About Us</h2>
          <p className="text-blue-950 text-2xl leading-relaxed text-center md:text-left font-[20px]">
            Welcome to our Broker company. We specialize in helping clients buy, sell, and rent properties with ease. Our experienced team is dedicated to providing exceptional service and ensuring that every client finds their perfect property. Whether you're looking for a new home or an investment opportunity, we are here to assist you every step of the way.
          </p>
        </div>
      </div>
    </section>
      
    <section className="py-12 bg-gray-100 min-h-screen flex items-center">
      <div className="container mx-auto px-6 md:px-12">
        <h2 className="text-5xl font-bold text-center mb-12 mt-12">Our Services</h2>
        <div className="flex flex-col md:flex-row gap-8 items-center justify-center">
          <div className="bg-white p-6 shadow-lg rounded-lg w-full md:w-1/3 "style={{ boxShadow: '0 10px 15px -3px rgba(255, 165, 0, 0.4), 0 4px 6px -2px rgba(255, 165, 0, 0.1)' }}>
            <h3 className="text-xl font-semibold mb-4">Buying</h3>
            <p className="text-gray-700">
              Our team will help you find the perfect home that meets your needs and budget. We provide comprehensive listings and expert advice to make your buying experience smooth and stress-free.
            </p>
          </div>
          <div className="bx-shadow bg-white p-6 shadow-lg  rounded-lg w-full md:w-1/3" style={{ boxShadow: '0 10px 15px -3px rgba(255, 165, 0, 0.4), 0 4px 6px -2px rgba(255, 165, 0, 0.1)' }}>
            <h3 className="text-xl font-semibold mb-4">Selling</h3>
            <p className="text-gray-700">
              We offer top-notch services to help you sell your property quickly and at the best price. From market analysis to professional marketing, we handle every aspect of the selling process.
            </p>
          </div>
          <div className="bg-white p-6 shadow-lg rounded-lg w-full md:w-1/3 "style={{ boxShadow: '0 10px 15px -3px rgba(255, 165, 0, 0.4), 0 4px 6px -2px rgba(255, 165, 0, 0.1)' }}>
            <h3 className="text-xl font-semibold mb-4">Renting</h3>
            <p className="text-gray-700">
              Whether you're a landlord or a tenant, we provide rental management services that ensure a seamless renting experience. Our team will match tenants with suitable properties and handle all the paperwork.
            </p>
          </div>
        </div>
      </div>
    </section>
      
    <section className="py-12 bg-white min-h-screen flex items-center">
      <div className="container mx-auto px-6 md:px-12">
        <h2 className="text-3xl font-bold text-center mb-8">What Makes Us Different</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-orange-100 border border-orange-200 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4 text-orange-900">Expertise</h3>
            <p className="text-orange-800">
              Our team of experienced broker professionals has extensive knowledge of the market and a deep understanding of the buying, selling, and renting process.
            </p>
          </div>
          <div className="bg-orange-100 border border-orange-200 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4 text-orange-900">Customer Service</h3>
            <p className="text-orange-800">
              We pride ourselves on providing exceptional customer service. Our clients are our top priority, and we go above and beyond to ensure their satisfaction.
            </p>
          </div>
          <div className="bg-orange-100 border border-orange-200 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4 text-orange-900">Innovation</h3>
            <p className="text-orange-800">
              We utilize the latest technology and marketing strategies to provide our clients with the best possible results. Our innovative approach sets us apart from the competition.
            </p>
          </div>
          <div className="bg-orange-100 border border-orange-200 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4 text-orange-900">Integrity</h3>
            <p className="text-orange-800">
              We operate with the highest level of integrity and transparency. Our clients trust us to provide honest advice and handle every transaction with the utmost professionalism.
            </p>
          </div>
        </div>
      </div>
    </section>
      
      <Footer/>
    </div>
  );
};

export default ServicePage;
