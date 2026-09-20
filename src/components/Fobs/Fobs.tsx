import FobsLayout from "@/components/Fobs/FobsLayout";

const EXECUTIVE_COMMITTEE = [
  "Mr. Janak Raj Dhungana Chairperson",
  "Mr. Uttam Bahadur Bista Vice-chairperson",
  "Mr. Rana Bahadur Tamang Member",
  "Mr. Rajan Adhikari Member",
  "Mr. Laba Raj Joshi Member",
  "Mr. Suman Tiwari Member",
  "Mrs. Sanjita Shrestha Member",
  "Maj. Gen. Dr. Arun Kumar Neopane (Rtd.)  Member (SEBS Representative)",
  "Mr. Ganesh Timilsina Member (Teacher-Staff Representative)",
  "Mr. Upendra Adhikari Vice-Principal, Member",
  "Mrs. Purni Lama Vice-Principal, Member",
  "Mr. Kashi Ram Sharma CAO, Treasurer",
  "Mr. Keshar Bahadur Khulal Principal, Member-Secretary",
];

export default function Fobs() {
  return (
    <FobsLayout title="FOBS (Parents’ Body)" crumbLabel="FOBS" active="FOBS (Parents' Body)">
      <div className="space-y-5 text-[15px] leading-[1.9] text-neutral-700">
        <p>
          Friends of Budhanilkantha School (FOBS) is the association of
          parents and guardians of the students of Budhanilkantha School.
        </p>

        <h2 className="text-[15px] font-semibold text-neutral-800 pt-2">
          FOBS Executive Committee
        </h2>

        <div className="space-y-3">
          {EXECUTIVE_COMMITTEE.map((m) => (
            <p key={m} className="m-0">
              {m}
            </p>
          ))}
        </div>
      </div>
    </FobsLayout>
  );
}
