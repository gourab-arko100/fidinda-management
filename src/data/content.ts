/**
 * ============================================================
 *  FIDINDA MANAGEMENT SOLUTIONS — SITE CONTENT
 * ============================================================
 *  All editable text for the website lives in this one file.
 *  Change wording, phone numbers, links, services, FAQs or
 *  resources here — the pages update automatically.
 * ============================================================
 */

export type IconName =
  | "building"
  | "heartHandshake"
  | "globe"
  | "landmark"
  | "fileCheck"
  | "clipboard"
  | "cloud"
  | "chart"
  | "graduation"
  | "target"
  | "shield"
  | "search"
  | "trending"
  | "compass"
  | "settings"
  | "activity"
  | "handshake"
  | "sparkles"
  | "users"
  | "clock"
  | "lock"
  | "layers"
  | "lightbulb"
  | "award"
  | "code"
  | "smartphone"
  | "creditCard"
  | "message"
  | "monitor"
  | "database"
  | "cart"
  | "wrench"
  | "languages"
  | "banknote"
  | "mapPin";

/* ------------------------------------------------------------------ */
/*  Company / contact details                                          */
/* ------------------------------------------------------------------ */

// TODO: replace with the Fidinda Financial Solutions site URL once it is deployed.
const FINANCIAL_SITE_URL = "https://fidindasolutions.com";

export const site = {
  name: "Fidinda Management Solutions",
  shortName: "Fidinda Management",
  group: "Fidinda Solutions",
  tagline: "Business & Organisational Consultancy",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://fidinda-management.vercel.app",
  email: "support@fidindasolutions.com",
  location: "Phnom Penh, Cambodia",
  phones: [
    { label: "Khmer", display: "+855-12877547", tel: "+85512877547" },
    { label: "English", display: "+855-17457244", tel: "+85517457244" },
  ],
  // Floating contact button. WhatsApp: number in international format without "+".
  whatsappNumber: "85517457244",
  whatsappMessage: "Hello Fidinda Management Solutions, I would like to ask about your services.",
  // Telegram: a t.me username link works best (e.g. https://t.me/fidinda_solutions).
  telegramUrl: "https://t.me/+85517457244",
  financialSiteUrl: FINANCIAL_SITE_URL,
  website: { label: "www.fidindasolutions.com", href: "https://fidindasolutions.com" },
  socials: [
    { name: "Facebook", href: "https://www.facebook.com/share/19r5ibhQkV/", icon: "facebook" as const },
    {
      name: "Instagram",
      href: "https://www.instagram.com/fidinda.solutions?utm_source=qr&dlrf=MWU3N3g3ZmV5ZGcxMA==",
      icon: "instagram" as const,
    },
    { name: "TikTok", href: "https://www.tiktok.com/@fidinda.solutions?_r=1&_t=ZS-9AnXoqbmtSW", icon: "tiktok" as const },
  ],
  // Google Maps embed URL — replace with the office's own embed link
  // (Google Maps → Share → Embed a map → copy the src="..." value).
  mapEmbedUrl: "https://www.google.com/maps?q=Phnom+Penh,+Cambodia&output=embed",
  copyright:
    "© 2026 Fidinda Management Solutions. All rights reserved. A division of Fidinda Financial and Management Solutions Co., Ltd.",
  slogan: "One Brand. Four Specialised Solutions. A Shared Commitment to Excellence.",
  footerBlurb:
    "Helping businesses, NGOs and institutions in Cambodia register with confidence, manage projects well, adopt the right technology and make decisions backed by evidence.",
};

/* ------------------------------------------------------------------ */
/*  Photos (free Unsplash images, hotlinked).                          */
/*  To use your own: put files in /public/images and use "/images/x.jpg" */
/* ------------------------------------------------------------------ */

const u = (id: string) => `https://images.unsplash.com/${id}`;

export const images = {
  heroCity: u("photo-1723358049559-4f98d449ab92"), // Phnom Penh skyline
  /* People photos: Southeast Asian professionals (free Unsplash licence). */
  aboutMain: u("photo-1754531976828-69e42ce4e0d9"), // Asian business team around a table — Gatot Adri
  aboutSmall: u("photo-1577415124269-fc1140a69e91"), // two colleagues in a Kuala Lumpur office, Malaysia — Muhammad Faiz Zulkeflee
  whyUs: u("photo-1681569685386-b7bda397672e"), // two colleagues working at a laptop — Thant Zin
  cta: u("photo-1672917187338-7f81ecac3d3f"), // Indonesian team meeting in an office — Edi Kurniawan
  resources: u("photo-1454165804606-c3d57bc86b40"), // documents & laptop
  contact: u("photo-1723358049559-4f98d449ab92"),
  quote: u("photo-1665224751641-8ea911ca2267"), // businesswoman in a suit — Ky Nang
  services: u("photo-1754531976828-69e42ce4e0d9"), // Asian business team — Gatot Adri
  vision: "/images/vision.jpg", // businesswoman with binoculars looking toward a stairway and open door
  mission: u("photo-1672917187338-7f81ecac3d3f"), // Indonesian team meeting in an office — Edi Kurniawan
};

