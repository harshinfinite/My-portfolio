import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Harsh Panchal | Full Stack Developer Portfolio",
  description:
    "Portfolio of Harsh Panchal, a full stack developer building performant web apps with Next.js, React, Node.js, and Python.",
  openGraph: {
    title: "Harsh Panchal | Full Stack Developer Portfolio",
    description:
      "Explore projects, technical skills, and contact details for Harsh Panchal.",
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Harsh Panchal | Full Stack Developer Portfolio",
    description:
      "Full stack developer portfolio featuring web projects built with Next.js and Node.js.",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
