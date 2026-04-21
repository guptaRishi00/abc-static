import Image from "next/image";

export default function Quote() {
  const quote = "“\"As a homeschooling parent, I've always wanted my children to have the social interaction and structure of school without the pressure and rigidity. ABC is exactly what we've been waiting for.\"";
  const name = "Sarah Mitchell";
  const address = "Mother of two, London";

  return (
    <div className="relative py-16 px-6 lg:px-0 lg:py-24 w-full flex flex-col items-center justify-center overflow-hidden bg-[#1E1E1E] text-white">

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[14rem] lg:text-[22rem] leading-none font-playfair text-white/[0.02] pointer-events-none select-none z-0">
        &ldquo;
      </div>

      <div className="relative z-10 flex flex-col items-center gap-8 lg:gap-12 max-w-4xl mx-auto">
        <div className="w-14 h-14 lg:w-18 lg:h-18 rounded-full bg-[#111111] border border-gray-700 flex items-center justify-center">
          <Image
            src={"/quote.svg"}
            alt="Quote"
            width={40}
            height={40}
            className="w-5 h-5 lg:w-7 lg:h-7 filter brightness-0 invert"
          />
        </div>

        <p className="font-playfair italic text-xl lg:text-3xl lg:leading-snug text-center tracking-wide font-light px-4 text-white/90">
          {quote}
        </p>

        <div className="flex flex-col items-center justify-center mt-2 gap-4">
          <div className="w-12 h-[2px] bg-gray-700 rounded"></div>
          <p className="text-gray-300 font-medium text-base lg:text-lg uppercase tracking-[0.2em]">{name}</p>
          <p className="text-[#A1A1AA] text-xs lg:text-sm font-light">{address}</p>
        </div>
      </div>
    </div>
  );
}
