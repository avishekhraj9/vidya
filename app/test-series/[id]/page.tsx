import Button from "@/components/Button";
import { testSeries } from "@/lib/testSeries";
import { notFound } from "next/navigation";

export default function TestAttemptPage({
  params
}: {
  params: { id: string };
}) {
  const series = testSeries.find((t) => t.id === params.id);
  if (!series) return notFound();

  return (
    <div className="section-padding container-wide space-y-6">
      <div className="rounded-2xl bg-white p-6 shadow-card ring-1 ring-slate-100">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <p className="text-sm font-semibold text-primary">{series.level}</p>
            <h1 className="text-2xl font-bold text-slate-900">{series.exam}</h1>
            <p className="text-sm text-slate-600">
              {series.testsCount} tests · {series.language}
            </p>
          </div>
          <Button href="/test-series" variant="outline">
            Back to list
          </Button>
        </div>
        <div className="mt-6 rounded-xl bg-slate-50 p-6">
          <p className="text-sm text-slate-700">
            This is a demo placeholder. In production, the test player would load
            here with timer, question palette, and submission flow.
          </p>
          <div className="mt-4 flex gap-3">
            <Button variant="primary">Start Test Now</Button>
            <Button variant="secondary">Review Instructions</Button>
          </div>
        </div>
        <div className="mt-4 text-sm text-slate-600">
          Features included: instant scorecard, solution review, AIR rank, topic-wise
          analytics, and retake with analysis.
        </div>
      </div>
    </div>
  );
}

