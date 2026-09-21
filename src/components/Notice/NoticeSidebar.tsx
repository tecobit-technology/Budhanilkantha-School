import Link from "next/link";

function slugify(label: string): string {
  return label
    .toLowerCase()
    .replace(/[.,()/]/g, "")
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

/** Left column of the Notice list, top to bottom. */
const NOTICE_COLUMN_ONE = [
  "Class 5 Scholarship Result, 2082 B.S.",
  "Class 11 Book List, 2082 B.S.",
  "Invitation for Bids No: BNKS/NCB/Works/01/2082-83",
  "Teachers and Psychological Counsellor Wanted",
  "Scholarship Application Form for the A/Y, 2083",
  "Wanted Non-teaching staff",
  "Class 5 Entrance Exam",
  "A level Admission Notice, 2083",
  "Interaction Programme for new parents",
  "Book List for the Academic Year, 2083 ( Classes 5 to 10)",
  "Notice for Written and Practical Test",
  "Auction Form",
  "Notice for Interview (Staff Selection)",
  "Notice (Staff Selection)",
  "Book Lists for 2083 (Post SEE Students - Class 11 & 12)",
  "Application Form, Internal Promotion",
  "Vacancy Notice for the post of Vice-Principal",
  "Graduation Ceremony",
  "Revised Tender Notice (Wall Construction)",
];

/** Right column of the Notice list, top to bottom. */
const NOTICE_COLUMN_TWO = [
  "A Level Book List, 2025",
  "Ration Tender Notice",
  "Obituary: Mr. Ken Jones",
  "Class 5 Scholarship Notice for the A/Y, 2083",
  "Fee-Paying Admission Notice for the A/Y, 2083 B.S.",
  "Job Application Form",
  "Class 6 to 9 Entrance Examination",
  "Results of Entrance Examinations 2083",
  "CIE A Level Entrance Exam Results 2026",
  "Class 5 Scholarship Results, 2083 B.S.",
  "Admission open for Grade 11",
  "Auction Notice",
  "NEB Class 11 Entrance Results Published",
  "Book Lists for 2083 (Post SEE Students A1)",
  "Statistics Teacher Wanted",
  "Press Released",
  "INVITATION FOR BIDS",
  "BNKS Contributes Rs. 14 Lakh to the Prime Minister's Disaster Relief Fund",
];

function NoticeColumn({
  items,
  active,
}: {
  items: string[];
  active: string;
}) {
  return (
    <div className="flex flex-col gap-2">
      {items.map((label) => {
        const isActive = label === active;
        return (
          <Link
            key={label}
            href={`/notice/${slugify(label)}`}
            className={`block px-4 py-3 text-[13.5px] leading-snug rounded transition-colors ${
              isActive
                ? "bg-[#2f9e44] text-white font-medium"
                : "border border-neutral-200 text-neutral-700 hover:border-[#2f9e44] hover:text-[#2f9e44]"
            }`}
          >
            {label}
          </Link>
        );
      })}
    </div>
  );
}

export default function ClassFiveScholarshipResultSidebar({
  active,
}: {
  active: string;
}) {
  return (
    <div>
      <h2 className="text-[17px] font-semibold text-[#16253d] mb-4">
        Notice
      </h2>
      <div className="grid grid-cols-2 gap-3">
        <NoticeColumn items={NOTICE_COLUMN_ONE} active={active} />
        <NoticeColumn items={NOTICE_COLUMN_TWO} active={active} />
      </div>
    </div>
  );
}
