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
  impact?: string;
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
  costArchitecture?: { title: string; points: string[] };
  problemStatements: { title: string; desc: string }[];
  architectureSummary: string;
  securityPoints: string[];
  endorsement?: {
    quote: string;
    author: string;
    role: string;
    department: string;
    institution: string;
    image?: string;
  };
  liveDeployment?: {
    title: string;
    caption: string;
    image: string;
    aspect?: string;
  };
  deepDives: {
    title: string;
    challenge: string;
    solution: string;
    outcome: string;
  }[];
  qaList: { question: string; answer: string }[];
}

export interface PersonalInterest {
  icon?: string;
  svgIcon?: string;
  label: string;
  detail: string;
}

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

export const personalInterests: PersonalInterest[] = [
  {
    svgIcon: "/interest/one-piece.webp",
    icon: "⚔️",
    label: "Anime & Manhwa",
    detail: "One Piece, Demon Slayer, Solo Leveling, Tower of God & many more",
  },
  {
    svgIcon: "/interest/book-education.svg",
    icon: "📖",
    label: "Books & Philosophy",
    detail: "Naval Ravikant, Atomic Habits, Philosophy 101, 48 Laws of Power",
  },
  {
    svgIcon: "/interest/codm-logo.webp",
    icon: "🎯",
    label: "COD: Mobile",
    detail: "Solo vs Squad, kasi malakas ako",
  },
  {
    svgIcon: "/interest/gym-dumbbell.svg",
    icon: "🏋️",
    label: "Home Gym & Fitness",
    detail: "Strength training, jogging & staying active",
  },
];

export interface SpotifyPlaylist {
  id: string;
  title: string;
  vibe: string;
  embedUrl: string;
}

export const spotifyPlaylists: SpotifyPlaylist[] = [
  {
    id: "old-english-songs",
    title: "Old English Songs",
    vibe: "Classics & Ballads",
    embedUrl:
      "https://open.spotify.com/embed/playlist/0bHg6DZSZb8FQ82fhvQw6Q?utm_source=generator&si=a340dc08cfe44334&theme=0",
  },
  {
    id: "tambay-lang",
    title: "Tambay Lang",
    vibe: "Chill & Relax",
    embedUrl:
      "https://open.spotify.com/embed/playlist/2vkLR2fdEM9pPlfT56tnab?utm_source=generator&theme=0&si=87326174da5246e3",
  },
  {
    id: "anime-songs",
    title: "Anime Songs",
    vibe: "Anime OSTs & J-Pop",
    embedUrl:
      "https://open.spotify.com/embed/playlist/06ScFLddWUBOULNzeAXuIw?utm_source=generator&si=67ef882f3f3a475c&theme=0",
  },
  {
    id: "opm-now",
    title: "OPM Now",
    vibe: "Modern OPM Hits",
    embedUrl:
      "https://open.spotify.com/embed/playlist/44LibO6VIlle3lwn18Wfay?utm_source=generator&si=793dcbb8a4694e1c&theme=0",
  },
  {
    id: "2010s-babies",
    title: "2010s babies",
    vibe: "2010s Nostalgia",
    embedUrl:
      "https://open.spotify.com/embed/playlist/5oFGYUo1aIPFTyjQXv28ID?utm_source=generator&theme=0&si=4490ace214304fcc",
  },
  {
    id: "opm-throwback",
    title: "OPM throwback",
    vibe: "Classic OPM Hits",
    embedUrl:
      "https://open.spotify.com/embed/playlist/3I05uaW5H0QqlwRGGahkTN?utm_source=generator&si=bac5dc6337ea4025&theme=0",
  },
  {
    id: "jejemon",
    title: "JEJEMON",
    vibe: "Pinoy Nostalgia",
    embedUrl:
      "https://open.spotify.com/embed/playlist/0IfoiuoyHgv2kP2GXieyWa?utm_source=generator&si=573c965ba4624b97&theme=0",
  },
];

