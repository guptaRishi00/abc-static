export default function GapBetween() {
  const title = "Filling the Gap Between Home and School";
  const description = "We understand that homeschooling can be isolating and overwhelming. ABC provides the perfect middle ground—a structured, safe environment where children can learn, socialize, and grow, while parents receive the support they need without the rigidity of traditional schooling.";

  return (
    <div className="relative py-16 px-4 lg:py-24 w-full flex flex-col items-center justify-center overflow-hidden bg-[#0A0A0A]">

      {/* Background Animated Blobs for deep ambient lighting */}
      <div className="absolute top-[-20%] left-[-10%] w-[40rem] h-[40rem] bg-[#C2B280] rounded-full filter blur-[150px] opacity-[0.12] pointer-events-none animate-blob"></div>
      <div className="absolute bottom-[-20%] right-[-10%] w-[40rem] h-[40rem] bg-[#967BB6] rounded-full filter blur-[150px] opacity-[0.12] pointer-events-none animate-blob [animation-delay:3s]"></div>

      {/* Decorative Grid Lines with Fade Out Edges for a premium tech/elegant feel */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)`,
          backgroundSize: '4rem 4rem',
          maskImage: 'radial-gradient(ellipse at center, black 30%, transparent 70%)',
          WebkitMaskImage: 'radial-gradient(ellipse at center, black 30%, transparent 70%)'
        }}
      ></div>

      <div className="relative z-10 flex flex-col items-center justify-center max-w-6xl mx-auto w-full">

        {/* Inner Glassmorphism Card Wrapper */}
        <div className="relative w-full flex flex-col items-center gap-6 lg:gap-10 px-8 py-12 lg:py-16 rounded-[2.5rem] backdrop-blur-2xl bg-white/[0.02] border border-white/[0.06] shadow-[0_0_60px_rgba(0,0,0,0.4)]">

          {/* Top and Bottom Border Glow Lines */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/5 h-[1px] bg-gradient-to-r from-transparent via-[#C2B280]/70 to-transparent"></div>
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/4 h-[1px] bg-gradient-to-r from-transparent via-[#967BB6]/50 to-transparent"></div>

          <div className="relative z-10 flex flex-col items-center gap-8 lg:gap-10 text-center max-w-4xl mx-auto">
            <span className="text-[#C2B280] font-sans font-bold tracking-[0.3em] uppercase text-xs lg:text-sm">
              The Journey
            </span>

            <h2 className="font-playfair text-2xl leading-tight lg:leading-tight lg:text-5xl text-white drop-shadow-xl">
              {title}
            </h2>

            {/* Delicate animated divider */}
            <div className="w-16 h-[2px] bg-gradient-to-r from-[#C2B280]/40 via-[#C2B280]/80 to-[#C2B280]/40 rounded-full animate-shimmer" style={{ backgroundSize: '200% auto' }}></div>

            <p className="text-[#A0A0A0] text-lg lg:text-2xl font-light leading-relaxed max-w-3xl">
              {description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
