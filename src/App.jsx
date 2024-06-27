import React, { useEffect } from 'react'
import Login from './Components/Login'
import Home from './Components/Home'
import { Route,Routes, useNavigate } from 'react-router-dom'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from './config/firebase'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ForSale from './Components/ForSale'
import ForRent from './Components/ForRent'
import Service from './Components/Service'
import ContactUsPage from './Components/Contact'
import CreatePost from './Components/CreatePost'






const App = () => {
  const navigate = useNavigate();

  useEffect(()=>{
    onAuthStateChanged(auth,async (user)=>{
      if(user){
        toast.success("Logged In");
        navigate('/')
      }else{
        toast.success("Logged Out");
        navigate("/login")
      }
    })
  },[])
  return (
    <div>
      <ToastContainer theme='dark'/>
      <Routes>

        <Route path='/' element={<Home/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/for-sell' element={<ForSale/>} />
        <Route path='/for-rent' element={<ForRent/>} />
        <Route path='/service' element={<Service/>} />
        <Route path='/contact-us' element={<ContactUsPage/>} />
        <Route path='/create-post' element={<CreatePost/>} />




      </Routes>
    </div>
  )
}

export default App
