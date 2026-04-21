import Link from "next/link";

export default function Learning() {
  const title = "Find a Learning Hub Near You";
  const cta = { text: "Browse by State", href: "contact" };

  return (
    <div className="relative w-full py-20 px-6 lg:py-32 flex flex-col items-center justify-center overflow-hidden bg-[#FAFAFA]">

      <div className="relative z-10 w-full max-w-4xl mx-auto flex flex-col items-center bg-white rounded-3xl p-10 lg:p-16 border border-gray-200">

        <h2 className="font-playfair text-3xl lg:text-5xl text-center text-[#1E1E1E] mb-10 leading-tight">
          {title || "Find a Learning Hub Near You"}
        </h2>

        <div className="flex flex-col lg:flex-row items-center w-full max-w-2xl gap-4 mb-10">
          <div className="relative w-full group">
            <div className="absolute inset-y-0 left-0 flex items-center pl-6 pointer-events-none">
              <svg
                className="w-5 h-5 text-gray-400 group-focus-within:text-[#1E1E1E] transition-colors duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
            <input
              type="text"
              className="w-full pl-14 pr-6 py-4 border border-gray-200 rounded-xl focus:outline-none focus:border-[#1E1E1E] bg-white text-lg text-[#1E1E1E] placeholder-gray-400 transition-colors duration-300 hover:border-gray-300"
              placeholder="Enter your city or region..."
            />
          </div>

          <button className="w-full lg:w-auto px-10 py-4 bg-[#1E1E1E] cursor-pointer text-white rounded-xl hover:bg-[#333333] transition-colors duration-300 text-lg font-medium shrink-0 border border-[#1E1E1E]">
            Search
          </button>
        </div>

        {cta && (
          <Link
            href={cta.href || "#"}
            className="group flex items-center gap-2 text-[#444444] text-base lg:text-lg cursor-pointer hover:text-[#1E1E1E] transition-colors duration-300 font-medium border-b border-transparent hover:border-[#1E1E1E] pb-1"
          >
            {cta.text}
            <svg
              className="w-5 h-5 transform group-hover:translate-x-1.5 transition-transform duration-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 12h14M12 5l7 7-7 7"
              />
            </svg>
          </Link>
        )}
      </div>
    </div>
  );
}
