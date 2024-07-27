import { auth } from '@/auth';
import { Atoms } from '@/components/atoms';
import { Card, CardHeader, Heading } from '@/components/molecules';
import { Metadata } from 'next';
import { SessionProvider } from 'next-auth/react';
import { ButtonSignIn, InputMessage, Room } from './_components';

export const metadata: Metadata = {
  title: 'Guestroom - Nuzul H.',
  description: 'Leave whatever you want to say. Feedbacks, suggestions, questions, or anything else!',
};

export default async function GuestroomPage() {
  const session = await auth();

  return (
    <SessionProvider session={session}>
      <main data-aos='fade-up' className='w-full flex flex-col gap-6'>
        <Heading
          title='Guestroom'
          description='Leave whatever you want to say. Feedbacks, suggestions, questions, or anything else!'
        />
        <Atoms.Separator />
        <Card className='bg-card h-full'>
          <CardHeader className='h-full justify-between'>
            <Room />
            <ButtonSignIn />
            <InputMessage />
          </CardHeader>
        </Card>
      </main>
    </SessionProvider>
  );
}
