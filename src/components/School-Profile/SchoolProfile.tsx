import SchoolProfileLayout from "./SchoolProfileLayout";

const SUBJECT_COMBINATIONS = [
  "Physics, Chemistry and Biology (PCB)",
  "Physics, Chemistry and Economics (PCE)",
  "Physics, Chemistry and Further Mathematics (PCF)",
  "Physics, Chemistry and Computer Science (PCC)",
  "Economics, Business and Accounting (EBA)",
  "Economics, Business and Computer Science (EBC)",
];

const LEADERSHIP_AREAS = [
  "Council of School Prefects: School Captain, Deputy School Captains, School Prefects",
  "Council of Academic Prefects: Academic Captain, Academic Prefects",
  "House Responsibilities: House Captain, Vice-captain, Sports Captain, House Prefects",
  "Club Responsibilities: President, Vice-presidents, Secretary, Treasurer, Executive Members",
];

const BOARD_OF_COUNSELORS = [
  "Chairperson — Mr. Keshar Bahadur Khulal, Principal",
  "Co-Chairperson — Mr. Upendra Adhikari, Vice Principal (SL)",
  "Guidance Counselor — Mrs. Mridula Joshi Karmacharya",
  "Mr. Vijaya Kumar Adhikari",
  "Mr. Hari Ram Tiwari",
  "Mr. Nawaraj Nepal",
];

