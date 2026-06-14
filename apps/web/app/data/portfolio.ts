// Central source of truth for the portfolio.
// Edit content here — the homepage and sections read from this file.

export const profile = {
  name: "Shubham Patel",
  role: "Software Engineer & Architect",
  tagline: "SDE · Architect · DevOps & AI",
  headline:
    "I build products end to end — from code to Kubernetes deployment: backend systems, AI agents & data pipelines, cloud infra, system design and scaling.",
  location: "India",
  phone: "6201060889",
  email: "shubham.kumar.patel.2410@gmail.com",
  resumeUrl:
    "https://drive.google.com/file/d/1OjsGWxo1M6Rjbi6NLmbc8ogviR-qrfUE/view",
  image: "/shubham-rp360.png",
  socials: {
    github: "https://github.com/shubham21155102",
    linkedin: "https://www.linkedin.com/in/shubham-kumar-9a6a13232/",
    instagram: "https://www.instagram.com/shubh_am.patel/",
  },
  // High-signal numbers for the hero stat strip
  stats: [
    { label: "Year shipping in prod", value: "1+" },
    { label: "Internships / roles", value: "12+" },
    { label: "B.Tech CGPA — IIT BHU", value: "8.63" },
    { label: "Tech in toolkit", value: "30+" },
  ],
} as const;

// "Everything I've learnt in the startup" — grouped so it reads as depth, not a word cloud.
import {
  Code,
  Server,
  Palette,
  Cloud,
  Database,
  BarChart3,
  type LucideIcon,
} from "lucide-react";

export interface SkillGroup {
  title: string;
  icon: LucideIcon;
  skills: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    title: "Languages",
    icon: Code,
    skills: ["TypeScript", "JavaScript", "Python", "Java", "C++", "SQL"],
  },
  {
    title: "Backend",
    icon: Server,
    skills: [
      "Node.js",
      "Express.js",
      "NestJS",
      "FastAPI",
      "Flask",
      "Spring Boot",
      "tRPC",
      "REST APIs",
    ],
  },
  {
    title: "Frontend",
    icon: Palette,
    skills: [
      "React",
      "Next.js",
      "React Native",
      "Tailwind CSS",
      "Material-UI",
      "Framer Motion",
    ],
  },
  {
    title: "Cloud & DevOps",
    icon: Cloud,
    skills: [
      "AWS (EC2, Fargate, SQS)",
      "Elastic Beanstalk",
      "Docker",
      "GitHub Actions",
      "CI/CD",
    ],
  },
  {
    title: "Data & Search",
    icon: Database,
    skills: ["MySQL", "PostgreSQL", "Redis", "Elasticsearch", "Celery"],
  },
  {
    title: "Observability",
    icon: BarChart3,
    skills: ["Elastic Stack (ELK)", "Kibana", "Logging & Monitoring"],
  },
];

export interface Experience {
  id: number;
  company: string;
  position: string;
  description: string;
  startDate: string;
  endDate: string;
  skills: string[];
  image: string;
  current?: boolean;
}

