export interface Project {
  id: string;
  title: string;
  category: 'software' | 'hardware' | 'flagship';
  tagline: string;
  description: string;
  details?: string[];
  techStack: string[];
  role?: string;
  metric?: string;
  status?: string;
  isFlagship?: boolean;
  githubUrl?: string;
  liveUrl?: string;
  featured?: boolean;
  schematicTag?: string;
  accentColor?: string;
  gradient?: string;
}

export interface SkillCategory {
  title: string;
  iconName: string;
  subtitle: string;
  skills: { name: string; level?: string; tag?: string }[];
}

export interface ExperienceItem {
  id: string;
  organization: string;
  role: string;
  period: string;
  type: 'experience' | 'certification';
  badge: string;
  description: string;
  highlights: string[];
  skills: string[];
  link?: string;
}

export const PERSONAL_INFO = {
  name: 'Pradeep H',
  role: 'ECE Student · Embedded Systems & Full-Stack Developer',
  institution: 'Jain University, Bengaluru',
  degree: 'B.Tech Electronics & Communication Engineering',
  gradYear: 'Class of 2027 (3rd Year)',
  cgpa: '7.3',
  location: 'JP Nagar, Bengaluru, India',
  email: 'pradee5606@gmail.com',
  github: 'https://github.com/PRADXP007',
  linkedin: 'https://linkedin.com/in/pradeeph007',
  portfolioUrl: 'https://portfolio-five-umber-61.vercel.app',
  bioHeadline: 'Electronics and Communication Engineering student building physical hardware and full-stack software.',
  bioParagraphs: [
    'I am a third-year Electronics & Communication Engineering undergraduate at Jain University, Bengaluru (CGPA 7.3). My work sits between physical hardware benches and modern full-stack codebases.',
    'On the hardware side, I build and tune 5-inch FPV drones, design 2.4 GHz patch antennas in CST Studio, write firmware for ESP32 systems, and run transistor-level simulations in Cadence Virtuoso. On the software side, I build web apps with Next.js, TypeScript, PostgreSQL, and vector search tools.',
  ],
  stats: [
    { label: 'Current CGPA', value: '7.3' },
    { label: 'Built Projects', value: '16+' },
    { label: 'Core Focus', value: 'Embedded & Web' },
    { label: 'Based in', value: 'Bengaluru' },
  ],
};

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'Hardware & Embedded',
    iconName: 'Cpu',
    subtitle: 'Microcontrollers, RF simulation, and circuit layout',
    skills: [
      { name: 'FPV Drone Build & Tuning', tag: 'Aero/RF' },
      { name: 'ESP32 & Arduino', tag: 'MCU' },
      { name: 'Embedded C / C++', tag: 'Firmware' },
      { name: 'Cadence Virtuoso', tag: 'EDA' },
      { name: 'CST Studio Suite', tag: 'RF Sim' },
      { name: 'VBA Scripting', tag: 'Automation' },
      { name: 'PID & Filter Tuning', tag: 'Control' },
      { name: 'Soldering & Power Distribution', tag: 'Hardware' },
      { name: 'MQTT & Serial Telemetry', tag: 'Protocols' },
    ],
  },
  {
    title: 'Full-Stack & Web',
    iconName: 'Layers',
    subtitle: 'Frontend frameworks, APIs, and databases',
    skills: [
      { name: 'Next.js 16 (App Router)', tag: 'Framework' },
      { name: 'React 19 & TypeScript', tag: 'Frontend' },
      { name: 'Tailwind CSS v4', tag: 'Styling' },
      { name: 'Express & Node.js', tag: 'Backend' },
      { name: 'MongoDB & Mongoose', tag: 'Database' },
      { name: 'PostgreSQL & pgvector', tag: 'Database' },
      { name: 'Socket.io', tag: 'WebSockets' },
      { name: 'REST APIs', tag: 'API' },
      { name: 'Vercel & Git', tag: 'DevOps' },
    ],
  },
  {
    title: 'AI & Developer Tools',
    iconName: 'Sparkles',
    subtitle: 'Embeddings, vector search, and tool integration',
    skills: [
      { name: 'LLM APIs (Claude, OpenAI)', tag: 'Inference' },
      { name: 'RAG & Vector Search', tag: 'pgvector' },
      { name: 'Supabase', tag: 'Storage' },
      { name: 'Structured Prompt Pipelines', tag: 'Workflows' },
      { name: 'Python & NumPy', tag: 'Scripting' },
      { name: 'OpenCV', tag: 'Vision' },
      { name: 'Git & Monorepos', tag: 'VCS' },
      { name: 'Linux / Bash', tag: 'CLI' },
    ],
  },
  {
    title: 'UI/UX & Graphics',
    iconName: 'Palette',
    subtitle: 'Layout design, prototypes, and UI animations',
    skills: [
      { name: 'Figma & Design Systems', tag: 'UI/UX' },
      { name: 'Framer Motion', tag: 'Animation' },
      { name: 'GSAP & ScrollTrigger', tag: 'Motion' },
      { name: 'Lenis Smooth Scroll', tag: 'Scroll' },
      { name: 'Three.js & WebGL', tag: '3D Web' },
      { name: 'Component Architecture', tag: 'Design' },
    ],
  },
];

