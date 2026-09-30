export default function LoginFooter() {
  return (
    <div className="fixed bottom-8 left-1/2 z-[9998] -translate-x-1/2">
      <div
        className="
          relative flex items-center
          gap-6
          bg-[#5145b5]
          px-7 py-3
          text-sm text-white
          shadow-md
        "
      >
        {/* Left angled end */}
        <div
          className="
            absolute -left-4 top-0
            h-full w-4
            bg-[#5145b5]
            [clip-path:polygon(100%_0,100%_100%,0_100%)]
          "
        />

        {/* Phone */}
        <div className="flex items-center gap-2 whitespace-nowrap">
          <span className="text-base">☎</span>
          <span>015971520</span>
        </div>

        {/* Email */}
        <div className="flex items-center gap-2 whitespace-nowrap">
          <span className="text-base">✉</span>
          <span>info@crestwoodacademy.edu.np</span>
        </div>

        {/* Location */}
        <div className="flex items-center gap-2 whitespace-nowrap">
          <span className="text-base">●</span>
          <span>P. O. Box 1018, Kathmandu</span>
        </div>

        {/* Right angled end */}
        <div
          className="
            absolute -right-4 top-0
            h-full w-4
            bg-[#5145b5]
            [clip-path:polygon(0_0,100%_0,0_100%)]
          "
        />
      </div>
    </div>
  );
}