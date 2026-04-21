import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const description = "A safe, welcoming space for learning and\nconnection. Supporting home-educating\nfamilies with trust and professionalism.";
  const rights = "© 2026 ABC Learning Hubs. All rights reserved.";
  const logo = { url: "https://stunning-event-ffaced628f.media.strapiapp.com/ABC_1_119e24b55b.svg" };
  const platform = [
    { id: 83, text: "About", href: "about" },
    { id: 84, text: "Locations", href: "locations" },
    { id: 85, text: "Admissions", href: "admissions" },
    { id: 86, text: "Safety Policy", href: "policy" }
  ];
  const community = [
    { id: 87, text: "Events", href: "events" },
    { id: 88, text: "Blog", href: "blog" },
    { id: 89, text: "Parent Portal", href: "parent-portal" }
  ];
  const contact = [
    { id: 13, info: "+44 1234 567 890", icon: { url: "https://stunning-event-ffaced628f.media.strapiapp.com/Vector_13_4a6c2df218.svg" } },
    { id: 14, info: "hello@abetweenc.com", icon: { url: "https://stunning-event-ffaced628f.media.strapiapp.com/Vector_14_ea1c0004f3.svg" } },
    { id: 15, info: "Location", icon: { url: "https://stunning-event-ffaced628f.media.strapiapp.com/boxicons_location_2_d91e34c431.svg" } }
  ];
  const logoUrl = logo.url;

  return (
    <footer className="w-full relative overflow-hidden bg-[#0A0A0A] text-[#A0A0A0] pt-24 pb-12 px-6 lg:px-20 border-t border-white/[0.05]">
      {/* Massive radial ambient glow at the bottom */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-[500px] bg-gradient-to-t from-[#C2B280] via-[#967BB6]/20 to-transparent rounded-[100%] opacity-[0.04] blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-10 mb-20 lg:mb-28">

          <div className="lg:col-span-5 flex flex-col items-start gap-8">
            {logoUrl ? (
              <Image
                src={logoUrl}
                alt="ABC Logo"
                width={140}
                height={50}
                className="w-auto h-10 object-contain object-left filter brightness-0 invert drop-shadow-[0_0_15px_rgba(255,255,255,0.2)] hover:drop-shadow-[0_0_25px_rgba(255,255,255,0.4)] transition-all duration-500"
                unoptimized
              />
            ) : (
              <h2 className="text-white text-4xl lg:text-5xl font-playfair font-bold tracking-tight text-left w-full">
                ABC
              </h2>
            )}
            <p className="text-sm lg:text-base leading-relaxed whitespace-pre-line max-w-sm text-[#888888] font-light text-left">
              {description}
            </p>
          </div>

          <div className="lg:col-span-2 lg:col-start-7">
            <h3 className="text-white text-xs font-bold tracking-[0.2em] uppercase mb-8">
              Platform
            </h3>
            <ul className="flex flex-col gap-5">
              {platform?.map((item: any) => (
                <li key={item.id}>
                  <Link
                    href={item.href || "#"}
                    className="text-sm font-light text-[#A0A0A0] hover:text-[#C2B280] hover:pl-2 transition-all duration-300"
                  >
                    {item.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h3 className="text-white text-xs font-bold tracking-[0.2em] uppercase mb-8">
              Community
            </h3>
            <ul className="flex flex-col gap-5">
              {community?.map((item: any) => (
                <li key={item.id}>
                  <Link
                    href={item.href || "#"}
                    className="text-sm font-light text-[#A0A0A0] hover:text-[#C2B280] hover:pl-2 transition-all duration-300"
                  >
                    {item.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h3 className="text-white text-xs font-bold tracking-[0.2em] uppercase mb-8">
              Contact
            </h3>
            <ul className="flex flex-col gap-5">
              {contact?.map((item: any) => {
                const iconUrl = item.icon?.url;
                const isLinkable =
                  item.info.includes("@") || item.info.includes("+");

                return (
                  <li key={item.id} className="flex items-start gap-4 group cursor-pointer">
                    {iconUrl && (
                      <div className="w-5 h-5 shrink-0 flex items-center justify-center opacity-60 group-hover:opacity-100 transition-opacity duration-300 mt-0.5">
                        <Image
                          src={iconUrl}
                          alt="icon"
                          width={20}
                          height={20}
                          className="w-full h-full object-contain filter brightness-0 invert"
                          unoptimized
                        />
                      </div>
                    )}
                    <span
                      className={`text-sm font-light leading-relaxed block ${isLinkable
                          ? "group-hover:text-[#C2B280] transition-colors duration-300"
                          : "group-hover:text-white transition-colors duration-300"
                        }`}
                    >
                      {item.info}
                    </span>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        {/* Dynamic Glowing Divider */}
        <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-white/[0.08] to-transparent mb-8"></div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-xs lg:text-sm font-light text-[#555555]">
          <p>{rights || "© 2024 ABC Learning Hubs. All rights reserved."}</p>

          <div className="flex items-center gap-8">
            <Link
              href="/privacy-policy"
              className="hover:text-[#A0A0A0] transition-colors duration-300"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms-of-service"
              className="hover:text-[#A0A0A0] transition-colors duration-300"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}