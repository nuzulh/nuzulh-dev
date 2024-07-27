'use client';

import { Atoms } from '@/components/atoms';
import { useHydration } from '@/hooks';
import { useTheme } from 'next-themes';
import Image from 'next/image';

type Props = {
  onClick?: () => void;
};

export function ButtonGoogle({ onClick }: Props) {
  const { theme } = useTheme();
  const { isHydrated } = useHydration();

  if (!isHydrated) return null;

  return (
    <Atoms.Button size='lg' variant={theme === 'dark' ? 'default' : 'outline'} onClick={onClick}>
      <Image
        src='/svgs/google.svg'
        height={22}
        width={22}
        alt='google'
        className='mr-2'
      />
      Sign in with Google
    </Atoms.Button>
  );
}
