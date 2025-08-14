import React, { useState } from "react";
import Navbar from "../components/home/Navbar";
import Bannersection from "../components/Raas/banner";

import { ArrowUpRight, Users, TrendingUp, Target, Award } from "lucide-react";
import Whysection from "../components/fractionalhiring/whatsection";
import ProjectBasedWorkCard from "../components/fractionalhiring/usecases";
import Footer from "../components/home/footer";
import BenefitsCard from "../components/fractionalhiring/benifits";
import HireSection from "../components/commonsections/ready";
import FAQSection from "../components/home/faqs";

const FractionalHiring = () => {
  return (
    <div>
      <Navbar />
      <Bannersection
        backgroundImage="/images/herobgfh.png"
        heading="Flexible. Affordable. Expert."
        heading1="Fractional Hiring"
        paragraph="Access top-tier talent on a part-time or project basis. Perfect for specialized roles, seasonal needs, or when you need expertise without full-time commitment."
        primaryButtonText="Explore"
        secondrybuttontext="Book a call"
        onPrimaryButtonClick={() => console.log("Demo clicked")}
        showBottomButton={true}
      />
      <Whysection />
      <ProjectBasedWorkCard />
      <BenefitsCard />
      <HireSection
        title="Ready to Try"
        highlight=" Fractional Hiring?"
        description="StAccess top-tier talent without the full-time commitment. Perfect for projects,  
                                       seasonal needs, and specialized expertise.
"
        buttonText="Start Fractional Hiring"
        backgroundImage="/images/trasfrom.png"
      />
      <FAQSection/>
      <Footer />
    </div>
  );
};

export default FractionalHiring;
