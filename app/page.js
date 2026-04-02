import Image from "next/image";
import Link from "next/link";
import { FaArrowRight, FaGithub, FaLinkedin } from "react-icons/fa";

const highlights = [
  "Building robust web applications using HTML, CSS, JavaScript, React, and Next.js",
  "Leveraging Generative AI and 'vibe coding' to accelerate logic learning and development efficiency",
  "Foundational knowledge of Machine Learning algorithms (Linear Regression, Gradient Descent, etc.)",
  "Working towards advanced AI and ML specialization starting from a strong Web Development foundation",
];

export default function Home() {
  return (
    <main className="page-shell py-8 md:py-12 flex flex-col gap-8">
      <section className="panel-strong p-6 md:p-10 reveal-up">
        <div className="grid md:grid-cols-[360px,1fr] gap-8 md:gap-10 items-center">
          <div className="justify-self-center md:justify-self-start">
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-2xl border border-white/35 overflow-hidden float">
              <Image
                src="/aboutimage.png"
                alt="Panchal Harsh profile photo"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          <div className="space-y-5 text-center md:text-left">
            <p className="uppercase tracking-[0.25em] text-xs text-white/70">Portfolio 2026</p>
            <h1 className="text-3xl md:text-5xl font-extrabold leading-tight">
              Hi, I am <span className="text-white">Panchal Harsh</span>
            </h1>
            <p className="text-lg md:text-xl text-white/85">
              Mature Web Developer mapping a path to Artificial Intelligence.
              Vibe coding with Deeply curious about code logic and understanding.
            </p>
            <div className="flex flex-wrap gap-3 justify-center md:justify-start">
              <Link href="/projects" className="btn-primary inline-flex items-center gap-2">
                Explore Projects
                <FaArrowRight />
              </Link>
              <Link href="/about" className="btn-secondary">
                About Me
              </Link>
              <Link href="/contact" className="btn-secondary">
                Contact
              </Link>
            </div>
            <div className="flex gap-4 justify-center md:justify-start">
              <a
                href="https://github.com/harshinfinite"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-white/80 hover:text-white"
              >
                <FaGithub />
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/harshkumar-panchal-ab4718309/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-white/80 hover:text-white"
              >
                <FaLinkedin />
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="panel p-6 md:p-8 reveal-up">
        <h2 className="text-2xl md:text-3xl font-bold">What I Build & Learn</h2>
        <ul className="mt-5 grid gap-3">
          {highlights.map((item) => (
            <li
              key={item}
              className="border border-white/15 rounded-xl px-4 py-3 text-white/90 hover:border-white/40 transition"
            >
              {item}
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
