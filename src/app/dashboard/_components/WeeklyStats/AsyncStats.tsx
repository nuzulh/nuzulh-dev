import { CardMinimal } from '@/components/molecules';
import { ChartLanguages, ChartWorkCategories } from '@/components/organisms';
import { getWakatimeAll, getWakatimeLast7Days } from '@/services';
import { format, formatDistanceToNowStrict } from 'date-fns';

export async function AsyncStats() {
  const [last7DaysResponse, allResponse] = await Promise.all([
    await getWakatimeLast7Days(),
    await getWakatimeAll(),
  ]);
  const last7DaysStats = last7DaysResponse.data;
  const allStats = allResponse.data;

  return (
    <>
      <div className='grid md:grid-cols-2'>
        <ChartWorkCategories />
        <ChartLanguages languages={last7DaysStats?.languages || []} />
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
      <span className='text-sm opacity-85 text-muted-foreground self-end'>
        Last update: {formatDistanceToNowStrict(
          last7DaysStats?.modified_at || new Date(),
          { addSuffix: true },
        )}
      </span>
    </>
  );
}
