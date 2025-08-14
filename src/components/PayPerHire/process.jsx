import React from "react";
import { motion } from "framer-motion";
import {
  Users,
  Target,
  Crown,
  ArrowRight,
  CheckCircle,
  Zap,
  Shield,
} from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Share Your Requirements",
    text: "Tell us about the role, required skills, experience level, and company culture fit you’re looking for.",
  },
  {
    number: "02",
    title: "We Source & Screen",
    text: "Our team sources candidates from our network and screens them thoroughly against your criteria.",
  },
  {
    number: "03",
    title: "Candidate Presentation",
    text: "We present only the most qualified candidates with detailed profiles and our assessment.",
  },
  {
    number: "04",
    title: "Interview & Selection",
    text: "You interview the candidates and make your selection. We support throughout the process.",
  },
  {
    number: "05",
    title: "Successful Placement",
    text: "Once the candidate joins and completes probation, you pay our success fee. That’s it!",
  },
];

export default function PayPerHireProcess() {
  return (
    <div>
      <section
        style={{
          backgroundImage: "url('/images/processbg.png')",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
        className=" text-white py-16 px-4 md:px-12 font-sans mt-10"
      >
        {/* Heading */}
        <div className="  mx-auto mb-14 flex flex-col justify-end items-end">
          <h2 className="text-3xl md:text-4xl  font-museo">
            How Pay Per Hire Works
          </h2>
          <p className="text-sm md:text-base mt-2 text-gray-200">
            Simple, transparent process with payment only upon successful
            placement.
          </p>
        </div>

        {/* Steps
      <div className="relative max-w-5xl mx-auto">

        <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-300 to-purple-500 transform -translate-x-1/2"></div>

        {steps.map((step, index) => (
          <div
            key={index}
            className={`relative flex flex-col md:flex-row items-center mb-14 ${
              index % 2 === 0 ? "md:justify-start" : "md:justify-end"
            }`}
          >

            <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white rounded-full border-4 border-purple-500 z-10"></div>

        
            <div
              className={`bg-[rgba(255,255,255,0.1)] backdrop-blur-sm p-6 rounded-lg shadow-lg w-full md:w-[45%] border border-white/20 ${
                index % 2 === 0 ? "md:mr-auto" : "md:ml-auto"
              }`}
            >
              <div className="flex items-center gap-2 mb-2">
                <span className="text-purple-300 font-bold">
                  {step.number}.
                </span>
                <h3 className="font-semibold text-white">{step.title}</h3>
              </div>
              <p className="text-sm text-gray-200">{step.text}</p>
            </div>
          </div>
        ))}
      </div> */}
        <div>
          <img src="/images/processimg.png" />
        </div>
      </section>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        viewport={{ once: true }}
        className="text-center"
      >
        <div className="bg-[#1b084ced]  text-white relative overflow-hidden py-16">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute top-4 right-4 w-16 h-16 border-2 border-white/20 rounded-full"
          />
          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="absolute bottom-4 left-4 w-8 h-8 bg-white/20 rounded-full"
          />

          <h3 className="text-3xl  mb-4 font-museo font-bold">
            Ready to Hire
            <span className="font-normal"> Risk-Free?</span>
          </h3>
          <p className="text-white/90 mb-6 max-w-2xl mx-auto font-inter">
            Start your risk-free recruitment journey today. No upfront costs, no
            long- term commitments.
          </p>
          <motion.button
            whileHover={{
              scale: 1.05,
              boxShadow: "0 20px 40px rgba(0,0,0,0.2)",
            }}
            whileTap={{ scale: 0.95 }}
            className="text-[#1B084C] bg-white text-primary-600 px-8 py-4 rounded-2xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 inline-flex items-center space-x-2"
          >
            <span>Start Hiring Now </span>
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
}
