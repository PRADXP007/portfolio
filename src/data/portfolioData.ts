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
    id: 'paperrrrrr',
    title: 'Paperrrrrr',
    category: 'flagship',
    tagline: 'AI Document Studio · Autonomous Multi-Format Engine',
    description:
      'An enterprise-grade document generation platform that autonomously synthesizes publication-ready Word, PDF, Excel, and PowerPoint files from natural-language prompts with live multi-canvas previews.',
    details: [
      'Autonomous multi-step research pipeline extracting, verifying, and structuring multi-source domain knowledge.',
      'Live split-screen document canvas with real-time typesetting and dynamic formula calculations.',
      'Microservice architecture supporting instantaneous multi-format export (.docx, .pdf, .xlsx, .pptx).',
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
    tagline: 'Campus Social-Commerce & Peer Marketplace',
    description:
      'A college-exclusive social-commerce network enabling students to buy and sell secondhand essentials securely with real-time peer messaging and campus verification.',
    details: [
      'Monorepo architecture with Next.js frontend, Express backend, and MongoDB document persistence.',
      'Real-time bidirectional chat channels powered by Socket.io and custom presence indicators.',
      'Domain-gated university authentication ensuring a high-trust internal student trading network.',
    ],
    techStack: ['Next.js', 'React', 'TypeScript', 'Tailwind', 'Express', 'MongoDB', 'Socket.io'],
    githubUrl: 'https://github.com/PRADXP007/CampusLoop',
    featured: true,
    accentColor: '#5C1A28',
  },
  {
    id: 'explain-this-error',
    title: 'Explain This Error',
    category: 'software',
    tagline: 'RAG Debugging Engine · Vector-Backed Root Cause Analysis',
    description:
      'A developer productivity tool that ingests runtime exceptions and compiler errors, performing semantic vector search across a curated knowledge base to deliver instant root-cause analysis and code fixes.',
    details: [
      'Vector embeddings stored in pgvector for high-precision semantic similarity search across error catalogs.',
      'Context-aware prompt orchestration delivering actionable differential code patches rather than generic advice.',
      'Support for multi-language stack traces across TypeScript, Node.js, and Python.',
    ],
    techStack: ['TypeScript', 'pgvector', 'Next.js', 'PostgreSQL', 'Tailwind CSS'],
    githubUrl: 'https://github.com/PRADXP007/Explain-This-Error',
    accentColor: '#400414',
  },
  {
    id: 'mess-menu-planner',
    title: 'Mess Menu Planner',
    category: 'software',
    tagline: 'Weekly Hostel Recipe & Nutrition Management',
    description:
      'A meal scheduling and dining operations platform for university hostel students featuring weekly recipe calendars, real-time quality ratings, and full CRUD menu administration.',
    details: [
      'Dynamic calendar scheduler managing recurring meal rotations and dietary preference tracking.',
      'Crowdsourced student feedback analytics alerting administrators to food quality trends.',
      'Optimized lightweight client architecture delivering rapid load times on mobile networks.',
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
    tagline: 'Interactive Heritage & Motorsport Documentary',
    description:
      'An editorial digital retrospective capturing the historic milestones, championship lineage, and engineering evolution of the Scuderia Ferrari Formula 1 racing team.',
    details: [
      'Dynamic timeline visualizer traversing legendary Grand Prix machines and championship eras.',
      'Choreographed scroll animations and high-contrast typography reflecting iconic Ferrari racing aesthetics.',
      'Responsive media showcases with progressive asset optimization for high-density screens.',
    ],
    techStack: ['TypeScript', 'React', 'Framer Motion', 'Tailwind CSS'],
    githubUrl: 'https://github.com/PRADXP007/scuderia-ferrari-web',
    accentColor: '#7A2436',
  },
  {
    id: 'bicycle-3d-web',
    title: 'Bicycle 3D Web',
    category: 'software',
    tagline: 'Interactive WebGL & Three.js Product Showcase',
    description:
      'An immersive 3D web experience exploring bicycle geometry and mechanical craftsmanship through interactive camera orbits, dynamic material shaders, and exploded component views.',
    details: [
      'WebGL canvas rendering high-detail 3D bicycle meshes with custom PBR lighting and shadow maps.',
      'Interactive annotation hotspots detailing frame geometry, gear ratios, and braking systems.',
      'Adaptive performance throttling maintaining smooth 60 FPS across varied hardware capabilities.',
    ],
    techStack: ['JavaScript', 'WebGL', 'Three.js', 'CSS3', 'HTML5'],
    githubUrl: 'https://github.com/PRADXP007/Bicycle-3D-Web',
    accentColor: '#400414',
  },
  {
    id: 'setup-idea-validator',
    title: 'Setup Idea Validator',
    category: 'software',
    tagline: 'Early-Stage Venture & Concept Validation Engine',
    description:
      'A strategic ideation and validation tool that evaluates early-stage concepts against structured market criteria, providing structured feasibility scoring and risk mitigation frameworks.',
    details: [
      'Structured diagnostic intake assessing value proposition clarity, competitive moat, and customer personas.',
      'Automated SWOT generation and actionable step-by-step experiment roadmaps for founders.',
      'Clean editorial interface designed for minimal friction during strategic brainstorming.',
    ],
    techStack: ['TypeScript', 'React', 'Next.js', 'Tailwind CSS'],
    githubUrl: 'https://github.com/PRADXP007/setup-idea-validator',
    accentColor: '#5C1A28',
  },
  {
    id: 'soulsync',
    title: 'Soulsync',
    category: 'software',
    tagline: 'Interactive Relationship & Shared Moments Platform',
    description:
      'A private connection platform designed for couples to deepen interpersonal bonds through interactive prompts, synchronized memory timelines, and curated shared experiences.',
    details: [
      'Shared interactive space for capturing milestones, private photo archives, and reflection logs.',
      'Real-time synchronization ensuring couples remain connected across distances.',
      'End-to-end focus on user privacy and minimal, distraction-free aesthetic layout.',
    ],
    techStack: ['TypeScript', 'React', 'Next.js', 'Tailwind CSS'],
    githubUrl: 'https://github.com/PRADXP007/soulsync',
    accentColor: '#7A2436',
  },
  {
    id: 'brain-tumour-detection',
    title: 'Brain Tumour Detection',
    category: 'software',
    tagline: 'MRI Image Processing & Segmentation Pipeline',
    description:
      'An open-source medical imaging pipeline released under Apache License 2.0 that applies adaptive filtering, morphological operations, and watershed segmentation to delineate brain tumors from MRI scans.',
    details: [
      'Automated preprocessing pipeline incorporating spatial sharpening and median noise suppression.',
      'Otsu thresholding and morphological gradient extraction for accurate tumor boundary localization.',
      'Documented Jupyter Notebook workflow with reproducible diagnostic visualization outputs.',
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
