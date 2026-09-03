// Type Definitions

export interface PersonalInfo {
  name: string;
  nickname: string;
  headline: string;
  subHeadline: string;
  bio: string;
  location: string;
  email: string;
  avatar?: string;
  availability: {
    status: "available" | "busy" | "limited";
    message: string;
  };
}

export interface TechMarqueeItem {
  id: string;
  name: string;
  category: string;
  icon?: string;
  invertInLight?: boolean;
  invertInDark?: boolean;
}

export interface TechCategory {
  title: string;
  description: string;
  skills: { name: string; detail?: string }[];
}

export interface TrustPartner {
  name: string;
  role: string;
  logo: string;
  link?: string;
}

export interface FlagshipProject {
  id: string;
  title: string;
  link: string;
  focus: string;
  description: string;
  image?: string;
  screenshots?: { label: string; image: string }[];
  logo?: string;
  techStack: string[];
  metrics?: Record<string, string>;
  highlights?: string[];
  hasCaseStudy?: boolean;
}

export interface ClientProject {
  id: string;
  title: string;
  client: string;
  objective: string;
  logo?: string;
  techStack?: string[];
}

export interface EducationItem {
  level: string;
  institution: string;
  program?: string;
  status?: string;
  logo?: string;
  isCurrent?: boolean;
}

export interface Leadership {
  organization: string;
  role: string;
  period: string;
  logo?: string;
  link?: string;
  isCurrent?: boolean;
}

export interface Credential {
  id: string;
  title: string;
  issuer: string;
  category: "Cloud & Industry" | "Government & Public Sector" | "Hackathons & Competitions" | "Institutional Honors" | "Student Leadership" | "Hackathons & Workshops";
  period: string;
  status?: "In Progress" | "Completed" | "Active Production" | "Official Recognition" | "Highest Honor" | "Awardee" | "Honored" | "Participant";
  description: string;
  code?: string;
  skills?: string[];
  image?: string;
  signatories?: string[];
  link?: string;
}

export type Certification = Credential;

export interface Experience {
  organization: string;
  role: string;
  period: string;
  description?: string;
  logo?: string;
  link?: string;
  isCurrent?: boolean;
}

export interface SocialLink {
  platform: string;
  url: string;
  username: string;
}

export interface CaseStudyData {
  id: string;
  title: string;
  subtitle: string;
  role: string;
  institution: string;
  scaleSummary: string;
  metrics: { label: string; value: string; desc: string }[];
  problemStatements: { title: string; desc: string }[];
  architectureSummary: string;
  securityPoints: string[];
  deepDives: {
    title: string;
    challenge: string;
    solution: string;
    outcome: string;
  }[];
  qaList: { question: string; answer: string }[];
}

// Personal Info

export const personalInfo: PersonalInfo = {
  name: "Kenneth Bulaga",
  nickname: "Kenzo",
  headline: "Hi, I'm Kenneth Bulaga.",
  subHeadline: "Full-Stack Web & Mobile Developer",
  bio: "I build practical, accessible web and mobile apps that solve real day-to-day headaches for schools and organizations. Currently freelancing, upskilling with modern web and cross-platform tech, and excited to join a collaborative engineering team.",
  location: "Based in Davao City, Philippines · Remote Worldwide",
  email: "kennethbulaga.dev@gmail.com",
  avatar: "/profile/avatar.webp",
  availability: {
    status: "available",
    message: "Freelancing & Open to Full-Time Roles",
  },
};

// Institutional Trust Partners

export const institutionalTrust: TrustPartner[] = [
  {
    name: "St. John Paul II College of Davao",
    role: "Campus Web Platforms & Student Portals",
    logo: "/logos/school-logo-nobg.webp",
    link: "https://www.facebook.com/sjp2cdofficial",
  },
  {
    name: "OWWA Region XI",
    role: "Overseas Workers Welfare Administration",
    logo: "/logos/owwa-logo.webp",
    link: "https://www.facebook.com/owwadavao.lco",
  },
  {
    name: "CSWDO Davao",
    role: "City Social Welfare & Development",
    logo: "/logos/cswdo-logo.webp",
  },
];

// Tech Marquee Items (Animated Loop Below Hero Edge)

