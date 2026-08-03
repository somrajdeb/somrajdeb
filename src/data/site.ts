import photo from "@/assets/somraj.jpg";

export const profile = {
  name: "Somraj Deb",
  roles: ["Software Engineer", "Full-Stack Developer", "AI Automation Developer"],
  tagline:
    "Building scalable software, intelligent automation systems, and modern web applications.",
  photo,
  location: "Agartala, India",
  email: "somrajdeb70@gmail.com",
  github: "https://github.com/somrajdeb",
  githubUser: "somrajdeb",
  linkedin: "https://www.linkedin.com/in/somrajdeb",
  resume: "/resume.pdf",
  badges: [
    "Computer Engineering Student",
    "Software Engineering Intern",
    "Open to Internships",
    "India",
  ],
  bio: [
    "I'm a computer engineering student and software engineer who cares about how systems behave under real load — not just whether they compile. My work sits between backend engineering and applied automation: designing APIs, modelling data, and wiring intelligent workflows that remove manual effort from real organisations.",
    "My engineering journey started with curiosity about how large products stay fast and reliable for millions of people. That pulled me into backend systems, distributed architecture, cloud infrastructure, and more recently AI-driven automation — where a well-designed pipeline can replace hours of repetitive human work.",
    "Today I build production software end to end: Spring Boot services and REST APIs, React and TypeScript interfaces, and automation systems that connect models, databases, and business tooling. The long-term goal is simple — write software that millions of people rely on without ever thinking about it.",
  ],
};

export const timeline = [
  {
    year: "2024",
    items: ["Started Computer Engineering"],
  },
  {
    year: "2025",
    items: [
      "Started Full Stack Development",
      "Built AI Automation Systems",
      "Built Corporate Websites",
    ],
  },
  {
    year: "2026",
    items: [
      "Software Engineering Intern at NIC",
      "Built Visitor Management System",
      "Worked with Spring Boot, REST APIs and Java",
    ],
  },
  {
    year: "Current goal",
    items: ["Software Engineering Internship at top MNCs"],
  },
];

export const experience = [
  {
    role: "Software Engineering Intern",
    company: "National Informatics Centre (NIC)",
    duration: "2026",
    responsibilities: [
      "Engineered a Visitor Management System used for government campus access control.",
      "Designed and implemented REST APIs with Spring Boot and relational data models in SQL.",
      "Collaborated with senior engineers on code review, security requirements and deployment.",
    ],
    tech: ["Java", "Spring Boot", "REST APIs", "SQL", "Git"],
    achievements: [
      "Digitised a fully manual visitor register into an auditable, searchable system.",
      "Reduced visitor check-in handling time through pre-registration and pass generation.",
    ],
  },
  {
    role: "AI Automation Developer",
    company: "Self Employed",
    duration: "2025 — Present",
    responsibilities: [
      "Built AI voice and workflow automation systems for small businesses and clinics.",
      "Designed n8n pipelines integrating speech models, LLMs, calendars and databases.",
      "Handled prompt design, error handling, retries and observability for live workflows.",
    ],
    tech: ["n8n", "Python", "Node.js", "LLM APIs", "Supabase", "Webhooks"],
    achievements: [
      "Delivered a 24/7 AI receptionist that answers calls and books appointments unattended.",
      "Removed hours of daily manual data entry through event-driven automation.",
    ],
  },
  {
    role: "Full Stack Developer",
    company: "Self Employed",
    duration: "2025 — Present",
    responsibilities: [
      "Built responsive, accessible corporate websites and internal dashboards end to end.",
      "Implemented authentication, database schemas, API layers and deployment pipelines.",
      "Owned performance, SEO and Core Web Vitals for every shipped project.",
    ],
    tech: ["React", "TypeScript", "Tailwind CSS", "Node.js", "MongoDB", "Supabase"],
    achievements: [
      "Shipped production sites scoring in the high 90s on Lighthouse across all categories.",
    ],
  },
  {
    role: "E-commerce Website Developer",
    company: "Self Employed",
    duration: "2025",
    responsibilities: [
      "Designed and launched WordPress/WooCommerce storefronts with payment integration.",
      "Configured catalogues, checkout flows, shipping rules and analytics.",
      "Optimised page speed, image delivery and on-page SEO for conversion.",
    ],
    tech: ["WordPress", "WooCommerce", "PHP", "SEO", "Payment Gateways"],
    achievements: ["Launched fully self-serve storefronts handed over to non-technical owners."],
  },
];

export type Project = {
  slug: string;
  title: string;
  summary: string;
  year: string;
  tech: string[];
  github?: string;
  demo?: string;
  overview: string;
  architecture: string[];
  features: string[];
  challenges: string[];
  lessons: string[];
  image: string;
};

