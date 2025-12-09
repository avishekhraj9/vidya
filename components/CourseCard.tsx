import { Course } from "@/lib/types";
import Link from "next/link";
import Button from "./Button";

interface CourseCardProps {
  course: Course;
}

export default function CourseCard({ course }: CourseCardProps) {
  return (
    <div className="flex h-full flex-col rounded-2xl bg-white p-6 shadow-card ring-1 ring-slate-100">
      <div className="flex items-center justify-between">
        <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-primary">
          {course.category}
        </span>
        <span className="text-xs font-medium text-slate-500">{course.mode}</span>
      </div>
      <h3 className="mt-4 text-xl font-semibold text-slate-900">
        {course.title}
      </h3>
      <p className="mt-2 text-sm text-slate-600">{course.shortDescription}</p>
      <ul className="mt-3 space-y-1 text-sm text-slate-700">
        {course.highlights.slice(0, 3).map((item) => (
          <li key={item} className="flex items-start gap-2">
            <span className="mt-[2px] text-accent">•</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
      <div className="mt-4 flex items-center justify-between text-sm text-slate-700">
        <span>{course.duration}</span>
        <span className="font-semibold text-primary">{course.fees}</span>
      </div>
      <div className="mt-6 flex gap-3">
        <Button variant="primary" href={`/courses/${course.id}`}>
          View Details
        </Button>
        <Button variant="outline" href="#contact">
          Enroll
        </Button>
      </div>
    </div>
  );
}

