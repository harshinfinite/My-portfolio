'use client'
import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { usePathname } from "next/navigation";

const Footer = () => {

  const pathname = usePathname();

  return (
    <footer className="mt-16 border-t border-white/15">
      <div className="page-shell py-10">
        <div className="panel p-6 md:p-8 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <h3 className="text-2xl font-bold">Open to Building Real Products</h3>
            <p className="muted mt-2">Available for internship and junior full stack opportunities.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link href="/contact" className={`btn-primary ${pathname === '/contact' && "hidden"}`}>
              Let&apos;s Talk
            </Link>
            <a
              href="https://github.com/harshinfinite"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary inline-flex items-center gap-2"
            >
              <FaGithub />
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/harshkumar-panchal-ab4718309/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary inline-flex items-center gap-2"
            >
              <FaLinkedin />
              LinkedIn
            </a>
          </div>
        </div>

        <p className="text-center text-sm muted mt-6">&copy; 2026 Harsh Panchal</p>
      </div>
    </footer>
  );
};

export default Footer;
