import TeachersAndPsychologicalCounsellorWantedLayout from "@/components/TeachersAndPsychologicalCounsellorWanted/TeachersAndPsychologicalCounsellorWantedLayout";

type Vacancy = { position: string; qualification: string; no: number };

const VACANCIES: Vacancy[] = [
  { position: "Mathematics Teacher", qualification: "Master's Degree in Mathematics (M.Sc. preferred)", no: 1 },
  { position: "Physics Teacher", qualification: "Master's Degree in Physics", no: 1 },
  { position: "Biology Teacher", qualification: "Master's Degree in Zoology or Botany", no: 1 },
  { position: "Economics Teacher", qualification: "Master's Degree in Economics", no: 1 },
  {
    position: "Psychological Counsellor",
    qualification:
      "Part-time, Bachelor's Degree in related field and 5 years working experience with school children.",
    no: 1,
  },
];

export default function TeachersAndPsychologicalCounsellorWanted() {
  return (
    <TeachersAndPsychologicalCounsellorWantedLayout
      title="Teachers and Psychological Counsellor Wanted"
      active="Teachers and Psychological Counsellor Wanted"
    >
      <div className="text-[15px] leading-[1.9] text-neutral-700">
        <p className="text-center font-medium m-0 mb-4">
          Teachers and Psychological Counsellor Wanted
        </p>

        <p className="text-justify">
          Budhanilkantha School requires teachers and psychological
          counsellor for new academic session, 2083 B.S. For teachers,
          preference will be given to candidates with A Level teaching
          experience. Female candidates are encouraged to apply. Salary
          and other benefits will be as per the school rules.
        </p>

        <div className="overflow-x-auto my-6">
          <table className="w-full border-collapse text-[13.5px] min-w-[560px]">
            <thead>
              <tr className="bg-neutral-100">
                <th className="border border-neutral-300 px-3 py-2 text-left">S.No.</th>
                <th className="border border-neutral-300 px-3 py-2 text-left">Position</th>
                <th className="border border-neutral-300 px-3 py-2 text-left">
                  Minimum Qualifications
                </th>
                <th className="border border-neutral-300 px-3 py-2 text-left">No.</th>
              </tr>
            </thead>
            <tbody>
              {VACANCIES.map((v, i) => (
                <tr key={v.position}>
                  <td className="border border-neutral-300 px-3 py-2 align-top">{i + 1}.</td>
                  <td className="border border-neutral-300 px-3 py-2 align-top">{v.position}</td>
                  <td className="border border-neutral-300 px-3 py-2 align-top">{v.qualification}</td>
                  <td className="border border-neutral-300 px-3 py-2 align-top text-center">{v.no}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="font-bold text-neutral-800">
          An application letter along with a completed Application Form and
          copies of all relevant documents should be submitted by 4
          <sup>th</sup> Falgun, 2082 through the school&rsquo;s email:{" "}
          office@bnks.edu.np.
        </p>

        <p className="font-bold text-neutral-800">
          Click{" "}
          <a href="#" className="text-[#2d6bbf] font-normal hover:underline">
            HERE
          </a>{" "}
          for Application Form.
        </p>

        <div className="mt-4">
          {/* Replace href with the real PDF/document path once it's hosted. */}
          <a
            href="#"
            className="inline-flex items-center gap-2 bg-[#2f9e44] text-white text-[13.5px] font-medium px-4 py-2.5 rounded hover:bg-[#278239] transition-colors"
          >
            <span aria-hidden="true">⬇</span>
            Teachers and Psychological Counsellor Wanted
          </a>
        </div>
      </div>
    </TeachersAndPsychologicalCounsellorWantedLayout>
  );
}
