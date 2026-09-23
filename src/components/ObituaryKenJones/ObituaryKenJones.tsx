import ObituaryKenJonesLayout from "@/components/ObituaryKenJones/ObituaryKenJonesLayout";

export default function ObituaryKenJones() {
  return (
    <ObituaryKenJonesLayout title="Obituary: Mr. Ken Jones" active="Obituary: Mr. Ken Jones">
      <div className="text-[15px] text-neutral-700">
        {/* Swap this for the real photo once you have it —
            /public/images/notice/ken-jones.jpg, for example. */}
        <div className="w-[300px] p-2 bg-white border border-neutral-200 shadow-sm">
          <img
            src="https://picsum.photos/seed/ken-jones-obituary/560/560"
            alt="Mr. Ken Jones"
            className="w-full aspect-square object-cover block"
          />
        </div>

        <p className="font-bold text-neutral-800 mt-6">Obituary: Mr. Ken Jones</p>
      </div>
    </ObituaryKenJonesLayout>
  );
}
