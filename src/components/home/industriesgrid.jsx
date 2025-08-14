// import React from "react";
// import { motion, AnimatePresence } from "framer-motion";

// const industries = [
//   {
//     title: "Technology & Startups",
//     description:
//       "Software engineers, product managers, data scientists, and tech leadership roles",
//     placements: "2000+",
//     bg: "images/bg1.png",
//     text: "text-[#FFFFFF]",
//   },
//   {
//     title: "Healthcare & Life Sciences",
//     description:
//       "Medical professionals, along with experts in pharmaceuticals, biotechnology, and healthcare administration, play a vital role in advancing patient care, driving medical innovation, ensuring regulatory compliance, and improving the overall efficiency and accessibility of healthcare systems.",
//     placements: "800+",
//     bg: "images/bg4.png",
//     text: "text-[#1B084C]",
//   },
//   {
//     title: "E-commerce & Retail",
//     description:
//       "Professionals specializing in digital marketing, operations, supply chain management, and customer experience play a crucial role in driving organizational growth, optimizing processes, and enhancing overall business performance.",
//     placements: "1500+",
//     bg: "images/bg2.png",
//     text: "text-[#FFFFFF]",
//   },
//   {
//     title: "BFSI",
//     description:
//       "Banking, financial services, insurance, fintech, and investment professionals drive growth and manage financial risk.",
//     placements: "1000+",
//     bg: "images/bg5.png",
//     text: "text-[#1B084C]",
//   },
//   {
//     title: "Manufacturing & Engineering",
//     description:
//       "Mechanical, electrical, industrial engineers, and production managers enhance efficiency and streamline manufacturing operations.",
//     placements: "1200+",
//     bg: "images/bg3.png",
//     text: "text-[#1B084C]",
//   },

//   {
//     title: "Media & Entertainment",
//     description:
//       "Content creators, digital marketers, production teams, and creative professionals build brand identity, engage audiences, and deliver impactful content across platforms.",
//     placements: "1500+",
//     bg: "images/bg6.png",
//     text: "text-[#FFFFFF]",
//   },
//   {
//     title: "Logistics & Supply Chain",
//     description:
//       "Operations, warehouse management, transportation, and supply chain optimization professionals are the backbone of business logistics. They coordinate end-to-end processes—ensuring smooth inventory flow, minimizing delays, managing resources efficiently, and integrating advanced technologies to enhance visibility, reduce costs, and improve overall performance across the supply chain.",
//     placements: "700+",
//     bg: "images/bg7.png",
//     large: true,
//     text: "text-[#FFFFFF]",
//   },
//   {
//     title: "Real Estate",
//     description:
//       "Professionals in property development, sales, marketing, and real estate investment play a key role in driving growth by planning and executing projects, attracting the right buyers, and maximizing returns through strategic market positioning.",
//     placements: "500+",
//     bg: "images/bg8.png",
//     text: "text-[#1B084C]",
//   },
// ];

// const IndustriesGrid = () => {
//   return (
//     <div className=" py-12 px-10 md:px-8 lg:px-16 bg-[#EFEFEF] text-[#1B084C]">
//       {/* Heading */}
//       <motion.div
//         className="text-center mb-12 text-[#1B084C]"
//         initial={{ opacity: 0, y: -30 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.7 }}
//       >
//         <h2 className="text-3xl md:text-4xl font-bold  font-museo inline-block pb-2">
//           Industries We Serve
//         </h2>
//         <p className=" mt-2">
//           From startups to Fortune 500 companies, we have deep expertise across
//           diverse industries and understand their unique talent requirements
//         </p>
//       </motion.div>
//       <div className=" mb-5 text-center">
//         <div className="columns-1 md:columns-3 gap-6 space-y-6">
//           {industries.slice(0, 6).map((item, index) => (
//             <div
//               style={{
//                 backgroundImage: `url(${item.bg})`,
//                 backgroundSize: "cover",
//                 backgroundPosition: "center",
//               }}
//               key={index}
//               className={`rounded-xl p-6  shadow-md break-inside-avoid  ${item.text}`}
//             >
//               <h3 className="text-xl font-bold mb-2">{item.title}</h3>
//               <p className="text-sm mb-4">{item.description}</p>
//               <div className="bg-[rgba(255,255,255,0.34)] rounded-2xl px-10 py-1 text-center w-fit mx-auto">
//                 <h2 className=" text-2xl font-bold">{item.placements}</h2>
//                 <p className=" text-lg">Placements</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Last 2 cards → one tall, one normal */}
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start text-center">
//         <div className="md:col-span-2">
//           <div
//             style={{
//               backgroundImage: `url(${industries[6].bg})`,
//               backgroundSize: "cover",
//               backgroundPosition: "center",
//             }}
//             className={`rounded-xl p-6  shadow-md  ${industries[6].text}`}
//           >
//             <h3 className="text-xl font-bold mb-2">{industries[6].title}</h3>
//             <p className="text-sm mb-4">{industries[6].description}</p>

