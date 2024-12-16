import { Button } from '@mui/material'
import React from 'react'

const OrderCard = () => {
  return (
    <div className='flex justify-between items-center p-5'>
        <div className='flex items-center space-x-5'>
            <img className='h-16 w-16' src='https://media.istockphoto.com/id/2157436773/photo/cafeteria-double-beef-burger-gourmet.jpg?s=612x612&w=is&k=20&c=4EEGjGKDcBSRHlwVStlm1ayaSxpPG61O8fuXaFmHvHM=' alt=''/>
            <div>
                <p>Biriyani</p>
                <p>LKR 1200</p>
            </div>
        </div>
        <div>
            <Button className='cursor-not-allowed '>
                COMPLETED
            </Button>
        </div>
      
    </div>
  )
}

export default OrderCard
