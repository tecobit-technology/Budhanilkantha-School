import { bhanjyangVolumesSorted } from "./bhanjyang-data";

export const contact = {
  phones: [
    { label: "Reception", number: "015971520" },
    { label: "Account", number: "014370246" },
    { label: "School Health Care Center", number: "014376775" },
  ],
  email: "office@crestwoodacademy.edu.np",
  address: "Crestwood, Kathmandu, Nepal",
  accountLine:
    "015971520 (Reception), 014370246 (Account Section), 014376775 (School Health Care Center)",
};

export type NavItem = {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
};

export const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  {
    label: "About Us",
    href: "/about",
    children: [
      { label: "History", href: "/about-us/history" },
      { label: "Board OF Trustees", href: "/about-us/board-of-trustees" },
      { label: "Fobs", href: "/about-us/fobs" },
      { label: "Sebs", href: "/about-us/sebs" },
      { label: "School Profile ", href: "/about-us/school-profile" },
      { label: "School Management", href: "/about-us/school-management" },
      { label: "Senior Management Team", href: "/about-us/senior-management-team" },
    ],
  },
  {
    label: "Academics",
    href: "/academics",
    children: [
      { label: "Physics Department", href: "/academics/physics-department" },
      { label: "Art Department", href: "/academics/art-department" },
      { label: "Biology Department", href: "/academics/biology-department" },
      { label: "Chemistry Department", href: "/academics/chemistry-department" },
      { label: "Computer Science Department", href: "/academics/computer-science-department" },
      { label: "Computer Department", href: "/academics/computer-department" },
      { label: "Integrated Science Department", href: "/academics/integrated-science-department" },
      { label: "Nepali Department", href: "/academics/nepali-department" },
      { label: "Physics Department", href: "/academics/physics-department" },
      { label: "Mathematics Department", href: "/academics/mathematics-department" },
      { label: "Social Science Department", href: "/academics/social-science-department" },
    ],
  },
  {
     label: "Notice",
    href: "/notice",
    children: [
      { label: "General Notices", href: "/notice/general" },
      { label: "Tender Notices", href: "/notice/tender" },
      { label: "Vacancy", href: "/notice/vacancy" },
    ],
  },
  {
     label: "Bhanjyang (Annual Magazine)",
  href: "/bhanjyang",
  children: bhanjyangVolumesSorted.map((v) => ({
    label: v.title,
    href: `/bhanjyang/${v.slug}`,
  })),
  },
  {
    label: "Gallery",
    href: "/gallery",
    children: [
      { label: "Photo", href: "/gallery/photo" },
      { label: "Video", href: "/gallery/video" },
    ],
  },
  { label: "Contact", href: "/contact" },
  { label: "APPLY NOW", href: "/ApplyOnline" },
];

export const loginLinks = [
  { label: "Login", href: "/Login" },
  
];


export const tickerNotices = [
  { title: "Revised Tender Notice (Wall Construction)", href: "/notice/tender" },
  {
    title: "CA Contributes Rs. 14 Lakh to the Prime Minister's Disaster Relief Fund",
    href: "/notice/general",
  },
  { title: "Graduation Ceremony", href: "/notice/general" },
  { title: "INVITATION FOR BIDS", href: "/notice/tender" },
];

export type HeroSlide = {
  eyebrow: string;
  heading: string;
  sub: string;
  
  video: string;
  primaryCta: { label: string; href: string };
  secondaryCta: { label: string; href: string };
};

