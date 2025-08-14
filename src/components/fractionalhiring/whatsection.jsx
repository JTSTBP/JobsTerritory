import { FaUsers, FaLightbulb, FaChartLine, FaSync } from "react-icons/fa";

export default function Whysection() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-12 text-[#1B084C] ">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        {/* LEFT: Text + Features */}
        <div className="">
          {/* Heading */}
          <div className="mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-4 font-museo">
              What is Fractional Hiring?
            </h2>
            <p className="text-base md:text-lg text-gray-700 max-w-3xl">
              Fractional hiring allows you to access specialized talent on a
              part-time, project-based, or seasonal basis. It's perfect for
              companies that need specific expertise without the commitment and
              cost of full-time employees.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2  border border-[#958C8C] rounded-lg overflow-hidden">
            <div className="flex items-start gap-4 p-6 border-[#958C8C] md:border-b  md:border-r">
              {/* <FaUsers className="text-2xl text-primary-600 mt-1" /> */}
              <img
                alt="JT RaaS Illustration"
                className="w-[3rem]  h-auto"
                src={"/images/fractionic1.png"}
              />
              <div>
                <h3 className="text-lg font-semibold mb-1 font-museo">
                  Senior Expertise, Fractional Cost
                </h3>
                <p className="text-gray-600">
                  A recruitment team embedded within your company.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-6 border-[#958C8C] md:border-b">
              <img
                alt="JT RaaS Illustration"
                className="w-[3rem]  h-auto"
                src={"/images/raasic3.png"}
              />
              <div>
                <h3 className="text-lg font-semibold mb-1">
                  Flexible Engagement Models
                </h3>
                <p className="text-gray-600">
                  Hire part-time, project-based, or seasonal—whatever fits your
                  need.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-6 border-[#958C8C] md:border-r">
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
                  No Long-Term Commitments
                </h3>
                <p className="text-gray-600">
                  Scale up or down without employment obligations.
                </p>
              </div>
            </div>
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
