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