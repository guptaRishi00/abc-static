import Link from "next/link";

export default function Learning() {
  const title = "Find a Learning Hub Near You";
  const cta = { text: "Browse by State", href: "contact" };

  return (
    <div className="relative w-full py-20 px-6 lg:py-32 flex flex-col items-center justify-center overflow-hidden bg-[#FAFAFA]">

      <div className="relative z-10 w-full max-w-5xl mx-auto">
        <div className="absolute -inset-1 rounded-[2.5rem] bg-gradient-to-tr from-[#FAFAFA] to-gray-200 opacity-50 blur-sm"></div>
        <div className="relative flex flex-col items-center bg-white rounded-[2.5rem] p-10 lg:p-20 border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.02)]">

          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-[3px] bg-[#8A9A5B] rounded-b-full"></div>

          <h2 className="font-playfair text-[2.5rem] lg:text-[3.5rem] tracking-tight text-center text-[#1E1E1E] mb-12 leading-tight max-w-2xl">
            {title || "Find a Learning Hub Near You"}
          </h2>

          <div className="flex flex-col lg:flex-row items-center w-full max-w-3xl gap-4 mb-12">
            <div className="relative w-full group">
              <div className="absolute inset-y-0 left-0 flex items-center pl-6 pointer-events-none">
                <svg
                  className="w-6 h-6 text-gray-300 group-focus-within:text-[#8A9A5B] transition-colors duration-500"
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
                className="w-full pl-16 pr-6 py-5 border-[1.5px] border-gray-200 rounded-2xl focus:outline-none focus:border-[#8A9A5B] hover:border-gray-300 bg-gray-50/50 focus:bg-white text-lg text-[#1E1E1E] placeholder-gray-400 transition-all duration-500 shadow-inner"
                placeholder="Enter your city or region..."
              />
            </div>

            <button className="w-full lg:w-auto px-12 py-5 bg-[#1E1E1E] cursor-pointer text-white rounded-2xl hover:bg-[#8A9A5B] hover:shadow-lg transition-all duration-500 text-lg font-medium shrink-0 border border-transparent">
              Search
            </button>
          </div>

          {cta && (
            <Link
              href={cta.href || "#"}
              className="group flex items-center gap-3 text-gray-500 text-base lg:text-lg cursor-pointer hover:text-[#1E1E1E] transition-colors duration-500 font-medium pb-2 relative"
            >
              {cta.text}
              <svg
                className="w-5 h-5 transform group-hover:translate-x-2 transition-transform duration-500"
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
              <span className="absolute bottom-0 left-0 w-full h-[1.5px] bg-[#1E1E1E] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></span>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
