import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from '../components/Home/Home'
import RestaurantDetails from '../components/Restaurant/RestaurantDetails'
import { Card } from '@mui/material'
import Profile from '../components/Profile/Profile'
import Auth from '../components/Auth/Auth'
import Cart from '../components/Cart/Cart'

const CustomerRouter = () => {
  return (
    <div>
        <Navbar/>
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/account/:register' element={<Home/>} />
            <Route path='/restaurant/:city/:title/:id' element={<RestaurantDetails/>} />
            <Route path='/cart' element={<Cart/>} />
            <Route path='/my-profile/*' element={<Profile/>} />
            <Route path='/admin/restaurant' element={<Home/>} />
        </Routes>
        <Auth/>
      
    </div>
  )
}

export default CustomerRouter
