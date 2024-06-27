import React, { useEffect, useState } from 'react';
import { db } from '../config/firebase';
import { collection, onSnapshot, orderBy, query, limit } from 'firebase/firestore';
import Navbar from './Navbar';
import Footer from './Footer';
import Cards from './cards';
import { Card_Data_Sell } from '../index.jsx';

const ForSale = () => {
  const [latestPost, setLatestPost] = useState(null);

  useEffect(() => {
    const q = query(collection(db, 'posts'), orderBy('timestamp', 'desc'), limit(1));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const postData = snapshot.docs.map(doc => ({ ...doc.data(), id: doc.id }))[0];
      setLatestPost(postData);
    });

    return () => unsubscribe();
  }, []);

  return (
    <div>
      <Navbar />
      <div className="bg-hero-pattern bg-cover bg-center h-screen flex items-center justify-center text-center">
        <div>
          <h1 className="text-4xl md:text-6xl text-white font-bold">Welcome to Our Website</h1>
          <p className="text-lg md:text-2xl text-white mt-4">We offer the best services in the industry</p>
          <button className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-full">Get Started</button>
        </div>
      </div>
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mt-12 mb-8">Homes For Sale</h1>
        <div className="flex gap-10 cursor-pointer">
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
      </div>
      <div className="container mx-auto p-4 mt-12">
        {latestPost ? (
          <Cards
          key={latestPost.id}
          image={latestPost.imageUrl}
          description={latestPost.description}
          price={latestPost.price}
          Address={latestPost.title}
        />
          // <div key={latestPost.id} className="border rounded-md p-4 shadow-md">
          //   <h2 className="text-xl font-bold">{latestPost.title}</h2>
          //   <p className="mt-2">{latestPost.description}</p>
          //   <p className="mt-2 font-semibold">${latestPost.price}</p>
          //   <img src={latestPost.imageUrl} alt={latestPost.title} className="mt-4 w-full h-64 object-cover rounded-md" />
          // </div>
        ) : (
          <p>No posts available</p>
        )}
      </div>
      <div className="mt-12">
        <Footer />
      </div>
    </div>
  );
}

export default ForSale;
