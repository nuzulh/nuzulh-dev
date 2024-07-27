'use client';

import { ButtonGitHub, ButtonGoogle } from '@/components/molecules';
import { signInWithGoogle } from '@/services';
import { useSession } from 'next-auth/react';
import { useTransition } from 'react';

export function ButtonSignIn() {
  const { data: session } = useSession();
  const [isPending, startSignIn] = useTransition();

  const onSignInWithGoogle = () => startSignIn(async () => await signInWithGoogle());

  if (session) return null;

  return (
    <div className='space-y-3'>
      <p className='text-sm text-muted-foreground text-center'>
        Please sign-in to join the conversation. Don&apos;t worry, your data is safe.
      </p>
      <div className='flex flex-col lg:flex-row items-center justify-center gap-4'>
        <ButtonGoogle onClick={onSignInWithGoogle} loading={isPending} />
        <ButtonGitHub disabled />
      </div>
    </div>
  );
}