export const TIMELINE: ExperienceItem[] = [
  {
    id: 'anthropic-cert',
    organization: 'Anthropic',
    role: 'AI Fluency for Builders Certification',
    period: 'Completed August 2026',
    type: 'certification',
    badge: 'Certification',
    description:
      'Completed practical developer training covering tool use, context caching, prompt architectures, and integrating Claude models into production software.',
    highlights: [
      'Built structured JSON extraction and multi-step tool-calling workflows with Claude 3.5 Sonnet.',
      'Implemented RAG patterns using pgvector similarity search and density-filtered context.',
      'Added validation layers to verify outputs and handle tool errors reliably.',
    ],
    skills: ['Claude API', 'Tool Calling', 'pgvector', 'RAG Pipelines', 'Prompt Design'],
    link: 'https://anthropic.com',
  },
  {
    id: 'itc-infotech',
    organization: 'ITC Infotech',
    role: 'UI/UX Design Intern',
    period: 'June – July 2025',
    type: 'experience',
    badge: 'Internship',
    description:
      'Interned with the UI/UX team in Bengaluru, creating reusable Figma components and interactive prototypes for internal enterprise tools.',
    highlights: [
      'Documented component libraries and design tokens in Figma with accessibility checks.',
      'Built interactive prototypes and user flows for enterprise dashboards.',
      'Worked directly with frontend developers during component handoff to match specs.',
    ],
    skills: ['Figma', 'Design Systems', 'Prototyping', 'User Flows', 'Accessibility'],
    link: 'https://itcinfotech.com',
  },
];

export const FLAGSHIP_PROJECT: Project = {
  id: 'paperrrrrr-flagship',
  title: 'Paperrrrrr',
  category: 'flagship',
  tagline: 'AI Document Studio (In Progress)',
  description:
    'A document studio that turns natural-language research prompts into formatted Word (.docx), PDF, Excel (.xlsx), and PowerPoint (.pptx) files with live split-screen preview.',
  details: [
    'Automated research pipeline that queries web sources, extracts facts, and structures content into document outlines.',
    'Split-screen canvas showing real-time typography, margins, and table calculations.',
    'Export pipeline generating styled .docx, vector PDF, .xlsx, and .pptx files on demand.',
  ],
  techStack: ['Next.js 16', 'React 19', 'TypeScript', 'MongoDB', 'Node.js', 'Tailwind CSS'],
  role: 'Creator',
  metric: 'Multi-format export engine',
  featured: true,
  accentColor: '#5C1A28',
};