export const techMarqueeItems: TechMarqueeItem[] = [
  { id: "nextjs", name: "Next.js 16", category: "Full-Stack Framework", icon: "/next.svg", invertInDark: true },
  { id: "react", name: "React 19", category: "UI Library", icon: "/react-svgrepo-com.svg" },
  { id: "typescript", name: "TypeScript", category: "Strict Type Safety", icon: "/typescript-icon-svgrepo-com.svg" },
  { id: "tailwind", name: "Tailwind CSS v4", category: "Modern Styling", icon: "/tailwind-svgrepo-com.svg" },
  { id: "supabase", name: "Supabase SSR", category: "Auth & Realtime", icon: "/supabase-logo-icon.svg" },
  { id: "postgres", name: "PostgreSQL", category: "Relational DB" },
  { id: "nodejs", name: "Node.js", category: "Server Runtime" },
  { id: "reactnative", name: "React Native", category: "Mobile Apps", icon: "/react-svgrepo-com.svg" },
  { id: "zod", name: "Zod", category: "Schema Validation", icon: "/zod-logo.svg" },
  { id: "github", name: "Git & GitHub", category: "Version Control", icon: "/github-svgrepo-com.svg", invertInDark: true },
  { id: "vercel", name: "Vercel", category: "Edge Platform", icon: "/vercel.svg", invertInLight: true },
  { id: "framer", name: "Framer Motion", category: "Motion & UI", icon: "/framer-svgrepo-com.svg", invertInDark: true },
];

// Tech Stack Categories ("What I Build With")

export const techCategories: TechCategory[] = [
  {
    title: "Frontend Development",
    description: "Building fast, accessible, and responsive user interfaces.",
    skills: [
      { name: "Next.js 16 (App Router)", detail: "Server Components & Routing" },
      { name: "React 19", detail: "Compiler & Modern Hooks" },
      { name: "TypeScript", detail: "Strict Type Safety" },
      { name: "Tailwind CSS v4", detail: "Modern CSS-first Styling" },
    ],
  },
  {
    title: "Backend & Database",
    description: "Designing reliable APIs, auth flows, and relational schemas.",
    skills: [
      { name: "Supabase SSR", detail: "Auth, Realtime & Cookie Sessions" },
      { name: "PostgreSQL", detail: "Row-Level Security (RLS) & Schemas" },
      { name: "Node.js", detail: "Server Actions & Route Handlers" },
      { name: "pg_cron", detail: "Automated Database Jobs" },
    ],
  },
  {
    title: "Mobile & APIs",
    description: "Cross-platform development and structured web services.",
    skills: [
      { name: "React Native", detail: "Cross-Platform Mobile" },
      { name: "Expo", detail: "Rapid Mobile Prototyping" },
      { name: "REST APIs", detail: "Endpoint Design & Consumption" },
      { name: "Zod", detail: "End-to-End Schema Validation" },
    ],
  },
  {
    title: "Tools & Workflow",
    description: "Daily engineering tools for version control and deployment.",
    skills: [
      { name: "Git & GitHub", detail: "Branching & Code Reviews" },
      { name: "Vercel", detail: "Zero-Latency Edge Deployments" },
      { name: "Vitest", detail: "Unit Testing Suites" },
      { name: "Playwright", detail: "End-to-End UI Testing" },
    ],
  },
];

// Flagship Projects

