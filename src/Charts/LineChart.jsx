import * as React from 'react';
import { LineChart } from '@mui/x-charts/LineChart';

const uData = [4000, 3000, 2000, 2780, 1890, 2390, 3490];
const pData = [2400, 1398, 9800, 3908, 4800, 3800, 4300];
const xLabels = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
];

export default function LineChart1() {
  return (
    <LineChart
      width={500}
      height={300}
      sx={{
       mb:10,
       mr:10,
       "@media (max-width:600px)": {mr:25,mb:15},
      }}
      series={[
        { data: pData },
        { data: uData},
      ]}
      xAxis={[{ scaleType: 'point', data: xLabels }]}
    />
  );
}