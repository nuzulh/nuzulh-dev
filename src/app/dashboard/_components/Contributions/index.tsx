import { GitBranch } from 'lucide-react';

export function Contributions() {
  return (
    <section className='space-y-4'>
      <h3 className='flex items-center gap-2 text-lg font-semibold opacity-85'>
        <GitBranch /> Contributions
      </h3>
    </section>
  );
}
