import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';
import { axisClasses } from '@mui/x-charts';

const chartSetting = {
  width: 650,
  height: 350,
  sx: {
    [`.${axisClasses.left} .${axisClasses.label}`]: {
      transform: 'rotate(-90deg) translate(0px, -20px)',
    },
    mb:20,
    mr:40
  },
};
const dataset = [
  {
    OnlineSales: 50,
    OfflineSales: 45,
    month: 'Jan',
  },
  {
    OnlineSales: 70,
    OfflineSales: 50,
    month: 'Feb',
  },
  {
    OnlineSales: 20,
    OfflineSales: 80,
    month: 'March',
  },
  {
    OnlineSales: 68,
    OfflineSales: 30,
    month: 'April',
  },
  {
    OnlineSales: 45,
    OfflineSales: 40,
    month: 'May',
  },
  {
    OnlineSales: 60,
    OfflineSales: 50,
    month: 'Jun',
  },
  {
    OnlineSales: 75,
    OfflineSales: 30,
    month: 'July',
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
        { dataKey: 'OnlineSales', valueFormatter, color:'#4bb58d'},
        { dataKey: 'OfflineSales', valueFormatter, color:'#ffcf00' },
      ]}
      {...chartSetting}
    />
  );
}