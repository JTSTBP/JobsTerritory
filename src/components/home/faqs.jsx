

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqData = [
  {
    question: "How does Recruitment as a service (RAAS) work?",
    icon: "/images/f1.png",
    answer:
      "Recruitment as a Service (RaaS) provides on-demand hiring support with flexible pricing and dedicated recruiting experts.",
  },
  {
    question: "What is Pay Per Hire and how does pricing work?",
    icon: "/images/f2.png",
    answer:
      "Pay Per Hire allows you to pay only for successful placements. Pricing is based on the role and level of expertise required.",
  },
  {
    question: "What type of industries do you serve?",
    icon: "/images/f3.png",
    answer:
      "We serve multiple industries including IT, Healthcare, Finance, Manufacturing, and more.",
  },
  {
    question: "How fast is your hiring turnaround time?",
    icon: "/images/f4.png",
    answer:
      "Our average hiring turnaround time is 2–4 weeks depending on the role and complexity.",
  },
  {
    question: "How do you ensure candidate quality and cultural fit?",
    icon: "/images/f5.png",
    answer:
      "We conduct multiple interview rounds, skills assessments, and cultural fit analysis to ensure quality hires.",
  },
  {
    question: "How do I get started with Jobs Territory?",
    icon: "/images/f6.png",
    answer:
      "Simply contact us, share your hiring needs, and our team will onboard you within 24 hours.",
  },
  {
    question: "What guarantees do you provide?",
    icon: "/images/f7.png",
    answer:
      "We provide replacement guarantees for a set period in case the hired candidate leaves early.",
  },
];

const FAQSection = () => {

  const [openIndex, setOpenIndex] = useState(null);


  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div>
      {/* FAQ Section */}
      <section className="bg-[#EFEFEF] text-[#1B084C] py-16 px-7">
        <img src="/images/line.png" className="w-full mb-6" alt="decor" />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
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
          <h2 className="text-3xl font-bold mb-2 font-museo">
            Frequently Asked Questions
          </h2>
          <p className="mb-8">
            Get answers to common questions about our recruitment services and
            processes
          </p>

          <div className="space-y-4">
            {faqData.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <motion.div
                  whileHover={{ scale: 1.01 }}
                  className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden cursor-pointer"
                  onClick={() => toggleFAQ(index)}
                >
                  <motion.div
                    className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
                    whileHover={{ backgroundColor: "rgba(249, 250, 251, 0.9)" }}
                  >
                    <div className="flex items-center space-x-4">
                      <motion.div
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ duration: 0.3 }}
                        className="w-12 h-12 rounded-xl flex items-center justify-center shadow-md bg-white"
                      >
                        <img src={faq.icon} alt="icon" className="w-6 h-6" />
                      </motion.div>
                      <h3 className="text-lg font-semibold text-[#1B084C] group-hover:text-[#6A1FFF] transition-colors">
                        {faq.question}
                      </h3>
                    </div>

                    <motion.div
                      animate={{ rotate: openIndex === index ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="text-2xl font-bold text-[#6A1FFF]"
                    >
                      {openIndex === index ? "−" : "+"}
                    </motion.div>
                  </motion.div>

                  <AnimatePresence>
                    {openIndex === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden px-6 pb-6"
                      >
                        <motion.p
                          initial={{ y: -10, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          transition={{ delay: 0.1 }}
                          className="text-[#6A1FFF] font-museo leading-relaxed mt-2"
                        >
                          {faq.answer}
                        </motion.p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

    </div>
  );
};

export default FAQSection;
