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
  role: 'ECE Student · Embedded Systems & Full-Stack Engineer',
  institution: 'Jain University, Bengaluru',
  degree: 'B.Tech Electronics & Communication Engineering',
  gradYear: 'Class of 2027 (Third Year)',
  cgpa: '7.3',
  location: 'JP Nagar, Bengaluru, India',
  email: 'pradee5606@gmail.com',
  github: 'https://github.com/PRADXP007',
  linkedin: 'https://linkedin.com/in/pradeeph007',
  portfolioUrl: 'https://pradeeph.vercel.app',
  bioHeadline: 'Bridging physical hardware engineering with intelligent software architecture and generative systems.',
  bioParagraphs: [
    'I am a third-year Electronics & Communication Engineering undergraduate at Jain University, Bengaluru with a focus that bridges low-level hardware design, RF simulation, and full-stack software engineering.',
    'My work spans custom FPV drone hardware design, embedded IoT architectures (ESP32 / RTOS / C++), Cadence Virtuoso IC verification, CST Studio RF simulation, as well as production-ready Next.js web applications and RAG-powered AI agents.',
  ],
  stats: [
    { label: 'Academic Standing', value: '7.3 CGPA' },
    { label: 'Engineering Projects', value: '15+' },
    { label: 'Specializations', value: 'Embedded × Web × AI' },
    { label: 'Location', value: 'Bengaluru, IN' },
  ],
};

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'Hardware & Embedded Systems',
    iconName: 'Cpu',
    subtitle: 'Low-level firmware, circuit design, RF simulation & autonomous electronics',
    skills: [
      { name: 'FPV Drone Build & Tuning', tag: 'Aero/RF' },
      { name: 'ESP32 & Arduino', tag: 'Microcontroller' },
      { name: 'Embedded C / C++', tag: 'Firmware' },
      { name: 'Cadence Virtuoso', tag: 'Analog/Digital EDA' },
      { name: 'CST Studio Suite', tag: 'RF & EM Simulation' },
      { name: 'VBA Macro Automation', tag: 'Simulation' },
      { name: 'Control Systems & PID', tag: 'Dynamics' },
      { name: 'PCB Design & Prototyping', tag: 'Hardware' },
      { name: 'LoRaWAN & IoT Protocols', tag: 'Wireless' },
    ],
  },
  {
    title: 'Full-Stack & Web Architecture',
    iconName: 'Layers',
    subtitle: 'Production-grade modern web applications with real-time capabilities',
    skills: [
      { name: 'Next.js 16 (App Router)', tag: 'Framework' },
      { name: 'React 19 & TypeScript', tag: 'Frontend' },
      { name: 'Tailwind CSS v4', tag: 'Styling' },
      { name: 'Express & Node.js', tag: 'Backend' },
      { name: 'MongoDB & Mongoose', tag: 'NoSQL' },
      { name: 'PostgreSQL & pgvector', tag: 'Relational & Vectors' },
      { name: 'Socket.io', tag: 'Real-time' },
      { name: 'REST APIs & Webhooks', tag: 'Integration' },
      { name: 'Vercel Deployment', tag: 'DevOps' },
    ],
  },
  {
    title: 'AI Engineering & Developer Tools',
    iconName: 'Sparkles',
    subtitle: 'Retrieval Augmented Generation, vector search, and LLM orchestration',
    skills: [
      { name: 'LLM Integration (Gemini, OpenAI)', tag: 'Inference' },
      { name: 'RAG & Vector Search (pgvector)', tag: 'Embeddings' },
      { name: 'Supabase', tag: 'BaaS & Storage' },
      { name: 'Prompt Engineering & Context Mgmt', tag: 'Optimization' },
      { name: 'Antigravity IDE', tag: 'Agentic AI' },
      { name: 'Stitch Design-to-Code', tag: 'Tooling' },
      { name: 'Python & NumPy', tag: 'Scripting' },
      { name: 'Git & Monorepo Workflows', tag: 'VCS' },
    ],
  },
  {
    title: 'UI/UX & Creative Engineering',
    iconName: 'Palette',
    subtitle: 'Editorial typography, spatial user interfaces, and interaction design',
    skills: [
      { name: 'Figma & Design Systems', tag: 'UI/UX' },
      { name: 'Framer Motion & Micro-interactions', tag: 'Motion' },
      { name: 'Lenis Smooth Scroll', tag: 'Experience' },
      { name: 'Adobe Express & Canva', tag: 'Graphic' },
      { name: 'Lightroom', tag: 'Media' },
      { name: 'User Journey Mapping', tag: 'Research' },
      { name: 'Component Tokenization', tag: 'Architecture' },
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
    badge: 'Industry Credential',
    description:
      'Rigorous credential covering advanced prompt engineering, context window management, tool use / function calling, and integrating frontier Claude intelligence models into resilient production applications.',
    highlights: [
      'Engineered structured JSON pipelines and deterministic agentic workflows using Claude 3.5 Sonnet and Haiku.',
      'Mastered retrieval-augmented generation architectures and high-density context curation.',
      'Designed multi-step validation checks ensuring deterministic, hallucination-resistant LLM outputs.',
    ],
    skills: ['Claude 3.5 API', 'Prompt Architecture', 'Tool Calling', 'RAG Pipelines', 'Context Optimization'],
    link: 'https://anthropic.com',
  },
  {
    id: 'itc-infotech',
    organization: 'ITC Infotech',
    role: 'UI/UX Design Intern',
    period: 'June – July 2025',
    type: 'experience',
    badge: 'Corporate Internship',
    description:
      'Worked with the enterprise design engineering team in Bengaluru to audit, modernize, and expand Figma design systems, establishing reusable component specifications and customer journey workflows.',
    highlights: [
      'Built and documented high-fidelity component libraries and design tokens in Figma adhering to strict accessibility guidelines.',
      'Formulated end-to-end user flows and interactive clickable prototypes for complex enterprise dashboards.',
      'Collaborated closely with front-end engineering teams to ensure pixel-perfect fidelity during handoff.',
    ],
    skills: ['Figma', 'Design Systems', 'Journey Mapping', 'Design Tokens', 'Prototyping', 'Accessibility'],
    link: 'https://itcinfotech.com',
  },
];