//             <div className="bg-[#2E1B56] rounded-2xl px-10 py-1 text-center w-fit mx-auto">
//               <h2 className="text-white text-3xl font-bold">
//                 {industries[6].placements}
//               </h2>
//               <p className="text-white text-lg">Placements</p>
//             </div>
//           </div>
//         </div>

//         <div>
//           <div
//             style={{
//               backgroundImage: `url(${industries[7].bg})`,
//               backgroundSize: "cover",
//               backgroundPosition: "center",
//             }}
//             className={`rounded-xl p-6  shadow-md  ${industries[7].text}`}
//           >
//             <h3 className="text-xl font-bold mb-2">{industries[7].title}</h3>
//             <p className="text-sm mb-4">{industries[7].description}</p>
//             <div className="bg-[#2E1B56] rounded-2xl px-10 py-1 text-center w-fit mx-auto">
//               <h2 className="text-white text-3xl font-bold">
//                 {industries[7].placements}
//               </h2>
//               <p className="text-white text-lg">Placements</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default IndustriesGrid;
import React from "react";
import { motion } from "framer-motion";

const industries = [
  {
    title: "Technology & Startups",
    description:
      "Software engineers, product managers, data scientists, and tech leadership roles",
    placements: "2000+",
    bg: "images/bg1.png",
    text: "text-[#FFFFFF]",
  },
  {
    title: "Healthcare & Life Sciences",
    description:
      "Medical professionals, along with experts in pharmaceuticals, biotechnology, and healthcare administration, play a vital role in advancing patient care, driving medical innovation, ensuring regulatory compliance, and improving the overall efficiency and accessibility of healthcare systems.",
    placements: "800+",
    bg: "images/bg4.png",
    text: "text-[#1B084C]",
  },
  {
    title: "E-commerce & Retail",
    description:
      "Professionals specializing in digital marketing, operations, supply chain management, and customer experience play a crucial role in driving organizational growth, optimizing processes, and enhancing overall business performance.",
    placements: "1500+",
    bg: "images/bg2.png",
    text: "text-[#FFFFFF]",
  },
  {
    title: "BFSI",
    description:
      "Banking, financial services, insurance, fintech, and investment professionals drive growth and manage financial risk.",
    placements: "1000+",
    bg: "images/bg5.png",
    text: "text-[#1B084C]",
  },
  {
    title: "Manufacturing & Engineering",
    description:
      "Mechanical, electrical, industrial engineers, and production managers enhance efficiency and streamline manufacturing operations.",
    placements: "1200+",
    bg: "images/bg3.png",
    text: "text-[#1B084C]",
  },

  {
    title: "Media & Entertainment",
    description:
      "Content creators, digital marketers, production teams, and creative professionals build brand identity, engage audiences, and deliver impactful content across platforms.",
    placements: "1500+",
    bg: "images/bg6.png",
    text: "text-[#FFFFFF]",
  },
  {
    title: "Logistics & Supply Chain",
    description:
      "Operations, warehouse management, transportation, and supply chain optimization professionals are the backbone of business logistics. They coordinate end-to-end processes—ensuring smooth inventory flow, minimizing delays, managing resources efficiently, and integrating advanced technologies to enhance visibility, reduce costs, and improve overall performance across the supply chain.",
    placements: "700+",
    bg: "images/bg7.png",
    large: true,
    text: "text-[#FFFFFF]",
  },
  {
    title: "Real Estate",
    description:
      "Professionals in property development, sales, marketing, and real estate investment play a key role in driving growth by planning and executing projects, attracting the right buyers, and maximizing returns through strategic market positioning.",
    placements: "500+",
    bg: "images/bg8.png",
    text: "text-[#1B084C]",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.7, ease: "easeOut" },
  }),
};

