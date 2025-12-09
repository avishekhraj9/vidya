"use client";

import CourseCard from "@/components/CourseCard";
import SectionHeader from "@/components/SectionHeader";
import { courses } from "@/lib/courses";
import { Mode } from "@/lib/types";
import { useMemo, useState } from "react";

const categories = ["All", "State Exams", "SSC", "Railway", "Banking", "UPSC"];
const modes: Array<"All" | Mode> = ["All", "Online", "Offline", "Hybrid"];

export default function CoursesPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedMode, setSelectedMode] = useState<"All" | Mode>("All");

  const filteredCourses = useMemo(() => {
    return courses.filter((course) => {
      const categoryMatch =
        selectedCategory === "All" || course.category === selectedCategory;
      const modeMatch = selectedMode === "All" || course.mode === selectedMode;
      return categoryMatch && modeMatch;
    });
  }, [selectedCategory, selectedMode]);

  return (
    <div className="section-padding container-wide">
      <SectionHeader title="Courses" subtitle="Choose your path" align="left" />

      <div className="mb-6 flex flex-wrap gap-4 rounded-2xl bg-white p-4 shadow-card ring-1 ring-slate-100">
        <div>
          <label className="text-sm font-medium text-slate-700">Exam Category</label>
          <div className="mt-2 flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`rounded-full px-3 py-1 text-sm font-semibold ring-1 transition ${
                  selectedCategory === cat
                    ? "bg-primary text-white ring-primary"
                    : "bg-slate-50 text-slate-700 ring-slate-200 hover:bg-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
        <div>
          <label className="text-sm font-medium text-slate-700">Mode</label>
          <div className="mt-2 flex flex-wrap gap-2">
            {modes.map((mode) => (
              <button
                key={mode}
                onClick={() => setSelectedMode(mode)}
                className={`rounded-full px-3 py-1 text-sm font-semibold ring-1 transition ${
                  selectedMode === mode
                    ? "bg-primary text-white ring-primary"
                    : "bg-slate-50 text-slate-700 ring-slate-200 hover:bg-white"
                }`}
              >
                {mode}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredCourses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </div>
  );
}