export const SOFTWARE_PROJECTS: Project[] = [
  {
    id: 'paperrrrrr',
    title: 'Paperrrrrr',
    category: 'flagship',
    tagline: 'AI Document Studio (Currently Building)',
    description:
      'A document studio that turns natural-language research prompts into formatted Word (.docx), PDF, Excel (.xlsx), and PowerPoint (.pptx) files with live split-screen preview.',
    details: [
      'Automated research pipeline that queries web sources, extracts facts, and structures content into document outlines.',
      'Split-screen canvas showing real-time typography, margins, and table calculations.',
      'Export pipeline generating styled .docx, vector PDF, .xlsx, and .pptx files on demand.',
    ],
    techStack: ['Next.js', 'React', 'TypeScript', 'MongoDB', 'Node.js', 'Tailwind CSS'],
    githubUrl: 'https://github.com/PRADXP007/Paperrrrrr',
    featured: true,
    accentColor: '#5C1A28',
  },
  {
    id: 'campusloop',
    title: 'CampusLoop',
    category: 'software',
    tagline: 'College Marketplace & Community',
    description:
      'A platform for college students to buy and sell secondhand books, electronics, and hostel essentials with verified university logins and real-time chat.',
    details: [
      'Built as a monorepo with Next.js frontend, Express REST API, and MongoDB storage.',
      'Real-time direct messaging between buyers and sellers using Socket.io.',
      'Restricted sign-ups to verified university email domains for safer transactions.',
    ],
    techStack: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Express', 'MongoDB', 'Socket.io'],
    githubUrl: 'https://github.com/PRADXP007/CampusLoop',
    featured: true,
    accentColor: '#5C1A28',
  },
  {
    id: 'explain-this-error',
    title: 'Explain This Error',
    category: 'software',
    tagline: 'Error Explainer & Fix Recommender',
    description:
      'A developer tool that parses compiler errors and stack traces, searches a vector database of verified fixes, and suggests specific code corrections.',
    details: [
      'Uses pgvector in PostgreSQL to find matching error patterns by semantic similarity.',
      'Generates specific before-and-after code diffs rather than generic debugging advice.',
      'Parses stack traces across TypeScript, Node.js, and Python.',
    ],
    techStack: ['TypeScript', 'pgvector', 'Next.js', 'PostgreSQL', 'Tailwind CSS'],
    githubUrl: 'https://github.com/PRADXP007/Explain-This-Error',
    accentColor: '#400414',
  },
  {
    id: 'mess-menu-planner',
    title: 'Mess Menu Planner',
    category: 'software',
    tagline: 'Hostel Weekly Meal Planner',
    description:
      'A weekly meal planning web app for hostel students with menu schedules, food ratings, and admin controls for mess managers.',
    details: [
      'Weekly schedule view with dietary filters and meal rotation calendars.',
      'Student rating and feedback system for tracking meal satisfaction over time.',
      'Lightweight client optimized for quick loading on spotty hostel Wi-Fi.',
    ],
    techStack: ['TypeScript', 'React', 'Node.js', 'Tailwind CSS', 'Vercel'],
    githubUrl: 'https://github.com/PRADXP007/Mess-Menu-Planner',
    liveUrl: 'https://mess-menu-planner.vercel.app',
    accentColor: '#5C1A28',
  },
  {
    id: 'scuderia-ferrari-web',
    title: 'Scuderia Ferrari Web',
    category: 'software',
    tagline: 'F1 Team History & Showcase',
    description:
      'An interactive editorial site walking through Ferrari\'s Formula 1 racing history, iconic cars, and championship seasons.',
    details: [
      'Scrollable timeline detailing Grand Prix cars and championship years.',
      'Custom typography and scroll-driven reveals styled around Ferrari\'s visual identity.',
      'Responsive image galleries and car specification cards.',
    ],
    techStack: ['TypeScript', 'React', 'Framer Motion', 'Tailwind CSS'],
    githubUrl: 'https://github.com/PRADXP007/scuderia-ferrari-web',
    accentColor: '#7A2436',
  },
  {
    id: 'bicycle-3d-web',
    title: 'Bicycle 3D Web',
    category: 'software',
    tagline: 'Interactive 3D Bicycle Showcase',
    description:
      'A 3D product visualizer in Three.js allowing users to orbit, zoom, inspect bicycle frame geometry, and see component callouts in real time.',
    details: [
      'Renders 3D bicycle models in WebGL with realistic PBR lighting and shadows.',
      'Clickable annotation markers explaining frame angles, gear ratios, and brakes.',
      'Optimized render loop to maintain 60 FPS on integrated GPUs.',
    ],
    techStack: ['JavaScript', 'WebGL', 'Three.js', 'CSS3', 'HTML5'],
    githubUrl: 'https://github.com/PRADXP007/Bicycle-3D-Web',
    accentColor: '#400414',
  },
  {
    id: 'setup-idea-validator',
    title: 'Setup Idea Validator',
    category: 'software',
    tagline: 'Startup Concept Validator',
    description:
      'A tool to stress-test early project ideas against market viability criteria, generating practical scoring and test plans.',
    details: [
      'Step-by-step diagnostic questionnaire covering target users, moat, and distribution.',
      'Generates structured SWOT breakdowns and validation experiment checklists.',
      'Distraction-free interface designed for fast brainstorming.',
    ],
    techStack: ['TypeScript', 'React', 'Next.js', 'Tailwind CSS'],
    githubUrl: 'https://github.com/PRADXP007/setup-idea-validator',
    accentColor: '#5C1A28',
  },
  {
    id: 'soulsync',
    title: 'Soulsync',
    category: 'software',
    tagline: 'Couples Journal & Shared Timeline',
    description:
      'A private web app for couples to log shared milestones, write daily prompts, and keep a synchronized photo memory timeline.',
    details: [
      'Shared private timeline for dates, milestones, and photo memories.',
      'Real-time sync for shared notes and interactive questions.',
      'Private authentication and clean, minimal layout.',
    ],
    techStack: ['TypeScript', 'React', 'Next.js', 'Tailwind CSS'],
    githubUrl: 'https://github.com/PRADXP007/soulsync',
    accentColor: '#7A2436',
  },
  {
    id: 'brain-tumour-detection',
    title: 'Brain Tumour Detection',
    category: 'software',
    tagline: 'MRI Brain Tumor Segmentation (Python)',
    description:
      'An image processing pipeline in Python using OpenCV and NumPy to filter MRI scans and isolate tumor boundaries via thresholding and morphological operations.',
    details: [
      'Preprocessing pipeline with median filtering and contrast enhancement to reduce MRI noise.',
      'Uses Otsu thresholding and watershed segmentation to outline abnormal tissue.',
      'Packaged as a reproducible Jupyter Notebook under Apache License 2.0.',
    ],
    techStack: ['Python', 'Jupyter Notebook', 'OpenCV', 'NumPy', 'Apache 2.0'],
    githubUrl: 'https://github.com/PRADXP007/brain-tumour-detection',
    accentColor: '#400414',
  },
];

