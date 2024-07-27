import { Atoms } from '@/components/atoms';
import { Card, CardHeader, TabsContent } from '@/components/molecules';
import { Download } from 'lucide-react';
import Link from 'next/link';

export function TabsContentResume() {
  return (
    <TabsContent value='resume'>
      <Card className='bg-card hidden lg:block'>
        <CardHeader data-aos='fade-left'>
          <iframe src='/docs/resume.pdf' className='w-full h-dvh' />
        </CardHeader>
      </Card>
      <Atoms.Button data-aos='fade-left' className='flex lg:hidden w-full' asChild>
        <Link href='/docs/resume.pdf' target='_blank'>
          <Download className='size-4 mr-2' /> Download my resume
        </Link>
      </Atoms.Button>
    </TabsContent>
  );
}
