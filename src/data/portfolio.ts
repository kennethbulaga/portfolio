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
  bio: "I built JP Connect for 7,207 student and faculty accounts at St. John Paul II College of Davao, validating 781 exam schedules with zero overlaps. I also built JP Intrams for live tournament standings across 23 sports divisions, along with the CSMR citizen feedback and SPRS reporting platforms for OWWA Region XI.",
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
    label: "Authenticated Profiles",
    context: "7,078 Students · 126 Faculty",
  },
  {
    value: jpConnectMetrics.sanctionsCollected,
    label: "SSC Clearance Ledger",
    context: "1 Clearance Period (Dec 2025 – Jan 2026)",
  },
  {
    value: "4,632+",
    label: "Citizen Feedback Records",
    context: "OWWA Region XI · 10 Regional Units",
  },
  {
    value: "0 Overlaps",
    label: "Validated Exam Rows",
    context: "781 Rows · 2026–2027 1st Sem Finals",
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
      "Built under a freelance contract for St. John Paul II College of Davao to replace paper clearance queues and manual spreadsheet scheduling across 9 academic departments. Uses domain-locked Google Workspace SSO, PostgreSQL Row-Level Security, and an O(N log N) interval-sweep resolver to validate schedules and track SSC sanctions.",
    image: "/projects/jp-connect/portfolio-01-landing.webp",
    screenshots: [
      {
        label: "Landing & Student",
        image: "/projects/jp-connect/portfolio-01-landing.webp",
        primitive: "Google Workspace OAuth (@sjp2cd.edu.ph) + PostgreSQL RLS (auth.uid() = student_id)",
      },
      {
        label: "Exam Schedules",
        image: "/projects/jp-connect/portfolio-02-exams.webp",
        primitive: "O(N log N) Interval-Sweep · 781 Exam Rows, 0 Overlaps (2026–2027 Finals)",
      },
      {
        label: "Instructor Portal",
        image: "/projects/jp-connect/portfolio-03-faculty.webp",
        primitive: "Normalized Proctor Alias Lookup Table Mapping 126 Instructor Accounts",
      },
      {
        label: "SSC & Clearance",
        image: "/projects/jp-connect/portfolio-04-clearance.webp",
        primitive: "Set-Difference Attendance Sync (14,778 Records) + PHP 707,750 Ledger",
      },
      {
        label: "Academic Calendar",
        image: "/projects/jp-connect/portfolio-05-calendar.webp",
        primitive: "Synced Campus Events, Exam Windows & Clearance Deadlines",
      },
      {
        label: "Conflict Resolver",
        image: "/projects/jp-connect/portfolio-06-conflicts.webp",
        primitive: "Automated Room, Proctor & Self-Proctor Overlap Detection",
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
    ],
    metrics: {
      "Authenticated Profiles": jpConnectMetrics.accounts,
      "Masterlist Records": jpConnectMetrics.masterlist,
      "Validated Exam Rows": jpConnectMetrics.exams,
      "Schedule Overlaps": jpConnectMetrics.overlaps,
    },
    highlights: [
      "Conflict-Free Scheduler: Implemented automated interval-sweep scheduling to validate 781 exam rows with 0 room, proctor, or self-proctor overlaps for the 2026–2027 1st Semester Finals schedule, replacing manual spreadsheet validation.",
      "Role-Based Access: Configured domain-locked Google Workspace SSO (@sjp2cd.edu.ph) paired with PostgreSQL Row-Level Security to isolate student and faculty data.",
      "Automated Clearance: Reconciles event attendee ID uploads against 14,778 registrar records in under 5 seconds, auto-flagging absences and calculating SSC sanctions.",
      `Sanctions Ledger: Built a sanctions and payments module for the Supreme Student Council that links clearance to settled sanctions and logs every payment and expense, recording ${jpConnectMetrics.sanctionsCollected} in collections over one clearance period (${jpConnectMetrics.sanctionsPeriod}).`,
    ],
  },
  {
    id: "owwa-csmr",
    title: "OWWA CSMR System",
    link: "#",
    focus: "Internal Citizen Satisfaction & Feedback Reporting Tool",
    description:
      "Internal reporting tool built during my OWWA Region XI internship to replace manual spreadsheet consolidation across frontline offices. Aggregates JSONB survey snapshots in Next.js Server Actions, validates tallies with Zod, and exports multi-tab ExcelJS workbooks for ARTA/CSC reporting.",
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
        primitive: "On-Demand JSONB Aggregation in Server Actions + ExcelJS Export (<1s)",
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
      "On-Demand Aggregation: Aggregates regional survey metrics on the fly in Next.js Server Actions from JSONB survey snapshots without saving redundant table rows.",
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
      "Campus tournament scoreboard built for SJPIICD intramurals to replace delayed manual scoreboards and printed bracket sheets. Syncs live standings via Supabase Realtime, rotates an auto-cycling /tv view for gym projectors, and uses Upstash Redis rate-limiting to protect PostgreSQL under spectator traffic.",
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
        primitive: "Auto-Cycling /tv Output Projected Live on Quadrangle Stage",
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
      "Internal reporting platform built as sole developer during my OWWA Region XI internship to replace manual monthly accomplishment spreadsheets. Tracks program KPI targets against actuals using dynamic indicator schemas, PostgreSQL constraints, and Zod validation.",
    logo: "/logos/owwa-logo.webp",
    image: "/projects/owwa-sprs/consolidation.webp",
    screenshots: [
      {
        label: "Consolidation & Export",
        image: "/projects/owwa-sprs/consolidation.webp",
        primitive: "Cross-Unit KPI Rollup + Multi-Sheet ExcelJS Accomplishment Export",
      },
      {
        label: "Template Builder",
        image: "/projects/owwa-sprs/template-builder.webp",
        primitive: "JSON Indicator Schema Builder + Per-Field Zod & SQL Constraints",
      },
      {
        label: "Public Landing",
        image: "/projects/owwa-sprs/landing.webp",
        primitive: "Role-Routed Entry Portal for OWWA Region XI Program Units",
      },
      {
        label: "System Modules",
        image: "/projects/owwa-sprs/dashboard.webp",
        primitive: "Monthly Target vs. Actual Variance Grids by Regional Program",
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
      `Built and deployed JP Connect, a student services and exam scheduling portal with ${jpConnectMetrics.accounts} authenticated profiles (${jpConnectMetrics.students} students and ${jpConnectMetrics.faculty} instructors) across 9 academic departments.`,
      "Implemented an interval-sweep validator checking 781 exam slots for room, proctor, and self-proctor conflicts (0 overlaps), replacing manual Excel cross-checks.",
      "Automated end-of-semester clearance by reconciling event attendee ID uploads against 14,778 registrar records in under 5 seconds, auto-flagging absences and calculating SSC sanctions.",
      "Enforced data isolation across 6 user roles using PostgreSQL Row-Level Security and Next.js middleware to restrict shared-terminal access.",
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
      "Developed the Client Satisfaction Measurement Report (CSMR) system, consolidating 4,632+ citizen feedback records and 72 monthly report submissions from 10 regional units.",
      "Replaced a 4-day manual spreadsheet consolidation using on-demand server-side aggregation in Next.js Server Actions.",
      "Engineered an ExcelJS export pipeline generating multi-tab workbooks with embedded formulas and ARTA/CSC audit formatting.",
      "Built the Statistical Performance Reporting System (SPRS) as sole developer, enforcing monthly KPI validation via PostgreSQL constraints and Zod.",
      "Delivered live system walkthroughs and technical handoff of CSMR and SPRS to OWWA Region XI regional staff, earning two official Certificates of Recognition.",
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
    tagline: "Geospatial Work & Study Directory · Davao City",
    status: "Shipping Soon",
    eta: "2026 Release",
    description:
      "Directory for remote workers and students in Davao City. Unlike Google Maps, it indexes cafes and coworking spaces by verified Wi-Fi speed, outlet density, late or 24/7 hours, and backup generator availability during power outages.",
    plannedPrimitives: [
      "1-Tap Panic Filters: Client-side filtering for Generator Backup, Sockets Every Table, Open 24/7, and Call-Friendly workspaces",
      "Geofenced Wi-Fi Benchmarks: Crowd-sourced speed tests verified only when physically inside a spot (<=250m radius)",
      "Open Community Submissions: Zero-login spot reports protected by Upstash Redis rate limiting and PostgreSQL RLS",
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