export const FLAGSHIP_PROJECT: Project = {
  id: 'paperloop-doc-studio',
  title: 'AI Document Generation Platform',
  category: 'flagship',
  tagline: 'Autonomous Research to Multi-Format Typeset Documents',
  description:
    'An enterprise-grade document generation engine that converts conversational prompts into publication-ready Word (.docx), PDF, Excel (.xlsx), and PowerPoint (.pptx) documents with autonomous web research, strict style templates, and live multi-canvas previews.',
  details: [
    'Autonomous Multi-Step Research: Queries real-time sources, synthesizes structured briefs, and calculates data sets before formatting.',
    'Live Multi-Format Canvas: Instant split-screen preview with page pagination, dynamic table recalculation, and typography inspection.',
    'Strict Editorial Engine: Enforces typographical standards (margins, running headers, IEEE/APA citation formatting, custom colorways).',
    'High-Throughput Rendering: Microservices pipeline generating pixel-perfect PDFs and styled Office OpenXML documents in sub-seconds.',
  ],
  techStack: ['Next.js 16', 'TypeScript', 'Tailwind CSS', 'FastAPI / Python', 'PyTorch', 'pgvector', 'OfficeGen', 'Puppeteer'],
  role: 'Creator & Lead Architect',
  metric: 'Sub-second multi-format compilation',
  featured: true,
  accentColor: '#5C1A28',
};

