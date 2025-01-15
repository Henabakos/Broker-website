import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const ContactUsPage = () => {
  return (
    <div>
      <Navbar />

      <section className="py-12 bg-gray-100">
        <div className="container mx-auto px-6 lg:px-12 flex flex-col lg:flex-row items-center justify-center gap-12">
          <div className="w-full ">
            <img
              src="/contact-us.jpg"
              alt="Contact Image"
              className="rounded-lg shadow-lg"
            />
          </div>
          <div
            className="w-full bg-white p-8 rounded-lg shadow-lg"
            style={{
              boxShadow:
                "0 10px 15px -3px rgba(255, 165, 0, 0.4), 0 4px 6px -2px rgba(255, 165, 0, 0.1)",
            }}
          >
            <h2 className="text-3xl font-bold mb-6 text-center">Contact Us</h2>
            <form>
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-gray-700 font-semibold mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-orange-500"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-gray-700 font-semibold mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-orange-500"
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="message"
                  className="block text-gray-700 font-semibold mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-orange-500"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-orange-600 text-white py-2 px-4 rounded-md hover:bg-orange-700 transition duration-300"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ContactUsPage;
