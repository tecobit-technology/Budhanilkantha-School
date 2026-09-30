import BoardOfTrusteesLayout from "@/components/BoardOfTrustees/BoardOfTrusteesLayout";

type Member = { role: string; detail: string };

const MEMBERS: Member[] = [
  { role: "Chairperson", detail: "Secretary, Ministry of Education, Science and Technology" },
  { role: "Vice-chairperson", detail: "Nominee of the Government of Nepal (Ministry of Education)" },
  { role: "Member", detail: "Joint Secretary, Ministry of Energy, Water Resources and Irrigation" },
  { role: "Member", detail: "Under Secretary, Ministry of Education, Science and Technology" },
  { role: "Member", detail: "Nominee of the Nepal Bankers' Association" },
  { role: "Member", detail: "Nominee of the National Planning Commission" },
  { role: "Member", detail: "Nominee of the Federation of Nepalese Chambers of Commerce and Industry (FNCCI)" },
  { role: "Member", detail: "Principal, Crestwood Academy" },
  { role: "Member", detail: "One alumnus of the school nominated by the Government of Nepal" },
  { role: "Member Secretary", detail: "Administrative Officer (CAO), Crestwood Academy" },
];

export default function BoardOfTrustees() {
  return (
    <BoardOfTrusteesLayout
      title="Board Of Trustees (BOT)"
      crumbLabel="Board of Trustees"
      active="Board Of Trustees (BOT)"
    >
      <div className="space-y-5 text-[15px] leading-[1.9] text-neutral-700">
        <p className="text-justify">
          The Board of Trustees is the apex governing body of Crestwood
          Academy. It is constituted under the Crestwood Academy
          (Development Board) Act and oversees the overall policy, guidance,
          direction and governance of the school.
        </p>

        <h2 className="ca-subheading">
          Composition of the Board of Trustees
        </h2>

        <div className="space-y-3">
          {MEMBERS.map((m, i) => (
            <div
              key={`${m.role}-${i}`}
              className="grid grid-cols-[180px_1fr] gap-4 text-neutral-700"
            >
              <span>{m.role}</span>
              <span>{m.detail}</span>
            </div>
          ))}
        </div>
      </div>
    </BoardOfTrusteesLayout>
  );
}