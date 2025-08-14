import React, { useState } from "react";
import Navbar from "../components/home/Navbar";
import Bannersection from "../components/Raas/banner";
import WhyChoosePayPerHire from "../components/PayPerHire/whychoose";
import PayPerHireProcess from "../components/PayPerHire/process";
import Footer from "../components/home/footer";
import FAQSection from "../components/home/faqs";


const PayperHire = () => {
  return (
    <div>
      <Navbar />
      <Bannersection
        backgroundImage="/images/herobgpph.png"
        heading="Simple & Smart !"
        heading1="Pay Per Hire"
        paragraph="Risk-free recruitment solution. Pay only when we successfully place a candidate who joins your organization. No upfront costs, no retainer fees."
        primaryButtonText="Get Started"
        secondrybuttontext="Learn More"
        onPrimaryButtonClick={() => console.log("Demo clicked")}
        showBottomButton={true}
      />
      <WhyChoosePayPerHire />
      <PayPerHireProcess />
      <FAQSection/>
      <Footer />
    </div>
  );
};

export default PayperHire;
