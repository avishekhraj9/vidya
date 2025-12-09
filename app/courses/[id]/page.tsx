import Button from "@/components/Button";
import SectionHeader from "@/components/SectionHeader";
import { courses } from "@/lib/courses";
import { notFound } from "next/navigation";

export default async function CourseDetailPage({
  params
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const course = courses.find((c) => c.id === id);
  if (!course) return notFound();

  return (
    <div className="section-padding container-wide space-y-10">
      <SectionHeader
        title={course.title}
        subtitle={`${course.category} • ${course.mode}`}
        align="left"
      />

      <div className="grid gap-8 lg:grid-cols-3">
        <div className="lg:col-span-2 space-y-6">
          <div className="rounded-2xl bg-white p-6 shadow-card ring-1 ring-slate-100">
            <h3 className="text-lg font-semibold text-slate-900">Overview</h3>
            <p className="mt-3 text-slate-700">{course.description}</p>
            <div className="mt-4 grid gap-4 sm:grid-cols-3 text-sm text-slate-700">
              <div className="rounded-xl bg-slate-50 p-3">
                <p className="font-semibold text-primary">Duration</p>
                <p>{course.duration}</p>
              </div>
              <div className="rounded-xl bg-slate-50 p-3">
                <p className="font-semibold text-primary">Mode</p>
                <p>{course.mode}</p>
              </div>
              <div className="rounded-xl bg-slate-50 p-3">
                <p className="font-semibold text-primary">Schedule</p>
                <p>{course.schedule}</p>
              </div>
            </div>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-card ring-1 ring-slate-100">
            <h3 className="text-lg font-semibold text-slate-900">Syllabus</h3>
            <ul className="mt-3 space-y-2 text-sm text-slate-700">
              {course.syllabus.map((topic) => (
                <li key={topic} className="flex items-start gap-2">
                  <span className="mt-[2px] text-accent">•</span>
                  <span>{topic}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <aside className="space-y-6">
          <div className="rounded-2xl bg-white p-6 shadow-card ring-1 ring-slate-100">
            <p className="text-sm font-semibold text-primary">Fees</p>
            <p className="text-3xl font-bold text-slate-900">{course.fees}</p>
            <p className="mt-2 text-sm text-slate-600">
              Includes live + recorded access, notes, and test series.
            </p>
            <div className="mt-4 flex flex-col gap-3">
              <Button href="#enroll" fullWidth>
                Enroll Now
              </Button>
              <Button href="/contact" variant="outline" fullWidth>
                Talk to counselor
              </Button>
            </div>
          </div>

          <div className="rounded-2xl bg-slate-900 p-6 text-white">
            <p className="text-sm uppercase tracking-wide text-blue-100">
              Demo Video
            </p>
            <div className="mt-3 h-40 rounded-xl bg-slate-800" />
            <p className="mt-3 text-sm text-slate-200">
              Watch a short walkthrough of the course flow, notes, and mock
              analysis dashboard.
            </p>
          </div>
        </aside>
      </div>
    </div>
  );
}

