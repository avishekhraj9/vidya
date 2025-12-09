import SectionHeader from "@/components/SectionHeader";
import { enrolledCourses, upcomingClasses, testResults, quickResources } from "@/lib/dashboard";
import Link from "next/link";

export default function DashboardPage() {
  return (
    <div className="section-padding container-wide space-y-8">
      <SectionHeader title="Student Dashboard" subtitle="Welcome back" align="left" />

      <div className="grid gap-6 md:grid-cols-2">
        <div className="rounded-2xl bg-white p-6 shadow-card ring-1 ring-slate-100">
          <h3 className="text-lg font-semibold text-slate-900">My Courses</h3>
          <ul className="mt-3 space-y-3">
            {enrolledCourses.map((course) => (
              <li
                key={course.id}
                className="rounded-xl border border-slate-100 bg-slate-50 px-4 py-3"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-semibold text-slate-900">{course.title}</p>
                    <p className="text-xs text-slate-600">{course.mode}</p>
                  </div>
                  <Link
                    href={`/courses/${course.id}`}
                    className="text-sm font-semibold text-primary hover:underline"
                  >
                    View
                  </Link>
                </div>
                <p className="mt-1 text-xs text-slate-600">
                  {course.duration} • {course.schedule}
                </p>
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-2xl bg-white p-6 shadow-card ring-1 ring-slate-100">
          <h3 className="text-lg font-semibold text-slate-900">Upcoming Classes</h3>
          <ul className="mt-3 space-y-3">
            {upcomingClasses.map((cls) => (
              <li
                key={cls.title}
                className="flex items-center justify-between rounded-xl bg-slate-50 px-4 py-3"
              >
                <div>
                  <p className="font-semibold text-slate-900">{cls.title}</p>
                  <p className="text-xs text-slate-600">
                    {cls.date} • {cls.faculty}
                  </p>
                </div>
                <span className="text-xs font-semibold text-primary">Join</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-[2fr,1fr]">
        <div className="rounded-2xl bg-white p-6 shadow-card ring-1 ring-slate-100">
          <h3 className="text-lg font-semibold text-slate-900">My Test Results</h3>
          <div className="mt-3 overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead className="bg-slate-50 text-left text-slate-700">
                <tr>
                  <th className="px-4 py-2">Exam</th>
                  <th className="px-4 py-2">Score</th>
                  <th className="px-4 py-2">Rank</th>
                  <th className="px-4 py-2">Date</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {testResults.map((result) => (
                  <tr key={result.exam}>
                    <td className="px-4 py-3 font-semibold text-slate-900">
                      {result.exam}
                    </td>
                    <td className="px-4 py-3 text-slate-700">{result.score}</td>
                    <td className="px-4 py-3 text-slate-700">#{result.rank}</td>
                    <td className="px-4 py-3 text-slate-600">{result.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="space-y-4 rounded-2xl bg-white p-6 shadow-card ring-1 ring-slate-100">
          <h3 className="text-lg font-semibold text-slate-900">Progress Snapshot</h3>
          <div className="space-y-2 text-sm text-slate-700">
            <div>
              <div className="flex justify-between">
                <span>Quant</span>
                <span>65%</span>
              </div>
              <div className="mt-1 h-2 rounded-full bg-slate-100">
                <div className="h-2 w-[65%] rounded-full bg-primary" />
              </div>
            </div>
            <div>
              <div className="flex justify-between">
                <span>Reasoning</span>
                <span>72%</span>
              </div>
              <div className="mt-1 h-2 rounded-full bg-slate-100">
                <div className="h-2 w-[72%] rounded-full bg-primary" />
              </div>
            </div>
            <div>
              <div className="flex justify-between">
                <span>GS</span>
                <span>60%</span>
              </div>
              <div className="mt-1 h-2 rounded-full bg-slate-100">
                <div className="h-2 w-[60%] rounded-full bg-primary" />
              </div>
            </div>
          </div>
          <div className="rounded-xl bg-slate-50 p-4">
            <p className="text-sm font-semibold text-slate-900">Quick Resources</p>
            <ul className="mt-2 space-y-2 text-sm text-primary">
              {quickResources.map((item) => (
                <li key={item.title}>
                  <a className="hover:underline" href={item.url}>
                    {item.title} — {item.description}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

