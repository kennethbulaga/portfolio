// Type Definitions

export interface PersonalInfo {
  name: string;
  logo: {
    light: string;
    dark: string;
  };
  subHeadline: string;
  bio: string;
  location: string;
  email: string;
  avatar?: string;
  availability: {
    message: string;
  };
}

export interface TechMarqueeItem {
  id: string;
  name: string;
  category: string;
  icon?: string;
  darkIcon?: string;
  invertInLight?: boolean;
  invertInDark?: boolean;
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
  screenshots?: { label: string; image: string; primitive?: string }[];
  logo?: string;
  techStack: string[];
  metrics?: Record<string, string>;
  highlights?: string[];
}

export interface ClientProject {
  id: string;
  title: string;
  client: string;
  objective: string;
  impact?: string;
  logo?: string;
  image?: string;
  screenshots?: { label: string; image: string; primitive?: string }[];
  techStack?: string[];
}

export interface EducationItem {
  level: string;
  institution: string;
  program?: string;
  status?: string;
  logo?: string;
}

export interface Leadership {
  organization: string;
  role: string;
  period: string;
  logo?: string;
  link?: string;
}

export interface Credential {
  id: string;
  title: string;
  issuer: string;
  category: "Public Sector" | "Hackathons & Competitions" | "Institutional Honors";
  period: string;
  status?: "Active Production" | "Official Recognition" | "Highest Honor" | "Participant";
  description: string;
  skills?: string[];
  image?: string;
  gallery?: { label: string; image: string; caption?: string }[];
  signatories?: string[];
}

export interface Experience {
  organization: string;
  role: string;
  period: string;
  highlights?: string[];
  techStack?: string[];
  logo?: string;
  link?: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  username: string;
}

export const personalInfo: PersonalInfo = {
  name: "Kenneth Bulaga",
  logo: {
    light: "/logos/kb-logo-dark.svg",
    dark: "/logos/kb-logo-dark.svg",
  },
  subHeadline: "Full-stack Developer",
  bio: "I build full-stack web applications and internal tools that turn slow, manual processes into fast, dependable software. Working across Next.js, TypeScript, and PostgreSQL, I take systems from database schema design and access control to clean, responsive interfaces.",
  location: "Based in Davao City, Philippines · Remote Worldwide",
  email: "kennethbulaga.dev@gmail.com",
  avatar: "/profile/avatar.webp",
  availability: {
    message: "Available for Freelance & Full-time Roles",
  },
};

// Institutional Trust Partners

export const institutionalTrust: TrustPartner[] = [
  {
    name: "St. John Paul II College of Davao",
    role: "Student Services, Exam Scheduling & RFID Clearance Portal",
    logo: "/logos/school-logo-nobg.webp",
    link: "https://www.facebook.com/sjp2cdofficial",
  },
  {
    name: "OWWA Region XI",
    role: "Citizen Feedback (CSMR) & Statistical Reporting (SPRS)",
    logo: "/logos/owwa-logo.webp",
    link: "https://www.facebook.com/owwadavao.lco",
  },
];

// Tech Marquee Items (Animated Loop Below Hero Edge)

export const techMarqueeItems: TechMarqueeItem[] = [
  { id: "nextjs", name: "Next.js 16", category: "Full-Stack Framework", icon: "/tech-stack/next.svg", invertInDark: true },
  { id: "react", name: "React 19", category: "UI Library", icon: "/tech-stack/react.svg" },
  { id: "typescript", name: "TypeScript", category: "Strict Type Safety", icon: "/tech-stack/typescript.svg" },
  { id: "tailwind", name: "Tailwind CSS v4", category: "Modern Styling", icon: "/tech-stack/tailwind.svg" },
  { id: "supabase", name: "Supabase", category: "Auth, Realtime & RLS", icon: "/tech-stack/supabase.svg" },
  { id: "upstash", name: "Upstash Redis", category: "Serverless Cache & Queue", icon: "/tech-stack/upstash-light.svg", darkIcon: "/tech-stack/upstash-dark.svg" },
  { id: "postgres", name: "PostgreSQL", category: "Relational DB" },
  { id: "nodejs", name: "Node.js", category: "Server Runtime" },
  { id: "zod", name: "Zod", category: "Schema Validation", icon: "/tech-stack/zod.svg" },
  { id: "github", name: "Git & GitHub", category: "Version Control", icon: "/tech-stack/github.svg", invertInDark: true },
  { id: "vercel", name: "Vercel", category: "Edge Platform", icon: "/tech-stack/vercel.svg", invertInLight: true },
  { id: "framer", name: "Framer Motion", category: "Motion & UI", icon: "/tech-stack/framer.svg", invertInDark: true },
];

