import * as React from 'react';
import { LineChart } from '@mui/x-charts/LineChart';

export default function AreaChart() {
  return (
    <LineChart
      xAxis={[{ data: [0,2,4,6,8,10,12] }]}
      series={[
        {
          data: [10,6,7,5,8,4,11],
          area: true,
        },
         {
          data: [0,4,3,2,1,4,0],
          area: true,
        },
      ]}
      width={800}
      height={400}
      sx={{mb:25,mr:60, align:'center'}}
    />
  );
}