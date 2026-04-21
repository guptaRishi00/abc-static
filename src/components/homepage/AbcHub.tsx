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
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#1E1E1E 1px, transparent 1px)`,
          backgroundSize: '24px 24px',
        }}
      ></div>

      <div className="max-w-7xl mx-auto flex flex-col items-center relative z-10 w-full">

        <div className="flex flex-col items-center gap-6 lg:gap-8 mb-16 lg:mb-24 text-center">
          <span className="inline-block px-5 py-2 bg-white border border-gray-200 text-[#C2B280] text-xs font-bold uppercase tracking-[0.3em] rounded-full">
            Experience the Hub
          </span>
          <h2 className="font-playfair text-2xl leading-tight lg:leading-tight lg:text-5xl text-[#1E1E1E]">
            {title}
          </h2>
          {description && (
            <p className="text-[#666666] text-lg leading-relaxed lg:text-xl lg:max-w-4xl font-light">
              {description}
            </p>
          )}
          <div className="w-24 h-1 bg-[#1E1E1E] rounded-full"></div>
        </div>

        {image?.url && (
          <div className="w-full flex justify-center mb-24 lg:mb-32 relative">
            <div className="relative rounded-3xl lg:rounded-[3.5rem] max-w-5xl w-full overflow-hidden border border-gray-200 z-10">
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7 w-full">
          {lists &&
            lists.map((list: any, index: number) => (
              <div
                key={list.id || index}
                className="group relative bg-white rounded-3xl border border-gray-200 px-6 py-8 lg:p-8 flex flex-col gap-6 transition-colors duration-300 hover:bg-gray-50"
              >

                <div className="flex justify-between items-center z-10">
                  <div className="px-4 py-2 rounded-xl bg-gray-50 border border-gray-200 flex items-center justify-center font-sans tracking-widest text-xs lg:text-sm text-gray-600 transition-colors duration-300 group-hover:bg-white">
                    {list.time}
                  </div>

                  <span className="font-playfair text-5xl font-bold italic text-gray-100 select-none transition-colors duration-500 group-hover:text-gray-200">
                    {(index + 1).toString().padStart(2, '0')}
                  </span>
                </div>

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
