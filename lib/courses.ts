import { Course } from "./types";

export const courses: Course[] = [
  {
    id: "bihar-si",
    title: "Bihar SI Integrated Batch",
    category: "State Exams",
    mode: "Hybrid",
    duration: "6 months",
    fees: "₹12,000",
    shortDescription:
      "Concept to practice coverage with bilingual classes and weekly tests tailored for Bihar SI exam.",
    description:
      "A structured hybrid course covering Polity, History, General Science, Current Affairs, and Reasoning with weekly mock drills. Includes doubt-clearing live sessions and printed handouts for offline learners.",
    highlights: [
      "5+ weekly live classes with recording access",
      "Dedicated doubt hours and mentor guidance",
      "Full-length mock tests with rank analysis",
      "Handwritten notes and rapid revision PDFs"
    ],
    syllabus: [
      "General Studies foundation",
      "Indian Polity and Bihar Specific GK",
      "Quantitative Aptitude & Logical Reasoning",
      "Ethics, Constitution & Social Issues",
      "Weekly mock tests with analysis"
    ],
    schedule: "Morning batch | Mon-Sat | 9:00 AM - 11:00 AM"
  },
  {
    id: "ssc-cgl",
    title: "SSC CGL Target 2025",
    category: "SSC",
    mode: "Online",
    duration: "7 months",
    fees: "₹15,500",
    shortDescription:
      "Tier I + II coverage with concept booster classes, PYQ drills, and sectional mocks.",
    description:
      "Complete SSC CGL prep with arithmetic + advance maths, English grammar and comprehension, reasoning, and GS capsules. Includes adaptive mock tests and writing practice for Tier-II.",
    highlights: [
      "Bilingual live sessions with practice worksheets",
      "Topic-wise PYQ marathons",
      "Sectional + full mocks with analytics",
      "Interview readiness add-on"
    ],
    syllabus: [
      "Quantitative Aptitude (Arithmetic + Advance)",
      "English Grammar, Vocabulary & RC",
      "General Intelligence & Reasoning",
      "General Awareness capsules",
      "Tier II answer writing practice"
    ],
    schedule: "Evening batch | Tue-Sun | 7:00 PM - 9:00 PM"
  },
  {
    id: "railway-ntpc",
    title: "Railway NTPC Crash + Concept",
    category: "Railway",
    mode: "Online",
    duration: "4 months",
    fees: "₹9,499",
    shortDescription:
      "Exam-focused revision with speed drills, mock labs, and bilingual notes.",
    description:
      "Fast-paced program focused on high-yield topics, speed improvement techniques, and doubt support. Includes computer-based test practice exactly mirroring NTPC pattern.",
    highlights: [
      "Speed drills and accuracy trackers",
      "Daily practice sheets with solutions",
      "CBT-like mock environment",
      "Current affairs weekly wrap"
    ],
    syllabus: [
      "Maths speed arithmetic",
      "General Intelligence & Reasoning",
      "General Awareness & Current Affairs",
      "Computer aptitude essentials",
      "Full-length CBT mocks"
    ],
    schedule: "Weekend intensive | Sat-Sun | 10:00 AM - 1:00 PM"
  },
  {
    id: "banking-foundation",
    title: "Banking Foundation (IBPS | SBI)",
    category: "Banking",
    mode: "Hybrid",
    duration: "6 months",
    fees: "₹13,200",
    shortDescription:
      "Covers Pre + Mains with DI booster, puzzle lab, and descriptive writing practice.",
    description:
      "Structured roadmap covering prelims to mains with focus on DI, puzzles, and English comprehension. Includes descriptive writing and interview guidance.",
    highlights: [
      "Daily mini-mocks with leaderboards",
      "Puzzle and seating arrangement lab",
      "Descriptive writing practice",
      "Interview & GD support"
    ],
    syllabus: [
      "Quantitative Aptitude & Data Interpretation",
      "Reasoning & Puzzles",
      "English Language and RC",
      "Banking Awareness and CA",
      "Mock interview practice"
    ],
    schedule: "Afternoon batch | Mon-Fri | 2:00 PM - 4:00 PM"
  },
  {
    id: "upsc-foundation",
    title: "UPSC Foundation Year",
    category: "UPSC",
    mode: "Offline",
    duration: "10 months",
    fees: "₹48,000",
    shortDescription:
      "Prelims + Mains integrated with answer writing labs and mentorship circles.",
    description:
      "Foundation to advanced coverage across GS papers, CSAT, and essay with mentoring pods. Includes newspaper analysis, monthly tests, and peer-reviewed writing labs.",
    highlights: [
      "Integrated Prelims + Mains plan",
      "Weekly answer writing practice with feedback",
      "Monthly GS + CSAT tests",
      "Mentorship pods and peer review"
    ],
    syllabus: [
      "GS I to GS IV coverage with CSAT",
      "Essay practice and feedback",
      "Current Affairs + Newspaper analysis",
      "Ethics case studies",
      "Monthly mock tests"
    ],
    schedule: "Classroom | Mon-Sat | 8:00 AM - 11:00 AM"
  }
];

export const popularCourses = courses.slice(0, 3);

