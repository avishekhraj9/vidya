import SectionHeader from "@/components/SectionHeader";
import { pdfNotes, previousPapers, quizzes } from "@/lib/materials";

function MaterialSection({
  title,
  items
}: {
  title: string;
  items: { title: string; description: string; url: string }[];
}) {
  return (
    <div className="rounded-2xl bg-white p-5 shadow-card ring-1 ring-slate-100">
      <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
      <ul className="mt-3 divide-y divide-slate-100">
        {items.map((item) => (
          <li key={item.title} className="flex items-center justify-between py-3">
            <div>
              <p className="font-semibold text-slate-900">{item.title}</p>
              <p className="text-sm text-slate-600">{item.description}</p>
            </div>
            <a
              href={item.url}
              className="text-sm font-semibold text-primary hover:underline"
              download
            >
              Download
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function MaterialsPage() {
  return (
    <div className="section-padding container-wide space-y-8">
      <SectionHeader
        title="Study Materials"
        subtitle="PDFs, quizzes, previous papers"
        align="left"
      />

      <div className="grid gap-6 lg:grid-cols-2">
        <MaterialSection title="PDF Notes" items={pdfNotes} />
        <MaterialSection title="Topic-wise MCQ Quizzes" items={quizzes} />
      </div>

      <div className="rounded-2xl bg-white p-5 shadow-card ring-1 ring-slate-100">
        <h3 className="text-lg font-semibold text-slate-900">Previous Year Papers</h3>
        <div className="mt-3 overflow-x-auto">
          <table className="min-w-full divide-y divide-slate-100 text-sm">
            <thead className="bg-slate-50 text-left text-slate-700">
              <tr>
                <th className="px-4 py-2">Exam</th>
                <th className="px-4 py-2">Details</th>
                <th className="px-4 py-2">Link</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {previousPapers.map((paper) => (
                <tr key={paper.title}>
                  <td className="px-4 py-3 font-semibold text-slate-900">
                    {paper.title}
                  </td>
                  <td className="px-4 py-3 text-slate-600">{paper.description}</td>
                  <td className="px-4 py-3">
                    <a
                      className="text-primary hover:underline"
                      href={paper.url}
                      download
                    >
                      Download
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

