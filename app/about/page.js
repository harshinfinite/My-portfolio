const focusAreas = [
  "Building robust and scalable web applications",
  "Employing 'vibe coding' thoughtfully—merging AI speed with a solid understanding of logic",
  "Expanding my knowledge of core AI/ML algorithms",
  "Transitioning securely from a Web Developer role towards a deep specialization in AI and Machine Learning",
];

const skillGroups = [
  { label: "Core Languages", values: ["JavaScript", "Python"] },
  { label: "Frontend", values: ["React.js", "Next.js", "Tailwind CSS", "HTML & CSS"] },
  { label: "Backend Tools", values: ["Node.js", "Express.js", "Prisma"] },
  { label: "Databases", values: ["MongoDB", "Mongoose", "PostgreSQL"] },
  { label: "AI & ML Frameworks (Theoretical)", values: ["Linear Regression", "Gradient Descent", "Logistic Regression", "Bias-Variance Tradeoff"] },
];

const About = () => {
  return (
    <main className="page-shell py-8 md:py-12 flex flex-col gap-6">
      <section className="panel p-6 md:p-8 reveal-up">
        <h1 className="text-3xl md:text-4xl font-extrabold">About Me</h1>
        <p className="mt-4 text-white/90 leading-7">
          I am Panchal Harsh, an aspiring web developer taking a pragmatic journey into the tech world. 
          While currently focusing heavily on modern JavaScript web development—building with React, Next.js, and Tailwind—my long-term goal lies in traversing deep into Artificial Intelligence and Machine Learning. I deeply believe in understanding logic instead of blindly copying code, which is why I use Generative AI as an intelligent assistant to save time and grasp workflows efficiently. What I build is guided by clean design, functionality, and the ambition to learn.
        </p>
      </section>

      <section className="panel p-6 md:p-8 reveal-up">
        <h2 className="text-2xl font-bold">Current Focus</h2>
        <ul className="mt-4 grid gap-3">
          {focusAreas.map((item) => (
            <li key={item} className="border border-white/15 rounded-xl px-4 py-3 text-white/90">
              {item}
            </li>
          ))}
        </ul>
      </section>

      <section className="panel p-6 md:p-8 reveal-up">
        <h2 className="text-2xl font-bold">Skills & Proficiencies</h2>
        <div className="mt-5 grid md:grid-cols-2 gap-4">
          {skillGroups.map((group) => (
            <article key={group.label} className="border border-white/15 rounded-xl p-4">
              <h3 className="font-bold text-lg">{group.label}</h3>
              <div className="flex flex-wrap gap-2 mt-3">
                {group.values.map((skill) => (
                  <span key={skill} className="text-sm px-3 py-1 rounded-full border border-white/25 text-white/85">
                    {skill}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
};

export default About;
