export interface Project {
  id: string;
  title: string;
  category: 'software' | 'hardware' | 'flagship';
  tagline: string;
  description: string;
  whyBuilt?: string;
  details?: string[];
  techStack: string[];
  role?: string;
  metric?: string;
  githubUrl?: string;
  liveUrl?: string;
  featured?: boolean;
  schematicTag?: string;
  accentColor?: string;
}

export interface SkillCategory {
  title: string;
  iconName: string;
  subtitle: string;
  skills: { name: string; tag?: string }[];
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
  role: 'ECE Student · Embedded Tinkerer & Full-Stack Builder',
  institution: 'Jain University, Bengaluru',
  degree: 'B.Tech in Electronics & Communication Engineering',
  gradYear: 'Class of 2027 (Currently 3rd Year)',
  cgpa: '7.3 CGPA',
  location: 'JP Nagar, Bengaluru, India',
  email: 'pradee5606@gmail.com',
  github: 'https://github.com/PRADXP007',
  linkedin: 'https://linkedin.com/in/pradeeph007',
  portfolioUrl: 'https://pradeeph.vercel.app',
  tagline: 'Crafting things with silicon, solder, and clean code.',
  bioHeadline: "Hey, I'm Pradeep — an engineer who loves bridging the physical and digital worlds.",
  bioParagraphs: [
    "I'm a 3rd-year Electronics & Communication Engineering student at Jain University in Bengaluru. My journey began with pulling apart broken gadgets and soldering my first drone circuits, which quickly grew into an obsession with how hardware and software talk to each other.",
    "On any given weekend, you'll find me tuning PID filters on custom FPV racing drones, running RF antenna simulations in CST Studio, designing digital IC layouts in Cadence Virtuoso, or staying up late building full-stack web apps in Next.js and experimenting with LLMs & vector search.",
    "I believe the most exciting engineering happens right at the seam where low-level electronics meet high-level, human-centric software."
  ],
  interests: [
    'FPV Drone Racing & Acro Flying',
    'Custom PCB Design & Soldering',
    'Modern Web Craft & Typography',
    'Formula 1 & Scuderia Ferrari',
    'Bengaluru Filter Coffee & Tech Meetups'
  ],
  stats: [
    { label: 'Engineering Builds', value: '16+' },
    { label: 'Current Focus', value: 'Hardware × AI' },
    { label: 'Academic Standing', value: '7.3 CGPA' },
    { label: 'Home Base', value: 'Bengaluru, IN' },
  ],
};

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'Hardware & Embedded Systems',
    iconName: 'Cpu',
    subtitle: 'From soldering irons and RF sweeps to firmware and motor controllers',
    skills: [
      { name: 'FPV Drone Build & PID Tuning', tag: 'Acro/RF' },
      { name: 'ESP32 & Arduino Prototyping', tag: 'Microcontroller' },
      { name: 'Embedded C / C++', tag: 'Firmware' },
      { name: 'Cadence Virtuoso', tag: 'CMOS IC Layout' },
      { name: 'CST Studio Suite', tag: 'RF & Antenna Sim' },
      { name: 'VBA Macro Automation', tag: 'Simulation' },
      { name: 'Control Systems & PID Dynamics', tag: 'Control' },
      { name: 'PCB Schematic & Soldering', tag: 'Hardware' },
      { name: 'Sensors & Actuators (I2C, SPI)', tag: 'Interfacing' },
    ],
  },
  {
    title: 'Full-Stack Web Development',
    iconName: 'Layers',
    subtitle: 'Building responsive, fast, and reliable web apps from frontend to database',
    skills: [
      { name: 'Next.js 16 (App Router)', tag: 'Framework' },
      { name: 'React 19 & TypeScript', tag: 'Frontend' },
      { name: 'Tailwind CSS v4', tag: 'Styling' },
      { name: 'Node.js & Express', tag: 'Backend' },
      { name: 'MongoDB & Mongoose', tag: 'NoSQL' },
      { name: 'PostgreSQL & pgvector', tag: 'Database' },
      { name: 'Socket.io (Real-Time)', tag: 'WebSockets' },
      { name: 'REST APIs & Webhooks', tag: 'Integration' },
      { name: 'Vercel & Cloud Deployments', tag: 'DevOps' },
    ],
  },
  {
    title: 'AI Engineering & Developer Tools',
    iconName: 'Sparkles',
    subtitle: 'Putting modern language models and vector search into practical workflows',
    skills: [
      { name: 'LLM Integration (Gemini, Claude, GPT)', tag: 'Inference' },
      { name: 'RAG & Vector Retrieval (pgvector)', tag: 'Embeddings' },
      { name: 'Supabase & BaaS', tag: 'Backend' },
      { name: 'Prompt Design & Context Structuring', tag: 'Optimization' },
      { name: 'Antigravity IDE & AI Agents', tag: 'Tooling' },
      { name: 'Python, NumPy & OpenCV', tag: 'Data & Vision' },
      { name: 'Git & GitHub Collaboration', tag: 'VCS' },
    ],
  },
  {
    title: 'UI/UX & Creative Craft',
    iconName: 'Palette',
    subtitle: 'Obsessing over spacing, fluid animations, typography, and clean interactions',
    skills: [
      { name: 'Figma & Design Tokens', tag: 'UI/UX' },
      { name: 'Framer Motion & Micro-Interactions', tag: 'Motion' },
      { name: 'Lenis Smooth Scrolling', tag: 'Experience' },
      { name: 'Adobe Express & Canva', tag: 'Graphic' },
      { name: 'Lightroom Photo Editing', tag: 'Media' },
      { name: 'User Flow & Journey Mapping', tag: 'UX Research' },
      { name: 'Design Systems Architecture', tag: 'System' },
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
      'Completed an intensive builder program exploring how to build reliable, high-context AI applications with Claude models. Focused on making model outputs consistent and deterministic.',
    highlights: [
      'Built multi-turn RAG pipelines and tool-calling workflows using Claude 3.5 Sonnet.',
      'Designed structured validation schemas to eliminate hallucinated JSON responses.',
      'Learned best practices for optimizing token usage and dynamic context window management.',
    ],
    skills: ['Claude 3.5 API', 'Tool Calling', 'Prompt Architecture', 'RAG Pipelines', 'Context Optimization'],
    link: 'https://anthropic.com',
  },
  {
    id: 'itc-infotech',
    organization: 'ITC Infotech',
    role: 'UI/UX Design Intern',
    period: 'June – July 2025',
    type: 'experience',
    badge: 'Design Internship',
    description:
      'Worked alongside the enterprise design engineering team in Bengaluru to revamp design systems, craft accessible components, and map intuitive flows for complex business tools.',
    highlights: [
      'Designed and documented clean, reusable Figma components following WCAG accessibility guidelines.',
      'Created interactive prototypes and user journey maps for enterprise dashboard features.',
      'Collaborated directly with frontend engineers to ensure the final code matched design tokens pixel-for-pixel.',
    ],
    skills: ['Figma', 'Design Systems', 'Interactive Prototyping', 'User Journeys', 'Design Tokens'],
    link: 'https://itcinfotech.com',
  },
];

