import React, { VFC } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { styled } from '@mui/material/styles';
import LoginOut from '../Container/loginOut';

const CustomAppBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: theme.palette.color2.main
}));

const Header: VFC = () => {
  return (
    <CustomAppBar position='static'>
      <Toolbar>
        <LoginOut />
      </Toolbar>
    </CustomAppBar>
  );
};

export default Header;
