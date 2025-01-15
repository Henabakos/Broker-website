import { data, Card_Data_Sell, Card_Data_rent, Agents } from "../index.js";
import Cards from "./cards.jsx";
import Footer from "./Footer.jsx";
import Navbar from "./Navbar";
const ForRent = () => {
  return (
    <div>
      <Navbar />
      <div className="bg-hero-pattern2 bg-cover bg-center lg:h-screen flex items-center justify-center text-center">
        <div className="flex flex-col md:flex-row items-center justify-center relative">
          <div className="w-full h-full py-10 md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left relative  md:p-12 bg-gradient-to-r from-orange-400 via-orange-200 to-transparent">
            <h1
              className="text-2xl
            lg:text-4xl  text-black font-bold"
            >
              Welcome to Our Website
            </h1>
            <p className="text-lg  mt-4">
              We offer the best services in the industry
            </p>
            <button className="mt-6 px-6 py-3 bg-orange-600 text-white rounded-full">
              Get Started
            </button>
          </div>
          <div className="md:w-1/2 flex items-center justify-center  ">
            <img
              src="/house-rent.jpg"
              alt="Side Image"
              className="w-full h-auto md:w-3/4 border-5 md:rounded-xl"
            />
          </div>
        </div>
      </div>
      <div className="container mx-auto md:px-10">
        <h1 className="text-3xl font-bold text-gray-800 mt-12 mb-8 px-10">
          Homes For Sell
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
      </div>
      <div className="mt-12">
        <Footer />
      </div>
    </div>
  );
};

export default ForRent;
