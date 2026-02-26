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

// ─── Data ───

export const siteConfig: SiteConfig = {
  name: "Shaked Arazi",
  logo: "Shaked.dev",
  headline: "Building robust",
  headlineAccent: "backend systems",
  subtext:
    "Backend-focused engineer designing cloud-native architectures with security-by-design principles, performance observability, and production-grade reliability. Currently pursuing a B.Sc. in Computer Science.",
  badge: "Open to Opportunities",
  location: "Tel Aviv, Israel",
  email: "shaked@example.com",
  github: "https://github.com/shakedArazi",
  linkedin: "https://linkedin.com/in/shakedarazi",
  cvUrl: "/cv.pdf",
  profileImage: "/profile.webp",
};

export const focusPillars: FocusPillar[] = [
  {
    icon: "⚙️",
    title: "Backend Systems",
    description: "Production-grade services built for correctness.",
    highlights: [
      "Event-driven & microservice architectures",
      "Type-safe APIs with contract-first design",
      "Structured logging and distributed tracing",
    ],
  },
  {
    icon: "🤖",
    title: "AI / LLM Engineering",
    description: "Practical AI integration with safety guardrails.",
    highlights: [
      "RAG pipelines with embedding search",
      "Prompt safety & output validation",
      "Evaluation frameworks for LLM quality",
    ],
  },
  {
    icon: "☁️",
    title: "Cloud & Platform",
    description: "Infrastructure that scales and deploys predictably.",
    highlights: [
      "AWS, Docker, Kubernetes, Terraform",
      "CI/CD with automated quality gates",
      "Infrastructure-as-Code best practices",
    ],
  },
  {
    icon: "🔒",
    title: "Security & Reliability",
    description: "Threat-aware design from day one.",
    highlights: [
      "IAM, network segmentation, trust boundaries",
      "Attack-path analysis & threat modeling",
      "SLO-driven reliability engineering",
    ],
  },
];

export const projects: Project[] = [
  {
    title: "TaskGenius",
    summary:
      "Containerized multi-service task platform with trust boundaries and observability hooks.",
    image: "/projects/taskgenius.webp",
    impactBullets: [
      "Enforced service-level trust boundaries reducing lateral attack surface",
      "Integrated distributed tracing with <50ms p99 overhead per request",
      "Achieved 99.9% uptime target with health-check and circuit-breaker patterns",
    ],
    tags: ["Java", "Spring Boot", "Docker", "PostgreSQL", "Prometheus", "gRPC"],
    github: "https://github.com/shakedArazi/taskgenius",
  },
  {
    title: "ContextGuard",
    summary:
      "Attack-path and IaC analyzer with severity scoring and false-positive reduction.",
    image: "/projects/contextguard.webp",
    impactBullets: [
      "Reduced false-positive rate by 40% through contextual severity scoring",
      "Analyzed IaC templates for misconfigured security groups and open ports",
      "Breakpoint-driven analysis enabling targeted remediation workflows",
    ],
    tags: ["Python", "FastAPI", "Terraform", "AWS", "Neo4j", "Docker"],
    github: "https://github.com/shakedArazi/contextguard",
  },
  {
    title: "DAG Computation Engine",
    summary:
      "Event-driven DAG execution engine with concurrency control and backpressure.",
    image: "/projects/dag-engine.webp",
    impactBullets: [
      "DAG validation prevents cyclic dependencies at submission time",
      "Backpressure mechanism maintains <200ms task scheduling latency under load",
      "Concurrent execution with configurable parallelism and retry policies",
    ],
    tags: ["Node.js", "TypeScript", "Redis", "RabbitMQ", "Docker", "Grafana"],
    github: "https://github.com/shakedArazi/dag-engine",
  },
];

export const experience: ExperienceItem[] = [
  {
    role: "NOC Engineer",
    company: "Production Monitoring",
    period: "2022 – Present",
    bullets: [
      "Monitored production infrastructure across multi-region deployments",
      "Led incident response and root-cause analysis for P1/P2 incidents",
      "Mapped service dependencies to reduce MTTR by 30%",
      "Built alerting dashboards for real-time SLO tracking",
    ],
  },
];

export const education: EducationItem[] = [
  {
    degree: "B.Sc. Computer Science",
    school: "University (Placeholder)",
    period: "2021 – 2025",
    note: "Focus: distributed systems, algorithms, software engineering",
  },
];

export const skillCategories: SkillCategory[] = [
  {
    label: "Backend",
    skills: ["Java", "Spring Boot", "Node.js", "FastAPI", "Python", "TypeScript"],
  },
  {
    label: "Cloud & DevOps",
    skills: ["AWS", "Docker", "Kubernetes", "Terraform", "CI/CD", "Linux"],
  },
  {
    label: "Security",
    skills: [
      "IAM",
      "Network Segmentation",
      "Attack Paths",
      "Threat Modeling",
      "Trust Boundaries",
    ],
  },
  {
    label: "Performance & Observability",
    skills: [
      "Prometheus",
      "Grafana",
      "Load Testing",
      "Profiling",
      "SLOs",
      "Distributed Tracing",
    ],
  },
  {
    label: "AI / LLM",
    skills: ["RAG", "Embeddings", "Evaluation", "Prompt Safety", "LangChain"],
  },
];

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Focus", href: "#focus" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];
