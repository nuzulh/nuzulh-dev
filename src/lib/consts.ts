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
import { AvailableStack, NavMenu, Profile, Project, Stack } from './types';

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

export const STACKS: Stack[] = [
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
];

export const getStack = (key: AvailableStack) => STACKS.find(x => x.label === key)!;

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
  skills: STACKS,
};

// TODO: backend integration using prisma & server action
export const MY_PROJECTS: Project[] = [
  {
    title: 'SKPI-FT-USK',
    description: 'This is a web application for managing student activities and approving certificates as requirements for college graduation. It has two roles; student and administrator. Student role is submitting activities and requesting certificates approval to administrator. Administrator role is approving student\'s requests. Additionally, students able to message administrator in realtime for supports. Furthermore, the app consists with "export to PDF" feature that summarize student activities.',
    isFeatured: true,
    thumbnailUrl: '/images/skpi.webp',
    imageUrls: [],
    stacks: [
      getStack('React.js'),
      getStack('TypeScript'),
      getStack('Chakra UI'),
      getStack('Express.js'),
      getStack('MySQL'),
    ],
  },
  {
    title: 'CampusLife',
    description: 'Basically this is a todo application for mobile platform with expanded features, especially for college students which has complex tasks assigned by their lecturer. Specifically, this app have integrated with a university data center which make their students easier to manage tasks based on subjects & schedules connected with the university data center. Students will get notification in their smartphone for reminder of a task.',
    isFeatured: true,
    thumbnailUrl: '/images/campus-life.webp',
    imageUrls: [],
    stacks: [
      getStack('Dart'),
      getStack('Flutter'),
      getStack('Firebase'),
    ],
  },
  {
    title: 'NoTrash',
    description: 'This is a mobile application built with Flutter and Firebase. The main feature of this app is reporting a piled up rubbish around user, the report consists description, location address & map coordinate, and a picture of the rubbish. Each submitted report will notify users with "Officer" role. The report will be reviewed and confirmed by officer, then follow the maps submitted by reporter and handle the piled up rubbish in that location. After a report confirmed and handled, the officer will get some points linked to his account that will make him get benefits from his superiors.',
    isFeatured: true,
    thumbnailUrl: '/images/no-trash.webp',
    imageUrls: [],
    stacks: [
      getStack('Dart'),
      getStack('Flutter'),
      getStack('Firebase'),
    ],
  },
];

export const COMMON_MESSAGE = {
  error: 'Oops, sorry! Something error occurred 🧐',
  errorService: 'I think some of our services have trouble 😔. Please try again later.',
};
