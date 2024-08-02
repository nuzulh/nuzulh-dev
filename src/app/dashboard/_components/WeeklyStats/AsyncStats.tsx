import { CardMinimal } from '@/components/molecules';
import { getWakatimeAll, getWakatimeLast7Days } from '@/services';
import { format, formatDistanceToNowStrict } from 'date-fns';
import Link from 'next/link';

export async function AsyncStats() {
  const [last7DaysResponse, allResponse] = await Promise.all([
    await getWakatimeLast7Days(),
    await getWakatimeAll(),
  ]);
  const last7DaysStats = last7DaysResponse.data;
  const allStats = allResponse.data;

  return (
    <>
      <div className='flex justify-between flex-col md:flex-row gap-2 text-muted-foreground'>
        <span className='font-medium'>
          <Link
            href={`http://wakatime.com/@${last7DaysStats?.username}`}
            target='_blank'
            className='text-foreground hover:underline'
          >
            My WakaTime
          </Link>
          {' '}stats last 7 days.
        </span>
        <span className='text-sm opacity-85'>
          Last update: {formatDistanceToNowStrict(last7DaysStats?.modified_at || new Date(), { addSuffix: true })}
        </span>
      </div>
      <div className='grid md:grid-cols-2 gap-3'>
        <CardMinimal
          label='Start Date'
          value={last7DaysStats?.start ? format(last7DaysStats?.start, 'MMM dd, yyyy') : undefined}
        />
        <CardMinimal
          label='End Date'
          value={last7DaysStats?.end ? format(last7DaysStats?.end, 'MMM dd, yyyy') : undefined}
        />
        <CardMinimal
          label='Daily Coding Average'
          value={last7DaysStats?.human_readable_daily_average_including_other_language}
        />
        <CardMinimal
          label='This Week Coding Time'
          value={last7DaysStats?.human_readable_total_including_other_language}
        />
        <CardMinimal
          label='Best Day Coding Time'
          value={
            last7DaysStats?.best_day?.date && last7DaysStats.best_day.text
              ? `${format(last7DaysStats.best_day.date, 'MMM dd, yyyy')} (${last7DaysStats.best_day.text})`
              : undefined
          }
        />
        <CardMinimal
          label='All Time From Aug 01, 2024'
          value={allStats?.text}
        />
      </div>
    </>
  );
}