export const projects: Project[] = [
  {
    slug: "ai-voice-receptionist",
    title: "AI Voice Receptionist",
    summary:
      "An always-on voice agent that answers business calls, understands intent, and books appointments directly into the calendar.",
    year: "2025",
    tech: ["n8n", "Python", "LLM APIs", "Speech-to-Text", "Supabase", "Webhooks"],
    github: "https://github.com/somrajdeb",
    overview:
      "A production voice automation system that replaces a front-desk receptionist for small businesses. Incoming calls are transcribed in real time, interpreted by a language model constrained to business rules, and resolved into concrete actions: booking, rescheduling, answering FAQs or escalating to a human.",
    architecture: [
      "Telephony webhook receives the call and streams audio to a speech-to-text service.",
      "An orchestration layer in n8n routes the transcript through intent classification.",
      "A constrained LLM prompt produces structured JSON actions rather than free text.",
      "Action handlers write to the calendar and a Supabase datastore, with retries and idempotency keys.",
      "Text-to-speech returns the reply to the caller; every turn is logged for audit and evaluation.",
    ],
    features: [
      "Natural, low-latency conversation with barge-in handling",
      "Appointment booking, rescheduling and cancellation",
      "Business-hours and service-catalogue awareness",
      "Automatic human escalation on low confidence",
      "Full call transcript and action log per conversation",
    ],
    challenges: [
      "Keeping round-trip latency low enough that the conversation feels human.",
      "Preventing model hallucination on availability by making the calendar the source of truth.",
      "Designing idempotent booking so a retried webhook never double-books a slot.",
    ],
    lessons: [
      "Constrain models to structured output and let deterministic code own side effects.",
      "Observability matters more than prompt cleverness once a system is live.",
    ],
    image: "/projects/ai-voice-receptionist.jpg",
  },
  {
    slug: "visitor-management-system",
    title: "Visitor Management System",
    summary:
      "A Spring Boot platform for government campus access: pre-registration, approval workflow, pass generation and auditable visit history.",
    year: "2026",
    tech: ["Java", "Spring Boot", "REST APIs", "SQL", "React", "JWT"],
    overview:
      "Built during my internship at the National Informatics Centre to replace a paper visitor register. Visitors pre-register or are registered at the gate, hosts approve requests, and the system issues a time-bound pass with a complete audit trail of every entry and exit.",
    architecture: [
      "Spring Boot REST API layered into controllers, services and JPA repositories.",
      "Relational schema for visitors, hosts, departments, visits and passes with referential integrity.",
      "Role-based access control with JWT sessions for gate staff, hosts and administrators.",
      "React front end consuming the API, with server-side pagination and filtering.",
    ],
    features: [
      "Visitor pre-registration and walk-in registration",
      "Host approval workflow with notifications",
      "Time-bound digital gate pass generation",
      "Check-in / check-out with live on-campus visitor count",
      "Searchable, exportable audit history",
    ],
    challenges: [
      "Modelling recurring and multi-person visits without duplicating visitor records.",
      "Enforcing authorisation consistently across every endpoint, not just the UI.",
      "Handling gate operations gracefully when connectivity is intermittent.",
    ],
    lessons: [
      "Getting the data model right early removes entire classes of bugs later.",
      "Government software lives and dies on auditability — log the decision, not just the result.",
    ],
    image: "/projects/visitor-management-system.jpg",
  },
  {
    slug: "corporate-websites",
    title: "Corporate Websites",
    summary:
      "Fast, accessible marketing sites for real businesses — designed, built and deployed end to end with measurable performance budgets.",
    year: "2025",
    tech: ["React", "TypeScript", "Tailwind CSS", "SEO", "Vercel"],
    overview:
      "A body of client work building corporate web presences: information architecture, design system, implementation, SEO and deployment. Each build is treated as a product with performance and accessibility budgets rather than a one-off template drop.",
    architecture: [
      "Component-driven React front end with a token-based design system.",
      "Content separated into typed data modules so clients can update copy safely.",
      "Static rendering with image optimisation and CDN delivery.",
      "Structured data, sitemaps and canonical URLs configured per site.",
    ],
    features: [
      "Responsive layouts across desktop, tablet and mobile",
      "WCAG-conscious semantics, contrast and keyboard navigation",
      "Contact and enquiry flows wired to real inboxes",
      "Analytics and search-console integration",
    ],
    challenges: [
      "Balancing rich visual design against strict performance budgets.",
      "Making content editable by non-technical owners without a heavy CMS.",
    ],
    lessons: [
      "A design system pays for itself by the second page.",
      "Clients feel speed before they notice design.",
    ],
    image: "/projects/corporate-website.jpg",
  },
  {
    slug: "weather-forecast-desktop-app",
    title: "Weather Forecast Desktop Application",
    summary:
      "A native desktop client that fetches live forecast data, caches it offline, and presents multi-day conditions in a clean interface.",
    year: "2025",
    tech: ["Python", "REST APIs", "Tkinter", "SQLite", "Threading"],
    github: "https://github.com/somrajdeb",
    overview:
      "A desktop weather application built to practise API integration, concurrency and local persistence outside the browser. It queries a weather API for current conditions and multi-day forecasts, caches responses locally, and stays responsive while network calls are in flight.",
    architecture: [
      "UI layer kept separate from a service layer that owns all network access.",
      "Background threads for API calls so the interface never blocks.",
      "SQLite cache with TTL so recently viewed cities work offline.",
      "Defensive parsing and typed models around the third-party API response.",
    ],
    features: [
      "Current conditions with feels-like, humidity and wind",
      "Multi-day forecast view",
      "Saved locations with quick switching",
      "Offline fallback from local cache",
    ],
    challenges: [
      "Keeping the UI thread free while handling slow or failing network calls.",
      "Deciding sensible cache invalidation for data that changes hourly.",
    ],
    lessons: [
      "Concurrency bugs surface fastest in UI code — isolate side effects early.",
      "Every third-party API needs a defensive boundary around it.",
    ],
    image: "/projects/weather-forecast-desktop-app.jpg",
  },
  {
    slug: "wordpress-ecommerce-platform",
    title: "WordPress E-commerce Platform",
    summary:
      "A complete WooCommerce storefront with catalogue, payments, shipping logic and a handover process for non-technical owners.",
    year: "2025",
    demo: "https://naturalispure.com",
    tech: ["WordPress", "WooCommerce", "PHP", "MySQL", "Payment Gateways"],
    overview:
      "An end-to-end online store built for a retail client: theme customisation, product catalogue modelling, checkout and payment integration, shipping rules, and performance tuning — plus documentation so the owner can run it independently.",
    architecture: [
      "WooCommerce data model configured for variable products and stock tracking.",
      "Custom theme layer over a lightweight base theme, avoiding plugin bloat.",
      "Payment gateway and order-notification integration.",
      "Caching, image compression and lazy loading for storefront speed.",
    ],
    features: [
      "Product catalogue with variants and inventory",
      "Secure checkout with online payments",
      "Zone-based shipping and tax rules",
      "Order management and email notifications",
      "SEO-ready product and category pages",
    ],
    challenges: [
      "Keeping the site fast despite the plugin ecosystem's default weight.",
      "Making the admin experience simple enough for a non-technical operator.",
    ],
    lessons: [
      "Removing plugins is usually a bigger performance win than adding a caching one.",
      "A handover doc is part of the deliverable, not an afterthought.",
    ],
    image: "/projects/ecommerce-store.jpg",
  },
];

