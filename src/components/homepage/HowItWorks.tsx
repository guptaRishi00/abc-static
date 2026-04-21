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
    <div className="relative py-16 px-6 gap-12 lg:px-0 lg:gap-20 lg:py-32 w-full flex flex-col items-center justify-center bg-[#FAFAFA] overflow-hidden">

      <div className="flex flex-col items-center gap-5 text-center z-10 w-full max-w-3xl px-4 relative">
        <div className="absolute top-1/2 left-0 right-0 h-px bg-gray-200 -translate-y-1/2 hidden md:block"></div>
        <span className="relative bg-[#FAFAFA] px-6 text-[#C2B280] font-sans font-bold tracking-[0.25em] uppercase text-xs lg:text-sm z-10">
          Getting Started
        </span>
        <h2 className="font-playfair text-4xl leading-tight lg:leading-[1.1] lg:text-6xl text-center text-[#1E1E1E] mt-2 relative z-10 bg-[#FAFAFA] px-4">
          {title}
        </h2>
      </div>

      <div className="w-full max-w-7xl mx-auto flex flex-col md:flex-row items-stretch justify-center relative lg:px-8 gap-8 lg:gap-12 pl-12 lg:pl-8 mt-4 lg:mt-8">

        <div className="hidden lg:flex absolute top-[25%] left-[10%] right-[10%] z-[1] items-center justify-between px-[15%]">
          {cards && cards.length > 1 && Array.from({ length: cards.length - 1 }).map((_, i) => (
            <div key={i} className="w-full h-px border-t border-dashed border-gray-300 mx-4"></div>
          ))}
        </div>

        {cards &&
          cards.map((card: any, index: number) => {
            const stepColors = ["group-hover:bg-[#967BB6]", "group-hover:bg-[#C2B280]", "group-hover:bg-[#3B719F]"];
            const hoverColor = stepColors[index % stepColors.length];

            return (
              <div
                key={card.id || index}
                className={`group relative z-10 flex flex-col items-center flex-1 bg-white rounded-[2rem] border border-gray-100 p-8 lg:p-12 transition-all duration-500 hover:shadow-xl hover:-translate-y-2`}
              >

                <div className={`absolute -left-6 -top-6 lg:-top-10 lg:left-1/2 lg:-translate-x-1/2 flex items-center justify-center w-16 h-16 lg:w-20 lg:h-20 bg-[#1E1E1E] rounded-full transition-colors duration-500 ${hoverColor} border-4 border-[#FAFAFA] shadow-sm`}>
                  <p className="text-white text-2xl lg:text-3xl font-playfair font-bold">
                    {card.count}
                  </p>
                </div>

                <div className="mt-6 lg:mt-12 flex flex-col gap-4 items-center">
                  <h3 className="font-playfair text-xl lg:text-2xl text-center text-[#1E1E1E] lg:mt-3 transition-colors duration-500">
                    {card.title}
                  </h3>

                  <p className="text-center text-sm lg:text-base text-[#666666] leading-relaxed font-light">
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
