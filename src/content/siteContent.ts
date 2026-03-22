export interface Project {
  title: string;
  description: string;
  details?: string;
  tech: string[];
  githubUrl: string;
  demoUrl?: string;
  imageSrc?: string;
  imageAlt?: string;
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
  location?: string;
  email?: string;
  githubUrl?: string;
  linkedinUrl?: string;
  resumeUrl?: string;
  profileImageSrc?: string;
  profileImageAlt?: string;
  seo: SeoConfig;
  projects: Project[];
}

export const siteContent: SiteContent = {
  name: "Jai Mali",
  headline: "Hi, I'm Jai! I am currently at UC San Diego Health, and am passionate about AI and HealthTech.",
  summary:
    "I am currently an informaticist at UC San Diego Health's Cardiology Department, building and maintaining software to improve cross-functional workflows with python and SQL, and now beginning to incorporate AI/ML to improve physician reporting and managerial metrics.",
  location: "",
  email: "realjaimali@gmail.com",
  githubUrl: "https://github.com/JaiMali",
  linkedinUrl: "https://linkedin.com/in/jaimali",
  resumeUrl: "",
  profileImageSrc: "/profile.jpg",
  profileImageAlt: "Jai's portrait",
  seo: {
    title: "Jai",
    description:
      "Jai's website.",
    ogImage: "/og-image.svg",
    siteUrl: "",
    favicon: "/favicon.svg",
  },
  projects: [
    {
      title: "Project One",
      description:
        "A short sentence describing what the project does and why it is useful.",
      details:
        "One additional sentence on the system, workflow, or technical problem it addresses.",
      tech: ["TypeScript", "React", "Python"],
      githubUrl: "https://github.com/yourhandle/project-one",
      demoUrl: "",
      imageSrc: "",
      imageAlt: "",
    },
  ],
};
