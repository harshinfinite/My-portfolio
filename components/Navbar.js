"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
];

const Navbar = () => {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const itemClass = (href) =>
    `px-3 py-2 rounded-lg text-sm font-semibold transition ${
      pathname === href
        ? "bg-white !text-black"
        : "text-white/85 hover:text-white hover:bg-white/10"
    }`;

  return (
    <header className="sticky top-0 z-40 border-b border-white/20 bg-black/80 backdrop-blur-md">
      <div className="page-shell flex items-center justify-between py-3">
        <Link href="/" className="flex items-center gap-3">
          <div className="relative w-11 h-11 rounded-full border border-white/40 overflow-hidden">
            <Image src="/sitelogo.png" alt="Harsh Infinite logo" fill className="object-cover" />
          </div>
          <span className="font-bold tracking-wide text-lg">Harsh Infinite</span>
        </Link>

        <nav className="hidden md:flex items-center gap-2">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className={itemClass(item.href)}>
              {item.label}
            </Link>
          ))}
        </nav>

        <button
          type="button"
          className="md:hidden p-2 rounded-lg border border-white/25"
          onClick={() => setOpen((value) => !value)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? <IoClose size={24} /> : <GiHamburgerMenu size={24} />}
        </button>
      </div>

      {open && (
        <nav className="md:hidden border-t border-white/15 bg-black/95">
          <div className="page-shell py-3 flex flex-col gap-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={itemClass(item.href)}
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
