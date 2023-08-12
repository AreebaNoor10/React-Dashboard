import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';
import { axisClasses } from '@mui/x-charts';

const chartSetting = {
  width: 700,
  height: 350,
  sx: {
    [`.${axisClasses.left} .${axisClasses.label}`]: {
      transform: 'rotate(-90deg) translate(0px, -20px)',
    },
    mb:15,
    mr:30,
    "@media (max-width:600px)": {mr:35,width:'580px'}
  },
};
const dataset = [
  {
    OnlineSales: 50,
    OfflineSales: 45,
    month: 'Mon',
  },
  {
    OnlineSales: 70,
    OfflineSales: 50,
    month: 'Tue',
  },
  {
    OnlineSales: 20,
    OfflineSales: 80,
    month: 'Wed',
  },
  {
    OnlineSales: 68,
    OfflineSales: 30,
    month: 'Thu',
  },
  {
    OnlineSales: 45,
    OfflineSales: 40,
    month: 'Friday',
  },
  {
    OnlineSales: 60,
    OfflineSales: 50,
    month: 'Saturday',
  },
  {
    OnlineSales: 75,
    OfflineSales: 30,
    month: 'Sunday',
  },
];

const valueFormatter = (value) => `${value}mm`;

export default function MUIBarchar() {
  return (
    <BarChart
      dataset={dataset}
      xAxis={[{ scaleType: 'band', dataKey: 'month',categoryGapRatio: 0.4, barGapRatio: 0.4
 }]}
      series={[
        { dataKey: 'OnlineSales', valueFormatter, color:'#0195ff'},
        { dataKey: 'OfflineSales', valueFormatter, color:'#00e097' },
      ]}
      {...chartSetting}
    />
  );
}