export const flagshipProjects: FlagshipProject[] = [
  {
    id: "jp-connect",
    title: "JP Connect",
    link: "https://jp-connect.vercel.app",
    focus: "Institutional Campus Operations Platform",
    description:
      "Architected and deployed an institutional web platform serving 5,500+ active university users across 3 administrative departments. Replaced manual spreadsheets and physical queues with an automated 3-way conflict resolver, optical QR passes, and cryptographically verified role-based access.",
    image: "/projects/jp-connect/1. LandingPage.webp",
    screenshots: [
      { label: "Landing & Student", image: "/projects/jp-connect/1. LandingPage.webp" },
      { label: "Exam Schedules", image: "/projects/jp-connect/2. PersonalizedExam.webp" },
      { label: "Instructor Portal", image: "/projects/jp-connect/3 InstructorDashboard.webp" },
      { label: "SSC & Campus", image: "/projects/jp-connect/4. SSC&Campus.webp" },
    ],
    logo: "/logos/jp-connect-logo.webp",
    techStack: [
      "Next.js 16",
      "React 19",
      "TypeScript",
      "Tailwind CSS v4",
      "Supabase SSR",
      "PostgreSQL RLS",
      "pg_cron",
    ],
    metrics: {
      "Active Users": "5,536",
      "Masterlist Records": "14,778",
      "Exam Schedules": "658",
      "Schedule Collisions": "0",
    },
    highlights: [
      "3-Way Algorithmic Conflict Resolver: Eliminates room collisions, proctoring overlaps, and self-proctoring violations.",
      "Defense-in-Depth RBAC: Next.js 16 proxy gate + Google Workspace SSO + PostgreSQL Row-Level Security.",
      "Optical Attendance & pg_cron: Dynamic SVG QR passes with automated background jobs resolving attendance status & sanction assessments.",
    ],
    hasCaseStudy: true,
  },
  {
    id: "sjp2cd-leaderboard",
    title: "SJP2CD Leaderboard",
    link: "https://sjp2cdintrams.netlify.app/",
    focus: "Real-Time Campus Sports Platform",
    description:
      "Real-time university sports tracker providing live match scores and team standings across campus during Intramurals. Engineered for instant mobile access, high concurrency during championship games, and zero downtime.",
    image: "/projects/sjp2cd-leaderboard.webp",
    logo: "/logos/school-logo-nobg.webp",
    techStack: ["Next.js", "TypeScript", "Supabase", "Tailwind CSS", "Netlify"],
    metrics: {
      "Match Updates": "Real-Time",
      "System Uptime": "100%",
      "Access Mode": "Public Mobile Web",
    },
    highlights: [
      "Instant Score Synchronization: Live score updates broadcast seamlessly to campus spectators during tournament finals.",
      "Optimized Mobile Web Shell: Smooth performance on mobile browsers across campus Wi-Fi and mobile data.",
    ],
    hasCaseStudy: false,
  },
  {
    id: "clip-and-style",
    title: "Clip & Style",
    link: "https://www.clipandstyle.tech/",
    focus: "Commercial Booking & Queuing Engine",
    description:
      "Web-based appointment portal for barbershops addressing operational bottlenecks with a real-time queuing engine, service catalog, and automated customer alerts.",
    image: "/projects/clip-and-style.webp",
    logo: "/logos/clipnstyle-logo.webp",
    techStack: ["Next.js", "TypeScript", "Supabase", "Tailwind CSS", "Zod"],
    metrics: {
      "Queuing Precision": "Real-Time",
      "Validation": "Zod Schema Gate",
    },
    hasCaseStudy: false,
  },
];

// Client & Institutional Projects

export const clientProjects: ClientProject[] = [
  {
    id: "owwa-csmr",
    title: "OWWA CSMR System",
    client: "Overseas Workers Welfare Administration (Region XI)",
    objective:
      "Engineered an internal Client Satisfaction Measurement Report System actively used in daily operations across OWWA Region XI to collect citizen feedback, automate evaluations, and generate compliance reports.",
    logo: "/logos/owwa-logo.webp",
    techStack: ["Next.js", "TypeScript", "PostgreSQL", "Tailwind CSS", "Data Analytics"],
  },
  {
    id: "owwa-sprs",
    title: "OWWA SPRS Platform",
    client: "Overseas Workers Welfare Administration (Region XI)",
    objective:
      "Engineered and presented a centralized Statistical Performance Reporting System for OWWA Region XI administrative workflows, designed to consolidate regional operations data and KPI monitoring.",
    logo: "/logos/owwa-logo.webp",
    techStack: ["Next.js", "TypeScript", "Database Architecture", "Tailwind CSS", "KPI Dashboards"],
  },
  {
    id: "cswdo-management",
    title: "CSWDO Management System",
    client: "Government / Social Services",
    objective:
      "Engineered an event and inventory tracking system filtered by date and category. Built employee assignment monitoring with automated expiration alerts and real-time notifications.",
    logo: "/logos/cswdo-logo.webp",
    techStack: ["Next.js", "TypeScript", "Supabase", "Tailwind CSS", "TanStack Table", "Recharts"],
  },
  {
    id: "voicecook",
    title: "VoiceCook",
    client: "Culinary Tech",
    objective:
      "Developed a hands-free, voice-activated system for Philippine cuisine. Integrated 'meal analytics' to visualize nutritional consumption and generate data-driven dietary reports.",
    logo: "/logos/voicecook-logo.webp",
    techStack: ["React Native", "Expo", "TypeScript", "Supabase", "Voice Recognition", "Edamam API"],
  },
  {
    id: "moodlift",
    title: "MoodLift",
    client: "Health Tech",
    objective:
      "Created an accessible mental health tool featuring an automated chatbot, daily mood tracking analytics, and an interactive resource library.",
    logo: "/logos/moodlift-logo.webp",
    techStack: ["React Native", "Expo", "TypeScript", "Supabase", "Google Gemini"],
  },
  {
    id: "csu-intramurals",
    title: "CSU Intramurals System",
    client: "Cagayan State University",
    objective:
      "Deployed a high-performance event tracking engine capable of handling real-time score updates for university-wide sports events.",
    techStack: ["HTML5", "CSS3", "PHP", "JavaScript", "MySQL"],
  },
];

