import { Atoms } from '@/components/atoms';
import { Heading } from '@/components/molecules';
import { TabsAbout } from '@/components/organisms/TabsAbout';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About - Nuzul H.',
  description: 'About me.',
};

export default function AboutPage() {
  return (
    <main data-aos='fade-up' className='space-y-6 w-full overflow-hidden'>
      <Heading
        title='About'
        description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, repellendus ex minus eligendi excepturi eaque ducimus accusamus placeat illo dolorum fugiat facilis aut explicabo ad voluptas ullam, voluptates sed quidem!'
      />

      <Atoms.Separator />
      <TabsAbout />
    </main>
  );
}
