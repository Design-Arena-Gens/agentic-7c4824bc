export default function Home() {
  const classes = [
    {
      grade: "Class 8",
      focus: "Concept foundations in Maths & Science",
      highlights: [
        "Strong basics for board transition",
        "Hands-on experiments & activities",
        "Weekly doubt clinics",
      ],
    },
    {
      grade: "Class 9",
      focus: "Advance your NCERT syllabus confidently",
      highlights: [
        "Chapter-wise notes & practice sets",
        "Regular unit tests with feedback",
        "Olympiad & NTSE guidance",
      ],
    },
    {
      grade: "Class 10",
      focus: "Board exam mastery for Maths & Science",
      highlights: [
        "Past paper analysis & mock boards",
        "Scoring answer-writing practice",
        "Numerical problem-solving drills",
      ],
    },
    {
      grade: "Class 11",
      focus: "Deep dive into PCM/PCB syllabus",
      highlights: [
        "Bridge from school to competitive prep",
        "Concept maps & formula banks",
        "Small group doubt-solving",
      ],
    },
    {
      grade: "Class 12",
      focus: "Final revision for boards & entrance exams",
      highlights: [
        "Targeted revision sprint",
        "Crash course for NEET/JEE basics",
        "Exam temperament workshops",
      ],
    },
  ];

  const usp = [
    {
      title: "Expert Faculty",
      description:
        "Experienced teachers mentoring Maheshkhunt students for more than 10 years with proven results.",
    },
    {
      title: "Balanced Offline + Online",
      description:
        "Daily classroom coaching supplemented by recorded lessons and doubt sessions on YouTube.",
    },
    {
      title: "Personal Progress Tracking",
      description:
        "Monthly report cards, parent meetings, and personalized improvement plans for every learner.",
    },
  ];

  const timetable = [
    { grade: "Class 8 - 9", slot: "4:00 PM – 5:30 PM", days: "Mon, Wed, Fri" },
    { grade: "Class 10", slot: "6:00 PM – 7:30 PM", days: "Mon – Sat" },
    { grade: "Class 11", slot: "7:30 AM – 9:30 AM", days: "Tue, Thu, Sat" },
    { grade: "Class 12", slot: "10:00 AM – 12:00 PM", days: "Tue, Thu, Sat" },
  ];

  return (
    <div className="bg-slate-950 text-slate-100">
      <header className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-950 to-black">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_#22d3ee40,_transparent_55%)]" />
        <div className="relative mx-auto flex max-w-6xl flex-col gap-16 px-6 pb-24 pt-20 md:flex-row md:items-center md:gap-12 md:pb-28 md:pt-24">
          <div className="flex-1 space-y-6">
            <p className="inline-block rounded-full border border-cyan-400/40 px-4 py-1 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-200">
              CWA Sciences Classes
            </p>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Maheshkhunt&apos;s trusted Maths & Science coaching for Classes 8
              to 12
            </h1>
            <p className="max-w-xl text-lg text-slate-300">
              Build concepts, score high in boards, and stay exam-ready with our
              offline batches and supportive YouTube lessons on{" "}
              <span className="font-semibold text-cyan-300">
                CWA Sciences Classes
              </span>
              .
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <a
                href="tel:+919472914649"
                className="inline-flex items-center justify-center rounded-full bg-cyan-400 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300"
              >
                Call for Admission
              </a>
              <a
                href="https://www.youtube.com/@CWASCIENCESCLASSESS"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full border border-cyan-300/60 px-6 py-3 text-sm font-semibold text-cyan-200 transition hover:border-cyan-200 hover:text-cyan-100"
              >
                Watch on YouTube
              </a>
            </div>
          </div>
          <div className="flex-1 rounded-3xl border border-white/10 bg-white/5 p-6 shadow-lg backdrop-blur">
            <h2 className="mb-4 text-lg font-semibold text-cyan-200">
              Upcoming Class Highlights
            </h2>
            <ul className="space-y-4 text-sm text-slate-200">
              <li className="rounded-2xl border border-white/5 bg-black/40 px-4 py-3">
                <span className="block font-semibold text-white">
                  Class 10 Board Booster Week
                </span>
                <span>Daily mock tests • Focused answer writing • Doubt labs</span>
              </li>
              <li className="rounded-2xl border border-white/5 bg-black/40 px-4 py-3">
                <span className="block font-semibold text-white">
                  Class 12 Physics Rapid Revision
                </span>
                <span>NCERT exemplar practice • Concept maps • Mentor support</span>
              </li>
              <li className="rounded-2xl border border-white/5 bg-black/40 px-4 py-3">
                <span className="block font-semibold text-white">
                  YouTube Live Doubt Session
                </span>
                <span>Sunday 7 PM • Join via channel &ldquo;CWA Sciences Classes&rdquo;</span>
              </li>
            </ul>
          </div>
        </div>
      </header>

      <main>
        <section className="mx-auto max-w-6xl px-6 py-16 md:py-20">
          <h2 className="text-3xl font-semibold text-white sm:text-4xl">
            Courses for every milestone
          </h2>
          <p className="mt-3 max-w-2xl text-slate-300">
            Tailored study plans and mentoring for CBSE, Bihar Board and other
            state board students preparing for Maths and Science examinations.
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {classes.map((item) => (
              <div
                key={item.grade}
                className="rounded-3xl border border-slate-800 bg-slate-900/60 p-6 shadow-inner shadow-black/40 transition hover:border-cyan-400/50 hover:shadow-cyan-500/10"
              >
                <div className="flex items-center justify-between gap-4">
                  <h3 className="text-2xl font-semibold text-cyan-200">
                    {item.grade}
                  </h3>
                  <span className="rounded-full border border-cyan-400/40 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-cyan-100">
                    {item.focus}
                  </span>
                </div>
                <ul className="mt-6 space-y-3 text-sm text-slate-200">
                  {item.highlights.map((highlight) => (
                    <li key={highlight} className="flex items-start gap-2">
                      <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-cyan-400/20 text-cyan-200">
                        ✓
                      </span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-slate-900/40">
          <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
            <h2 className="text-3xl font-semibold text-white sm:text-4xl">
              Why families choose CWA Sciences Classes
            </h2>
            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {usp.map((item) => (
                <div
                  key={item.title}
                  className="rounded-3xl border border-slate-800 bg-black/40 p-6"
                >
                  <h3 className="text-xl font-semibold text-cyan-200">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm text-slate-300">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 py-16 md:py-20">
          <div className="grid gap-10 md:grid-cols-[1.1fr_0.9fr] md:items-center">
            <div>
              <h2 className="text-3xl font-semibold text-white sm:text-4xl">
                Maheshkhunt offline centre
              </h2>
              <p className="mt-3 text-slate-300">
                Visit our classroom near Maheshkhunt Railway Crossing for
                focused, distraction-free learning. Spacious classrooms,
                projector-enabled teaching, and a dedicated self-study zone.
              </p>
              <div className="mt-6 space-y-3 text-sm text-slate-200">
                <p>
                  <span className="font-semibold text-cyan-200">Address:</span>{" "}
                  Ward No. 12, Station Road, Maheshkhunt, Bhagalpur, Bihar 851213
                </p>
                <p>
                  <span className="font-semibold text-cyan-200">Phone:</span>{" "}
                  <a href="tel:+919472914649" className="hover:text-cyan-100">
                    +91 94729 14649
                  </a>
                </p>
                <p>
                  <span className="font-semibold text-cyan-200">Timings:</span>{" "}
                  Monday to Saturday, 7 AM – 8 PM
                </p>
              </div>
              <div className="mt-8 rounded-3xl border border-cyan-400/30 bg-black/40 p-6">
                <h3 className="text-lg font-semibold text-cyan-200">
                  Daily Schedule Snapshot
                </h3>
                <ul className="mt-4 grid gap-4 text-sm text-slate-200 md:grid-cols-2">
                  {timetable.map((slot) => (
                    <li
                      key={slot.grade}
                      className="rounded-2xl border border-slate-800 bg-slate-900/60 px-4 py-3"
                    >
                      <p className="font-semibold text-white">{slot.grade}</p>
                      <p>{slot.slot}</p>
                      <p className="text-xs text-slate-400">{slot.days}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/70">
              <iframe
                title="CWA Sciences Classes Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3621.5356647794953!2d86.00736267602274!3d25.52667491745554!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f1356832dbf26b%3A0xe8cb8b0ed7f1b8e8!2sMaheshkhunt%2C%20Bihar%20851213!5e0!3m2!1sen!2sin!4v1717238400000!5m2!1sen!2sin"
                className="h-[420px] w-full border-0"
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </section>

        <section className="bg-gradient-to-br from-slate-900 via-slate-950 to-black">
          <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
            <div className="grid gap-10 md:grid-cols-2 md:items-center">
              <div>
                <h2 className="text-3xl font-semibold text-white sm:text-4xl">
                  Learn anywhere with our YouTube classes
                </h2>
                <p className="mt-3 text-slate-300">
                  Missed a class? Revise tough topics? Join the{" "}
                  <span className="font-semibold text-cyan-200">
                    CWA Sciences Classes
                  </span>{" "}
                  YouTube channel for full chapter breakdowns, live doubt
                  clearing, and exam hacks in Hindi.
                </p>
                <ul className="mt-6 space-y-3 text-sm text-slate-200">
                  <li>• Board-specific playlists for Classes 9 to 12</li>
                  <li>• Live problem-solving marathons every Sunday</li>
                  <li>• PDF notes shared via Telegram after each session</li>
                </ul>
                <a
                  href="https://www.youtube.com/@CWASCIENCESCLASSESS"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 inline-flex items-center justify-center rounded-full bg-red-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-red-400"
                >
                  Subscribe on YouTube
                </a>
              </div>
              <div className="overflow-hidden rounded-3xl border border-red-400/30 bg-black/60 shadow-lg">
                <iframe
                  className="aspect-video w-full"
                  src="https://www.youtube.com/embed/videoseries?list=PLJdXl5KCvtCQuxMxDPZWS9Vyuk3F7S-Md"
                  title="CWA Sciences Classes YouTube Channel"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
                <div className="border-t border-white/10 p-4 text-sm text-slate-200">
                  Weekly live classes streamed from Maheshkhunt for students
                  across Bihar. Join the channel and never miss an update.
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 py-16 md:py-20">
          <h2 className="text-3xl font-semibold text-white sm:text-4xl">
            Parents & students speak
          </h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {[
              {
                quote:
                  "Regular tests and detailed feedback helped my son score 93% in Class 10 board exams.",
                name: "Rakesh Kumar",
                relation: "Parent",
              },
              {
                quote:
                  "Physics concepts finally make sense. YouTube revisions are a lifesaver before weekly tests.",
                name: "Aditi Singh",
                relation: "Class 12 Student",
              },
              {
                quote:
                  "Teachers are approachable and the study material is concise. Perfect for board and competitive prep.",
                name: "Vivek Sharma",
                relation: "Class 11 Student",
              },
            ].map((item) => (
              <figure
                key={item.name}
                className="flex h-full flex-col justify-between rounded-3xl border border-slate-800 bg-slate-900/60 p-6"
              >
                <blockquote className="text-sm text-slate-200">
                  “{item.quote}”
                </blockquote>
                <figcaption className="mt-6 text-sm">
                  <p className="font-semibold text-white">{item.name}</p>
                  <p className="text-slate-400">{item.relation}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 bg-black/90">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-6 py-10 md:flex-row md:items-center">
          <div>
            <p className="text-lg font-semibold text-white">
              CWA Sciences Classes
            </p>
            <p className="text-sm text-slate-400">
              Inspiring young minds in Maheshkhunt since 2014.
            </p>
          </div>
          <div className="flex flex-wrap gap-6 text-sm text-slate-300">
            <a
              href="tel:+919472914649"
              className="hover:text-cyan-200"
            >
              +91 94729 14649
            </a>
            <a
              href="mailto:cwasciencesclasses@gmail.com"
              className="hover:text-cyan-200"
            >
              cwasciencesclasses@gmail.com
            </a>
            <a
              href="https://www.youtube.com/@CWASCIENCESCLASSESS"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cyan-200"
            >
              YouTube Channel
            </a>
          </div>
          <p className="text-xs text-slate-500">
            © {new Date().getFullYear()} CWA Sciences Classes. All rights
            reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
