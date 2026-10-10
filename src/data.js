export const profile = {
  name: "Andrew Evboifo",
  email: "andrew.evboifo1@gmail.com",
  github: "https://github.com/stat3m3nt",
  linkedin: "https://www.linkedin.com/in/andrew-evboifo-78a655187",
  oldPortfolio: "https://stat3m3nts-portfolio.netlify.app/",
};

export const nav = [
  ["summary", "Summary"],
  ["education", "Education"],
  ["skills", "Skills"],
  ["projects", "Projects"],
  ["resume", "Resume"],
  ["contact", "Contact"],
];

export const education = [
  {
    title: "Computer Systems Technology, Software Development (co-op)",
    meta: "Mohawk College, Hamilton, Ontario. Expected graduation: 2027",
    text: "A three-year advanced diploma program in full-stack software development with paid co-op terms. I've used it to build real projects alongside coursework, including a portfolio mapped to the program's vocational standards (VS1 to VS13) for prior learning assessment.",
  },
  {
    title: "Microsoft Azure Fundamentals",
    meta: "Certification exam in progress",
    text: "Studying cloud basics (core services, security, pricing and governance) to deploy and operate my backends with more confidence.",
  },
  {
    title: "Civil engineering background",
    meta: "Prior studies and field exposure",
    text: "My earlier engineering training shaped how I approach software: requirements first, documented decisions, and designs that account for failure before it happens.",
  },
];

export const skills = [
  ["Frontend", ["Next.js (App Router)", "React", "TypeScript", "Zustand", "Zod", "Tailwind CSS", "Bootstrap", "HTML", "CSS", "JavaScript"]],
  ["Mobile", ["React Native", "Expo", "expo-router", "react-native-maps", "AsyncStorage"]],
  ["Backend", ["ASP.NET Core", "C#", "Entity Framework Core", "Clean Architecture", "REST API design", "Java", "Python"]],
  ["Data and services", ["PostgreSQL", "MySQL", "SQL Server", "Supabase Auth", "Row-level security", "Sanity CMS", "Stripe", "Resend", "Google Maps API"]],
  ["Tooling and delivery", ["Git and GitHub", "Jest", "Vercel", "Netlify", "WordPress", "Azure (learning)"]],
];

export const leadProject = {
  category: "Full-stack",
  status: "Live, built for a client",
  title: "MFG: Mama's Fried Goods",
  text: "A full-stack food delivery platform for a real London food business specialising in Nigerian cuisine and comfort food. Customers browse a rotating menu, add items to a cart and pay online. The owner manages the menu through Sanity CMS without needing any code changes.",
  points: [
    "CMS-driven rotating menu: the owner publishes dishes and the site updates within 60 seconds",
    "Stripe webhook saves each order to PostgreSQL only after payment succeeds",
    "Automated confirmation email to the customer and notification email to the owner through Resend",
    "Admin order dashboard protected by a secret key",
    "All monetary values stored in pence to avoid floating-point precision bugs",
  ],
  flow: [
    ["Sanity CMS", "Owner publishes the menu"],
    ["Next.js on Vercel", "Menu refreshes within 60 s"],
    ["Stripe Checkout", "Customer pays"],
    ["Webhook", "Order saved to PostgreSQL"],
    ["Resend", "Customer and owner emailed"],
  ],
  tags: ["Next.js", "TypeScript", "Sanity CMS", "Stripe", "Supabase", "Zustand", "Zod", "Resend", "Vercel"],
  live: "https://mfg-food-delivery.vercel.app",
  repo: "https://github.com/stat3m3nt/mfg-food-delivery",
};

export const projects = [
  {
    category: "Full-stack",
    status: "In development",
    title: "PropertyOS",
    text: "A multi-tenant SaaS platform for managing commercial property, currently in the first sprint of a 12-sprint roadmap.",
    points: [
      "62-table PostgreSQL schema with row-level security for tenant isolation",
      "API specified across 45 domain controllers, with role-based access control",
      "ASP.NET Core 9 backend in Clean Architecture layers",
    ],
    tags: ["ASP.NET Core", "EF Core", "Next.js", "Supabase", "Stripe"],
  },
  {
    category: "Mobile",
    status: "Mobile app",
    title: "CityFix",
    text: "A cross-platform app for reporting municipal infrastructure issues such as potholes, broken streetlights and damaged sidewalks.",
    points: [
      "GPS location, photos and severity levels on every report",
      "Interactive map with live markers and a filter dashboard",
      "Local persistence with AsyncStorage, routing with Expo Router",
    ],
    tags: ["React Native", "Expo", "TypeScript", "Maps", "Camera"],
    repo: "https://github.com/Stat3m3nt/cityfix",
  },
  {
    category: "Web",
    status: "Web app",
    title: "Vine & Dine Winery Explorer",
    text: "An interactive discovery site for exploring Niagara wine destinations on a map.",
    points: [
      "Custom map markers and info windows for each winery",
      "Category filters and route generation with directions",
      "Responsive interface built with Bootstrap and custom styling",
    ],
    tags: ["JavaScript", "Bootstrap", "Google Maps API"],
    repo: "https://github.com/Stat3m3nt/vine-and-dine-winery-explorer",
  },
  {
    category: "Web",
    status: "Front-end app",
    title: "Reactive Deck",
    text: "A React app that simulates a full 52-card deck with interactive dealing, tossing, regrouping and wildcards.",
    points: [
      "Shuffled deck generated and managed through reusable utilities",
      "Game-style controls driven by component state",
      "Component-based architecture, bundled with Vite",
    ],
    tags: ["React", "Vite", "JavaScript", "CSS"],
    repo: "https://github.com/Stat3m3nt/reactive-deck-of-cards",
  },
  {
    category: "Web",
    status: "CMS site",
    title: "Pawffee Break",
    text: "A branded pet café website built on a custom WordPress child theme with reusable block patterns.",
    points: [
      "Customized a block-based theme through a child theme",
      "Plugin integrations for added functionality and content structure",
      "Focused on layout consistency, branding and responsive design",
    ],
    tags: ["WordPress", "PHP", "CSS", "Block themes"],
    repo: "https://github.com/Stat3m3nt/pawffee-break-website",
  },
];
