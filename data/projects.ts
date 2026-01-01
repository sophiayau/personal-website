export type Project = {
  id: string;
  name: string;
  description: string;
  imageSrc: string;
  imageAlt?: string;
  projectTags: string[];
  tech: string[];
  bullets: string[];
  links: {
    code?: string;
    demo?: string;
    writeup?: string;
  };
};

export const projects: Project[] = [
    {
    id: "banana",
    name: "Bananagrams Online",
    description: "A mobile-friendly, real-time multiplayer version of Bananagrams that allows players to compete virtually while preserving the fast-paced, tile-based gameplay.",
    imageSrc: "/logos/banana.jpg",
    imageAlt: "Work In Progress",
    projectTags: ["IN PROGRESS", "Game Dev", "Real-time Systems"],
    tech: ["React", "TypeScript", "WebSockets", "Game Logic" ],
    bullets: [
      "Recreating my favorite word game as a real-time multiplayer online experience :)",

    ],
    links: {
        code: "https://www.github.com/sophiayau"
    }
},
  {
    id: "fp",
    name: "Focus Point",
    description: "A real-time Computer Vision application that detects and tracks user focus and distraction, bringing light to attention patterns.",
    imageSrc: "/logos/fp.gif",
    imageAlt: "Focus Point",
    projectTags: ["Computer Vision", "Real-time Systems", "Open Source Models", "Full Stack"],
    tech: ["Python", "OpenCV", "Roboflow", "ONNX", "React", "Flask", "Docker", "AWS"],
    bullets: [
      "Implemented real-time eye and head pose tracking, achieving 95% accuracy",
      "Created a user-friendly React frontend that visualizes focus metrics and distraction events in real-time.",
    ],
    links: {
        demo: "https://staging.dzou4t941x83j.amplifyapp.com/",
        code: "https://www.linkedin.com"
    }
},
{
    id: "refu",
    name: "RefuConnect",
    description: "A multilingual and auto-translating communication platform designed to enable seamless interaction across language barriers for refugees and aid workers.",
    imageSrc: "/logos/refuconnect.png",
    imageAlt: "RefuConnect",
    projectTags: ["2024 HopHacks Winner: Bloomberg Philanthropy Track","Real-time Systems", "APIs", "Full Stack", "WebSockets"],
    tech: ["React", "Node.js", "MongoDB"],
    bullets: [
      "Built responsive React front-end with intuitive user interface",
      "Integrated Google Translate API for automatic message translation",
    ],
    links: {
        demo: "https://devpost.com/software/refuconnect-t1gu0i",
        code: "https://github.com/ehab20011/p-hacks"
    }
},
{
    id: "portfolio",
    name: "Portfolio Website",
    description: "A responsive portfolio website built with Next.js and Tailwind CSS, showcasing projects, skills, and experiences.",
    imageSrc: "/logos/portfolio.jpg",
    imageAlt: "Portfolio",
    projectTags: ["Next.js", "Tailwind CSS", "Responsive Design", "Web Development"],
    tech: ["React", "Node.js", "MongoDB"],
    bullets: [
      "Built responsive React front-end with intuitive user interface",
      "Created a user-friendly React frontend that visualizes focus metrics and distraction events in real-time.",
    ],
    links: {
        demo: "https://sophiayau.com",
        code: "https://github.com/sophiayau/personal-website"
    }
}
];