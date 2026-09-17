import { embeds } from "@/lib/site-data";

export default function StayConnected() {
  return (
    <section className="bg-white py-16 lg:py-20">
      <div className="mx-auto grid max-w-[1100px] gap-10 px-4 lg:grid-cols-3">
        <div>
          <h2 className="mb-8 text-[28px] font-bold text-[#1c2340]">Upcoming Events</h2>
          <div className="h-[430px] w-full overflow-hidden rounded-sm border border-[#e2e6ee]">
            <iframe
              src={embeds.googleCalendar}
              title="Upcoming events calendar"
              className="h-full w-full"
              style={{ border: 0 }}
              loading="lazy"
            />
          </div>
        </div>

        <div>
          <h2 className="mb-8 text-[28px] font-bold text-[#2c4b8f]">Facebook</h2>
          <div className="h-[430px] w-full overflow-hidden rounded-sm border border-[#e2e6ee]">
            <iframe
              src={embeds.facebookPage}
              title="Budhanilkantha School on Facebook"
              className="h-full w-full"
              style={{ border: 0 }}
              scrolling="no"
              allow="clipboard-write; encrypted-media; picture-in-picture; web-share"
              loading="lazy"
            />
          </div>
        </div>

        <div>
          <h2 className="mb-8 text-[28px] font-bold text-[#d3151f]">Youtube</h2>
          <div className="aspect-video w-full overflow-hidden rounded-sm bg-black">
            <iframe
              src={embeds.youtube}
              title="Budhanilkantha School on YouTube"
              className="h-full w-full"
              style={{ border: 0 }}
              allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}