import { Github, Linkedin } from 'lucide-react';
import { Profile } from '../types';
import { STACKS } from './stack';

export const MY_PROFILE: Profile = {
  name: 'Nuzul H.',
  nickName: 'Nuzul',
  avatar: 'https://github.com/nuzulh.png',
  address: 'Banda Aceh, Indonesia 🇮🇩',
  status1: 'Working remotely',
  description: 'Software Engineer with 3+ years of expertise in crafting cutting-edge web and mobile applications, specializing in frontend development. Skilled in creating intuitive user interfaces, optimizing performance, and leveraging the latest technologies. Known for meticulous attention to detail, creative problem-solving, and a passion for staying ahead of industry trends. Committed to delivering high-impact, user-centric solutions that not only meet but exceed client expectations, driving business growth and elevating user experiences. Adept at collaborating with cross-functional teams to transform complex requirements into seamless, efficient, and visually appealing applications.',
  socials: [
    { label: 'Linkedin', href: 'https://linkedin.com/in/nuzulh', icon: Linkedin },
    { label: 'GitHub', href: 'https://github.com/nuzulh', icon: Github },
    // { label: 'Instagram', href: 'https://instagram.com/nuzulhikam', icon: Instagram },
  ],
  skills: STACKS,
};
