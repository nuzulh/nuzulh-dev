import { LucideIcon } from 'lucide-react';

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
  skills: {
    label: string;
    imageUrl: string;
  }[];
};