/** Builds an optimised Unsplash URL (ignored for local /images files). */
export const img = (src: string, w = 1200) =>
  src.startsWith("http") ? `${src}?auto=format&fit=crop&w=${w}&q=75` : src;

export const seo = {
  homeTitle:
    "Fidinda Management Solutions | Business Registration, NGO Registration & Consultancy in Phnom Penh",
  description:
    "Business and NGO registration, contract and project management, software and cloud solutions, research, M&E and advisory services for organisations in Phnom Penh, Cambodia.",
  keywords: [
    "business registration Cambodia",
    "NGO registration Phnom Penh",
    "INGO registration Cambodia",
    "project management Cambodia",
    "monitoring and evaluation Cambodia",
    "feasibility study Phnom Penh",
    "consultancy Phnom Penh",
    "Fidinda",
  ],
};

/* ------------------------------------------------------------------ */
/*  Divisions (cross-links)                                            */
/* ------------------------------------------------------------------ */

export const divisions = [
  {
    name: "Fidinda Financial Solutions",
    description: "Accounting, tax registration and filing, payroll and financial audit services.",
    href: FINANCIAL_SITE_URL,
    current: false,
  },
  {
    name: "Fidinda Management Solutions",
    description: "Registration, project management, technology, research and capacity building.",
    href: "/",
    current: true,
  },
  {
    name: "Fidinda Health Solutions",
    description: "Health-focused services and solutions for individuals and organisations.",
    href: "https://fidinda-health.vercel.app",
    current: false,
  },
  {
    name: "Fidinda Travel Solutions",
    description: "Travel planning, visas, tickets and tour services in and beyond Cambodia.",
    href: "https://fidinda-travel.vercel.app",
    current: false,
  },
];

export const groupLink = { name: "Fidinda Solutions group", href: "https://fidindasolutions.com" };

/* ------------------------------------------------------------------ */
/*  Navigation                                                         */
/* ------------------------------------------------------------------ */

export const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Resources", href: "/resources" },
  { label: "Request a Quote", href: "/request-quotation" },
  { label: "Contact Us", href: "/contact" },
];

/** Footer link columns (Services column is generated from the services list). */
export const footerColumns = {
  forClients: {
    title: "For Clients",
    links: [
      { label: "Request a Quote", href: "/request-quotation" },
      { label: "Articles", href: "/resources#articles" },
      { label: "Publications", href: "/resources#publications" },
      { label: "All Resources", href: "/resources" },
    ],
  },
  company: {
    title: "Company",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Vision & Mission", href: "/about#mission-vision" },
      { label: "Contact Us", href: "/contact" },
    ],
  },
  divisions: {
    title: "Our Divisions",
    links: [
      { label: "Financial Solutions", href: FINANCIAL_SITE_URL },
      { label: "Health Solutions", href: "https://fidinda-health.vercel.app" },
      { label: "Travel Solutions", href: "https://fidinda-travel.vercel.app" },
      { label: "Fidinda Solutions Group", href: "https://fidindasolutions.com" },
    ],
  },
};

/* ------------------------------------------------------------------ */
/*  Services                                                           */
/* ------------------------------------------------------------------ */

export type Service = {
  slug: string;
  title: string;
  navTitle: string;
  icon: IconName;
  image: string; // photo used on cards and the service page
  tagline: string;
  intro: string;
  seoTitle: string;
  seoDescription: string;
  offerings: { title: string; description: string }[];
  extra?: string;
  note?: { text: string; linkLabel: string; href: string };
  benefits: { title: string; description: string; icon: IconName }[];
  process: { title: string; description: string }[];
  faqs: { q: string; a: string }[];
  /** Short list shown in the page header panel (falls back to offering titles). */
  heroHighlights?: string[];
  /** Detailed service catalogue, grouped by category. */
  catalogue?: {
    eyebrow: string;
    heading: string;
    text: string;
    groups: { title: string; icon: IconName; description: string; items: string[] }[];
  };
  /** "Built for Cambodia" strip. */
  local?: { heading: string; points: { title: string; description: string; icon: IconName }[] };
};

