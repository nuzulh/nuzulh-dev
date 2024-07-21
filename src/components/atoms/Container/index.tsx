import { PropsWithCn } from '@/lib/types';
import { cn } from '@/lib/utils';
import { PropsWithChildren } from 'react';

type Props = PropsWithChildren & PropsWithCn;

export function Container({ children, className }: Props) {
  return (
    <div className={cn('container p-4 pt-20 lg:pt-4', className)}>
      {children}
    </div>
  );
}
