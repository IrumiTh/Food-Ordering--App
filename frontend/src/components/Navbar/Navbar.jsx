import { Avatar, Badge, Box, IconButton } from '@mui/material'
import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import { pink } from '@mui/material/colors';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import "./Navbar.css"
import zIndex from '@mui/material/styles/zIndex';

const Navbar = () => {
  return (
    <Box className='px-5 sticky top-0 z-50 py-[.8rem] bg-[#e91e63] lg:px-20 flex justify-between'>

        <div className='lg:mr-10 cursor-pointer flex items-center space-x-4'>
            <li className='logo font-semibold text-gray-300 text-2xl'>
                Theesh Food
            </li>

        </div>
        <div className='flex items-center space-x-2 lg:space-x-10'>
            <div className=''>
                <IconButton>
                    <SearchIcon sx={{fontSize:"1.5rem"}}/>
                </IconButton>
            </div>
            <div>
                <Avatar sx={{bgcolor:"white",color:pink.A400}}>c</Avatar>
            </div>
            <div className=''>
                <IconButton>
                    <Badge badgeContent={3}  color="primary" >
                        <ShoppingCartIcon sx={{fontSize:"1.5rem"}}/>
                    </Badge>
                </IconButton>
            </div>

        </div>


    </Box>
  )
}

export default Navbar
