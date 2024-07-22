'use client';

import {
  Card,
  CardContent,
  CardHeader,
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/molecules';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export function FeaturedProjects() {
  return (
    <Carousel>
      <CarouselContent>
        <CarouselItem className='basis-auto' data-aos='fade-left'>
          <Link href='#'>
            <Card className='w-full max-w-64 grid bg-secondary/35 group'>
              <CardHeader className='p-0 aspect-square relative overflow-hidden'>
                <Image
                  src='/images/skpi.webp'
                  alt='skpi'
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
              <CardContent className='pt-5 space-y-2'>
                <p className='font-semibold line-clamp-1 opacity-85'>
                  SKPI Fakultas Teknik - USK
                </p>
                <p className='text-sm font-normal line-clamp-2 text-muted-foreground'>
                  Student activities certificate management application
                </p>
              </CardContent>
            </Card>
          </Link>
        </CarouselItem>

        <CarouselItem className='basis-auto' data-aos='fade-left' data-aos-delay='100'>
          <Link href='#'>
            <Card className='w-full max-w-64 grid bg-secondary/35 group'>
              <CardHeader className='p-0 aspect-square relative overflow-hidden'>
                <Image
                  src='/images/no-trash.webp'
                  alt='skpi'
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
              <CardContent className='pt-5 space-y-2'>
                <p className='font-semibold line-clamp-1 opacity-85'>
                  NoTrash
                </p>
                <p className='text-sm font-normal line-clamp-2 text-muted-foreground'>
                  Application for reporting the location of trash that has piled up
                </p>
              </CardContent>
            </Card>
          </Link>
        </CarouselItem>

        <CarouselItem className='basis-auto' data-aos='fade-left' data-aos-delay='200'>
          <Link href='#'>
            <Card className='w-full max-w-64 grid bg-secondary/35 group'>
              <CardHeader className='p-0 aspect-square relative overflow-hidden'>
                <Image
                  src='/images/campus-life.webp'
                  alt='skpi'
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
              <CardContent className='pt-5 space-y-2'>
                <p className='font-semibold line-clamp-1 opacity-85'>
                  CampusLife
                </p>
                <p className='text-sm font-normal line-clamp-2 text-muted-foreground'>
                  Lesson, assignment and schedule management application for students
                </p>
              </CardContent>
            </Card>
          </Link>
        </CarouselItem>

      </CarouselContent>
    </Carousel>
  );
}
