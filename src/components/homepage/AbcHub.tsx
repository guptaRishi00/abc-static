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

  const cardBgHover = [
    "group-hover:bg-[#967BB6]/[0.02]",
    "group-hover:bg-[#C2B280]/[0.02]",
    "group-hover:bg-[#3B719F]/[0.02]",
    "group-hover:bg-[#8A9A5B]/[0.02]",
    "group-hover:bg-[#967BB6]/[0.02]",
    "group-hover:bg-[#C2B280]/[0.02]",
  ];

  return (
    <section className="w-full py-16 px-4 lg:py-24 relative overflow-hidden bg-[#FAFAFA]">
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(#1E1E1E 1px, transparent 1px), linear-gradient(90deg, #1E1E1E 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
        }}
      ></div>

      <div className="max-w-7xl mx-auto flex flex-col items-center relative z-10 w-full">

        <div className="flex flex-col items-center gap-6 lg:gap-8 mb-16 lg:mb-24 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gray-200 bg-white">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C2B280]"></span>
            <span className="text-[#C2B280] font-sans font-medium uppercase text-xs tracking-widest">
              Experience the Hub
            </span>
          </div>
          <h2 className="font-playfair text-4xl leading-tight lg:leading-[1.1] lg:text-6xl text-[#1E1E1E] max-w-2xl">
            {title}
          </h2>
          {description && (
            <div className="flex md:items-center relative pl-6 mt-4">
              <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-gradient-to-b from-[#C2B280] to-transparent"></div>
              <p className="text-[#555555] text-lg leading-relaxed lg:text-xl lg:max-w-3xl font-light text-left">
                {description}
              </p>
            </div>
          )}
        </div>

        {image?.url && (
          <div className="w-full flex justify-center mb-24 lg:mb-32 relative group">
            <div className="absolute -inset-2 border border-gray-200 rounded-[3rem] opacity-0 transition-opacity duration-700 group-hover:opacity-100 scale-95 group-hover:scale-100 z-0"></div>
            <div className="relative rounded-3xl lg:rounded-[3rem] max-w-5xl w-full overflow-hidden border border-gray-100 shadow-sm z-10 transition-transform duration-700 group-hover:-translate-y-2">
              <Image
                src={`${image.url}`}
                width={1200}
                height={800}
                alt={title || "The Hub"}
                unoptimized
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 w-full">
          {lists &&
            lists.map((list: any, index: number) => {
              const accentBorder = cardAccents[index % cardAccents.length];
              const subtleBg = cardBgHover[index % cardBgHover.length];
              
              return (
              <div
                key={list.id || index}
                className={`group relative bg-white rounded-3xl border border-gray-100 px-6 py-8 lg:p-10 flex flex-col gap-8 transition-all duration-500 hover:shadow-lg hover:-translate-y-1 ${subtleBg}`}
              >
                <div className={`absolute top-0 left-0 w-full border-t-[3px] border-transparent transition-colors duration-500 rounded-t-3xl ${accentBorder}`}></div>

                <div className="flex justify-between items-center z-10">
                  <div className="px-4 py-1.5 rounded-full bg-gray-50 border border-gray-100 flex items-center justify-center font-sans tracking-widest text-xs lg:text-sm text-gray-500 transition-colors duration-500 group-hover:bg-white group-hover:text-[#1E1E1E]">
                    {list.time}
                  </div>

                  <span className="font-playfair text-5xl font-italic text-gray-100 select-none transition-all duration-500 group-hover:text-gray-300 group-hover:-translate-y-1 group-hover:scale-110">
                    {(index + 1).toString().padStart(2, '0')}
                  </span>
                </div>

                <div className="flex flex-col gap-4 relative z-10">
                  <h3 className="font-playfair text-xl lg:text-2xl font-medium text-[#1E1E1E] transition-colors duration-500">
                    {list.title}
                  </h3>
                  <p className="text-gray-500 text-sm lg:text-base leading-relaxed font-light">
                    {list.description}
                  </p>
                </div>
              </div>
            )})}
        </div>
      </div>
    </section>
  );
}
