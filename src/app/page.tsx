import { Atoms } from '@/components/atoms';
import { MY_PROFILE } from '@/lib/consts';

export default function HomePage() {
  return (
    <main data-aos='fade-up' className='space-y-6 overflow-auto'>
      <h1 className='text-xl lg:text-3xl font-semibold'>Hi, I&apos;m Nuzul 👋</h1>

      <div className='flex flex-col lg:flex-row gap-2 lg:gap-6'>
        <div className='flex items-center gap-2'>
          <Atoms.Dot variant='muted' />
          <h2 className='text-muted-foreground text-sm'>
            Based in {MY_PROFILE.address}
          </h2>
        </div>
        <div className='flex items-center gap-2'>
          <Atoms.Dot variant='muted' />
          <h2 className='text-muted-foreground text-sm'>
            {MY_PROFILE.status2}
          </h2>
        </div>
      </div>

      <p className='leading-6 opacity-90'>
        {MY_PROFILE.description}
      </p>

      <Atoms.Separator />
    </main>
  );
}