// Education

export const education: EducationItem[] = [
  {
    level: "College Degree",
    institution: "St. John Paul II College of Davao",
    program: "Bachelor of Science in Information Technology",
    status: "Graduated July 2026 • Class of 2026",
    logo: "/logos/school-logo-nobg.webp",
    isCurrent: false,
  },
  {
    level: "Senior High",
    institution: "St. John Paul II College of Davao",
    program: "STEM Strand (Science, Technology, Engineering, Mathematics)",
    logo: "/logos/school-logo-nobg.webp",
  },
];

// Leadership

export const leadership: Leadership[] = [
  {
    organization: "Supreme Student Council (SSC)",
    role: "Senator | Co-Chair, Social Media Creatives",
    period: "2025–May 2026",
    logo: "/logos/ssc-logo.webp",
    link: "https://www.facebook.com/sjp2cdSSC",
    isCurrent: false,
  },
  {
    organization: "Moonton Student Leaders PH",
    role: "Student Leader / Campus Representative",
    period: "2025",
    logo: "/logos/msl.webp",
    link: "https://www.facebook.com/MSLPhilippines",
  },
  {
    organization: "JP Chronicles",
    role: "Platform Manager",
    period: "2024–2025",
    logo: "/logos/JPCHRONS.webp",
    link: "https://www.facebook.com/JPchrons",
  },
  {
    organization: "SJPIICD ELITES (ICT)",
    role: "Senator | Chair, Communications",
    period: "2024–2025",
    logo: "/logos/ELITES.webp",
    link: "https://www.facebook.com/sjp2cd.elites",
  },
];

// Cloud & Technical Certifications
export const cloudCertifications: Credential[] = [
  {
    id: "aws-clf",
    title: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services (AWS)",
    category: "Cloud & Industry",
    code: "CLF-C02",
    status: "In Progress",
    period: "2026",
    description:
      "Active exam preparation covering AWS cloud architecture, IAM security policies, S3 storage, serverless compute (Lambda), and cloud cost optimization.",
    skills: ["AWS Cloud", "IAM Policies", "S3 Storage", "Serverless Lambda", "Cloud Economics"],
    link: "https://aws.amazon.com/certification/certified-cloud-practitioner/",
  },
];

// Featured Technical Milestones, Government Systems & Institutional Honors
export const featuredCredentials: Credential[] = [
  {
    id: "owwa-csmr-cert",
    title: "OWWA Client Satisfaction Measurement Report System",
    issuer: "Overseas Workers Welfare Administration (Region XI)",
    category: "Government & Public Sector",
    status: "Active Production",
    period: "May 14, 2026",
    description:
      "Officially recognized for developing and implementing the OWWA CSMR System—actively running in daily regional operations today to streamline citizen feedback collection and compliance reporting.",
    skills: ["Government IT", "Feedback Analytics", "Compliance Reporting", "Full-Stack Web"],
    image: "/certificates/ojt/csmr.webp",
    signatories: [
      "Jhon David S. Tumbaga — OJT Supervisor / IT Instructor",
      "Aileen D. Casiller — Supervising Administrative Officer",
    ],
  },
  {
    id: "owwa-sprs-cert",
    title: "OWWA Statistical Performance Reporting System",
    issuer: "Overseas Workers Welfare Administration (Region XI)",
    category: "Government & Public Sector",
    status: "Official Recognition",
    period: "May 14, 2026",
    description:
      "Officially recognized for developing and presenting the OWWA SPRS platform, designed to consolidate regional administrative statistical reporting, KPI monitoring, and operational data.",
    skills: ["Enterprise Systems", "Statistical Reporting", "Performance KPIs", "Data Management"],
    image: "/certificates/ojt/sprs.webp",
    signatories: [
      "Jhon David S. Tumbaga — OJT Supervisor / IT Instructor",
      "Aileen D. Casiller — Supervising Administrative Officer",
    ],
  },
  {
    id: "hackestate-2025",
    title: "Davao HackEstate: Hackathon 2025",
    issuer: "PropTech Philippines & FilipinoHomes.com",
    category: "Hackathons & Competitions",
    status: "Participant",
    period: "July 30, 2025",
    description:
      "Competed in the 2025 Mindanao Interschool Hackathon, architecting rapid prototypes and PropTech solutions focused on AI workflows and digital property transactions under competitive time constraints.",
    skills: ["Rapid Prototyping", "PropTech Solutions", "AI Workflows", "Full-Stack Development"],
    image: "/certificates/hackathon/proptech.webp",
    signatories: [
      "Anthony Gerard O. Leuterio, REB, ePro — Founder of Leuterio Realty, FilipinoHomes & Rent.ph",
    ],
  },
  {
    id: "insti-service-award",
    title: "Institutional Service Award & Student Governance",
    issuer: "St. John Paul II College of Davao",
    category: "Institutional Honors",
    status: "Highest Honor",
    period: "May 13, 2026",
    description:
      "Conferred with the institution's highest student honor for exemplary leadership throughout AY 2025–2026. Elected SSC Senator directing campus student affairs, cross-department operations, Intramurals 2025, and Extravaganza 2026 logistics.",
    skills: ["Institutional Service", "Student Governance", "Campus Operations", "Executive Leadership"],
    image: "/certificates/school/2. insti-service-reward.webp",
    signatories: [
      "Jocelyn P. Rodriguez, MAEd-GC, RGC — Dean of Student Affairs",
      "Engr. Joselito B. Lim, Jr. — AVP for Student Services",
      "Dr. April B. Evangelista — School President",
    ],
  },
];