// JP Connect Production Metrics (from the live admin analytics dashboard)

export const jpConnectMetrics = {
  accounts: "7,125",
  faculty: "249",
  masterlist: "14,778",
  exams: "658",
  overlaps: "0",
  sanctionsCollected: "PHP 707,750",
  sanctionsPeriod: "Dec 2025 – Jan 2026",
} as const;

export const heroHeadline = {
  prefix: "Building ",
  emphasis: "dependable",
  suffix: " web systems that eliminate manual bottlenecks.",
} as const;

export const heroLedger = [
  {
    value: jpConnectMetrics.accounts,
    label: "Google SSO Accounts",
    context: "JP Connect · Students & 249 Faculty",
  },
  {
    value: jpConnectMetrics.sanctionsCollected,
    label: "Tracked SSC Clearance Ledger",
    context: "1 Clearance Period (Dec 2025 – Jan 2026)",
  },
  {
    value: "4,632+",
    label: "Citizen Feedback Records",
    context: "OWWA Region XI · 10 Regional Units",
  },
  {
    value: "0 Overlaps",
    label: "Validated Exam Schedules",
    context: "658 Slots · 9 Academic Depts",
  },
] as const;

// Flagship Projects

export const flagshipProjects: FlagshipProject[] = [
  {
    id: "jp-connect",
    title: "JP Connect",
    link: "https://jp-connect.vercel.app",
    focus: "Student Services & Exam Scheduling Platform",
    description:
      `Paid freelance contract for St. John Paul II College of Davao: a student services and exam scheduling portal with ${jpConnectMetrics.accounts} Google SSO accounts (students and ${jpConnectMetrics.faculty} faculty) across 9 academic departments. Replaces physical queues and spreadsheet scheduling with automated interval-sweep scheduling, role-based clearance passes, and a tracked sanctions ledger for the Supreme Student Council.`,
    image: "/projects/jp-connect/1. LandingPage.webp",
    screenshots: [
      {
        label: "Landing & Student",
        image: "/projects/jp-connect/1. LandingPage.webp",
        primitive: "Google Workspace OAuth (@sjp2cd.edu.ph) + PostgreSQL RLS (auth.uid() = student_id)",
      },
      {
        label: "Exam Schedules",
        image: "/projects/jp-connect/2. PersonalizedExam.webp",
        primitive: "O(N log N) Interval-Sweep Resolver · 658 Slots Validated with 0 Collisions",
      },
      {
        label: "Instructor Portal",
        image: "/projects/jp-connect/3 InstructorDashboard.webp",
        primitive: "Normalized Proctor Alias Lookup Table Mapping 249 Faculty Accounts",
      },
      {
        label: "SSC & Campus",
        image: "/projects/jp-connect/4. SSC&Campus.webp",
        primitive: "Offline RFID Set-Difference Reconciliation (14,778 Records) + PHP 707,750 Sanctions Ledger",
      },
      {
        label: "Program Head Email",
        image: "/projects/jp-connect/5. pg-email.webp",
        primitive: "Written Commendation from CICT Program Head (St. John Paul II College of Davao)",
      },
      {
        label: "Campus Projector",
        image: "/projects/jp-connect/6. projector.webp",
        primitive: "Live Vertical Lobby Display Broadcasting Real-Time Exam Schedules & Clearance Status",
      },
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
      "Google SSO Accounts": jpConnectMetrics.accounts,
      "Masterlist Records": jpConnectMetrics.masterlist,
      "Exam Schedules": jpConnectMetrics.exams,
      "Schedule Overlaps": jpConnectMetrics.overlaps,
    },
    highlights: [
      "Conflict-Free Scheduler: Implemented automated interval-sweep scheduling to eliminate timetable conflicts across 658 exam slots, replacing manual spreadsheet validation.",
      "Role-Based Access: Configured domain-locked Google Workspace SSO (@sjp2cd.edu.ph) paired with PostgreSQL Row-Level Security to isolate student and faculty data.",
      "Automated Clearance: Matches offline RFID attendance logs against 14,778 registrar records in under 5 seconds, replacing physical clearance queues across campus.",
      `Sanctions Ledger: Built a sanctions and payments module for the Supreme Student Council that links clearance to settled sanctions and logs every payment and expense, recording ${jpConnectMetrics.sanctionsCollected} in collections over one clearance period (${jpConnectMetrics.sanctionsPeriod}).`,
    ],
  },
  {
    id: "owwa-csmr",
    title: "OWWA CSMR System",
    link: "#",
    focus: "Internal Citizen Satisfaction & Feedback Reporting Tool",
    description:
      "Internal reporting tool built during my OWWA Region XI internship, consolidating 4,632+ citizen feedback records across 10 regional units with live balance validation and 1-click Excel export for ARTA/CSC reporting requirements.",
    image: "/projects/owwa-csmr/landing.webp",
    screenshots: [
      {
        label: "Public Landing",
        image: "/projects/owwa-csmr/landing.webp",
        primitive: "Multi-Office Survey Intake Across 10 OWWA Region XI Frontline Units",
      },
      {
        label: "Secure Role Login",
        image: "/projects/owwa-csmr/login.webp",
        primitive: "Stateless jose JWT Session Validation in HttpOnly Cookies + Office Role Claims",
      },
      {
        label: "Dashboard",
        image: "/projects/owwa-csmr/dashboard.webp",
        primitive: "On-Demand JSONB Aggregation in Next.js Server Actions (<100ms) + ExcelJS Export (<1s)",
      },
      {
        label: "Manage Offices",
        image: "/projects/owwa-csmr/manage_offices.webp",
        primitive: "Compound Unique Constraint (office_id, month, year) + Zod Arithmetic Balance Checks",
      },
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
      "Citizen Feedback Records": "4,632+",
      "Monthly Reports": "72 Submissions",
      "Regional Units": "10 Units",
      "Report Generation Time": "<1s (1-Click)",
    },
    highlights: [
      "On-Demand Aggregation: Aggregates regional survey metrics on the fly in Next.js Server Actions from JSONB survey snapshots in under 100ms without saving redundant table rows.",
      "In-Memory Excel Engine: Built an in-memory ExcelJS export engine generating multi-tab workbooks with formulas and audit styling for ARTA/CSC reporting requirements, reducing report generation time to under 1 second.",
      "Input Verification: Built live client-side balance checks with Zod validation so sub-category tallies always match respondent totals before submission.",
    ],
  },
  {
    id: "jp-intrams",
    title: "JP Intrams",
    link: "https://jp-intrams.vercel.app",
    focus: "Real-Time Tournament Leaderboard & Campus Signage",
    description:
      "Live tournament leaderboard delivering real-time score synchronization across 23 sports divisions for 9 departments using Supabase Realtime, with an auto-cycling display mode for gym screens and mobile spectator devices.",
    image: "/projects/jp-intrams/desktop.webp",
    screenshots: [
      {
        label: "Desktop Leaderboard",
        image: "/projects/jp-intrams/desktop.webp",
        primitive: "Supabase Realtime Change Channels on points_log Across 23 Sports Divisions",
      },
      {
        label: "Mobile Spectator",
        image: "/projects/jp-intrams/iphone HD.webp",
        primitive: "Upstash Redis Atomic SETNX Rate Limiting (5 Votes/s/IP) + Edge CDN Cache (s-maxage=5)",
      },
      {
        label: "Gym Display Mode",
        image: "/projects/jp-intrams/tv(desktop).webp",
        primitive: "Dedicated /tv Route Rotating 5 Standings Views Every 15s with AV Hotkeys",
      },
      {
        label: "Campus Projector",
        image: "/projects/jp-intrams/projector.webp",
        primitive: "Live Quadrangle Stage Projection During SJPIICD Intramurals Tournament",
      },
    ],
    logo: "/logos/school-logo-nobg.webp",
    techStack: [
      "Next.js 16",
      "React 19",
      "TypeScript",
      "Tailwind CSS v4",
      "Supabase Realtime",
      "PostgreSQL",
      "Upstash Redis",
      "Framer Motion",
    ],
    metrics: {
      "Competing Departments": "9 Departments",
      "Sports Divisions": "23 Divisions",
      "Score Sync": "Real-Time",
      "Operational Uptime": "100% (Zero Downtime)",
    },
    highlights: [
      "Live Score Sync: Delivered real-time score synchronization across 23 sports divisions using Supabase Realtime to push live standings to student devices.",
      "Auto-Cycling Display Mode: Developed an auto-cycling display mode deployed across campus gym screens and mobile spectator devices for continuous live score broadcasts.",
      "Distributed Redis Rate Limiting: Implemented distributed Redis rate limiting at the API layer to prevent PostgreSQL connection exhaustion during concurrent tournament traffic.",
    ],
  },
];