export const heroSlides: HeroSlide[] = [
  {
    eyebrow: "Center of Excellence",
    heading: "Crestwood Academy",
    sub: "A national school in Kathmandu, educating meritorious students from all 75 districts of Nepal since 1972.",
  
    video: "/Images/herovideo.mp4",
    primaryCta: { label: "Discover More", href: "/about-us/history" },
    secondaryCta: { label: "Login", href: "/Login" },
  },
  {
    eyebrow: "Center of Excellence",
    heading: "Academics",
    sub: "The national curriculum from Class 4 to Class 12, taught in small classes by faculty accomplished in their fields.",
    
    video: "/Images/herovideo.mp4",
    primaryCta: { label: "Discover More", href: "/about-us/history" },
    secondaryCta: { label: "Login", href: "/Login" },
  },
  {
    eyebrow: "Center of Excellence",
    heading: "Boarding Life",
    sub: "Around seven hundred students live on campus, learning independence, discipline and friendship under one roof.",
   
    video: "/Images/herovideo.mp4",
    primaryCta: { label: "Discover More", href: "/about-us/history" },
    secondaryCta: { label: "Login", href: "/Login" },
  },
  {
    eyebrow: "Center of Excellence",
    heading: "Character & Values",
    sub: "Discipline, service and unity in diversity — character practised daily, not only preached.",
   
    video: "/Images/herovideo.mp4",
    primaryCta: { label: "Discover More", href: "/about-us/history" },
    secondaryCta: { label: "Login", href: "/Login" },
  },
];

export const welcome = {
  eyebrow: "Welcome",
  paragraphs: [
    "Crestwood Academy is a residential, college-preparatory school in Kathmandu. It educates meritorious students drawn from all seventy-five districts of Nepal, and prepares them for higher study and for lives of service to their country.",
    "Since 1972 we have combined a rigorous national curriculum with small classes, a structured residential community and a long-standing tradition of discipline, so that every student grows academically, physically and morally.",
  ],
  links: [
    { label: "Academics", href: "/academics" },
    { label: "School Profile", href: "/about-us/school-profile" },
    { label: "Fobs", href: "/about-us/fobs" },
  ],
};

export type Pillar = {
  id: string;
  label: string;
  image: string;
  heading: string;
  body: string;
};

export const pillars: Pillar[] = [
  {
    id: "academics",
    label: "Academics",
    image: "/Images/about.png",
    heading: "Academics",
    body: "CA follows the national curriculum from Class 4 through Class 12, taught in classes small enough for every teacher to know each student by name. Our faculty are accomplished practitioners in their subjects, and the timetable leaves room for laboratories, studio work and independent study that carry students towards university entrance.",
  },
  {
    id: "boarding",
    label: "Boarding Life",
    image: "/Images/library.png",
    heading: "Boarding Life",
    body: "Roughly seven hundred students live on campus in a structured residential community supervised by wardens and house masters. Daily life here builds independence, timekeeping, hygiene and teamwork — and it brings students from all seventy-five districts under one roof, where the friendships they form often last a lifetime.",
  },
  {
    id: "values",
    label: "Character & Values",
    image: "/Images/classroom.png",
    heading: "Character & Values",
    body: "Discipline, service and unity in diversity sit at the centre of a CA education. Students lead their own morning assemblies, keep their rooms and books in order, and take part in community and national service, so that character is practised every day rather than only talked about.",
  },
];

export const quoteCta = {
  quote:
    "Our small classes, accomplished faculty and residential community give every student the attention, the confidence and the friendships that carry them into university and beyond.",
  ctas: [
    { label: "Inquire", href: "/contact" },
    { label: "Apply Now", href: "/ApplyOnline" },
    { label: "Visit Campus", href: "/contact" },
  ],
};

export const footerContactBlocks = [
  {
    heading: "Reception",
    lines: [{ label: "Phone", value: "015971520", href: "tel:015971520" }],
  },
  {
    heading: "Account Section",
    lines: [{ label: "Phone", value: "014370246", href: "tel:014370246" }],
  },
  {
    heading: "School Health Care Center",
    lines: [{ label: "Phone", value: "014376775", href: "tel:014376775" }],
  },
  {
    heading: "Admission",
    lines: [{ label: "Email", value: "office@crestwoodacademy.edu.np", href: "mailto:office@crestwoodacademy.edu.np" }],
  },
];

