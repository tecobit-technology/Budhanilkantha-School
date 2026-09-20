import SeniorManagementTeamLayout from "@/components/SeniorManagementTeam/SeniorManagementTeamLayout";

type Member = { role: string; detail: string };

const MEMBERS: Member[] = [
  { role: "Chairperson", detail: "Mr Keshar Bahadur Khulal, Principal" },
  { role: "Member Secretary", detail: "Mrs Purni Lama, Vice-Principal (BL)" },
  { role: "Member", detail: "Mr Upendra Adhikari, Vice-Principal (SL)" },
  { role: "Member", detail: "Mr Narayan Prasad Paneru" },
  { role: "Member", detail: "Mr Atiram K C" },
  { role: "Member", detail: "Mr Prem Narayan Bhusal" },
  { role: "Member", detail: "Mrs Timila Shakya Acharya" },
  { role: "Member", detail: "Mr Bhisma Raj Thapa" },
  { role: "Member", detail: "Mr Kashi Ram Sharma" },
  { role: "Invitee", detail: "Mrs Mridula Karmacharya" },
];

export default function SeniorManagementTeam() {
  return (
    <SeniorManagementTeamLayout
      title="Senior Management Team (SMT)"
      crumbLabel="Senior Management Team"
      active="Senior Management Team (SMT)"
    >
      <div className="space-y-5 text-[15px] leading-[1.9] text-neutral-700">
        <p>
          Senior Management Team (SMT) is the main body to advise and
          support the Principal in overall administration of the school.
          The current SMT comprises of the following personnel.
        </p>

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
    </SeniorManagementTeamLayout>
  );
}
