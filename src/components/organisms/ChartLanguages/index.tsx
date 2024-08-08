'use client';

import { Pie, PieChart } from 'recharts';
import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/molecules';
import { Wakatime7Days } from '@/lib/types';
import { languageColors } from '@/lib/consts';

type Props = {
  languages: Wakatime7Days['languages'];
};

const useLanguagesChart = (languages: Props['languages']) => {
  const chartConfig = {} as ChartConfig;
  const chartData = [] as { name: string; value: number; fill: string; }[];

  languages.forEach(lang => {
    const key = languageColors[lang.name] ? lang.name : 'Other';

    chartConfig[key] = { label: key, color: languageColors[key] };

    chartData.push({
      name: lang.name,
      value: lang.percent,
      fill: languageColors[key],
    });
  });

  return { chartConfig, chartData };
};

export function ChartLanguages({ languages }: Props) {
  const { chartConfig, chartData } = useLanguagesChart(languages);

  return (
    <ChartContainer config={chartConfig} className='min-h-[200px] w-full'>
      <PieChart accessibilityLayer>
        <ChartTooltip content={<ChartTooltipContent />} />
        <ChartLegend
          content={<ChartLegendContent className='flex-col items-start gap-2' />}
          layout='vertical'
          align='right'
        />
        <Pie dataKey='value' radius={4} data={chartData} />
      </PieChart>
    </ChartContainer>
  );
}
