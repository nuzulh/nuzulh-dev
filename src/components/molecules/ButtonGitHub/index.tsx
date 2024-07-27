'use client';

import { Atoms } from '@/components/atoms';
import { useHydration } from '@/hooks';
import { useTheme } from 'next-themes';
import Image from 'next/image';

type Props = {
  onClick?: () => void;
};

export function ButtonGitHub({ onClick }: Props) {
  const { theme } = useTheme();
  const { isHydrated } = useHydration();

  if (!isHydrated) return null;

  return (
    <Atoms.Button size='lg' variant='outline' onClick={onClick}>
      <Image
        src={`/svgs/github${theme === 'dark' ? '-white' : ''}.svg`}
        height={22}
        width={22}
        alt='github'
        className='mr-2'
      />
      Sign in with GitHub
    </Atoms.Button>
  );
}
