
import { Atoms } from '@/components/atoms';
import Link from 'next/link';
import {
  Card,
  CardHeader,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@/components/molecules';
import {
  BriefcaseBusiness,
  Download,
  GraduationCap,
  Paperclip,
} from 'lucide-react';

export function TabsAbout() {
  return (
    <Tabs defaultValue='resume' className='w-full'>
      <TabsList className='grid grid-cols-1 h-full lg:h-fit lg:grid-cols-3'>
        <TabsTrigger className='justify-start py-2 lg:py-1.5 lg:justify-center' value='resume'>
          <Paperclip className='size-4 mr-2' /> Resume
        </TabsTrigger>
        <TabsTrigger className='justify-start py-2 lg:py-1.5 lg:justify-center' value='career'>
          <BriefcaseBusiness className='size-4 mr-2' /> Career
        </TabsTrigger>
        <TabsTrigger className='justify-start py-2 lg:py-1.5 lg:justify-center' value='education'>
          <GraduationCap className='size-4 mr-2' /> Education
        </TabsTrigger>
      </TabsList>
      <TabsContent value='resume'>
        <Card data-aos='fade-left' className='bg-card hidden lg:block'>
          <CardHeader>
            <iframe src='/docs/resume.pdf' className='w-full h-dvh' />
          </CardHeader>
        </Card>
        <Atoms.Button data-aos='fade-left' className='flex lg:hidden w-full mt-8' asChild>
          <Link href='/docs/resume.pdf' target='_blank'>
            <Download className='size-4 mr-2' /> Download resume
          </Link>
        </Atoms.Button>
      </TabsContent>
      <TabsContent value='career'>
        <Card data-aos='fade-left' className='bg-card'>
          <CardHeader>
            Career
          </CardHeader>
        </Card>
      </TabsContent>
      <TabsContent value='education'>
        <Card data-aos='fade-left' className='bg-card'>
          <CardHeader>
            Education
          </CardHeader>
        </Card>
      </TabsContent>
    </Tabs>
  );
}
