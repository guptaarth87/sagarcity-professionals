import React,{useEffect} from 'react'
import OurServices from '../Components/OurServices/OurServices'

export default function OurServicesPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
    <OurServices/>
    </>
  )
}
