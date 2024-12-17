import { Button, TextField, Typography } from '@mui/material';
import { Field, Form, Formik } from 'formik';
import React from 'react'
import { useNavigate } from 'react-router-dom';


const initialValues = {
  fullName:"",
  email: "",
  password: "",
  role:"ROLE_CUSTOMER"
};

const Registerform = () => {

  const navigate = useNavigate();
  const handleSubmit = () => {};
  return (
    <div>
      <Typography variant="h5" className="text-center">
        Login
      </Typography>

      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form>
        <Field
            as={TextField}
            name="fullName"
            label="full name"
            fullWidth
            variant="outlined"
            margin="normal"
          />
          <Field
            as={TextField}
            name="email"
            label="email"
            fullWidth
            variant="outlined"
            margin="normal"
          />
          <Field
            as={TextField}
            name="email"
            label="email"
            fullWidth
            variant="outlined"
            margin="normal"
          />
          <Field
            as={TextField}
            name="password"
            label="password"
            fullWidth
            variant="outlined"
            margin="normal"
          />

          <Button fullWidth type="submit" variant="contained" sx={{mt:2, padding:"1rem"}}>
            Login
          </Button>
        </Form>
      </Formik>

      <Typography variant="body2" align="center"sx={{mt:3}}>
        If have an account already?
        <Button onClick={()=>navigate("/account/login")} size="small">
            Login
        </Button>
      </Typography>
    </div>
  )
}

export default Registerform
