import { Atoms } from '@/components/atoms';
import { Heading } from '@/components/molecules';
import { FormContact } from '@/components/organisms';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact - Nuzul H.',
  description: 'Feel free to get in touch and let\'s have a discussion about how we can work together.',
};

export default function ContactPage() {
  return (
    <main data-aos='fade-up' className='space-y-6 w-full'>
      <Heading
        title='Contact'
        description="Feel free to get in touch and let's have a discussion about how we can work together."
      />

      <Atoms.Separator />

      <h3 className='font-medium'>Send me a message</h3>
      <FormContact />
    </main>
  );
}
