// Type Definitions

export interface PersonalInfo {
  name: string;
  subHeadline: string;
  bio: string;
  location: string;
  email: string;
  avatar?: string;
  availability: {
    message: string;
  };
  currentlyExploring?: string;
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
  image?: string;
  screenshots?: { label: string; image: string }[];
  keyModules?: { name: string; description: string }[];
  link?: string;
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
  category: "Cloud & Industry" | "Public Sector" | "Government & Public Sector" | "Hackathons & Competitions" | "Institutional Honors" | "Student Leadership" | "Hackathons & Workshops";
  period: string;
  status?: "In Progress" | "Completed" | "Active Production" | "Official Recognition" | "Highest Honor" | "Awardee" | "Honored" | "Participant";
  description: string;
  code?: string;
  skills?: string[];
  image?: string;
  gallery?: { label: string; image: string; caption?: string }[];
  signatories?: string[];
  link?: string;
}

export interface Experience {
  organization: string;
  role: string;
  period: string;
  description?: string;
  highlights?: string[];
  techStack?: string[];
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
    tags?: string[];
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
  subHeadline: "Full-stack Developer",
  bio: "I build full-stack web applications and internal tools that turn slow, manual processes into fast, dependable software. Working across Next.js, TypeScript, and PostgreSQL, I focus on building practical systems that just work—from database schema design to clean, responsive interfaces.",
  location: "Based in Davao City, Philippines · Remote Worldwide",
  currentlyExploring: "AWS Cloud Quest",
  email: "kennethbulaga.dev@gmail.com",
  avatar: "/profile/avatar.webp",
  availability: {
    message: "Available for Freelance & Full-time Roles",
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
    icon: "💭",
    label: "Daydreaming",
    detail: "Staring at the ceiling, and zᶻᶻ 💤",
  },
  {
    svgIcon: "/interest/book-education.svg",
    icon: "📖",
    label: "Books & Philosophy",
    detail: "Naval Ravikant, Atomic Habits, Philosophy 101, 48 Laws of Power",
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

// Institutional Trust Partners

export const institutionalTrust: TrustPartner[] = [
  {
    name: "St. John Paul II College of Davao",
    role: "Student Portal, Exam Scheduler & Live Leaderboard",
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
  { id: "supabase", name: "Supabase SSR", category: "Auth & Realtime", icon: "/tech-stack/supabase.svg" },
  { id: "upstash", name: "Upstash Redis", category: "Serverless Cache & Queue", icon: "/tech-stack/upstash-light.svg", darkIcon: "/tech-stack/upstash-dark.svg" },
  { id: "postgres", name: "PostgreSQL", category: "Relational DB" },
  { id: "nodejs", name: "Node.js", category: "Server Runtime" },
  { id: "reactnative", name: "React Native", category: "Mobile Apps", icon: "/tech-stack/react.svg" },
  { id: "zod", name: "Zod", category: "Schema Validation", icon: "/tech-stack/zod.svg" },
  { id: "github", name: "Git & GitHub", category: "Version Control", icon: "/tech-stack/github.svg", invertInDark: true },
  { id: "vercel", name: "Vercel", category: "Edge Platform", icon: "/tech-stack/vercel.svg", invertInLight: true },
  { id: "framer", name: "Framer Motion", category: "Motion & UI", icon: "/tech-stack/framer.svg", invertInDark: true },
];

// Flagship Projects

export const flagshipProjects: FlagshipProject[] = [
  {
    id: "jp-connect",
    title: "JP Connect",
    link: "https://jp-connect.vercel.app",
    focus: "Student Services & Exam Scheduling Platform",
    description:
      "Student services and exam scheduling portal built for St. John Paul II College of Davao, serving 5,536 registered users across 9 academic departments. Replaces physical queues and spreadsheet scheduling with automated interval-sweep scheduling and role-based clearance passes.",
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
      "Registered SSO Users": "5,536",
      "Masterlist Records": "14,778",
      "Exam Schedules": "658",
      "Schedule Overlaps": "0",
    },
    highlights: [
      "Conflict-Free Scheduler: Implemented automated interval-sweep scheduling to eliminate timetable conflicts across 658 exam slots, replacing manual spreadsheet validation.",
      "Role-Based Access: Configured domain-locked Google Workspace SSO (@sjp2cd.edu.ph) paired with PostgreSQL Row-Level Security to isolate student and faculty data.",
      "Automated Clearance: Automated campus clearance by processing offline RFID scanner logs against 14,778 registrar records, reducing processing time from days to under 5 seconds.",
    ],
    hasCaseStudy: true,
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
    hasCaseStudy: true,
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
      { label: "Desktop Leaderboard", image: "/projects/jp-intrams/desktop.webp" },
      { label: "Mobile Spectator", image: "/projects/jp-intrams/iphone HD.webp" },
      { label: "Gym Display Mode", image: "/projects/jp-intrams/tv(desktop).webp" },
      { label: "Campus Projector", image: "/projects/jp-intrams/projector.webp" },
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
    hasCaseStudy: true,
  },
];

// Client & Institutional Projects

export const clientProjects: ClientProject[] = [
  {
    id: "owwa-sprs",
    title: "OWWA SPRS Platform",
    client: "Overseas Workers Welfare Administration (Region XI)",
    objective:
      "Developed and presented a performance reporting platform for OWWA Region XI, implementing KPI aggregation and accomplishment reporting modules using PostgreSQL constraints and Zod validation to enforce data integrity.",
    logo: "/logos/owwa-logo.webp",
    image: "/projects/owwa-sprs/consolidation.webp",
    screenshots: [
      { label: "Consolidation & Export", image: "/projects/owwa-sprs/consolidation.webp" },
      { label: "Template Builder", image: "/projects/owwa-sprs/template-builder.webp" },
      { label: "Public Landing", image: "/projects/owwa-sprs/landing.webp" },
      { label: "System Modules", image: "/projects/owwa-sprs/dashboard.webp" },
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
    status: "Class of 2026",
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
export const cloudCertifications: Credential[] = [];

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
      "Awarded an official Certificate of Recognition for developing and presenting the OWWA SPRS capstone system, built to help regional units track monthly performance targets and automate accomplishment reporting.",
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
        caption: "Full regional staff assembly during our capstone deployment presentation",
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
    organization: "Freelance / Self-Employed",
    role: "Freelance Full-stack Developer",
    period: "Nov 2024 – Present",
    highlights: [
      "Built and deployed full-stack web applications for educational and local business clients, replacing manual workflows with responsive, role-based web systems.",
      "Automated multi-role authorization and clearance workflows using Next.js Edge Middleware and PostgreSQL Row-Level Security (RLS) to protect student and faculty records.",
      "Developed transactional notification and booking workflows using Next.js Server Actions, the Resend API, and Supabase SSR to streamline client operations.",
    ],
    techStack: ["Next.js 16", "Supabase SSR", "PostgreSQL RLS", "TypeScript", "Tailwind CSS", "Resend API"],
    isCurrent: true,
  },
  {
    organization: "Overseas Workers Welfare Administration Region XI",
    role: "Software Developer Intern",
    period: "Jan 2026 – May 2026",
    highlights: [
      "Developed an internal reporting tool for OWWA Region XI's Client Satisfaction Measurement Reports, consolidating 4,632+ citizen feedback records across 10 regional units.",
      "Automated a 4-day manual spreadsheet consolidation workflow, reducing report generation time to under 1 second through server-side aggregation with Next.js Server Actions.",
      "Built an in-memory ExcelJS export engine generating multi-tab workbooks with formulas and audit styling for ARTA/CSC reporting requirements, earning an official Certificate of Recognition.",
      "Implemented KPI aggregation and accomplishment reporting modules for the OWWA SPRS Platform, using PostgreSQL constraints and Zod validation to enforce data integrity.",
    ],
    techStack: ["Next.js Server Actions", "PostgreSQL", "Supabase SSR", "Zod", "ExcelJS", "TypeScript", "Recharts"],
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
  { label: "About", href: "#about" },
  { label: "Stack", href: "#stack" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#work-experience" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
] as const;

// Resume

export const resumePath = "/Kenneth_Bulaga_Resume.pdf";

// Detailed JP Connect Case Study Data

export const jpConnectCaseStudy: CaseStudyData = {
  id: "jp-connect",
  title: "JP Connect: Student Services & Exam Scheduling Portal",
  subtitle: "Campus clearance automation, conflict-free exam scheduling, and Google SSO role-based access",
  role: "Full-stack Developer",
  institution: "St. John Paul II College of Davao (SJPIICD)",
  scaleSummary:
    "Student services and exam scheduling platform serving 5,536 registered users across 9 academic departments, replacing manual paper queues and spreadsheet validation with automated interval-sweep scheduling, digital student passes, and role-based clearance.",
  metrics: [
    { label: "5,536", value: "Registered SSO Users", desc: "5,426 students, 107 faculty across 2 active semesters" },
    { label: "14,778", value: "Masterlist Records", desc: "Ingested across 9 departments" },
    { label: "658", value: "Exam Schedules", desc: "100% automated 3-way conflict verification" },
    { label: "0", value: "Schedule Overlaps", desc: "Guaranteed across 658 exam slots via O(N log N) interval sweep" },
  ],
  costArchitecture: {
    title: "Zero-Cost Cloud Infrastructure",
    points: [
      "Operated completely within Vercel and Supabase free tier limits by offloading Excel parsing and digital ID rendering to the client browser, eliminating server compute overhead.",
      "Added B-tree indexes on foreign keys (student_id, schedule_id) and utilized Supabase connection pooling (pgbouncer) to handle concurrent traffic spikes during clearance week without hitting connection limits.",
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
      title: "Data Privacy Across Shared Campus Terminals",
      desc: "Students accessed the platform from public computer labs and shared devices. Relying on client-side routing alone risked exposing student clearance sanctions and disciplinary records to other students.",
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
    tags: ["Vertical Digital Stand", "Campus Lobby Kiosk", "5,500+ Daily Foot Traffic"],
  },
  architectureSummary:
    "Enforces authorization at every boundary: Next.js Edge Middleware checks session tokens before route evaluation, Google Workspace OAuth limits access to active @sjp2cd.edu.ph accounts, and PostgreSQL Row-Level Security (RLS) enforces row access directly in the database engine (auth.uid() = student_id).",
  securityPoints: [
    "Next.js 16 Edge Middleware: Intercepts incoming requests and validates session cookies and user roles before page rendering.",
    "Google Workspace SSO Integration: Restricts authentication to verified @sjp2cd.edu.ph accounts via OAuth, eliminating credential storage liability and avoiding the need for dedicated password-reset email infrastructure.",
    "Registrar Masterlist Verification: Onboarding validates student and employee IDs directly against imported registrar rosters; unlisted IDs are strictly blocked.",
    "1:1 Identity Claiming: Enrolled users visually confirm their degree program and year level before establishing an immutable 1:1 database record binding.",
    "PostgreSQL Row-Level Security (RLS): Enforces data isolation at the database layer (auth.uid() = student_id), preventing record leaks even under direct client API inspection.",
    "Relational Constraints & Foreign Keys: Foreign key cascades and unique compound indexes prevent duplicate clearance sign-offs and orphaned attendance logs.",
  ],
  deepDives: [
    {
      title: "1. 3-Way Exam Conflict Resolver & Faculty Dispatch",
      challenge:
        "Raw departmental Excel sheets had erratic proctor names (nicknames, typos, abbreviations) and irregular times, creating room/proctor collisions and manual delays notifying 100+ faculty.",
      solution:
        "Built an in-browser Excel parser paired with an interval overlap algorithm that sorts time slots and checks room, proctor, and self-proctoring conflicts in O(N log N) time. Created an alias lookup table in PostgreSQL (normalized_match_key) to map inconsistent faculty name variations to verified Google SSO emails.",
      outcome:
        "658 schedules parsed with 0 collisions and instantly populated across 107 instructor dashboards upon publishing.",
    },
    {
      title: "2. Role-Based Access Control on Shared Devices",
      challenge:
        "Managing 6 distinct roles (Super Admin, OSA Admin, SSC Admin, Checker, Instructor, Student) across public school terminals without session leakage.",
      solution:
        "Built with @supabase/ssr using HTTP-only secure cookies, React Server Component validations, and strict PostgreSQL RLS policies.",
      outcome:
        "Verified role isolation across 6 user tiers. Tested direct Supabase PostgREST client queries to confirm student tokens cannot view sanction records or other students' profiles.",
    },
    {
      title: "3. Batch RFID Ingestion & Sanctions Reconciliation",
      challenge:
        "Standalone physical RFID event scanners produced unlinked logs, requiring manual spreadsheet checks to find absent students and compute fines.",
      solution:
        "Built a batch ingestion tool where SSC officers import scanned IDs; the system auto-reconciles against the masterlist to flag absentees and apply fines.",
      outcome:
        "Automated attendance reconciliation across 14,778 student records by ingesting offline RFID scans and computing set differences (Masterlist \\ Scanned), reducing clearance processing time from 3 days to under 5 seconds.",
    },
  ],
  qaList: [
    {
      question: "How does student onboarding prevent account hijacking or ghost accounts?",
      answer:
        "Access is restricted to Google Workspace accounts with the @sjp2cd.edu.ph domain. On first sign-in, students input their Student ID, which is validated against the active semester's Registrar masterlist. The UI renders an interactive confirmation preview (Name, Course, Year Level) for visual verification before executing an atomic database transaction that binds auth.users.id to the student record with an immutable 1:1 unique constraint.",
    },
    {
      question: "Why choose Google Workspace SSO instead of building custom email and password authentication?",
      answer:
        "As a solo developer building for a university, implementing custom authentication means maintaining password hashing, email verification, password reset flows, and SMTP services. Delegating to Google Workspace OAuth locked access to active @sjp2cd.edu.ph accounts out of the box, eliminated password storage risks, and allowed the application to remain within Supabase's 50,000 MAU free tier.",
    },
    {
      question: "How does attendance reconciliation handle raw hardware logs?",
      answer:
        "Standalone physical RFID scanners capture event taps offline. SSC officers export these raw logs into JP Connect, where our ingestion pipeline deduplicates multi-tap scanner noise into a clean unique ID set. The system then computes the set difference (Masterlist \\ Scanned), automatically flagging unscanned IDs as absent and applying pre-set sanction fees.",
    },
    {
      question: "How did you manage cloud infrastructure and hosting costs for the school?",
      answer:
        "The platform maintains a $0 baseline cost on Vercel and Supabase Free Tiers by offloading parsing to the client browser and leveraging Supabase connection pooling. Indexes on foreign keys ensured query execution times stayed fast without exceeding compute limits.",
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

const owwaCsmrCaseStudy: CaseStudyData = {
  id: "owwa-csmr",
  title: "OWWA CSMR: Internal Citizen Satisfaction Reporting Tool",
  subtitle: "Multi-office survey intake, ARTA/CSC reporting requirements, and in-memory ExcelJS report generation",
  role: "Full-stack Developer",
  institution: "Overseas Workers Welfare Administration (OWWA Region XI)",
  scaleSummary:
    "Built and deployed an internal reporting tool for OWWA Regional Welfare Office XI (Davao Region) that consolidated 72 monthly unit submissions representing 4,632+ citizen feedback records across 10 regional units.",
  metrics: [
    { label: "4,632+", value: "Citizen Feedback Records", desc: "Consolidated feedback records across 10 regional units and 8 cycles" },
    { label: "72", value: "Monthly Submissions", desc: "53 finalized reports + 19 active drafts" },
    { label: "10", value: "Regional Units", desc: "9 frontline units + 1 IT Head consolidator" },
    { label: "<1s", value: "Report Generation Time", desc: "1-click Excel export for ARTA/CSC reporting requirements" },
  ],
  costArchitecture: {
    title: "On-Demand Aggregation vs. Database Bloat",
    points: [
      "Calculated regional summaries in-memory inside Next.js Server Actions instead of persisting pre-aggregated totals in the database, preventing desynchronization when past reports were unlocked for edits.",
      "Kept database storage minimal by storing raw unit submissions as structured JSONB payloads and computing regional totals on export in under 100ms.",
    ],
  },
  problemStatements: [
    {
      title: "Multi-Office Spreadsheet Fragmentation",
      desc: "9 frontline units (Social Benefits, Reintegration, Education, PDOS, etc.) independently formatted and emailed spreadsheets each month. The IT Unit spent 3–4 working days manually fixing broken formulas and consolidating rows.",
    },
    {
      title: "Mathematical Entry Errors at the Source",
      desc: "Encoders frequently made entry errors where demographic and service tallies did not balance with total declared respondents (N), invalidating regional satisfaction percentages.",
    },
    {
      title: "Strict Government Reporting Requirements",
      desc: "Anti-Red Tape Authority (ARTA) and Civil Service Commission (CSC) guidelines require precise formatting, specific cell border styling, and formula rows that standard CSV dumpers cannot output.",
    },
  ],
  architectureSummary:
    "Centralized reporting architecture: Next.js Server Actions with jose JWT session validation, client-side input validation with React Hook Form and Zod, and an in-memory ExcelJS workbook generator.",
  securityPoints: [
    "Stateless JWT Sessions (jose): Verifies office roles and user identity via signed tokens stored in HttpOnly cookies.",
    "PostgreSQL Composite Constraint: Unique compound key on (office_id, month, year) physically prevents accidental duplicate submissions for the same cycle.",
    "JSONB Document Payloads: Stores survey data matrices as JSONB to support changing government service categories without requiring database schema migrations.",
    "Audit Logging: Changes to locked reports and administrative unlock actions are recorded with timestamps and user IDs in an audit_logs table.",
  ],
  deepDives: [
    {
      title: "1. On-Demand Report Aggregation Without Redundant Records",
      challenge:
        "Each office submits nested survey datasets (9 SQD Likert dimensions with 6 rating tiers, 52 services, and demographics). Storing separate pre-calculated summary rows risked data drift whenever an admin unlocked and corrected a unit report.",
      solution:
        "Wrote an in-memory aggregation function in Next.js Server Actions that fetches active unit submissions and reduces the dataset on the fly when generating regional reports.",
      outcome:
        "Eliminated out-of-sync summary records and computed regional totals in under 100ms on demand.",
    },
    {
      title: "2. Generating Multi-Tab Workbooks for ARTA/CSC Reporting with ExcelJS",
      challenge:
        "Government reporting rules from ARTA and CSC require specific cell border hierarchies, header fills, formula rows, and narrative remarks that standard CSV exports cannot satisfy.",
      solution:
        "Built an export script with ExcelJS that maps aggregated survey matrices to the exact cell coordinates, styles, and formulas mandated by regional templates, streaming the finished .xlsx file directly to the user.",
      outcome:
        "Automated a 4-day manual spreadsheet consolidation workflow, reducing report generation time to under 1 second through server-side aggregation with Next.js Server Actions.",
    },
    {
      title: "3. Client-Side Arithmetic Balance Verification with Zod",
      challenge:
        "Staff members frequently entered numbers where demographic or service tallies did not add up to the total number of survey respondents, invalidating percentage metrics.",
      solution:
        "Built interactive matrix inputs with React Hook Form and Zod schema refinements that compare input subtotals against the declared respondent count and highlight mismatches before allowing submission.",
      outcome:
        "Prevented arithmetic entry mistakes before records reached the database, cutting invalid submissions to zero.",
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
        "Uses a multi-step validation approach: on the client, React Hook Form and Zod check that sub-category counts match total respondents. On the server, Server Actions re-validate payloads against Zod schemas before saving to Supabase. For downloads, ExcelJS formats the aggregated numbers into official government report layouts in-memory.",
    },
    {
      question: "How does the system ensure data accuracy and prevent duplicate or unauthorized entries?",
      answer:
        "Enforces integrity checks at both database and auth levels. A compound unique constraint on (office_id, month, year) physically prevents duplicate submissions for any office in a cycle. Stateless jose JWTs verify user and office permissions. Once submitted, records lock into read-only mode, with any administrative super-edits tracked in an immutable audit_logs table.",
    },
  ],
};

const jpIntramsCaseStudy: CaseStudyData = {
  id: "jp-intrams",
  title: "JP Intrams: Real-Time Tournament Leaderboard & Campus Signage",
  subtitle: "Live score synchronization, auto-cycling display mode, and distributed Redis rate limiting",
  role: "Full-stack Developer",
  institution: "St. John Paul II College of Davao (SJPIICD)",
  scaleSummary:
    "Built and deployed a real-time tournament leaderboard and display app for university intramurals. Handled live score updates across 23 events (18 major sports, 4 minor sports, and socio-cultural competitions) for 9 academic departments, displayed live on campus gym projectors, auditorium screens, and student mobile devices.",
  metrics: [
    { label: "9", value: "Academic Units", desc: "Colleges and Senior High School departments competing across brackets" },
    { label: "23", value: "Sports & Events", desc: "18 major sports, 4 minor sports, and socio-cultural competitions" },
    { label: "Real-Time", value: "Score Updates", desc: "Live score synchronization via Supabase Realtime" },
    { label: "100%", value: "Uptime During Games", desc: "Zero downtime recorded across the tournament days" },
  ],
  costArchitecture: {
    title: "Protecting Database Connections Under Concurrent Tournament Traffic",
    points: [
      "Offloaded high-frequency match voting from PostgreSQL to Upstash Redis using atomic SETNX rate-limiting (5 votes/sec/IP), protecting the primary database connection pool from spikes during close games.",
      "Added Cache-Control headers (s-maxage=5, stale-while-revalidate=15) and slight client polling jitter (15s–30s) so simultaneous spectator devices didn't hit the server at the exact same millisecond.",
    ],
  },
  problemStatements: [
    {
      title: "Delayed Scoring & Disconnected Campus Spectators",
      desc: "Scores were traditionally tabulated on manual clipboards and posted hours after games ended. Students scattered across outdoor courts and gymnasiums had no live way to track overall medal standings.",
    },
    {
      title: "Big-Screen Gym & Projector Bottlenecks",
      desc: "Auditorium LED walls and gym projectors required staff to manually refresh browser pages and resize window zoom levels, creating awkward display freezes and downtime during live ceremonies.",
    },
    {
      title: "Simultaneous Traffic During Finals",
      desc: "Championship games caused hundreds of students to check the leaderboard at the same moment, risking database connection spikes on a free-tier hosting plan.",
    },
  ],
  liveDeployment: {
    title: "Main Stage Projector & Quadrangle Display",
    caption:
      "Photograph taken live during tournament play: JP Intrams leaderboard projected onto the main stage in the school quadrangle, showing live standings to students and athletes.",
    image: "/projects/jp-intrams/projector.webp",
    aspect: "16/9",
    tags: ["Main Stage Projector", "School Quadrangle", "Live Tournament Display"],
  },
  architectureSummary:
    "Real-time tournament architecture: Supabase Realtime pushes live score updates to mobile spectator devices and campus displays, distributed Upstash Redis rate limiting prevents PostgreSQL connection exhaustion, and a dedicated auto-cycling /tv route provides a hands-free display for gym projectors.",
  securityPoints: [
    "PostgreSQL Row-Level Security: Score submissions and department points can only be updated by authorized student committee accounts.",
    "Redis Rate-Limiting (SETNX): Caps vote requests to 5 per second per IP to prevent automated voting scripts and spam.",
    "Edge Response Caching: Uses Cache-Control headers (s-maxage=5) to cache public leaderboard data at the CDN edge.",
    "Atomic Database Transactions: Match results and overall medal standings update atomically in PostgreSQL to prevent partial records.",
  ],
  deepDives: [
    {
      title: "1. Real-Time Score Synchronization",
      challenge:
        "When game results were entered, hundreds of students across campus gyms and fields needed to see updated standings without constantly refreshing the page.",
      solution:
        "Subscribed client devices to Supabase Realtime database change channels on points_log. When an official entered points, connected clients received the event and re-fetched the calculated standings, merging in live Redis vote totals.",
      outcome:
        "Updated podium standings and medal tallies appeared on student screens in real time without continuous background polling.",
    },
    {
      title: "2. Hands-Free Projector & Big-Screen Display Mode (/tv)",
      challenge:
        "Campus gym projectors and auditorium screens needed a full-screen display that cycled through standings, recent winners, and podium ranks without an AV operator having to click or scroll.",
      solution:
        "Built a standalone /tv route that automatically rotates between 5 display views every 15 seconds, complete with keyboard controls (Space to pause, Arrows to skip) and responsive sizing for projector resolutions.",
      outcome:
        "Ran unattended on the main quadrangle projector and gymnasium screens throughout the multi-day tournament.",
    },
    {
      title: "3. Distributed Redis Rate Limiting & Concurrent Traffic Buffering",
      challenge:
        "Allowing students to vote and cheer live during matches created short spikes in write traffic that could exhaust PostgreSQL connection limits.",
      solution:
        "Handled spectator voting via Upstash Redis REST calls with atomic SETNX rate limits (5 taps per second per IP), keeping high-frequency write operations completely separate from the relational database.",
      outcome:
        "Maintained responsive voting feedback and zero database connection errors during championship finals.",
    },
  ],
  qaList: [
    {
      question: "How did you handle live score updates without running out of database connections?",
      answer:
        "Clients listened to Supabase Realtime change channels on points_log and departments. When game coordinators entered a score, the event notified connected devices to refresh their cached view. Separating live spectator cheers into Upstash Redis ensured the main database wasn't flooded by vote requests.",
    },
    {
      question: "How does the /tv display mode work on campus projectors?",
      answer:
        "The /tv route was designed specifically for venue screens. It runs an automated interval timer that smoothly cycles through 5 screens: Podium Standings, Full Department Table, Live Vote Meter, Recent Match Results, and Overall Champions. It includes hotkeys (Space to pause/play, Arrows to navigate) so event coordinators could control it easily from an AV laptop.",
    },
    {
      question: "How did you handle traffic surges during championship games?",
      answer:
        "We used two simple safeguards: first, spectator cheers were routed to Upstash Redis with per-IP rate-limiting rather than hitting PostgreSQL. Second, public leaderboard endpoints used Next.js Cache-Control headers (s-maxage=5, stale-while-revalidate=15) so repeated requests from student phones were served directly from the edge cache.",
    },
  ],
};

export const caseStudies: Record<string, CaseStudyData> = {
  "jp-connect": jpConnectCaseStudy,
  "owwa-csmr": owwaCsmrCaseStudy,
  "jp-intrams": jpIntramsCaseStudy,
  "sjp2cd-leaderboard": jpIntramsCaseStudy,
};
