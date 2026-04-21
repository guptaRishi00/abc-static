
import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  const title = "A Space for All the Ways You Learn";
  const description = "Building a trusted, safe, and supportive community for home-educating families.";
  const image = { url: "https://stunning-event-ffaced628f.media.strapiapp.com/f8515a89566a76e07d775dc4493d8a9f9f739b67_2_4a51eea200.png" };
  const cta = { text: "Join Waiting List", href: "contact" };




  return (
    <div className="relative overflow-hidden bg-[#FAFAFA]">
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none border-b border-gray-100"
        style={{
          backgroundImage: `radial-gradient(#1E1E1E 0.5px, transparent 0.5px)`,
          backgroundSize: '20px 20px',
        }}
      ></div>

      <div className="relative lg:h-[92vh] max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between h-full px-6 py-20 lg:py-0 gap-16 lg:gap-10">

          <div className="flex flex-col items-start gap-7 lg:gap-9 w-full lg:w-1/2 z-10 p-8 lg:p-12">
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white border border-gray-200 text-sm font-medium text-[#444444]">
              <span className="relative w-2 h-2 rounded-full bg-[#8A9A5B]"></span>
              Welcome to the Hub
            </div>

            <h1 className="font-playfair text-4xl sm:text-5xl lg:text-5xl xl:text-6xl text-[#1E1E1E] leading-[1.1] tracking-tight">
              {title}
            </h1>

            <p className="text-[#444444] text-lg lg:text-xl font-light leading-relaxed max-w-lg">
              {description}
            </p>

            <Link
              className="group inline-flex items-center justify-center gap-3 bg-[#1E1E1E] text-white px-8 py-4 rounded-xl font-medium transition-colors duration-300 hover:bg-[#333333]"
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

          <div className="w-full lg:w-1/2 flex justify-center z-10">
            <div className="relative">
              <Image
                src={"/bg.png"}
                alt={title || "Hero image"}
                width={600}
                height={600}
                className="relative object-cover object-center"
                unoptimized
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
