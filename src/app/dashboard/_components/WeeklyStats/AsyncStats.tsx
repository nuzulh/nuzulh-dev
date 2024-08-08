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

  // NOTE: temporary
  const languages = (last7DaysStats?.languages && last7DaysStats.languages.length > 0)
    ? last7DaysStats.languages
    : [
      {
        "name": "TypeScript",
        "total_seconds": 9708.474949,
        "digital": "2:41:48",
        "decimal": "2.68",
        "text": "2 hrs 41 mins",
        "hours": 2,
        "minutes": 41,
        "seconds": 48,
        "percent": 81.17
      },
      {
        "name": "Groovy",
        "total_seconds": 930.294442,
        "digital": "0:15:30",
        "decimal": "0.25",
        "text": "15 mins",
        "hours": 0,
        "minutes": 15,
        "seconds": 30,
        "percent": 7.78
      },
      {
        "name": "Markdown",
        "total_seconds": 704.551838,
        "digital": "0:11:44",
        "decimal": "0.18",
        "text": "11 mins",
        "hours": 0,
        "minutes": 11,
        "seconds": 44,
        "percent": 5.89
      },
      {
        "name": "JSON",
        "total_seconds": 361.35976,
        "digital": "0:06:01",
        "decimal": "0.10",
        "text": "6 mins",
        "hours": 0,
        "minutes": 6,
        "seconds": 1,
        "percent": 3.02
      },
      {
        "name": "Other",
        "total_seconds": 226.500049,
        "digital": "0:03:46",
        "decimal": "0.05",
        "text": "3 mins",
        "hours": 0,
        "minutes": 3,
        "seconds": 46,
        "percent": 1.89
      },
      {
        "name": "Java Properties",
        "total_seconds": 18.329946,
        "digital": "0:00:18",
        "decimal": "0.00",
        "text": "18 secs",
        "hours": 0,
        "minutes": 0,
        "seconds": 18,
        "percent": 0.15
      },
      {
        "name": "Git Config",
        "total_seconds": 10.609827,
        "digital": "0:00:10",
        "decimal": "0.00",
        "text": "10 secs",
        "hours": 0,
        "minutes": 0,
        "seconds": 10,
        "percent": 0.09
      }
    ];

  return (
    <>
      <div className='grid md:grid-cols-2'>
        <ChartWorkCategories />
        <ChartLanguages languages={languages} />
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
