import React from 'react'
import { useState } from 'react';


const Card = ({image,des,title,price}) => {
    const [showDescription, setShowDescription] =useState(false);

    const handleCardClick = () => {
        setShowDescription(true);
    };
  return (
    <div onClick={handleCardClick} className="cursor-pointer p-4 bg-white shadow-md hover:bg-gray-100 transition duration-300 ease-in-out">
      <h2 className="text-lg font-bold mb-2">{title}</h2>
      {showDescription && (
        <div className="fixed inset-0 flex items-center justify-center z-10 bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded shadow-lg w-64 text-gray-800">
            <img src={image} alt="product image"  />
            <p>{des}</p>
            <p>{price}</p>
          </div>
        </div>
      )}
    </div>
  )
}

export default Card
