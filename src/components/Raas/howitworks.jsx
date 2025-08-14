

export default function HowItWorks() {
  const steps = [
    {
      icon: "/images/cas1.png", // Replace with actual SVG if needed
      title: "Submit Role Briefs",
      description: "Your hiring starts with a simple form or WhatsApp message.",
    },
    {
      icon: "/images/cas2.png",
      title: "We Source & Screen",
      description:
        "Our team begins sourcing, screening, and shortlisting within hours.",
    },
    {
      icon: "/images/cas3.png",
      title: "Get CVs in 72 Hours",
      description: "We share relevant profiles — you decide who to interview.",
    },
    {
      icon: "/images/cas4.png",
      title: "We Coordinate Interviews",
      description:
        "Your account manager handles scheduling, reminders, and feedback loops.",
    },
  ];

  return (

      <section className="bg-[#D5CDFF] py-12 px-6 text-[#1B084C]">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="grid md:grid-cols-2 gap-6 mb-10">
            <h1 className="  text-3xl sm:text-4xl font-bold font-museo">
              HOW JT RAAS WORKS
            </h1>
            <p className="font-semibold">
              Our streamlined and efficient recruitment process ensures you get
              the right talent, at the right time, perfectly aligned with your
              business goals—saving you time, effort, and resources.
            </p>
          </div>

          {/* Steps */}
          <div className="grid md:grid-cols-4 gap-6">
            {steps.map((step, index) => (
              <div
                key={index}
                className="bg-purple-200 rounded-xl p-6 text-center shadow hover:shadow-lg transition"
              >
                <div className=" mb-4">
                  <img className="w-[4rem]" src={step.icon} />
                </div>
                <h3 className="text-lg text-2xl font-semibold  mb-2">
                  {step.title}
                </h3>
                <p className=" text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    
  );
}
