import { TabsContentCareer } from './career';
import { TabsContentEducation } from './education';
import { TabsContentResume } from './resume';

export function TabsContentAbout() {
  return (
    <>
      <TabsContentResume />
      <TabsContentCareer />
      <TabsContentEducation />
    </>
  );
}
