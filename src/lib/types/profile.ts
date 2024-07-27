import { LucideIcon } from 'lucide-react';

export type AvailableStack =
  | 'Node.js'
  | 'React.js'
  | 'Next.js'
  | 'HTML5'
  | 'CSS3'
  | 'Bootstrap'
  | 'TailwindCSS'
  | 'React Native'
  | 'Vite'
  | 'Redux'
  | 'Zustand'
  | 'Axios'
  | 'React Hook Form'
  | 'Zod'
  | 'Chakra UI'
  | 'Daisy UI'
  | 'Material UI'
  | 'Shadcn UI'
  | 'JavaScript'
  | 'TypeScript'
  | 'Express.js'
  | 'Prisma'
  | 'MySQL'
  | 'PostgreSQL'
  | 'Firebase'
  | 'MQTT'
  | 'Dart'
  | 'Flutter'
  | 'Python'
  | 'Raspberry Pi'
  | 'Postman';

export type Stack = {
  label: AvailableStack;
  imageUrl: string;
};

export type Profile = {
  name: string;
  nickName: string;
  avatar: string;
  address: string;
  status1: string;
  status2: string;
  description: string;
  socials: {
    label: string;
    href: string;
    icon: LucideIcon;
  }[];
  skills: Stack[];
};

export type Project = {
  cname: string;
  title: string;
  description: string;
  thumbnailUrl: string;
  imageUrls: string[];
  stacks: Stack[];
  isFeatured: boolean;
  sourceCodeUrl?: string;
  demoUrl?: string;
  content?: string;
};

export type Career = {
  logoUrl?: string;
  role: string;
  companyLabel: string;
  companyFullName: string;
  address: string;
  fromDate: Date;
  endDate?: Date;
  workMode: 'Full-time' | 'Part-time' | 'Freelance';
  workType: 'Remote' | 'Hybrid' | 'On-site';
  responsibilities: string[];
};
