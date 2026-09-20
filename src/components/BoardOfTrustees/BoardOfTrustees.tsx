import BoardOfTrusteesLayout from "@/components/BoardOfTrustees/BoardOfTrusteesLayout";

const CORE_MEMBERS = [
  "Chairperson Mr Choodamani Paudel, Secretary, Ministry of Education & Sports",
  "Member Mr Tanka Nath Lamsal, Joint Secretary, Ministry of Finance",
  "Member Mr Mitharam Adhikari, Mayor, Budhanilkantha Municipality",
  "Member Mr Janak Raj Dhungana, Chairperson, FOBS",
  "Member Mr Neelkrishna Tamrakar, SEBS Representative",
];

export default function BoardOfTrustees() {
  return (
    <BoardOfTrusteesLayout
      title="Board Of Trustees (BOT)"
      crumbLabel="Board of trustee"
      active="Board Of Trustees (BOT)"
    >
      <div className="space-y-5 text-[15px] leading-[1.9] text-neutral-700">
        <p>
          Budhanilkantha School is managed under the Public Educational
          Trust. The main Trustee being the Ministry for Education, the
          Board of Trustees is chaired by the Secretary, Ministry of
          Education and Sports of Nepal. The SEBS, FOBS and the Mayor of
          Budhanilkantha Municipality, too, have permanent representation
          in the Board of Trustees.
        </p>

        <h2 className="text-[15px] font-semibold text-neutral-800 pt-2">
          The list of current members of trustees is as follows:
        </h2>

        <ul className="space-y-1.5">
          {CORE_MEMBERS.map((m) => (
            <li key={m}>{m}</li>
          ))}
        </ul>

        <p className="pt-2">Member Secretary Mr Keshar Bahadur Khulal, Principal</p>

        <p className="pt-2">Member Mrs Kamla Bisht, Educationist, Nominee</p>
      </div>
    </BoardOfTrusteesLayout>
  );
}