export const spotifyPlaylistUrl = spotifyPlaylists[0].embedUrl;

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
      { label: "Program Head Email", image: "/projects/jp-connect/5. pg-email.webp" },
      { label: "Campus Projector", image: "/projects/jp-connect/6. projector.webp" },
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
      "Batch RFID Ingestion & Sanctions Engine: Reconciles offline scanner hardware logs against the masterlist via set difference to automate absentee fines and e-clearances.",
    ],
    hasCaseStudy: true,
  },
  {
    id: "owwa-csmr",
    title: "OWWA CSMR System",
    link: "#",
    focus: "Regional Client Satisfaction Measurement & Analytics Platform",
    description:
      "Engineered and deployed a centralized web platform for OWWA Regional Welfare Office XI, replacing manual spreadsheets across 9 frontline service units with automated Likert satisfaction matrices, live multi-office validation, and 1-click ARTA/CSC-compliant master spreadsheet generation.",
    image: "/projects/owwa-csmr/landing.webp",
    screenshots: [
      { label: "Public Landing", image: "/projects/owwa-csmr/landing.webp" },
      { label: "Secure Role Login", image: "/projects/owwa-csmr/login.webp" },
      { label: "Dashboard", image: "/projects/owwa-csmr/dashboard.webp" },
      { label: "Manage Offices", image: "/projects/owwa-csmr/manage_offices.webp" },
    ],
    logo: "/logos/owwa-logo.webp",
    techStack: [
      "Next.js 16",
      "React 19",
      "TypeScript",
      "Tailwind CSS v4",
      "PostgreSQL",
      "Supabase SSR",
      "ExcelJS",
      "Recharts",
      "TanStack Table",
    ],
    metrics: {
      "Survey Responses": "4,632+",
      "Monthly Reports": "72 Submissions",
      "Regional Offices": "10 Units",
      "Consolidation Time": "<1s (1-Click)",
    },
    highlights: [
      "Zero-Drift Virtual Consolidation: On-demand functional aggregation summing sub-unit matrices into a single regional masterlist.",
      "ARTA/CSC Compliant ExcelJS Engine: 2,100+ line spreadsheet synthesis pipeline generating official formatted workbooks.",
      "Universal Law of Sums Live Validation: Real-time client arithmetic verification eliminating mathematical submission errors.",
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
    id: "owwa-sprs",
    title: "OWWA SPRS Platform",
    client: "Overseas Workers Welfare Administration (Region XI)",
    objective:
      "Engineered and presented a centralized Statistical Performance Reporting System for OWWA Region XI administrative workflows, designed to consolidate regional operations data and KPI monitoring.",
    impact: "Regional Capstone: Consolidated multi-department performance metrics, statistical data aggregation, and KPI monitoring.",
    logo: "/logos/owwa-logo.webp",
    techStack: ["Next.js", "TypeScript", "Database Architecture", "Tailwind CSS", "KPI Dashboards"],
  },
  {
    id: "cswdo-management",
    title: "CSWDO Management System",
    client: "Government / Social Services",
    objective:
      "Engineered an event and inventory tracking system filtered by date and category. Built employee assignment monitoring with automated expiration alerts and real-time notifications.",
    impact: "Automated Operations: Date/category inventory filters and automated employee assignment expiration alerts.",
    logo: "/logos/cswdo-logo.webp",
    techStack: ["Next.js", "TypeScript", "Supabase", "Tailwind CSS", "TanStack Table", "Recharts"],
  },
  {
    id: "voicecook",
    title: "VoiceCook",
    client: "Culinary Tech",
    objective:
      "Developed a hands-free, voice-activated system for Philippine cuisine. Integrated 'meal analytics' to visualize nutritional consumption and generate data-driven dietary reports.",
    impact: "Hands-Free Voice AI: Voice-activated recipe navigation & automated nutritional dietary analytics.",
    logo: "/logos/voicecook-logo.webp",
    techStack: ["React Native", "Expo", "TypeScript", "Supabase", "Voice Recognition", "Edamam API"],
  },
  {
    id: "moodlift",
    title: "MoodLift",
    client: "Health Tech",
    objective:
      "Created an accessible mental health tool featuring an automated chatbot, daily mood tracking analytics, and an interactive resource library.",
    impact: "AI Assistant & Telemetry: Integrated Google Gemini chatbot with daily mood tracking and self-care resources.",
    logo: "/logos/moodlift-logo.webp",
    techStack: ["React Native", "Expo", "TypeScript", "Supabase", "Google Gemini"],
  },
  {
    id: "csu-intramurals",
    title: "CSU Intramurals System",
    client: "Cagayan State University",
    objective:
      "Deployed a high-performance event tracking engine capable of handling real-time score updates for university-wide sports events.",
    impact: "Zero-Latency Scoring: Real-time university sports bracket and match standings engine.",
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
    "Multi-office operations platform serving 5,500+ active university users across 3 administrative departments, replacing manual spreadsheets and paper queues with automated conflict detection, digital ID passes, and role-based clearance.",
  metrics: [
    { label: "5,536", value: "Authenticated Profiles", desc: "5,426 students, 107 faculty across 2 active semesters" },
    { label: "14,778", value: "Masterlist Records", desc: "Ingested across 9 collegiate degree programs" },
    { label: "658", value: "Exam Schedules", desc: "100% automated 3-way conflict verification" },
    { label: "0", value: "Paper Bottlenecks", desc: "Eliminated physical lines via digital clearances" },
  ],
  costArchitecture: {
    title: "Cost-Aware Cloud Architecture",
    points: [
      "Engineered for $0 baseline idle infrastructure cost on Vercel & Supabase Free Tiers through client-side parsing, zero-egress SVG rendering, and indexed PostgreSQL queries.",
      "The system dynamically scales to dedicated compute tiers only during peak university bursts (Exam Week and Semester-End Clearance rush).",
    ],
  },
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
  endorsement: {
    quote:
      "Let me commend you for developing JP Connect! Proud of you, Kenneth! Keep on reaching high mountains. Kudos!",
    author: "Karen Shane Adorico-Priete, MIT",
    role: "Program Head",
    department: "College of Information and Communications Technology",
    institution: "St. John Paul II College of Davao",
    image: "/projects/jp-connect/5. pg-email.webp",
  },
  liveDeployment: {
    title: "Campus-Wide Vertical Projector Broadcast",
    caption:
      "Live operational display of JP Connect exam schedules and campus clearances projected on the vertical lobby displays at St. John Paul II College of Davao.",
    image: "/projects/jp-connect/6. projector.webp",
    aspect: "9/16",
  },
  architectureSummary:
    "Built on a Defense-in-Depth philosophy: the Next.js 16 network gate (proxy.ts) enforces role claims before rendering, Google Workspace SSO locks access to @sjp2cd.edu.ph, and PostgreSQL Row-Level Security (RLS) guarantees complete database isolation with auth.uid() = student_id.",
  securityPoints: [
    "Front Door Gate (proxy.ts): Next.js 16 network boundary intercepting incoming requests and enforcing RBAC before page render.",
    "Passwordless Google SSO & Delegated Compute: 100% passwordless via Google Workspace OAuth (@sjp2cd.edu.ph), offloading auth compute to Google (50k free-tier MAU ceiling) and eliminating password-hashing CPU spikes and reset overhead.",
    "Registrar Masterlist Verification Gate: First-time onboarding verifies Student/Employee IDs directly against each semester's imported Registrar roster; unlisted or unenrolled IDs are strictly blocked, preventing ghost accounts.",
    "Interactive 1:1 Identity Claiming: Enrolled users visually confirm their inferred degree program, year level, and college in an interactive dialog before establishing an immutable 1:1 database binding.",
    "Database RLS (Supabase SSR): Defense-in-depth PostgreSQL policies (auth.uid() = student_id) prevent client data leaks even under direct HTTP API inspection.",
    "Strict Type Safety: React 19 Compiler, zero any TypeScript, and Vitest/Playwright test suites.",
  ],
  deepDives: [
    {
      title: "1. 3-Way Exam Conflict Resolver & Faculty Dispatch",
      challenge:
        "Raw departmental Excel sheets had erratic proctor names (nicknames, typos, abbreviations) and irregular times, creating room/proctor collisions and manual delays notifying 100+ faculty.",
      solution:
        "Engineered a safe read-excel-file parser, an O(N log N) 3-way collision engine (Room, Proctor, Self-Proctoring), and a PostgreSQL name-normalization engine (normalized_match_key alias mapping) that auto-binds published schedules to instructor Google SSO accounts.",
      outcome:
        "658 schedules parsed with 0 collisions and instantly populated across 107 instructor dashboards upon publishing.",
    },
    {
      title: "2. Defense-in-Depth Multi-Role RBAC",
      challenge:
        "Managing 6 distinct roles (Super Admin, OSA Admin, SSC Admin, Checker, Instructor, Student) across public school terminals without session leakage.",
      solution:
        "Built with @supabase/ssr using HTTP-only secure cookies, React Server Component validations, and strict PostgreSQL RLS policies.",
      outcome:
        "Zero unauthorized record extractions or role elevation exploits across 5,500+ active user accounts.",
    },
    {
      title: "3. Batch RFID Ingestion & Sanctions Engine",
      challenge:
        "Standalone physical RFID event scanners produced unlinked logs, requiring manual spreadsheet checks to find absent students and compute fines.",
      solution:
        "Built a batch ingestion tool where SSC officers import scanned IDs; the system auto-reconciles against the masterlist to flag absentees and apply fines.",
      outcome:
        "Replaced days of manual cross-referencing with instant automated sanctions and real-time student e-clearance tracking.",
    },
  ],
  qaList: [
    {
      question: "How does student onboarding prevent account hijacking or ghost accounts?",
      answer:
        "Access is restricted to Google Workspace accounts with the @sjp2cd.edu.ph domain. On first sign-in, students input their Student ID, which is validated against the active semester's Registrar masterlist. The UI renders an interactive confirmation preview (Name, Course, Year Level) for visual verification before executing an atomic database transaction that binds auth.users.id to the student record with an immutable 1:1 unique constraint.",
    },
    {
      question: "How did you ensure authentication wouldn't buckle during peak morning traffic?",
      answer:
        "Rather than running CPU-bound password hashing algorithms (bcrypt/argon2) on our application runtime, we delegated credential authentication to Google Workspace OAuth. This eliminated compute spikes, bypassed transactional email (SMTP) bottlenecks during password resets, and utilized Supabase connection pooling to maintain zero-cost operation within the 50,000 MAU free tier.",
    },
    {
      question: "How does attendance reconciliation handle raw hardware logs?",
      answer:
        "Standalone physical RFID scanners capture event taps offline. SSC officers export these raw logs into JP Connect, where our ingestion pipeline deduplicates multi-tap scanner noise into a clean unique ID set. The engine then computes the set difference (Masterlist \\ Scanned), automatically flagging unscanned IDs as absent and applying pre-set sanction fees.",
    },
    {
      question: "How did you manage cloud infrastructure and hosting costs for the school?",
      answer:
        "The platform maintains a $0 baseline idle cost on Vercel and Supabase Free Tiers by utilizing zero-egress client parsing and caching React Server Components. We established an operational playbook to provision paid database compute tiers only during scheduled high-concurrency windows (Finals week and end-of-term Clearance).",
    },
    {
      question: "How does the 3-Way Exam Conflict Resolver work algorithmically?",
      answer:
        "It parses spreadsheet schedules via read-excel-file, normalizes timestamps into Manila timezone (UTC+8) intervals, and runs an O(N log N) sweep across three constraints: Room double-bookings, Proctor time overlaps, and Self-Proctoring violations (instructors assigned to proctor their own classes, violating institutional neutrality rules).",
    },
    {
      question: "How is student data isolation enforced in the database?",
      answer:
        "PostgreSQL Row-Level Security (RLS) in Supabase enforces authorization at the database engine level via students.profile_id = (select auth.uid()). Even if a client bypasses the Next.js API layer and queries the database directly, the database engine strictly restricts access to the authenticated user's own record.",
    },
  ],
};

export const owwaCsmrCaseStudy: CaseStudyData = {
  id: "owwa-csmr",
  title: "OWWA CSMR: Regional Citizen Satisfaction Measurement Platform",
  subtitle: "Multi-Office Data Intake, Automated ARTA Compliance & Enterprise ExcelJS Consolidation",
  role: "Full-Stack Software Engineer & System Architect",
  institution: "Overseas Workers Welfare Administration (OWWA Region XI)",
  scaleSummary:
    "Architected and deployed a regional reporting engine for OWWA Regional Welfare Office XI (Davao Region) that consolidated 72 monthly unit submissions representing 4,632+ physical citizen and OFW survey responses across 9 frontline regional offices.",
  metrics: [
    { label: "4,632", value: "Survey Responses Consolidated", desc: "Citizen & OFW survey feedback records ingested across 8 cycles" },
    { label: "72", value: "Monthly Submissions", desc: "53 finalized reports + 19 active drafts" },
    { label: "10", value: "Regional Units", desc: "9 frontline units + 1 IT Head consolidator" },
    { label: "<1s", value: "Master Consolidation", desc: "1-click ARTA/CSC-compliant Excel synthesis" },
  ],
  costArchitecture: {
    title: "Zero-Redundancy Virtual Aggregation",
    points: [
      "Engineered an on-demand functional reduction pipeline in Next.js Server Actions that aggregates sub-unit survey matrices on the fly without persisting redundant aggregate rows.",
      "Eliminates database bloat, guarantees mathematical parity across all reports, and computes regional summaries in sub-100ms compute cycles.",
    ],
  },
  problemStatements: [
    {
      title: "The Multi-Office 'Excel Hell' Bottleneck",
      desc: "9 frontline units (Social Benefits, Reintegration, Education, PDOS, etc.) independently formatted and emailed spreadsheets each month. The IT Unit spent 3–4 working days manually fixing broken formulas and consolidating rows.",
    },
    {
      title: "Mathematical Entry Errors at the Source",
      desc: "Encoders frequently made entry errors where demographic and service tallies did not balance with total declared respondents (N), invalidating regional satisfaction percentages.",
    },
    {
      title: "Rigid Government Compliance Mandates",
      desc: "Anti-Red Tape Authority (ARTA) and Civil Service Commission (CSC) guidelines require precise formatting, specific cell border styling, and formula rows that standard CSV dumpers cannot output.",
    },
  ],
  architectureSummary:
    "Architected on a centralized hub-and-spoke model: stateless cryptographic JWT sessions (jose) enforce multi-office authorization, live-validating smart matrices anchor arithmetic in real time, and an ExcelJS pipeline synthesizes official multi-section workbooks in-memory.",
  securityPoints: [
    "Stateless Cryptographic JWTs (jose): HS256 token verification stored in HttpOnly secure cookies with multi-office assignment claims.",
    "PostgreSQL Composite Integrity: Unique compound key on (office_id, month, year) physically preventing duplicate submissions per reporting cycle.",
    "JSONB Structured Payloads: Document snapshot architecture accommodating 52+ evolving frontline service classifications without schema migrations.",
    "Immutable Audit Logging: Super-edits, period re-openings, and administrative interventions logged with timestamps and user references in audit_logs.",
  ],
  deepDives: [
    {
      title: "1. Zero-Drift On-Demand Aggregation Pipeline",
      challenge:
        "Each office submits deeply nested survey datasets (9 SQD Likert dimensions with 6 rating tiers, 52 services availed, demographics). Storing static aggregate rows caused desynchronization whenever an admin unlocked a report.",
      solution:
        "Implemented an on-demand virtual reduction engine in Next.js Server Actions. It fetches submitted snapshots via Supabase and executes a functional accumulator pipeline calculating global distributions on the fly.",
      outcome:
        "Guaranteed mathematical parity across all reports with zero redundant data; master reports compute in sub-100ms.",
    },
    {
      title: "2. Server-Side ARTA-Compliant Master Workbook Synthesis",
      challenge:
        "Government reporting mandates rigid formatting: exact border hierarchies, cell fills, merged headers, dynamic formulas, and narrative commentary blocks that standard CSV generators cannot deliver.",
      solution:
        "Engineered a 2,100+ line spreadsheet synthesis pipeline using ExcelJS, calculating cell coordinates dynamically, applying government styling tokens, and compiling clean binary streams in-memory.",
      outcome:
        "Consolidated master reports generated in under 1 second with 100% layout fidelity to official regional templates.",
    },
    {
      title: "3. 'Universal Law of Sums' Client-Side Live Validation",
      challenge:
        "Encoders frequently made arithmetic mistakes where sub-category responses did not equal total declared respondents, invalidating regional metrics.",
      solution:
        "Engineered AutoCalcTableInput and SmartMatrixInput components linked to React Hook Form and Zod refinements, anchoring all inputs to the master total with real-time color-coded balance indicators.",
      outcome:
        "Eliminated mathematical submission errors at the source, reducing invalid submissions to zero.",
    },
  ],
  qaList: [
    {
      question: "Why choose a JSONB snapshot architecture over a highly normalized relational schema?",
      answer:
        "In a government CSM workflow, the service catalog (52+ services) and survey sub-criteria evolve between fiscal years based on national directives. By maintaining a relational core for offices, users, and periods while storing survey payload matrices as structured JSONB snapshots, the system achieves schema flexibility without destructive table migrations—while maintaining end-to-end type safety via Zod and TypeScript.",
    },
    {
      question: "How are data validation and server-side report generation handled?",
      answer:
        "Enforces a multi-layered validation strategy: on the client, custom validation hooks perform live arithmetic checks to ensure sub-category tallies match anchor totals. On the server, Next.js Server Actions validate payloads against strict Zod schemas before persisting. For exports, an ExcelJS pipeline constructs the complete aggregated workbook in-memory with exact typography, cell borders, and narrative template injections.",
    },
    {
      question: "How does the system ensure data accuracy and prevent duplicate or unauthorized entries?",
      answer:
        "Enforces integrity checks at both database and auth levels. A compound unique constraint on (office_id, month, year) physically prevents duplicate submissions for any office in a cycle. Stateless jose JWTs verify user and office permissions. Once submitted, records lock into read-only mode, with any administrative super-edits tracked in an immutable audit_logs table.",
    },
  ],
};

export const caseStudies: Record<string, CaseStudyData> = {
  "jp-connect": jpConnectCaseStudy,
  "owwa-csmr": owwaCsmrCaseStudy,
};
