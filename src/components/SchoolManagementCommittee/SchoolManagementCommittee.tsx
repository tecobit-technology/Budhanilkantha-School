import SchoolManagementCommitteeLayout from "@/components/SchoolManagementCommittee/SchoolManagementCommitteeLayout";

type Member = { no: string; role: string; name: string; position: string };

const MEMBERS: Member[] = [
  { no: "1", role: "Chairperson", name: "Mr Shiva Kumar Sapkota", position: "Joint -Secretary, Ministry of Education & Sports" },
  { no: "2", role: "Member", name: "Mr Tanka Nath Lamsal", position: "Joint Secretary, Ministry of Finance" },
  { no: "3", role: "Member", name: "Mr Suresh Kumar Joshi", position: "Chief, Education Dev. & Coordination Unit, Ktm" },
  { no: "4", role: "Member", name: "Mr Uttam Bahadur Bista", position: "Vice-Chairperson, FOBS" },
  { no: "5", role: "Member", name: "Mr Bikash Adhikari", position: "SEBS Representative" },
  { no: "6", role: "Member", name: "Mrs Anuradha Sharma", position: "Member" },
  { no: "7", role: "Member", name: "Mr Narayan Prasad Paneru", position: "Teachers' Representative" },
  { no: "8", role: "Member Secretary", name: "Mr Keshar Bahadur Khulal", position: "Principal" },
];

export default function SchoolManagementCommittee() {
  return (
    <SchoolManagementCommitteeLayout
      title="School Management Committee (SMC)"
      active="School Management Committee"
    >
      <div className="space-y-5 text-[15px] leading-[1.9] text-neutral-700 text-justify">
        <p>
          The School Management Committee (SMC) is responsible for making,
          administering and monitoring the policies and programmes. SMC is
          chaired by the Joint Secretary, Ministry of Education and
          Sports. The Ministry for Finance, SEBS, FOBS and teachers of
          Budhanilkantha School have permanent representation in the SMC.
        </p>

        <h2 className="text-[15px] font-semibold text-neutral-800 pt-2">
          The list of current members of the SMC is as under:
        </h2>

        <div className="space-y-3">
          {MEMBERS.map((m) => (
            <div
              key={m.no}
              className="grid grid-cols-[150px_220px_1fr] gap-4 text-neutral-700"
            >
              <span>
                {m.no} {m.role}
              </span>
              <span>{m.name}</span>
              <span>{m.position}</span>
            </div>
          ))}
        </div>
      </div>
    </SchoolManagementCommitteeLayout>
  );
}