const IndustriesGrid = () => {
  return (
    <div className="py-12 px-10 md:px-8 lg:px-16 bg-[#EFEFEF] text-[#1B084C]">
      {/* Heading */}
      <motion.div
        className="text-center mb-12 text-[#1B084C]"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
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
        <h2 className="text-3xl md:text-4xl font-bold font-museo inline-block pb-2">
          Industries We Serve
        </h2>
        <p className="mt-2">
          From startups to Fortune 500 companies, we have deep expertise across
          diverse industries and understand their unique talent requirements
        </p>
      </motion.div>

      {/* First 6 Cards */}
      <div className="mb-5 text-center">
        <div className="columns-1 md:columns-3 gap-6 space-y-6">
          {industries.slice(0, 6).map((item, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              whileHover={{
                scale: 1.05,
                boxShadow: "0px 10px 30px rgba(0,0,0,0.3)",
              }}
              style={{
                backgroundImage: `url(${item.bg})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
              className={`rounded-xl p-6 shadow-md break-inside-avoid ${item.text}`}
            >
              <h3 className="text-xl font-bold mb-2">{item.title}</h3>
              <p className="text-sm mb-4">{item.description}</p>
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{
                  delay: index * 0.3 + 0.4,
                  type: "spring",
                  stiffness: 100,
                }}
                className="bg-[rgba(255,255,255,0.34)] rounded-2xl px-10 py-1 text-center w-fit mx-auto"
              >
                <h2 className="text-2xl font-bold">{item.placements}</h2>
                <p className="text-lg">Placements</p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Last 2 Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start text-center">
        {/* Tall Card */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.5 }}
          className="md:col-span-2"
        >
          <div
            style={{
              backgroundImage: `url(${industries[6].bg})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            className={`rounded-xl p-6 shadow-md ${industries[6].text}`}
          >
            <h3 className="text-xl font-bold mb-2">{industries[6].title}</h3>
            <p className="text-sm mb-4">{industries[6].description}</p>
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 1.7, type: "spring" }}
              className="bg-[#2E1B56] rounded-2xl px-10 py-1 text-center w-fit mx-auto"
            >
              <h2 className="text-white text-3xl font-bold">
                {industries[6].placements}
              </h2>
              <p className="text-white text-lg">Placements</p>
            </motion.div>
          </div>
        </motion.div>

        {/* Normal Card */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2 }}
        >
          <div
            style={{
              backgroundImage: `url(${industries[7].bg})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            className={`rounded-xl p-6 shadow-md ${industries[7].text}`}
          >
            <h3 className="text-xl font-bold mb-2">{industries[7].title}</h3>
            <p className="text-sm mb-4">{industries[7].description}</p>
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 2.2, type: "spring" }}
              className="bg-[#2E1B56] rounded-2xl px-10 py-1 text-center w-fit mx-auto"
            >
              <h2 className="text-white text-3xl font-bold">
                {industries[7].placements}
              </h2>
              <p className="text-white text-lg">Placements</p>
            </motion.div>
          </div>
        </motion.div>
      </div>


      <div className="relative w-[90%] my-2 mx-auto h-[300px] md:h-full rounded-lg overflow-hidden">
        {/* Background Image */}
        <img
          src="/images/group.png"
          alt="Background"
          className="w-full h-full object-cover"
        />

        {/* Centered Text */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-[#1B084C] w-[80%]">
            <h2 className="text-2xl md:text-5xl font-light mb-2">
              Don't See Your <span className="font-bold">Industry?</span>
            </h2>
            <p className="max-w-2xl mx-auto mb-6 text-sm md:text-base">
              We're constantly expanding our expertise. Let's discuss how we can
              help you find the right talent for your specific industry needs.
            </p>
            <button className="bg-[#1B084C] text-white px-6 py-2 rounded-full hover:bg-purple-700 transition">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndustriesGrid;
