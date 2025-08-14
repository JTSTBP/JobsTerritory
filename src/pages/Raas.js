import React, { useState } from "react";
import Navbar from "../components/home/Navbar";
import Bannersection from "../components/Raas/banner";

import { ArrowUpRight, Users, TrendingUp, Target, Award } from "lucide-react";
import WhychooseRaas from "../components/Raas/whychoose";
import HowItWorks from "../components/Raas/howitworks";
import RaaSCarousel from "../components/Raas/carousel";
import Footer from "../components/home/footer";
import AboutJobsTerritory from "../components/Raas/about";
import BlogsSection from "../components/Raas/blogs";


const RaasPage = () => {
  return (
    <div>
      <Navbar />
      <Bannersection
        backgroundImage="/images/herobgraas.png"
        heading="Zero Commissions. Zero Hassle."
        paragraph="A fully managed hiring engine built for speed and scale."
        features={[
          { icon: <Users size={18} />, text: "Expert Recruiters" },
          { icon: <TrendingUp size={18} />, text: "Fast Turnaround" },
          { icon: <Target size={18} />, text: "Perfect match" },
          { icon: <Award size={18} />, text: "Quality Assured" },
        ]}
        primaryButtonText="Book a Demo"
        secondrybuttontext="Submit Role Brief"
        onPrimaryButtonClick={() => console.log("Demo clicked")}
        showBottomButton={true}
      />
      <WhychooseRaas />
      <HowItWorks />
      <RaaSCarousel />
      {/* <AboutJobsTerritory />
      <BlogsSection/>
      <Footer/> */}
    </div>
  );
};

export default RaasPage;
