"use client";

import Link from "next/link";
import { useState } from "react";
import { FaCheck, FaCopy, FaEnvelope, FaGithub, FaLinkedin, FaFile} from "react-icons/fa6";

const CONTACT_EMAIL = "harshinfinite8@gmail.com";

const Contact = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(CONTACT_EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch (_error) {
      setCopied(false);
    }
  };

  return (
    <main className="page-shell py-8 md:py-12 flex flex-col gap-6">
      <section className="panel p-6 md:p-8 reveal-up">
        <h1 className="text-3xl md:text-4xl font-extrabold">Contact</h1>
        <p className="muted mt-2">If you have an opportunity or project idea, I am happy to connect.</p>
      </section>

      <section className="panel p-6 md:p-8 grid gap-4 reveal-up">
        <a
          href={`mailto:${CONTACT_EMAIL}`}
          className="border border-white/20 rounded-xl px-4 py-4 flex items-center justify-between hover:border-white/45 transition"
        >
          <span className="inline-flex items-center gap-3">
            <FaEnvelope />
            {CONTACT_EMAIL}
          </span>
          <span className="text-sm muted">Email</span>
        </a>

        <button
          type="button"
          onClick={handleCopyEmail}
          className="border border-white/20 rounded-xl px-4 py-4 flex items-center justify-between hover:border-white/45 transition text-left"
        >
          <span className="inline-flex items-center gap-3">
            {copied ? <FaCheck /> : <FaCopy />}
            {copied ? "Email copied to clipboard" : "Copy email address"}
          </span>
          <span className="text-sm muted">{copied ? "Copied" : "Action"}</span>
        </button>

        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="border border-white/20 rounded-xl px-4 py-4 flex items-center justify-between hover:border-white/45 transition"
        >
          <span className="inline-flex items-center gap-3">
            <FaFile/>
            My Resume
          </span>
          <span className="text-sm muted">Adding Soon</span>
        </a>

        <a
          href="https://github.com/harshinfinite"
          target="_blank"
          rel="noopener noreferrer"
          className="border border-white/20 rounded-xl px-4 py-4 flex items-center justify-between hover:border-white/45 transition"
        >
          <span className="inline-flex items-center gap-3">
            <FaGithub />
            github.com/harshinfinite
          </span>
          <span className="text-sm muted">GitHub</span>
        </a>

        <a
          href="https://www.linkedin.com/in/harshkumar-panchal-ab4718309/"
          target="_blank"
          rel="noopener noreferrer"
          className="border border-white/20 rounded-xl px-4 py-4 flex items-center justify-between hover:border-white/45 transition"
        >
          <span className="inline-flex items-center gap-3">
            <FaLinkedin />
            linkedin.com/in/harshkumar-panchal-ab4718309
          </span>
          <span className="text-sm muted">LinkedIn</span>
        </a>
      </section>

      <div className="flex">
        <Link href="/" className="btn-secondary">
          Back Home
        </Link>
      </div>
    </main>
  );
};

export default Contact;
