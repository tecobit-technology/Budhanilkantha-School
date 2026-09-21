<<<<<<< HEAD
export type Faculty = { name: string; qualification: string };

export type DepartmentData = {
  /** Heading shown on the page and used to highlight the active sidebar item. */
  active: string;
  /** Introductory paragraphs about the department and its role. */
  description: string[];
  /** Faculty members. When empty, the page shows a "to be updated" note. */
  faculty: Faculty[];
};

export const academicDepartments: Record<string, DepartmentData> = {
  "nepali-department": {
    active: "Nepali Department",
    description: [],
    faculty: [
      { name: "Mrs P Poudel", qualification: "Head of Department, MA, M Ed. ( TU)" },
=======
export type Faculty = {
  name: string;
  /** Shown in its own column (e.g. "Head of Department"). */
  role?: string;
  qualification: string;
};

export type Department = {
  slug: string;
  /** Sidebar / dropdown / heading label. */
  label: string;
  /** Wording of the line above the faculty table. */
  intro: string;
  /** "ruled" = bordered rows (Nepali), "plain" = borderless rows. */
  style: "ruled" | "plain";
  faculty: Faculty[];
};

const listedBelow = (label: string) =>
  `Faculty members of ${label} are listed below:`;

export const departments: Department[] = [
  {
    slug: "nepali-department",
    label: "Nepali Department",
    intro: listedBelow("Nepali Department"),
    style: "ruled",
    faculty: [
      { name: "Mrs P Poudel", role: "Head of Department", qualification: "MA, M Ed. ( TU)" },
>>>>>>> f238de886d48e20a38f258baef05dd59a0ab26bf
      { name: "Mr G P Acharya", qualification: "MA. (TU), Acharya & B.Ed. ( MSU)" },
      { name: "Mr P N Bhusal", qualification: "MA Nep and Soc., LLB & B Ed, PGD PC (TU)" },
      { name: "Mr B R Lamsal", qualification: "MA, M.Phil & B Ed (TU)" },
      { name: "Mr G Timilsina", qualification: "MA , Acharya & B Ed. (NSU)" },
      { name: "Mr H S Dhungana", qualification: "M Ed & MA Nep,Eco and Soc.(TU)" },
    ],
  },
<<<<<<< HEAD
  "english-department": {
    active: "English Department",
    description: [
      "The English Department develops students' proficiency in the English language and literature. English is a compulsory subject throughout the school, from the national curriculum of Grades 5 to 10, through the NEB Grades 11 and 12 programme, and up to the Cambridge AS and A-Level where English Language or English General Paper (EGP) is required for certification.",
    ],
    faculty: [],
  },
  "mathematics-department": {
    active: "Mathematics Department",
    description: [
      "The Mathematics Department builds students' understanding of mathematics from the fundamentals to advanced applications. Mathematics is a compulsory subject in the national curriculum of Grades 5 to 10 and remains compulsory in the NEB Grades 11 and 12 Science programme as well as in the Cambridge A-Level course, where Further Mathematics is offered as part of select subject combinations.",
    ],
    faculty: [],
  },
  "social-science-department": {
    active: "Social Science Department",
    description: [
      "The Social Science Department teaches Social Studies as a compulsory subject in the national curriculum of Grades 5 to 10. The department helps students understand history, geography, civics and economics, and prepares them for the Social Studies paper of the Secondary Education Examination (SEE).",
    ],
    faculty: [],
  },
  "integrated-science-department": {
    active: "Integrated Science Department",
    description: [
      "The Integrated Science Department introduces students in the national curriculum of Grades 5 to 10 to the natural sciences, covering the basic principles of physics, chemistry and biology through a coordinated, integrated approach. It prepares students for the Science paper of the Secondary Education Examination (SEE).",
    ],
    faculty: [],
  },
  "physics-department": {
    active: "Physics Department",
    description: [
      "The Physics Department teaches both theoretical and practical physics. Physics is a compulsory subject in the NEB Grades 11 and 12 Science programme and is also offered at the Cambridge A-Level as part of the PCB, PCE, PCF and PCC subject combinations.",
    ],
    faculty: [],
  },
  "biology-department": {
    active: "Biology Department",
    description: [
      "The Biology Department offers life-science education from the school years through the higher secondary level. Biology is an elective subject in the NEB Grades 11 and 12 Science programme (alongside Computer Science) and is a core member of the PCB combination at the Cambridge A-Level.",
    ],
    faculty: [],
  },
  "chemistry-department": {
    active: "Chemistry Department",
    description: [
      "The Chemistry Department teaches the principles of chemistry through classroom instruction and laboratory work. Chemistry is a compulsory subject in the NEB Grades 11 and 12 Science programme and is a component of the PCB, PCE, PCF and PCC combinations at the Cambridge A-Level.",
    ],
    faculty: [],
  },
  "health-physical-education-department": {
    active: "Health & Physical Education Department",
    description: [
      "The Health & Physical Education Department is responsible for the physical well-being and fitness of students. Health, Population and Environment Education is taught as a compulsory subject in the national curriculum of Grades 5 to 10, and the department coordinates the school's wide-ranging sporting and co-curricular programme.",
    ],
    faculty: [],
  },
  "computer-science-department": {
    active: "Computer Science Department",
    description: [
      "The Computer Science Department teaches computing skills and computer science. Computer Science is offered as an elective subject in the Secondary Education Examination (SEE) and in the NEB Grades 11 and 12 Science programme, and is part of the PCC and EBC combinations at the Cambridge A-Level.",
    ],
    faculty: [],
  },
  "art-department": {
    active: "Art Department",
    description: [
      "The Art Department nurtures creativity and artistic expression alongside academic subjects. Through studio work in drawing, painting and design, as well as the school's drama and cultural activities, the department contributes to the school's aim of providing all-round education.",
    ],
    faculty: [],
  },
};
=======
  {
    slug: "english-department",
    label: "English Department",
    intro: listedBelow("English Department"),
    style: "plain",
    faculty: [
      { name: "Mr G D Joshi", role: "Head of Department", qualification: "M.Ed. (TU)" },
      { name: "Mr. N Nepal", role: "Guidance Counselor", qualification: "MA & B Ed (TU)" },
      { name: "Mr K. Bhusal", qualification: "MA (TU) & M Ed (KU)" },
      { name: "Mrs B Lama Prajapati", qualification: "MA & M Ed (TU)" },
      { name: "Mr. B. Sharma", qualification: "MA & B Ed ( TU)" },
      { name: "Mrs. N Jha", qualification: "MA & B Ed (TU)" },
      { name: "Mrs. P D Sharma", qualification: "MA (India)" },
      { name: "Mrs. D D Dhami", qualification: "MA (TU)" },
      { name: "Ms. S Basnet", qualification: "MA (TU)" },
    ],
  },
  {
    slug: "mathematics-department",
    label: "Mathematics Department",
    intro: "Faculty members of the Mathematics Department are as under :",
    style: "plain",
    faculty: [
      { name: "Mr. P. N. Chaudhary", role: "Head of Department", qualification: "MA (TU)" },
      { name: "Mr. A. K. C.", qualification: "M Ed (TU), B E (Hon.) (UK) & PGCE (UK)" },
      { name: "Mr. T. Adhikari", qualification: "MA (GU) & PGDE (KU)" },
      { name: "Mrs. M. Gurung", qualification: "M Ed (KU)" },
      { name: "Mr. N Paudel", qualification: "M Ed, M.Phil (TU)" },
      { name: "Ms. D Kutu", qualification: "MA & BEd (TU) & M.Ed. (KU)" },
      { name: "Mr. H S Pandit", qualification: "M Sc (TU)" },
      { name: "Mr P R Ghimire", qualification: "M Sc ( TU)" },
      { name: "Mr P Pun", qualification: "Msc & B.Ed. (TU)" },
      { name: "Mr S Koirala", qualification: "MA (TU)" },
      { name: "Mr I P Shrestha", qualification: "M Ed (KU)" },
      { name: "Mr U Shrestha", qualification: "M Ed (KU)" },
    ],
  },
  // Not shown in either recording yet: faculty list still to be added.
  {
    slug: "social-science-department",
    label: "Social Science Department",
    intro: listedBelow("Social Science Department"),
    style: "plain",
    faculty: [],
  },
  {
    slug: "integrated-science-department",
    label: "Integrated Science Department",
    intro: "Faculty members of Integrated Science Department are as under:",
    style: "plain",
    faculty: [
      { name: "Mr S Lamsal", role: "Head of Department", qualification: "M.Sc. Env , B.Ed. (PU), M.Ed. (TU)" },
      { name: "Mr L N Sapkota", qualification: "M Sc, Env (TU)" },
      { name: "Mr H R Devkota", qualification: "M. Sc., MA, B.Ed. (TU)" },
      { name: "Mr A Gotame", qualification: "M Sc (TU)" },
      { name: "Ms J Poudel", qualification: "M Sc, Agriculture (TU)" },
    ],
  },
  {
    slug: "physics-department",
    label: "Physics Department",
    intro: "Faculty members of Physics Department are as under:",
    style: "plain",
    faculty: [
      { name: "Mr R Adhikari", role: "Head of Department", qualification: "M Sc & B .Ed (TU)" },
      { name: "Mr U Adhikari", role: "Vice-Principal (SL)", qualification: "M Sc & B Ed (TU)" },
      { name: "Mr H R Tiwari", role: "Guidance Counselor", qualification: "M Sc & B Ed (TU)" },
      { name: "Mr V K Adhikari", role: "Guidance Counselor", qualification: "M Sc & B Ed (TU)" },
      { name: "Mr K Gurung", qualification: "M Sc & B Ed (TU)" },
      { name: "Mr S Bhaila", qualification: "M Sc & B Ed (TU)" },
      { name: "Mr B Karki", qualification: "M Sc (India) & M Ed (KU)" },
    ],
  },
  {
    slug: "biology-department",
    label: "Biology Department",
    intro: "Faculty members for the biology department are as follows:",
    style: "plain",
    faculty: [
      { name: "Mr. R Rana", role: "Head of Department", qualification: "M Sc. , M.Ed (Sci. Edu) and B.Ed.(TU)" },
      { name: "Mrs P Lama", role: "Vice-Principal (BL)", qualification: "M Sc & M Ed (TU)" },
      { name: "Mrs S Bhandari", qualification: "M Sc. (TU)" },
      { name: "Mr B Rijal", qualification: "M Sc. , B.Ed. (TU)" },
    ],
  },
  {
    slug: "chemistry-department",
    label: "Chemistry Department",
    intro: "Faculty members of the Chemistry Department are as under:",
    style: "plain",
    faculty: [
      { name: "Mr S. Thapa", role: "Head of Department", qualification: "M Sc & B.Ed., LLB (TU)" },
      { name: "Mr R K Thapa", qualification: "M Sc & B.Ed. (TU)" },
      { name: "Mrs M Karmacharya", role: "Guidance Counselor", qualification: "M Sc & B Ed (TU)" },
      { name: "Mrs U Kansakar", qualification: "M Sc & B Ed (TU)" },
      { name: "Mr D P Kayastha", qualification: "M Phil, M Sc & B Ed (TU)" },
      { name: "Mr S. K. Deo", qualification: "M Sc & B.Ed. (TU)" },
      { name: "Mr. K.B. Puri", qualification: "MSc & B Ed (TU)" },
    ],
  },
  {
    slug: "health-physical-education-department",
    label: "Health & Physical Education Department",
    intro: "The faculty members of Health and Physical Education Department are as under:",
    style: "plain",
    faculty: [
      { name: "Mr K P Koirala", role: "Head of Department", qualification: "B Ed (TU)" },
      { name: "Mr M Karki", role: "Alumni Liaison Officer", qualification: "M Ed ( TU)" },
      { name: "Mrs S Bhujel", qualification: "B Ed (TU)" },
      { name: "Mr R K Maharjan", qualification: "B Ed (TU)" },
      { name: "Mr A B Khadka", qualification: "MA ( TU)" },
      { name: "Mr K Adhikari", role: "Swimming Instructor", qualification: "" },
      { name: "Mr S Khadka", role: "Karate Instructor", qualification: "" },
    ],
  },
  {
    slug: "computer-science-department",
    label: "Computer Science Department",
    intro: "The faculty members of Computer Science Department are as under:",
    style: "plain",
    faculty: [
      { name: "Mrs.S. Lamichhane", role: "Head of Department", qualification: "M.SC. (PU), MA & B Ed (TU)" },
      { name: "Ms. K Baral", qualification: "Msc. IT ( (SMU) , M.Phil (KU) & B.Ed. (TU)" },
      { name: "Mr. D Yadav", qualification: "M. C. A. (ICA - IGNOU, New Delhi India)" },
      { name: "Mr P D Chhetri", qualification: "Msc. IT ( (SMU)" },
      { name: "Mr R Rijal", qualification: "Msc. IT ( TU)" },
    ],
  },
  {
    slug: "art-department",
    label: "Art Department",
    intro: "The faculty members of Arts Department are as under:",
    style: "plain",
    faculty: [
      { name: "Mr D P Chapai", role: "Head of Department", qualification: "M Mus, BL & B Ed (TU)" },
      { name: "Mr R Manandhar", qualification: "MA, M Fine Art, B Com & B Ed (TU)" },
      { name: "Mrs S Gopali", qualification: "MA (Dance)" },
    ],
  },
];

export const getDepartment = (slug: string) =>
  departments.find((d) => d.slug === slug);
>>>>>>> f238de886d48e20a38f258baef05dd59a0ab26bf
