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

} from 'lucide-react';

export const projects = [
  {
    id: 1,
    title: "Advanced AQI Monitoring System",
    description:
      "IoT-based air quality monitoring system with real-time visualization, AI-powered analytics, and cloud dashboard. Patent applied and research published in IJSREM.",
    technologies: ["React", "Node.js", "Firebase", "ESP32", "IoT", "AI"],
    stack: [
      { name: "ESP32", icon: Cpu },
      { name: "Firebase", icon: Cloud },
      { name: "Node.js", icon: Server },
      { name: "React", icon: Layout },
      { name: "AI/ML", icon: Brain },
    ],
    github: "",
    live: "",
    featured: true,
  },

  {
    id: 2,
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
  },

  {
    id: 3,
    title: "VAYOO — Portable Windmill System",
    description:
      "Modular, 3D-printed windmill system with battery storage and Firebase-based analytics dashboard for remote power monitoring.",
    technologies: ["IoT", "Firebase", "Embedded"],
    stack: [
      { name: "Wind Energy", icon: Wind },
      { name: "Embedded", icon: Cpu },
      { name: "Firebase", icon: Cloud },
    ],
    github: "",
    live: "",
    featured: false,
  },

  {
    id: 4,
    title: "EMS Payroll Management System",
    description:
      "Full-stack payroll management system for employee onboarding, payslip generation, dispute handling, and admin workflows.",
    technologies: ["React", "Node.js", "MongoDB", "Full Stack"],
    stack: [
      { name: "React", icon: Layout },
      { name: "Node.js", icon: Server },
      { name: "MongoDB", icon: Database },
    ],
    github: "",
    live: "",
    featured: true,
  },

  {
    id: 5,
    title: "FitMeal-AI",
    description:
      "AI-powered meal planning application that generates personalized daily meal plans based on user inputs.",
    technologies: ["React", "AI", "API"],
    stack: [
      { name: "React", icon: Layout },
      { name: "AI", icon: Brain },
      { name: "API", icon: Code },
    ],
    github: "https://github.com/AdithyaPrabhakar/fitmeal-ai",
    live: "",
    featured: false,
  },

  {
    id: 6,
    title: "SAPDXB Website Clone (WordPress)",
    description:
      "WordPress-based clone of the SAPDXB website with theme customization, plugin development, and SEO optimization.",
    technologies: ["WordPress", "CMS"],
    stack: [
      { name: "WordPress", icon: Brain },
      { name: "CMS", icon: Layout },
    ],
    github: "https://github.com/AdithyaPrabhakar/SAPDXB-website-clone-WordPress",
    live: "",
    featured: false,
  },

  {
    id: 7,
    title: "Personal Portfolio Website",
    description:
      "Modern developer portfolio built with React, animations, and interactive UI components.",
    technologies: ["React", "Tailwind", "Framer Motion"],
    stack: [
      { name: "React", icon: Layout },
      { name: "UI/UX", icon: Code },
    ],
    github: "",
    live: "",
    featured: false,
  },
];
