export default function Mission({ data }: any) {
  const { cards } = data || {};

  return (
    <div className="w-full bg-white py-16 px-6 lg:py-24 border-b border-gray-100">
      <div className="max-w-7xl mx-auto flex flex-wrap items-start gap-y-12 gap-x-8 lg:gap-x-0">
        {cards &&
          cards.map((card: any, index: number) => (
            <div
              key={card.id || index}
              className="flex flex-col gap-5 w-full md:w-1/2 md:pr-8"
            >
              {/* Subtle accent line */}
              <div className="w-10 h-1 bg-gradient-to-r from-[#C2B280] to-[#E5D7A3] rounded-full"></div>
              <h2 className="font-playfair text-3xl lg:text-5xl text-[#111111] leading-tight">
                {card.title}
              </h2>
              <p className="text-[#666666] text-base lg:text-lg leading-relaxed max-w-md whitespace-pre-line">
                {card.description}
              </p>
            </div>
          ))}
      </div>
    </div>
  );
}
