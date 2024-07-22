import { Atoms } from '@/components/atoms';
import { CarouselSkills } from '@/components/organisms';
import { MY_PROFILE } from '@/lib/consts';

export default function HomePage() {
  return (
    <main data-aos='fade-up' className='space-y-6 overflow-auto'>
      <h1 className='text-xl lg:text-3xl font-semibold'>Hi, I&apos;m Nuzul 👋</h1>

      <div className='flex flex-col lg:flex-row gap-2 lg:gap-6'>
        <div className='flex items-center gap-2'>
          <Atoms.Dot variant='muted' />
          <h3 className='text-muted-foreground text-sm'>
            Based in {MY_PROFILE.address}
          </h3>
        </div>
        <div className='flex items-center gap-2'>
          <Atoms.Dot variant='muted' />
          <h3 className='text-muted-foreground text-sm'>
            {MY_PROFILE.status2}
          </h3>
        </div>
      </div>

      <p className='leading-6 opacity-85'>
        {MY_PROFILE.description}
      </p>

      <Atoms.Separator />

      <h2 className='text-lg font-semibold'>Tools I Have Used</h2>
      <CarouselSkills />
    </main>
  );
}
