
import React from "react";
import { Circle } from "lucide-react";

const CaseStudyCard = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center items-start gap-12 p-12 bg-white">
      {/* Left Card */}
      <div className="md:w-2/4 lg:w-1/4 w-full rounded-2xl shadow-lg p-8 bg-gradient-to-b from-purple-100 to-purple-300 text-center">
        {/* Logo */}
        <div className="flex justify-center mb-6">
          <img
            src="/images/bigbasket.png"
            alt="BigBasket Logo"
            className="w-38 h-38"
          />
        </div>

        {/* Title */}
        <h1 className="text-3xl font-bold text-purple-900 mb-3">bigbasket</h1>
        <p className="text-base font-medium text-purple-800 mb-8 leading-relaxed">
          Hire Top Candidates Perfectly <br /> Matched by Job, 10X Faster!
        </p>

        {/* Case Study Sections */}
        <div className="text-left mb-8">
          <p className="font-semibold text-base text-purple-800 mb-3">
            IN THIS CASE STUDY:
          </p>
          <ul className="space-y-2 text-base text-purple-900">
            <li className="bg-purple-200 px-3 py-1 rounded-lg inline-block">
              About Big Basket case study
            </li>
            <li>The Challenge</li>
            <li>Job Territory’s Solution</li>
            <li>Results and Impact</li>
            <li>Testimonials from Big Basket Case Study</li>
          </ul>
        </div>

        {/* Testimonial */}
        <div className="text-base text-purple-900 italic leading-relaxed">
          “Jobs Territory’s expertise in e-commerce hiring helped us onboard the
          right talent quickly. Their structured approach and deep industry
          knowledge made a significant impact on our operations. Highly
          recommended.”
        </div>
        <p className="text-sm mt-3 font-semibold text-purple-900">
          HR Manager, Big Basket
        </p>
      </div>

      {/* Right Card */}
      <div className="md:w-2/4 w-full bg-white shadow-lg rounded-2xl p-8 space-y-10">
        {/* Client Background */}
        <div>
          <h2 className="flex items-center gap-2 font-bold text-purple-700 text-xl">
            <Circle className="w-4 h-4 fill-purple-700 text-purple-700" />
            Client Background
          </h2>
          <p className="text-base text-gray-700 mt-3 leading-relaxed">
            Big Basket is India’s leading online grocery delivery platform. With
            the growing demand for online grocery services, Big Basket needed to
            expand its team by hiring professionals with expertise in supply
            chain management, logistics, and customer service.
          </p>
        </div>

        {/* Challenge */}
        <div>
          <h2 className="flex items-center gap-2 font-bold text-purple-700 text-xl">
            <Circle className="w-4 h-4 fill-purple-700 text-purple-700" />
            Challenge
          </h2>
          <div className="space-y-4 mt-3 text-base text-gray-700">
            <div>
              <p className="font-semibold text-gray-900">Urgent Hiring Needs</p>
              <p>
                Big Basket needed to hire 5+ skilled professionals quickly to
                support their growing operations.
              </p>
            </div>
            <div>
              <p className="font-semibold text-gray-900">
                E-commerce & Supply Chain Expertise
              </p>
              <p>
                Required candidates with experience in retail operations,
                warehouse management, and customer support.
              </p>
            </div>
            <div>
              <p className="font-semibold text-gray-900">
                Tight Hiring Timeline
              </p>
              <p>
                Recruitment needed to be completed quickly to meet the
                fast-paced demands of the e-commerce industry.
              </p>
            </div>
          </div>
        </div>

        {/* Solution */}
        <div>
          <h2 className="flex items-center gap-2 font-bold text-purple-700 text-xl">
            <Circle className="w-4 h-4 fill-purple-700 text-purple-700" />
            Solution Provided by Jobs Territory
          </h2>
          <div className="space-y-4 mt-3 text-base text-gray-700">
            <div>
              <p className="font-semibold text-gray-900">
                E-commerce-Specific Talent Sourcing
              </p>
              <p>
                Identified and engaged professionals with relevant experience in
                retail operations, warehouse management, and customer support.
              </p>
            </div>
            <div>
              <p className="font-semibold text-gray-900">
                Pre-Screening & Skill Assessment
              </p>
              <p>
                Conducted thorough evaluations to ensure candidates met Big
                Basket’s high operational standards.
              </p>
            </div>
            <div>
              <p className="font-semibold text-gray-900">
                Efficient Hiring & Onboarding Support
              </p>
              <p>
                Streamlined the recruitment process for a seamless transition of
                new hires into their roles.
              </p>
            </div>
          </div>
        </div>

        {/* Results */}
        <div>
          <h2 className="flex items-center gap-2 font-bold text-purple-700 text-xl">
            <Circle className="w-4 h-4 fill-purple-700 text-purple-700" />
            Results Achieved
          </h2>
          <div className="grid grid-cols-3 gap-6 mt-6">
            <div className="bg-purple-100 rounded-lg p-4 text-center">
              <p className="text-2xl font-bold text-purple-800">95%</p>
              <p className="text-sm text-gray-700">New Hires</p>
            </div>
            <div className="bg-purple-100 rounded-lg p-4 text-center">
              <p className="text-2xl font-bold text-purple-800">5+</p>
              <p className="text-sm text-gray-700">Professionals Placed</p>
            </div>
            <div className="bg-purple-100 rounded-lg p-4 text-center">
              <p className="text-2xl font-bold text-purple-800">25%</p>
              <p className="text-sm text-gray-700">Optimized Operations</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudyCard;
