import { ButtonGitHub, ButtonGoogle } from '@/components/molecules';

export function ButtonSignIn() {
  return (
    <div className='flex flex-col lg:flex-row items-center justify-center gap-4'>
      <ButtonGoogle />
      <ButtonGitHub />
    </div>
  );
}
