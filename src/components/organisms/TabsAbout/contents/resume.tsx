import { Atoms } from '@/components/atoms';
import { Card, CardHeader, TabsContent } from '@/components/molecules';
import { Download } from 'lucide-react';
import Link from 'next/link';

function DownloadButton() {
  return (
    <Atoms.Button variant='outline' asChild>
      <Link href='/docs/resume.pdf' target='_blank'>
        <Download className='size-4 mr-2' /> Download my resume
      </Link>
    </Atoms.Button>
  );
}

export function TabsContentResume() {
  return (
    <TabsContent value='resume'>
      <Card className='bg-card'>
        <CardHeader data-aos='fade-left' className='hidden lg:block space-y-4'>
          <DownloadButton />
          <iframe src='/docs/resume.pdf' className='w-full h-dvh' />
        </CardHeader>

        <CardHeader data-aos='fade-left' className='lg:hidden'>
          <DownloadButton />
        </CardHeader>
      </Card>
    </TabsContent>
  );
}
