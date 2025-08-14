

import React from "react";
import { motion } from "framer-motion";

const ClientLogos = () => {
  const stats = [
    { value: "500+", label: "Companies Served" },
    { value: "10K+", label: "Successful Placements" },
    { value: "95%", label: "Client Retention" },
    { value: "48hrs", label: "Average Response" },
  ];

  const images = [
    "/images/img1.png",
    "/images/img2.png",
    "/images/img3.png",
    "/images/img4.png",
  ];

  const allImages = [...images, ...images];

  return (
    <section className="py-16 bg-[#EFEFEF] overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 text-[#1B084C]"
        >
          <h2 className="text-3xl font-bold font-museo mb-4">
            Trusted by Leading Companies
          </h2>
          <p className="max-w-2xl mx-auto font-inter">
            We've helped hundreds of companies across India find their perfect
            talent match
          </p>
        </motion.div>
      </div>

      {/* Scrolling Images */}
      <div className="relative overflow-hidden">
        <div className="w-full flex justify-center">
          <div className="relative w-4/5 overflow-hidden">
            <div className="flex animate-scroll">
              {allImages.map((src, i) => (
                <div
                  key={i}
                  className="w-1/3 sm:w-1/5 flex-shrink-0 flex justify-center px-2 sm:px-4"
                >
                  <img
                    src={src}
                    alt={`slide-${i}`}
                    className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Background Image with Logo */}
      <div className="relative w-full h-20 sm:h-40 clip-bg">
        <img
          src="/images/vector.png"
          alt="background"
          className="w-full h-full "
        />

        {/* Logo */}
        <img
          src="/images/unac.png"
          alt="Unacademy"
          className="
    absolute
    top-2 left-4 sm:top-3 sm:left-16
    md:top-4 md:left-20 lg:top-6 lg:left-24
    w-20 sm:w-32 md:w-40 lg:w-48
  "
        />
      </div>

      {/* Stats Circles with Motion */}
      <div className="relative flex justify-center gap-8 flex-wrap bg-white pb-24 ">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            whileHover={{ scale: 1.1 }}
            viewport={{ once: true }}
            className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-52 lg:h-52 bg-violet-100 rounded-full flex flex-col justify-center items-center text-center shadow-md border-4 border-[#DAD4FF]"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-bold text-[#6A1FFF]">
              {stat.value}
            </h2>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl mt-2 text-[#1B084C]">
              {stat.label}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ClientLogos;
