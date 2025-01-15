import React from "react";
import { logout } from "../config/firebase";
import Navbar from "./Navbar";
import { data, Card_Data_Sell, Card_Data_rent, Agents } from "../index.js";
import Cards from "./cards.jsx";
import Footer from "./Footer.jsx";

const Home = () => {
  return (
    <div>
      <Navbar />
      <section
        className="hero lg:h-screen relative bg-cover bg-no-repeat"
        style={{ backgroundImage: `url(Property-Listing-21.jpg)` }}
      >
        <div className="hero-content flex flex-col justify-center items-start px-10 py-20 md:px-40 md:py-40 bg-black bg-opacity-75">
          <p className="text-xl lg:text-3xl font-bold text-orange-500">
            Most Trusted
          </p>
          <h1 className="text-xl md:text-3xl lg:text-5xl font-bold  text-white leading-tight mb-5 md:mb-7 lg:mb-10">
            Perfect Firm For Selling Or Buying Villas, Flats And Houses
          </h1>
          <button className="bg-orange-500 text-white px-4 lg:px-6 py-2 lg:py-3 rounded-md focus:outline-none hover:bg-orange-700">
            Explore More
          </button>
        </div>
      </section>
      <div className="bg-gray-200 lg:h-screen flex flex-col items-center justify-center">
        <p className=" text-2xl lg:text-3xl text-orange-500 my-7 lg:my-2">
          Newly Listed
        </p>
        <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold mb-8">
          Search by Property Listing
        </h1>
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {data.map((elt, inx) => (
            <div
              key={inx}
              className="card shadow-md rounded-lg overflow-hidden bg-white cursor-pointer hover:shadow-lg hover:bg-gray-100 p-4"
            >
              <img
                src={elt.image}
                alt={elt.description}
                className="w-full h-40 mx-auto mb-4 rounded-lg object-cover"
              />
              <h2 className="text-2xl font-bold text-gray-800 mb-2">
                {elt.description}
              </h2>
              <p className="text-gray-500">{`6 Property Available`}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="show bg-gray-100 h-[80vh] lg:min-h-screen grid lg:grid-cols-2 lg:gap-8 items-center justify-center px-10 py-16 gap-10">
        <img
          src="/Property-Listing-16.jpg"
          alt="Property Listing"
          className="rounded-lg object-cover"
        />
        <div className="content-container bg-white shadow-md rounded-lg px-10 py-8 max-w-3xl">
          <h1 className="text-xl md:text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
            Sell for top <span className="text-orange-500">Quality</span> and
            <span className="text-orange-500">Profit</span>
          </h1>
          <p className="text-gray-700 mb-10 font-light">
            A strong opportunity to sell your assets for top quality prices and
            maximize profitability. The market data and valuation metrics show
            that current conditions favor sellers who can offer high-quality,
            in-demand products or services.
          </p>
          <div className="input-field flex items-center">
            <input
              type="email"
              placeholder="Enter Your Email for contact"
              className="rounded-md border border-gray-300 px-3 py-2 w-full mr-4 focus:outline-none focus:ring-orange-500 focus:ring-1"
            />
            <button className="bg-orange-500 text-white font-bold py-2 px-4 rounded-md hover:bg-orange-700">
              Next
            </button>
          </div>
        </div>
      </div>

      <section className="popular-section bg-gray-50 py-16">
        <h2 className="py-5 text-2xl lg:text-4xl font-bold text-orange-500 text-center">
          Populars
        </h2>
        <div className="container mx-auto">
          <h1 className="text-xl max-sm:px-10 lg:text-3xl font-bold  text-gray-800 mb-8">
            Our Popular Homes For Rent
          </h1>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 max-sm:px-10  cursor-pointer ">
            {Card_Data_rent.map((data, index) => (
              <Cards
                key={index}
                image={data.image}
                description={data.description}
                price={data.price}
                Address={data.Address}
              />
            ))}
          </div>
          <h6 className="text-center text-orange-500 hover:underline cursor-pointer mt-8">
            View All
          </h6>
          <h1 className="mt-10 text-xl max-sm:px-10 lg:text-3xl font-bold  text-gray-800 mb-8">
            Our Popular Homes For Sell
          </h1>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 max-sm:px-10  cursor-pointer ">
            {Card_Data_Sell.map((data, index) => (
              <Cards
                key={index}
                image={data.image}
                description={data.description}
                price={data.price}
                Address={data.Address}
              />
            ))}
          </div>
          <h6 className="text-center text-orange-500 hover:underline cursor-pointer mt-8">
            View All
          </h6>
        </div>
      </section>
      <section className="my-20">
        <h1 className="font-bold text-center text-xl lg:text-[40px] mb-6">
          Our Experianced Agents
        </h1>
        <div className="flex justify-around gap-10 overflow-x-auto whitespace-nowrap px-10">
          {Agents.map((agent, index) => (
            <div key={index} className="flex flex-col ">
              <img
                className="h-full lg:h-[15rem] rounded-full border-4 border-gray-300"
                src={agent.AgentImage}
                alt="AgentName"
              />
              <h2 className="text-center font-bold py-4 text-[20px]">
                {agent.AgentName}
              </h2>
              <p className="text-center text-gray-400 hover:underline cursor-pointer hover:text-orange-600">
                {agent.AgentExperiance}
              </p>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Home;