export const HARDWARE_PROJECTS: Project[] = [
  {
    id: 'fpv-drone',
    title: 'FPV Drone',
    category: 'hardware',
    status: 'Active — Final Year Project',
    isFlagship: true,
    featured: true,
    tagline: 'Reptilia MARTIAN-III 220mm · ESP32 LiteWing Controller',
    description:
      'A custom-built FPV racing drone on a Reptilia MARTIAN-III 220mm quadcopter frame, engineered around an ESP32-based control architecture. Built with a LiteWing-style controller approach for flight control.',
    details: [
      'FPV video transmission',
      'Wi-Fi-based control integration',
      'Low-battery detection with automatic return/assist behavior',
      'Autopilot capability (in development)',
      'ESP32-driven flight control',
    ],
    techStack: ['ESP32', 'FPV', 'RF Systems', 'Embedded C', 'Flight Control'],
    schematicTag: 'HW-FPV-01',
    metric: '220mm Frame · Final Year Project',
  },
  {
    id: 'esp32-wifi-micro-drone',
    title: 'ESP32 WiFi Controlled Micro Drone',
    category: 'hardware',
    status: 'Active — Experimental',
    tagline: 'Micro Quad Testbed · Salvaged Flight Controller',
    description:
      'A compact micro drone using an ESP32 for wireless control and communication, built around a salvaged flight controller to cut cost and prove out the control architecture at small scale before scaling up to the main FPV build. A smaller, low-cost companion build to the FPV project above.',
    details: [
      'Proof-of-concept testbed for ESP32 wireless control algorithms.',
      'Engineered using a salvaged flight controller to minimize development cost.',
      'Validates flight dynamics and sensor telemetry at small scale prior to 220mm FPV deployment.',
    ],
    techStack: ['ESP32', 'Salvaged Flight Controller', 'Wireless Control'],
    schematicTag: 'HW-UAV-02',
    metric: 'Micro Quad · Companion Testbed',
  },
  {
    id: 'smart-pill-dispenser',
    title: 'Smart Pill Dispenser',
    category: 'hardware',
    status: 'In Development',
    tagline: 'HX711 Load Cell · I2C LCD · Automated Dispensing',
    description:
      'A real-time monitoring medication dispenser built on embedded IoT—uses an HX711 load cell for dosage/weight monitoring, an I2C LCD for status display, and automated dispensing logic, with Wi-Fi/email-based alerts for missed doses and periodic monitoring notifications (moved from an earlier SIM800L/SMS-based approach to Wi-Fi for reliability and cost).',
    details: [
      'Real-time dosage and weight tracking via calibrated HX711 load cell.',
      'I2C LCD interface providing live operational and schedule telemetry.',
      'Automated dispensing mechanism with scheduled dosage triggers.',
      'Wi-Fi and email alert pipeline notifying caregivers of missed or delayed doses.',
    ],
    techStack: ['Arduino/ESP32', 'HX711 Load Cell', 'I2C LCD', 'IoT Alerts'],
    schematicTag: 'HW-MED-03',
    metric: 'HX711 Load Cell · IoT Monitoring',
  },
  {
    id: 'lpg-detection-smart-booking',
    title: 'LPG Detection & Smart Booking IoT System',
    category: 'hardware',
    status: 'In Development',
    tagline: 'Gas Leak Monitoring · Auto Cylinder Booking Workflow',
    description:
      'An IoT system that continuously monitors LPG cylinder level and leak condition, triggering real-time alerts and an automated cylinder-booking workflow when levels run low or a leak is detected.',
    details: [
      'Continuous gas concentration sensing with calibrated leak thresholds.',
      'Weight and pressure monitoring to track remaining LPG reserves.',
      'Instant emergency alert broadcasts and alarm actuation upon leak detection.',
      'Automated refill booking logic triggered when cylinder reserves hit low threshold.',
    ],
    techStack: ['IoT', 'Gas Sensing', 'Embedded Alerts', 'Automated Booking Logic'],
    schematicTag: 'HW-GAS-04',
    metric: 'Leak Sensing · Auto-Refill Booking',
  },
];

