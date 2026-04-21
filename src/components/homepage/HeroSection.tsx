
import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  const title = "A Space for All the Ways You Learn";
  const description = "Building a trusted, safe, and supportive community for home-educating families.";
  const image = { url: "https://stunning-event-ffaced628f.media.strapiapp.com/f8515a89566a76e07d775dc4493d8a9f9f739b67_2_4a51eea200.png" };
  const cta = { text: "Join Waiting List", href: "contact" };




  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-[#F5F0E6] via-[#E8E0CC] to-[#C2B280]">
      {/* Animated Decorative Blobs */}
      <div className="absolute top-[-10%] -left-40 w-[30rem] h-[30rem] bg-[#967BB6] rounded-full mix-blend-multiply filter blur-[120px] opacity-20 animate-blob"></div>
      <div className="absolute top-[-5%] -right-32 w-[28rem] h-[28rem] bg-[#8A9A5B] rounded-full mix-blend-multiply filter blur-[120px] opacity-15 animate-blob [animation-delay:2s]"></div>
      <div className="absolute -bottom-20 left-1/4 w-[26rem] h-[26rem] bg-[#3B719F] rounded-full mix-blend-multiply filter blur-[120px] opacity-15 animate-blob [animation-delay:4s]"></div>

      {/* Subtle grain / dot overlay for texture */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#1E1E1E 0.5px, transparent 0.5px)`,
          backgroundSize: '20px 20px',
        }}
      ></div>

      <div className="relative lg:h-[92vh] max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between h-full px-6 py-20 lg:py-0 gap-16 lg:gap-10">

          {/* Text Content */}
          <div className="flex flex-col items-start gap-7 lg:gap-9 w-full lg:w-1/2 z-10 p-8 lg:p-12">
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/60 border border-white/70 text-sm font-medium text-[#444444] backdrop-blur-lg shadow-sm">
              <span className="relative w-2.5 h-2.5 rounded-full bg-[#8A9A5B]">
                <span className="absolute inset-0 rounded-full bg-[#8A9A5B] animate-ping opacity-40"></span>
              </span>
              Welcome to the Hub
            </div>

            <h1 className="font-playfair text-4xl sm:text-5xl lg:text-5xl xl:text-6xl text-[#1E1E1E] leading-[1.1] tracking-tight">
              {title}
            </h1>

            <p className="text-[#444444] text-lg lg:text-xl font-light leading-relaxed max-w-lg">
              {description}
            </p>

            <Link
              className="group inline-flex items-center justify-center gap-3 bg-[#1E1E1E] text-white px-8 py-4 rounded-xl font-medium transition-all duration-300 hover:bg-[#111] hover:shadow-lg hover:shadow-black/20 hover:-translate-y-0.5 active:translate-y-0"
              href={cta?.href || "#"}
            >
              <span>{cta?.text}</span>
              <svg
                className="w-4 h-4 transform transition-transform duration-300 group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>

          {/* Image Content */}
          <div className="w-full lg:w-1/2 flex justify-center z-10">
            <div className="relative">
              {/* Soft glow behind image */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#C2B280]/30 to-[#967BB6]/20 rounded-full blur-3xl scale-90 -z-10"></div>
              <Image
                src={"/bg.png"}
                alt={title || "Hero image"}
                width={600}
                height={600}
                className="relative object-cover object-center drop-shadow-2xl"
                unoptimized
              />
            </div>
          </div>
        </div>
      </div>

      {/* Elegant bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white/30 to-transparent pointer-events-none"></div>
    </div>
  );
}