export const introduction = {
  paragraphs: [
    "The idea of a model school offering quality all-round education to meritorious students from every walk of life, in an environment that fosters unity in diversity, was conceived in 1964. It was initiated by the Late King Mahendra in consultation with the then British Council representative, Lynndon Clough.",
    "After years of planning and forethought, Crestwood Academy came into existence in 1972 as a joint venture between the Government of Nepal and the Government of the United Kingdom. Nepal provided the land at Crestwood; the British government provided the technical expertise, curriculum design and financial assistance that shaped the school.",
    "Teaching began across the primary and secondary blocks with a residential community drawn from every district of Nepal. That model endures today: small class sizes, a structured daily routine, and an expectation that students serve their community and their country.",
  ],
  image: "/Images/school.png",
  imageAlt: "Academic block at Crestwood Academy",
  href: "/about-us/history",
};

export const latestNews = [
  {
    title: "Invitation for Bids No: CA/NCB/Works/01/2082-83",
    publishedOn: "2082-08-23",
    excerpt:
      "Crestwood Academy (CA) invites electronic bids from eligible bidders for the construction of East Side Boundary Wall with V-Drain, Toe Wall and Landscaping, Main Gate and Guard Post (Package-C \u201c1st Phase\u201d) under National Competitive Bidding \u2013 Single Stage Two Envelope Bidding procedures.",
    image: "/Images/announcement.jpg",
    href: "/notice/tender",
  },
  {
    title: "Graduation Ceremony",
    publishedOn: "2083-05-10",
    excerpt:
      "Due to the tragic situation resulting from the recent flooding, the Graduation Ceremony for 7000E Batch, originally scheduled for Sunday, 14 Bhadra 2083 (30 August 2026), has been postponed until further notice. The revised date will be communicated to students and parents at a later time.",
    image: "/Images/events.jpg",
    href: "/notice/general",
  },
];

export const ourEvents = [
  {
    title: "Natural Panorama",
    image: "/Images/events.jpg",
    href: "/gallery/photos",
  },
];

export const embeds = {
  // Replace with the school's own calendar / page IDs.
   googleCalendar:
    "https://calendar.google.com/calendar/embed?src=en.np%23holiday%40group.v.calendar.google.com&ctz=Asia%2FKathmandu&mode=AGENDA&showTitle=0&showPrint=0&showTabs=0&showCalendars=0&showTz=0",
  facebookPage:
    "https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fcrestwoodacademyofficial&tabs=timeline&width=340&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true",
  // Direct link, used as a fallback whenever the embed above can't load
  // (common on localhost/Safari, where cross-site tracking protection
  // blocks Facebook's iframe cookies).
  facebookPageUrl: "https://www.facebook.com/crestwoodacademyofficial/?ref=embed_page",
  youtube: "https://www.youtube.com/embed/uN9dYPZy9e0",
};

export const footerLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about-us/history" },
  { label: "Academics", href: "/academics" },
  { label: "Notice", href: "/notice" },
  { label: "Bhangyang ( Annual Magazine )", href: "/bhanjyang" },
  { label: "Gallery", href: "/gallery/photo" },
  { label: "Library", href: "/gallery/video " },
];

export const footerBlurb =
  "Crestwood Academy (CEEB Code: 689070) is the government designated National School of Nepal, located at Crestwood, Kathmandu.";

export const socials = {
  facebook: "https://www.facebook.com/crestwoodacademyofficial/?ref=embed_page",
  youtube: "https://www.youtube.com/embed/uN9dYPZy9e0",
  linkedin: "https://www.linkedin.com/school/crestwood-academy"
};

// ─────────────────────────────────────────────────────────────
// PASTE THIS AT THE BOTTOM OF lib/site-data.ts
// All text/dates/FAQs below are SAMPLE content – replace with your real info.
// ─────────────────────────────────────────────────────────────