export const services: Service[] = [
  {
    slug: "registration-and-licensing",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85",
    title: "Registration & Licensing",
    navTitle: "Registration & Licensing",
    icon: "fileCheck",
    tagline:
      "Streamline your business setup with hassle-free registration and licensing, ensuring compliance from day one.",
    intro:
      "Starting or formalising an organisation in Cambodia means working with several ministries, forms and requirements. We guide companies, local NGOs and international NGOs through every step, so you can focus on your mission while we handle the paperwork and the follow-up.",
    seoTitle: "Business, NGO & INGO Registration and Licensing in Cambodia",
    seoDescription:
      "Business registration and licensing, domestic NGO and international NGO registration, and regulatory compliance assistance in Phnom Penh, Cambodia.",
    offerings: [
      {
        title: "Business registration and licensing",
        description:
          "Company formation, business name and Ministry of Commerce registration, and the sector licences your business needs to operate legally.",
      },
      {
        title: "Domestic NGO registration",
        description:
          "Preparing statutes and documents, and registering local associations and NGOs with the relevant authorities.",
      },
      {
        title: "International NGO registration",
        description:
          "Support for INGOs establishing a presence in Cambodia, including documentation, memoranda of understanding and renewals.",
      },
      {
        title: "Regulatory compliance assistance",
        description:
          "Ongoing support to keep your registrations, licences and reporting obligations up to date and in good standing.",
      },
    ],
    note: {
      text: "Need tax registration or tax filing?",
      linkLabel: "See Fidinda Financial Solutions",
      href: FINANCIAL_SITE_URL,
    },
    benefits: [
      { title: "Compliance from day one", description: "Start operating with the right registrations and licences in place.", icon: "shield" },
      { title: "Less time, less stress", description: "We prepare documents and follow up with authorities on your behalf.", icon: "clock" },
      { title: "Local know-how", description: "Clear guidance on Cambodian requirements, in Khmer or English.", icon: "compass" },
      { title: "Fewer costly mistakes", description: "Accurate submissions reduce delays, rejections and penalties.", icon: "fileCheck" },
    ],
    process: [
      { title: "Consultation", description: "We discuss your organisation type, activities and goals." },
      { title: "Document preparation", description: "We list requirements and prepare or review every document." },
      { title: "Submission & follow-up", description: "We file with the relevant authorities and track progress." },
      { title: "Handover & compliance", description: "You receive your certificates and a clear compliance calendar." },
    ],
    faqs: [
      {
        q: "How long does business registration take in Cambodia?",
        a: "Timelines depend on the business type and any sector licences required. After our first consultation we give you a realistic timeline for your specific case.",
      },
      {
        q: "Can you register an international NGO in Cambodia?",
        a: "Yes. We support INGOs with documentation, registration and the related agreements and renewals required to operate in Cambodia.",
      },
      {
        q: "What documents do I need to get started?",
        a: "Usually identification of the founders or directors, proposed name, address and a description of activities. We send you a tailored checklist after the consultation.",
      },
      {
        q: "Do you also handle tax registration?",
        a: "Tax registration and filing are handled by our sister division, Fidinda Financial Solutions, so you can manage everything with one trusted group.",
      },
    ],
  },
  {
    slug: "contract-and-project-management",
    image: "https://images.unsplash.com/photo-1681569685386-b7bda397672e", // colleagues planning at a laptop — Thant Zin
    title: "Contract & Project Management",
    navTitle: "Contract & Project Management",
    icon: "clipboard",
    tagline:
      "Drive successful project outcomes with contract and project management that ensures compliance and optimises resources.",
    intro:
      "Well-run contracts and projects are the backbone of every successful organisation. We help you plan, manage and deliver projects on time and on budget, while making sure contractual obligations are clearly defined, tracked and met.",
    seoTitle: "Contract Management & Project Management Services in Cambodia",
    seoDescription:
      "Professional contract management and project management for businesses, NGOs and development organisations in Phnom Penh, Cambodia.",
    offerings: [
      {
        title: "Contract management",
        description:
          "Drafting support, review, obligation tracking, renewals and supplier or donor contract administration so nothing slips through the cracks.",
      },
      {
        title: "Project management",
        description:
          "Planning, scheduling, budgeting, risk management, reporting and coordination of teams and stakeholders from start to close.",
      },
    ],
    benefits: [
      { title: "Compliance", description: "Contractual and donor requirements are tracked and met.", icon: "shield" },
      { title: "Resource optimisation", description: "Budgets, people and time are used where they create the most value.", icon: "layers" },
      { title: "On-time delivery", description: "Clear plans, milestones and early warnings keep projects on schedule.", icon: "clock" },
      { title: "Transparent reporting", description: "Regular, clear updates for management, donors and partners.", icon: "chart" },
    ],
    process: [
      { title: "Scope & objectives", description: "We define deliverables, stakeholders, risks and success criteria." },
      { title: "Plan", description: "We build the work plan, budget, timeline and contract framework." },
      { title: "Execute & control", description: "We coordinate delivery and track progress, cost and obligations." },
      { title: "Close & review", description: "We complete handover, final reports and lessons learned." },
    ],
    faqs: [
      {
        q: "Can you manage a project we have already started?",
        a: "Yes. We can step in at any stage, review where the project stands and put a recovery or improvement plan in place.",
      },
      {
        q: "Do you work on donor-funded projects?",
        a: "Yes. We regularly support NGOs and development organisations with donor compliance, reporting and contract requirements.",
      },
      {
        q: "Can we hire you only for contract review?",
        a: "Absolutely. Our services are flexible — choose ongoing management or a one-off contract review.",
      },
    ],
  },
  {
    slug: "software-and-cloud",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
    title: "Software, Applications & Cloud Services",
    navTitle: "Software, Applications & Cloud",
    icon: "cloud",
    tagline:
      "Websites, apps, local payments and cloud tools built for how Cambodian businesses and NGOs actually work — secure, scalable and supported in Khmer and English.",
    intro:
      "The right technology removes manual work, helps you reach customers online and gives you better information for decisions. From your first bilingual website to KHQR payments, Telegram automation, cloud email and M&E dashboards, we design, implement and support solutions that fit the way your organisation works in Cambodia.",
    seoTitle: "Software, Websites, KHQR Payments & Cloud Solutions in Cambodia",
    seoDescription:
      "Bilingual Khmer–English websites, KHQR and local bank payment integration, business apps, Telegram bots, Microsoft 365 and Google Workspace, M&E dashboards and IT support in Phnom Penh, Cambodia.",
    heroHighlights: [
      "Khmer–English websites & online shops",
      "KHQR / Bakong & local bank payments",
      "Telegram bots & automated alerts",
      "Microsoft 365 & Google Workspace",
      "M&E data collection & dashboards",
    ],
    offerings: [
      {
        title: "Software & app development",
        description:
          "Custom web and mobile applications, and setup of existing software such as POS, HR and CRM tools to match your workflows.",
      },
      {
        title: "Websites, e-commerce & payments",
        description:
          "Bilingual websites, online shops and booking systems with KHQR and local bank payment options.",
      },
      {
        title: "Cloud-based business solutions",
        description:
          "Professional email, file sharing, collaboration tools, data storage and automatic backups, with secure access from anywhere.",
      },
      {
        title: "IT security & ongoing support",
        description:
          "Security reviews, device management and maintenance plans so your systems stay safe and running.",
      },
    ],
    catalogue: {
      eyebrow: "Service catalogue",
      heading: "Technology services for organisations in Cambodia",
      text: "Choose a single service or combine several into one project. Every solution can be delivered in Khmer, English or both.",
      groups: [
        {
          title: "Websites & online presence",
          icon: "globe",
          description: "Get found and trusted online.",
          items: [
            "Bilingual Khmer–English business websites",
            "NGO and project websites with reports and publications",
            ".com.kh / .org.kh and international domain registration support",
            "Hosting, SSL security and professional email on your domain",
            "Google Business Profile and Facebook page setup",
          ],
        },
        {
          title: "Payments & e-commerce",
          icon: "creditCard",
          description: "Let customers pay the way they already do.",
          items: [
            "KHQR / Bakong payment integration",
            "ABA PayWay and other local bank gateway integration",
            "Online shops, booking and appointment systems",
            "Invoices and pricing in USD and KHR",
          ],
        },
        {
          title: "Business applications",
          icon: "layers",
          description: "Replace spreadsheets and paperwork.",
          items: [
            "POS, sales and inventory systems for shops and restaurants",
            "HR, leave and attendance management",
            "CRM and customer follow-up tools",
            "Document management and digital approvals",
            "Custom web and mobile apps (Android & iOS)",
          ],
        },
        {
          title: "Messaging & automation",
          icon: "message",
          description: "Work where your team and customers already chat.",
          items: [
            "Telegram bots for orders, bookings and notifications",
            "Website forms and alerts delivered to Telegram",
            "Facebook Messenger and WhatsApp chat integration",
            "Automated reminders, reports and workflows",
          ],
        },
        {
          title: "Cloud & productivity",
          icon: "cloud",
          description: "Collaborate securely from anywhere.",
          items: [
            "Microsoft 365 or Google Workspace setup and migration",
            "Shared drives, permissions and file organisation",
            "Automatic cloud backups and recovery",
            "Video meeting and collaboration setup",
          ],
        },
        {
          title: "Data, M&E & dashboards",
          icon: "database",
          description: "Turn field data into decisions.",
          items: [
            "Mobile data collection with KoboToolbox or ODK",
            "Dashboards in Power BI or Looker Studio",
            "Beneficiary, member and case management databases",
            "Automated donor and management reporting",
          ],
        },
        {
          title: "IT security & support",
          icon: "shield",
          description: "Keep systems safe and running.",
          items: [
            "Security review and multi-factor authentication",
            "Laptop, phone and network setup",
            "Data protection and access policies",
            "Ongoing IT support and maintenance plans",
          ],
        },
        {
          title: "Digital advisory",
          icon: "compass",
          description: "Invest in the right technology, in the right order.",
          items: [
            "Digital transformation roadmap",
            "Software selection and vendor evaluation",
            "IT and systems review",
            "Staff training on new tools",
          ],
        },
      ],
    },
    local: {
      heading: "Built for Cambodia",
      points: [
        { title: "Khmer & English", description: "Interfaces, content and training in both languages, with proper Khmer Unicode.", icon: "languages" },
        { title: "Local payments", description: "KHQR, Bakong and local bank gateways customers already trust.", icon: "creditCard" },
        { title: "Telegram-ready", description: "Alerts, bots and messages on the app your team uses every day.", icon: "message" },
        { title: "USD & KHR", description: "Pricing, invoices and reports in both currencies.", icon: "banknote" },
        { title: "Local support", description: "On-site help in Phnom Penh and remote support across Cambodia.", icon: "mapPin" },
      ],
    },
    benefits: [
      { title: "Efficiency", description: "Automate repetitive tasks and work faster as a team.", icon: "trending" },
      { title: "More customers", description: "Be easy to find online and easy to pay, in Khmer or English.", icon: "cart" },
      { title: "Security", description: "Access controls, backups and good practice to protect your data.", icon: "lock" },
      { title: "Ongoing support", description: "Training and local support so your team uses the tools with confidence.", icon: "users" },
    ],
    process: [
      { title: "Discover", description: "We map your processes, pain points and current systems." },
      { title: "Design", description: "We propose the right solution, timeline and budget." },
      { title: "Build & implement", description: "We develop, configure, migrate data and test thoroughly." },
      { title: "Train & support", description: "We train your team and provide ongoing maintenance." },
    ],
    faqs: [
      {
        q: "Can our website accept KHQR payments?",
        a: "Yes. We can add KHQR / Bakong payments and integrate local bank payment gateways such as ABA PayWay, so customers can pay from their banking app.",
      },
      {
        q: "Can our website and software be in Khmer and English?",
        a: "Yes. We build bilingual sites and apps with proper Khmer Unicode fonts, and visitors can switch language easily.",
      },
      {
        q: "Do you build custom software or use existing tools?",
        a: "Both. We recommend existing tools when they fit your needs and budget, and build custom applications when your needs are unique.",
      },
      {
        q: "Is our data safe in the cloud?",
        a: "We follow security best practice including access control, multi-factor authentication and regular backups.",
      },
      {
        q: "Can you migrate our existing files, email and data?",
        a: "Yes. We plan and carry out migrations carefully to avoid data loss and minimise disruption to your team.",
      },
    ],
  },
  {
    slug: "research-analysis-advisory",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
    title: "Research, Analysis & Advisory",
    navTitle: "Research, Analysis & Advisory",
    icon: "chart",
    tagline:
      "Make informed decisions with expert research, analysis and advisory that turns complex challenges into actionable insights.",
    intro:
      "Good decisions start with good evidence. Our research, analysis and advisory services help organisations understand their context, plan strategically, measure progress and understand the long-term effects of their initiatives.",
    seoTitle: "Research, Feasibility Studies, M&E & Advisory in Cambodia",
    seoDescription:
      "Evidence-based research, market assessments, feasibility studies, baseline and end-line surveys, monitoring and evaluation, and impact studies in Cambodia.",
    offerings: [
      { title: "Evidence-based research", description: "Rigorous qualitative and quantitative research to answer your key questions." },
      { title: "Market assessments", description: "Understand demand, competitors, customers and opportunities in your sector." },
      { title: "Feasibility studies", description: "Assess the technical, financial and operational viability of new initiatives." },
      { title: "Strategic planning", description: "Facilitated planning that turns evidence into clear goals and priorities." },
      { title: "Needs assessments", description: "Identify the real needs of communities, beneficiaries or organisations." },
      { title: "Baseline and end-line surveys", description: "Measure starting points and results to show what has changed." },
      { title: "Monitoring and evaluation (M&E)", description: "M&E frameworks, indicators, data systems and periodic evaluations." },
      { title: "Impact studies and evaluations", description: "Understand the outcomes and long-term effects of programmes and projects." },
    ],
    extra:
      "These services help organisations measure progress and understand the long-term effects of their initiatives — so every programme, investment and decision is grounded in reliable evidence.",
    benefits: [
      { title: "Better decisions", description: "Recommendations backed by data, not assumptions.", icon: "lightbulb" },
      { title: "Proven results", description: "Credible evidence of progress for boards, donors and partners.", icon: "award" },
      { title: "Reduced risk", description: "Test ideas and plans before committing significant resources.", icon: "shield" },
      { title: "Local insight", description: "Fieldwork and analysis grounded in the Cambodian context.", icon: "compass" },
    ],
    process: [
      { title: "Define questions", description: "We agree objectives, scope, methodology and deliverables." },
      { title: "Design tools", description: "We develop sampling, questionnaires and interview guides." },
      { title: "Collect & analyse", description: "We carry out fieldwork and analyse the data rigorously." },
      { title: "Report & advise", description: "We present findings and practical, actionable recommendations." },
    ],
    faqs: [
      {
        q: "Do you conduct fieldwork in the provinces?",
        a: "Yes. We can organise data collection in Phnom Penh and in provinces across Cambodia, in Khmer and English.",
      },
      {
        q: "Can you design an M&E framework for our programme?",
        a: "Yes. We design logframes, indicators, data collection systems and reporting templates that fit your programme and donor requirements.",
      },
      {
        q: "What is the difference between a baseline and an end-line survey?",
        a: "A baseline measures the situation before a project starts; an end-line measures it at the end. Comparing them shows what changed.",
      },
      {
        q: "Will we receive the raw data?",
        a: "Yes, with appropriate anonymisation. We deliver reports, presentations and cleaned datasets as agreed.",
      },
    ],
  },
  {
    slug: "training-and-capacity-building",
    image: "https://images.unsplash.com/photo-1646579886135-068c73800308", // facilitator presenting to a group — Herlambang Tinasih Gusti
    title: "Training & Capacity Building",
    navTitle: "Training & Capacity Building",
    icon: "graduation",
    tagline:
      "Equip your team with practical skills through training programmes designed for growth and excellence.",
    intro:
      "An organisation is only as strong as its people and systems. We design practical training and organisational development initiatives that build lasting skills and strengthen institutional capacity.",
    seoTitle: "Training, Capacity Building & Organisational Development in Cambodia",
    seoDescription:
      "Organisational development, staff training and capacity building programmes, and institutional strengthening for organisations in Cambodia.",
    offerings: [
      {
        title: "Organisational development initiatives",
        description: "Reviewing structures, policies and processes, and supporting change that makes your organisation more effective.",
      },
      {
        title: "Staff training and capacity building programmes",
        description: "Practical, interactive training in management, project management, M&E, compliance, digital tools and more.",
      },
      {
        title: "Strengthening institutional capacity",
        description: "Capacity assessments and tailored plans to strengthen governance, systems and long-term sustainability.",
      },
    ],
    benefits: [
      { title: "Practical skills", description: "Hands-on learning your team can apply the next day.", icon: "target" },
      { title: "Tailored content", description: "Programmes built around your context, level and goals.", icon: "settings" },
      { title: "Stronger institutions", description: "Better governance, systems and sustainability.", icon: "landmark" },
      { title: "Khmer or English", description: "Training delivered in the language that works best for your team.", icon: "users" },
    ],
    process: [
      { title: "Assess needs", description: "We identify skills gaps and organisational priorities." },
      { title: "Design programme", description: "We create a tailored curriculum, materials and schedule." },
      { title: "Deliver", description: "We run engaging in-person or online sessions with practical exercises." },
      { title: "Evaluate & follow up", description: "We measure learning and provide follow-up coaching." },
    ],
    faqs: [
      {
        q: "Do you offer training in Khmer?",
        a: "Yes. Training can be delivered in Khmer, English or both.",
      },
      {
        q: "Can training be delivered at our office?",
        a: "Yes. We deliver training on-site, at a venue of your choice or online.",
      },
      {
        q: "Do participants receive certificates?",
        a: "Yes, participants who complete a programme receive a certificate of completion.",
      },
    ],
  },
];

