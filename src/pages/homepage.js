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


import { motion, AnimatePresence } from "framer-motion";


const Homepage = () => {

 
  return (
    <div>
      <Navbar />
      <HeroSection />
      <ClientLogos />
      <Services />
      <SuccessStories />
      <Testimonial />
      <IndustriesGrid />
      <FAQSection />

      {/* Bottom CTA Section */}
      <section
        className="relative bg-cover bg-center text-center bg-[#EFEFEF]"
        style={{
          backgroundImage: "url('/images/footbg.png')",
          backgroundPosition: "unset",
        }}
      >
        <div className="py-24 px-4 relative overflow-hidden">
          {/* Animated BG Elements */}
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
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, delay: 1 }}
            className="absolute top-1/2 left-8 w-6 h-6 bg-white/10 rounded-full"
          />

          <div className="relative z-10">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-light text-white mb-4 font-museo"
            >
              Still Have <span className="font-bold">Questions?</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-white text-base md:text-lg max-w-2xl mx-auto mb-8"
            >
              Our recruitment experts are here to help. Get in touch for a
              personalized consultation about your hiring needs.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row justify-center gap-4 font-museo"
            >
              <motion.button
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 10px 20px rgba(0,0,0,0.2)",
                }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-[#1B084C] font-medium py-3 px-6 rounded-full shadow hover:bg-gray-100 transition"
              >
                Contact experts
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-[#1B084C] font-medium py-3 px-6 rounded-full shadow hover:bg-gray-100 transition"
              >
                Schedule call
              </motion.button>
            </motion.div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Homepage;
