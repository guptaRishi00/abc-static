import Image from "next/image";

export default function Safe() {
  const title = undefined;
  const cards = [
    {
      id: 99,
      title: "Safe, Welcoming Learning Spaces",
      description: "At ABC, we provide safe, nurturing environments where home-educating families can gather to learn, connect, and grow together.",
      icon: null
    },
    {
      id: 100,
      title: "Established and Credible Support",
      description: "We're dedicated to supporting parents in their educational journey with curated resources and expert guidance they can trust.",
      icon: { url: "https://stunning-event-ffaced628f.media.strapiapp.com/image_3_1_3b2c62e125.svg" }
    }
  ];

  const cardThemes = [
    { iconBg: "bg-gradient-to-br from-[#1A365D] to-[#3B719F]", hoverBorder: "hover:border-[#3B719F]/30" },
    { iconBg: "bg-gradient-to-br from-[#4A3B5F] to-[#967BB6]", hoverBorder: "hover:border-[#967BB6]/30" },
    { iconBg: "bg-gradient-to-br from-[#5A5038] to-[#C2B280]", hoverBorder: "hover:border-[#C2B280]/30" },
    { iconBg: "bg-gradient-to-br from-[#3A4A2B] to-[#8A9A5B]", hoverBorder: "hover:border-[#8A9A5B]/30" },
  ];

  return (
    <section className="w-full py-16 px-4 lg:py-24 relative overflow-hidden bg-white border-t border-gray-50 border-opacity-50">

      {/* Decorative Blur Blobs */}
      <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-gradient-to-bl from-[#3B719F] to-transparent rounded-full opacity-[0.03] blur-[100px] pointer-events-none transform translate-x-1/3 -translate-y-1/3"></div>
      <div className="absolute bottom-0 left-0 w-[50vw] h-[50vw] bg-gradient-to-tr from-[#967BB6] to-transparent rounded-full opacity-[0.03] blur-[100px] pointer-events-none transform -translate-x-1/3 translate-y-1/3"></div>

      {/* Abstract Grid background */}
      <div
        className="absolute inset-0 opacity-[0.08] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#1E1E1E 1px, transparent 1px)`,
          backgroundSize: '32px 32px',
          maskImage: 'radial-gradient(ellipse at center, black 20%, transparent 70%)',
          WebkitMaskImage: 'radial-gradient(ellipse at center, black 20%, transparent 70%)'
        }}
      ></div>

      <div className="max-w-7xl mx-auto flex flex-col items-center relative z-10 w-full gap-16 lg:gap-24">

        {/* Header Block */}
        <div className="flex flex-col items-center gap-5 text-center">
          <span className="text-[#3B719F] font-sans font-bold tracking-[0.25em] uppercase text-xs lg:text-sm">
            A Secure Environment
          </span>
          {title && (
            <h2 className="font-playfair text-2xl lg:text-5xl text-[#1E1E1E] leading-tight">
              {title}
            </h2>
          )}
          <div className="w-24 h-1 bg-gradient-to-r from-[#3B719F] via-[#C2B280] to-[#967BB6] rounded-full mt-2"></div>
        </div>

        {/* Bento Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 w-full">
          {cards &&
            cards.map((card: any, index: number) => {
              const iconUrl = card.icon?.url;
              const theme = cardThemes[index % cardThemes.length];

              return (
                <div
                  key={card.id || index}
                  className={`group relative bg-white rounded-[2rem] shadow-[0_4px_24px_rgb(0,0,0,0.04)] overflow-hidden border border-gray-100 p-7 lg:p-9 transition-all duration-500 card-hover-lift ${theme.hoverBorder}`}
                >
                  {/* Hover accent glow */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-current to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

                  <div className="relative flex flex-col sm:flex-row items-center sm:items-start gap-7 z-10 w-full">

                    {/* Icon Container with multi-colored gradient */}
                    <div className={`relative w-20 h-20 lg:w-24 lg:h-24 shrink-0 rounded-[1.5rem] ${theme.iconBg} shadow-lg flex items-center justify-center overflow-hidden transition-transform duration-500 group-hover:scale-105`}>
                      {iconUrl ? (
                        <Image
                          src={iconUrl}
                          alt={card.title || "Feature Icon"}
                          width={200}
                          height={200}
                          className="w-10 h-10 lg:w-12 lg:h-12 object-contain filter brightness-0 invert drop-shadow-[0_2px_4px_rgba(0,0,0,0.2)]"
                          unoptimized
                        />
                      ) : (
                        <svg className="w-10 h-10 lg:w-12 lg:h-12 text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.2)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
                        </svg>
                      )}
                    </div>

                    {/* Content Block */}
                    <div className="flex flex-col items-center sm:items-start gap-3 text-center sm:text-left flex-1 mt-1 lg:mt-2">
                      <h3 className="font-playfair text-xl lg:text-2xl font-semibold text-[#1E1E1E] leading-snug">
                        {card.title}
                      </h3>

                      <p className="text-[#666666] text-base lg:text-lg leading-relaxed font-light">
                        {card.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </section>
  );
}
