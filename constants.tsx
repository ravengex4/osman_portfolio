
import React from 'react';
import { 
  Code2, 
  Terminal, 
  Cpu, 
  Globe, 
  Trophy, 
  Github, 
  ExternalLink,
  Layers,
  Database,
  BrainCircuit
} from 'lucide-react';
import { Achievement, Skill, Project } from './types';

export const ACHIEVEMENTS: Achievement[] = [
  {
    title: "SIH 2025 Winner",
    organizer: "Smart India Hackathon",
    year: "2025",
    description: "National level hackathon victory for innovative problem solving.",
    icon: "🏆"
  },
  {
    title: "App Fusion Winner",
    organizer: "Google Developer Group (GDG)",
    year: "2024",
    description: "Awarded for exceptional mobile/web app architecture and design.",
    icon: "🚀"
  },
  {
    title: "Code2Skill Winner",
    organizer: "Microsoft Student Club",
    year: "2024",
    description: "Recognized for excellence in coding and skill-based challenges.",
    icon: "💻"
  }
];

export const SKILLS: Skill[] = [
  { 
    name: "Python", 
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", 
    category: "Language" 
  },
  { 
    name: "C++", 
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg", 
    category: "Language" 
  },
  { 
    name: "Java", 
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg", 
    category: "Language" 
  },
  { 
    name: "HTML", 
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg", 
    category: "Frontend" 
  },
  { 
    name: "CSS", 
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg", 
    category: "Frontend" 
  },
  { 
    name: "JavaScript", 
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", 
    category: "Frontend" 
  },
  { 
    name: "React", 
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", 
    category: "Frontend" 
  },
  { 
    name: "DSA in Java", 
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg", 
    category: "CS Fundamentals" 
  }
];

export const PROJECTS: Project[] = [
  {
    name: "Aarogyam",
    description: "A secure digital health record vault designed for seamless medical data management and instant profile sharing via NFC technology.",
    tech: ["React Native", "Firebase", "NFC", "Auth0"],
    link: "https://github.com/ravengex4/Aarogyam"
  },
  {
    name: "JuteEX Interface",
    description: "A specialized control interface developed for the JRM350 machine, built for the winning SIH 2025 hackathon project.",
    tech: ["React", "TypeScript", "Tailwind CSS", "IoT"],
    link: "https://github.com/ravengex4/JuteEX-final"
  },
  {
    name: "Festopia Website",
    description: "Official event management and promotional platform created for the major college event 'Festopia'.",
    tech: ["React", "Framer Motion", "Tailwind CSS", "Vite"],
    link: "https://github.com/ravengex4/festopia-web"
  }
];
