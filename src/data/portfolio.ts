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
  subHeadline: "Full-Stack Developer",
  bio: "I build web and mobile software for real operational problems across any industry. My work includes JP Connect for 7,207 school accounts (781 exam schedules, zero overlaps), live tournament software across 23 sports divisions, and reporting systems for OWWA Region XI.",
  location: "Based in Davao City, Philippines · Remote Worldwide",
  email: "kennethbulaga.dev@gmail.com",
  avatar: "/profile/avatar.webp",
  availability: {
    message: "Available for Freelance & Full-Time Roles",
  },
};

// Institutional Trust Partners

export const institutionalTrust: TrustPartner[] = [
  {
    name: "St. John Paul II College of Davao",
    role: "Exam Schedules, Attendance & SSC Clearance Portal",
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
  { id: "upstash", name: "Upstash Redis", category: "Rate limiting & low-latency state", icon: "/tech-stack/upstash-light.svg", darkIcon: "/tech-stack/upstash-dark.svg" },
  { id: "postgres", name: "PostgreSQL", category: "Relational DB" },
  { id: "nodejs", name: "Node.js", category: "Server Runtime" },
  { id: "zod", name: "Zod", category: "Schema Validation", icon: "/tech-stack/zod.svg" },
  { id: "github", name: "Git & GitHub", category: "Version Control", icon: "/tech-stack/github.svg", invertInDark: true },
  { id: "vercel", name: "Vercel", category: "Edge Platform", icon: "/tech-stack/vercel.svg", invertInLight: true },
];

// JP Connect Production Metrics (from the live admin analytics dashboard)

export const jpConnectMetrics = {
  accounts: "7,207",
  students: "7,078",
  faculty: "126",
  masterlist: "14,778",
  exams: "781",
  overlaps: "0",
  sanctionsCollected: "PHP 707,750",
  sanctionsPeriod: "Dec 2025 – Jan 2026",
} as const;

export const heroHeadline = {
  prefix: "Building ",
  emphasis: "practical",
  suffix: " web software for real operations.",
} as const;

export const heroLedger = [
  {
    value: jpConnectMetrics.accounts,
    label: "Active User Accounts",
    context: "7,078 Students · 126 Faculty",
  },
  {
    value: jpConnectMetrics.sanctionsCollected,
    label: "SSC Clearance Tracked",
    context: "1 Clearance Period (Dec 2025 – Jan 2026)",
  },
  {
    value: "4,632+",
    label: "Citizen Feedback Records",
    context: "OWWA Region XI · 10 Offices",
  },
  {
    value: "0 Overlaps",
    label: "Exam Schedule Conflicts",
    context: "781 Schedules · 2026–2027 1st Sem Finals",
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
      "Replaced manual spreadsheet scheduling and paper clearance tracking for 7,207 students and faculty at St. John Paul II College of Davao. The portal validates 781 exam schedules with zero room or proctor overlaps, reconciles event attendance against 14,778 registrar records in under 5 seconds, and tracks PHP 707,750 in settled SSC clearance collections. It also syncs exam windows to Google Calendar and gives students a daily campus hub for weather, holidays, and event standings.",
    image: "/projects/jp-connect/portfolio-01-landing.webp",
    screenshots: [
      {
        label: "Landing & Student",
        image: "/projects/jp-connect/portfolio-01-landing.webp",
        primitive: "Verified school Google login (@sjp2cd.edu.ph) with role-based data access",
      },
      {
        label: "Exam Schedules",
        image: "/projects/jp-connect/portfolio-02-exams.webp",
        primitive: "781 exam schedules validated with 0 room or proctor overlaps (2026–2027 Finals)",
      },
      {
        label: "Instructor Portal",
        image: "/projects/jp-connect/portfolio-03-faculty.webp",
        primitive: "Proctor schedules and room assignments mapped across 126 instructor accounts",
      },
      {
        label: "SSC & Clearance",
        image: "/projects/jp-connect/portfolio-04-clearance.webp",
        primitive: "Attendance matched against 14,778 registrar records + PHP 707,750 clearance ledger",
      },
      {
        label: "Academic Calendar",
        image: "/projects/jp-connect/portfolio-05-calendar.webp",
        primitive: "Automatic Google Calendar sync for exam windows and clearance deadlines",
      },
      {
        label: "Conflict Resolver",
        image: "/projects/jp-connect/portfolio-06-conflicts.webp",
        primitive: "Automatic detection for double-booked rooms and overlapping proctor assignments",
      },
      {
        label: "Campus Standee",
        image: "/projects/jp-connect/portfolio-07-campus-standee.webp",
        primitive: "Vertical Lobby Display · Live Exam & Clearance Feed",
      },
      {
        label: "Program Head Email",
        image: "/projects/jp-connect/portfolio-08-commendation.webp",
        primitive: "Written Commendation from CICT Program Head (SJPIICD)",
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
      "Google Calendar API",
      "Upstash Redis",
    ],
    metrics: {
      "User Accounts": jpConnectMetrics.accounts,
      "Registrar Records": jpConnectMetrics.masterlist,
      "Exam Schedules": jpConnectMetrics.exams,
      "Schedule Overlaps": jpConnectMetrics.overlaps,
    },
    highlights: [
      "Eliminated manual exam cross-checks: Automated conflict detection validates 781 exam rows with 0 room, proctor, or self-proctor overlaps for the 2026–2027 1st Semester Finals, paired with Google Calendar re-syncs that clear out stale events.",
      "Protected student and staff records: Restricted access to verified @sjp2cd.edu.ph Google Workspace accounts with PostgreSQL Row-Level Security, server-side authentication on Server Actions, and masked admin routes.",
      `Cut clearance reconciliation to under 5 seconds: Matches uploaded event attendance IDs against 14,778 registrar records, auto-flagging absences and logging settled SSC sanctions (${jpConnectMetrics.sanctionsCollected} collected over ${jpConnectMetrics.sanctionsPeriod}).`,
      "Kept students returning daily: Added a daily campus card (Davao weather and sunset times, PH holidays, trivia quiz, and Wikipedia reader) alongside Pasiklaban 2026 Spirit Leaders, backed by indexed search and cached feeds.",
    ],
  },
  {
    id: "jp-intrams",
    title: "JP Intrams",
    link: "https://jp-intrams.vercel.app",
    focus: "Real-Time Tournament Leaderboard, Cheer Wall & Campus Signage",
    description:
      "Replaced manual scoreboards and printed bracket sheets for SJPIICD intramurals across 9 departments and 23 sports divisions. Spectators and organizers get live standings on their phones, an auto-cycling /tv display for gym projectors, a moderated Shoutout Wall, daily Spirit Cheers, and shareable QR story cards, all protected by server-side rate limits and caching to handle tournament traffic spikes.",
    image: "/projects/jp-intrams/jp-intrams-linkedin-promo.webp",
    screenshots: [
      {
        label: "Desktop Leaderboard",
        image: "/projects/jp-intrams/jp-intrams-linkedin-promo.webp",
        primitive: "Live standings across 23 sports divisions, Shoutout Wall, and department cheer totals",
      },
      {
        label: "Mobile Spectator",
        image: "/projects/jp-intrams/jp-intrams-mobile-spectator.webp",
        primitive: "Mobile scoreboard with rate-limited cheer voting (15 req/min) and cached updates",
      },
      {
        label: "Gym Display Mode",
        image: "/projects/jp-intrams/tv(desktop).webp",
        primitive: "Dedicated /tv screen rotating 5 standings views every 15 seconds with AV hotkeys",
      },
      {
        label: "Campus Projector",
        image: "/projects/jp-intrams/projector.webp",
        primitive: "Auto-cycling /tv scoreboard projected live on the quadrangle stage",
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
      "Open-Meteo",
    ],
    metrics: {
      "Competing Departments": "9 Departments",
      "Sports Divisions": "23 Divisions",
      "Live Shoutout Wall": "500-Post Cap",
      "Traffic Protection": "Rate-Limited & Cached",
      "Operational Uptime": "100% (Zero Downtime)",
    },
    highlights: [
      "Live standings without manual updates: Syncs scores across 23 sports divisions in real time via Supabase Realtime, paired with an auto-cycling /tv view for gym projectors and spectator phones.",
      "Audience engagement with built-in guardrails: Live Shoutout Wall (500-post cap, threaded replies, department filters, anonymous handles) and daily 12:00 AM PHT Spirit Cheers with sound and haptic feedback.",
      "Protected against vote spamming and traffic spikes: Cheer voting runs through an atomic Upstash Redis Lua script with HttpOnly voter cookies, device caps (6/day), 15 req/min rate limiting, and 10-second response caching.",
      "Campus weather and social sharing: Shows Davao weather and heat advisories alongside a 9:16 IG Story Card generator with QR codes for department standings.",
    ],
  },
  {
    id: "owwa-csmr",
    title: "OWWA CSMR System",
    link: "#",
    focus: "Internal Citizen Satisfaction & Feedback Reporting Tool",
    description:
      "Replaced a 4-day manual spreadsheet consolidation process for OWWA Region XI across 10 frontline offices. Staff submit monthly citizen feedback through one portal, which consolidates 4,632+ records and 72 monthly submissions into ready-to-submit ARTA/CSC Excel workbooks in under 1 second, with built-in tally checks to prevent math errors before submission.",
    image: "/projects/owwa-csmr/landing.webp",
    screenshots: [
      {
        label: "Public Landing",
        image: "/projects/owwa-csmr/landing.webp",
        primitive: "Multi-office survey intake across 10 OWWA Region XI frontline units",
      },
      {
        label: "Secure Role Login",
        image: "/projects/owwa-csmr/login.webp",
        primitive: "Role-based office login using signed HttpOnly session cookies",
      },
      {
        label: "Dashboard",
        image: "/projects/owwa-csmr/dashboard.webp",
        primitive: "Live regional survey consolidation and 1-click Excel export (<1s)",
      },
      {
        label: "Manage Offices",
        image: "/projects/owwa-csmr/manage_offices.webp",
        primitive: "Duplicate-submission prevention per office/month and automatic tally balance checks",
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
      "Regional Offices": "10 Offices",
      "Report Generation Time": "<1s (1-Click)",
    },
    highlights: [
      "Consolidated regional feedback in seconds: Aggregates survey snapshots on demand in Next.js Server Actions without duplicating database rows.",
      "1-click ARTA/CSC Excel exports: Generates multi-tab ExcelJS workbooks with embedded formulas and audit formatting in under 1 second.",
      "Caught tally errors before submission: Live Zod validation ensures sub-category counts always match respondent totals.",
    ],
  },
  {
    id: "owwa-sprs",
    title: "OWWA SPRS Platform",
    link: "#",
    focus: "Statistical Performance & KPI Reporting Platform (OWWA Region XI)",
    description:
      "Built as sole developer during my OWWA Region XI internship to replace manual monthly accomplishment spreadsheets. Tracks program KPI targets against actual results across regional units, flags missing or invalid entries at input time, and exports consolidated multi-sheet Excel reports.",
    image: "/projects/owwa-sprs/consolidation.webp",
    screenshots: [
      {
        label: "Consolidation & Export",
        image: "/projects/owwa-sprs/consolidation.webp",
        primitive: "Cross-unit KPI rollup and multi-sheet ExcelJS accomplishment export",
      },
      {
        label: "Template Builder",
        image: "/projects/owwa-sprs/template-builder.webp",
        primitive: "Configurable indicator builder with per-field validation and database constraints",
      },
      {
        label: "Public Landing",
        image: "/projects/owwa-sprs/landing.webp",
        primitive: "Role-routed entry portal for OWWA Region XI program units",
      },
      {
        label: "System Modules",
        image: "/projects/owwa-sprs/dashboard.webp",
        primitive: "Monthly target vs. actual variance tables by regional program",
      },
    ],
    logo: "/logos/owwa-logo.webp",
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
    metrics: {
      "Client": "OWWA Region XI",
      "Engineering Scope": "Sole Developer",
      "Reporting Flow": "KPI Targets vs. Actuals",
      "Export Format": "Multi-Sheet ExcelJS",
    },
    highlights: [
      "Replaced monthly accomplishment spreadsheets: Consolidates target vs. actual KPI performance across OWWA Region XI program units in one portal.",
      "Prevented invalid entries at input time: Uses configurable indicator templates backed by Zod and PostgreSQL constraints.",
      "1-click multi-sheet exports: Generates consolidated ExcelJS accomplishment workbooks ready for regional review.",
    ],
  },
];

// Client & Institutional Projects

export const clientProjects: ClientProject[] = [];

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
      "Official Certificate of Recognition from OWWA Region XI for deploying the CSMR portal across 10 regional units for ARTA/CSC reporting.",
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
      "Official Certificate of Recognition for building SPRS as sole developer to track monthly regional KPI targets and accomplishment reports.",
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
    role: "Full-Stack Developer (Freelance Contract)",
    period: "Aug 2025 – Present",
    highlights: [
      `Built and deployed JP Connect, a student services and exam scheduling portal serving ${jpConnectMetrics.accounts} accounts (${jpConnectMetrics.students} students and ${jpConnectMetrics.faculty} instructors) across 9 academic departments.`,
      "Replaced manual Excel exam cross-checks with an automated conflict validator covering 781 exam slots across rooms and proctors (0 overlaps).",
      "Cut end-of-semester clearance reconciliation to under 5 seconds by matching uploaded attendance IDs against 14,778 registrar records, auto-flagging absences and calculating SSC sanctions.",
      "Separated data access across 6 user roles using PostgreSQL Row-Level Security and Next.js middleware so shared campus terminals stay locked to each account.",
      `Built an SSC sanctions and payments ledger linking clearance status to settled balances, tracking ${jpConnectMetrics.sanctionsCollected} in collections (${jpConnectMetrics.sanctionsPeriod}).`,
    ],
    techStack: ["Next.js 16", "React 19", "TypeScript", "Supabase", "Tailwind CSS v4", "Zod"],
    logo: "/logos/school-logo-nobg.webp",
    link: "https://jp-connect.vercel.app",
  },
  {
    organization: "Overseas Workers Welfare Administration Region XI",
    role: "Software Developer Intern",
    period: "Jan 2026 – May 2026",
    highlights: [
      "Built the Client Satisfaction Measurement Report (CSMR) system, consolidating 4,632+ citizen feedback records and 72 monthly report submissions from 10 regional units.",
      "Replaced a 4-day manual spreadsheet consolidation workflow with on-demand server-side aggregation in Next.js Server Actions.",
      "Built an ExcelJS export pipeline generating multi-tab workbooks with embedded formulas and ARTA/CSC audit formatting in under 1 second.",
      "Built the Statistical Performance Reporting System (SPRS) as sole developer, enforcing monthly KPI validation via PostgreSQL constraints and Zod.",
      "Delivered live system walkthroughs and handover of CSMR and SPRS to OWWA Region XI staff, earning two official Certificates of Recognition.",
    ],
    techStack: ["Next.js", "TypeScript", "Supabase", "Zod", "ExcelJS", "Recharts"],
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
    tagline: "Work & Study Space Directory · Davao City",
    status: "Shipping Soon",
    eta: "2026 Release",
    description:
      "Directory for remote workers and students in Davao City. Unlike Google Maps, it indexes cafes and coworking spaces by verified Wi-Fi speed, outlet density, late or 24/7 hours, and backup generator availability during power outages.",
    plannedPrimitives: [
      "1-Tap Panic Filters: Filter workspaces by backup generator, power outlets per table, 24/7 hours, and call-friendly noise levels",
      "Verified Wi-Fi Speeds: Crowd-sourced speed tests accepted only when physically inside the venue (<=250m radius)",
      "Open Community Updates: Zero-login spot reports protected by rate limiting and database access rules",
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

export interface StackItem {
  name: string;
  role: string;
}

export interface StackCategory {
  category: string;
  items: StackItem[];
}

export const stackCatalog: StackCategory[] = [
  {
    category: "Frontend",
    items: [
      { name: "Next.js 16", role: "App Router & Server Actions" },
      { name: "React 19", role: "Server & client UI components" },
      { name: "TypeScript", role: "Strict end-to-end type safety" },
      { name: "Tailwind CSS v4", role: "Token-driven design systems" },
    ],
  },
  {
    category: "Backend & Database",
    items: [
      { name: "Supabase & PostgreSQL", role: "RLS policies, Auth, Realtime & pg_cron" },
      { name: "Node.js", role: "Server runtime & build pipelines" },
      { name: "Upstash Redis", role: "Rate limiting & low-latency state" },
      { name: "Zod", role: "Schema & payload validation" },
    ],
  },
  {
    category: "Data, Maps & Visualization",
    items: [
      { name: "ExcelJS", role: "Multi-tab audit workbooks" },
      { name: "Recharts", role: "Operational analytics charts" },
      { name: "MapLibre GL", role: "Vector tiles & geospatial queries" },
    ],
  },
  {
    category: "Deployment & Tooling",
    items: [
      { name: "Vercel", role: "Edge hosting & CI/CD deploys" },
      { name: "Git & GitHub", role: "Version control & Actions workflows" },
      { name: "AI Dev Tooling", role: "Antigravity, Claude Code & custom skills" },
    ],
  },
];

// Resume

export const resumePath = "/Kenneth_Bulaga_Resume.pdf";

