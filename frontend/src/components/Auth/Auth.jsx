import React from 'react'
import {Box, Modal} from '@mui/material'
import {useLocation, useNavigate} from 'react-router-dom'
import { style } from '../Cart/Cart';
import Registerform from './Registerform';
import Loginform from './Loginform';

const Auth = () => {

    const location = useLocation();
    const navigate = useNavigate();

    const handleOnClose=()=>{
        navigate("/")
    }
  return (
    <>

    <Modal onClose={handleOnClose} open={
        location.pathname==="/account/register"
        || location.pathname==="/account/login"
        
    }>

        <Box sx={style}>

            {location.pathname==="/account/register" ? < Registerform/>:<Loginform/> }

        </Box>

    </Modal>
      
    </>
  )
}

export default Auth
