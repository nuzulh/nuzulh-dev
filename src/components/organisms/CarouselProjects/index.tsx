'use client';

import { Atoms } from '@/components/atoms';
import {
  Card,
  CardContent,
  CardHeader,
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/molecules';
import { MY_PROJECTS } from '@/lib/consts';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export function CarouselProjects() {
  return (
    <Carousel>
      <CarouselContent>
        {MY_PROJECTS
          .filter(x => x.isFeatured)
          .map((item, index) => (
            <CarouselItem
              key={index}
              className='basis-auto'
              data-aos='fade-left'
              data-aos-delay={index * 100}
            >
              <Link href={`/projects/${item.slug}`}>
                <Card className='w-full max-w-64 grid bg-secondary/35 group'>
                  <CardHeader className='p-0 aspect-square relative overflow-hidden'>
                    <Image
                      src={item.thumbnailUrl}
                      alt={item.title}
                      height={280}
                      width={300}
                      className='rounded-t-lg aspect-square object-cover overflow-hidden'
                      loading='lazy'
                    />
                    <div className='absolute opacity-0 bg-black/65 group-hover:opacity-100 flex items-center justify-center inset-0 -top-[6px] rounded-t-lg border transition-all duration-300 group-hover:backdrop-blur-sm'>
                      <div className='flex items-center gap-8 group-hover:gap-2 delay-75 transition-all duration-300 font-semibold text-sm text-white/90'>
                        <span>View Project</span>
                        <ArrowRight className='size-4' />
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className='pt-5 grid gap-1'>
                    <p className='font-semibold line-clamp-1 opacity-85'>
                      {item.title}
                    </p>
                    <p className='text-sm font-normal line-clamp-2 text-muted-foreground'>
                      {item.description}
                    </p>
                    <Atoms.Separator className='my-2' />
                    <div className='flex items-center gap-2'>
                      {item.stacks.map(stack => (
                        <Image
                          key={stack.label}
                          src={stack.imageUrl}
                          alt={stack.label}
                          height={22}
                          width={22}
                        />
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </CarouselItem>
          ))}
      </CarouselContent>
      <div className='hidden lg:flex'>
        <CarouselPrevious variant='default' className='disabled:hidden left-0' />
        <CarouselNext variant='default' className='disabled:hidden right-0' />
      </div>
    </Carousel>
  );
}
