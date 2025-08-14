import React, { useState } from "react";
import Navbar from "../components/home/Navbar";
import HeroSection from "../components/home/herosection";
import ClientLogos from "../components/home/clientslogo";
import Services from "../components/home/ourservices";
import SuccessStories from "../components/home/successstories";
import Testimonial from "../components/home/testimonial";
import IndustriesGrid from "../components/home/industriesgrid";

import Footer from "../components/home/footer";
import FAQSection from "../components/home/faqs";


const Homepage = () => {

 
  return (
  <div>
    <Navbar/>
    <HeroSection/>
    <ClientLogos/>
      <Services />
      <SuccessStories />
      <Testimonial />
      <IndustriesGrid />
      <FAQSection />
      <Footer/>
  </div>
  );
};

export default Homepage;
