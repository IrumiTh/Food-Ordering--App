import { Card, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'

const EventCard = () => {
  return (
    <div>
      <Card sx={{width:345}}>
        <CardMedia image='https://cdn.pixabay.com/photo/2014/10/19/20/59/hamburger-494706_1280.jpg' sx={{height:345}}/>
        <CardContent>
            <Typography variant='h5'>
                Cook With Easy
            </Typography>
            <Typography variant='body2'>
                50% off on your first order
            </Typography>
            <div className='py-2 space-y-2'>
              <p>{"Colombo"}</p>
              <p className='text-sm text-blue-500'>February 14, 2024 12:00 AM </p>
              <p className='text-sm text-red-500'>February 15, 2024 12:00 AM</p>
            </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default EventCard