// Cleaned: placeholder "Company B/C" entries removed, real roles kept and ordered newest-first.
export const experiences: Experience[] = [
  {
    id: 100,
    company: "Grassstone (RP360)",
    position: "Software Engineer & Architect",
    description:
      "Owning products end to end — from code to deployment. System design, scaling and architecture; DevOps and Kubernetes-based deployments; building AI agents and data pipelines; and the recent MedTech AI Courses project (self-hosted AI video generation).",
    startDate: "Jun 2025",
    endDate: "Present",
    current: true,
    skills: [
      "System Design",
      "Architecture",
      "Kubernetes",
      "DevOps",
      "AI Agents",
      "Data Pipelines",
      "Scaling",
    ],
    image: "/shubham-rp360.png",
  },
  {
    id: 101,
    company: "GoodSpace AI",
    position: "Software Engineer",
    description:
      "Worked on AI-driven product engineering across the backend and infrastructure.",
    startDate: "May 2025",
    endDate: "Jun 2025",
    skills: ["AI", "Backend", "Node.js"],
    image: "",
  },
  {
    id: 1,
    company: "DivineTalk Astrology",
    position: "Software Engineer",
    description:
      "Built and scaled backend services in production — REST APIs, search and observability on AWS. Day-to-day across Express.js, MySQL and the Elastic Stack (Elasticsearch + Kibana) for logging and analytics.",
    startDate: "Dec 2024",
    endDate: "May 2025",
    skills: [
      "AWS",
      "Express.js",
      "Elasticsearch",
      "Kibana",
      "MySQL",
      "Elastic Stack (ELK)",
    ],
    image:
      "https://media.licdn.com/dms/image/v2/D4D0BAQEMi_iL1AX2OA/company-logo_100_100/company-logo_100_100/0/1705392209325/divinetalk_logo?e=1746662400&v=beta&t=9wEKzpYoks5yFn6Xz3KRtSxqTfwHndTU0dDB0iop9YQ",
  },
  {
    id: 2,
    company: "Jindal Steel & Power Ltd.",
    position: "Technology Integration Intern",
    description:
      "Worked on automation and volume-calculation tooling, plus data visualization and 3D modeling to support on-site decisions.",
    startDate: "May 2024",
    endDate: "Jul 2024",
    skills: ["Python", "JavaScript", "Data Visualization", "3D Modeling"],
    image:
      "https://media.licdn.com/dms/image/v2/C4E0BAQEq60t16uDOWw/company-logo_100_100/company-logo_100_100/0/1630628425888/jindal_steel__power_ltd__logo?e=1746662400&v=beta&t=M55XVbTsiC_Wn85PjHABEROsP8aXxCJU3sYhYclEcFk",
  },
  {
    id: 3,
    company: "Rejoy Health",
    position: "Backend Developer Intern",
    description:
      "Built backend services with async task processing — AWS Fargate workloads, Amazon SQS queues and Celery workers.",
    startDate: "May 2024",
    endDate: "May 2024",
    skills: ["AWS Fargate", "Amazon SQS", "Celery"],
    image:
      "https://media.licdn.com/dms/image/v2/C560BAQHlwA6rRf8OrA/company-logo_100_100/company-logo_100_100/0/1660842587536/rejoyhealthusa_logo?e=1746662400&v=beta&t=WyASMsiRUwrhf8JysgZhG-uHJKP6MY1kOTOFieOX5EQ",
  },
  {
    id: 4,
    company: "JS Tigers",
    position: "Software Developer Intern",
    description:
      "Shipped an API-less full-stack product end to end with tRPC, plus React Native and a Material-UI / Tailwind front end.",
    startDate: "Apr 2024",
    endDate: "May 2024",
    skills: ["tRPC", "Material-UI", "Tailwind CSS", "React Native"],
    image:
      "https://media.licdn.com/dms/image/v2/D560BAQFWw6cuyDYnbw/company-logo_100_100/company-logo_100_100/0/1711082676203/jstigers_logo?e=1746662400&v=beta&t=7766R82PmUJ5zVSNN-L2IcPGI-hbcJ6oppIJ8uNN10U",
  },
  {
    id: 5,
    company: "Acencore",
    position: "Full Stack Developer Intern",
    description:
      "Led CI/CD implementation and backend development — Dockerized services, GitHub Actions pipelines, NestJS and FastAPI.",
    startDate: "Mar 2024",
    endDate: "Apr 2024",
    skills: ["Docker", "GitHub Actions", "NestJS", "FastAPI"],
    image:
      "https://media.licdn.com/dms/image/v2/D4D0BAQE1ShqDr0dkLg/company-logo_100_100/company-logo_100_100/0/1710004323468/acencoreai_logo?e=1746662400&v=beta&t=Iv8xlNLpZFf_g2Y4kn9NiEZ2tRSsGHTMZcuj7Lv9WCQ",
  },
  {
    id: 6,
    company: "Ostello AI",
    position: "DevOps & Backend Engineer",
    description:
      "Backend and DevOps work — NestJS services backed by PostgreSQL and Redis, deployed on AWS Elastic Beanstalk.",
    startDate: "Jan 2024",
    endDate: "Feb 2024",
    skills: ["NestJS", "PostgreSQL", "Redis", "Elastic Beanstalk"],
    image:
      "https://media.licdn.com/dms/image/v2/C4D0BAQEUOe5VKZ0Hhw/company-logo_100_100/company-logo_100_100/0/1659072964018/ostello_india_logo?e=1746662400&v=beta&t=-Asu_6cT8o6vbZy8gNvPAREv5ZeGJGCowuLRB-GqpYo",
  },
  {
    id: 7,
    company: "TryAndes",
    position: "Software Engineer Intern",
    description:
      "Full-stack work across a Next.js front end and a Flask backend with MySQL, written in TypeScript.",
    startDate: "Jul 2023",
    endDate: "Oct 2023",
    skills: ["Next.js", "Flask", "TypeScript", "MySQL"],
    image: "https://picsum.photos/id/1125/200/200",
  },
  {
    id: 8,
    company: "Club of Programmers, IIT BHU",
    position: "Software Development Group Member",
    description:
      "Built campus tools end to end with the dev group — Node.js backends and full front-end work.",
    startDate: "Dec 2022",
    endDate: "Jul 2023",
    skills: ["Node.js", "Front-End", "Back-End"],
    image:
      "https://media.licdn.com/dms/image/v2/C4E0BAQFWyeIkMecCww/company-logo_100_100/company-logo_100_100/0/1630654066846/cops_iitbhu_logo?e=1746662400&v=beta&t=-ku2G86sz3Ebj7n7iK-N6eKWPLHtFr9e9QW7PAK-6f0",
  },
  {
    id: 9,
    company: "FMC Weekend, IIT BHU",
    position: "Tech Head → Senior Advisor",
    description:
      "Led the tech team for the campus fest across multiple editions, increasing event participation by 30%.",
    startDate: "Nov 2022",
    endDate: "Oct 2024",
    skills: ["Leadership", "Node.js", "Full-Stack"],
    image:
      "https://media.licdn.com/dms/image/v2/D560BAQH86tUgFign6Q/img-crop_100/img-crop_100/0/1723556307899?e=1746662400&v=beta&t=utKewCX3wl_PKxOslwBAiBDXuKW3cVuwFhzh96QDQYg",
  },
];

export interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  link?: string;
  repo?: string;
  accent: string; // tailwind gradient classes for the card header
}

export const projects: Project[] = [
  {
    id: 10,
    title: "Vaani — Voice AI Platform",
    description:
      "Open-stack voice AI platform running on my own GPU: streaming TTS (25 voices, 10 languages), long-form STT with diarization, zero-shot voice cloning, and real-time WebRTC voice agents (VAD → Whisper → Qwen3 → VibeVoice). Built on VibeVoice + community models with a Studio frontend, API keys and billing.",
    tags: ["AI", "VibeVoice", "LiveKit / WebRTC", "GPU", "Full Stack"],
    link: "https://vaani.shubhamiitbhu.in",
    repo: "https://github.com/shubham21155102/vaani",
    accent: "from-fuchsia-500 to-purple-600",
  },
  {
    id: 11,
    title: "MedTech AI Courses — AI Video Pipeline",
    description:
      "Self-hosted AI video generation pipeline for long-form course and marketing content — a custom avatar and cloned voice, built entirely on open-source models (Wan 2.2 S2V, VibeVoice, Chatterbox, LatentSync) on a GH200 GPU. Scripts → TTS → slides → talking-head → ffmpeg compositing, fully automated.",
    tags: ["AI Video", "ComfyUI", "Diffusion Models", "Python", "GPU"],
    accent: "from-rose-500 to-orange-600",
  },
];

export interface Education {
  id: number;
  institution: string;
  degree: string;
  startDate: string;
  endDate: string;
  grade: string;
  logo: string;
}

export const education: Education[] = [
  {
    id: 1,
    institution: "IIT (BHU), Varanasi",
    degree: "B.Tech — Mining Engineering",
    startDate: "2021",
    endDate: "2025",
    grade: "CGPA: 8.63",
    logo: "https://media.licdn.com/dms/image/v2/C4D0BAQHyenVUtyQrLg/company-logo_100_100/company-logo_100_100/0/1631309569195?e=1746662400&v=beta&t=fgUDvyYmXlSDS3dhnfTkc17ZvfwaqcaV0H36qpINNEc",
  },
  {
    id: 2,
    institution: "Daudnagar College, Daudnagar",
    degree: "Intermediate (PCM)",
    startDate: "2018",
    endDate: "2020",
    grade: "District Rank < 10 · State Rank < 20",
    logo: "https://www.daudnagarcollege.ac.in/upload/images/16729045601624091965logo.png",
  },
  {
    id: 3,
    institution: "Simultala Awasiya Vidyalaya",
    degree: "Matriculation",
    startDate: "2013",
    endDate: "2018",
    grade: "Overall Bihar Rank — 14",
    logo: "https://savbihar.ac.in/wp-content/uploads/2021/04/simultala_logo.jpg",
  },
];
