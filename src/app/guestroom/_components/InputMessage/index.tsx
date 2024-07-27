'use client';

import { Atoms } from '@/components/atoms';
import { LogOut, Send } from 'lucide-react';
import { signOut, useSession } from 'next-auth/react';
import { useCallback, useMemo, useState } from 'react';

export function InputMessage() {
  const { data: session } = useSession();
  const [message, setMessage] = useState('');

  const user = useMemo(() => session?.user, [session]);
  const disabled = useMemo(() => !message.trim(), [message]);

  const onSendMessage = useCallback(
    () => {
      if (disabled) return;

      // TODO: integrate to firebase
      console.log(message);

      setMessage('');
    },
    [disabled, message]
  );

  if (!user) return null;

  return (
    <div className='space-y-2'>
      <div className='flex items-center gap-2'>
        <Atoms.Input
          className='flex-1 w-full'
          placeholder='Type your message...'
          onChange={e => setMessage(e.target.value)}
          onKeyUp={e => e.key === 'Enter' && onSendMessage()}
          value={message}
        />
        <Atoms.Button size='icon' disabled={disabled} onClick={onSendMessage}>
          <Send className='size-4' />
        </Atoms.Button>
      </div>

      <div className='flex flex-col lg:flex-row lg:items-center gap-1 lg:gap-3'>
        <p className='text-sm text-muted-foreground'>
          Signed in as {user.name} ({user.email})
        </p>
        <Atoms.Dot className='size-1 hidden lg:flex' variant='muted' />
        <Atoms.Button
          size='sm'
          variant='link'
          className='px-0 text-destructive dark:text-red-500 w-fit'
          onClick={() => signOut()}
        >
          <LogOut className='size-4 mr-2' /> Sign Out
        </Atoms.Button>
      </div>
    </div>
  );
}
