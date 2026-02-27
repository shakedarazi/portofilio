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
    title: "Backend Systems",
    description: "Production-grade backend services.",
    highlights: [
      "Event-driven and microservice architectures",
      "Execution model and concurrency design",
      "Structured logging and observability thinking",
    ],
  },

  {
    icon: "☁️",
    title: "Cloud & Infrastructure",
    description: "Cloud-native system design and deployment.",
    highlights: [
      "Docker, Kubernetes, Terraform",
      "GCP and AWS-based systems",
      "Infrastructure-aware backend development",
    ],
  },

  {
    icon: "🧠",
    title: "Distributed & Event-Driven Systems",
    description: "Explicit execution flow and orchestration.",
    highlights: [
      "DAG-based execution engines",
      "Backend orchestration systems",
      "Message-driven system design",
    ],
  },

  {
    icon: "🤖",
    title: "AI-Integrated Backend",
    description: "LLM integration within backend architecture.",
    highlights: [
      "RAG pipelines",
      "Hybrid inference architectures",
      "Execution planning systems",
    ],
  },

];

// ─── Projects ───

export const projects: Project[] = [

  {
    title: "TaskGenius – Cloud-Native Task Platform",

    summary:
      "Cloud-native multi-service task management platform built with FastAPI, enforcing strict service isolation, single-ingress architecture, and infrastructure-level trust boundaries.",

    image: "/projects/taskgenius.webp",

    impactBullets: [

      "Designed FastAPI backend acting as the single ingress for authentication, authorization, and data mutation",

      "Architected multi-container system separating API, AI service, scheduler, and database",

      "Enforced container-level trust boundaries using Docker networking",

      "Implemented backend orchestration coordinating AI inference and task workflows",

      "Containerized entire system enabling reproducible deployment"

    ],

    tags: [
      "Python",
      "FastAPI",
      "Docker",
      "MongoDB",
      "Microservices",
      "REST API",
      "Distributed Systems",
    ],

    github: "https://github.com/shakedArazi/taskgenius"

  },

  {
    title: "DAG-Based Event Processing Engine",

    summary:
      "Event-driven execution engine modeling computation as an explicit DAG with isolated execution units and concurrency control.",

    image: "/projects/dag-engine.webp",

    impactBullets: [

      "Designed execution engine enforcing acyclic graph structure",

      "Implemented Active Object concurrency model",

      "Built configuration-driven orchestration layer",

      "Developed REST ingress API and real-time streaming",

      "Separated execution model from transport layer"

    ],

    tags: [
      "Java",
      "Spring Boot",
      "Concurrency",
      "Event-Driven Architecture",
      "Multithreading",
      "Systems Design",
    ],

    github: "https://github.com/shakedArazi/dag-engine"

  },

  {
    title: "ContextGuard – IaC Attack Path Analyzer",

    summary:
      "Graph-based analysis engine evaluating Terraform plans to identify reachable attack paths.",

    image: "/projects/contextguard.webp",

    impactBullets: [

      "Parsed Terraform plans into graph model",

      "Implemented BFS reachability analysis",

      "Developed contextual risk scoring",

      "Built CLI integrated into infrastructure workflows",

      "Generated structured analysis reports"

    ],

    tags: [
      "Python",
      "Terraform",
      "AWS",
      "Graph Algorithms",
      "CLI",
      "Infrastructure as Code",
    ],

    github: "https://github.com/shakedArazi/contextguard"

  },

  {
    title: "News Polarization Analysis Platform (GCP) – In Progress",

    summary:
      "Cloud-based data pipeline using GCP and BigQuery.",

    image: "/projects/review-analysis.webp",

    impactBullets: [

      "Built data ingestion pipeline on GCP",

      "Implemented LLM analysis services",

      "Designed BigQuery processing layer",

      "Developed batch workflows",

      "Produced analytics-ready datasets"

    ],

    tags: [
      "Python",
      "GCP",
      "BigQuery",
      "Cloud Storage",
      "Data Pipeline",
    ],

    github: "https://github.com/shakedArazi/review-analysis"

  },

  {
    title: "Plan-Orchestrated Chatbot Platform",

    summary:
      "Backend orchestration system executing structured tool chains.",

    image: "/projects/chatbot.webp",

    impactBullets: [

      "Built execution planner",

      "Implemented orchestration engine",

      "Developed RAG microservice",

      "Integrated local and cloud models",

      "Designed multi-service backend"

    ],

    tags: [
      "TypeScript",
      "Node.js",
      "FastAPI",
      "Python",
      "Microservices",
    ],

    github: "https://github.com/shakedArazi/ChatBot"

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