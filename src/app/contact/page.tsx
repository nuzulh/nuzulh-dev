import { Atoms } from '@/components/atoms';
import { FormContact } from '@/components/organisms';

export default function ContactPage() {
  return (
    <main data-aos='fade-up' className='space-y-6 w-full'>
      <div className='space-y-2'>
        <h1 className='text-2xl font-semibold'>Contact</h1>
        <h2 className='text-sm lg:text-base text-muted-foreground'>
          Feel free to get in touch and let&apos;s have a discussion about how we can work together.
        </h2>
      </div>

      <Atoms.Separator />

      <h3 className='font-medium'>Send me a message</h3>
      <FormContact />
    </main>
  );
}