export const SOFTWARE_PROJECTS: Project[] = [
  {
    id: 'campusloop',
    title: 'CampusLoop',
    category: 'software',
    tagline: 'College-Exclusive Social-Commerce & Campus Ecosystem',
    description:
      'A full-stack campus network platform featuring verified student onboarding, real-time peer chat, a trusted student marketplace, and event discussion feeds.',
    details: [
      'Architected full monorepo with Next.js/React frontend and Express/MongoDB backend.',
      'Real-time messaging and notification channels powered by Socket.io and Redis pub/sub.',
      'Role-based university domain authentication ensuring 100% verified student safety.',
    ],
    techStack: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Express', 'MongoDB', 'Socket.io'],
    githubUrl: 'https://github.com/PRADXP007',
    featured: true,
    accentColor: '#5C1A28',
  },
  {
    id: 'doubt-loop',
    title: 'Doubt Loop',
    category: 'software',
    tagline: 'Self-Improving Course Q&A Agent with Vector Memory',
    description:
      'An intelligent academic assistant for engineering students that uses pgvector similarity search to reuse verified peer-reviewed answers, generating LLM responses only when novel queries arise.',
    details: [
      'Continuous feedback loop that converts high-rated LLM answers into permanent vector embeddings.',
      'Significantly reduces API token consumption by caching and matching semantic intent across student cohorts.',
      'Structured LaTeX equation formatting and code syntax rendering for technical engineering coursework.',
    ],
    techStack: ['Next.js', 'PostgreSQL', 'pgvector', 'OpenAI / Gemini API', 'TypeScript', 'Tailwind CSS'],
    githubUrl: 'https://github.com/PRADXP007',
    featured: true,
    accentColor: '#7A2436',
  },
  {
    id: 'explain-this-error',
    title: 'Explain This Error',
    category: 'software',
    tagline: 'RAG-Powered Developer Debugging & Stack Trace Explainer',
    description:
      'A specialized developer tool that decodes cryptic compiler errors and runtime stack traces by querying a curated knowledge base with pgvector-backed semantic retrieval.',
    details: [
      'Ingests complex stack traces across Node.js, C++, and Python, pinpointing root cause lines.',
      'Retrieves battle-tested fix patterns and contextual code patches rather than generic explanations.',
      'Interactive diff viewer showing before/after code corrections with one-click copy.',
    ],
    techStack: ['React', 'TypeScript', 'pgvector', 'Supabase', 'Tailwind CSS', 'LLM RAG'],
    githubUrl: 'https://github.com/PRADXP007',
    accentColor: '#400414',
  },
  {
    id: 'mess-menu-planner',
    title: 'Mess Menu Planner',
    category: 'software',
    tagline: 'Weekly Hostel Recipe & Meal Management System',
    description:
      'A live, deployed meal-planning and feedback management web application for university hostel students with community rating, dietary preferences, and real-time menu scheduling.',
    details: [
      'Interactive weekly schedule calendar with nutrition tracking and dietary filters (veg, non-veg, vegan).',
      'Student sentiment rating dashboard alerting mess wardens to meal quality feedback.',
      'Instant offline-capable PWA support for fast access without high mobile bandwidth.',
    ],
    techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Node.js', 'MongoDB', 'Vercel'],
    githubUrl: 'https://github.com/PRADXP007',
    liveUrl: 'https://mess-menu-planner.vercel.app',
    accentColor: '#5C1A28',
  },
  {
    id: 'check-and-submit',
    title: 'Check & Submit',
    category: 'software',
    tagline: 'Academic Assignment Integrity & Plagiarism Engine',
    description:
      'An assignment pre-submission portal that analyzes code and text submissions for syntactic similarity, AI-generated patterns, and citation completeness.',
    details: [
      'AST-based token comparison for detecting refactored or variable-renamed code plagiarism.',
      'Cosine similarity document analysis against cohort assignment pools.',
      'Automated student feedback report highlighting unoriginal passages before final grading.',
    ],
    techStack: ['Next.js', 'Python AST Engine', 'TypeScript', 'Tailwind CSS', 'FastAPI'],
    githubUrl: 'https://github.com/PRADXP007',
    accentColor: '#7A2436',
  },
  {
    id: 'messi-the-legacy',
    title: 'Messi: The Legacy',
    category: 'software',
    tagline: '23-Section Interactive Documentary Experience',
    description:
      'A long-form editorial digital museum tribute site featuring 23 interactive sections, bespoke multi-font typographic systems, Lenis smooth scrolling, and Framer Motion cinematics.',
    details: [
      '23 choreographed chapters traversing career milestones with frame-by-frame scroll reveals.',
      'Advanced physics-based Lenis smooth scrolling paired with SVG timeline animation paths.',
      'Curated editorial aesthetic utilizing multi-typeface pairings and dynamic photo carousels.',
    ],
    techStack: ['React', 'Next.js', 'Framer Motion', 'Lenis Scroll', 'Tailwind CSS', 'TypeScript'],
    githubUrl: 'https://github.com/PRADXP007',
    liveUrl: 'https://messi-the-legacy.vercel.app',
    accentColor: '#5C1A28',
  },
  {
    id: 'mustang-unbroken',
    title: 'Mustang Unbroken',
    category: 'software',
    tagline: '3D Storytelling Showcase for the Ford Mustang',
    description:
      'A web showcase blending React, Three.js WebGL rendering, and GSAP scroll timelines to explore the heritage, aerodynamics, and engine architecture of the Ford Mustang.',
    details: [
      'Real-time 3D model exploration with dynamic studio lighting and camera orbit splines.',
      'GSAP ScrollTrigger integration synchronizing cinematic audio cues and exploded mechanical views.',
      'Optimized asset loading pipeline maintaining 60 FPS on high-DPI displays.',
    ],
    techStack: ['React', 'Three.js', 'GSAP', 'Framer Motion', 'TypeScript', 'Tailwind CSS'],
    githubUrl: 'https://github.com/PRADXP007',
    accentColor: '#400414',
  },
];

