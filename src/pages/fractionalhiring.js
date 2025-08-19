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
        heading="Your Growth Accelerator, On Demand"
        heading1="Fractional Hiring"
        paragraph="When projects can’t wait months for leadership, we connect you with battle-tested industry experts who deliver measurable impact within days — without the cost or commitment of full-time hires."
        primaryButtonText="Explore"
        secondrybuttontext="Book a call"
        onPrimaryButtonClick={() => console.log("Demo clicked")}
        showBottomButton={true}
      />
      <Whysection />
      <ProjectBasedWorkCard />
      <BenefitsCard />
      <HireSection
        title="Ready to See Impact in Weeks, "
        highlight=" Not Months?"
        description="Let’s bring in a leader who can accelerate growth, solve high-stake challenges, or execute critical projects — exactly when you need them.
"
        buttonText="Start Fractional Hiring"
        backgroundImage="/images/trasfrom.png"
      />
      <FAQSection />
      <Footer />
    </div>
  );
};

export default FractionalHiring;
