// material-ui
import React, { useState, useEffect, Fragment } from 'react';
import { Typography, Paper, Box, Grid, TextField, FormControlLabel, Checkbox, Button } from '@mui/material';
import empAPI from '../../api/mockuserapi';
import { useFormik } from 'formik';
import * as Yup from 'yup';
// https://stackblitz.com/edit/react-hook-form-material-ui?file=src%2FApp.js
// project import
import MainCard from 'components/MainCard';

// ==============================|| SAMPLE PAGE ||============================== //

const Employee = () => {
  const [result, setResult] = useState([]);
  const [formValues, setFormValues] = useState([]);
  const [checked, setChecked] = React.useState(true);

  const formik = useFormik({
    initialValues: {
      fullname: '',
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
      acceptTerms: ''
    },
    validationSchema: Yup.object().shape({
      fullname: Yup.string().required('Fullname is required'),
      username: Yup.string()
        .required('Username is required')
        .min(6, 'Username must be at least 6 characters')
        .max(20, 'Username must not exceed 20 characters'),
      email: Yup.string().required('Email is required').email('Email is invalid'),
      password: Yup.string()
        .required('Password is required')
        .min(6, 'Password must be at least 6 characters')
        .max(40, 'Password must not exceed 40 characters'),
      confirmPassword: Yup.string()
        .required('Confirm Password is required')
        .oneOf([Yup.ref('password'), null], 'Confirm Password does not match'),
      acceptTerms: Yup.bool().oneOf([true], 'Accept Terms is required')
    }),
    validate: (values) => {
      const errors = {};
      if (
        values['firstname'] === 'Multi1' &&
        (values.phoneCall === '' || !values.phoneCall) &&
        (values.SMS === '' || !values.SMS) &&
        (values.Mobile === '' || !values.Mobile) &&
        false
      ) {
        errors.authMethod = 'Required';
      }
      return errors;
    },
    onSubmit: (values) => {
      setFormValues(values);
      alert(JSON.stringify(values, null, 2));
    }
  });

  const handleCheck = (event) => {
    formik.setFieldValue('acceptTerms', event.target.checked);
  };

  const getList = async () => {
    try {
      const userResult = await empAPI.getList();
      if (userResult?.data) {
        setResult(userResult.data);
      }
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getList();
  }, []);

  return (
    <MainCard title="Sample Card">
      UserId: {result && result[0]?.id} <br />
      Submit: {JSON.stringify(formValues, null, 2)}
      <Typography variant="body2">Employee Form Begin</Typography>
      <Paper>
        <Box
          px={3}
          py={2}
          sx={{
            '& .MuiTextField-root': { m: 1, width: '70ch' }
          }}
        >
          <Typography variant="h6" align="center" margin="dense">
            React Hook Form - Material UI - Validation
          </Typography>
          <form onSubmit={formik.handleSubmit}>
            <Grid container spacing={1}>
              <Grid item xs={12} sm={12}>
                <TextField
                  required
                  id="fullname"
                  name="fullname"
                  label="Full Name"
                  fullWidth
                  margin="dense"
                  error={formik.touched['fullname'] && formik.errors['fullname']}
                  onChange={formik.handleChange}
                  value={formik.values.fullname}
                />
                <Typography variant="inherit" color="textSecondary">
                  {formik.errors.fullname}
                </Typography>
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  id="username"
                  name="username"
                  label="Username"
                  fullWidth
                  margin="dense"
                  error={formik.touched['username'] && formik.errors['username']}
                  onChange={formik.handleChange}
                  value={formik.values.username}
                  helperText={formik.errors.username}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  id="email"
                  name="email"
                  label="Email"
                  fullWidth
                  margin="dense"
                  error={formik.touched['email'] && formik.errors['email']}
                  onChange={formik.handleChange}
                  value={formik.values.email}
                  helperText={formik.errors.email}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  id="password"
                  name="password"
                  label="Password"
                  type="password"
                  fullWidth
                  margin="dense"
                  error={formik.touched['password'] && formik.errors['password']}
                  onChange={formik.handleChange}
                  value={formik.values.password}
                  helperText={formik.errors.password}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  id="confirmPassword"
                  name="confirmPassword"
                  label="Confirm Password"
                  type="password"
                  fullWidth
                  margin="dense"
                  error={formik.touched['confirmPassword'] && formik.errors['confirmPassword']}
                  onChange={formik.handleChange}
                  value={formik.values.confirmPassword}
                  helperText={formik.errors.confirmPassword}
                />
              </Grid>
              <Grid>
                <FormControlLabel
                  control={
                    <Checkbox checked={formik.values.acceptTerms} onChange={handleCheck} inputProps={{ 'aria-label': 'controlled' }} />
                  }
                  label="Label"
                />
              </Grid>
            </Grid>

            <Box mt={3}>
              <Button variant="contained" color="primary" type="submit">
                Register
              </Button>
            </Box>
          </form>
        </Box>
      </Paper>
    </MainCard>
  );
};

export default Employee;
