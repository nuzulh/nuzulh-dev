import { Atoms } from '@/components/atoms';
import { Card, CardContent, CardHeader } from '@/components/molecules';
import { Project } from '@/lib/types';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

type Props = {
  data: Project;
};

export function CardProject({ data }: Props) {
  return (
    <Link href={`/projects/${data.cname}`}>
      <Card className='w-full max-w-64 grid group'>
        <CardHeader className='p-0 aspect-square relative overflow-hidden'>
          <Image
            src={data.thumbnailUrl}
            alt={data.title}
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
            {data.title}
          </p>
          <p className='text-sm font-normal line-clamp-2 text-muted-foreground'>
            {data.description}
          </p>
          <Atoms.Separator className='my-2' />
          <div className='flex items-center gap-2'>
            {data.stacks.map(stack => (
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
  );
}