export const getService = (slug: string) => services.find((s) => s.slug === slug);

/* ------------------------------------------------------------------ */
/*  Home page                                                          */
/* ------------------------------------------------------------------ */

export const home = {
  hero: {
    eyebrow: "Fidinda Management Solutions · Phnom Penh",
    heading: "Strengthening Organisations Through Expertise and Innovation",
    highlight: "Expertise", // word in the heading to underline in red ("" for none)
    subtext:
      "Integrated business and organisational consultancy that improves efficiency, strengthens governance and supports sustainable growth in Cambodia.",
    primaryCta: { label: "Request a Quote", href: "/request-quotation" },
    secondaryCta: { label: "Our Services", href: "/services" },
    highlights: ["Business & NGO registration", "Project management", "Research & M&E", "Training"],
    facts: [
      { value: "2023", label: "Established in Phnom Penh" },
      { value: "5", label: "Integrated service areas" },
      { value: "4", label: "Specialised Fidinda divisions" },
      { value: "KH / EN", label: "Khmer & English support" },
    ],
  },
  intro: {
    eyebrow: "Who we are",
    heading: "Your partner for stronger, more efficient organisations",
    paragraphs: [
      "Fidinda Management Solutions offers integrated business and organisational consultancy services designed to improve operational efficiency, strengthen governance, and support sustainable growth.",
      "By combining professional expertise, analytical approaches, and technology-driven solutions, we help clients navigate complex business environments, optimise resources, strengthen institutional capacity, and achieve measurable results.",
    ],
    points: [
      "Business & NGO registration",
      "Regulatory compliance",
      "Contract & project management",
      "Software & cloud solutions",
      "Research, M&E & advisory",
      "Training & capacity building",
    ],
    badge: { value: "Since 2023", label: "Part of Fidinda Solutions" },
  },
  audiences: {
    eyebrow: "Who we serve",
    heading: "Trusted by organisations across Cambodia",
    items: [
      { title: "Businesses", description: "Start-ups, SMEs and established companies setting up, growing or modernising.", icon: "building" as IconName },
      { title: "NGOs & INGOs", description: "Local and international NGOs registering, managing projects and reporting impact.", icon: "heartHandshake" as IconName },
      { title: "Development Organisations", description: "Programmes that need research, M&E and evidence of long-term results.", icon: "globe" as IconName },
      { title: "Institutions", description: "Public and private institutions strengthening governance and capacity.", icon: "landmark" as IconName },
    ],
  },
  servicesIntro: {
    eyebrow: "What we do",
    heading: "Integrated services under one roof",
    text: "From your first registration to measuring long-term impact, we support every stage of your organisation's journey.",
  },
  whyChooseUs: {
    eyebrow: "Why choose us",
    heading: "A partner focused on your results",
    items: [
      { title: "Tailored Strategies", description: "Customised strategies for each client's unique challenges and opportunities.", icon: "target" as IconName },
      { title: "Proactive Problem-Solving", description: "Anticipating issues before they arise and keeping projects on track.", icon: "lightbulb" as IconName },
      { title: "Evidence-Based Approach", description: "Research, data and analysis behind every recommendation.", icon: "search" as IconName },
      { title: "Measurable Results", description: "Focused on outcomes, efficiency and institutional capacity.", icon: "trending" as IconName },
    ],
  },
  approach: {
    eyebrow: "Our approach",
    heading: "A clear, proven way of working",
    steps: [
      { title: "Understand", description: "We listen first to understand your goals, context and constraints." },
      { title: "Assess & Research", description: "We gather evidence and assess options, risks and requirements." },
      { title: "Plan & Implement", description: "We design practical solutions and put them into action with you." },
      { title: "Monitor & Evaluate", description: "We track progress, measure results and refine for lasting impact." },
    ],
  },
  financialBanner: {
    text: "Need accounting, tax filing or a financial audit?",
    linkLabel: "Visit Fidinda Financial Solutions",
    href: FINANCIAL_SITE_URL,
  },
  cta: {
    heading: "Become Our Client",
    text: "Tell us about your organisation and what you need. We'll respond with a tailored proposal and quotation.",
    button: { label: "Request a Quote", href: "/request-quotation" },
  },
};

