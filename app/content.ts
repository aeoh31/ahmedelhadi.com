// Every fact on the site lives here. Keep it in sync with the master resume.

export const PROFILE = {
  name: "Ahmed Elhadi",
  title: "Senior Software Engineer",
  location: "Abu Dhabi, UAE",
  timezone: "GMT+4",
  email: "ahmedelhadi.oh@gmail.com",
  linkedin: "https://linkedin.com/in/ahmed-elhadi",
  linkedinLabel: "linkedin.com/in/ahmed-elhadi",
  resume: "/resume.pdf",
  availability: "Available now",
  openTo: "Remote, or on site in Abu Dhabi and Dubai",
};

export const HERO = {
  headline: "I build the platforms teams run on.",
  intro:
    "Software engineer with 5+ years building production platforms end to end, from APIs and event-driven services to the dashboards people use every day. Backend-heavy full stack work across fintech, live events and AI automation, running on AWS.",
};

export const STATS = [
  { value: "5+", label: "years shipping production software" },
  { value: "99.9%", label: "platform uptime at 7 Pulse" },
  { value: "−80%", label: "API response times after tuning" },
  { value: "25h", label: "manual work automated each week" },
];

export const ABOUT = [
  "I'm a software engineer based in Abu Dhabi. My day-to-day is Node.js, TypeScript and NestJS on the server and React and Next.js on the front end, and I've shipped production code in Python (FastAPI) and Java (Spring Boot) too.",
  "At AlphaForge I helped lead a white-label trading platform for several clients: market data, order execution, broker integrations, KYC and payments, on Kafka and RabbitMQ. At 7 Pulse Events I built the company's event platform end to end, from the internal dashboard and CRM to the public sites and the AWS infrastructure underneath.",
  "Lately I bring AI into real workflows: n8n automations wired into internal tools, MCP servers, and LLM features built straight into Node.js services.",
];

export const FOCUS = [
  { title: "Fintech & trading", body: "Market data, order execution, broker integrations, KYC and payments." },
  { title: "Event platforms", body: "Internal dashboards, inventory, storyboards and lead tracking." },
  { title: "Real-time systems", body: "WebSockets, streaming prices, Kafka and RabbitMQ event backbones." },
  { title: "AI & automation", body: "n8n agent workflows, MCP servers, LLM integrations and RAG." },
];

export const EXPERIENCE = [
  {
    role: "Senior Software Engineer",
    org: "7 Pulse Events",
    place: "Dubai",
    dates: "Feb 2024 — Present",
    bullets: [
      "Delivered a company-wide event management platform by building and owning the internal dashboard, public event websites and AWS infrastructure end to end.",
      "Replaced manual event operations for sales, organizers and managers, saving about 15 hours a week, by building a dashboard for storyboards, inventory, event planning and lead tracking.",
      "Cut API response times by 80% by building REST APIs with Node.js and NestJS, adding Redis caching, fixing N+1 queries and tuning PostgreSQL and MongoDB indexes.",
      "Saved the team about 10 hours a week by introducing AI workflows in n8n and wiring them into the dashboard.",
      "Kept the platform at 99.9% uptime by running it on AWS with Docker, EC2, S3, CloudFront, RDS, DynamoDB and SNS.",
    ],
    more: [
      "Gave operations teams a fast, consistent dashboard by building it in React and Next.js with Tailwind CSS and shadcn/ui, using TanStack Query for server state and Zustand for UI state.",
      "Gave managers live visibility into inventory and events by building reporting views with Recharts and D3.js.",
      "Kept public event websites current for about 5,000 monthly visitors by maintaining live event data, contact and lead forms, and real-time updates over WebSockets.",
      "Improved search visibility and page speed of the public event websites by building them in Next.js with server-side rendering.",
      "Raised code quality across the team by setting coding standards through code reviews, testing and documentation, and by mentoring junior engineers.",
      "Shipped features that matched business needs by working with product and design to turn requirements into releases across the dashboard and public sites.",
    ],
    stack: ["NestJS", "TypeScript", "React", "Next.js", "PostgreSQL", "MongoDB", "Redis", "AWS", "n8n"],
  },
  {
    role: "Software Engineer",
    org: "AlphaForge Labs",
    place: "Dubai",
    dates: "Feb 2022 — Feb 2024",
    bullets: [
      "Delivered a bespoke white-label trading platform to multiple clients by owning products end to end, from requirements and planning to delegation, deployment and monitoring.",
      "Enabled live trading for clients by building market data and order execution services and integrating third-party brokers.",
      "Gave traders real-time market views by building React and Next.js trading screens that stream prices over WebSockets into live charts.",
      "Secured onboarding and money movement by designing authentication, KYC and payment workflows with third-party providers.",
      "Enabled real-time data flow between trading services by building event-driven microservices on Kafka and RabbitMQ.",
    ],
    more: [
      "Let each client launch under its own brand from one codebase by building a themeable white-label UI with Material Design components and Tailwind CSS.",
      "Kept the trading UI responsive under high-frequency updates by managing order books, positions and account data with Redux and TanStack Query.",
      "Protected financial data across client apps by designing secure REST and GraphQL APIs with Node.js and NestJS.",
      "Shipped reliably to production by deploying to AWS and Azure with Docker and Kubernetes, working with DevOps on CI/CD and monitoring.",
      "Improved backend performance and stability through testing, monitoring and PostgreSQL and MongoDB tuning.",
      "Kept delivery on track by planning sprints, delegating work across the engineering team and setting code review and documentation standards.",
    ],
    stack: ["Node.js", "TypeScript", "Kafka", "RabbitMQ", "PostgreSQL", "React", "AWS", "Azure"],
  },
  {
    role: "Software Engineer",
    org: "Shadil Trading",
    place: "Sharjah",
    dates: "Jul 2021 — Jan 2022",
    bullets: [
      "Supported ERP inventory, orders and invoicing by building backend services and APIs with Node.js and Express.js.",
      "Gave staff usable ERP screens by building them in Vue.js with Pinia and Bootstrap.",
      "Sped up reports and page loads by tuning PostgreSQL queries and schemas.",
    ],
    more: [
      "Upheld code quality by taking part in code reviews and testing.",
    ],
    stack: ["Express.js", "Vue.js", "PostgreSQL"],
  },
  {
    role: "Software Engineer Intern",
    org: "Sharjah Sports Council",
    place: "Sharjah",
    dates: "Jan 2021 — Apr 2021",
    bullets: [
      "Shipped full stack features with React and Node.js, testing and debugging them before release.",
      "Built responsive pages with React and Bootstrap, using the Context API for shared state.",
    ],
    stack: ["React", "Node.js", "Bootstrap"],
  },
];