// Client & Institutional Projects

export const clientProjects: ClientProject[] = [
  {
    id: "owwa-sprs",
    title: "OWWA SPRS Platform",
    client: "Overseas Workers Welfare Administration (Region XI)",
    objective:
      "Built as the sole developer during my OWWA Region XI internship: a performance reporting platform that tracks monthly KPI targets and accomplishment reports, with PostgreSQL constraints and Zod validation on every submission.",
    logo: "/logos/owwa-logo.webp",
    image: "/projects/owwa-sprs/consolidation.webp",
    screenshots: [
      {
        label: "Consolidation & Export",
        image: "/projects/owwa-sprs/consolidation.webp",
        primitive: "Regional KPI Consolidation & Multi-Sheet ExcelJS Accomplishment Export",
      },
      {
        label: "Template Builder",
        image: "/projects/owwa-sprs/template-builder.webp",
        primitive: "Dynamic Indicator Schema Builder with Zod Validation & PostgreSQL Constraints",
      },
      {
        label: "Public Landing",
        image: "/projects/owwa-sprs/landing.webp",
        primitive: "Sole-Developer Statistical Performance Reporting Platform for OWWA Region XI",
      },
      {
        label: "System Modules",
        image: "/projects/owwa-sprs/dashboard.webp",
        primitive: "Monthly Target vs. Actual Accomplishment Tracking Across Regional Programs",
      },
    ],
    techStack: [
      "Next.js",
      "TypeScript",
      "PostgreSQL",
      "Supabase SSR",
      "Zod",
      "ExcelJS",
      "Recharts",
      "Tailwind CSS",
    ],
  },
];

