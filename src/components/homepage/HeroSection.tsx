
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
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(#1E1E1E 1px, transparent 1px), linear-gradient(90deg, #1E1E1E 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
        }}
      ></div>

      <div className="relative lg:min-h-[85vh] max-w-7xl mx-auto flex flex-col justify-center">
        <div className="flex flex-col lg:flex-row items-center justify-between h-full px-6 py-20 lg:py-12 gap-16 lg:gap-12">

          <div className="flex flex-col items-start gap-8 lg:gap-10 w-full lg:w-1/2 z-10 pt-10">
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white border border-gray-200 shadow-sm transition-all duration-500 hover:shadow-md hover:border-gray-300">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#8A9A5B] opacity-40"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#8A9A5B]"></span>
              </span>
              <span className="text-sm font-medium text-[#444444] uppercase tracking-wider">Welcome to the Hub</span>
            </div>

            <h1 className="font-playfair text-5xl sm:text-6xl lg:text-[4.5rem] text-[#1E1E1E] leading-[1.05] tracking-tight">
              {title.split(' ').map((word: string, i: number) => (
                <span key={i} className={word === 'Learn' || word === 'All' ? 'italic text-[#C2B280] pr-1' : ''}>{word} </span>
              ))}
            </h1>

            <div className="flex md:items-center relative pl-6">
              <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-gradient-to-b from-[#C2B280] to-transparent"></div>
              <p className="text-[#555555] text-lg lg:text-xl font-light leading-relaxed max-w-lg">
                {description}
              </p>
            </div>

            <div className="flex items-center gap-6 mt-4">
              <Link
                className="group relative inline-flex items-center justify-center gap-3 bg-[#1E1E1E] text-white px-9 py-4 rounded-xl font-medium overflow-hidden"
                href={cta?.href || "#"}
              >
                <div className="absolute inset-0 bg-[#333333] transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 ease-out"></div>
                <span className="relative z-10">{cta?.text}</span>
                <svg
                  className="w-4 h-4 relative z-10 transform transition-transform duration-500 ease-out group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>

          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end z-10 relative">
            <div className="absolute -inset-4 border border-gray-200 rounded-[2.5rem] rounded-tr-none rotate-3 transition-transform duration-700 hover:rotate-6 opacity-60"></div>
            <div className="absolute -inset-4 border border-[#C2B280]/30 rounded-[2.5rem] rounded-tr-none -rotate-3 transition-transform duration-700 hover:-rotate-6 opacity-60"></div>
            
            <div className="relative bg-white p-2 rounded-[2.5rem] rounded-tr-none border border-gray-100 shadow-sm z-10">
              <Image
                src={"/bg.png"}
                alt={title || "Hero image"}
                width={650}
                height={650}
                className="relative object-cover object-center rounded-[2rem] rounded-tr-none bg-gray-50"
                unoptimized
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
