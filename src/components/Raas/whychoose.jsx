import { FaUsers, FaLightbulb, FaChartLine, FaSync } from "react-icons/fa";

export default function WhychooseRaas() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-12 text-[#1B084C] ">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        {/* LEFT: Text + Features */}
        <div className="">
          {/* Heading */}
          <div className="mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-4 font-museo">
              What Is JT RaaS?
            </h2>
            <p className="text-base md:text-lg text-gray-700 max-w-3xl">
              JT RaaS is a plug-and-play hiring engine designed for startups and
              SMEs. Instead of paying per hire or building a full HR team, you
              get 2 dedicated recruiters + 1 account manager for ₹2L/month.
              Share as many roles as you need — we’ll handle sourcing,
              screening, and coordination.
            </p>
          </div>

          {/* Features Grid */}
          <div className=" overflow-hidden">
            <div className="flex items-start gap-4 p-6 ">
              {/* <FaUsers className="text-2xl text-primary-600 mt-1" /> */}
              <img
                alt="JT RaaS Illustration"
                className="w-[3rem]  h-auto"
                src={"/images/raasic1.png"}
              />
              <div>
                <h3 className="text-lg font-semibold mb-1 font-museo">
                  Dedicated Team Just for You
                </h3>
                <p className="text-gray-600">
                  A recruitment team embedded within your company.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-6 ">
              <img
                alt="JT RaaS Illustration"
                className="w-[3rem]  h-auto"
                src={"/images/raasic3.png"}
              />
              <div>
                <h3 className="text-lg font-semibold mb-1">
                  Aligned with Your Culture
                </h3>
                <p className="text-gray-600">
                  We understand your values, needs, and hiring goals.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-6 ">
              <img
                alt="JT RaaS Illustration"
                className="w-[3rem]  h-auto"
                src={"/images/raasic2.png"}
              />
              <div>
                <h3 className="text-lg font-semibold mb-1">
                  Scalable and Flexible
                </h3>
                <p className="text-gray-600">
                  A solution that grows with your business.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-6">
              <img
                alt="JT RaaS Illustration"
                className="w-[3rem]  h-auto"
                src={"/images/raasic4.png"}
              />
              <div>
                <h3 className="text-lg font-semibold mb-1">
                  Full-Cycle Hiring, Optimized!
                </h3>
                <p className="text-gray-600">
                  From sourcing to onboarding, we continuously improve.
                </p>
              </div>
            </div>
            <button className="whitespace-nowrap bg-gradient-to-r from-[#2D274B] to-[#5500FE] hover:bg-purple-700 text-white px-6 py-2 rounded-full text-sm font-medium transition-all duration-200 shadow-sm hover:shadow-md">
              Get Recruiter
            </button>
          </div>
        </div>

        {/* RIGHT: Image */}
        <div className="flex justify-center">
          <img
            src="/images/whyraas.png"
            alt="JT RaaS Illustration"
            className="rounded-lg  w-full md:w-1/2 lg:w-full h-auto object-cover"
          />
        </div>
      </div>
    </section>
  );
}
