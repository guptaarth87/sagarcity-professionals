import { useState,useEffect }  from 'react'
import viteLogo from '/vite.svg'
import './App.css'
import ScrollToTop from './ScrollToTop';
import {Routes , Route } from 'react-router-dom';
import OurServices from './Components/OurServices/OurServices';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import Contactus from './Pages/Contactus';
import Home from './Pages/Home';
import Aboutus from './Pages/Aboutus';
import DetailsPage from './Pages/DetailsPage';
import UploadForm from './Components/UploadCV/UploadForm';


function App() {

  return (
    <>
      <Navbar/>
      <br></br>
      <br></br>
      <br></br>
      <ScrollToTop/>
      <Routes>
        
        <Route path = '/' element= {<Home/>}/>
        <Route path = '/home' element= {<Home/>}/>
        <Route path = '/services' element= {<OurServices/>}/>
        <Route path = '/about' element= {<Aboutus/>}/>
        <Route path = '/servicedetails' element= {<DetailsPage/>}/>
        <Route path = '/contactus' element= {<Contactus/>}/>
        <Route path = '/uploadcv' element={<UploadForm/>}/>
      </Routes>
      <Footer/>
    </>
  )
}

export default App
