// src/content/siteData.ts
// ─── All portfolio content lives here. Edit freely. ───

// ─── Types ───

export interface SiteConfig {
  name: string;
  logo: string;
  location: string;
  phone: string;
  email: string;
  github: string;
  linkedin: string;
  cvUrl: string;
  profileImage: string;
  }
  
  export interface Hero {
  title: string;
  subtitle: string;
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
  phone: "050-655-0659",
  email: "shaked13579@gmail.com",
  github: "https://github.com/shakedArazi",
  linkedin: "https://www.linkedin.com/in/shaked-arazi1/",
  cvUrl: "/cv.pdf",
  profileImage: "/profile.webp",
  };
  
  // ─── Hero ───
  
  export const hero: Hero = {
  title: "Backend and Distributed Systems Engineer",
  subtitle:
  "I build systems where execution is explicit, state transitions are controlled, and behavior remains predictable under real operational conditions.",
  };
  
  // ─── About ───
  
  export const about: string = `
  I am a Computer Science student focused on backend and distributed systems.
  
  
  My work centers on execution — how systems behave when they run, how state changes propagate, and how to make those transitions explicit, controlled, and observable.
  
  Through building execution engines, orchestration systems, and production-facing tooling, I developed strong system reasoning, failure analysis skills, and a deep understanding of backend architecture.
  
  My experience operating and diagnosing real production environments shaped how I design software — favoring explicit behavior, isolation boundaries, and operational clarity.
  
  I am particularly interested in infrastructure, backend platforms, and systems that must remain reliable under real-world conditions.
  `;
  
  // ─── Focus Pillars ───
  
  export const focusPillars: FocusPillar[] = [
  
  {
  icon: "⚙️",
  title: "System Design and Execution",
  description:
  "I design systems around explicit execution boundaries, controlled state transitions, and clear separation of responsibility, so behavior remains understandable and resilient as complexity grows.",
  },
  
  {
  icon: "🔗",
  title: "Operational Reliability",
  description:
  "I focus on how systems behave under real conditions — how data flows, where failures emerge, and how to make execution observable, diagnosable, and predictable.",
  },
  
  ];
  
  // ─── Projects ───
  
  export const projects: Project[] = [
  
  {
  title: "ContextGuard - Attack Path Analyzer",
  impactBullets: [
  "Built a graph model of cloud infrastructure from Terraform plans, exposing how network reachability and identity permissions combine into real attack paths.",
  "Implemented reachability analysis to distinguish theoretical exposure from actionable exploitation paths.",
  "Turned static infrastructure configuration into an executable security model enabling precise reasoning about risk.",
  ],
  image: "/projects/contextguard.png",
  tags: ["Python", "Terraform"],
  github: "https://github.com/shakedArazi/contextguard",
  },
  
  {
  title: "DAG Execution Engine",
  impactBullets: [
  "Developed an execution engine that runs computation over validated DAGs with strict dependency enforcement.",
  "Ensured deterministic execution by explicitly modeling data flow and execution order.",
  "Created isolation between processing units, enabling concurrency without hidden side effects.",
  ],
  image: "/projects/javaDAG.png",
  tags: ["Java", "Spring Boot"],
  github: "https://github.com/shakedArazi/dag-engine",
  },
  
  {
  title: "Secure Ai-assistant for task management",
  impactBullets: [
    "Enforced a strict mutation boundary, ensuring all state changes pass through a single validated API.",
    "Isolated the AI as a stateless container with no database access or exposed ports, preventing it from modifying system state.",
    "Centralized authentication, authorization, and validation behind a single ingress backend.",
    "Applied Docker network isolation to enforce trust boundaries and reduce attack surface.",
    "Separated AI inference from system authority, ensuring suggestions cannot directly trigger execution."
  ],
  image: "/projects/core_api.png",
  tags: ["FastAPI", "python", "MongoDB", "Docker","RESTful API"],
  github: "https://github.com/shakedArazi/taskgenius",
  },
  
  {
  title: "ChatBot - Execution Plan Orchestrator",
  impactBullets: [
  "Built an orchestration layer that converts user intent into structured execution graphs.",
  "Explicitly modeled task dependencies and execution order.",
  "Enabled controlled and observable execution of multi-step processes.",
  ],
  image: "/projects/chatbot.png",
  tags: ["TypeScript", "Python", "FastAPI"],
  github: "https://github.com/shakedArazi/ChatBot",
  },
  
  {
  title: "PolarLens — Social Polarization Intelligence Pipeline",
  impactBullets: [
  "Built a batch data pipeline transforming raw opinion data into structured analytical outputs.",
  "Orchestrated staged execution using Airflow with explicit processing boundaries.",
  "Stored and exposed results through BigQuery for downstream analysis.",
  ],
  image: "/projects/polarization.png",
  tags: ["Python", "Airflow", "GCP", "BigQuery"],
  github: "https://github.com/shakedArazi/review-analysis",
  },
  
  ];
  
  // ─── Experience ───
  
  export const experience: ExperienceItem[] = [

  {
    role: "Network support Engineer",
    company: "SDS data services",
    period: "2023 – Present",
    bullets: [
    "Monitored live Linux-based production systems, maintaining operational visibility and stability.",
    "Investigated system anomalies using logs, metrics, and runtime signals.",
    "Performed incident triage and helped isolate root causes.",
    "Collaborated with engineers during incident resolution.",
    "Developed practical understanding of system behavior under production load.",
    ],
    },      
    {
      role: "Company Officer & Technical Training Lead",
      company: "Israel Defense Forces (IDF)",
      period: "2017 – 2022",
      bullets: [
      "Led and trained tens of personnel responsible for operating real-time technical and operational systems under high-pressure conditions.",
      "Designed and built a complete technical training program combining leadership development with deep system-level qualification.",
      "Taught the interaction between digital control systems and physical hardware platforms.",
      "Developed simulation exercises reproducing real system failures and operational constraints.",
      "Built structured technical understanding enabling independent troubleshooting and system reasoning.",
      ],
      },
  {
  role: "Computer Science Tutor",
  company: "The College of Management Academic Studies",
  period: "",
  bullets: [
  "Taught algorithms and data structures to undergraduate students.",
  "Explained complex technical concepts through structured reasoning.",
  "Guided debugging and problem-solving processes.",
  "Helped students build strong analytical thinking skills.",
  "Reinforced core computer science foundations.",
  ],
  },
  
  ];
  
  // ─── Navigation ───
  
  export const navLinks = [
  
  { label: "About", href: "#about" },
  
  { label: "Projects", href: "#projects" },
  
  { label: "Experience", href: "#experience" },
  
  ];
  