import { data ,Card_Data_Sell,Card_Data_rent,Agents } from '../index.jsx'
import Cards from './cards.jsx'
import Footer from './Footer.jsx'
import Navbar from './Navbar'
const ForRent = () => {
    return(
      <div>
        <Navbar/>
        <div className="bg-hero-pattern2 bg-cover bg-center h-screen flex items-center justify-center text-center">
      <div className="flex flex-col md:flex-row items-center justify-center relative">
        <div className="md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left relative p-6 md:p-12 bg-gradient-to-r from-blue-400 via-blue-200 to-transparent">
          <h1 className="text-4xl md:text-6xl text-black font-bold">Welcome to Our Website</h1>
          <p className="text-lg md:text-2xl text-blue-700 mt-4">We offer the best services in the industry</p>
          <button className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-full">Get Started</button>
        </div>
        <div className="md:w-1/2 flex items-center justify-center mt-6 md:mt-0">
          <img src="/house-rent.jpg" alt="Side Image" className="w-full h-auto md:w-3/4 border-5 rounded-xl" />
        </div>
      </div>
    </div>
    <div className="container mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mt-12 mb-8">Homes For Sell</h1>
        <div className="flex gap-10 cursor-pointer ">
          {Card_Data_rent.map((data, index) => (
            <Cards key={index } image={data.image} description={data.description} price={data.price} Address={data.Address} />
          ))}
        </div>
        <div className="flex gap-10 cursor-pointer ">
          {Card_Data_rent.map((data, index) => (
            <Cards key={index } image={data.image} description={data.description} price={data.price} Address={data.Address} />
          ))}
        </div>
        <div className="flex gap-10 cursor-pointer ">
          {Card_Data_rent.map((data, index) => (
            <Cards key={index } image={data.image} description={data.description} price={data.price} Address={data.Address} />
          ))}
        </div>
        <div className="flex gap-10 cursor-pointer ">
          {Card_Data_rent.map((data, index) => (
            <Cards key={index } image={data.image} description={data.description} price={data.price} Address={data.Address} />
          ))}
        </div>
       
      </div>
      <div className='mt-12'>
      <Footer/>
      </div>
      </div>
    );
}


export default ForRent
