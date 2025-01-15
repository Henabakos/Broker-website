import React, { useState } from "react";
import { Link } from "react-router-dom";
import Card from "./Card";

const Cards = (props) => {
  const [isDetailPopupOpen, setIsDetailPopupOpen] = useState(false);

  const detailPage = (image, des, price, address) => {
    return (
      <div className="grid lg:grid-cols-2 gap-4 ">
        <img className="w-full" src={image} alt={address} />
        <div>
          <h2 className="py-3 mt-5 text-black/80">{des}</h2>
          <div className="flex justify-between">
            <h3 className="text-orange-600 text-xl">{price}</h3>
            <p className="text-gray-600">{address}</p>
          </div>
          <button className="flex bg-orange-500 py-3 px-4 rounded-lg text-white m-auto mt-6">
            Procced
          </button>
        </div>
      </div>
    );
  };

  return (
    <>
      <div className="card bg-white rounded-lg shadow-md overflow-hidden w-full  mb-4 hover:translate-y-2">
        <img
          src={props.image}
          alt={props.description}
          className="w-full h-48 object-cover"
        />
        <div className="px-4 py-2 flex items-center justify-between">
          <div className="flex items-center">
            <img
              src="./address.png"
              alt="Address Icon"
              className="w-4 h-4 mr-2"
            />
            <h4 className="text-lg font-medium text-gray-800">
              {props.Address}
            </h4>
          </div>
          <h3 className="text-xl font-bold text-orange-500">{props.price}</h3>
        </div>
        <p className="px-4 py-2 text-gray-700">{props.description}</p>
        <div className="flex px-4 py-2 justify-between items-center">
          <button
            onClick={() => setIsDetailPopupOpen(true)}
            className="text-white bg-orange-500 hover:bg-orange-700 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-800"
          >
            Check
          </button>
          {/* <Link to="/details" className="text-orange-500 hover:underline">
            Details
          </Link> */}
        </div>
      </div>

      {isDetailPopupOpen && (
        <div className="detail-popup fixed top-0 left-0 w-full h-full bg-gray-900 bg-opacity-50 z-50 flex justify-center items-center">
          <div className="bg-white rounded-lg shadow-md p-4 w-full max-sm:mx-10 md:w-1/2 ">
            {detailPage(
              props.image,
              props.description,
              props.price,
              props.Address
            )}

            <button
              onClick={() => setIsDetailPopupOpen(false)}
              className="text-orange-500 hover:underline"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Cards;
