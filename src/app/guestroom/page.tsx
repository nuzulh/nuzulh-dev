import { Atoms } from '@/components/atoms';
import { Card, CardFooter, CardHeader, Heading } from '@/components/molecules';
import { ButtonSignIn } from '@/components/organisms';
import { cn } from '@/lib/utils';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Guestroom - Nuzul H.',
  description: 'Leave whatever you want to say. Feedbacks, suggestions, questions, or anything else!',
};

export default function GuestroomPage() {
  return (
    <main data-aos='fade-up' className='w-full flex flex-col gap-6'>
      <Heading
        title='Guestroom'
        description='Leave whatever you want to say. Feedbacks, suggestions, questions, or anything else!'
      />

      <Atoms.Separator />

      <Card className='bg-card h-full'>
        <CardHeader className='h-full justify-between'>
          <div
            className={cn(
              'h-[60vh] lg:h-full',
              'text-muted-foreground text-center flex items-center justify-center', // NOTE: temporary style
            )}
          >
            our chats will be appeared here. it still in development, please wait till my first chat appears 🙌
          </div>
          <div className='space-y-3'>
            <p className='text-sm text-muted-foreground text-center'>
              Please sign-in to join the conversation. Don&apos;t worry, your data is safe.
            </p>
            <ButtonSignIn />
          </div>
        </CardHeader>
      </Card>
    </main>
  );
}
