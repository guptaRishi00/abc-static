import Image from "next/image";

export default function Quote() {
  const quote = "“\"As a homeschooling parent, I've always wanted my children to have the social interaction and structure of school without the pressure and rigidity. ABC is exactly what we've been waiting for.\"";
  const name = "Sarah Mitchell";
  const address = "Mother of two, London";

  return (
    <div className="relative py-20 px-6 lg:px-0 lg:py-32 w-full flex flex-col items-center justify-center overflow-hidden bg-[#1E1E1E] text-white">

      <div
        className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)`,
          backgroundSize: '4rem 4rem',
        }}
      ></div>

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[16rem] lg:text-[28rem] leading-none font-playfair text-[#FAFAFA]/[0.03] pointer-events-none select-none z-0 transition-transform duration-1000 animate-pulse">
        &ldquo;
      </div>

      <div className="relative z-10 flex flex-col items-center gap-10 lg:gap-14 max-w-4xl mx-auto group">
        <div className="w-16 h-16 lg:w-20 lg:h-20 rounded-full bg-white/[0.03] border border-white/10 flex items-center justify-center transition-all duration-700 group-hover:scale-110 group-hover:bg-[#C2B280]/10 group-hover:border-[#C2B280]/30">
          <Image
            src={"/quote.svg"}
            alt="Quote"
            width={40}
            height={40}
            className="w-6 h-6 lg:w-8 lg:h-8 filter brightness-0 invert opacity-70 transition-opacity duration-500 group-hover:opacity-100"
          />
        </div>

        <p className="font-playfair italic text-2xl lg:text-4xl lg:leading-relaxed text-center tracking-wide font-light px-4 text-white/90 transition-colors duration-700 group-hover:text-white relative">
          <span className="hidden lg:inline absolute -left-8 top-0 text-[#C2B280]/60 text-4xl leading-none">&lsquo;</span>
          {quote.replace(/^“"|"$/g, '').replace(/^"|"$/g, '')}
          <span className="hidden lg:inline absolute -right-8 bottom-0 text-[#C2B280]/60 text-4xl leading-none">&rsquo;</span>
        </p>

        <div className="flex flex-col items-center justify-center mt-4 gap-5">
          <div className="w-12 h-[1px] bg-white/20 transition-all duration-700 group-hover:w-24 group-hover:bg-[#C2B280]/60"></div>
          <p className="text-[#FAFAFA] font-medium text-base lg:text-lg uppercase tracking-[0.25em] transition-colors duration-500 group-hover:text-[#C2B280]">{name}</p>
          <p className="text-gray-400 text-xs lg:text-sm font-light tracking-wide">{address}</p>
        </div>
      </div>
    </div>
  );
}
