import React, { VFC } from 'react';

import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Home from '../Container/home';

const CustomBox = styled(Box)(({ theme }) => ({
  position: 'relative'
}));

const Main: VFC = () => {
  return (
    <CustomBox>
      <Home />
    </CustomBox>
  );
};

export default Main;
