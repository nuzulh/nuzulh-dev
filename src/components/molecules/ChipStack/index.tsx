import { PropsWithCn, Stack } from '@/lib/types';
import { cn } from '@/lib/utils';
import Image from 'next/image';

type Props = PropsWithCn<{ data: Stack; }>;

export function ChipStack({ data, className }: Props) {
  return (
    <div
      className={cn(
        'px-4 py-2 text-sm font-medium flex items-center gap-2 rounded-full border bg-secondary/50 w-fit',
        className,
      )}
    >
      <Image
        src={data.imageUrl}
        height={18}
        width={18}
        alt={data.label}
        loading='lazy'
      />
      {data.label}
    </div>
  );
}
