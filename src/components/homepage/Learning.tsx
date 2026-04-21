import Link from "next/link";

export default function Learning() {
  const title = "Find a Learning Hub Near You";
  const cta = { text: "Browse by State", href: "contact" };

  return (
    <div className="relative w-full py-20 px-6 lg:py-32 flex flex-col items-center justify-center overflow-hidden bg-white">
      {/* Mesh Background */}
      <div className="absolute inset-0 bg-[#FAFAFA]">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#967BB6]/10 rounded-full blur-3xl opacity-60"></div>
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#8A9A5B]/10 rounded-full blur-3xl opacity-60"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[30rem] h-[30rem] bg-[#C2B280]/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 w-full max-w-4xl mx-auto flex flex-col items-center glassmorphism rounded-[2.5rem] p-10 lg:p-16 shadow-2xl border-white/50">
        {/* Small decorative top glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-[2px] bg-gradient-to-r from-transparent via-[#C2B280]/50 to-transparent"></div>

        <h2 className="font-playfair text-3xl lg:text-5xl text-center text-[#1E1E1E] mb-10 leading-tight">
          {title || "Find a Learning Hub Near You"}
        </h2>

        <div className="flex flex-col lg:flex-row items-center w-full max-w-2xl gap-4 mb-10">
          {/* Enhanced Input Field */}
          <div className="relative w-full group">
            <div className="absolute inset-y-0 left-0 flex items-center pl-6 pointer-events-none">
              <svg
                className="w-5 h-5 text-[#8A9A5B] group-focus-within:text-[#3B719F] transition-colors duration-300"
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
              className="w-full pl-14 pr-6 py-4 border-2 border-[#E5E7EB] rounded-2xl focus:outline-none focus:border-[#3B719F] focus:ring-4 focus:ring-[#3B719F]/10 bg-white/80 backdrop-blur-sm text-lg text-gray-800 placeholder-gray-400 transition-all duration-300 shadow-sm hover:border-gray-300"
              placeholder="Enter your city or region..."
            />
          </div>

          <button className="w-full lg:w-auto px-10 py-4 bg-[#1E1E1E] cursor-pointer text-white rounded-2xl hover:bg-[#111] hover:shadow-lg hover:shadow-black/15 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 text-lg font-medium shrink-0">
            Search
          </button>
        </div>

        {cta && (
          <Link
            href={cta.href || "#"}
            className="group flex items-center gap-2 text-[#444444] text-base lg:text-lg cursor-pointer hover:text-[#C2B280] transition-colors duration-300 font-medium border-b border-transparent hover:border-[#C2B280] pb-1"
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
