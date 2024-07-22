import { Atoms } from '@/components/atoms';

export default function ContactPage() {
  return (
    <main data-aos='fade-up' className='space-y-6 w-full'>
      <div className='space-y-2'>
        <h1 className='text-xl font-semibold'>Contact</h1>
        <h2 className='text-muted-foreground'>
          Feel free to get in touch and let&apos;s have a discussion about how we can work together.
        </h2>
      </div>

      <Atoms.Separator />
    </main>
  );
}
