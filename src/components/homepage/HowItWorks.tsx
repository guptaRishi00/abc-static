export default function HowItWorks() {
  const title = "How it Works";
  const cards = [
    {
      id: 96,
      title: "Join the Waiting List",
      description: "Complete our simple registration form and tell us about your family's needs and learning goals.",
      count: "01"
    },
    {
      id: 97,
      title: "Initial Consultation",
      description: "We'll arrange a call to discuss your child's interests, your homeschooling approach, and how ABC can support you.",
      count: "02"
    },
    {
      id: 98,
      title: "Welcome to Your Hub",
      description: "Once a space becomes available, we'll introduce you to your local hub, team, and community of families.",
      count: "03"
    }
  ];

  const stepAccents = [
    "from-[#967BB6] to-[#7B5EA7]",
    "from-[#C2B280] to-[#A89865]",
    "from-[#3B719F] to-[#2A5A80]",
  ];

  return (
    <div className="py-16 px-6 gap-12 lg:px-0 lg:gap-20 lg:py-28 w-full flex flex-col items-center justify-center bg-[#FAFAFA]">

      {/* Header */}
      <div className="flex flex-col items-center gap-5 text-center">
        <span className="text-[#C2B280] font-sans font-bold tracking-[0.25em] uppercase text-xs lg:text-sm">
          Getting Started
        </span>
        <h2 className="font-playfair text-3xl leading-tight lg:leading-tight lg:text-5xl text-center text-[#1E1E1E]">
          {title}
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-[#967BB6] via-[#C2B280] to-[#3B719F] rounded-full mt-1"></div>
      </div>

      <div className="w-full max-w-7xl mx-auto flex flex-col md:flex-row items-stretch justify-center relative lg:px-8 gap-8 lg:gap-10 pl-12 lg:pl-8">

        {/* Connection Line visible on large screens */}
        <div className="hidden md:block absolute top-[40%] left-[12%] right-[12%] h-[2px] bg-gradient-to-r from-transparent via-[#C2B280]/30 to-transparent z-0"></div>
        {/* Connector dots */}
        <div className="hidden lg:flex absolute top-[40%] left-[12%] right-[12%] z-[1] items-center justify-between px-[15%]">
          {cards && cards.length > 1 && Array.from({ length: cards.length - 1 }).map((_, i) => (
            <div key={i} className="w-2 h-2 rounded-full bg-[#C2B280]/50 shadow-sm"></div>
          ))}
        </div>

        {cards &&
          cards.map((card: any, index: number) => {
            const accent = stepAccents[index % stepAccents.length];
            return (
              <div
                key={card.id || index}
                className="relative z-10 flex flex-col items-center flex-1 bg-white rounded-[2rem] border border-gray-100 shadow-sm transition-all duration-400 p-8 lg:p-10 card-hover-lift"
              >

                {/* Number marker */}
                <div className={`absolute -left-6 -top-6 lg:-top-8 lg:left-1/2 lg:-translate-x-1/2 flex items-center justify-center w-16 h-16 lg:w-20 lg:h-20 bg-gradient-to-br ${accent} rounded-2xl shadow-xl transition-transform duration-500 hover:scale-105`}>
                  <p className="text-white text-3xl lg:text-4xl font-playfair font-bold">
                    {card.count}
                  </p>
                </div>

                <div className="mt-8 flex flex-col gap-4 items-center">
                  <h3 className="font-playfair text-xl lg:text-2xl text-center text-[#1E1E1E] lg:mt-3">
                    {card.title}
                  </h3>

                  <p className="text-center text-base text-[#666666] leading-relaxed">
                    {card.description}
                  </p>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}
