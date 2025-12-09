export type Mode = "Online" | "Offline" | "Hybrid";

export interface Course {
  id: string;
  title: string;
  category: string;
  mode: Mode;
  duration: string;
  fees: string;
  shortDescription: string;
  description: string;
  highlights: string[];
  syllabus: string[];
  schedule: string;
}

export interface TestSeries {
  id: string;
  exam: string;
  testsCount: number;
  language: string;
  level: "Beginner" | "Intermediate" | "Advanced";
  features: string[];
}

export interface Testimonial {
  name: string;
  exam: string;
  feedback: string;
  score: string;
}

export interface Faculty {
  name: string;
  subject: string;
  experience: string;
  bio: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  tag: string;
}

export interface MaterialLink {
  title: string;
  description: string;
  url: string;
}

