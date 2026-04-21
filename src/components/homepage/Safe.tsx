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
    { bg: "bg-[#3B719F]", hoverBorder: "hover:border-[#3B719F]/40", textFocus: "group-hover:text-[#3B719F]" },
    { bg: "bg-[#967BB6]", hoverBorder: "hover:border-[#967BB6]/40", textFocus: "group-hover:text-[#967BB6]" },
    { bg: "bg-[#C2B280]", hoverBorder: "hover:border-[#C2B280]/40", textFocus: "group-hover:text-[#C2B280]" },
    { bg: "bg-[#8A9A5B]", hoverBorder: "hover:border-[#8A9A5B]/40", textFocus: "group-hover:text-[#8A9A5B]" },
  ];

  return (
    <section className="w-full py-16 px-4 lg:py-24 relative overflow-hidden bg-white">

      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#1E1E1E 1px, transparent 1px)`,
          backgroundSize: '32px 32px',
        }}
      ></div>

      <div className="max-w-7xl mx-auto flex flex-col relative z-10 w-full gap-16 lg:gap-24">

        <div className="flex flex-col items-center lg:items-start gap-5 text-center lg:text-left">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-gray-100 bg-gray-50/50">
            <span className="w-2 h-2 rounded-full bg-[#3B719F] animate-pulse"></span>
            <span className="text-gray-600 font-sans font-medium uppercase text-xs tracking-widest">
              A Secure Environment
            </span>
          </div>
          
          <div className="flex flex-col lg:flex-row lg:items-end justify-between w-full">
            {title && (
              <h2 className="font-playfair text-[2.5rem] lg:text-[3.5rem] tracking-tight text-[#1E1E1E] leading-tight max-w-2xl">
                {title}
              </h2>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 w-full">
          {cards &&
            cards.map((card: any, index: number) => {
              const iconUrl = card.icon?.url;
              const theme = cardThemes[index % cardThemes.length];

              return (
                <div
                  key={card.id || index}
                  className={`group relative bg-white rounded-3xl overflow-hidden border border-gray-100 p-8 lg:p-10 transition-all duration-500 hover:shadow-lg hover:-translate-y-1 ${theme.hoverBorder}`}
                >

                  <div className="relative flex flex-col sm:flex-row items-center sm:items-start gap-8 z-10 w-full">

                    <div className={`relative w-16 h-16 lg:w-20 lg:h-20 shrink-0 rounded-[1rem] ${theme.bg} flex items-center justify-center overflow-hidden transition-transform duration-500 group-hover:scale-105 group-hover:rotate-3`}>
                      {iconUrl ? (
                        <Image
                          src={iconUrl}
                          alt={card.title || "Feature Icon"}
                          width={200}
                          height={200}
                          className="w-8 h-8 lg:w-10 lg:h-10 object-contain filter brightness-0 invert"
                          unoptimized
                        />
                      ) : (
                        <svg className="w-8 h-8 lg:w-10 lg:h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
                        </svg>
                      )}
                    </div>

                    <div className="flex flex-col items-center sm:items-start gap-4 text-center sm:text-left flex-1 mt-1">
                      <h3 className={`font-playfair text-xl lg:text-2xl font-medium text-[#1E1E1E] transition-colors duration-500 ${theme.textFocus}`}>
                        {card.title}
                      </h3>

                      <p className="text-gray-500 text-base lg:text-lg leading-relaxed font-light">
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
