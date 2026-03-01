// src/content/siteData.ts
// ─── All portfolio content lives here. Edit freely. ───

// ─── Types ───

export interface SiteConfig {
  name: string;
  logo: string;
  location: string;
  email: string;
  github: string;
  linkedin: string;
  cvUrl: string;
  profileImage: string;
}

export interface FocusPillar {
  icon: string;
  title: string;
  description: string;
}

export interface Project {
  title: string;
  impactBullets: string[];
  image: string;
  tags: string[];
  github?: string;
  liveDemo?: string;
}

export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  bullets: string[];
}

// ─── Site Config ───

export const siteConfig: SiteConfig = {
  name: "Shaked Arazi",
  logo: "",
  location: "Tel Aviv, Israel",
  email: "shaked13579@gmail.com",
  github: "https://github.com/shakedArazi",
  linkedin: "https://linkedin.com/in/shakedarazi",
  cvUrl: "/cv.pdf",
  profileImage: "/profile.webp",
};

// ─── Focus Pillars ───

export const focusPillars: FocusPillar[] = [

  {
    icon: "⚙️",
    title: "Software Design",
    description: "I build software with clear structure, explicit behavior, and long-term maintainability.",
  },

  {
    icon: "🔗",
    title: "System Execution and Reliability",
    description: "I focus on how software executes in practice, and how to make that execution predictable and observable.",
  },

];

// ─── Projects ───

export const projects: Project[] = [

  {
    title: "Attack Path Analyzer",
    impactBullets: [
      "Identifies real cloud attack paths from Terraform infrastructure plans.",
      "Builds a directed reachability graph of network and privilege relationships.",
      "Helps security teams prioritize what is actually exploitable.",
    ],
    image: "/projects/contextguard.png",
    tags: ["Python", "Terraform"],
    github: "https://github.com/shakedArazi/contextguard",
  },

  {
    title: "DAG Execution Engine",
    impactBullets: [
      "Runs computation logic over validated directed acyclic graphs.",
      "Isolates each processing unit with explicit dataflow and dependency wiring.",
      "Guarantees termination and controlled concurrency by design.",
    ],
    image: "/projects/javaDAG.png",
    tags: ["Java", "Spring Boot"],
    github: "https://github.com/shakedArazi/dag-engine",
  },

  {
    title: "Mutation Boundary Backend",
    impactBullets: [
      "Enforces a single entry point for every state change in the system.",
      "Separates AI inference from data mutation through strict trust boundaries.",
      "Keeps state transitions predictable, validated, and auditable.",
    ],
    image: "/projects/core_api.png",
    tags: ["TypeScript", "Node.js", "React", "MongoDB", "Docker"],
    github: "https://github.com/shakedArazi/taskgenius",
  },

  {
    title: "Execution Plan Orchestrator",
    impactBullets: [
      "Converts user input into structured, dependency-aware execution plans.",
      "Resolves inter-step data flow and enforces execution order automatically.",
      "Separates orchestration from inference for full behavioral control.",
    ],
    image: "/projects/chatbot.png",
    tags: ["TypeScript", "Python", "FastAPI", "Bun"],
    github: "https://github.com/shakedArazi/ChatBot",
  },

  {
    title: "Opinion Analysis Pipeline",
    impactBullets: [
      "Processes opinion data through a scheduled batch pipeline for structured analysis.",
      "Orchestrates jobs with Airflow and stores results in BigQuery for querying.",
      "Built as independent processing stages for observable, explicit execution.",
    ],
    image: "/projects/polarization.png",
    tags: ["Python", "Airflow", "GCP", "BigQuery", "Looker"],
    github: "https://github.com/shakedArazi/review-analysis",
  },

];

// ─── Experience ───

export const experience: ExperienceItem[] = [

  {
    role: "Company Commander & Technical Training Lead",
    company: "Israel Defense Forces (IDF)",
    period: "2017 – 2022",
    bullets: [
      "Led teams operating real-time command and control systems",
      "Designed and built technical training programs",
      "Trained personnel on complex operational systems",
      "Developed simulation-based training",
      "Managed large-scale technical training operations",
    ],
  },

  {
    role: "NOC Engineer",
    company: "Production Monitoring",
    period: "2022 – Present",
    bullets: [
      "Monitored production server environments",
      "Performed incident triage",
      "Investigated operational issues",
      "Worked with Linux systems",
      "Collaborated with engineering teams",
    ],
  },

  {
    role: "Computer Science Tutor",
    company: "The College of Management Academic Studies",
    period: "2023 – Present",
    bullets: [
      "Tutored students in algorithms and data structures",
      "Explained complex CS concepts",
      "Developed problem-solving skills",
      "Guided debugging and reasoning",
    ],
  },

];

// ─── Navigation ───

export const navLinks = [

  { label: "About", href: "#about" },

  { label: "Projects", href: "#projects" },

  { label: "Experience", href: "#experience" },

];
