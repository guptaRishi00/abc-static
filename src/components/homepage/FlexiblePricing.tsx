import Link from "next/link";

export default function FlexiblePricing() {
  const title = "Flexible Pricing Options";
  const cards = [
    {
      id: 9,
      title: "Part-Time",
      price: "From £350 per month",
      days: "2 days per week at your local hub",
      lists: [
        { id: 28, text: "Access to learning materials" },
        { id: 29, text: "Parent community network" },
        { id: 30, text: "Flexible scheduling" }
      ],
      cta: { text: "Learn More", href: "contact" }
    },
    {
      id: 10,
      title: "Full-Time",
      price: "From £650 per month",
      days: "4-5 days per week with full support",
      lists: [
        { id: 31, text: "Priority booking" },
        { id: 32, text: "Extended hours" },
        { id: 33, text: "Regular progress updates" },
        { id: 34, text: "Parent workshops" }
      ],
      cta: { text: "Learn More", href: "contact" }
    }
  ];

  return (
    <section className="w-full py-16 px-4 lg:py-24 relative overflow-hidden bg-[#FAFAFA] border-t border-gray-100/50">

      {/* Soft Ambient Background Blurs */}
      <div className="absolute top-[-10%] right-[-5%] w-[40rem] h-[40rem] bg-gradient-to-br from-[#C2B280] to-[#E5D7A3] rounded-full opacity-[0.05] blur-[150px] pointer-events-none"></div>
      <div className="absolute bottom-[-10%] left-[-10%] w-[40rem] h-[40rem] bg-gradient-to-tr from-[#967BB6] to-[#3B719F] rounded-full opacity-[0.05] blur-[150px] pointer-events-none"></div>

      {/* Subtle Dot Pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.08] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#1E1E1E 1px, transparent 1px)`,
          backgroundSize: '24px 24px',
          maskImage: 'radial-gradient(ellipse at center, black 40%, transparent 80%)',
          WebkitMaskImage: 'radial-gradient(ellipse at center, black 40%, transparent 80%)'
        }}
      ></div>

      <div className="max-w-7xl mx-auto flex flex-col items-center relative z-10 w-full">

        {/* Header Block */}
        <div className="flex flex-col items-center gap-5 text-center mb-16 lg:mb-24">
          <span className="inline-block px-5 py-2 bg-white border border-[#C2B280]/20 text-[#C2B280] text-xs font-bold uppercase tracking-[0.3em] rounded-full shadow-sm">
            Flexible Pricing
          </span>
          <h2 className="font-playfair text-2xl leading-tight lg:leading-tight lg:text-5xl text-[#1E1E1E]">
            {title}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#967BB6] via-[#C2B280] to-[#3B719F] rounded-full mt-2"></div>
        </div>

        {/* Pricing Cards */}
        <div className="flex flex-col lg:flex-row items-stretch justify-center w-full gap-8 lg:gap-8">
          {cards &&
            cards.map((card: any, index: number) => {
              // Highlight the middle card in a 3-card layout as the premium tier
              const isCenter = cards.length === 3 && index === 1;

              return (
                <div
                  key={card.id || index}
                  className={`relative rounded-[2.5rem] w-full lg:w-1/3 max-w-md mx-auto lg:mx-0 flex flex-col overflow-hidden border transition-all duration-500 ${isCenter
                      ? "bg-[#111111] text-white shadow-2xl lg:-translate-y-4 border-gray-800 z-20 animate-glow-pulse"
                      : "bg-white text-[#111] shadow-sm hover:shadow-lg border-gray-100 z-10 mt-0 lg:mt-6 mb-0 lg:mb-6 hover:-translate-y-1"
                    }`}
                >
                  {/* "Most Popular" badge for center card */}
                  {isCenter && (
                    <div className="absolute top-5 right-5 z-30">
                      <span className="px-3 py-1 text-[10px] font-bold uppercase tracking-widest bg-[#C2B280] text-[#1E1E1E] rounded-full shadow-sm">
                        Popular
                      </span>
                    </div>
                  )}

                  {/* Subtle top glow for the center card */}
                  {isCenter && (
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#C2B280] via-[#E5D7A3] to-[#C2B280] opacity-80 z-20"></div>
                  )}

                  {/* Card header */}
                  <div className={`relative px-7 pt-8 pb-6 text-center border-b z-10 ${isCenter ? 'border-white/10' : 'border-gray-100'}`}>
                    {/* Inner glowing ambient spot for center card */}
                    {isCenter && <div className="absolute -top-24 -right-24 w-48 h-48 bg-[#C2B280] rounded-full blur-3xl opacity-15 pointer-events-none"></div>}

                    <p className={`text-xs lg:text-sm font-bold uppercase tracking-[0.2em] mb-4 ${isCenter ? 'text-[#C2B280]' : 'text-[#8A9A5B]'}`}>
                      {card.title}
                    </p>
                    <div className="flex flex-col items-center justify-center">
                      <span className={`font-playfair text-4xl lg:text-5xl tracking-tight font-medium ${isCenter ? 'text-white' : 'text-[#1E1E1E]'}`}>
                        {card.price}
                      </span>
                      {card.days && (
                        <span className={`text-sm mt-2 font-light ${isCenter ? 'text-[#A1A1AA]' : 'text-[#888]'}`}>
                          {card.days}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Features list */}
                  <div className={`px-7 py-8 flex flex-col gap-5 flex-1 relative z-10 ${isCenter ? 'bg-black/20' : 'bg-transparent'}`}>
                    {card.lists &&
                      card.lists.map((list: any, listIndex: number) => (
                        <div className="flex items-start gap-4" key={list.id || listIndex}>
                          <div className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${isCenter ? 'bg-[#C2B280]/20 text-[#C2B280]' : 'bg-[#8A9A5B]/10 text-[#8A9A5B]'}`}>
                            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                            </svg>
                          </div>
                          <p className={`text-sm lg:text-base leading-relaxed font-light ${isCenter ? 'text-[#E5E7EB]' : 'text-[#555]'}`}>
                            {list.text}
                          </p>
                        </div>
                      ))}
                  </div>

                  {/* CTA button */}
                  <div className={`px-7 pb-8 relative z-10 ${isCenter ? 'bg-black/20' : 'bg-transparent'}`}>
                    <Link
                      href={card.cta?.href || "/contact"}
                      className={`group/btn block w-full text-center font-medium text-sm lg:text-base py-4 rounded-xl transition-all duration-300 border ${isCenter
                          ? "bg-[#C2B280] border-[#C2B280] text-[#1E1E1E] hover:bg-[#D4C492] hover:border-[#D4C492] hover:shadow-lg hover:shadow-[#C2B280]/20"
                          : "bg-white border-gray-200 text-[#1E1E1E] hover:border-[#1E1E1E] hover:bg-[#1E1E1E] hover:text-white"
                        }`}
                    >
                      {card.cta?.text || "Get Started"}
                    </Link>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </section>
  );
}
