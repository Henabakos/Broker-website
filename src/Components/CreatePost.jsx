import React, { useState } from 'react';
import { db, storage } from '../config/firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import Navbar from './Navbar';
import Footer from './Footer';

const CreatePost = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState(null);

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!image) return;

    const storageRef = ref(storage, `images/${image.name}`);
    await uploadBytes(storageRef, image);
    const imageUrl = await getDownloadURL(storageRef);

    await addDoc(collection(db, 'posts'), {
      title,
      description,
      price,
      imageUrl,
      timestamp: serverTimestamp(),
    });

    setTitle('');
    setDescription('');
    setPrice('');
    setImage(null);
  };

  return (
    <div>
        <Navbar/>
        <div className="flex min-h-screen items-center justify-center  bg-cover bg-no-repeat" style={{ backgroundImage: `linear-gradient(#0000007e,#0000007e),url(blur-house.jpg)` }}>
      <form onSubmit={handleSubmit} className="bg-black bg-opacity-75 p-8 rounded-md shadow-bx-shadow space-y-4 w-full max-w-md">
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
          className="w-full px-4 py-2 border rounded-md  text-white  border-none focus:outline-none  bg-[#333]"
          required
        />
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Description"
          className="w-full px-4 py-2 border rounded-md  text-white  border-none focus:outline-none  bg-[#333]"
          required
        />
        <input
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          placeholder="Price"
          className="w-full px-4 py-2 border rounded-md  text-white  border-none focus:outline-none  bg-[#333]"
          required
        />
        <input
          type="file"
          onChange={handleImageChange}
          className="w-full px-4 py-2 border rounded-md text-white  border-none focus:outline-none  bg-[#333]"
          required
        />
        <button type="submit" className="w-full bg-orange-600 text-white px-4 py-2 rounded-md">
          Create Post
        </button>
      </form>
    </div>
    <Footer/>
    </div>
  );
};

export default CreatePost;
