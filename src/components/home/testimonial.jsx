
import React, { useState, useEffect } from "react";
import { FaQuoteLeft } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    name: "Rajesh Kumar",
    title: "Founder & CEO",
    company: "InnovateLabs",
    image: "/images/clientsay.png",
    quote:
      "The Pay Per Hire model was perfect for our startup phase. We got access to top-tier talent without the financial risk of traditional recruitment agencies. Jobs Territory's team became an extension of our HR department.",
  },
  {
    name: "Priya Sharma",
    title: "Head of Talent Acquisition",
    company: "TechVision Solutions",
    image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg",
    quote:
      "Jobs Territory transformed our hiring process completely. Their RAAS model provided us with dedicated recruiters who understood our culture and technical requirements perfectly.",
  },
];

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(
      () => setCurrentIndex((prev) => (prev + 1) % testimonials.length),
      6000
    );
    return () => clearInterval(interval);
  }, []);

  const testimonial = testimonials[currentIndex];

  return (
    <div className="bg-[#EFEFEF] py-12 md:px-20 font-inter text-[#1B084C]">
      {/* Heading */}
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
         <div className="flex justify-center mb-6">
                    <motion.div
                      initial={{ width: 0, opacity: 0 }}
                      whileInView={{ width: 160, opacity: 1 }}
                      transition={{ duration: 0.8 }}
                      viewport={{ once: true }}
                      className="h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                    />
                  </div>
        <h2 className="text-3xl md:text-4xl font-bold  font-museo inline-block pb-2">
          What Clients Say
        </h2>
        <p className=" mt-2">
          Don't just take our word for it. Here's what our clients have to say
          about their experience with Jobs Territory
        </p>
      </motion.div>

      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          className="w-full  flex flex-col md:flex-row items-start justify-center px-4 py-12 md:py-16 rounded-lg "
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.6 }}
        >
          {/* Left Section */}
          <motion.div
            className="relative flex flex-col items-center"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <img
              src={testimonial.image}
              alt={testimonial.company}
              className="w-80 h-90 object-contain"
            />
            <div className="text-center md:text-left mt-4 font-museo">
              <p className="text-[#6A1FFF] font-medium">{testimonial.title}</p>
              <p className="font-semibold">{testimonial.company}</p>
            </div>
          </motion.div>

          {/* Right Section */}
          <motion.div
            className="mt-8 md:mt-0 md:ml-12 max-w-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h2 className="text-xl font-bold text-[#6A1FFF] font-museo">
              {testimonial.name}
            </h2>
            <div className="flex items-start mt-4">
              <FaQuoteLeft className="text-[#6A1FFF] text-xl mr-3 mt-1" />
              <p className="text-base leading-relaxed">{testimonial.quote}</p>
            </div>
          </motion.div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default Testimonial;