/* ------------------------------------------------------------------ */
/*  Values — The Four Fs                                               */
/* ------------------------------------------------------------------ */

export const values = {
  eyebrow: "Our values",
  heading: "Our Beliefs: The Four Fs of Fidinda",
  items: [
    {
      letter: "F",
      title: "Faith",
      icon: "shield" as IconName,
      description:
        "We believe to be trustworthy (Fidinda) and reliable in our business through transparency, collaboration, and effective communication.",
    },
    {
      letter: "F",
      title: "Friendship",
      icon: "handshake" as IconName,
      description:
        "We value long-term partnerships with our clients by building a strong bond of mutual affection & trust and are committed to their success.",
    },
    {
      letter: "F",
      title: "Flexibility",
      icon: "sparkles" as IconName,
      description:
        "We recognise that every client has different needs and circumstances, and we strive to provide practical, adaptable, and personalised solutions.",
    },
    {
      letter: "F",
      title: "Focus",
      icon: "target" as IconName,
      description:
        "We remain committed to understanding our clients' objectives, maintaining attention to detail, and delivering quality services that create meaningful value.",
    },
  ],
};

/* ------------------------------------------------------------------ */
/*  About page                                                         */
/* ------------------------------------------------------------------ */

export const about = {
  hero: {
    eyebrow: "About us",
    heading: "Strengthening Organisations Through Expertise and Innovation",
    text: "Integrated business and organisational consultancy from Phnom Penh, for organisations across Cambodia.",
  },
  whoWeAre: {
    heading: "Who We Are",
    paragraphs: [
      "Fidinda Management Solutions offers integrated business and organisational consultancy services designed to improve operational efficiency, strengthen governance, and support sustainable growth.",
      "Our expertise includes business registration and licensing, domestic and international NGO registration, regulatory compliance assistance, contract management, project management, software application development and implementation, cloud-based business solutions, and research, analysis, and strategic advisory services.",
      "We support businesses, development organisations, NGOs, and other institutions through evidence-based research, market assessments, feasibility studies, strategic planning, needs assessments, baseline and end-line surveys, monitoring and evaluation, and organisational development initiatives.",
      "By combining professional expertise, analytical approaches, and technology-driven solutions, we help clients navigate complex business environments, optimise resources, strengthen institutional capacity, and achieve measurable results.",
    ],
  },
  group: {
    heading: "Part of Fidinda Solutions",
    text: "Fidinda Solutions is a diversified professional services company based in Phnom Penh, Cambodia. Established in 2023 as Fidinda Financial & Management Solutions Co., Ltd., the company has grown into four specialised divisions under one unified brand: Fidinda Financial Solutions, Fidinda Management Solutions, Fidinda Health Solutions, and Fidinda Travel Solutions.",
  },
  missionVision: {
    vision: "To create long-lasting partnerships with our clients, built on trust, integrity, and mutual growth.",
    mission:
      "To become a leading provider of innovative integrated solutions for transforming businesses and driving their growth.",
  },
  ecosystem: {
    eyebrow: "Our position within Fidinda Solutions",
    heading: "Part of a wider service ecosystem",
    paragraphs: [
      "Fidinda Solutions is a diversified professional services company based in Phnom Penh, Cambodia, established in 2023 as Fidinda Financial & Management Solutions Co., Ltd.",
      "Fidinda Management Solutions operates alongside Fidinda Financial Solutions, Fidinda Health Solutions and Fidinda Travel Solutions. This wider service ecosystem allows appropriate coordination across different client needs, while registration, project management, technology, research and capacity building remain the specialist focus of our team.",
    ],
    groupName: "Fidinda Solutions",
  },
  commitment: {
    heading: "Our Commitment",
    text: "At Fidinda Solutions, we believe that professional services should go beyond completing transactions or fulfilling immediate requirements. Our objective is to build lasting relationships, understand the challenges and aspirations of those we serve, and provide solutions that make a tangible difference. Whether registering a new business or NGO, managing a complex project, implementing cloud solutions or conducting research and evaluation, we bring the same dedication to professionalism, transparency, accountability, and customer satisfaction.",
  },
};

