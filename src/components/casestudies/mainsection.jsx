import { ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function CaseStudiesMain() {
  const caseStudies = [
    {
      logo: "/images/bigbasket.png",
      company: "Big Basket",
      title:
        "Helping BigBasket Build Its E-Commerce Team With 5+ Skilled Hires",
      description:
        "Big Basket is India’s leading online grocery delivery platform. With the growing demand for online grocery services, Big Basket needed to expand its t...",
      link: "#",
    },
    {
      logo: "/images/portea.png",
      company: "Portea Heal at Home ",
      title:
        "Helping Portea Build Its Healthcare Team With 9+ Expert Professionals",
      description:
        "Portea is a leading provider of home healthcare services, offering specialized patient care solutions in the comfort of patients' homes. With increasing demand for h...",
      link: "#",
    },
    {
      logo: "/images/pnsta.png",
      company: "Pasta St ",
      title:
        "Case Study: Strengthening Pasta St’s Team With Over 3 Skilled Hires",
      description:
        "Pasta St is a growing food and restaurant brand, committed to delivering high-quality dining experiences with a focus on exceptional customer servic....",
      link: "#",
    },
    {
      logo: "/images/unac.png",
      company: "Unacademy ",
      title:
        "Case Study: Closing 84 Business Development Positions for Unacademy in a Single Month",
      description:
        "Unacademy, India’s leading ed-tech platform, is known for empowering learners with high-quality educational content and personalized learning experiences. To strengthen its .....",
      link: "#",
    },
    {
      logo: "/images/flobiz.png",
      company: "Flobiz ",
      title:
        "Case Study: Hiring Over 150 Business Development Executives for FloBiz in FY 2021–2022",
      description:
        "FloBiz, a fast-growing neobank for SMEs, is transforming the way small businesses manage finances with its flagship product, myBillBook. To support its rapi.....",
      link: "#",
    },
  ];

  return (
    <section className=" py-16 text-[#1B084C]">
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="md:text-4xl text-3xl font-bold font-museo">
          Case Studies
        </h2>
        <p className=" mt-2 max-w-2xl mx-auto">
          Explore how Job Territory has helped businesses find exceptional
          talent and transform their teams.
        </p>
      </div>

      {/* Case Study List */}
      <div className="max-w-5xl mx-auto space-y-8 ">
        {caseStudies.map((study, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-2xl p-6 flex flex-col md:flex-row gap-6 items-center"
          >
            {/* Left: Logo */}
            <div className="flex-shrink-0 bg-[#D5CDFF]">
              <img
                src={study.logo}
                alt={study.company}
                className="w-40 h-40 rounded-xl object-contain  p-4"
              />
            </div>

            {/* Right: Content */}
            <div className="flex flex-col justify-between gap-5">
              <h4 className=" font-medium">{study.company}</h4>
              <h3 className="text-xl md:text-2xl font-bold mt-1 text-[#6A1FFF]">
                {study.title}
              </h3>
              <p className=" mt-2">{study.description}</p>

              {/* Button */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 mt-5 "
              >
                <button className="xl:w-[230px] flex items-center justify-center bg-gradient-to-r from-[#2c1361] to-[#7300ff] text-white text-sm font-medium px-6 py-2 rounded-full border-2 border-[#cfc0ff] shadow-md">
                  View Case Study
                </button>
                <div className="w-1 h-0.5 bg-[#cfc0ff]" />
                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gradient-to-br from-[#2c1361] to-[#7300ff] border-2 border-[#cfc0ff] shadow-md">
                  <ArrowUpRight
                    size={18}
                    strokeWidth={2}
                    className="text-white"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