export const applyPage = {
  hero: {
    heading: "Ready to join Crestwood?",
    image: "/Images/hero.png",
  },

  // Left red sidebar
  sidebarTitle: "Admission",
  sidebarLinks: [
    { label: "Start Here", href: "#ready" },
    { label: "Campus Tours", href: "/contact" },
    { label: "Request Information", href: "/contact" },
    { label: "Ready To Apply?", href: "#ready", active: true },
    { label: "Admission Day", href: "#admission-day" },
    { label: "Tuition & Financial Aid", href: "#dates" },
    { label: "FAQs", href: "#faqs" },
  ],
  portalHref: "/Login", // where "Start your application" should go
  portalLabel: "Start Your Application",

  // Intro (right of sidebar)
  intro: {
    heading: "It's time to soar.",
    paragraphs: [
      "We are thrilled your family is ready to apply to Crestwood Academy.",
      "As students pass through our doors, they are nurtured and challenged – body, mind and character. Students from all seventy-five districts of Nepal have made their mark on the world. It is an honor for us to be a part of our students' stories.",
      "We look forward to the possibility of becoming a part of yours.",
    ],
    // uses embeds.youtube by default – change here if you have a different video
    video: "https://www.youtube.com/embed/TWX2c9577Sk",
  },

  dates: {
    heading: "2026 - 2027 Important Dates",
    items: [
      {
        id: "d1",
        title: "Aug 1: Admission applications available for the 2027-2028 school year",
        content: "Application forms open online. Create your admission portal account to begin.",
        action: { label: "Apply Now", href: "/Login" },
      },
      { id: "d2", title: "Nov 7: Fall admission day / entrance testing", content: "Candidates sit the written entrance test on campus." },
      { id: "d3", title: "Nov–Feb: Family interview period", content: "Shortlisted families are invited for an interview with the admissions team." },
      { id: "d4", title: "Jan 8: Recommended application deadline", content: "Complete applications received by this date receive priority review." },
      { id: "d5", title: "Feb 6: Spring admission day", content: "A second opportunity for testing and campus visits." },
      { id: "d6", title: "Feb 8: Supplemental application materials due", content: "Transcripts, recommendations and any remaining documents." },
      { id: "d7", title: "Mar 6: Admission decisions", content: "Decisions are shared with families through the admission portal." },
      { id: "d8", title: "Mar 10: Enrollment contract due", content: "Accepted families confirm their place by returning the enrollment contract." },
    ],
  },

  steps: {
    heading: "I'm ready to apply. What now?",
    items: [
      { title: "Create your admission portal account", image: "/Images/classroom.png" },
      { title: "Submit application & student records", image: "/Images/library.png" },
      { title: "Complete the entrance test", image: "/Images/about.png" },
      { title: "Attend a family interview", image: "/Images/events.jpg" },
    ],
  },

  faq: {
    heading: "Application FAQ",
    image: "/Images/cultural.png",
    items: [
      { id: "f1", title: 'What is the "Admission Portal"?', content: "The portal is where you create an account, fill in the application, upload documents and track your status." },
      { id: "f2", title: "How do I access my admission portal?", content: "Use the Apply Now button on this page and sign in with the email you registered with." },
      { id: "f3", title: "Can I save and continue my work?", content: "Yes. Your progress is saved automatically and you can return at any time before the deadline." },
      { id: "f4", title: "What documents do I need to apply?", content: "Recent report cards, a birth certificate, passport-size photographs and any recommendation letters." },
      { id: "f5", title: "How do I request official records?", content: "Ask your current school to send records directly to the admissions office." },
      { id: "f6", title: "What if I cannot request an academic recommendation from a teacher?", content: "Contact the admissions office and we will guide you on an alternative." },
      { id: "f7", title: "What entrance test do you require?", content: "Candidates sit our own written entrance test on the scheduled admission day." },
      { id: "f8", title: "Must parents be present at the family interview?", content: "Yes, at least one parent or guardian should attend with the student." },
    ],
  },

  admissionDay: {
    eyebrow: "Admission",
    text: "Each year, Crestwood Academy opens its campus to prospective families. Join us to meet faculty and current students, hear about our programs and offerings, and see for yourself what CA is all about.",
    cta: { label: "Join us for Admission Day", href: "/contact" },
  },
};