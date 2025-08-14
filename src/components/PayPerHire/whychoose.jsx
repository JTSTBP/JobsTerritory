import React, { useEffect, useState } from "react";

const WhyChoosePayPerHire = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 640); // Tailwind's 'sm' breakpoint is 640px
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);
  return (
    <section
      className="bg-cover bg-center bg-no-repeat py-8 px-4 md:px-12 h-auto sm:h-[112vh]"
      style={{
        backgroundImage: isMobile ? "none" : "url('/images/pph.png')",
        backgroundSize: "cover",
      }}
    >
      <div className="max-w-[45rem] mx-auto text-center mr-0 md:mr-5 lg:mr-10">
        <h2 className="text-2xl md:text-3xl font-bold text-[#1B084C] font-museo">
          Why Choose Pay Per Hire?
        </h2>
        <p className="mt-4 text-base md:text-lg text-[#1B084C]">
          Perfect for companies looking for cost-effective, risk-free
          recruitment solutions.
        </p>
      </div>

      <div className="max-w-[32rem] xl:max-w-[45rem] mx-auto mt-24 mr-0 md:mr-1 lg:mr-10 ">
        <h3 className="text-lg md:text-xl font-semibold text-[#5500FE]">
          No Upfront Costs :
        </h3>
        <p className="mt-2 text-base md:text-lg text-[#1B084C]">
          "Start with Zero Upfront Costs — Pay Only After We Successfully Place
          the Right Candidate for You!"
        </p>
      </div>
    </section>
  );
};

export default WhyChoosePayPerHire;