export const EDUCATION = {
  degree: "BSc IT Networking & Security",
  school: "Ajman University",
  dates: "2017 — 2021",
};

export const WORK = [
  {
    tag: "Fintech",
    visual: "trading",
    title: "White-label trading platform",
    org: "AlphaForge Labs",
    problem: "Several clients each needed a trading platform under their own brand.",
    built: "One themeable codebase with market data, order execution, broker integrations, KYC and payments, streaming live prices to React trading screens over WebSockets.",
    outcome: "Multiple client brands launched from one codebase, backed by an event-driven Kafka and RabbitMQ core on AWS and Azure.",
    stack: ["Node.js", "TypeScript", "Kafka", "RabbitMQ", "PostgreSQL", "React"],
  },
  {
    tag: "Internal tools",
    visual: "ops",
    title: "Event operations hub",
    org: "7 Pulse Events",
    problem: "Event operations for sales, organizers and managers were run by hand.",
    built: "An internal dashboard and CRM for storyboards, inventory, event planning, reporting and leads from the public sites.",
    outcome: "Used by 40 staff across about 30 events a year, saving roughly 15 hours of manual work every week.",
    stack: ["NestJS", "React", "PostgreSQL", "MongoDB", "AWS"],
  },
  {
    tag: "Real-time web",
    visual: "live",
    title: "Live event websites",
    org: "7 Pulse Events",
    problem: "Each event needed a fast public site with live details and a way to capture leads.",
    built: "Next.js sites with server-side rendering for speed and SEO, live event data over WebSockets, and forms that send leads straight to the CRM.",
    outcome: "About 5,000 visitors a month on a platform kept at 99.9% uptime.",
    stack: ["Next.js", "Socket.io", "Node.js", "CloudFront"],
  },
  {
    tag: "AI",
    visual: "ai",
    title: "AI automation layer",
    org: "7 Pulse Events",
    problem: "The team spent hours every week on repetitive manual work.",
    built: "n8n agent workflows, MCP servers and LLM calls from Node.js, wired into the internal dashboard.",
    outcome: "About 10 hours a week handed back to the team.",
    stack: ["n8n", "MCP", "OpenAI", "Claude", "Node.js"],
  },
];

export const SKILLS = [
  { group: "Backend", items: ["Node.js", "TypeScript", "NestJS", "Express.js", "Python · FastAPI", "Java · Spring Boot", "REST", "GraphQL", "WebSockets"] },
  { group: "Frontend", items: ["React", "Next.js", "Vue.js", "Nuxt", "Tailwind CSS", "Redux", "Zustand", "TanStack Query"] },
  { group: "Data & messaging", items: ["PostgreSQL", "MongoDB", "MySQL", "Redis", "DynamoDB", "Kafka", "RabbitMQ"] },
  { group: "Cloud & delivery", items: ["AWS", "Azure", "GCP", "Docker", "Kubernetes", "Terraform", "Jenkins", "CI/CD"] },
  { group: "AI & automation", items: ["n8n", "MCP servers", "LLM APIs", "RAG", "AI coding agents"] },
  { group: "Quality", items: ["Jest", "Cypress", "Playwright", "Code review", "Mentoring"] },
];

export const LANGUAGES = ["Arabic", "English"];
