import React from 'react'
import OrderCard from './OrderCard'

const Orders = () => {
  return (
    <div className='flex flex-col items-center'>
      <h1 className='text-xl text-center py-7'>My Orders</h1>
      <div className='space-y-5 w-full lg:w-1/2'>
        {
          [1,1,1,1].map((item)=><OrderCard/>)
        }
      </div>
    </div>
  )
}

export default Orders
