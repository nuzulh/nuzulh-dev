import { BookOpenText, Coffee, Contact, Home, User } from 'lucide-react';
import { NavMenu } from './types';

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

export const MY_PROFILE = {
  name: 'Nuzul H.',
  nickName: 'Nuzul',
  avatar: 'https://github.com/nuzulh.png',
  address: 'Banda Aceh, Indonesia 🇮🇩',
  status1: 'Working remotely',
  status2: 'Open for freelance project',
  description: 'Experienced Software Engineer with over 3 years of hands-on expertise designing and implementing innovative web & mobile applications especially in frontend side. Strong problem-solving skills and a commitment to staying current with emerging trends in web & mobile development.',
  skills: [
    { label: 'Node.js', imageUrl: '/svgs/nodejs.svg' },
    { label: 'React.js', imageUrl: '/svgs/reactjs.svg' },
    { label: 'Next.js', imageUrl: '/svgs/nextjs.svg' },
    { label: 'HTML5', imageUrl: '/svgs/html5.svg' },
    { label: 'CSS3', imageUrl: '/svgs/css3.svg' },
    { label: 'Bootstrap', imageUrl: '/svgs/bootstrap.svg' },
    { label: 'TailwindCSS', imageUrl: '/svgs/tailwind.svg' },
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
    { label: 'React Native', imageUrl: '/svgs/reactjs.svg' },
    { label: 'Vite', imageUrl: '/svgs/vite.svg' },
    { label: 'Redux', imageUrl: '/svgs/redux.svg' },
    { label: 'Zustand', imageUrl: '/svgs/zustand.svg' },
    { label: 'Axios', imageUrl: '/svgs/axios.svg' },
    { label: 'Dart', imageUrl: '/svgs/dart.svg' },
    { label: 'Flutter', imageUrl: '/svgs/flutter.svg' },
    { label: 'Python', imageUrl: '/svgs/python.svg' },
    { label: 'Raspberry Pi', imageUrl: '/svgs/raspberry-pi.svg' },
    { label: 'Postman', imageUrl: '/svgs/postman.svg' },
  ],
};
