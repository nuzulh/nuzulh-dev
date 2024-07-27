'use client';

import { cn } from '@/lib/utils';

export function Room() {
  // TODO: integrate to firebase

  return (
    <div
      className={cn(
        'h-[60vh] lg:h-full',
        'text-muted-foreground text-center flex items-center justify-center', // NOTE: temporary style
      )}
    >
      our chats will be appeared here. it still in development, please wait till my first chat appears 🙌
    </div>
  );
}
