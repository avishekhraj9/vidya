import SectionHeader from "@/components/SectionHeader";
import { facultyMembers } from "@/lib/faculty";

export default function AboutPage() {
  return (
    <div className="section-padding container-wide space-y-10">
      <SectionHeader title="About Vidya GS" subtitle="Our Story" align="left" />

      <div className="grid gap-6 md:grid-cols-2">
        <div className="rounded-2xl bg-white p-6 shadow-card ring-1 ring-slate-100">
          <h3 className="text-lg font-semibold text-slate-900">Mission</h3>
          <p className="mt-3 text-slate-700">
            To deliver outcome-driven coaching that blends conceptual clarity with
            relentless practice so every learner can move confidently toward their
            target exam.
          </p>
        </div>
        <div className="rounded-2xl bg-white p-6 shadow-card ring-1 ring-slate-100">
          <h3 className="text-lg font-semibold text-slate-900">Vision</h3>
          <p className="mt-3 text-slate-700">
            Build a learner-first ecosystem where planning, study resources, mocks,
            and mentorship are seamlessly integrated for competitive exams.
          </p>
        </div>
      </div>

      <div className="rounded-2xl bg-white p-6 shadow-card ring-1 ring-slate-100">
        <h3 className="text-lg font-semibold text-slate-900">Teaching Philosophy</h3>
        <p className="mt-3 text-slate-700">
          We believe consistency beats intensity. Each course blends short
          conceptual sprints with practice labs and fast feedback loops. Our
          mentors nudge you with weekly accountability notes so you always know the
          next best action.
        </p>
      </div>

      <div>
        <SectionHeader title="Faculty" subtitle="Mentors" align="left" />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {facultyMembers.map((faculty) => (
            <div
              key={faculty.name}
              className="rounded-2xl bg-white p-5 shadow-card ring-1 ring-slate-100"
            >
              <div className="text-sm font-semibold text-primary">
                {faculty.subject}
              </div>
              <h4 className="mt-1 text-lg font-semibold text-slate-900">
                {faculty.name}
              </h4>
              <p className="text-sm text-slate-500">{faculty.experience}</p>
              <p className="mt-3 text-sm text-slate-700">{faculty.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

