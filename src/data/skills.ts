export const skills = {
  frontend: [
    'JavaScript / TypeScript',
    'React / Next.js',
    'Vue / Nuxt',
    'HTML & CSS',
    'Tailwind CSS',
  ],
  backend: [
    'Node.js',
    'Python',
    'PostgreSQL',
    'MongoDB',
    'REST & GraphQL',
  ],
  tools: [
    'Git & GitHub',
    'Docker',
    'Linux',
    'VS Code',
    'Figma',
  ],
};

export type SkillCategory = keyof typeof skills;
