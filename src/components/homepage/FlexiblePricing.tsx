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
    <section className="w-full py-16 px-4 lg:py-24 relative overflow-hidden bg-[#FAFAFA] border-t border-gray-100">

      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#1E1E1E 1px, transparent 1px)`,
          backgroundSize: '24px 24px',
        }}
      ></div>

      <div className="max-w-7xl mx-auto flex flex-col items-center relative z-10 w-full">

        <div className="flex flex-col items-center gap-5 text-center mb-16 lg:mb-24">
          <span className="inline-block px-5 py-2 bg-white border border-gray-200 text-[#C2B280] text-xs font-bold uppercase tracking-[0.3em] rounded-full">
            Flexible Pricing
          </span>
          <h2 className="font-playfair text-2xl leading-tight lg:leading-tight lg:text-5xl text-[#1E1E1E]">
            {title}
          </h2>
          <div className="w-24 h-1 bg-[#1E1E1E] rounded-full mt-2"></div>
        </div>

        <div className="flex flex-col lg:flex-row items-stretch justify-center w-full gap-8 lg:gap-8">
          {cards &&
            cards.map((card: any, index: number) => {
              const isCenter = cards.length === 3 && index === 1;

              return (
                <div
                  key={card.id || index}
                  className={`group relative rounded-[2rem] w-full lg:w-1/3 max-w-md mx-auto lg:mx-0 flex flex-col overflow-hidden border transition-all duration-500 hover:shadow-xl hover:-translate-y-2 ${isCenter
                    ? "bg-[#1E1E1E] text-white border-[#1E1E1E] z-20 shadow-lg scale-100 lg:scale-105"
                    : "bg-white text-[#111] border-gray-200 z-10 mt-0 lg:mt-6 mb-0 lg:mb-6 opacity-90 hover:opacity-100"
                    }`}
                >
                  {isCenter && (
                    <div className="absolute top-0 inset-x-0 h-1 bg-[#C2B280]"></div>
                  )}
                  {isCenter && (
                    <div className="absolute top-6 right-6 z-30">
                      <span className="px-3 py-1.5 text-[10px] font-bold uppercase tracking-widest bg-white/10 text-[#C2B280] rounded-full border border-white/20">
                        Popular
                      </span>
                    </div>
                  )}

                  <div className={`relative px-8 pt-10 pb-8 text-center border-b z-10 ${isCenter ? 'border-white/10' : 'border-gray-100'}`}>
                    <p className={`text-xs lg:text-sm font-bold uppercase tracking-[0.2em] mb-4 ${isCenter ? 'text-gray-300' : 'text-[#8A9A5B]'}`}>
                      {card.title}
                    </p>
                    <div className="flex flex-col items-center justify-center relative">
                      <span className={`font-playfair text-5xl lg:text-6xl tracking-tight font-medium ${isCenter ? 'text-white' : 'text-[#1E1E1E]'}`}>
                        {card.price}
                      </span>
                      {card.days && (
                        <span className={`text-sm mt-3 font-light ${isCenter ? 'text-gray-400' : 'text-[#888]'}`}>
                          {card.days}
                        </span>
                      )}
                    </div>
                  </div>

                  <div className={`px-8 py-10 flex flex-col gap-5 flex-1 relative z-10 ${isCenter ? 'bg-black/20' : 'bg-transparent'}`}>
                    {card.lists &&
                      card.lists.map((list: any, listIndex: number) => (
                        <div className="flex items-start gap-4 group/item" key={list.id || listIndex}>
                          <div className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 mt-0.5 transition-colors duration-500 ${isCenter ? 'bg-white/10 text-white group-hover/item:bg-[#C2B280] group-hover/item:text-[#1E1E1E]' : 'bg-gray-100 text-[#1E1E1E] group-hover/item:bg-[#8A9A5B] group-hover/item:text-white'}`}>
                            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                            </svg>
                          </div>
                          <p className={`text-sm lg:text-base leading-relaxed font-light transition-colors duration-500 ${isCenter ? 'text-gray-300 group-hover/item:text-white' : 'text-[#555] group-hover/item:text-[#1E1E1E]'}`}>
                            {list.text}
                          </p>
                        </div>
                      ))}
                  </div>

                  <div className={`px-8 pb-10 relative z-10 ${isCenter ? 'bg-black/20' : 'bg-transparent'}`}>
                    <Link
                      href={card.cta?.href || "/contact"}
                      className={`group/btn block w-full text-center font-medium text-sm lg:text-base py-4 rounded-xl transition-all duration-500 border ${isCenter
                        ? "bg-[#C2B280] border-[#C2B280] text-[#1E1E1E] hover:bg-white hover:border-white shadow-md hover:shadow-lg"
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
