import Image from "next/image";

export default function AbcHub() {
  const title = "A Day in the Life at an ABC Hub";
  const description = "Our learning hubs provide a calm, structured environment where children can thrive. Here's what a typical day looks like:";
  const lists = [
    { time: "9:00 AM", title: "Arrival & Morning Circle", description: "Children settle in and share their intentions for the day" },
    { time: "9:30 AM", title: "Focus Learning Time", description: "Guided activities and individual projects with expert support" },
    { time: "11:00 AM", title: "Creative Exploration", description: "Arts, crafts, and hands-on learning experiences" },
    { time: "12:00 PM", title: "Lunch & Social Time", description: "Community meal and outdoor play" },
    { time: "1:00 PM", title: "Afternoon Projects", description: "Collaborative work and skill development" },
    { time: "3:00 PM", title: "Reflection & Home Time", description: "Sharing accomplishments and preparing for tomorrow" }
  ];
  const image = { url: "https://stunning-event-ffaced628f.media.strapiapp.com/92eafea43130f3c02c12b0993ef65f823f204aa0_2_97e62656ce.png" };

  const cardAccents = [
    "group-hover:border-t-[#967BB6]",
    "group-hover:border-t-[#C2B280]",
    "group-hover:border-t-[#3B719F]",
    "group-hover:border-t-[#8A9A5B]",
    "group-hover:border-t-[#967BB6]",
    "group-hover:border-t-[#C2B280]",
  ];

  return (
    <section className="w-full py-16 px-4 lg:py-24 relative overflow-hidden bg-[#FAFAFA]">
      {/* Soft Ambient Background Blurs */}
      <div className="absolute top-[-10%] right-[-5%] w-[40rem] h-[40rem] bg-gradient-to-br from-[#967BB6] to-[#3B719F] rounded-full opacity-[0.05] blur-[140px] pointer-events-none"></div>
      <div className="absolute bottom-[-10%] left-[-10%] w-[40rem] h-[40rem] bg-gradient-to-tr from-[#C2B280] to-[#8A9A5B] rounded-full opacity-[0.05] blur-[140px] pointer-events-none"></div>

      {/* Subtle Dot Pattern */}
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
        <div className="flex flex-col items-center gap-6 lg:gap-8 mb-16 lg:mb-24 text-center">
          <span className="inline-block px-5 py-2 bg-white border border-[#C2B280]/20 text-[#C2B280] text-xs font-bold uppercase tracking-[0.3em] rounded-full shadow-sm">
            Experience the Hub
          </span>
          <h2 className="font-playfair text-2xl leading-tight lg:leading-tight lg:text-5xl text-[#1E1E1E] drop-shadow-sm">
            {title}
          </h2>
          {description && (
            <p className="text-[#666666] text-lg leading-relaxed lg:text-xl lg:max-w-4xl font-light">
              {description}
            </p>
          )}
          <div className="w-24 h-1 bg-gradient-to-r from-[#967BB6] via-[#C2B280] to-[#3B719F] rounded-full"></div>
        </div>

        {/* Cinematic Centered Image */}
        {image?.url && (
          <div className="w-full flex justify-center mb-24 lg:mb-32 relative">
            {/* Shadow glow behind image */}
            <div className="absolute inset-4 bg-gradient-to-b from-[#C2B280]/10 to-[#967BB6]/10 rounded-[3rem] blur-2xl -z-10"></div>
            <div className="relative rounded-[2.5rem] lg:rounded-[3.5rem] max-w-5xl w-full overflow-hidden shadow-xl border border-gray-100/80 z-10 transition-shadow duration-500 hover:shadow-2xl">
              <Image
                src={`${image.url}`}
                width={1200}
                height={800}
                alt={title || "The Hub"}
                unoptimized
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        )}

        {/* Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7 w-full">
          {lists &&
            lists.map((list: any, index: number) => (
              <div
                key={list.id || index}
                className={`group relative bg-white rounded-[2rem] border-t-[3px] border-t-transparent border border-gray-100 shadow-sm px-6 py-8 lg:p-8 flex flex-col gap-6 transition-all duration-500 card-hover-lift ${cardAccents[index % cardAccents.length]}`}
              >

                {/* Time Badge & Chronological Number */}
                <div className="flex justify-between items-center z-10">
                  <div className="px-4 py-2 rounded-xl bg-gray-50 border border-gray-200/80 flex items-center justify-center font-sans tracking-widest text-xs lg:text-sm text-gray-600 transition-colors duration-300 group-hover:bg-gray-100">
                    {list.time}
                  </div>

                  {/* Subtle step number backdrop */}
                  <span className="font-playfair text-5xl font-bold italic text-gray-100 select-none transition-colors duration-500 group-hover:text-gray-200">
                    {(index + 1).toString().padStart(2, '0')}
                  </span>
                </div>

                {/* Text Content */}
                <div className="flex flex-col gap-3 relative z-10">
                  <h3 className="font-playfair text-xl lg:text-2xl font-semibold text-[#1E1E1E]">
                    {list.title}
                  </h3>
                  <p className="text-[#666666] text-sm lg:text-base leading-relaxed">
                    {list.description}
                  </p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}