export default function SchoolProfile() {
  return (
    <SchoolProfileLayout
      title="School Profile"
      active="School Profile"
    >
      {/* School Profile Content */}
      <div className="space-y-5 text-[13px] leading-[1.7] text-neutral-700 text-justify">
        {/* General */}
        <h2 className="ca-subheading">
          General
        </h2>

        <p>
          Nepal, the land of the legendary Yeti, the birth place of Lord
          Buddha and home to the highest mountain of the world &ndash; Mt.
          Everest, is one of the developing countries in the world.
          Situated in Crestwood Municipality, in the Kathmandu Valley,
          Crestwood Academy (CEEB Code: 689070), is the government
          designated National School of Nepal. It is a fully residential
          English medium school established in December 1972 with the
          joint cooperation of the Government of Nepal and the Government
          of the United Kingdom (UK).
        </p>

        <p>
          In the first two decades of its operation, the school was headed
          by a succession of British Headmasters who did an excellent job
          of establishing and shaping the school into a &ldquo;Center of
          Excellence&rdquo;. The school was handed over to the Nepalese
          management in 1994, and since then it has continued to maintain
          the same high standards on all fronts. At present, the number of
          faculty is 81 and the support staff is 165, with a student
          faculty ratio of almost 14:1.
        </p>

        <p>
          The School is managed under the Public Trust, the main Trustee
          being the Ministry of Education. The Board of Trustees (BOT) and
          the School Management Committee (SMC) are chaired by the
          Secretary and the Joint Secretary of the Ministry of Education
          and Sports respectively. Society of Ex Crestwood Students
          (SEBS), the alumni association, and Friends of Crestwood
          Academy (FOBS) are the two organizations that keenly take
          interest in the welfare of the school.
        </p>

        <p>
          Currently there are 1123 students, of which 42% are girls.
          Students are selected from a wide range of socio-economic,
          cultural and ethnic backgrounds by the Ministry of Education and
          Sports, Nepal. Scholarships are provided to the meritorious and
          the needy ones from the weak social, economic and geographical
          backgrounds, and from all the seventy-seven districts of Nepal.
        </p>

        {/* Courses */}
        <h2 className="ca-subheading">
          Courses of Study at Crestwood Academy
        </h2>

        <p>
          Crestwood Academy follows the National Curriculum of Nepal
          from Grade 5 to 10. The main entry of the students takes place
          in Grade 5. At the end of Grade 10, the students sit for their
          Secondary Education Examination (SEE), which is conducted
          nationwide by the Ministry of Education, Office of the
          Controller of Examination, Nepal. The subjects offered in the
          SEE are: Nepali, Compulsory English, Compulsory Mathematics,
          Science, Social Studies, Health Population &amp; Environment
          Education, Additional Mathematics or Geography, and Computer
          Science or Accounts &amp; Office Management.
        </p>

        <p>
          After the SEE, selected students from inside as well as outside
          Crestwood Academy can take either of the two courses:
        </p>

        {/* NEB */}
        <h2 className="ca-subheading">
          1. Grades 11 &amp; 12 (Science) of National Education Board (NEB),
          Nepal
        </h2>

        <p>
          It is a two-year course in which students study English,
          Nepali, Mathematics, Physics and Chemistry as compulsory
          subjects, and Biology or Computer Science as elective subjects
          in grades 11 and 12. NEB administers the final examinations at
          the end of grade 12 and awards the certificate to students who
          pass every subject with at least Grade C.
        </p>

        {/* Cambridge */}
        <h2 className="ca-subheading">
          2. General Certificate of Education (GCE) of Cambridge Assessment
          International Education (CAIE), the University of Cambridge, UK
        </h2>

        <p>
          This is also a two-year course. English Language (AS Level) and
          Mathematics are compulsory for all students. In addition, each
          student takes one of the following subject combinations:
        </p>

        <ul className="space-y-2">
          {SUBJECT_COMBINATIONS.map((combination) => (
            <li
              key={combination}
              className="flex items-start gap-3"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#2f9e44] mt-2 shrink-0" />
              <span>{combination}</span>
            </li>
          ))}
        </ul>

        <p>
          Apart from these officially offered combinations of subjects,
          students are free to appear privately in any one or more extra
          subjects on their own initiative. Some students may choose to do
          English General Paper (EGP) instead of English Language. To
          pass the Cambridge International A-Levels, students need to
          pass at least 3 A-Level subjects and AS Level English Language
          or English General Paper (EGP).
        </p>

        <p>
          Crestwood Academy operates on a semester system. In the
          first year, students sit for two school examinations: Mid-Year
          and Annual. In the second year, they sit for a semester
          examination (September), a Mid-year examination (January) and a
          Trial Examination (March). They then take up their final
          examinations conducted by Cambridge Assessment International
          Education of the University of Cambridge UK (for A-Level), and
          by NEB Nepal (for Grade 12), in May and June, and the results
          are published in August of the same year.
        </p>

        {/* Leadership */}
        <h2 className="ca-subheading">
          Leadership, Responsibilities and Co-Curricular Program
        </h2>

        <p>
          Crestwood Academy aims to provide all-round education to
          its students through a wide range of sporting and numerous
          co-curricular activities such as drama and debating, community
          services, scouting, sports and so on. Students are actively
          involved in organizing and participating in various activities
          in and outside the school. Students also hold various
          leadership positions in the areas defined below:
        </p>

        <ul className="space-y-2">
          {LEADERSHIP_AREAS.map((area) => (
            <li
              key={area}
              className="flex items-start gap-3"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#2f9e44] mt-2 shrink-0" />
              <span>{area}</span>
            </li>
          ))}
        </ul>

        {/* Counseling */}
        <h2 className="ca-subheading">
          Counseling Service to College-bound Students
        </h2>

        <p>
          In order to cater to the growing need of providing academic
          counseling services to college-bound students, the school has
          set up the Board of Counselors as under:
        </p>

        <ul className="space-y-2">
          {BOARD_OF_COUNSELORS.map((member) => (
            <li
              key={member}
              className="flex items-start gap-3"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#2f9e44] mt-2 shrink-0" />
              <span>{member}</span>
            </li>
          ))}
        </ul>

        <p>
          Most of our teachers, who are also the recommenders for our
          students, use g-mail with &hellip;&hellip;@crestwoodacademy.edu.np so that
          official correspondence could be more authentic and reliable.
        </p>
      </div>
    </SchoolProfileLayout>
  );
}