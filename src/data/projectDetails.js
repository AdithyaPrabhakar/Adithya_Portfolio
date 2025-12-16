// src/data/projectDetails.js

export const projectDetails = {
  /* ===================================================== */
  /* 1. ADVANCED AQI MONITORING SYSTEM */
  /* ===================================================== */
  "advanced-aqi-monitoring-system": {
    title: "Advanced AQI Monitoring System",
    subtitle: "Real-time IoT + AI air quality analytics platform",

    overview: `
This project addresses the need for real-time, localized air quality monitoring
using IoT and AI. It collects pollution data from multiple sensors, processes it
in the cloud, and provides actionable insights through analytics dashboards.
`,

    images: [
      `${import.meta.env.BASE_URL}Projects/aqi/image (1).png`,
      `${import.meta.env.BASE_URL}Projects/aqi/image (2).png`,
      `${import.meta.env.BASE_URL}Projects/aqi/image (3).png`,
      `${import.meta.env.BASE_URL}Projects/aqi/image (4).png`,
      `${import.meta.env.BASE_URL}Projects/aqi/image (5).png`,
    ],

    techStack: [
      "ESP32",
      "React",
      "Node.js",
      "Firebase",
      "AI / ML",
      "MQ7, MQ135, PM2.5",
    ],

    usecase: [
      "Traffic junction air quality monitoring",
      "Industrial pollution tracking",
      "Smart city environmental analytics",
      "Research-driven air quality studies",
    ],

    methodology: [
      "Sensor calibration and validation",
      "Edge data collection using ESP32",
      "Cloud ingestion via Firebase",
      "Dashboard visualization using React",
      "AI-driven trend and report generation",
    ],

    flow: [
      "Gas Sensors → ESP32",
      "ESP32 → Firebase Realtime DB",
      "Firebase → Backend APIs",
      "Backend → React Dashboard",
      "Dashboard → AI Reports",
    ],

    reportlink:
      "https://docs.google.com/document/d/1pQySlv-hzp0UsxB_5o43bLpC6FvbzJSMkuSmVY5_YfY/edit",
    paper:
      "https://drive.google.com/file/d/1pAylMpgk1MrlN31Jh4nsW9TQd-bpfJeS/view",
    patent: "Patent Applied",
    github: "",
  },

  /* ===================================================== */
  /* 2. LORA – THE SAVIOUR */
  /* ===================================================== */
  "lora-the-saviour": {
    title: "LoRa – The Saviour",
    subtitle: "Offline emergency communication system",

    overview: `
A low-cost communication system designed for disaster zones and remote areas.
The project enables smartphone-to-smartphone messaging without cellular networks
using ESP32 and LoRa technology.
`,

    images: [
      `${import.meta.env.BASE_URL}Projects/lora/image5.png`,
      `${import.meta.env.BASE_URL}Projects/lora/image2.png`,
      `${import.meta.env.BASE_URL}Projects/lora/image3.png`, 
      `${import.meta.env.BASE_URL}Projects/lora/image1.png`,
      `${import.meta.env.BASE_URL}Projects/lora/image4.png`,
      
    ],

    techStack: ["ESP32", "LoRa", "Bluetooth", "WiFi", "IoT"],

    usecase: [
      "Trekking and remote expeditions",
      "Disaster recovery zones",
      "Underground or RF-blocked environments",
    ],

    methodology: [
      "LoRa firmware development",
      "Bluetooth pairing with smartphones",
      "Offline message routing",
      "Field testing in no-network zones",
    ],

    flow: [
      "Mobile App → Bluetooth",
      "Bluetooth → ESP32",
      "ESP32 → LoRa",
      "LoRa → ESP32",
      "ESP32 → Mobile App",
    ],
    reportlink: "https://docs.google.com/document/d/1xToDN6xqM_dlTxANMj9Qho5tVtpMYhrPSP-1RMX958M/edit?usp=sharing",
    paper:
      "https://drive.google.com/file/d/13FtI-TpBtMStCX1-7-HtiXbm_7wb8_lU/view",
    github:
      "https://github.com/AdithyaPrabhakar/LoRa-The-Saviour",
  },

  /* ===================================================== */
  /* 3. VAYOO – PORTABLE WINDMILL */
  /* ===================================================== */
  "vayoo-portable-windmill": {
    title: "VAYOO — Portable Windmill System",
    subtitle: "Renewable energy generation for remote locations",

    overview: `
VAYOO is a modular, 3D-printed portable windmill designed for off-grid power
generation. It integrates energy storage and cloud analytics for performance
monitoring.
`,

    images: [
      `${import.meta.env.BASE_URL}Projects/vayoo/image1.png`,
      `${import.meta.env.BASE_URL}Projects/vayoo/image2.png`,
      `${import.meta.env.BASE_URL}Projects/vayoo/image4.png`,  
      `${import.meta.env.BASE_URL}Projects/vayoo/image3.png`,
        `${import.meta.env.BASE_URL}Projects/vayoo/image5.png`,
        
    ],

    techStack: [
      "Embedded Systems",
      "Wind Energy",
      "Firebase",
      "3D Printing",
    ],

    usecase: [
      "Remote area electrification",
      "Disaster relief power supply",
      "Educational renewable energy kits",
    ],

    methodology: [
      "Mechanical design & simulation",
      "Generator selection & testing",
      "Energy storage integration",
      "Cloud-based performance tracking",
    ],

    flow: [
      "Wind → Turbine",
      "Turbine → Generator",
      "Generator → Battery",
      "Battery → Firebase Analytics",
    ],
    reportlink: "https://docs.google.com/document/d/1hjZH8nV4Sa4eWtgnYGFqLI_rfqNmykOYn89dWon2HUg/edit?usp=sharing",
    github: "",
  },

  /* ===================================================== */
  /* 4. EMS PAYROLL MANAGEMENT SYSTEM */
  /* ===================================================== */
  "ems-payroll-management-system": {
    title: "EMS Payroll Management System",
    subtitle: "Enterprise payroll & employee management platform",

    overview: `
A full-stack payroll management system designed to handle employee onboarding,
salary processing, payslip generation, and admin workflows securely.
`,

    images: [
      `${import.meta.env.BASE_URL}Projects/EMS/image1.png`,
      `${import.meta.env.BASE_URL}Projects/EMS/image2.png`,
      `${import.meta.env.BASE_URL}Projects/EMS/image3.png`,
      `${import.meta.env.BASE_URL}Projects/EMS/image4.png`,
      `${import.meta.env.BASE_URL}Projects/EMS/image5.png`,
      `${import.meta.env.BASE_URL}Projects/EMS/image6.png`,
    ],

    techStack: ["React", "Node.js", "MongoDB", "JWT"],

    usecase: [
      "Employee payroll automation",
      "HR administrative workflows",
      "Secure payslip generation",
    ],

    methodology: [
      "Role-based authentication",
      "Payroll computation logic",
      "PDF payslip generation",
      "Admin & employee dashboards",
    ],

    flow: [
      "Admin → Employee Records",
      "Payroll Engine → Salary Calculation",
      "Database → Payslip Generation",
      "Employee → Dashboard Access",
    ],
    reportlink: "https://docs.google.com/presentation/d/1O7iCT5mACFgI6-LfrhbHxFVTJxCLLx7RkBFBrKvJgIw/edit?usp=sharing",
    github: "https://github.com/AdithyaPrabhakar/EMS-PROJECT",
  },

  /* ===================================================== */
  /* 5. FITMEAL-AI */
  /* ===================================================== */
  "fitmeal-ai": {
    title: "FitMeal-AI",
    subtitle: "AI-powered personalized meal planning",

    overview: `
FitMeal-AI generates customized meal plans using user inputs such as age,
weight, goals, and activity level. The system leverages AI APIs to personalize
nutrition.
`,

    images: [
      
    ],

    techStack: ["React", "AI APIs", "Nutrition Logic"],

    usecase: [
      "Fitness enthusiasts",
      "Diet planning automation",
      "Personalized nutrition",
    ],

    methodology: [
      "User profile analysis",
      "BMR & TDEE calculation",
      "AI-based meal generation",
      "Interactive chat refinement",
    ],

    flow: [
      "User Input → AI Engine",
      "AI Engine → Meal Plan",
      "Meal Plan → Dashboard",
    ],

    github:
      "https://github.com/AdithyaPrabhakar/fitmeal-ai",
  },

  /* ===================================================== */
  /* 6. SAPDXB WORDPRESS CLONE */
  /* ===================================================== */
  "sapdxb-wordpress-clone": {
    title: "SAPDXB Website Clone",
    subtitle: "WordPress CMS-based corporate site clone",

    overview: `
A WordPress-based clone of the SAPDXB website focused on theme development,
plugin customization, and SEO best practices.
`,

    images: [
      `${import.meta.env.BASE_URL}projects/sapdxb/home.png`,
    ],

    techStack: ["WordPress", "PHP", "SEO"],

    usecase: [
      "CMS-based corporate websites",
      "WordPress theme development",
    ],

    methodology: [
      "Theme replication",
      "Plugin customization",
      "SEO optimization",
    ],

    github:
      "https://github.com/AdithyaPrabhakar/SAPDXB-website-clone-WordPress",
  },

  /* ===================================================== */
  /* 7. PERSONAL PORTFOLIO */
  /* ===================================================== */
  "personal-portfolio": {
    title: "Personal Portfolio Website",
    subtitle: "Modern developer portfolio with animations",

    overview: `
A modern portfolio showcasing projects, skills, and experience using React,
Tailwind CSS, and Framer Motion with case-study based project pages.
`,

    images: [
      `${import.meta.env.BASE_URL}projects/portfolio/home.png`,
    ],

    techStack: [
      "React",
      "Tailwind CSS",
      "Framer Motion",
      "Vite",
    ],

    usecase: [
      "Personal branding",
      "Recruiter showcase",
      "Project case studies",
    ],

    methodology: [
      "Component-driven design",
      "Responsive UI",
      "Animated interactions",
      "GitHub Pages deployment",
    ],

    github: "",
  },



"sapdxb-wordpress-clone": {
  title: "SAPDXB Website Clone (WordPress)",
  subtitle: "WordPress CMS-based corporate website replication",

  overview: `
This project is a WordPress-based clone of the SAPDXB corporate website.
It focuses on replicating the original design, layout, and user experience
while implementing custom themes, plugins, and SEO optimizations.

The project demonstrates hands-on expertise in WordPress development,
CMS architecture, and production-ready website deployment.
  `,

  images: [
    `${import.meta.env.BASE_URL}projects/sapdxb/home.png`,
    `${import.meta.env.BASE_URL}projects/sapdxb/services.png`,
    `${import.meta.env.BASE_URL}projects/sapdxb/contact.png`,
  ],

  techStack: [
    "WordPress",
    "PHP",
    "Custom Themes",
    "Plugin Development",
    "SEO Optimization",
  ],

  usecase: [
    "Corporate websites",
    "CMS-driven content platforms",
    "Rapid website deployment",
    "SEO-friendly business sites",
  ],

  methodology: [
    "Requirement analysis and UI comparison",
    "Custom WordPress theme development",
    "Plugin configuration and customization",
    "SEO optimization and performance tuning",
    "Cross-browser and responsive testing",
  ],

  flow: [
    "User → Browser",
    "Browser → WordPress Theme",
    "Theme → WordPress Core",
    "WordPress → Database",
    "Database → Rendered Pages",
  ],

  github: "https://github.com/AdithyaPrabhakar/SAPDXB-website-clone-WordPress",
},

"personal-portfolio": {
  title: "Personal Portfolio Website",
  subtitle: "Modern developer portfolio with interactive UI and animations",

  overview: `
This portfolio website showcases my projects, skills, experience, and research
work in a clean and professional manner. It is built with a strong focus on
performance, responsiveness, and modern UI/UX practices.

The site uses animated transitions, reusable components, and project-based
routing to present each project as a detailed case study.
  `,

  images: [
    `${import.meta.env.BASE_URL}projects/portfolio/home.png`,
    `${import.meta.env.BASE_URL}projects/portfolio/projects.png`,
    `${import.meta.env.BASE_URL}projects/portfolio/contact.png`,
  ],

  techStack: [
    "React",
    "Tailwind CSS",
    "Framer Motion",
    "Vite",
    "GitHub Pages",
  ],

  usecase: [
    "Personal branding",
    "Recruiter portfolio",
    "Project case study showcase",
    "Professional web presence",
  ],

  methodology: [
    "Component-driven UI development",
    "Responsive mobile-first design",
    "Framer Motion animations",
    "Reusable data-driven components",
    "Static deployment using GitHub Pages",
  ],

  flow: [
    "User → Browser",
    "Browser → React App",
    "React → Components",
    "Components → Dynamic Routes",
    "Routes → Project Detail Pages",
  ],

  github: "",
},
};