export const FLAGSHIP_PROJECT: Project = {
  id: 'paperrrrrr',
  title: 'Paperrrrrr',
  category: 'flagship',
  tagline: 'AI Document Generation Platform · Prompt to Polished Files',
  description:
    'An AI document generation platform that turns a simple conversational prompt into fully formatted, ready-to-share Word (.docx), PDF, Excel (.xlsx), and PowerPoint (.pptx) documents — complete with automated web research, calculations, and live split-screen previews.',
  whyBuilt:
    'Formatting academic papers, spreadsheets, and slide decks by hand takes hours. I wanted to build a single intelligent engine that handles the research, layout, and multi-format compilation automatically.',
  details: [
    'Autonomous Research Step: Pulls live facts and data points to write structured, citation-ready sections before typesetting.',
    'Live Multi-Format Canvas: Instant split-screen preview letting you check pagination, tables, and typography in real time.',
    'Strict Editorial Rules: Automatically applies consistent margins, headers, IEEE/APA citations, and clean color schemes.',
    'Fast Export Pipeline: Compiles styled Office OpenXML and vector PDF documents in sub-seconds.',
  ],
  techStack: ['Next.js 16', 'React 19', 'TypeScript', 'MongoDB', 'Node.js', 'Tailwind CSS', 'FastAPI'],
  role: 'Creator & Lead Builder',
  metric: 'Instant 4-Format Export',
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
      'An AI-powered document creation platform that auto-generates typeset Word, PDF, Excel, and PowerPoint files from a single prompt, complete with background web research and live multi-canvas previews.',
    whyBuilt:
      'Tired of spending hours tweaking slide margins and document formatting, I built an automated agent to research and typeset files for me.',
    details: [
      'Autonomous research pipeline that gathers and structures verified web information.',
      'Live interactive document canvas with real-time typography inspection and table calculations.',
      'Export engine for instant .docx, .pdf, .xlsx, and .pptx document generation.',
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
    tagline: 'College-Exclusive Social Marketplace & Student Hub',
    description:
      'A trusted student-only platform for buying, selling, and exchanging secondhand textbooks, electronics, and dorm essentials on campus, backed by real-time peer chat and verified student logins.',
    whyBuilt:
      'Senior students always have great books and gear to pass down, but WhatsApp groups get messy quickly. CampusLoop gave our campus a dedicated, safe marketplace.',
    details: [
      'Full monorepo with Next.js/React frontend and Express/MongoDB backend.',
      'Real-time peer chat and instant listing alerts built with Socket.io.',
      'College email domain verification ensuring only verified campus students can trade.',
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
    tagline: 'RAG Developer Tool for Debugging Stack Traces',
    description:
      'A handy developer assistant that takes confusing compiler errors and stack traces, searches a curated pgvector knowledge base, and explains the root cause along with actionable code patches.',
    whyBuilt:
      'Generic AI answers often miss project context. By indexing verified fixes in a vector database, this tool provides exact, battle-tested solutions in seconds.',
    details: [
      'Uses pgvector semantic similarity search to match error signatures against proven fixes.',
      'Generates context-aware diffs showing exactly what lines of code need changing.',
      'Supports stack traces across TypeScript, JavaScript, Python, and C++.',
    ],
    techStack: ['TypeScript', 'pgvector', 'Next.js', 'PostgreSQL', 'Tailwind CSS'],
    githubUrl: 'https://github.com/PRADXP007/Explain-This-Error',
    accentColor: '#400414',
  },
  {
    id: 'mess-menu-planner',
    title: 'Mess Menu Planner',
    category: 'software',
    tagline: 'Weekly Recipe & Meal Feedback App for Hostel Students',
    description:
      'A deployed weekly meal planner and feedback tracker built for hostel students to check upcoming menus, rate meal quality, and help mess staff adjust recipes based on real student reviews.',
    whyBuilt:
      'Built this to solve the everyday hostel dilemma of "What is for lunch today?" while giving students a voice to rate food quality constructively.',
    details: [
      'Interactive weekly calendar schedule with dietary tags (veg, non-veg, special).',
      'Daily student rating system providing mess managers with immediate quality insights.',
      'Lightweight PWA design for instant loading even on spotty campus WiFi.',
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
    tagline: 'Interactive Documentary & Formula 1 Tribute',
    description:
      'An editorial web retrospective celebrating the racing heritage, historic Grand Prix cars, and engineering triumphs of Scuderia Ferrari with immersive motion and bold motorsport aesthetics.',
    whyBuilt:
      'As a huge Formula 1 fan, I wanted to build a tribute site that captures the speed, passion, and design legacy of the Prancing Horse with bespoke typography and animations.',
    details: [
      'Interactive visual timeline walking through iconic F1 eras, engines, and championship victories.',
      'Smooth scroll reveals and high-contrast editorial typography inspired by vintage racing posters.',
      'Optimized image loading for crisp performance across mobile and desktop.',
    ],
    techStack: ['TypeScript', 'React', 'Framer Motion', 'Tailwind CSS'],
    githubUrl: 'https://github.com/PRADXP007/scuderia-ferrari-web',
    accentColor: '#7A2436',
  },
  {
    id: 'bicycle-3d-web',
    title: 'Bicycle 3D Web',
    category: 'software',
    tagline: 'Interactive 3D Mechanical Showcase with Three.js',
    description:
      'An interactive 3D web experience that lets users orbit, zoom, and inspect the mechanical anatomy of a bicycle with real-time lighting, material shaders, and exploded component views.',
    whyBuilt:
      'A fun deep dive into WebGL and Three.js to explore how 3D product storytelling can make mechanical engineering accessible and engaging on the web.',
    details: [
      'Real-time 3D model rendering with custom PBR materials and dynamic studio lighting.',
      'Interactive click hotspots detailing frame geometry, drivetrain mechanics, and braking components.',
      'Smooth 60 FPS performance tuning across low-power and mobile devices.',
    ],
    techStack: ['JavaScript', 'WebGL', 'Three.js', 'CSS3', 'HTML5'],
    githubUrl: 'https://github.com/PRADXP007/Bicycle-3D-Web',
    accentColor: '#400414',
  },
  {
    id: 'setup-idea-validator',
    title: 'Setup Idea Validator',
    category: 'software',
    tagline: 'Early-Stage Business Idea & Feasibility Testing Tool',
    description:
      'A structured diagnostic tool that helps students and early-stage founders stress-test their startup ideas against key market criteria, generating actionable validation roadmaps and SWOT breakdowns.',
    whyBuilt:
      'Too many great ideas stall at the "where do I begin" stage. I built this tool to turn fuzzy concepts into structured, testable hypotheses.',
    details: [
      'Guided intake questionnaire covering problem urgency, target personas, and competitive moats.',
      'Generates automated SWOT matrices and simple, low-cost experiment suggestions.',
      'Minimalist, distraction-free interface for rapid ideation sessions.',
    ],
    techStack: ['TypeScript', 'React', 'Next.js', 'Tailwind CSS'],
    githubUrl: 'https://github.com/PRADXP007/setup-idea-validator',
    accentColor: '#5C1A28',
  },
  {
    id: 'soulsync',
    title: 'Soulsync',
    category: 'software',
    tagline: 'Private Connection Platform for Couples',
    description:
      'A cozy, private digital space for partners to stay connected through thoughtful daily prompts, shared memory photo albums, and synchronized relationship milestone timelines.',
    whyBuilt:
      'Most social apps are built for public audiences. Soulsync was designed as a calm, distraction-free sanctuary strictly for two people to cherish their moments.',
    details: [
      'Shared timeline for milestones, date night memories, and personal notes.',
      'Interactive daily questions to spark meaningful conversations across distances.',
      'Warm, intimate design language with strict privacy protection.',
    ],
    techStack: ['TypeScript', 'React', 'Next.js', 'Tailwind CSS'],
    githubUrl: 'https://github.com/PRADXP007/soulsync',
    accentColor: '#7A2436',
  },
  {
    id: 'brain-tumour-detection',
    title: 'Brain Tumour Detection',
    category: 'software',
    tagline: 'MRI Image Processing & Segmentation Pipeline in Python',
    description:
      'An open-source biomedical image processing pipeline (Apache 2.0) using morphological operations, spatial filtering, and watershed segmentation in Jupyter Notebook to isolate brain tumors from MRI slice scans.',
    whyBuilt:
      'Created to explore how classical digital image processing and spatial filtering techniques can support diagnostic radiologist workflows.',
    details: [
      'Applies adaptive median filtering to remove high-frequency noise and scanning artifacts.',
      'Uses Otsu thresholding and morphological erosion/dilation to highlight abnormal tumor contours.',
      'Complete documented Jupyter notebook with step-by-step image processing visual outputs.',
    ],
    techStack: ['Python', 'Jupyter Notebook', 'OpenCV', 'NumPy', 'Apache 2.0'],
    githubUrl: 'https://github.com/PRADXP007/brain-tumour-detection',
    accentColor: '#400414',
  },
];

export const HARDWARE_PROJECTS: Project[] = [
  {
    id: 'fpv-drone-build',
    title: 'Custom 5" FPV Racing Drone',
    category: 'hardware',
    tagline: 'Reptile Martian 3 Frame · 4S/6S Power · Betaflight PID Tuning',
    description:
      'Hand-built and tuned a high-speed 5-inch acrobatic FPV drone on a carbon fiber Martian 3 frame. Soldered all flight electronics, tuned dynamic PID loops, and configured low-latency radio telemetry.',
    whyBuilt:
      'I wanted to understand flight dynamics from the ground up — from soldering voltage-spike snubbing capacitors to tuning PID filters for razor-sharp acrobatic response.',
    details: [
      'Equipped with 2306 2450KV brushless motors delivering a punchy 4:1 thrust-to-weight ratio.',
      'Clean hand-soldered STM32 flight controller & 4-in-1 ESC with low-ESR capacitors.',
      'Configured ExpressLRS 2.4GHz low-latency radio control and 5.8GHz video feed with tuned cloverleaf antennas.',
      'Tuned dynamic PID loops and bidirectional DShot RPM filtering for butter-smooth acrobatic handling.',
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
      'Designed, simulated, and optimized a 2×2 planar microstrip patch antenna array operating at 2.4 GHz for WiFi/IoT wireless communication, writing VBA scripts to automate dimensional parameter sweeps in CST Studio.',
    whyBuilt:
      'My capstone project exploring how automated electromagnetic simulations can drastically improve antenna gain and impedance matching for real-world wireless systems.',
    details: [
      'Designed corporate microstrip feed network on FR-4 / Rogers dielectric substrates.',
      'Automated parametric geometric sweeps using VBA scripts inside CST Microwave Studio.',
      'Achieved S11 return loss < -22 dB with high directional gain (> 11.2 dBi) and suppressed sidelobes.',
      'Validated radiation patterns against theoretical electromagnetic transmission line models.',
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
      'An embedded medication dispenser that rotates on precise schedules to deliver prescribed doses on time, using optical IR sensors to confirm pill drops and sending instant caregiver alerts if a dose is missed.',
    whyBuilt:
      'Built to help elderly family members manage complex daily medication schedules without confusion or missed pills.',
    details: [
      'Multi-compartment rotating carousel driven by precise SG90 micro-servos.',
      'ESP32 microcontroller synchronizing automatically with NTP time servers.',
      'IR beam-break optical sensors to verify physical pill drop and detect jams.',
      'Sends instant push notifications to caregivers via MQTT webhooks if medication is uncollected.',
    ],
    techStack: ['ESP32', 'Embedded C++', 'Servo Control', 'IR Optical Sensing', 'MQTT', 'OLED I2C'],
    schematicTag: 'IOT-MED-03',
    metric: '100% Drop Verification',
    accentColor: '#400414',
  },
  {
    id: 'smart-lpg-detection',
    title: 'Smart LPG Gas Leak Alert System',
    category: 'hardware',
    tagline: 'MQ-6 Gas Sensor · Auto Valve Shutoff · GSM Emergency SMS',
    description:
      'An industrial and domestic safety appliance that senses liquefied petroleum gas leaks, triggers emergency solenoid valve shutoff, and broadcasts SMS emergency alerts in under 200ms.',
    whyBuilt:
      'Gas leaks are dangerous and often go unnoticed until it is too late. This device automatically shuts off the gas supply at the source the moment a leak is detected.',
    details: [
      'Calibrated MQ-6 analog gas sensor interfaced with ADC threshold filtering.',
      'Instant relay-actuated solenoid valve isolation mechanism (< 200ms trigger latency).',
      'GSM module automation dispatching urgent SMS alerts to homeowner and building staff.',
      'High-decibel piezo siren and flashing strobe for clear on-premises warning.',
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
    whyBuilt:
      'A hands-on challenge to see how much flight control, IMU filtering, and wireless telemetry I could squeeze into a tiny, single-microcontroller build.',
    details: [
      'Ultralight custom frame with 8520 brushed coreless motors and MOSFET drive circuitry.',
      'Complementary filter and PID stabilization loop reading 6-axis MPU6050 data at 250 Hz.',
      'Hosts a captive WiFi WebSockets / UDP server on the ESP32 for touch joystick phone control.',
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
    whyBuilt:
      'A foundational digital VLSI project to understand CMOS transistor sizing, parasitic capacitance, and physical DRC/LVS layout verification.',
    details: [
      'Constructed D-Flip Flop master-slave circuits using complementary CMOS logic gates.',
      'Ran Spectre transient simulations verifying 8 distinct clock state sequences with zero glitching.',
      'Passed Design Rule Check (DRC) and Layout Versus Schematic (LVS) verification cleanly.',
    ],
    techStack: ['Cadence Virtuoso', 'Spectre Simulator', 'CMOS VLSI', 'DRC / LVS', 'Digital Logic'],
    schematicTag: 'EDA-VLSI-06',
    metric: 'Zero-Glitch 8-State Cycle',
    accentColor: '#400414',
  },
  {
    id: 'brain-tumor-matlab',
    title: 'Brain Tumor Detection via MATLAB',
    category: 'hardware',
    tagline: 'MATLAB · MRI Image Segmentation · Morphological Filtering',
    description:
      'An automated diagnostic image processing algorithm in MATLAB to identify, isolate, and delineate brain tumors from MRI slice scans with noise reduction and watershed segmentation.',
    whyBuilt:
      'Explored medical signal processing algorithms to understand how spatial thresholding and mathematical morphology isolate regions of interest in diagnostic imaging.',
    details: [
      'Applied median filtering and high-pass spatial sharpening to eliminate scanning noise.',
      'Utilized Otsu thresholding and morphological erosion/dilation to extract tumor contours.',
      'Calculated tumor area metrics and centroid positioning for diagnostic assistance.',
    ],
    techStack: ['MATLAB', 'Image Processing Toolbox', 'Morphological Filtering', 'Watershed Segmentation'],
    schematicTag: 'DSP-IMG-07',
    metric: 'Clean Contour Isolation',
    accentColor: '#5C1A28',
  },
];
