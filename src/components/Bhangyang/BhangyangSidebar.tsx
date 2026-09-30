import Link from "next/link";

function slugify(label: string): string {
  return label
    .toLowerCase()
    .replace(/[.,()]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

/** Left column of the volume list, top to bottom. */
const VOLUME_COLUMN_ONE = [
  "Bhanjyang Vol.43, 2020",
  "Bhanjyang Vol.39, 2017",
  "Bhanjyang Vol.38, 2016",
  "Bhanjyang Vol.2, 1978",
  "Bhanjyang Vol.4, 1980",
  "Bhanjyang Vol.5, 1981",
  "Bhanjyang Vol.6, 1982",
  "Bhanjyang Vol.7, 1983",
  "Bhanjyang Vol.8, 1984",
  "Bhanjyang Vol.29, 2005",
  "Bhanjyang Vol.9, 1985",
  "Bhanjyang Vol.12, 1988",
  "Bhanjyang Vol.10, 1986",
  "Bhanjyang Vol.11, 1987",
  "Bhanjyang Vol.13, 1989",
  "Bhanjyang Vol.14, 1990",
  "Bhanjyang Vol.15, 1991",
  "Bhanjyang Vol.16, 1992",
  "Bhanjyang Vol.17, 1993",
  "Bhanjyang Vol.18, 1994",
  "Bhanjyang Vol.19, 1995",
  "Bhanjyang Vol.20, 1996",
  "Bhanjyang Vol.21, 1997",
];

/** Right column of the volume list, top to bottom. */
const VOLUME_COLUMN_TWO = [
  "Bhanjyang Vol.22, 1998",
  "Bhanjyang Vol.23, 1999",
  "Bhanjyang Vol.24, 2000",
  "Bhanjyang Vol.25, 2001",
  "Bhanjyang Vol.26, 2002",
  "Bhanjyang Vol.27, 2003",
  "Bhanjyang Vol.30, 2007",
  "Bhanjyang Vol.31, 2008",
  "Bhanjyang Vol.32, 2009",
  "Bhanjyang Vol.33, 2010",
  "Bhanjyang Vol.34, 2011",
  "Bhanjyang Vol.35, 2013",
  "Bhanjyang Vol.36, 2014",
  "Bhanjyang Vol.37, 2015",
  "Bhanjyang Vol.38, 2016",
  "Bhanjyang Vol.39, 2017",
  "Bhanjyang Vol.44, 2021",
  "Bhanjyang Vol.7, 1983 ( Special Edition)",
  "Bhanjyang Vol.40, 2018",
  "Bhanjyang Special 1981",
  "Bhanjyang Vol.28, 2004",
  "Bhanjyang Vol.1, 1977",
  "Bhanjyang Vol.45, 2023",
];

function VolumeColumn({
  items,
  active,
}: {
  items: string[];
  active: string;
}) {
  return (
    <div className="border border-neutral-200 rounded overflow-hidden divide-y divide-neutral-200">
      {items.map((label, i) => {
        const isActive = label === active;

        return (
          <Link
            key={`${label}-${i}`}
            href={`/bhanjyang/${slugify(label)}`}
            className={`block px-4 py-3 text-[13.5px] leading-snug transition-colors ${
              isActive
                ? "bg-[#2f9e44] text-white font-medium"
                : "text-neutral-700 hover:bg-neutral-50 hover:text-[#2f9e44]"
            }`}
          >
            {label}
          </Link>
        );
      })}
    </div>
  );
}

export default function BhanjyangVol43Sidebar({
  active,
}: {
  active: string;
}) {
  return (
    <div>
      <h2 className="ca-subheading mb-2">
        Bhanjyang Annual
      </h2>

      <div className="grid grid-cols-2 gap-5">
        <VolumeColumn
          items={VOLUME_COLUMN_ONE}
          active={active}
        />

        <VolumeColumn
          items={VOLUME_COLUMN_TWO}
          active={active}
        />
      </div>
    </div>
  );
}