import {
  Atom,
  Braces,
  FileCode,
  Palette,
  Type,
  Layers,
  Server,
  Database,
  Flame,
  Plug,
  GitBranch,
  Container,
  Cloud,
  PenTool,
  TestTube,
  Package,
} from 'lucide-react';

export const skills = {
  frontend: [
    { name: "React", level: 90, icon: Atom },
    { name: "JavaScript", level: 95, icon: Braces },
    { name: "HTML5", level: 95, icon: FileCode },
    { name: "CSS3", level: 90, icon: Palette },
    { name: "TypeScript", level: 80, icon: Type },
    { name: "Tailwind CSS", level: 85, icon: Layers },
  ],

  backend: [
    { name: "Node.js", level: 85, icon: Server },
    { name: "Express.js", level: 85, icon: Server },
    { name: "MongoDB", level: 80, icon: Database },
    { name: "PostgreSQL", level: 75, icon: Database },
    { name: "Firebase", level: 70, icon: Flame },
    { name: "REST API", level: 90, icon: Plug },
  ],

  tools: [
    { name: "Git", level: 90, icon: GitBranch },
    { name: "Docker", level: 70, icon: Container },
    { name: "AWS", level: 65, icon: Cloud },
    { name: "Figma", level: 80, icon: PenTool },
    { name: "Jest", level: 75, icon: TestTube },
    { name: "Webpack", level: 70, icon: Package },
  ],
};