/* ------------------------------------------------------------------ */
/*  Resources — add new entries at the top of each list                */
/* ------------------------------------------------------------------ */

export type ResourceItem = {
  title: string;
  summary: string;
  date: string; // ISO date, e.g. "2026-10-01"
  category: string;
  href?: string; // link to full article / PDF (e.g. "/publications/report.pdf" placed in /public/publications)
  readTime?: string;
};

export const resources = {
  hero: {
    eyebrow: "Resources",
    heading: "Insights, guides and publications",
    text: "Practical knowledge on registration, project management, technology and research for organisations in Cambodia.",
  },
  articles: [
    {
      title: "Registering a Business in Cambodia: A Step-by-Step Overview",
      summary: "An introduction to the main steps, documents and authorities involved when starting a company in Cambodia.",
      date: "2026-10-01",
      category: "Registration",
      readTime: "6 min read",
    },
    {
      title: "Local NGO vs International NGO Registration: Key Differences",
      summary: "What organisations should know before choosing how to register and operate in Cambodia.",
      date: "2026-09-15",
      category: "NGO",
      readTime: "5 min read",
    },
    {
      title: "Why Every Programme Needs a Baseline Survey",
      summary: "How baseline and end-line data help organisations prove progress and learn what works.",
      date: "2026-09-01",
      category: "Research & M&E",
      readTime: "4 min read",
    },
  ] as ResourceItem[],
  publications: [
    {
      title: "Organisational Capacity Self-Assessment Checklist",
      summary: "A simple tool to review governance, systems, finance and people in your organisation.",
      date: "2026-08-20",
      category: "Toolkit",
    },
    {
      title: "Monitoring & Evaluation Framework Template",
      summary: "A ready-to-adapt template with logframe, indicators and reporting schedule.",
      date: "2026-07-10",
      category: "Template",
    },
  ] as ResourceItem[],
};

