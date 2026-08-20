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
    id: 'fpv-drone-build',
    title: 'Custom FPV Racing Drone',
    category: 'hardware',
    tagline: 'Reptile Martian 3 · 5-Inch 4S/6S · Betaflight Tuning',
    description:
      'Built a 5-inch carbon fiber FPV racing quadcopter from individual components. Soldered the power distribution board, wired flight electronics, tuned Betaflight PID filters, and set up the 2.4 GHz ExpressLRS control link.',
    details: [
      'Paired 2306 2450KV brushless motors with 4S LiPos for an estimated 4:1 thrust-to-weight ratio.',
      'Soldered STM32 flight controller and 4-in-1 ESC with low-ESR capacitors to protect against voltage spikes.',
      'Configured ExpressLRS 2.4 GHz radio link and 5.8 GHz analog video transmitter with matched antennas.',
      'Tuned PID loops and enabled bidirectional DShot RPM filtering to eliminate motor vibrations.',
    ],
    techStack: ['Betaflight', 'ExpressLRS 2.4GHz', 'C / C++', 'STM32', 'Power Electronics', 'Soldering'],
    schematicTag: 'AER-FPV-01',
    metric: '4:1 Thrust-to-Weight Ratio',
    accentColor: '#5C1A28',
  },
  {
    id: 'patch-antenna-array',
    title: '2×2 Microstrip Patch Antenna Array',
    category: 'hardware',
    tagline: '2.4 GHz ISM Band · CST Studio & VBA Automation',
    description:
      'Designed and simulated a 2×2 microstrip patch antenna array for the 2.4 GHz ISM band. Wrote VBA automation scripts in CST Microwave Studio to sweep patch dimensions and match feed line impedance.',
    details: [
      'Calculated physical patch dimensions on FR-4 substrate using transmission line equations.',
      'Wrote VBA macros in CST Studio to run automated dimensional sweeps for impedance matching.',
      'Achieved return loss S11 < -22 dB and directional gain > 11.2 dBi at 2.4 GHz.',
      'Verified radiation patterns against analytical electromagnetic formulas.',
    ],
    techStack: ['CST Studio Suite', 'VBA Scripting', 'RF Design', 'Microwave Theory', 'Impedance Matching'],
    schematicTag: 'RF-ANT-2X2',
    metric: 'S11 < -22 dB @ 2.4 GHz',
    accentColor: '#7A2436',
  },
  {
    id: 'smart-pill-dispenser',
    title: 'IoT Smart Pill Dispenser',
    category: 'hardware',
    tagline: 'Automated Medication Carousel · ESP32 & MQTT',
    description:
      'An ESP32-based dispenser that rotates a medication carousel on programmed schedules, uses an IR sensor to confirm the pill dropped, and alerts caregivers over MQTT if a dose is missed.',
    details: [
      'Built a rotating carousel driven by an SG90 micro-servo.',
      'Synced the ESP32 clock via NTP to maintain accurate dispense schedules without an RTC module.',
      'Added an IR beam-break sensor under the chute to verify pill drops and detect jams.',
      'Sends webhook alerts to a Telegram bot if a scheduled dose is not collected within 15 minutes.',
    ],
    techStack: ['ESP32', 'Embedded C++', 'Servo Control', 'IR Optical Sensing', 'MQTT', 'OLED I2C'],
    schematicTag: 'IOT-MED-03',
    metric: 'IR Drop Verification',
    accentColor: '#400414',
  },
  {
    id: 'smart-lpg-detection',
    title: 'Smart LPG Gas Detection & Leak Alert',
    category: 'hardware',
    tagline: 'MQ-6 Sensor · Automatic Valve Shutoff · GSM SMS',
    description:
      'A safety device that detects combustible gas leaks with an MQ-6 sensor, triggers a 12V solenoid valve to shut off the gas supply immediately, and sends an SMS alert via a GSM module.',
    details: [
      'Interfaced an MQ-6 gas sensor with calibrated ADC thresholds for propane/butane detection.',
      'Actuated a 12V solenoid valve through a relay to shut the main gas line in under 200 ms.',
      'Automated SIM800L GSM module to send SMS notifications with timestamp and sensor readings.',
      'Added a loud buzzer and visual LED alarm for local on-site warning.',
    ],
    techStack: ['Microcontroller C', 'MQ-6 Sensor', 'Relay / Solenoid Control', 'GSM SIM800L', 'Analog ADC'],
    schematicTag: 'SAF-GAS-04',
    metric: '< 200ms Valve Cutoff',
    accentColor: '#5C1A28',
  },
  {
    id: 'esp32-wifi-micro-drone',
    title: 'ESP32 WiFi Micro Drone',
    category: 'hardware',
    tagline: 'Coreless Motors · WebSockets · Phone Controller',
    description:
      'An indoor micro quadcopter powered by a single ESP32, using 8520 coreless motors, an MPU6050 IMU for flight stabilization, and a phone web app for control.',
    details: [
      'Assembled a lightweight frame with 8520 brushed motors driven by MOSFET switches.',
      'Implemented complementary filtering and PID rate loops reading MPU6050 gyro/accel data at 250 Hz.',
      'Hosted a captive Wi-Fi access point and WebSocket server on the ESP32 for touch joystick controls on mobile.',
    ],
    techStack: ['ESP32', 'MPU6050 6-DOF IMU', 'PWM Motor Drive', 'UDP / WebSockets', 'Embedded C++'],
    schematicTag: 'AER-WIFI-05',
    metric: '250 Hz IMU Feedback Loop',
    accentColor: '#7A2436',
  },
  {
    id: 'johnson-counter-cadence',
    title: '4-Bit Johnson Counter IC Design',
    category: 'hardware',
    tagline: 'Cadence Virtuoso · CMOS Transistor Layout & DRC/LVS',
    description:
      'Transistor-level schematic design and physical CMOS layout of a 4-bit Johnson counter in Cadence Virtuoso, verified with Spectre transient simulations.',
    details: [
      'Built master-slave D flip-flops from complementary NMOS/PMOS transistor networks.',
      'Ran Spectre transient simulations to verify all 8 output states across clock cycles.',
      'Completed DRC and LVS checks cleanly on the physical layout view.',
    ],
    techStack: ['Cadence Virtuoso', 'Spectre Simulator', 'CMOS VLSI', 'DRC / LVS', 'Digital Logic'],
    schematicTag: 'EDA-VLSI-06',
    metric: 'Clean DRC & LVS Verification',
    accentColor: '#400414',
  },
  {
    id: 'brain-tumor-matlab',
    title: 'Brain Tumor Detection via Image Processing',
    category: 'hardware',
    tagline: 'MATLAB · MRI Filtering & Watershed Segmentation',
    description:
      'A MATLAB script that processes MRI scans through median filtering, Otsu thresholding, and watershed segmentation to highlight tumor regions and compute area metrics.',
    details: [
      'Applied 2D median filtering to remove high-frequency noise while preserving edge definition.',
      'Used Otsu thresholding and morphological operations to segment the target region.',
      'Calculated approximate pixel area and centroid coordinates for the detected region.',
    ],
    techStack: ['MATLAB', 'Image Processing Toolbox', 'Morphological Filtering', 'Watershed Segmentation'],
    schematicTag: 'DSP-IMG-07',
    metric: 'Region & Area Metrics',
    accentColor: '#5C1A28',
  },
];
