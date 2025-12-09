import Button from "./Button";

export default function HeroSection() {
  return (
    <section className="bg-gradient-to-br from-blue-50 via-white to-orange-50">
      <div className="container-wide flex flex-col gap-10 py-16 md:flex-row md:items-center">
        <div className="max-w-xl space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/80 px-4 py-2 text-xs font-semibold text-primary ring-1 ring-primary/10">
            Smart Learning. Sure Success.
          </div>
          <div className="space-y-3">
            <h1 className="text-3xl font-bold text-slate-900 sm:text-4xl lg:text-5xl">
              Crack your next exam with Vidya GS structured coaching.
            </h1>
            <p className="text-lg text-slate-700">
              Live + recorded classes, doubt rooms, rank-focused test series, and
              mentor support for State, SSC, Railway, Banking, and UPSC aspirants.
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <Button href="#contact" variant="primary">
              Join Free Demo
            </Button>
            <Button href="/courses" variant="secondary">
              View Courses
            </Button>
          </div>
          <div className="flex flex-wrap gap-6 text-sm text-slate-700">
            <div>
              <p className="text-xl font-bold text-primary">10K+</p>
              <p>Students trained</p>
            </div>
            <div>
              <p className="text-xl font-bold text-primary">50+</p>
              <p>Rank holders</p>
            </div>
            <div>
              <p className="text-xl font-bold text-primary">30+</p>
              <p>Weekly live sessions</p>
            </div>
          </div>
        </div>
        <div className="flex flex-1 justify-center md:justify-end">
          <div className="relative w-full max-w-md rounded-3xl bg-white p-6 shadow-card ring-1 ring-slate-100">
            <div className="absolute -left-6 -top-6 h-12 w-12 rounded-2xl bg-primary/10" />
            <div className="absolute -right-8 top-10 h-14 w-14 rounded-full bg-accent/20" />
            <h3 className="text-lg font-semibold text-slate-900">
              Daily Study Rhythm
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-slate-700">
              <li className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-primary" />
                Live/recorded class + quick recap PDF.
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-primary" />
                25-30 practice questions with solutions.
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-primary" />
                Doubt window + mentor accountability note.
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-primary" />
                Weekly mock test with rank analysis.
              </li>
            </ul>
            <div className="mt-6 rounded-2xl bg-blue-50 px-4 py-3 text-sm font-semibold text-primary">
              “The structure and feedback loop is the difference-maker.” – Team
              Vidya GS
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