/* ------------------------------------------------------------------ */
/*  Forms                                                              */
/* ------------------------------------------------------------------ */

export const quoteForm = {
  hero: {
    eyebrow: "Request for quotation",
    heading: "Tell us what you need",
    text: "Share a few details about your organisation and project. Our team will review your request and respond with a tailored proposal, usually within one to two working days.",
  },
  organisationTypes: [
    "Company",
    "Local NGO",
    "International NGO",
    "Development Organisation",
    "Institution",
    "Other",
  ],
  services: [
    "Business Registration & Licensing",
    "NGO Registration",
    "Regulatory Compliance",
    "Contract Management",
    "Project Management",
    "Software/Application Development",
    "Website & E-commerce",
    "KHQR / Payment Integration",
    "Telegram Bots & Automation",
    "Cloud Solutions",
    "IT Support & Security",
    "Research & Analysis",
    "Feasibility Study",
    "Survey / Baseline / End-line",
    "Monitoring & Evaluation",
    "Strategic Advisory",
    "Training & Capacity Building",
  ],
  timelines: ["Urgent", "Within 1 month", "1–3 months", "Flexible"],
  languages: ["Khmer", "English"],
  successMessage: "Thank you! Your request has been sent. Our team will contact you shortly.",
  errorMessage: "Sorry, something went wrong. Please try again or contact us directly by phone or email.",
};

