import { Button } from '@mui/material'
import React from 'react'

const OrderCard = ({item,order}) => {
  return (
    <div className='flex justify-between items-center p-5'>
        <div className='flex items-center space-x-5'>
            <img className='h-16 w-16' src={item.food.images[0]} alt=''/>
            <div>
                <p>{item.food.name}</p>
                <p>LKR {item.totalPrice}</p>
            </div>
        </div>
        <div>
            <Button className='cursor-not-allowed '>
                {order.orderStatus}
            </Button>
        </div>
      
    </div>
  )
}

export default OrderCard
