import Button from "@/components/Button";
import SectionHeader from "@/components/SectionHeader";
import { testSeries } from "@/lib/testSeries";

const features = [
  "Instant score and solution review",
  "All-India rank and percentile",
  "Topic-wise analytics to find weak areas"
];

export default function TestSeriesPage() {
  return (
    <div className="section-padding container-wide space-y-10">
      <SectionHeader title="Test Series" subtitle="Practice Lab" align="left" />

      <div className="grid gap-6 lg:grid-cols-[2fr,1fr]">
        <div className="grid gap-6">
          {testSeries.map((series) => (
            <div
              key={series.id}
              className="rounded-2xl bg-white p-5 shadow-card ring-1 ring-slate-100"
            >
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div>
                  <h3 className="text-lg font-semibold text-slate-900">
                    {series.exam}
                  </h3>
                  <p className="text-sm text-slate-600">
                    {series.testsCount} tests · {series.language}
                  </p>
                </div>
                <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-primary">
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
              <div className="mt-4 flex gap-3">
                <Button href={`/test-series/${series.id}`} variant="primary">
                  Start Mock Test
                </Button>
                <Button href="/login" variant="outline">
                  Save for later
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="space-y-4 rounded-2xl bg-white p-5 shadow-card ring-1 ring-slate-100">
          <h4 className="text-lg font-semibold text-slate-900">Why attempt?</h4>
          <ul className="space-y-2 text-sm text-slate-700">
            {features.map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="mt-[2px] text-accent">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <div className="rounded-xl bg-blue-50 p-4 text-sm text-primary">
            Tip: Attempt mocks in exam-like timing and review mistakes within 24
            hours for the best retention.
          </div>
        </div>
      </div>
    </div>
  );
}

