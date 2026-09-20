import SebsLayout from "@/components/Sebs/SebsLayout";

export default function Sebs() {
  return (
    <SebsLayout title="SEBS (Alumni)" crumbLabel="SEBS" active="SEBS (Alumni)">
      <div className="space-y-5 text-[15px] leading-[1.9] text-neutral-700">
        <p>
          <a
            href="http://www.sebsonline.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#2f9e44] hover:underline"
          >
            http://www.sebsonline.org/
          </a>
        </p>
      </div>
    </SebsLayout>
  );
}
