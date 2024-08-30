import { useState } from 'react'
import viteLogo from '/vite.svg'
import './App.css'
import {Routes , Route } from 'react-router-dom';
import OurServices from './Components/OurServices/OurServices';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import Contactus from './Pages/Contactus';
import Home from './Pages/Home';
import Aboutus from './Pages/Aboutus';
import DetailsPage from './Pages/DetailsPage';

function App() {
  
  return (
    <>
      <Navbar/>
      <br></br>
      <br></br>
      <br></br>
      <Routes>
        <Route path = '/' element= {<Home/>}/>
        <Route path = '/home' element= {<Home/>}/>
        <Route path = '/services' element= {<OurServices/>}/>
        <Route path = '/about' element= {<Aboutus/>}/>
        <Route path = '/servicedetails' element= {<DetailsPage/>}/>
        <Route path = '/contactus' element= {<Contactus/>}/>
      </Routes>
      <Footer/>
    </>
  )
}

export default App
