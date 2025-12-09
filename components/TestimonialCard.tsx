import { Testimonial } from "@/lib/types";

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export default function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <div className="rounded-2xl bg-white p-5 shadow-card ring-1 ring-slate-100">
      <p className="text-slate-700">“{testimonial.feedback}”</p>
      <div className="mt-4 flex items-center justify-between text-sm">
        <div>
          <p className="font-semibold text-slate-900">{testimonial.name}</p>
          <p className="text-slate-500">{testimonial.exam}</p>
        </div>
        <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-primary">
          {testimonial.score}
        </span>
      </div>
    </div>
  );
}

