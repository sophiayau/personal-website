export type Experience = {
  id: string;
  dates: string;
  role: string;
  company: string;
  companyLogo?: string;
  bullets: string[];
  tech: string[];
};

export const experiences: Experience[] = [
    {
    id: "c1_ft",
    dates: "August 2026 – Present",
    role: "Software Engineer",
    company: "Capital One",
    companyLogo: "/logos/capital_one.jpeg",
    bullets: [
      "Incoming!",
    ],
    tech: [],
  },
  {
    id: "c1",
    dates: "May 2025 – August 2025",
    role: "Software Engineer Intern",
    company: "Capital One",
    companyLogo: "/logos/capital_one.jpeg",
    bullets: [
      "Designed a scalable, event-driven data synchronization system using AWS Lambda, EventBridge, AppSync, Docker, etc.",
      "Implemented infrastructure using AWS CDK in TypeScript and developed data processing script in Python.",
      "Automated data ingestion for millions of loans from upstream sources and syncghronzied updates to an analyst facing UI.",
      "Wrote unit tests to ensure code reliability and utilized Jenkins pipelines to automate builds and test execution.",
    ],
    tech: ["Python", "TypeScript", "AWS", "Jenkins", "PyTest"],
  },
  {
    id: "anote",
    dates: "Jun 2024 – August 2024",
    role: "Software Engineer Intern",
    company: "Anote",
    companyLogo: "/logos/anote.jpeg",
    bullets: [
      "Implemented an AI-powered system to automatically populate government grant application responses from business data, achieving a 97% match accuracy between businesses and relevant grants.",
      "Automated applications for government-issued grants using Python scripts, reducing application time by 75%.",
      "Scaled submissions across multiple grant programs, contributing to $50,000+ in secured funding for clients.",
    ],
    tech: ["Python", "AI", "SQL"],
  },
  {
    id: "cfa",
    dates: "Jan 2024 – Present",
    role: "Secretary",
    company: "Code For All QC",
    companyLogo: "/logos/cfa.jpeg",
    bullets: [
      "Managed club communications and documentation, ensuring clear and consistent information flow among members and external partners.",
      "Fostered an inclusive CS community by serving as a central point of support, connecting students with resources, opportunities, and mentorship.",
      "Organized and helped run a hackathon, coordinating logistics, communication, and participant support."
    ],
    tech: ["Student Leadership", "Event Coordination", "Community Building"],
  },
  {
    id: "tiqc",
    dates: "Jun 2023 – Aug 2023",
    role: "Technical Project Management Intern",
    company: "Tech Incubator at Queens College",
    companyLogo: "/logos/queens_college.jpeg",
    bullets: [
      "Led cross-functional teams to plan and execute technical projects, ensuring timely delivery and adherence to project goals and client requirements.",
    ],
    tech: ["Agile", "Jira"],
  },
  {
    id: "tutor",
    dates: "Jan 2023 – May 2023",
    role: "Computer Science Tutor",
    company: "Queens College CUNY",
    companyLogo: "/logos/queens_college.jpeg",
    bullets: [
      "Tutored 5+ students weekly through 1:1 sessions on key areas in Computer Science.",
      "Tailored specific lessons plans and materials that aligned with student goals, contributing to a 20% increase in average student performance.",
    ],
    tech: ["Data Structures", "Algorithms", "Leetcode", "CS Fundamentals"],
  },
];
