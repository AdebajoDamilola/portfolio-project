import React from 'react'
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroImg2 from '../components/HeroImg2';
import Form from '../components/Form'

const Contact = () => {
  return (
    <>
      <Navbar />
      <HeroImg2 heading="CONTACT." text=" Reach out to me." />
      <Form />
      <Footer />
    </ >
  )
}

export default Contact
