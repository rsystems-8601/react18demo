// material-ui
import React, { useState, useEffect } from 'react';
import { Typography } from '@mui/material';
import empAPI from '../../api/mockuserapi';

// project import
import MainCard from 'components/MainCard';

// ==============================|| SAMPLE PAGE ||============================== //

const SamplePage = () => {
  const [result, setResult] = useState([]);

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
      UserId: {result && result[0]?.id}
      <Typography variant="body2">
        Lorem ipsum dolor sit amen, consenter nipissing eli, sed do elusion tempos incident ut laborers et doolie magna alissa. Ut enif ad
        minim venice, quin nostrum exercitation illampu laborings nisi ut liquid ex ea commons construal. Duos aube grue dolor in
        reprehended in voltage veil esse colum doolie eu fujian bulla parian. Exceptive sin ocean cuspidate non president, sunk in culpa qui
        officiate descent molls anim id est labours.
      </Typography>
    </MainCard>
  );
};

export default SamplePage;
