'use client';

import { Atoms } from '@/components/atoms';
import { ToggleTheme } from '@/components/molecules';
import { MY_PROFILE, NAV_MENUS } from '@/lib/consts';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export function Aside() {
  const pathname = usePathname();

  return (
    <aside className='hidden min-h-[85vh] sticky top-14 lg:flex flex-col gap-4 w-full max-w-60'>
      <Atoms.Avatar src={MY_PROFILE.avatar} className='size-20' />

      <div className='space-y-1'>
        <div className='flex items-center gap-2'>
          <span className='font-semibold text-lg'>{MY_PROFILE.name}</span>
          <Atoms.Verified />
        </div>
        <div className='flex items-center gap-2'>
          <Atoms.Dot variant='success' />
          <span className='text-sm text-muted-foreground'>{MY_PROFILE.status1}</span>
        </div>
      </div>

      <Atoms.Separator />

      <nav className='grid gap-1'>
        {NAV_MENUS
          .sort((a, b) => a.sort - b.sort)
          .map(item => (
            <Atoms.Button
              id={item.label}
              key={item.href}
              size='lg'
              variant={pathname === item.href ? 'secondary' : 'ghost'}
              className={cn(
                'justify-start group px-4 text-muted-foreground transition-all duration-300',
                pathname === item.href && 'text-foreground'
              )}
              asChild
            >
              <Link href={item.href}>
                <item.icon className='size-4 mr-2 group-hover:-rotate-12 transition-all duration-300' />
                {item.label}
              </Link>
            </Atoms.Button>
          ))}
      </nav>

      <Atoms.Separator />

      <div className='flex flex-col gap-2'>
        <p className='text-muted-foreground opacity-50 text-sm mb-2'>Find Me</p>
        {MY_PROFILE.socials.map(item => (
          <Atoms.Button
            id={item.label}
            key={item.label}
            variant='outline'
            className={cn(
              'justify-start group px-4 text-muted-foreground transition-all duration-300',
              pathname === item.href && 'text-foreground'
            )}
            asChild
          >
            <Link href={item.href} target='_blank'>
              <item.icon className='size-4 mr-2 group-hover:-rotate-12 transition-all duration-300' />
              {item.label}
            </Link>
          </Atoms.Button>
        ))}
      </div>

      <div className='grow flex flex-col justify-end'>
        <ToggleTheme />
      </div>
    </aside>
  );
}
