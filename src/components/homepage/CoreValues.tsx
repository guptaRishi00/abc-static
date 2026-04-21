import Image from "next/image";

export default function CoreValues() {
  const title = "Our Core Values";
  const cards = [
    {
      id: 92,
      title: "Safety",
      description: "Safe, secure, child-centered spaces.",
      icon: { url: "https://stunning-event-ffaced628f.media.strapiapp.com/Group_7_1f2e5db4c4.svg" }
    },
    {
      id: 93,
      title: "Community",
      description: "A connected, supportive network of families.",
      icon: { url: "https://stunning-event-ffaced628f.media.strapiapp.com/Group_8_8d399b014f.svg" }
    },
    {
      id: 94,
      title: "Learning",
      description: "High-quality, engaging educational resources.",
      icon: { url: "https://stunning-event-ffaced628f.media.strapiapp.com/Vector_15_93398c01de.svg" }
    },
    {
      id: 95,
      title: "Trust",
      description: "Guidance from seasoned educators.",
      icon: { url: "https://stunning-event-ffaced628f.media.strapiapp.com/Group_9_9e1912fd9f.svg" }
    }
  ];

  const cardThemes = [
    { bg: "bg-[#967BB6]", accentBorder: "group-hover:border-t-[#967BB6]", glow: "group-hover:shadow-[#967BB6]/10" },
    { bg: "bg-[#C2B280]", accentBorder: "group-hover:border-t-[#C2B280]", glow: "group-hover:shadow-[#C2B280]/10" },
    { bg: "bg-[#3B719F]", accentBorder: "group-hover:border-t-[#3B719F]", glow: "group-hover:shadow-[#3B719F]/10" },
    { bg: "bg-[#8A9A5B]", accentBorder: "group-hover:border-t-[#8A9A5B]", glow: "group-hover:shadow-[#8A9A5B]/10" },
  ];

  return (
    <div className="relative py-14 px-4 lg:px-0 lg:py-24 w-full flex flex-col items-center justify-center overflow-hidden bg-[#FAFAFA] border-t border-gray-100">

      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#1E1E1E 1px, transparent 1px)`,
          backgroundSize: '24px 24px',
        }}
      ></div>

      <div className="relative z-10 flex flex-col items-center w-full max-w-7xl mx-auto gap-14 lg:gap-20">

        <div className="flex flex-col items-center gap-5 text-center">
          <span className="text-[#C2B280] font-sans font-bold tracking-[0.25em] uppercase text-xs lg:text-sm">
            Our Core Values
          </span>
          <h2 className="font-playfair text-2xl leading-tight lg:leading-tight lg:text-5xl text-[#1E1E1E]">
            {title}
          </h2>
          <div className="w-24 h-1 bg-[#1E1E1E] rounded-full mt-2"></div>
        </div>

        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-7 lg:px-4">
          {cards &&
            cards.map((card: any, index: number) => {
              const imageUrl = card.icon?.url;
              if (!imageUrl) return null;

              return (
                <div
                  key={card.id || index}
                  className="group relative flex flex-col h-full z-10"
                >
                  <div className="relative flex flex-col flex-grow px-5 py-10 lg:px-6 lg:py-12 items-center justify-start gap-7 rounded-[2rem] bg-white border border-gray-200 transition-colors duration-300 hover:bg-gray-50 overflow-hidden">

                    <div className="relative p-5 rounded-2xl flex items-center justify-center bg-gray-100 transition-colors duration-300 group-hover:bg-gray-200">
                      <Image
                         src={imageUrl}
                         alt={card.title || "Core Value"}
                         width={100}
                         height={100}
                         className="w-12 h-12 lg:w-14 lg:h-14 opacity-80"
                         unoptimized
                      />
                    </div>

                    <div className="relative flex flex-col items-center justify-center gap-4 text-center z-10">
                      <h3 className="font-playfair text-xl lg:text-2xl font-semibold text-[#1E1E1E]">
                         {card.title}
                      </h3>
                      <p className="text-[#666666] text-sm lg:text-base leading-relaxed">
                         {card.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}
