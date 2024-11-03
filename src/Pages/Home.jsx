import React from 'react'
import Hero from '../Components/Hero/Hero'
import Overview from '../Components/Overview/Overview'
import EmailDiv from '../Components/PopUp/EmailDiv'
import OurExpertise from '../Components/OurExpertise/OurExpertise'
import Vision from '../Components/Vision/Vision'
import Faqs from '../Components/FAQs/Faqs'
import ContactForm from '../Components/ContactForm/ContactForm'

export default function Home() {
  return (
    <>
    <EmailDiv/>
    <Hero/>
    <div className="container">
        <Overview/>
        <OurExpertise/>
        <Vision/>
        <ContactForm/>
        {/* <Faqs/> */}
    </div>

        
    </>
  )
}