export const credentials: Credential[] = [...cloudCertifications, ...featuredCredentials];
export const certifications = credentials;

// Work Experience

export const experience: Experience[] = [
  {
    organization: "Independent Contractor & Freelance Developer",
    role: "Full-Stack Web & Mobile Developer",
    period: "May 2026–Present",
    description:
      "Building practical web portals, appointment platforms, and database-driven tools for local organizations, schools, and private clients.",
    isCurrent: true,
  },
  {
    organization: "Overseas Workers Welfare Administration (OWWA) Region 11 — Davao Region",
    role: "System Development & IT Solutions (Internship)",
    period: "Jan 19, 2026 – May 14, 2026",
    description:
      "Architected the OWWA Client Satisfaction Measurement Report System (CSMR)—actively running in regional operations today—and engineered the Statistical Performance Reporting System (SPRS) presented as a capstone administrative analytics platform.",
    logo: "/logos/owwa-logo.webp",
    link: "https://www.facebook.com/owwadavao.lco",
    isCurrent: false,
  },
];

// Social Links

export const socialLinks: SocialLink[] = [
  {
    platform: "Email",
    url: "mailto:kennethbulaga.dev@gmail.com",
    username: "kennethbulaga.dev@gmail.com",
  },
  {
    platform: "GitHub",
    url: "https://github.com/kennethbulaga",
    username: "kennethbulaga",
  },
  {
    platform: "LinkedIn",
    url: "https://www.linkedin.com/in/kenneth-bulaga-691893433/",
    username: "kenneth-bulaga",
  },
  {
    platform: "X",
    url: "https://x.com/kenzodev69",
    username: "@kenzodev69",
  },
  {
    platform: "Facebook",
    url: "https://www.facebook.com/bulagakenneth",
    username: "bulagakenneth",
  },
  {
    platform: "TikTok",
    url: "https://www.tiktok.com/@bulagakenneth",
    username: "@bulagakenneth",
  },
];

// Navigation