// Education

export const education: EducationItem[] = [
  {
    level: "Bachelor's Degree",
    institution: "St. John Paul II College of Davao",
    program: "Bachelor of Science in Information Technology",
    status: "Graduated May 2026",
    logo: "/logos/school-logo-nobg.webp",
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

// Featured Technical Milestones, Government Systems & Institutional Honors
export const featuredCredentials: Credential[] = [
  {
    id: "owwa-csmr-cert",
    title: "OWWA Client Satisfaction Measurement Report System",
    issuer: "Overseas Workers Welfare Administration (Region XI)",
    category: "Public Sector",
    status: "Active Production",
    period: "May 14, 2026",
    description:
      "Awarded an official Certificate of Recognition from OWWA Region XI for developing and deploying the CSMR system, consolidating 4,632+ citizen feedback records across 10 regional units into multi-tab workbooks for ARTA/CSC reporting requirements.",
    skills: ["Government IT", "Feedback Analytics", "Compliance Reporting", "Full-Stack Web"],
    image: "/certificates/ojt/csmr.webp",
    gallery: [
      {
        label: "Official Recognition",
        image: "/certificates/ojt/csmr.webp",
        caption: "Official signed OWWA Certificate of Recognition for CSMR deployment",
      },
      {
        label: "System Pitch & Presentation",
        image: "/profile/1. pitching.webp",
        caption: "Live system presentation and pitch to OWWA Region XI officers and stakeholders",
      },
      {
        label: "Supervision & Handover",
        image: "/profile/3. group_photo.webp",
        caption: "With Co-Intern and IT Head / OJT Supervisor of OWWA Region XI",
      },
      {
        label: "Agency Presentation Assembly",
        image: "/profile/2. all_employee.webp",
        caption: "Full assembly presentation with OWWA Region XI administrative staff",
      },
    ],
    signatories: [
      "Jhon David S. Tumbaga — OJT Supervisor / IT Instructor",
      "Aileen D. Casiller — Supervising Administrative Officer",
    ],
  },
  {
    id: "owwa-sprs-cert",
    title: "OWWA Statistical Performance Reporting System",
    issuer: "Overseas Workers Welfare Administration (Region XI)",
    category: "Public Sector",
    status: "Official Recognition",
    period: "May 14, 2026",
    description:
      "Awarded an official Certificate of Recognition for developing SPRS as the sole developer during my internship, built to help regional units track monthly performance targets and automate accomplishment reporting.",
    skills: ["Government IT Systems", "Statistical Reporting", "Performance KPIs", "Data Management"],
    image: "/certificates/ojt/sprs.webp",
    gallery: [
      {
        label: "Official Recognition",
        image: "/certificates/ojt/sprs.webp",
        caption: "Official signed OWWA Certificate of Recognition for SPRS platform",
      },
      {
        label: "Live System Pitch",
        image: "/profile/1. pitching.webp",
        caption: "Presenting the SPRS statistical reporting platform to OWWA Region XI",
      },
      {
        label: "IT Mentorship & Handover",
        image: "/profile/3. group_photo.webp",
        caption: "With Co-Intern and IT Head / OJT Supervisor of OWWA Region XI",
      },
      {
        label: "Regional Staff Assembly",
        image: "/profile/2. all_employee.webp",
        caption: "Full regional staff assembly during the SPRS system presentation",
      },
    ],
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
      "Competed in the 2025 Mindanao Interschool Hackathon, building a property listing and inquiry prototype using Next.js and Supabase in 48 hours.",
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
      "Received the school's Institutional Service Award for student leadership in AY 2025–2026 as an elected SSC Senator, helping coordinate campus events, student services, and Intramurals 2025.",
    skills: ["Institutional Service", "Student Governance", "Campus Operations", "Event Coordination"],
    image: "/certificates/school/2. insti-service-reward.webp",
    gallery: [
      {
        label: "Institutional Service Award",
        image: "/certificates/school/2. insti-service-reward.webp",
        caption: "Highest student service honor awarded by St. John Paul II College of Davao (AY 2025–2026)",
      },
      {
        label: "Student Leadership Appreciation",
        image: "/certificates/school/1. appreciation.webp",
        caption: "Certificate of Appreciation for exemplary leadership as an elected SSC Senator (AY 2025–2026)",
      },
      {
        label: "Intramurals Leadership",
        image: "/certificates/school/3. leadership-intramurals.webp",
        caption: "Leadership recognition for organizing and coordinating SJPIICD Intramurals 2025",
      },
      {
        label: "Extravaganza Leadership",
        image: "/certificates/school/4. leadership-extravaganza.webp",
        caption: "Leadership recognition for campus-wide student events and governance",
      },
    ],
    signatories: [
      "Jocelyn P. Rodriguez, MAEd-GC, RGC — Dean of Student Affairs",
      "Engr. Joselito B. Lim, Jr. — AVP for Student Services",
      "Dr. April B. Evangelista — School President",
    ],
  },
];

// Work Experience

export const experience: Experience[] = [
  {
    organization: "St. John Paul II College of Davao",
    role: "Full-stack Developer (Freelance Contract)",
    period: "Aug 2025 – Present",
    highlights: [
      `Built and deployed JP Connect, a paid student services and exam scheduling portal with ${jpConnectMetrics.accounts} Google SSO accounts (students and ${jpConnectMetrics.faculty} faculty) across 9 academic departments.`,
      "Implemented an interval-sweep conflict check that validates 658 exam slots for room and instructor overlaps (0 conflicts), replacing manual cross-checking of departmental Excel files.",
      "Automated end-of-semester clearance by matching offline RFID attendance logs against 14,778 registrar records in under 5 seconds, replacing physical queues across campus.",
      "Enforced data isolation across 6 user roles with PostgreSQL Row-Level Security and Next.js middleware, so students on shared lab computers can only see their own records.",
      `Built a sanctions and payments module for the Supreme Student Council that links clearance to settled sanctions and logs every payment and expense, recording ${jpConnectMetrics.sanctionsCollected} in collections over one clearance period (${jpConnectMetrics.sanctionsPeriod}).`,
    ],
    techStack: ["Next.js 16", "TypeScript", "Supabase", "PostgreSQL RLS", "Tailwind CSS", "pg_cron"],
    logo: "/logos/school-logo-nobg.webp",
    link: "https://jp-connect.vercel.app",
  },
  {
    organization: "Overseas Workers Welfare Administration Region XI",
    role: "Software Developer Intern",
    period: "Jan 2026 – May 2026",
    highlights: [
      "Developed the Client Satisfaction Measurement Report (CSMR) system, consolidating 4,632+ citizen feedback records and 72 monthly report submissions from 10 regional units.",
      "Replaced a 4-day manual spreadsheet consolidation with on-demand report generation that runs in under 1 second, using Next.js Server Actions for server-side aggregation.",
      "Built an ExcelJS export that generates multi-tab workbooks with formulas and formatting required for ARTA/CSC reporting, so staff no longer rebuild reports by hand.",
      "Built the Statistical Performance Reporting System (SPRS) as the sole developer, tracking monthly KPI targets and accomplishment reports, with PostgreSQL constraints and Zod validation on every submission.",
      "Received two official Certificates of Recognition from OWWA Region XI (CSMR and SPRS) and presented both systems to regional staff.",
    ],
    techStack: ["Next.js Server Actions", "PostgreSQL", "Supabase SSR", "Zod", "ExcelJS", "TypeScript", "Recharts"],
    logo: "/logos/owwa-logo.webp",
    link: "https://www.facebook.com/owwadavao.lco",
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
    url: "https://www.linkedin.com/in/kenneth-bulaga/",
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
  { label: "Overview", href: "/" },
  { label: "Systems", href: "/systems", count: "04" },
  { label: "Experience", href: "/experience", count: "02" },
  { label: "Credentials", href: "/credentials", count: "04" },
  { label: "Stack", href: "/stack", count: "20" },
] as const;

export interface ShippingSoonItem {
  id: string;
  title: string;
  tagline: string;
  status: string;
  eta: string;
  description: string;
  plannedPrimitives: string[];
  techStack: string[];
  href: string;
}

export const shippingSoonProjects: ShippingSoonItem[] = [
  {
    id: "davao-spots",
    title: "DavaoSpots",
    tagline: "Geospatial Work & Study Directory · Davao City",
    status: "Shipping Soon",
    eta: "2026 Release",
    description:
      "While Google Maps rates food and coffee flavor, DavaoSpots rates pure work-readiness—helping remote workers, freelancers, and students in Davao City find study-friendly cafes and coworking hubs with verified Wi-Fi, table socket density, late/24-7 hours, and backup generators during city power interruptions.",
    plannedPrimitives: [
      "1-Tap Panic Filters: Instant 0ms client-side filtering for Generator Backup, Sockets Every Table, Open 24/7, and Call-Friendly workspaces",
      "Geofenced Wi-Fi Benchmarks: Crowd-sourced speed tests verified only when physically inside a spot (<=250m radius)",
      "Frictionless Community Submissions: Zero-login spot reports protected by Upstash Redis rate limiting and PostgreSQL RLS",
    ],
    techStack: [
      "Next.js 16",
      "React 19",
      "TypeScript",
      "Tailwind CSS v4",
      "MapLibre GL",
      "OpenFreeMap",
      "Supabase (PostgreSQL & RLS)",
      "Upstash Redis",
    ],
    href: "/systems#shipping-soon",
  },
];

export interface StackCategory {
  category: string;
  items: string[];
}

export const stackCatalog: StackCategory[] = [
  {
    category: "Frontend",
    items: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "shadcn/ui",
      "Framer Motion",
    ],
  },
  {
    category: "Backend & database",
    items: [
      "Supabase",
      "PostgreSQL",
      "Upstash Redis",
      "Resend",
      "Node.js",
      "Zod",
    ],
  },
  {
    category: "Data, maps & visualization",
    items: [
      "ExcelJS",
      "SheetJS",
      "MapLibre GL",
      "Recharts",
    ],
  },
  {
    category: "AI & workflow",
    items: [
      "Claude Code",
      "Cursor",
      "Vercel",
      "Git & GitHub",
    ],
  },
];

// Resume

export const resumePath = "/Kenneth_Bulaga_Resume.pdf";

