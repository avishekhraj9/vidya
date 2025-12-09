import Link from "next/link";

const quickLinks = [
  { href: "/courses", label: "Courses" },
  { href: "/test-series", label: "Test Series" },
  { href: "/materials", label: "Study Material" },
  { href: "/blog", label: "Blog" }
];

export default function Footer() {
  return (
    <footer className="mt-16 bg-slate-900 text-slate-100">
      <div className="container-wide grid gap-10 py-12 md:grid-cols-4">
        <div className="space-y-3">
          <div className="text-lg font-semibold">Vidya GS</div>
          <p className="text-sm text-slate-300">
            Smart Learning. Sure Success. Structured coaching for competitive
            exams with live classes, mock tests, and mentor support.
          </p>
        </div>
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wide text-slate-200">
            Quick Links
          </h4>
          <ul className="mt-3 space-y-2 text-sm text-slate-300">
            {quickLinks.map((link) => (
              <li key={link.href}>
                <Link className="hover:text-white" href={link.href}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wide text-slate-200">
            Contact
          </h4>
          <ul className="mt-3 space-y-2 text-sm text-slate-300">
            <li>123, Knowledge Park, Patna</li>
            <li>Phone: +91 98765 43210</li>
            <li>Email: hello@vidyags.in</li>
            <li>WhatsApp: +91 91234 56789</li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wide text-slate-200">
            Follow
          </h4>
          <div className="mt-3 flex gap-3 text-slate-300">
            <Link href="#" className="hover:text-white">
              Facebook
            </Link>
            <Link href="#" className="hover:text-white">
              Instagram
            </Link>
            <Link href="#" className="hover:text-white">
              YouTube
            </Link>
          </div>
        </div>
      </div>
      <div className="border-t border-slate-800 py-4">
        <div className="container-wide flex flex-col gap-3 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Vidya GS. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="#" className="hover:text-white">
              Terms
            </Link>
            <Link href="#" className="hover:text-white">
              Privacy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