export const navItems = [
  { label: "About", href: "#about" },
  { label: "Stack", href: "#stack" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#work-experience" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
] as const;

// Resume

export const resumePath = "/KennethBulaga_FullStackDev_Jan2026.pdf";

// Detailed JP Connect Case Study Data

export const jpConnectCaseStudy: CaseStudyData = {
  id: "jp-connect",
  title: "JP Connect: Institutional Student Services Platform",
  subtitle: "Multi-Role University Operations & Automated Conflict-Free Examination Suite",
  role: "Lead Full-Stack Developer (Institutional Engagement)",
  institution: "St. John Paul II College of Davao (SJPIICD)",
  scaleSummary:
    "Deployed into live production across 2 academic semesters, orchestrating operations for 5,536 authenticated student and faculty profiles, 14,778 ingested masterlist records, and 658 validated exam schedules.",
  metrics: [
    { label: "5,536", value: "SSO Profiles", desc: "Authenticated via Google Workspace restriction" },
    { label: "14,778", value: "Masterlist Records", desc: "Dynamically mapped across 9 degree programs" },
    { label: "658", value: "Exam Schedules", desc: "Processed with 0 schedule overlap collisions" },
    { label: "100%", value: "Automated Detection", desc: "Eliminated room collisions & proctoring overlaps" },
  ],
  problemStatements: [
    {
      title: "End-of-Semester Clearance Bottleneck",
      desc: "Thousands of students physically queued for hours across campus to verify attendance records, settle absentee sanctions, and collect physical signatures from the Supreme Student Council.",
    },
    {
      title: "The Departmental Exam Scheduling Matrix",
      desc: "Deans submitted conflicting Excel files. Schedulers spent days manually cross-referencing hundreds of time slots to detect room collisions or instructors assigned to two rooms concurrently.",
    },
    {
      title: "Data Privacy & Multi-Role Hazards",
      desc: "Strict compliance with the Philippine Data Privacy Act of 2012 required absolute cryptographic isolation so no student could inspect another's sanctions or academic standing.",
    },
  ],
  architectureSummary:
    "Constructed on a Defense-in-Depth philosophy. The Next.js 16 network gate (`proxy.ts`) enforces role claims before rendering, Google Workspace SSO locks access to @sjp2cd.edu.ph, and PostgreSQL Row-Level Security (RLS) restricts database queries with `auth.uid() = student_id`.",
  securityPoints: [
    "Next.js 16 Request Gate (proxy.ts route matching & instantaneous redirection for unauthorized role claims)",
    "Strict @sjp2cd.edu.ph domain-restricted Google OAuth SSO",
    "PostgreSQL Row-Level Security (RLS) guaranteeing tenant and student isolation at the DB layer",
    "Immutable 1:1 binding between auth.users and registrar masterlist records during onboarding",
  ],
  deepDives: [
    {
      title: "1. The 3-Way Algorithmic Exam Conflict Resolver",
      challenge:
        "Excel sheets with merged cells and varying time strings frequently created room collisions and proctoring overlaps across 658 examinations.",
      solution:
        "Implemented safe parsing with `read-excel-file` (zero vulnerability CVEs) and designed an O(N log N) temporal interval collision engine checking Room, Proctor, and Self-Proctoring conflicts simultaneously.",
      outcome:
        "658 schedules parsed in seconds; 0 schedule collisions published to student portals.",
    },
    {
      title: "2. Defense-in-Depth Multi-Role RBAC",
      challenge:
        "Managing 6 distinct roles (Super Admin, OSA Admin, SSC Admin, Checker, Instructor, Student) across public terminals without session leakage.",
      solution:
        "Built with @supabase/ssr using HTTP-only secure cookies, React Server Component validations, and strict PostgreSQL RLS policies.",
      outcome:
        "Zero unauthorized record extractions or role elevation exploits.",
    },
    {
      title: "3. Optical Attendance Pass & Automated Sanctions",
      challenge:
        "Manual sign-in sheets caused massive clearance queues and disputed sanction fees at the end of every semester.",
      solution:
        "Built dynamic zero-ping client QR passes with laser animations, coupled with automated Supabase `pg_cron` jobs that transition unexcused pending attendees to absent and assess sanctions automatically.",
      outcome:
        "Instant digital clearance tracking directly from student smartphone dashboards.",
    },
  ],
  qaList: [
    {
      question: "Why Next.js 16 & React 19 over a standard SPA like Vite?",
      answer:
        "For an institutional platform with public campus hubs and protected student portals, SEO, instant load performance, and server-side authorization boundaries were vital. Next.js 16 App Router runs sensitive logic on the server with zero client bundle overhead.",
    },
    {
      question: "How did you prevent students from viewing peers' records?",
      answer:
        "Defense-in-depth: Route-level proxy blocks unauthorized paths, while PostgreSQL Row-Level Security restricts SQL queries to WHERE auth.uid() = student_id. Even direct API calls cannot extract unauthorized rows.",
    },
    {
      question: "How does the conflict resolver detect overlaps?",
      answer:
        "It normalizes all slots into UTC timestamps and sweeps for (Start_A < End_B) and (End_A > Start_B) across identical dates, simultaneously checking room equality, proctor equality, and instructor self-assignment.",
    },
  ],
};