export const skills = [
  {
    category: "Programming Languages",
    items: ["Java", "Python", "C++", "JavaScript", "TypeScript"],
  },
  { category: "Frontend", items: ["React", "HTML", "CSS", "Tailwind CSS"] },
  { category: "Backend", items: ["Spring Boot", "Node.js", "REST APIs"] },
  { category: "Databases", items: ["SQL", "MongoDB", "Supabase"] },
  { category: "Developer Tools", items: ["Git", "GitHub", "VS Code", "n8n"] },
];

export const certifications = [
  {
    name: "Summer Internship — Visitor Module of NextGen HRMS",
    issuer: "National Informatics Centre (NIC), Govt. of India",
    date: "Jul 2026",
    url: "/certs/nic-internship.pdf",
  },
  {
    name: "Become a Full-Stack Web Developer",
    issuer: "LinkedIn Learning",
    date: "Feb 2026",
    url: "/certs/fullstack-web-developer.pdf",
  },
  {
    name: "Become a Programmer: Foundations",
    issuer: "LinkedIn Learning",
    date: "Feb 2026",
    url: "/certs/programmer-foundations.pdf",
  },
  {
    name: "Introduction to Internet of Things",
    issuer: "NPTEL — IIT",
    date: "Apr 2026",
    url: "/certs/nptel-iot.pdf",
  },
  {
    name: "Agentic Artificial Intelligence: Harnessing AI Agents",
    issuer: "LinkedIn Learning",
    date: "Jun 2025",
    url: "/certs/agentic-ai.pdf",
  },
  {
    name: "Artificial Intelligence and Business Strategy",
    issuer: "LinkedIn Learning",
    date: "Jul 2025",
    url: "/certs/ai-business-strategy.pdf",
  },
  {
    name: "Artificial Intelligence and Business Strategy: Case Studies",
    issuer: "LinkedIn Learning",
    date: "Jul 2025",
    url: "/certs/ai-business-strategy-case-studies.pdf",
  },
  {
    name: "Using Databases with Python",
    issuer: "University of Michigan — Coursera",
    date: "Sep 2025",
    url: "/certs/databases-with-python.pdf",
  },
  {
    name: "Python Data Analytics",
    issuer: "Meta — Coursera",
    date: "Aug 2025",
    url: "/certs/python-data-analytics.pdf",
  },
  {
    name: "Python Basics Specialization (4 Courses)",
    issuer: "Codio — Coursera",
    date: "Feb 2025",
    url: "/certs/coursera-python-specialization.pdf",
  },
];


export const navLinks = [
  { label: "About", href: "/#about" },
  { label: "Experience", href: "/#experience" },
  { label: "Projects", href: "/#projects" },
  { label: "Skills", href: "/#skills" },
  { label: "GitHub", href: "/#github" },
  { label: "Contact", href: "/#contact" },
];
