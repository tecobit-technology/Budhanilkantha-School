import Class11BookListLayout from "@/components/Class11BookList/Class11BookListLayout";

type Row = {
  subject: string;
  kind: string;
  book: string;
  authors: string;
  publisher: string;
  givenByDept: string;
  buyOutside: string;
  remarks?: string;
  /** How many rows the subject cell should span, for the first row of a
   *  multi-row subject (e.g. Mathematics has Course Books + Reference
   *  Books). Omit on the rows that follow. */
  subjectSpan?: number;
};

const ROWS: Row[] = [
  { subject: "Nepali", kind: "Course Books", book: "नेपाली कक्षा ११", authors: "पा. वि. के.", publisher: "जनक शिक्षा", givenByDept: "No", buyOutside: "Yes" },
  { subject: "English", kind: "Course Books", book: "English Grade 11", authors: "CDC", publisher: "Janak Shikshya", givenByDept: "No", buyOutside: "Yes" },
  { subject: "Mathematics", subjectSpan: 2, kind: "Course Books", book: "Basic Mathematics Grade 11", authors: "Prof. Bhanu Chandra Bajracharya", publisher: "Sukunda Pustak Bhawan", givenByDept: "No", buyOutside: "Yes" },
  { subject: "Mathematics", kind: "Reference Books", book: "Treatise Mathematics", authors: "HS Pandit, GB Thapa & Others", publisher: "United Nepal Publication", givenByDept: "No", buyOutside: "Yes" },
  { subject: "Physics", subjectSpan: 3, kind: "Course Books", book: "Any Grade 11 Physics Book Aproved by CDC", authors: "", publisher: "", givenByDept: "No", buyOutside: "Yes" },
  { subject: "Physics", kind: "Reference Books", book: "Advanced level physics", authors: "Nelkon and Parker", publisher: "Heinemann", givenByDept: "No", buyOutside: "Yes", remarks: "Optional" },
  { subject: "Physics", kind: "Reference Books", book: "University Physics", authors: "Young, Freedman, Ford", publisher: "Addison-Wesley", givenByDept: "No", buyOutside: "Yes", remarks: "Optional" },
  { subject: "Chemistry", subjectSpan: 3, kind: "Course Books", book: "Modern Chemistry Grade XI (Latest Edition)", authors: "Dr Daman Raj Gautam et al.", publisher: "Asmita Publication", givenByDept: "No", buyOutside: "Yes" },
  { subject: "Chemistry", kind: "Course Books", book: "Elementry Chemistry Practicals XI (Latest Edition)", authors: "Dr Raja Ram Pradhananga", publisher: "Taleju Publication", givenByDept: "No", buyOutside: "Yes" },
  { subject: "Chemistry", kind: "Reference Books", book: "Fundamental of Chemistry Grade XI (Latest Edition)", authors: "Moti Kaji Athapit & Others", publisher: "Taleju Publication", givenByDept: "No", buyOutside: "Yes", remarks: "Optional" },
  { subject: "Biology", subjectSpan: 3, kind: "Course Books", book: "Any Grade 11 Biology Book Aproved by CDC", authors: "", publisher: "", givenByDept: "No", buyOutside: "Yes" },
  { subject: "Biology", kind: "Course Books", book: "Any Grade 11 Biology Practical Book Aproved by CDC", authors: "", publisher: "", givenByDept: "No", buyOutside: "Yes" },
  { subject: "Biology", kind: "Reference Books", book: "Any Grade 11 Biology Book Aproved by CDC", authors: "", publisher: "", givenByDept: "No", buyOutside: "Yes", remarks: "Optional" },
  { subject: "Computer Science", subjectSpan: 2, kind: "Course Books", book: "Modern Computer Science", authors: "Hemanta Baral, Ram Datta Bhatta,", publisher: "Vidyarthi Pustak Bhandar", givenByDept: "No", buyOutside: "Yes" },
  { subject: "Computer Science", kind: "Reference Books", book: "Computer Science", authors: "Hari Bdr Khadka, Ramesh Kunwar", publisher: "Advance Saraswati Prakashan", givenByDept: "No", buyOutside: "Yes", remarks: "Optional" },
];

export default function Class11BookList() {
  return (
    <Class11BookListLayout title="Class 11 Book List, 2082 B.S." active="Class 11 Book List, 2082 B.S.">
      <div className="text-[15px] text-neutral-700">
        <div className="text-center mb-5">
          <p className="font-bold text-neutral-800 text-[16px] m-0">Budhanilkantha School</p>
          <p className="font-bold text-neutral-800 text-[16px] m-0">Book Lists for AS Level (A1) Students</p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-[12.5px] min-w-[760px]">
            <thead>
              <tr className="bg-neutral-100">
                <th className="border border-neutral-300 px-2 py-2 text-left">Class</th>
                <th className="border border-neutral-300 px-2 py-2 text-left">Subject</th>
                <th className="border border-neutral-300 px-2 py-2 text-left"></th>
                <th className="border border-neutral-300 px-2 py-2 text-left">
                  Name of the Course Books &amp; Reference Books
                </th>
                <th className="border border-neutral-300 px-2 py-2 text-left">Authors</th>
                <th className="border border-neutral-300 px-2 py-2 text-left">Publisher</th>
                <th className="border border-neutral-300 px-2 py-2 text-left">
                  Given By the Department
                </th>
                <th className="border border-neutral-300 px-2 py-2 text-left">
                  Students need to by from outside
                </th>
                <th className="border border-neutral-300 px-2 py-2 text-left">Remarks</th>
              </tr>
            </thead>
            <tbody>
              {ROWS.map((r, i) => {
                const isFirstOfSubject = i === 0 || ROWS[i - 1].subject !== r.subject;
                return (
                  <tr key={i} className={i % 2 === 1 ? "bg-[#eaf3e6]" : ""}>
                    {i === 0 ? (
                      <td
                        className="border border-neutral-300 px-2 py-2 align-top font-semibold italic bg-neutral-100"
                        rowSpan={ROWS.length}
                      >
                        Class
                        <br />
                        11
                      </td>
                    ) : null}
                    {isFirstOfSubject ? (
                      <td
                        className="border border-neutral-300 px-2 py-2 align-top font-semibold"
                        rowSpan={r.subjectSpan ?? 1}
                      >
                        {r.subject}
                      </td>
                    ) : null}
                    <td className="border border-neutral-300 px-2 py-2 align-top">{r.kind}</td>
                    <td className="border border-neutral-300 px-2 py-2 align-top">{r.book}</td>
                    <td className="border border-neutral-300 px-2 py-2 align-top">{r.authors}</td>
                    <td className="border border-neutral-300 px-2 py-2 align-top">{r.publisher}</td>
                    <td className="border border-neutral-300 px-2 py-2 align-top text-center">{r.givenByDept}</td>
                    <td className="border border-neutral-300 px-2 py-2 align-top text-center">{r.buyOutside}</td>
                    <td className="border border-neutral-300 px-2 py-2 align-top">{r.remarks ?? ""}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </Class11BookListLayout>
  );
}
