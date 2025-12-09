import CourseCard from "@/components/CourseCard";
import FeatureCard from "@/components/FeatureCard";
import HeroSection from "@/components/HeroSection";
import SectionHeader from "@/components/SectionHeader";
import TestimonialCard from "@/components/TestimonialCard";
import Button from "@/components/Button";
import { popularCourses } from "@/lib/courses";
import { testimonials } from "@/lib/testimonials";
import { testSeries } from "@/lib/testSeries";

const highlightItems = [
  { title: "Live Classes", description: "Interactive classes with doubt support." },
  { title: "Recorded Courses", description: "Catch up anytime with recordings." },
  { title: "PDF Notes", description: "Exam-focused notes and handouts." },
  { title: "Test Series", description: "Full + sectional mocks with ranks." }
];

const whyVidya = [
  {
    title: "Structured Plans",
    description: "Week-by-week planner so you always know what to study."
  },
  {
    title: "Mentor Feedback",
    description: "1:1 doubt resolution and actionable improvement notes."
  },
  {
    title: "Exam-Exact Mocks",
    description: "Pattern-perfect mocks with rank analysis and solutions."
  },
  {
    title: "Bilingual Delivery",
    description: "Hindi + English classes, notes, and explanations."
  }
];

const steps = [
  { title: "Choose Course", text: "Pick your exam-specific live/recorded plan." },
  { title: "Learn", text: "Attend classes, attempt drills, fix your notes." },
  { title: "Test & Improve", text: "Take mocks, review ranks, and repeat with feedback." }
];

export default function HomePage() {
  return (
    <>
      <HeroSection />

      <section className="section-padding">
        <div className="container-wide grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {highlightItems.map((item) => (
            <FeatureCard key={item.title} title={item.title} description={item.description} />
          ))}
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-wide">
          <SectionHeader title="Popular Courses" subtitle="Top Picks" align="left" />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {popularCourses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
          <div className="mt-6">
            <Button href="/courses" variant="outline">
              View all courses
            </Button>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-wide">
          <SectionHeader title="Why Vidya GS" subtitle="Designed for Results" />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {whyVidya.map((item) => (
              <FeatureCard
                key={item.title}
                title={item.title}
                description={item.description}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-wide">
          <SectionHeader title="Hear from our learners" subtitle="Testimonials" />
          <div className="grid gap-6 md:grid-cols-3">
            {testimonials.map((t) => (
              <TestimonialCard key={t.name} testimonial={t} />
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-wide">
          <SectionHeader title="How it works" subtitle="Simple Steps" />
          <div className="grid gap-6 md:grid-cols-3">
            {steps.map((step, idx) => (
              <div
                key={step.title}
                className="rounded-2xl bg-white p-6 text-center shadow-card ring-1 ring-slate-100"
              >
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-blue-50 text-lg font-bold text-primary">
                  {idx + 1}
                </div>
                <h3 className="mt-4 text-lg font-semibold text-slate-900">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm text-slate-600">{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-wide">
          <SectionHeader title="Test Series Snapshot" subtitle="Practice" />
          <div className="grid gap-4 md:grid-cols-2">
            {testSeries.slice(0, 4).map((series) => (
              <div
                key={series.id}
                className="rounded-2xl border border-slate-100 bg-slate-50 p-5"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900">
                      {series.exam}
                    </h3>
                    <p className="text-sm text-slate-600">
                      {series.testsCount} tests · {series.language}
                    </p>
                  </div>
                  <span className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-primary">
                    {series.level}
                  </span>
                </div>
                <ul className="mt-3 space-y-1 text-sm text-slate-700">
                  {series.features.map((f) => (
                    <li key={f} className="flex items-start gap-2">
                      <span className="mt-[2px] text-accent">•</span>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-6">
            <Button href="/test-series" variant="secondary">
              Explore all test series
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}

