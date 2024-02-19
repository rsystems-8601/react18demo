// material-ui
import React, { useState, useEffect } from 'react';
import { Typography } from '@mui/material';
import empAPI from '../../api/mockuserapi';
import { useFormik } from 'formik';


// project import
import MainCard from 'components/MainCard';

// ==============================|| SAMPLE PAGE ||============================== //

const SamplePage = () => {
  const [result, setResult] = useState([]);
  const [formValues, setFormValues] = useState([]);
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
    },
    onSubmit: values => {
      setFormValues(values);
      alert(JSON.stringify(values, null, 2));
    },
  });

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
      <Typography variant="body2">
        Lorem ipsum dolor sit amen, consenter nipissing eli, sed do elusion tempos incident ut laborers et doolie magna alissa. Ut enif ad
        minim venice, quin nostrum exercitation illampu laborings nisi ut liquid ex ea commons construal. Duos aube grue dolor in
        reprehended in voltage veil esse colum doolie eu fujian bulla parian. Exceptive sin ocean cuspidate non president, sunk in culpa qui
        officiate descent molls anim id est labours.
      </Typography>
      <form onSubmit={formik.handleSubmit}>
       <label htmlFor="firstName">First Name</label>
       <input
         id="firstName"
         name="firstName"
         type="text"
         onChange={formik.handleChange}
         value={formik.values.firstName}
       />
       <label htmlFor="lastName">Last Name</label>
       <input
         id="lastName"
         name="lastName"
         type="text"
         onChange={formik.handleChange}
         value={formik.values.lastName}
       />
       <label htmlFor="email">Email Address</label>
       <input
         id="email"
         name="email"
         type="email"
         onChange={formik.handleChange}
         value={formik.values.email}
       />
       <button type="submit">Submit</button>
     </form>
    </MainCard>
  );
};

export default SamplePage;
