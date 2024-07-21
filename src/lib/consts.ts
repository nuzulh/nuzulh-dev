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
  avatar: 'https://github.com/nuzulh.png',
  address: 'Banda Aceh, Indonesia 🇮🇩',
  status1: 'Working remotely',
  status2: 'Available for freelance project',
  description: 'Experienced Frontend Developer with over 3 years of hands-on expertise designing and implementing innovative web applications. Proficient in front-end technologies, including HTML, CSS, JavaScript, TypeScript, and various modern frameworks. Adept at collaborating with cross-functional teams to drive project success and deliver exceptional user experiences. Strong problem-solving skills and a commitment to staying current with emerging trends in web development.',
};
