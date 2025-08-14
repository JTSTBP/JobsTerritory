
import { motion } from "framer-motion";
import { Zap, Shield } from "lucide-react";

export default function ProjectBasedWorkCard() {
  const cards = [
    {
      icon: <img className="w-[3rem]" src="/images/cas1.png" />,
      title: "Project-Based Work",
      description:
        "Need expertise for a specific project with defined timelines and deliverables.",
      points: [
        "Product launches",
        "Digital transformations",
        "Market research",
      ],
    },
    {
      icon: <img className="w-[3rem]" src="/images/cas2.png" />,
      title: "Seasonal Demands",
      description:
        "Handle peak seasons or cyclical business needs without permanent hires.",
      points: ["Holiday sales", "Tax season", "Event management"],
    },
    {
      icon: <img className="w-[3rem]" src="/images/cas3.png" />,
      title: "Specialized Skills",
      description:
        "Access niche expertise that you don't need full-time but is critical for success.",
      points: ["Data science", "Cybersecurity", "Compliance"],
    },

    {
      icon: <img className="w-[3rem]" src="/images/cas4.png" />,
      title: "Interim Leadership",
      description:
        "Fill leadership gaps while searching for permanent hires or during transitions.",
      points: ["Interim CTO", "Project Manager", "Department heads"],
    },
    {
      icon: <img className="w-[3rem]" src="/images/cas5.png" />,
      title: "Risk Mitigation",
      description:
        "Test talent and cultural fit before making full-time commitments.",
      points: ["Trial periods", "Skill validation", "Team Dynamic"],
    },
    {
      icon: <img className="w-[3rem]" src="/images/cas6.png" />,
      title: "Quick Scaling",
      description:
        "Rapidly scale your team for urgent needs without lengthy hiring processes.",
      points: [
        "Emergency projects",
        "Competitive responses",
        "Market opportunities",
      ],
    },
  ];

    return (
      <div>
        <section className="bg-[#D7CCF5] py-12 px-4 text-[#1B084C]">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="text-3xl font-bold  font-museo">
              Perfect Use Cases
            </h1>
            <p className=" mt-2">
              Fractional hiring works best for these scenarios
            </p>

            <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
              {cards.map((card, idx) => (
                <div
                  key={idx}
                  className="bg-[#EAE6FA] rounded-2xl p-6 border border-[#D3CCF5] text-left"
                >
                  <div>{card.icon}</div>
                  <h2 className="text-lg font-semibold  mt-3">{card.title}</h2>
                  <p className="text-sm  mt-2 leading-relaxed">
                    {card.description}
                  </p>
                  <ul className="mt-4 space-y-1 text-sm  list-disc list-inside">
                    {card.points.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div
            className="  text-white relative overflow-hidden py-16"
            style={{
              backgroundImage: `url('/images/trasfrom.png')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute top-4 right-4 w-16 h-16 border-2 border-white/20 rounded-full"
            />
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute bottom-4 left-4 w-8 h-8 bg-white/20 rounded-full"
            />

            <h3 className="text-2xl  mb-4 font-museo">
              Ready to Try
              <span className="font-bold"> Fractional Hiring?</span>
            </h3>
            <p className="text-white/90 mb-6 max-w-2xl mx-auto font-inter">
              StAccess top-tier talent without the full-time commitment. Perfect
              for projects, seasonal needs, and specialized expertise.
            </p>
            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(0,0,0,0.2)",
              }}
              whileTap={{ scale: 0.95 }}
              className="text-[#1B084C] bg-white text-primary-600 px-8 py-4 rounded-2xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 inline-flex items-center space-x-2"
            >
              <span>Start Fractional Hiring </span>
            </motion.button>
          </div>
        </motion.div>
      </div>
    );
}
