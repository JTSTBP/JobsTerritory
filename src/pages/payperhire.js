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
        heading="Pay Per Hire  "
        heading1="Talent Without the Risk"
        paragraph="Hire with confidence — you pay only for successful placements. No upfront costs, no hidden fees, no ongoing commitments."
        primaryButtonText="Get Started"
        secondrybuttontext="Learn More"
        onPrimaryButtonClick={() => console.log("Demo clicked")}
        showBottomButton={true}
      />
      <WhyChoosePayPerHire />
      <PayPerHireProcess />
      <FAQSection />
      <Footer />
    </div>
  );
};

export default PayperHire;