export const contactPage = {
  hero: {
    eyebrow: "Contact us",
    heading: "Contact us",
    text: "Call, email or send a message. Our team speaks Khmer and English.",
  },
  hours: "Monday – Friday, 8:00 AM – 5:00 PM",
  form: {
    eyebrow: "Management enquiry",
    heading: "Tell us how we can help",
    text: "Share a little about your organisation and what you need. We usually reply within one business day.",
    services: [
      "Business registration",
      "NGO registration",
      "INGO registration",
      "Regulatory compliance",
      "Contract management",
      "Project management",
      "Software development",
      "Website & e-commerce",
      "KHQR / payment integration",
      "Telegram bots & automation",
      "Cloud solutions",
      "IT support & security",
      "Research & analysis",
      "Feasibility study",
      "Baseline / end-line survey",
      "Monitoring & evaluation",
      "Strategic advisory",
      "Training & capacity building",
    ],
    organisationTypes: ["Company", "Local NGO", "International NGO", "Development Organisation", "Institution", "Other"],
    topics: ["General enquiry", "New project", "Ongoing project / support", "Partnership", "Other"],
    languages: ["Khmer", "English"],
    contactMethods: ["Email", "Phone call", "WhatsApp", "Telegram"],
    consent:
      "I agree that Fidinda Management Solutions may contact me about this enquiry and keep the details I share confidential.",
  },
  sidebar: {
    tagline: "A service division of Fidinda Solutions",
    glanceTitle: "Services at a glance",
    glance: [
      "Business, NGO and INGO registration",
      "Regulatory compliance assistance",
      "Contract and project management",
      "Software, applications and cloud",
      "Research, surveys, M&E and advisory",
      "Training and capacity building",
    ],
    infoTitle: "Important service information",
    info: "Fees depend on the scope of work, timelines and the type of organisation. Registration and licensing timelines also depend on the relevant ministries and authorities. Information you share with us is kept confidential.",
  },
  successMessage: "Thank you for your message! We'll get back to you soon.",
  errorMessage: "Sorry, your message could not be sent. Please try again or contact us by phone or email.",
};

export const notFound = {
  heading: "Page not found",
  text: "The page you are looking for may have been moved or no longer exists.",
};
