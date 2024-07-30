import { Github, Linkedin } from 'lucide-react';
import { Profile } from '../types';
import { STACKS } from './stack';

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
    // { label: 'Instagram', href: 'https://instagram.com/nuzulhikam', icon: Instagram },
  ],
  skills: STACKS,
};
