'use client';

import { Atoms } from '@/components/atoms';
import { Sheet, SheetContent, SheetHeader, ToggleTheme } from '@/components/molecules';
import { MY_PROFILE, NAV_MENUS } from '@/lib/consts';
import { Menu } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

export function Header() {
  const pathname = usePathname();
  const [sheetOpen, setSheetOpen] = useState(false);

  return (
    <>
      <header className='z-40 lg:hidden fixed top-0 h-16 w-full flex items-center justify-between gap-4 px-4 backdrop-blur-md border-b'>
        <div className='flex items-center gap-2'>
          <Atoms.Avatar src={MY_PROFILE.avatar} className='size-8 mr-2' />
          <span className='font-medium'>{MY_PROFILE.name}</span>
          <Atoms.Verified />
        </div>
        <div className='flex items-center gap-2'>
          <ToggleTheme />
          <Atoms.Button
            id='toggle-menu'
            size='icon'
            variant='ghost'
            onClick={() => setSheetOpen(true)}
          >
            <Menu className='size-6' />
          </Atoms.Button>
        </div>
      </header>

      <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
        <SheetContent>
          <SheetHeader className='items-center'>
            <Atoms.Avatar src={MY_PROFILE.avatar} className='size-16' />
            <div className='flex items-center gap-2'>
              <span className='font-semibold'>{MY_PROFILE.name}</span>
              <Atoms.Verified />
            </div>
            <div className='flex items-center gap-2'>
              <Atoms.Dot variant='success' />
              <span className='text-xs text-muted-foreground'>{MY_PROFILE.status1}</span>
            </div>
          </SheetHeader>
          <Atoms.Separator className='my-4' />
          <nav className='flex flex-col gap-2'>
            {NAV_MENUS
              .sort((a, b) => a.sort - b.sort)
              .map(item => (
                <Atoms.Button
                  id={item.label}
                  key={item.label}
                  variant={pathname === item.href ? 'secondary' : 'ghost'}
                  className='justify-start font-normal'
                  asChild
                >
                  <Link href={item.href} onClick={() => setSheetOpen(false)}>
                    <item.icon className='size-4 mr-2' /> {item.label}
                  </Link>
                </Atoms.Button>
              ))}
          </nav>
          <div className='absolute bottom-6 right-6'>
            <ToggleTheme />
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
}
