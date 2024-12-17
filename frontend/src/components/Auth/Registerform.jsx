import { Button, FormControl, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material';
import { Field, Form, Formik } from 'formik';
import React from 'react'
import { useNavigate } from 'react-router-dom';


const initialValues = {
  fullName:"",
  email: "",
  password: "",
  role:""
};

const Registerform = () => {

  const navigate = useNavigate();
  const handleSubmit = (values) => {
    console.log("form values,",values)
  };
  return (
    <div>
      <Typography variant="h5" className="text-center">
        Register
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
            name="password"
            label="password"
            fullWidth
            variant="outlined"
            margin="normal"
            type="password"
          />



            <Field
            fullWidth margin="normal"
            as={Select}
              labelId="role-simple-select-label"
              id="demo-simple-select"
              name="role"
              // value={age}
 
              // onChange={handleChange}
            >
              <MenuItem value={"ROLE_CUSTOMER"}>Customer</MenuItem>
              <MenuItem value={"ROLE_RESTAURANT_OWNER"}>Restaurant Owner</MenuItem>
              
            </Field>
   

          <Button fullWidth type="submit" variant="contained" sx={{mt:2, padding:"1rem"}}>
            Login
          </Button>
        </Form>
      </Formik>

      <Typography variant="body2" align="center"sx={{mt:3}}>
        If have an account already?
        <Button onClick={()=>navigate("/account/login")} size="small">
            Register
        </Button>
      </Typography>
    </div>
  )
}

export default Registerform
