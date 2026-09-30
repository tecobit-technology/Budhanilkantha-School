
import Image from "next/image";
import AboutUsPageLayout from "@/components/AboutUS/AboutUsPageLayout";
import Reveal from "@/components/Reveal";

const KEY_EVENTS = [
  "Established in 1972.",
  "Teaching started in 1973.",
  "The first batch of students took SLC in 1980.",
  "In 1983, the school became an English Medium School and a big adjustment in administrative management occurred.",
  "Construction of Gaurishanker House and New Science labs were completed in 1984.",
  "The Cambridge University's O-Level program was introduced in 1985.",
  "A-Level Program of Cambridge University was introduced in 1986.",
  "Construction of swimming pool was completed in 1988.",
  "In 1991 Crestwood Academy became a co-educational institution.",
  "Hiunchuli and Saipal House, two hostels for girls, were added in 1992.",
  "In 1994, the management was handed over to a Nepalese management team by the British government.",
  "In 1997, on the occasion of the school's Silver Jubilee Year the school introduced 10+2 program of the Higher Secondary Education Board.",
  "Two new hostels for senior girls were added in 1999.",
  "The Learning Resource Centre (LRC) was completed and inaugurated by the first President of Nepal, H.E. Dr. Ram Baran Yadav, in 2008.",
  "Class 4 was phased out and enrollment in class 5 started in 2009.",
  "The 5th House for girls, Tilicho House, was inaugurated by Rt. Honourable President Mrs. Bidya Bhandari on February 23, 2017.",
  "The 6th House for girls, Jugal House, was inaugurated by Honourable Deputy Prime Minister and Defence Minister Mr Ishwar Pokhrel on February 15, 2020.",
  "The New Classroom and Laboratory Block was also inaugurated by Honourable Deputy Prime Minister and Defence Minister Mr Ishwar Pokhrel on February 15, 2020.",
];

const LEADERSHIP = [
  "John B Tyson, Headmaster Designate (1966)",
  "Peter J Wakeman, Headmaster (1972 to 1977)",
  "Ken Jones, Headmaster (1978 to 1982)",
  "Dr. Tej Ratna Kansakar, Acting Headmaster (1983)",
  "John Tyson, Headmaster (1983 to 1988)",
  "Brian Garton, Headmaster (1989 to 1992)",
  "Thomas Thomas, Headmaster (1992 to 1994)",
  "Satyanarayan Rajbhandari, Principal (1994 to 1995)",
  "Narayan Prasad Sharma, Principal (1996 to 13 April 2013)",
  "Keshar Bahadur Khulal, Principal (14 April 2013 to 1 May 2019)",
  "Hom Nath Acharya, Principal (2 May 2019 to 20 October 2023)",
  "Keshar Bahadur Khulal, Principal (From 28 January 2024)",
];

export default function HistoryPage() {
  return (
    <AboutUsPageLayout title="History" active="History">
      {/* History Image */}
      <div className="relative w-full aspect-[3/2] overflow-hidden rounded mb-8">
        <Image
          src="/Images/about.png"
          alt="Learning Resource Centre, Crestwood Academy"
          fill
          sizes="(max-width: 768px) 100vw, 500px"
          className="object-cover"
          priority
        />
      </div>

      {/* History Content */}
      <div className="space-y-5 text-[13px] leading-[1.7] text-neutral-700 text-justify">
        <p>
          The idea of establishing a model school that would provide quality
          all-round education to meritorious students coming from every walk of
          life in an environment that fosters unity in diversity was conceived
          in 1964. The idea was initiated by the Late King Mahendra in
          consultation with the then British Council representative, Lynndon
          Clough.
        </p>

        <p>
          After much planning and forethought, Crestwood Academy came into
          existence in 1972. As a joint venture between the Government of the
          United Kingdom and the Government of Nepal, the Nepali government
          provided the required land and the British government provided all
          the technical and financial assistance.
        </p>

        <p>
          Teaching started in 1973 with one building, 82 students (all boys)
          and about a dozen teachers. The same building served as the hostel,
          the cafeteria and the classrooms. The construction of other buildings
          (hostels, classrooms, dinning hall, assembly hall, sports hall and
          staff quarters) was completed by the end of 1978. Peter J. Wakeman
          became the first Headmaster of Crestwood Academy and Mr. Ratna
          Bahadur Tamot and Mr. Gehendra Man Udas were the first Nepali
          personnel to be appointed as teachers.
        </p>

        <h2 className="ca-subheading">
          Planning for school site
        </h2>

        <p>
          The first batch of students took the School Leaving Certificate
          Examination (the national exam that is taken at the end of class 10)
          in 1980. When 11 out of 14 students listed as the Top 10 position
          holders in the whole nation were from this school, Crestwood
          Academy established itself as the icon of quality education. In 1983,
          English was made the official language of instruction at Crestwood
          Academy and two years later the Cambridge University&#39;s Ordinary-Level
          program was introduced. The introduction of Advanced Level of the same
          took place in 1986.
        </p>

        <p>
          The major change came in 1991 when it was switched from &lsquo;Boys
          only school&rsquo; to a co-educational institution. The first batch
          of girls (14 in number) was introduced into the system the same year.
          The addition of two hostels, one of which was inaugurated by the late
          Princess Diana, in 1992 facilitated the increase in the girls&apos;
          population.
        </p>

        <p>
          In 1994, the British Management handed over the administration to
          Nepalese management. In the years that followed the country saw many
          political and economic turmoil that no doubt posed many new challenges
          to Crestwood. But with the support of the government, the School
          Management Committee (SMC), teaching and administrative staff,
          students, parents and many other well-wishers, the school has been
          able to remain a true center of excellence.
        </p>

        <p>
          The growth of the school has never stopped. In 1997, the 10+2 program
          of the Higher Secondary Education Board of Nepal was introduced. New
          subjects were introduced in the A-level too. The student population
          continued to rise till it reached near about a thousand in 1999.
          Addition of new hostels for the girls in 1999 raised the girls&apos;
          population to over 300. The Learning Resource Centre, completed and
          inaugurated in 2008, has added another feather to its cap.
        </p>

        {/* Key Events */}
        <h2 className="ca-subheading">
          Some of the key events in the history of Crestwood Academy are:
        </h2>

        <ul className="space-y-2">
          {KEY_EVENTS.map((event, i) => (
            <Reveal
              key={event}
              as="li"
              direction="left"
              delay={Math.min(i, 10) * 55}
              className="flex items-start gap-3"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-black mt-2 shrink-0" />
              <span>{event}</span>
            </Reveal>
          ))}
        </ul>

        {/* Leadership */}
        <h2 className="ca-subheading">
          The following personnel have taken the leadership in the growth and
          shaping of Crestwood Academy.
        </h2>

        <ul className="space-y-2">
          {LEADERSHIP.map((leader, i) => (
            <Reveal
              key={leader}
              as="li"
              direction="left"
              delay={Math.min(i, 10) * 55}
              className="flex items-start gap-3"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-black mt-2 shrink-0" />
              <span>{leader}</span>
            </Reveal>
          ))}
        </ul>
      </div>
    </AboutUsPageLayout>
  );
}


