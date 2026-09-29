function About() {
  const birthYear = 2001;
  const age = new Date().getFullYear() - birthYear;

  const experiences = [
    {
      company: "IBM",
      role: "Software Developer – Backend (Java)",
      period: "Mar 2024 – Present",
      dot: "bg-blue-500",
      bullets: [
        "Led development of 10+ microservices for a banking client (payments, accounts, transactions); cut average API response time ~35% with reactive programming across 50+ non-blocking endpoints.",
        "Designed 50+ REST APIs with idempotency, versioning & pagination — zero breaking-change incidents across 6 consecutive production releases.",
        "Maintained 85%+ code coverage across 15+ microservices using JUnit & Mockito; plugged into SonarQube quality gates in CI/CD, keeping production defects delightfully close to zero.",
        "Took 10+ technical interviews, delivered KT sessions, and mentored junior engineers — because great systems need great teams too.",
      ],
      tech: ["Java", "Spring Boot", "Kafka", "Cassandra", "Hibernate", "JUnit", "OpenShift", "Reactive Programming"],
    },
    {
      company: "Cnear",
      role: "Software Engineer Intern – Frontend",
      period: "Sept 2023 – Feb 2024",
      dot: "bg-purple-500",
      bullets: [
        "Built 15+ reusable React/TypeScript components with Redux state management; improved page load by ~30% via code splitting & lazy loading (4s → 2s average).",
        "Integrated 10+ REST APIs with the backend team, standardizing async data flows across the app.",
      ],
      tech: ["React.js", "TypeScript", "Redux", "Tailwind CSS", "REST APIs"],
    },
  ];

  const education = [
    {
      institute: "Lokmanya Tilak College of Engineering",
      location: "Navi Mumbai",
      degree: "B.Tech – Computer Science",
      period: "2019 – 2023",
      score: "CGPA: 8.6",
      icon: "🎓",
    },
    {
      institute: "Model College",
      degree: "HSC – Science",
      period: "2017 – 2019",
      score: "80%",
      icon: "📚",
    },
    {
      institute: "Holy Faith High School",
      degree: "SSC",
      period: "2017",
      score: "82%",
      icon: "🏫",
    },
  ];

  return (
    <section id="about" className="relative flex flex-col items-center gap-14">

      {/* Heading */}
      <div className="text-center">
        <h1 className="text-4xl font-bold">
          About <span className="text-main">Me</span>
        </h1>
        <div className="w-16 h-1 bg-main mx-auto mt-3 rounded-full" />
      </div>

      {/* Bio card */}
      <div className="max-w-3xl w-full">
        <div className="relative bg-gradient-to-br from-main/5 to-purple-50 border border-main/10 rounded-2xl p-8 shadow-sm">
          <span className="absolute -top-5 left-8 text-7xl text-main/20 font-serif leading-none select-none">"</span>
          <p className="text-gray-700 text-lg leading-relaxed">
            Hey, I'm <strong className="text-gray-900">Sumit Sharma</strong> — a{" "}
            <strong className="text-main">{age}-year-old</strong> Software Developer and AI Engineer
            based in Mumbai, with{" "}
            <strong className="text-gray-900">professional experience at IBM</strong>.
          </p>
          <p className="text-gray-600 text-base leading-relaxed mt-4">
            By day, I wrangle distributed microservices in{" "}
            <strong className="text-gray-800">Java & Spring Boot</strong>, tame message queues with{" "}
            <strong className="text-gray-800">Apache Kafka</strong>, and convince{" "}
            <strong className="text-gray-800">Cassandra</strong> to give up its data at reactive
            speeds. By night (and increasingly by day too), I'm building{" "}
            <strong className="text-gray-800">GenAI & Agentic AI applications</strong> with Python,
            FastAPI, LangChain, and RAG pipelines — because apparently one stack wasn't enough.
          </p>
          <p className="text-gray-600 text-base leading-relaxed mt-4">
            I enjoy working across the full engineering lifecycle — system design, implementation,
            testing, deployment, the occasional 3 AM prod incident — and I believe the best software
            is built at the intersection of{" "}
            <strong className="text-gray-800">solid engineering fundamentals</strong> and{" "}
            <strong className="text-gray-800">modern AI capabilities</strong>.
          </p>
          <span className="absolute -bottom-4 right-8 text-7xl text-main/20 font-serif leading-none select-none rotate-180">"</span>
        </div>
      </div>

      {/* Experience – full width */}
      <div className="w-full bg-white border border-gray-100 rounded-2xl shadow-xl p-8">
        <h2 className="text-2xl font-bold mb-8 flex items-center gap-2">
          <span className="w-2 h-6 bg-main rounded-full inline-block" />
          Experience
        </h2>
        <div className="relative pl-6 border-l-2 border-gray-100 flex flex-col gap-10">
          {experiences.map((exp, i) => (
            <div key={i} className="relative">
              <span className={`absolute -left-[1.85rem] top-1.5 w-4 h-4 rounded-full border-2 border-white shadow ${exp.dot}`} />
              <div className="flex flex-col gap-1.5">
                <div className="flex items-start justify-between flex-wrap gap-2">
                  <h3 className="text-base font-bold text-gray-900">{exp.company}</h3>
                  <span className="text-xs text-gray-500 bg-gray-50 border border-gray-200 px-2 py-0.5 rounded-full whitespace-nowrap">
                    {exp.period}
                  </span>
                </div>
                <p className="text-sm font-semibold text-main">{exp.role}</p>
                <ul className="mt-2 flex flex-col gap-1.5">
                  {exp.bullets.map((b, j) => (
                    <li key={j} className="flex gap-2 text-sm text-gray-500 leading-relaxed">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-main/50 flex-shrink-0" />
                      {b}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-1.5 mt-3">
                  {exp.tech.map((t) => (
                    <span key={t} className="text-xs font-medium bg-main/10 text-main border border-main/20 px-2 py-0.5 rounded-full">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Education – 3-column card grid */}
      <div className="w-full">
        <div className="flex items-center gap-2 mb-8">
          <span className="w-2 h-6 bg-main rounded-full inline-block" />
          <h2 className="text-2xl font-bold">Education</h2>
        </div>
        <div className="grid grid-cols-3 gap-6 max-lg:grid-cols-1 max-xl:grid-cols-2">
          {education.map((edu, i) => (
            <div key={i} className="group relative bg-white border border-gray-100 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 p-6 flex flex-col gap-3 overflow-hidden">
              {/* accent stripe */}
              <div className="absolute top-0 left-0 w-1 h-full bg-main rounded-l-2xl" />
              {/* icon badge */}
              <div className="w-10 h-10 rounded-xl bg-main/10 flex items-center justify-center text-xl">
                {edu.icon}
              </div>
              <div>
                <h3 className="text-base font-bold text-gray-800 leading-snug">{edu.institute}</h3>
                {edu.location && <p className="text-xs text-gray-400 mt-0.5">{edu.location}</p>}
              </div>
              <p className="text-sm text-gray-600">{edu.degree}</p>
              <div className="flex items-center gap-2 mt-auto flex-wrap">
                <span className="text-xs text-gray-500 bg-gray-50 border border-gray-200 px-2 py-0.5 rounded-full">
                  {edu.period}
                </span>
                <span className="text-xs font-bold text-main bg-main/10 border border-main/20 px-2 py-0.5 rounded-full">
                  {edu.score}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}

export default About;
