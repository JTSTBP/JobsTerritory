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
import IndustriesGrid from "../components/home/industriesgrid";
import FAQSection from "../components/home/faqs";

const industries = [
  {
    title: "Portia Heal at home",
    description:
      "How Jobs Territory Helped Portea Hire 9+ Healthcare Professionals",
    placements: "2000+",
    bg: "images/bg1.png",
    text: "text-[#FFFFFF]",
    img: "/images/portea.png",
  },
  {
    title: "Nobroker",
    description:
      "How Jobs Territory Helped NoBroker Hire 200+ Professionals Across Multiple Roles in One Year (November 2021 to November 2022)",
    placements: "800+",
    bg: "images/bg4.png",
    text: "text-[#1B084C]",
    img: "/images/ind1.png",
  },
  {
    title: "Pentacle",
    description:
      "How Jobs Territory Helped Pentacle Hire 4+ Professionals to Strengthen Operations",
    placements: "1500+",
    bg: "images/bg2.png",
    text: "text-[#FFFFFF]",
    img: "/images/ind2.png",
  },
  {
    title: "Svamitva",
    description:
      "How Jobs Territory Helped Svamita Hire 3+ Professionals to Strengthen Operations in Real Estate and Infrastructure",
    placements: "1000+",
    bg: "images/bg2.png",
    text: "text-[#FFFFFF]",
    img: "/images/ind3.png",
  },
  {
    title: "MyGate",
    description:
      "How Jobs Territory Helped MyGate Hire 7+ Professionals to Support Growth",
    placements: "1200+",
    bg: "images/bg3.png",
    text: "text-[#1B084C]",
    img: "/images/ind4.png",
  },

  {
    title: "Nephroplus",
    description:
      "How Jobs Territory Helped NephroPlus Hire 10+ Professionals to Enhance Patient Care and Healthcare Operations",
    placements: "1500+",
    bg: "images/bg6.png",
    text: "text-[#FFFFFF]",
    img: "/images/ind5.png",
  },
  {
    title: "The Sleep Company",
    description:
      "How Jobs Territory Helped Torishima Hire 1+ Professional to Enhance Operational Efficiency",
    placements: "700+",
    bg: "images/bg8.png",
    large: true,
    text: "text-[#1B084C]",
    img: "/images/ind6.png",
  },
  {
    title: "Teachmint",
    description:
      "How Jobs Territory Helped Teachmint Hire 20+ Professionals to Support Growth",
    placements: "500+",
    bg: "images/bg7.png",

    text: "text-[#FFFFFF]",
    img: "/images/ind7.png",
  },
  {
    title: "Franklinn",
    description:
      "How Jobs Territory Helped Frankfinn Hire 4+ Professionals to Strengthen Their Training Programs",
    placements: "500+",
    bg: "images/bg8.png",
    text: "text-[#1B084C]",
    img: "/images/ind8.png",
  },
];

const faqData = [
  {
    question: "What is RAAS (Recruiter-as-a-Service)?",
    icon: "/images/f1.png",
    answer:
      "RAAS is a flexible recruitment subscription where Jobs Territory becomes your extended hiring team. You pay a fixed monthly cost and get unlimited hiring support without extra fees per candidate.",
  },
  {
    question: "How does RAAS differ from Pay Per Hire?",
    icon: "/images/f2.png",
    answer:
      "In Pay Per Hire, you pay per successful placement. In RAAS, you pay a flat monthly fee for unlimited roles, making it cost-effective for fast-scaling businesses.",
  },
  {
    question: "What are the main benefits of RAAS?",
    icon: "/images/f3.png",
    answer:
      "Fixed monthly cost, unlimited hiring, lightning-fast deployment (within 72 hours), and up to 40% savings compared to in-house hiring.",
  },
  {
    question: "Is there a limit on the number of hires under RAAS?",
    icon: "/images/f4.png",
    answer:
      "No limits at all. With RAAS, you can hire as many roles as needed during the subscription period at zero extra cost.",
  },
  {
    question: "Can RAAS handle bulk and niche roles together?",
    icon: "/images/f5.png",
    answer:
      "Yes, our team manages both volume hiring and specialized executive searches under the same subscription.",
  },
  {
    question: "Is RAAS suitable for startups and growing businesses?",
    icon: "/images/f6.png",
    answer:
      "Absolutely. Startups love RAAS because it gives them predictable costs, unlimited hires, and flexibility to scale without hiring an in-house HR team.",
  },
  {
    question: "How much does RAAS cost?",
    icon: "/images/f7.png",
    answer:
      "RAAS works on a fixed monthly subscription fee, customized to your business size and hiring needs—no hidden charges, no per-hire costs.",
  },
  {
    question: "How fast can RAAS start delivering results?",
    icon: "/images/f1.png",
    answer:
      "We can deploy a dedicated recruiter/team and start hiring for you within 72 hours of signup.",
  },
  {
    question: "Does RAAS include onboarding and management support?",
    icon: "/images/f2.png",
    answer:
      "Yes, RAAS covers hiring, onboarding, and candidate management to make the process completely seamless.",
  },
  {
    question: "Why choose Jobs Territory’s RAAS model?",
    icon: "/images/f3.png",
    answer:
      "Because you get unlimited hires at a fixed cost, faster scaling, DEI-aligned recruitment, and a trusted hiring partner that grows with your business.",
  },
];

const RaasPage = () => {
  return (
    <div>
      <Navbar />
      <Bannersection
        backgroundImage="/images/herobgraas.png"
        heading="Hire Without Limits"
        heading1="Grow Without Delays"
        paragraph="Your growth engine for Unlimited Hiring, a Fixed Monthly Fee, and Industry Experts delivering Faster, Guaranteed Results."
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
      <AboutJobsTerritory />
      <BlogsSection />
      <IndustriesGrid industries={industries} separate="true" />
      <FAQSection faqData={faqData}/>
      <Footer />
    </div>
  );
};

export default RaasPage;
