import Link from "next/link";
import Button from "./Button";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/courses", label: "Courses" },
  { href: "/test-series", label: "Test Series" },
  { href: "/materials", label: "Study Material" },
  { href: "/blog", label: "Blog" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
  { href: "/login", label: "Login" }
];

function LogoMark() {
  return (
    <div className="flex items-center gap-2">
      <div className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-white shadow-lg shadow-blue-200">
        <div className="absolute -top-1 left-1 h-2 w-2 rounded-full bg-accent" />
        <svg
          viewBox="0 0 24 24"
          className="h-6 w-6"
          aria-hidden
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        >
          <path d="M6 8.5c0-1.9 3-3.5 6-3.5s6 1.6 6 3.5" />
          <path d="M6 15.5c0 1.9 3 3.5 6 3.5s6-1.6 6-3.5" />
          <path d="M6 8.5v7c0 1.9 3 3.5 6 3.5s6-1.6 6-3.5v-7" />
          <path d="M10 11h4" />
          <path d="M12 5.5v-1" />
          <path d="M12 4.5c0-1 .8-1.5 1.5-1.5" />
        </svg>
      </div>
      <div className="leading-tight">
        <span className="text-base font-semibold text-slate-900">Vidya GS</span>
        <p className="text-xs text-primary">Smart Learning. Sure Success.</p>
      </div>
    </div>
  );
}

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-100 bg-white/90 backdrop-blur">
      <nav className="container-wide flex items-center justify-between py-3">
        <Link href="/" className="flex items-center gap-3">
          <LogoMark />
        </Link>
        <div className="hidden items-center gap-6 text-sm font-medium text-slate-700 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="hover:text-primary transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>
        <div className="hidden lg:block">
          <Button href="/contact" variant="primary">
            Enroll Now
          </Button>
        </div>
        <div className="lg:hidden">
          <Button href="/contact" variant="primary">
            Enroll
          </Button>
        </div>
      </nav>
    </header>
  );
}

