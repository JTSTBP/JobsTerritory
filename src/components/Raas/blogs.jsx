import { ArrowUpRight } from "lucide-react";

export default function BlogsSection() {
  const blogs = [
    {
      id: 1,
      title: "Why Smart Companies Are Switching to RAAS",
      image: "/images/blogsimg1.png",
    },
    {
      id: 2,
      title: "How to Scale Your Team Without Compromising",
      image: "/images/blogsimg.png",
    },
  ];

  return (
    <div
      className="py-16 px-6"
      style={{
        backgroundImage: "url(/images/processbg.png)",
        backgroundSize: "cover",
      }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Main Card Container */}
        <div
          className="rounded-3xl shadow-lg p-8 h-[122vh] w-[83%]"
          style={{
            backgroundImage: "url(/images/blogsbg.png)",
            backgroundSize: "cover",
          }}
        >
          {/* Top Row */}
          <div className="flex justify-between items-start mb-8">
            <div>
              <h2
                className="text-3xl font-bold mb-2"
                style={{ color: "#1B084C" }}
              >
                Blogs
              </h2>
              <p className="text-gray-700 max-w-lg">
                Explore helpful resources on recruitment, hiring trends, and
                workplace tips.
              </p>
            </div>
            <a
              href="#"
              className="flex items-center gap-1 text-sm font-semibold"
              style={{ color: "#1B084C" }}
            >
              See Our Blogs <ArrowUpRight size={16} />
            </a>
          </div>

          {/* Blog Cards */}
          {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {blogs.map((blog, index) => (
              <div
                key={blog.id}
                className="relative rounded-2xl overflow-hidden h-72"
              >
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 p-4">
                  <button
                    className={`text-white text-sm px-4 py-1 rounded-full mb-2 ${
                      index === 0 ? "bg-[#1B084C]" : "bg-[#6A1FFF]"
                    }`}
                  >
                    Read More
                  </button>
                  <p className="text-white text-sm">{blog.title}</p>
                </div>
              </div>
            ))}
          </div> */}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {blogs.map((blog, index) => (
              <div className="relative w-[320px] h-[420px] rounded-2xl overflow-hidden">
                {/* Full image */}
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-full object-cover"
                />

                {/* Bottom-left text */}
                <div className="absolute bottom-4 left-4 text-left">
                  <button className="bg-white text-[#1B084C] text-sm font-medium px-4 py-1 rounded-full mb-2 shadow-md">
                    Read More
                  </button>
                  <p className="text-white text-lg font-semibold leading-snug">
                    {blog.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
