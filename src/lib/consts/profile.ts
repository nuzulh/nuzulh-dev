import { Github, Linkedin } from 'lucide-react';
import { Profile } from '../types';
import { STACKS } from './stack';

export const MY_PROFILE: Profile = {
  name: 'Nuzul H.',
  nickName: 'Nuzul',
  avatar: 'https://github.com/nuzulh.png',
  address: 'Banda Aceh, Indonesia 🇮🇩',
  status1: 'Working remotely',
  description: 'Frontend Engineer with 3+ years of experience specializing in frontend development for web and mobile applications. Skilled in creating intuitive UIs, optimizing performance, and staying current with industry trends. Committed to delivering user-centric solutions that exceed expectations.',
  socials: [
    { label: 'Linkedin', href: 'https://linkedin.com/in/nuzulh', icon: Linkedin },
    { label: 'GitHub', href: 'https://github.com/nuzulh', icon: Github },
    // { label: 'Instagram', href: 'https://instagram.com/nuzulhikam', icon: Instagram },
  ],
  skills: STACKS,
};
