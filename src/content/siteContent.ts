export interface Project {
  title: string;
  description: string;
  details?: string;
  tech: string[];
  githubUrl: string;
  demoUrl?: string;
  role?: string;
  impact?: string;
}

export interface SeoConfig {
  title: string;
  description: string;
  ogImage: string;
  siteUrl?: string;
  favicon: string;
}

export interface SiteContent {
  name: string;
  headline: string;
  summary: string;
  about: string;
  strengths: string[];
  location?: string;
  availability?: string;
  email?: string;
  githubUrl?: string;
  linkedinUrl?: string;
  resumeUrl?: string;
  profileImageSrc?: string;
  profileImageAlt?: string;
  closingLine?: string;
  seo: SeoConfig;
  projects: Project[];
}

export const siteContent: SiteContent = {
  name: "Jai Mali",
  headline: "Hi, I'm Jai! I am currently at UC San Diego Health, and am passionate about AI and HealthTech.",
  summary:
    "I build software that is technically sound, easy to use, and maintainable over time. My interests are in backend and full-stack engineering, ML-enabled products, and the practical systems work needed to make AI features dependable in production.",
  about:
    "I am most interested in engineering roles where strong fundamentals matter as much as model quality. That includes product-minded backend work, full-stack systems, data and inference pipelines, and user-facing tools that help people work more effectively with complex technical systems.\n\nI care about clear problem framing, thoughtful implementation, and interfaces that communicate competence without unnecessary complexity.",
  strengths: [
    "Full-stack engineering",
    "Applied machine learning",
    "LLM tooling",
    "Data pipelines",
    "Product-focused frontend quality",
  ],
  location: "",
  availability: "",
  email: "",
  githubUrl: "",
  linkedinUrl: "",
  resumeUrl: "",
  profileImageSrc: "/profile.jpg",
  profileImageAlt: "Portrait of Jai",
  closingLine:
    "Contact me at any time!",
  seo: {
    title: "Jai Mali — Software Engineer",
    description:
      "One-page personal website for software engineering, machine learning, and AI roles.",
    ogImage: "/og-image.svg",
    siteUrl: "",
    favicon: "/favicon.svg",
  },
  projects: [],
};

/**
 * Example:
 *
 * profileImageSrc: "/profile.jpg",
 * profileImageAlt: "Portrait of Your Name",
 *
 * projects: [
 *   {
 *     title: "Retrieval-Augmented Research Assistant",
 *     description: "A tool for querying technical documents with grounded answers and source citations.",
 *     details: "Built a retrieval pipeline, chunking strategy, and evaluation loop to improve response quality on domain-specific material.",
 *     tech: ["TypeScript", "React", "Python", "FastAPI", "PostgreSQL"],
 *     githubUrl: "https://github.com/yourhandle/project-name",
 *     demoUrl: "",
 *     role: "Solo",
 *     impact: "Improved answer quality and reduced manual lookup time during research workflows."
 *   }
 * ]
 */
