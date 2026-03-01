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
  title: "Understanding How Systems Execute",
  description: "I'm interested in how systems actually run — how data moves, how components interact, and how structure shapes behavior.",
  },

  {
  icon: "🔍",
  title: "Making Failures Understandable",
  description: "I try to build things in a way that makes failures visible and explainable, so problems can be understood and fixed with confidence.",
  },

  {
  icon: "🧠",
  title: "Thinking in Terms of Boundaries",
  description: "I'm naturally drawn to systems with clear boundaries and responsibilities, where behavior stays predictable even as complexity increases.",
  },

  ];
  
  // ─── Projects ───
  
  export const projects: Project[] = [
  
  {
  title: "ContextGuard - Attack Path Analyzer",
  impactBullets: [
    "Modeled cloud infrastructure as an attack graph, enabling precise identification of exploitable paths to sensitive assets.",
    "Implemented reachability-based severity scoring, reducing false positives and focusing attention on real security risks.",
    "Generated actionable remediation breakpoints, allowing engineers to eliminate attack paths with targeted control changes."
  ],
  image: "/projects/contextguard.png",
  tags: ["Python", "IaC", "Cloud Security", "IAM", "CLI", "CI gating"],
  github: "https://github.com/shakedArazi/contextguard",
  },
  
  {
  title: "Event-Driven DAG Execution Engine with Isolated Agents",
  impactBullets: [
    "Enforced DAG-based execution constraints, preventing cyclic dependencies and guaranteeing bounded, predictable computation.",
    "Isolated computation units with dedicated worker threads and queues, enabling safe concurrency without execution interference.",
    "Modeled computation as explicit event-driven dataflow, improving system debuggability and reasoning about execution behavior."
  ],
  image: "/projects/javaDAG.png",
  tags: ["Java", "Spring Boot", "Multithreading", "REST API", "Event-Driven"],
  github: "https://github.com/shakedarazi/Design_MVC",
  },
  
  {
  title: "Secure Ai-assistant for task management",
  impactBullets: [
    "Enforced a strict mutation boundary, eliminating unauthorized or implicit state modification paths.",
    "Integrated external AI through a validated suggestion flow, preventing unintended or autonomous system changes.",
    "Containerized services with Docker and isolated them on a private network, reducing attack surface and improving deployment reliability."
  ],
  image: "/projects/core_api.png",
  tags: ["FastAPI", "pytest", "MongoDB", "Docker Compose","RESTful API"],
  github: "https://github.com/shakedArazi/taskgenius",
  },
  
  {
  title: "ChatBot - Execution Plan Orchestrator",
  impactBullets: [
    "Built a planner–executor orchestration layer that converts natural language into structured tool chains, enabling deterministic multi-step task execution.",
    "Integrated hybrid local and cloud LLM routing, reducing operational cost while preserving response accuracy through selective fallback.",
    "Implemented RAG over a vector database, grounding responses in real documents and improving factual reliability."
  ],
  image: "/projects/chatbot.png",
  tags: ["FastAPI","ExpressJS", "RAG","Ollama","huggingface", "OpenAI", "Microservices"],
  github: "https://github.com/shakedArazi/ChatBot",
  },
  
  {
  title: "PolarLens — Social Polarization Intelligence Pipeline (ongoing)",
  impactBullets: [
    "Developing a batch pipeline that transforms raw opinion data into structured analytical datasets.",
    "Structuring the workflow as staged Airflow batches, ensuring processing runs on complete and consistent data.",
    "Implementing pre-aggregation before BigQuery ingestion, enabling fast analytical queries without scanning raw records."
  ],
  image: "/projects/polarization.png",
  tags: ["Python", "Airflow", "GCP", "BigQuery", "ETL", "Data Pipelines"],
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
  role: "Computer Science Tutor (Private)",
  company: "The College of Management Academic Studies",
  period: "",
  bullets: [
  "Taught algorithms and data structures to undergraduate computer science students in one-on-one sessions.",
  "Broke down complex problems into structured, understandable steps, improving students' problem-solving ability.",
  "Guided students through debugging processes, helping them identify root causes instead of trial-and-error fixes.",
  "Strengthened students' analytical thinking and understanding of core CS concepts.",
  ],
  },
  
  ];
  
  // ─── Navigation ───
  
  export const navLinks = [
  
  { label: "About", href: "#about" },
  
  { label: "Projects", href: "#projects" },
  
  { label: "Experience", href: "#experience" },
  
  ];
  