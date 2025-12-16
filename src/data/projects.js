import {
  Cpu,
  Cloud,
  Database,
  Wifi,
  Bluetooth,
  Server,
  Code,
  Wind,
  Layout,
  Brain,
  Globe,
} from 'lucide-react';

export const projects = [
  {
    id: 1,
    slug: "advanced-aqi-monitoring-system",
    title: "Advanced AQI Monitoring System",
    description:
      "IoT-based air quality monitoring system with real-time visualization, AI-powered analytics, and cloud dashboard. Patent applied and research published in IJSREM.",
    technologies: ["React", "Node.js", "Firebase", "IoT", "AI"],
    stack: [
      { name: "ESP32", icon: Cpu },
      { name: "Firebase", icon: Cloud },
      { name: "Node.js", icon: Server },
      { name: "React", icon: Layout },
      { name: "AI / ML", icon: Brain },
    ],
    github: "",
    live: "",
    featured: true,
    category: "iot",
    year: 2025,
  },

  {
    id: 2,
    slug: "lora-the-saviour",
    title: "LoRa – The Saviour",
    description:
      "Low-cost emergency communication system enabling offline text messaging using ESP32, LoRa, Bluetooth, and WiFi. Published in IJRPR.",
    technologies: ["ESP32", "LoRa", "Bluetooth", "IoT"],
    stack: [
      { name: "ESP32", icon: Cpu },
      { name: "LoRa", icon: Wifi },
      { name: "Bluetooth", icon: Bluetooth },
      { name: "IoT", icon: Cloud },
    ],
    github: "https://github.com/AdithyaPrabhakar/LoRa-The-Saviour",
    live: "",
    featured: true,
    category: "iot",
    year: 2024,
  },

  {
    id: 3,
    slug: "vayoo-portable-windmill",
    title: "VAYOO — Portable Windmill System",
    description:
      "Modular, 3D-printed windmill system with battery storage and Firebase-based analytics dashboard for remote power monitoring.",
    technologies: ["IoT", "Firebase", "Embedded"],
    stack: [
      { name: "Wind Energy", icon: Wind },
      { name: "Embedded Systems", icon: Cpu },
      { name: "Firebase", icon: Cloud },
    ],
    github: "",
    live: "",
    featured: false,
    category: "iot",
    year: 2024,
  },

  {
    id: 4,
    slug: "ems-payroll-management-system",
    title: "EMS Payroll Management System",
    description:
      "Full-stack payroll system for employee onboarding, payslip generation, dispute handling, and admin workflows.",
    technologies: ["React", "Node.js", "MongoDB", "Full Stack"],
    stack: [
      { name: "React", icon: Layout },
      { name: "Node.js", icon: Server },
      { name: "MongoDB", icon: Database },
    ],
    github: "",
    live: "",
    featured: true,
    category: "fullstack",
    year: 2025,
  },

  {
    id: 5,
    slug: "fitmeal-ai",
    title: "FitMeal-AI",
    description:
      "AI-powered meal planning application that generates personalized daily meal plans based on user inputs.",
    technologies: ["React", "AI", "API"],
    stack: [
      { name: "React", icon: Layout },
      { name: "AI", icon: Brain },
      { name: "API Integration", icon: Code },
    ],
    github: "https://github.com/AdithyaPrabhakar/fitmeal-ai",
    live: "",
    featured: false,
    category: "ai",
    year: 2025,
  },

  {
    id: 6,
    slug: "sapdxb-wordpress-clone",
    title: "SAPDXB Website Clone (WordPress)",
    description:
      "WordPress-based clone of the SAPDXB website with theme customization, plugin development, and SEO optimization.",
    technologies: ["WordPress", "CMS"],
    stack: [
      { name: "WordPress", icon: Globe },
      { name: "CMS", icon: Layout },
    ],
    github: "https://github.com/AdithyaPrabhakar/SAPDXB-website-clone-WordPress",
    live: "",
    featured: false,
    category: "web",
    year: 2025,
  },

  {
    id: 7,
    slug: "personal-portfolio",
    title: "Personal Portfolio Website",
    description:
      "Modern developer portfolio built with React, Tailwind CSS, Framer Motion, and interactive UI components.",
    technologies: ["React", "Tailwind", "Framer Motion"],
    stack: [
      { name: "React", icon: Layout },
      { name: "UI / UX", icon: Code },
    ],
    github: "",
    live: "",
    featured: false,
    category: "web",
    year: 2025,
  },
];

overview: [
  "What problem it solves",
  "Why it matters",
  "What makes it unique"
]
timeline: [
  { phase: "Idea", description: "Identified real-world problem" },
  { phase: "Design", description: "System architecture & UI" },
  { phase: "Development", description: "Implementation & testing" },
  { phase: "Deployment", description: "Cloud & field testing" },
]
