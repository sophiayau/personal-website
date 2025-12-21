import Link from "next/link";
import { pixelify } from "@/lib/fonts";
import { inter } from "@/lib/fonts";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white backdrop-blur">
      <nav className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
        <Link href="/" className={`${pixelify.className} font-bold text-black text-5xl`}>S</Link>
        <div className="flex gap-6 text-sm font-medium">
          <Link href="/experience" className={`${inter.className} text-black`}>Experience</Link>
          <Link href="/projects" className={`${inter.className} text-black`}>Projects</Link>
          <Link href="/#contact" className={`${inter.className} text-black`}>Contact</Link>
        </div>
      </nav>
    </header>
  );
}
