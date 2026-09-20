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
      { name: "Mr G P Acharya", qualification: "MA. (TU), Acharya & B.Ed. ( MSU)" },
      { name: "Mr P N Bhusal", qualification: "MA Nep and Soc., LLB & B Ed, PGD PC (TU)" },
      { name: "Mr B R Lamsal", qualification: "MA, M.Phil & B Ed (TU)" },
      { name: "Mr G Timilsina", qualification: "MA , Acharya & B Ed. (NSU)" },
      { name: "Mr H S Dhungana", qualification: "M Ed & MA Nep,Eco and Soc.(TU)" },
    ],
  },
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