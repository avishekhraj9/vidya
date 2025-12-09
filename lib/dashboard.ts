import { Course, MaterialLink } from "./types";

export const enrolledCourses: Pick<
  Course,
  "id" | "title" | "duration" | "mode" | "schedule"
>[] = [
  {
    id: "bihar-si",
    title: "Bihar SI Integrated Batch",
    duration: "6 months",
    mode: "Hybrid",
    schedule: "Morning batch | Mon-Sat | 9:00 AM - 11:00 AM"
  },
  {
    id: "ssc-cgl",
    title: "SSC CGL Target 2025",
    duration: "7 months",
    mode: "Online",
    schedule: "Evening batch | Tue-Sun | 7:00 PM - 9:00 PM"
  }
];

export const upcomingClasses = [
  {
    title: "Modern History Marathon",
    date: "Mon, 9:00 AM",
    faculty: "Ankit Sharma"
  },
  {
    title: "Puzzle Lab - Seating Arrangement",
    date: "Tue, 7:30 PM",
    faculty: "Rahul Yadav"
  },
  {
    title: "Data Interpretation Drills",
    date: "Wed, 2:00 PM",
    faculty: "Neha Gupta"
  }
];

export const testResults = [
  { exam: "Bihar SI Mock 6", score: "142/200", rank: 184, date: "12 Jan 2025" },
  { exam: "SSC CGL Tier I Mock", score: "172/200", rank: 92, date: "05 Jan 2025" },
  { exam: "Banking Prelims Set 3", score: "71/100", rank: 121, date: "28 Dec 2024" }
];

export const quickResources: MaterialLink[] = [
  { title: "Polity PYQ Digest", description: "Chapter-wise PYQs", url: "#polity-pyq" },
  { title: "Quant Speed Drill", description: "15-min daily sets", url: "#quant-speed" },
  { title: "Essay Value Adds", description: "Quotes & data points", url: "#essay-add" }
];