export const HARDWARE_PROJECTS: Project[] = [
  {
    id: 'fpv-drone-build',
    title: 'Custom FPV Racing Drone',
    category: 'hardware',
    tagline: 'Reptile Martian 3 Frame · RF Telemetry · Betaflight Tuning',
    description:
      'Engineered and assembled a high-performance 5-inch FPV racing quadcopter on a carbon fiber Reptile Martian 3 frame. Executed full power distribution wiring, Betaflight PID filtering, and RF link tuning.',
    details: [
      'Selected brushless motors (2306 2450KV) and 4S/6S LiPo power architecture delivering 4:1 thrust-to-weight ratio.',
      'Soldered STM32 flight controller and 4-in-1 ESC with low-ESR capacitors to suppress inductive voltage spikes.',
      'Configured ExpressLRS 2.4GHz low-latency radio link and 5.8GHz video transmitter with tuned cloverleaf antennas.',
      'Tuned dynamic PID loops and bidirectional DShot RPM filtering for vibration attenuation.',
    ],
    techStack: ['Betaflight', 'ExpressLRS 2.4GHz', 'C / C++', 'STM32', 'LiPo Power Electronics', 'Soldering'],
    schematicTag: 'AER-FPV-01',
    metric: '4:1 Thrust-to-Weight Ratio',
    accentColor: '#5C1A28',
  },
  {
    id: 'patch-antenna-array',
    title: '2×2 Microstrip Patch Antenna Array',
    category: 'hardware',
    tagline: 'Final Year Project · 2.4 GHz ISM Band · CST Studio Suite & VBA',
    description:
      'Designed, simulated, and optimized a 2×2 planar microstrip patch antenna array operating at 2.4 GHz for WiFi/IoT wireless communication, incorporating automated VBA parameter sweeps in CST Studio Suite.',
    details: [
      'Calculated patch dimensions on FR-4 / Rogers dielectric substrate with corporate microstrip feed network.',
      'Scripted VBA macros inside CST Microwave Studio for automated dimensional sweeps and impedance matching.',
      'Achieved S11 return loss < -22 dB and enhanced directional gain > 11.2 dBi with suppressed sidelobes.',
      'Fabricated and verified radiation pattern alignment against theoretical EM field predictions.',
    ],
    techStack: ['CST Studio Suite', 'VBA Automation', 'RF Engineering', 'Microwave Theory', 'Impedance Matching'],
    schematicTag: 'RF-ANT-2X2',
    metric: 'S11 < -22 dB @ 2.4 GHz',
    accentColor: '#7A2436',
  },
  {
    id: 'smart-pill-dispenser',
    title: 'IoT Smart Pill Dispenser',
    category: 'hardware',
    tagline: 'Automated Medication Carousel · ESP32 · Real-Time Alerts',
    description:
      'An embedded healthcare hardware system that dispenses prescribed dosages on precise time schedules, preventing missed medication through audible buzzers, OLED prompts, and cloud notifications.',
    details: [
      'Designed a multi-compartment rotating carousel driven by precision SG90 micro-servos.',
      'ESP32 microcontroller synchronizing with NTP time servers and cloud prescription schedules.',
      'Integrated IR beam-break optical sensors to verify pill drop verification and detect physical jams.',
      'Pushes real-time alerts to caregivers via MQTT / Telegram bot webhook if dosage is uncollected.',
    ],
    techStack: ['ESP32', 'Embedded C++', 'Servo Control', 'IR Optical Sensing', 'MQTT', 'OLED I2C'],
    schematicTag: 'IOT-MED-03',
    metric: '100% Drop Verification',
    accentColor: '#400414',
  },
  {
    id: 'smart-lpg-detection',
    title: 'Smart LPG Gas Detection & Leak Alert',
    category: 'hardware',
    tagline: 'MQ-6 Gas Sensor · Auto Valve Shutoff · GSM / Buzzer Telemetry',
    description:
      'An industrial and domestic safety appliance that senses liquefied petroleum gas leaks, triggers emergency solenoid valve shutoff, and broadcasts SMS emergency alerts.',
    details: [
      'Interfaced calibrated MQ-6 analog gas sensor with ADC threshold calibration for combustible hydrocarbons.',
      'Relay-actuated solenoid valve cutoff mechanism to isolate gas canisters at the source instantly.',
      'GSM module automation dispatching urgent geolocated SMS alerts to homeowner and facility manager.',
      'High-decibel piezo siren and LED strobe indication for on-premises auditory warning.',
    ],
    techStack: ['Microcontroller C', 'MQ-6 Sensor', 'Relay / Solenoid Control', 'GSM SIM800L', 'Analog ADC'],
    schematicTag: 'SAF-GAS-04',
    metric: '< 200ms Trigger Latency',
    accentColor: '#5C1A28',
  },
  {
    id: 'esp32-wifi-micro-drone',
    title: 'ESP32 WiFi Micro Drone',
    category: 'hardware',
    tagline: 'Coreless Motors · UDP Telemetry · Smartphone Web Controller',
    description:
      'A compact, lightweight indoor micro quadcopter powered by an ESP32 microcontroller with direct smartphone WiFi telemetry control and real-time MPU6050 IMU stabilization.',
    details: [
      'Designed ultralight custom frame with 8520 brushed coreless motors and MOSFET drive circuitry.',
      'Coded complementary filter and PID stabilization algorithm reading 6-axis MPU6050 gyro/accel data at 250 Hz.',
      'Hosted captive WiFi WebSockets / UDP server on ESP32 enabling virtual dual-joystick phone control.',
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
    tagline: 'Cadence Virtuoso · CMOS Schematic & Layout · Transient Simulation',
    description:
      'Designed, simulated, and verified a 4-bit twisted-ring Johnson Counter at the transistor schematic and physical layout level using Cadence Virtuoso IC tools.',
    details: [
      'Constructed D-Flip Flop master-slave circuits using complementary CMOS logic gates.',
      'Ran Spectre transient simulations verifying 8 distinct clock state sequences with zero glitching.',
      'Performed Design Rule Check (DRC) and Layout Versus Schematic (LVS) verification for foundry tapeout readiness.',
    ],
    techStack: ['Cadence Virtuoso', 'Spectre Simulator', 'CMOS VLSI', 'DRC / LVS', 'Digital Logic'],
    schematicTag: 'EDA-VLSI-06',
    metric: 'Zero-Glitch 8-State Cycle',
    accentColor: '#400414',
  },
  {
    id: 'brain-tumor-matlab',
    title: 'Brain Tumor Detection via Image Processing',
    category: 'hardware',
    tagline: 'MATLAB · MRI Segmentation · Morphological Filtering',
    description:
      'An automated diagnostic image processing algorithm developed in MATLAB to identify, isolate, and delineate brain tumors from MRI slice scans with noise reduction and watershed segmentation.',
    details: [
      'Applied median filtering and high-pass spatial sharpening to eliminate MRI scanning artifacts.',
      'Utilized Otsu thresholding and morphological erosion/dilation to extract abnormal mass boundaries.',
      'Calculated tumor area metrics and centroid positioning for diagnostic classification assistance.',
    ],
    techStack: ['MATLAB', 'Image Processing Toolbox', 'Morphological Filtering', 'Watershed Segmentation'],
    schematicTag: 'DSP-IMG-07',
    metric: 'High Boundary Precision',
    accentColor: '#5C1A28',
  },
];
