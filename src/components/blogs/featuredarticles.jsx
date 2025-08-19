import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const articles = [
  // Put all your articles here (array of objects)
  {
    id: 1,
    title: "How to Scale Your Team Without Compro...",
    time: "4 Mins read",
  },
  {
    id: 2,
    title: "5 Hiring Myths That Slow Down Your Busine...",
    time: "4 Mins read",
  },
  {
    id: 3,
    title: "How to Build a Reliable E-Commerce Team...",
    time: "4 Mins read",
  },
  {
    id: 4,
    title: "Best Hiring Partner for Manufacturing Job",
    time: "4 Mins read",
  },
  {
    id: 5,
    title: "Top FMCG Recruitment Agency for Your Bu...",
    time: "4 Mins read",
  },
  {
    id: 6,
    title: "Top Healthcare Recruitment Agency for Ex...",
    time: "4 Mins read",
  },

  {
    id: 7,
    title: "How to Build a Reliable E-Commerce Team...",
    time: "4 Mins read",
  },
  {
    id: 8,
    title: "Best Hiring Partner for Manufacturing Job",
    time: "4 Mins read",
  },
  {
    id: 9,
    title: "Top FMCG Recruitment Agency for Your Bu...",
    time: "4 Mins read",
  },
  {
    id: 10,
    title: "Top Healthcare Recruitment Agency for Ex...",
    time: "4 Mins read",
  },
  {
    id: 11,
    title: "How to Scale Your Team Without Compro...",
    time: "4 Mins read",
  },
  {
    id: 12,
    title: "5 Hiring Myths That Slow Down Your Busine...",
    time: "4 Mins read",
  },
  {
    id: 13,
    title: "How to Build a Reliable E-Commerce Team...",
    time: "4 Mins read",
  },
  {
    id: 14,
    title: "Best Hiring Partner for Manufacturing Job",
    time: "4 Mins read",
  },
  {
    id: 15,
    title: "Top FMCG Recruitment Agency for Your Bu...",
    time: "4 Mins read",
  },
  {
    id: 16,
    title: "Top Healthcare Recruitment Agency for Ex...",
    time: "4 Mins read",
  },

  {
    id: 17,
    title: "How to Build a Reliable E-Commerce Team...",
    time: "4 Mins read",
  },
  {
    id: 18,
    title: "Best Hiring Partner for Manufacturing Job",
    time: "4 Mins read",
  },
  {
    id: 19,
    title: "Top FMCG Recruitment Agency for Your Bu...",
    time: "4 Mins read",
  },
  {
    id: 20,
    title: "Top Healthcare Recruitment Agency for Ex...",
    time: "4 Mins read",
  },

  // ... add more (20–30 items for demo)
];

export default function FeaturedArticles() {
  const itemsPerPage = 9;
    const [page, setPage] = useState(0);
    const navigate=useNavigate()

  const startIndex = page * itemsPerPage;
  const currentItems = articles.slice(startIndex, startIndex + itemsPerPage);

  const handleNext = () => {
    if ((page + 1) * itemsPerPage < articles.length) {
      setPage(page + 1);
    }
  };

  const handlePrev = () => {
    if (page > 0) {
      setPage(page - 1);
    }
  };

  return (
    <div className="p-6 text-[#1B084C]">
      <h2 className="text-2xl md:text-4xl font-bold text-center mb-2">Featured Articles</h2>
      <p className="text-center  mb-6">
        Our most popular and insightful articles on recruitment and career
        development
      </p>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {currentItems.map((item) => (
          <div key={item.id} className="bg-gray-200 p-4 rounded-xl shadow" onClick={()=>navigate("/eachBlog")}>
            <div className="h-28 bg-gray-400 rounded mb-3"></div>
            <h3 className="font-semibold text-lg">
              {item.title} {item.id}
            </h3>
            <p className="text-sm text-[#240960]">{item.time}</p>
          </div>
        ))}
      </div>

      {/* Controls */}
      <div className="flex justify-end items-center gap-6 mt-6">
        {page > 0 && (
          <button
            onClick={handlePrev}
            className="px-4 py-2 rounded-lg bg-purple-600 text-white"
          >
            &lt; Prev
          </button>
        )}

        {(page + 1) * itemsPerPage < articles.length && (
          <button
            onClick={handleNext}
            className="px-4 py-2 rounded-lg bg-purple-600 text-white"
          >
            {page === 0 ? "View More" : "Next >"}
          </button>
        )}
      </div>
    </div>
  );
}
