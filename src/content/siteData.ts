// src/content/siteData.ts
// ─── All portfolio content lives here. Edit freely. ───

// ─── Types ───

export interface SiteConfig {
  name: string;
  logo: string;
  headline: string;
  headlineAccent: string;
  subtext: string;
  badge: string;
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
  highlights: string[];
}

export interface Project {
  title: string;
  summary: string;
  image: string;
  impactBullets: string[];
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

export interface EducationItem {
  degree: string;
  school: string;
  period: string;
  note?: string;
}

export interface SkillCategory {
  label: string;
  skills: string[];
}

// ─── Site Config ───

export const siteConfig: SiteConfig = {
  name: "Shaked Arazi",

  logo: "",

  headline: "",
  headlineAccent: "",

  subtext:
    "Software engineer focused on backend systems.I build services and care about how they actually behave — how they execute, fail, and recover — designing them to be observable, predictable, and easy to reason about.Currently completing a B.Sc. in Computer Science.",

  badge: "",

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
    highlights: [
      "Design components and services that are easy to understand and extend",
      "Consider failure, recovery, and edge cases as part of the design",
      "Prefer simple, well-reasoned solutions over unnecessary complexity",
    ],
  },

  {
    icon: "🔗",
    title: "System Execution and Reliability",
    description: "I focus on how software executes in practice, and how to make that execution predictable and observable.",
    highlights: [
      "Model execution flow so behavior and dependencies are explicit",
      "Use structure and observability to make systems easier to debug and operate",
      "Design with reliability and operational clarity in mind",
    ],
  },

];

// ─── Projects ───

export const projects: Project[] = [

  {
    title: "Graph-Based Analyzer for Infrastructure Attack Paths",

    summary:
      "I built an analysis engine that converts Terraform plans into a reachability graph to identify and prioritize actual attack paths.",

    image: "/projects/contextguard.png",

    impactBullets: [
      "Designed a pipeline that parses Terraform plan output and constructs a directed graph of network and privilege relationships",
      "Used graph traversal to analyze reachability and determine whether exposed resources can access sensitive assets",
      "Defined a deterministic scoring model based on path structure rather than isolated misconfigurations",
      "Implemented breakpoint recommendations to interrupt attack paths while preserving intended system functionality"
    ],

    tags: [
      "Python",
      "Terraform",
    ],

    github: "https://github.com/shakedArazi/contextguard"

  },

  {
    title: "DAG-Based Engine with Explicit Execution Semantics",

    summary:
      "I designed a computation engine that executes logic over a validated DAG, with explicit dataflow and isolated execution units.",

    image: "/projects/javaDAG.png",

    impactBullets: [
      "Defined a computation model where each processing unit and dependency is represented explicitly as a graph node",
      "Validated graph structure before execution to prevent cycles and guarantee termination",
      "Separated computation logic from orchestration by defining system wiring through configuration",
      "Implemented isolated execution units using dedicated workers to control concurrency and execution behavior"
    ],

    tags: [
      "Java",
      "Spring Boot",
    ],

    github: "https://github.com/shakedArazi/dag-engine"

  },

  {
    title: "Backend Architecture with Enforced Mutation Boundaries",

    summary:
      "I built a backend architecture where all state changes pass through a controlled API layer, separating inference from mutation.",

    image: "/projects/core_api.png",

    impactBullets: [
      "Designed the system around a single mutation entry point, ensuring all state changes go through explicit validation",
      "Separated the AI component so it cannot directly access the database or perform mutations",
      "Defined strict trust boundaries to secure service interactions and isolate internal components",
      "Implemented validation and authorization layers to enforce controlled, predictable state transitions"
    ],

    tags: [
      "TypeScript",
      "Node.js",
      "React",
      "MongoDB",
      "Docker",
    ],

    github: "https://github.com/shakedArazi/taskgenius"

  },

  {
    title: "Execution-Planned Backend with Structured Tool Orchestration",

    summary:
      "I built a backend that converts user input into an explicit execution plan and runs dependent tools in a controlled sequence.",

    image: "/projects/chatbot.png",

    impactBullets: [
      "Designed a planner that translates user requests into structured execution steps with defined dependencies",
      "Implemented an executor that resolves inter-step data flow and enforces execution order",
      "Separated orchestration logic from model inference to maintain control over execution behavior",
      "Analyzed failure scenarios and defined fallback paths to preserve system stability"
    ],

    tags: [
      "TypeScript",
      "Python",
      "FastAPI",
      "Bun",
    ],

    github: "https://github.com/shakedArazi/ChatBot"

  },

  {
    title: "Batch Pipeline for Structured Analysis of Opinion Polarization (Ongoing)",

    summary:
      "I am building a batch processing pipeline that analyzes opinion data and produces structured results for downstream analytics.",

    image: "/projects/polarization.png",

    impactBullets: [
      "Designing a batch pipeline orchestrated with Airflow to run analysis jobs on scheduled datasets",
      "Defining aggregation stages that transform raw analysis results into structured summaries before storage",
      "Planning data storage in BigQuery to support efficient querying and downstream analysis",
      "Designing the pipeline output to integrate with Looker for visualization and exploration",
      "Structuring the system as independent processing stages to keep execution explicit and observable"
    ],

    tags: [
      "Python",
      "Airflow",
      "GCP",
      "BigQuery",
      "Looker",
    ],

    github: "https://github.com/shakedArazi/review-analysis"

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

      "Managed large-scale technical training operations"

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

      "Collaborated with engineering teams"

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

      "Guided debugging and reasoning"

    ],

  },

];

// ─── Education ───

export const education: EducationItem[] = [

  {
    degree: "B.Sc. Computer Science",

    school: "The College of Management Academic Studies",

    period: "2021 – 2025",

  },

];

// ─── Skills ───

export const skillCategories: SkillCategory[] = [

  {
    label: "Backend",
    skills: ["Java", "Spring Boot", "Node.js", "FastAPI", "Python", "TypeScript"],
  },

  {
    label: "Cloud",
    skills: ["AWS", "GCP", "Docker", "Kubernetes", "Terraform"],
  },

  {
    label: "Systems",
    skills: ["Distributed Systems", "Concurrency", "Event-Driven Architecture"],
  },

  {
    label: "Data",
    skills: ["BigQuery", "Kafka", "Airflow"],
  },

];

// ─── Navigation ───

export const navLinks = [

  { label: "About", href: "#about" },

  { label: "Focus", href: "#focus" },

  { label: "Projects", href: "#projects" },

  { label: "Experience", href: "#experience" },

  { label: "Skills", href: "#skills" },

  { label: "Contact", href: "#contact" },

];