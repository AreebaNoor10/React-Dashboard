import React, { useState } from 'react'
import Sidebar from '../Components/Sidebar'
import { Box } from '@mui/material'
import Navbar from '../Components/Navbar'
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import BarCharts from '../Charts/BarCharts'
import {GeoCharts} from '../Charts/GeoCharts'
import Chart from "react-apexcharts";
import LineChart1 from '../Charts/LineChart';
import Table1 from '../Table/Table'
import '../Dash.css'
import Column  from '../Charts/Column';
import MUIBarchar from '../Charts/MUIBarchar';
import AreaChart from '../Charts/AreaChart';
import SignalCellularAltIcon from '@mui/icons-material/SignalCellularAlt';
import DescriptionRoundedIcon from '@mui/icons-material/DescriptionRounded';
import LocalOfferRoundedIcon from '@mui/icons-material/LocalOfferRounded';
import PersonAddAlt1RoundedIcon from '@mui/icons-material/PersonAddAlt1Rounded';
const Home = () => {

  return (
    <>
    <div className="bgcolor">
    <Navbar/>
    <Box height={57} />
      <Box sx={{ display: 'flex' }}>
    <Sidebar/>
    <Box component="main" sx={{ flexGrow: 1,p:2,"@media (max-width:600px)": {p:0}}}>
    <Grid container direction='row' spacing={2} alignContent='center'>
      <Grid item xs={12} sm={8}>
        <Card sx={{borderRadius:'10px', height:'100%', "@media (max-width:600px)": {width:'50%'}}}>
      <CardContent>
        <Typography gutterBottom variant="h6" component="div"  color='#23395d' fontWeight='bold' paddingLeft={1}>
          Today's Sale
        </Typography>
        <Typography variant="body2" color="text.secondary" paddingLeft={1}>
          Sales Summary
        </Typography>
      </CardContent>
      <Grid container spacing={1} direction={'row'} paddingLeft={2} paddingRight={2}>
        <Grid item xs={8} sm={3}>
      <Card sx={{ bgcolor:"#FFB6C1", borderRadius:'10px'}}>
      <CardContent>
        <div className='signal'>
        <SignalCellularAltIcon sx={{color:'#fff', mt:0.5, ml:0.5}}/>
        </div>
        <Typography fontWeight='bold' variant="h5" component="div" mt={2}>
          $1K
        </Typography>
        <Typography variant="body1" fontWeight='bold' mt={1}>
          Total Sales
        </Typography>
        <Typography variant="body2" color='#6b90ec' fontSize={12} mt={1}>
          +8% from yeasterday
        </Typography>
      </CardContent>
    </Card>
    </Grid>
    <Grid item xs={8} sm={3}>
    <Card sx={{bgcolor:'#F3E4C7', borderRadius:'10px'}}>
      <CardContent>
        <div className='signal1'>
        <DescriptionRoundedIcon sx={{color:'#fff', mt:0.5, ml:0.5}}/>
        </div>
        <Typography gutterBottom fontWeight='bold' variant="h5" component="div" mt={2}>
          300
        </Typography>
        <Typography variant="body1" fontWeight='bold' mt={1}>
          Total Orders
        </Typography>
        <Typography variant="body2" color='#6b90ec' fontSize={12} mt={1}>
          +5% from yesterday
        </Typography>
      </CardContent>
    </Card>
    </Grid>
    <Grid item xs={8} sm={3}>
    <Card sx={{bgcolor:'#dcfce7',borderRadius:'10px' }}>
      <CardContent>
      <div className='signal2'>
        <LocalOfferRoundedIcon sx={{color:'#fff', mt:0.5, ml:0.5}}/>
        </div>
        <Typography gutterBottom fontWeight='bold' variant="h5" component="div" mt={2}>
          5
        </Typography>
        <Typography variant="body1" fontWeight='bold' mt={1}>
          Product Sold
        </Typography>
        <Typography variant="body2" color='#6b90ec' fontSize={12} mt={1}>
         +12% from yesterday
        </Typography>
      </CardContent>
    </Card>
    </Grid>
    <Grid item xs={8} sm={3}>
    <Card sx={{ bgcolor:'#f4e8ff', borderRadius:'10px' }}>
      <CardContent>
      <div className='signal3'>
        <PersonAddAlt1RoundedIcon sx={{color:'#fff', mt:0.5, ml:0.5}}/>
        </div>
        <Typography gutterBottom fontWeight='bold' variant="h5" component="div" mt={2}>
          8
        </Typography>
        <Typography variant="body1" fontWeight='bold' mt={1}>
          New Customers
        </Typography>
        <Typography variant="body2" color='#6b90ec' fontSize={12} mt={1}>
          0.5% from yesterday
        </Typography>
      </CardContent>
    </Card>
    </Grid>
    </Grid>
    </Card>
</Grid>
      <Grid item xs={12} sm={4}>
      <Card sx={{width:'100%',"@media (max-width:600px)": {width:'60%'}}}>
      <CardContent>
       <Typography variant='h6' color='#23395d' fontWeight='bold' ml={5} >Visitor   Insights</Typography>
       <LineChart1/>
      </CardContent>
    </Card>
      </Grid>
    </Grid>
    <Box height={10} />
    <Grid container direction='row' spacing={2}>
       <Grid item xs={12} sm={5} >
       <Card sx={{maxWidth:'100%', height:'50vh',"@media (max-width:600px)": {width:'60%',height:'40vh'}}}>
      <CardContent>
       <Typography variant='h6' color='#23395d' fontWeight='bold'>Total Revenue</Typography>
       {/* <Chart
              options={state.options}
              series={state.series}
              type="bar"
              height="100%"
              width="80%"
              align="center"
            /> */}
            <MUIBarchar align='center' />
      </CardContent>
    </Card>
       </Grid>
       <Grid item xs={12} sm={3.5} >
       <Card sx={{maxWidth:'100%',height:'50vh',"@media (max-width:600px)": {width:'60%',height:'40vh'}}}>
      <CardContent>
       <Typography variant='h6' color='#23395d' fontWeight='bold' mt={2}>Customer Satisfaction</Typography>
       {/* <div className='chart'>
       <Chart
              options={state.options}
              series={state.series}
              type="area"
              width="300"
              align="center"
            />
            </div> */}
            <AreaChart/>
      </CardContent>
    </Card>
       </Grid>
       <Grid item xs={12} sm={3.5} >
       <Card sx={{maxWidth:'100%',height:'50vh',"@media (max-width:600px)": {width:'60%',height:'40vh'}}}>
      <CardContent>
       <Typography variant='h6' color='#23395d' fontWeight='bold' mt={2}>Target vs Reality</Typography>
       <div className='chart'>
       <BarCharts />
       </div>
      </CardContent>
    </Card>
       </Grid>
    </Grid>
    <Box height={10} />
    <Grid container direction='row' spacing={2}>
       <Grid item xs={12} sm={5} >
       <Card sx={{maxWidth:'100%',height:'100%',"@media (max-width:600px)": {width:'45%',height:'50vh'}}}>
      <CardContent>
       <Typography variant='h6' color='#23395d' fontWeight='bold'>Visitor   Insights</Typography>
      <Table1/>
      </CardContent>
    </Card>
       </Grid>
       <Grid item xs={12} sm={3.5} >
       <Card sx={{maxWidth:'100%',height:'100%',"@media (max-width:600px)": {width:'60%',height:'40vh'}}}>
      <CardContent>
       <Typography variant='h6' color='#23395d' fontWeight='bold'>Sales Mapping By Country</Typography>
     <GeoCharts/>
      </CardContent>
    </Card>
       </Grid>
       <Grid item xs={12} sm={3.5} >
       <Card sx={{maxWidth:'100%',height:'100%',"@media (max-width:600px)": {width:'60%',height:'40vh'}}}>
      <CardContent>
       <Typography variant='h6' color='#23395d' fontWeight='bold'>Volume vs Service Level</Typography>
       <Column/>
      </CardContent>
    </Card>
       </Grid>
    </Grid>
    </Box>
    </Box>
    </div>
    </>
  )
}

export default Home
