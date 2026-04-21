export default function GapBetween() {
  const title = "Filling the Gap Between Home and School";
  const description = "We understand that homeschooling can be isolating and overwhelming. ABC provides the perfect middle ground—a structured, safe environment where children can learn, socialize, and grow, while parents receive the support they need without the rigidity of traditional schooling.";

  return (
    <div className="relative py-20 px-4 lg:py-32 w-full flex flex-col items-center justify-center overflow-hidden bg-[#1E1E1E]">

      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
        }}
      ></div>

      <div className="relative z-10 flex flex-col items-center justify-center max-w-6xl mx-auto w-full">

        <div className="group relative w-full flex flex-col items-center px-8 py-14 lg:py-20 rounded-[2.5rem] bg-[#111111] overflow-hidden border border-gray-800 transition-colors duration-700 hover:border-gray-700">
          
          <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent opacity-0 transition-opacity duration-700 group-hover:opacity-100"></div>

          <div className="relative z-10 flex flex-col items-center gap-8 lg:gap-10 text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full border border-gray-700 bg-black/50 transition-colors duration-500 group-hover:border-gray-600">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C2B280] animate-pulse"></span>
              <span className="text-gray-300 font-sans font-medium tracking-[0.2em] uppercase text-xs">
                The Journey
              </span>
            </div>

            <h2 className="font-playfair text-[2rem] leading-tight lg:leading-[1.1] lg:text-[3.5rem] text-white">
              {title}
            </h2>

            <div className="w-16 h-[1px] bg-gray-600 rounded-full transition-all duration-700 group-hover:w-32 group-hover:bg-[#C2B280]"></div>

            <p className="text-gray-400 text-lg lg:text-2xl font-light leading-relaxed max-w-3xl transition-colors duration-500 group-hover:text-gray-300">
              {description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
