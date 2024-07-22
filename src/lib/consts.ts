import {
  BookOpenText,
  Coffee,
  Contact,
  Github,
  Home,
  Instagram,
  Linkedin,
  User,
} from 'lucide-react';
import { NavMenu, Profile } from './types';

export const NAV_MENUS: NavMenu[] = [
  {
    sort: 1,
    label: 'Home',
    icon: Home,
    href: '/',
  },
  {
    sort: 2,
    label: 'About',
    icon: User,
    href: '/about',
  },
  {
    sort: 3,
    label: 'Projects',
    icon: Coffee,
    href: '/projects',
  },
  {
    sort: 4,
    label: 'Blog',
    icon: BookOpenText,
    href: '/blog',
  },
  {
    sort: 5,
    label: 'Contact',
    icon: Contact,
    href: '/contact',
  },
];

export const MY_PROFILE: Profile = {
  name: 'Nuzul H.',
  nickName: 'Nuzul',
  avatar: 'https://github.com/nuzulh.png',
  address: 'Banda Aceh, Indonesia 🇮🇩',
  status1: 'Working remotely',
  status2: 'Open for freelance project',
  description: 'Experienced Software Engineer with over 3 years of hands-on expertise designing and implementing innovative web & mobile applications especially in frontend side. Strong problem-solving skills and a commitment to staying current with emerging trends in web & mobile development.',
  socials: [
    { label: 'Linkedin', href: 'https://linkedin.com/in/nuzulh', icon: Linkedin },
    { label: 'GitHub', href: 'https://github.com/nuzulh', icon: Github },
    { label: 'Instagram', href: 'https://instagram.com/nuzulhikam', icon: Instagram },
  ],
  skills: [
    { label: 'Node.js', imageUrl: '/svgs/nodejs.svg' },
    { label: 'React.js', imageUrl: '/svgs/reactjs.svg' },
    { label: 'Next.js', imageUrl: '/svgs/nextjs.svg' },
    { label: 'HTML5', imageUrl: '/svgs/html5.svg' },
    { label: 'CSS3', imageUrl: '/svgs/css3.svg' },
    { label: 'Bootstrap', imageUrl: '/svgs/bootstrap.svg' },
    { label: 'TailwindCSS', imageUrl: '/svgs/tailwind.svg' },
    { label: 'React Native', imageUrl: '/svgs/reactjs.svg' },
    { label: 'Vite', imageUrl: '/svgs/vite.svg' },
    { label: 'Redux', imageUrl: '/svgs/redux.svg' },
    { label: 'Zustand', imageUrl: '/svgs/zustand.svg' },
    { label: 'Axios', imageUrl: '/svgs/axios.svg' },
    { label: 'React Hook Form', imageUrl: '/svgs/react-hook-form.svg' },
    { label: 'Zod', imageUrl: '/svgs/zod.svg' },
    { label: 'Chakra UI', imageUrl: '/svgs/chakra.svg' },
    { label: 'Daisy UI', imageUrl: '/svgs/daisy.svg' },
    { label: 'Material UI', imageUrl: '/svgs/material.svg' },
    { label: 'Shadcn UI', imageUrl: '/svgs/shadcn.svg' },
    { label: 'JavaScript', imageUrl: '/svgs/js.svg' },
    { label: 'TypeScript', imageUrl: '/svgs/ts.svg' },
    { label: 'Express.js', imageUrl: '/svgs/express.svg' },
    { label: 'Prisma', imageUrl: '/svgs/prisma.svg' },
    { label: 'MySQL', imageUrl: '/svgs/mysql.svg' },
    { label: 'PostgreSQL', imageUrl: '/svgs/postgresql.svg' },
    { label: 'Firebase', imageUrl: '/svgs/firebase.svg' },
    { label: 'MQTT', imageUrl: '/svgs/mqtt.svg' },
    { label: 'Dart', imageUrl: '/svgs/dart.svg' },
    { label: 'Flutter', imageUrl: '/svgs/flutter.svg' },
    { label: 'Python', imageUrl: '/svgs/python.svg' },
    { label: 'Raspberry Pi', imageUrl: '/svgs/raspberry-pi.svg' },
    { label: 'Postman', imageUrl: '/svgs/postman.svg' },
  ],
};

export const COMMON_MESSAGE = {
  error: 'Oops, sorry! Something error occurred 🧐',
  errorService: 'I think some of our services have trouble 😔. Please try again later.',
};
