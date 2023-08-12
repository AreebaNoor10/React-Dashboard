import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';

const uData = [7000, 10000,5000,11000,6000,12000];
const pData = [9000, 13398,6000,9000,8000,10000];
const xLabels = [
  'Page A',
  'Page B',
  'Page C',
  'Page D',
  'Page E',
  'Page F',
];

export default function Column() {
  return (
    <BarChart
      width={500}
      height={300}
      sx={{mb:10, mr:18}}
      series={[
        { data: pData, label: 'pv', id: 'pvId', stack: 'total' },
        { data: uData, label: 'uv', id: 'uvId', stack: 'total' },
      ]}
      xAxis={[{ data: xLabels, scaleType: 'band', categoryGapRatio: 0.7}]}
    />
  );
}
