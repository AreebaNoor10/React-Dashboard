import { Typography, Box } from '@mui/material'
import Sidebar from '../Components/Sidebar'
import Navbar from '../Components/Navbar'
import React from 'react'

const About = () => {
  return (
    <div>
    <Navbar/>
    <Box height={57} />
      <Box sx={{ display: 'flex' }}>
    <Sidebar/>
    <Typography>Hello</Typography>
    </Box>
    </div>
  )
}

export default About
