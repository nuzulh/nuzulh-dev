import { Project } from '../types';
import { getStack } from './stack';

export const MY_PROJECTS: Project[] = [
  {
    cname: 'nuzulh-dev',
    title: 'nuzulh.dev',
    description: 'My personal website built from scratch using several powerful & modern technology stacks. Due this website is using starter plan (free) cloud hosting and databases; Vercel, Neon Serverless Postgres, and Firebase, with certain limitations, sometimes an error will occur. Feel welcome to utilize this website as a point of reference, a wellspring of inspiration, or as a template, all in accordance with the provided license. The source code is at your disposal to suit your specific requirements. Should you find value in this resource, your consideration of leaving a rating is greatly appreciated.',
    isFeatured: true,
    sourceCodeUrl: 'https://github.com/nuzulh/nuzulh-dev',
    demoUrl: 'https://nuzulh-dev.vercel.app/',
    thumbnailUrl: '/images/nuzulh-dev-1.webp',
    imageUrls: [
      '/images/nuzulh-dev-1.webp',
      '/images/nuzulh-dev-2.webp',
      '/images/pagespeed-desktop.webp',
      '/images/pagespeed-mobile.webp',
      '/images/gtmetrix.webp',
    ],
    stacks: [
      getStack('Next.js'),
      getStack('TypeScript'),
      getStack('Shadcn UI'),
      getStack('TailwindCSS'),
      getStack('Prisma'),
      getStack('PostgreSQL'),
      getStack('Firebase'),
    ],
  },
  {
    cname: 'skpi-ft-usk',
    title: 'SKPI-FT-USK',
    description: 'An internal web application for managing student activities and approving certificates as requirements for college graduation. It has two roles; student and administrator. Student role is submitting activities and requesting certificates approval to administrator. Administrator role is approving student\'s requests. Additionally, students able to message administrator in realtime for supports. Furthermore, the app consists with "export to PDF" feature that summarize student activities.',
    isFeatured: true,
    thumbnailUrl: '/images/skpi-1.webp',
    imageUrls: [
      '/images/skpi-1.webp',
      '/images/skpi-2.webp',
      '/images/skpi-3.webp',
    ],
    stacks: [
      getStack('React.js'),
      getStack('TypeScript'),
      getStack('Chakra UI'),
      getStack('Express.js'),
      getStack('MySQL'),
    ],
  },
  {
    cname: 'rumah-bahasa',
    title: 'Rumah Bahasa',
    description: 'An online language learning platform. Has a dashboard for admin/teacher roles to manage class participants, as well as learning lessons in the form of videos equipped with discussion features so that there is interaction between students and teachers on each subject.',
    isFeatured: true,
    demoUrl: 'https://rumahbahasa.vercel.app',
    thumbnailUrl: '/images/rumah-bahasa.webp',
    imageUrls: ['/images/rumah-bahasa.webp'],
    stacks: [
      getStack('Next.js'),
      getStack('TypeScript'),
      getStack('Shadcn UI'),
      getStack('TailwindCSS'),
      getStack('Prisma'),
      getStack('PostgreSQL'),
    ],
  },
  {
    cname: 'listkol',
    title: 'ListKOL - Landing Page',
    description: 'A starter responsive landing page built with React (Typescript) and Tailwind CSS.',
    isFeatured: true,
    sourceCodeUrl: 'https://github.com/nuzulh/fe-listkol',
    demoUrl: 'https://listkol.vercel.app',
    thumbnailUrl: '/images/listkol-1.webp',
    imageUrls: [
      '/images/listkol-1.webp',
      '/images/listkol-2.webp',
      '/images/listkol-3.webp',
      '/images/listkol-4.webp',
    ],
    stacks: [
      getStack('React.js'),
      getStack('TypeScript'),
      getStack('Shadcn UI'),
      getStack('TailwindCSS'),
      getStack('Vite'),
    ],
  },
  {
    cname: 'campus-life',
    title: 'CampusLife',
    description: 'Basically this is a todo application for mobile platform with expanded features, especially for college students which has complex tasks assigned by their lecturer. Specifically, this app have integrated with a university data center which make their students easier to manage tasks based on subjects & schedules connected with the university data center. Students will get notification in their smartphone for reminder of a task.',
    isFeatured: true,
    sourceCodeUrl: 'https://github.com/nuzulh/campus-life',
    thumbnailUrl: '/images/campus-life.webp',
    imageUrls: ['/images/campus-life.webp'],
    stacks: [
      getStack('Dart'),
      getStack('Flutter'),
      getStack('Firebase'),
    ],
  },
  {
    cname: 'no-trash',
    title: 'NoTrash',
    description: 'A mobile application built with Flutter and Firebase. The main feature of this app is reporting a piled up rubbish around user, the report consists description, location address & map coordinate, and a picture of the rubbish. Each submitted report will notify users with "Officer" role. The report will be reviewed and confirmed by officer, then follow the maps submitted by reporter and handle the piled up rubbish in that location. After a report confirmed and handled, the officer will get some points linked to his account that will make him get benefits from his superiors.',
    isFeatured: false,
    sourceCodeUrl: 'https://github.com/nuzulh/NoTrashApp',
    thumbnailUrl: '/images/no-trash.webp',
    imageUrls: ['/images/no-trash.webp'],
    stacks: [
      getStack('Dart'),
      getStack('Flutter'),
      getStack('Firebase'),
    ],
  },
];
