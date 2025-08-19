import { useState } from "react";
import { Search } from "lucide-react";

export default function BlogHeader() {
  const [active, setActive] = useState("All");

  const categories = [
    "All",
    "Recruitment",
    "HR Trends",
    "Industry Insights",
    "Technology",
    "Career Tips",
  ];

  return (
    <div className="flex flex-col items-center text-center py-12 text-[#1B084C] ">
      {/* Title */}
      <h1 className="text-3xl md:text-4xl font-bold ">Blogs</h1>
      <p className=" mt-2">Your Guide to Smarter Hiring and Career Growth</p>

      {/* Search Bar */}
      <div className="relative w-full max-w-md mt-6">
        <input
          type="text"
          placeholder="Search Articles..."
          className="w-full border border-[#9589D3] rounded-lg py-2 pl-10 pr-4 focus:outline-none "
        />
        <Search className="absolute left-3 top-2.5 text-[#9589D3] w-5 h-5" />
      </div>

      {/* Categories */}
      <div className="flex flex-wrap justify-center gap-3 mt-6">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={`px-4 py-1.5 rounded-lg border transition ${
              active === cat
                ? "bg-purple-600 text-white border-purple-600"
                : "border-purple-400 text-[#9589D3] hover:bg-purple-100"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>
    </div>
  );
}
