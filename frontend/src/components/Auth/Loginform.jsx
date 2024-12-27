import { Button, TextField, Typography } from "@mui/material";
import { Field, Form, Formik } from "formik";
import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {loginUser} from '../State/Authentication/Action'

const initialValues = {
  email: "",
  password: "",
};
const Loginform = () => {

  const navigate = useNavigate();
  const dispatch=useDispatch();
  const handleSubmit = (values) => {
    dispatch(loginUser({userData:values,navigate}))
    
  };
  return (
    <div>
      <Typography variant="h5" className="text-center">
        Login
      </Typography>

      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form>
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
        Don't have account?
        <Button onClick={()=>navigate("/account/register")} size="small">
            Register
        </Button>
      </Typography>
    </div>
  );
};

export default Loginform;
