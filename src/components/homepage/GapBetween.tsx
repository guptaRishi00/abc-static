export default function GapBetween() {
  const title = "Filling the Gap Between Home and School";
  const description = "We understand that homeschooling can be isolating and overwhelming. ABC provides the perfect middle ground—a structured, safe environment where children can learn, socialize, and grow, while parents receive the support they need without the rigidity of traditional schooling.";

  return (
    <div className="relative py-16 px-4 lg:py-24 w-full flex flex-col items-center justify-center overflow-hidden bg-[#0A0A0A]">

      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)`,
          backgroundSize: '4rem 4rem',
        }}
      ></div>

      <div className="relative z-10 flex flex-col items-center justify-center max-w-6xl mx-auto w-full">

        <div className="relative w-full flex flex-col items-center gap-6 lg:gap-10 px-8 py-12 lg:py-16 rounded-3xl bg-[#111111] border border-gray-800">

          <div className="relative z-10 flex flex-col items-center gap-8 lg:gap-10 text-center max-w-4xl mx-auto">
            <span className="text-gray-400 font-sans font-bold tracking-[0.3em] uppercase text-xs lg:text-sm">
              The Journey
            </span>

            <h2 className="font-playfair text-2xl leading-tight lg:leading-tight lg:text-5xl text-white">
              {title}
            </h2>

            <div className="w-16 h-[2px] bg-gray-700 rounded-full"></div>

            <p className="text-gray-300 text-lg lg:text-2xl font-light leading-relaxed max-w-3xl">
              {description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
