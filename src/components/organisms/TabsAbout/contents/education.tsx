import { Card, CardHeader, TabsContent } from '@/components/molecules';

export function TabsContentEducation() {
  return (
    <TabsContent value='education'>
      <Card data-aos='fade-left' className='bg-card'>
        <CardHeader>
          Education
        </CardHeader>
      </Card>
    </TabsContent>
  );
}
