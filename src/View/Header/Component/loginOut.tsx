import React, { VFC } from 'react';
import IconButton from '@mui/material/IconButton';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

import { User } from '../../../Other/Model/user';

type LoginOutProps = {
  user: User | null;
  isLogined: boolean;
  handleMenu: (e: React.MouseEvent<HTMLElement>) => void;
  anchorEl: HTMLElement | null;
  menuOpen: boolean;
  handleClose: () => void;
  signOut: () => void;
  loginClick: () => void;
};

const LoginOut: VFC<LoginOutProps> = (props: LoginOutProps) => {
  const {
    user = null,
    isLogined = false,
    handleMenu = () => undefined,
    anchorEl = null,
    menuOpen = false,
    handleClose = () => undefined,
    signOut = () => undefined,
    loginClick = () => undefined
  } = props;
  return (
    <>
      <IconButton
        aria-label='account of current user'
        aria-controls='menu-appbar'
        aria-haspopup='true'
        onClick={handleMenu}
        color='inherit'
      >
        {user && user.photoUrl && isLogined ? (
          <Avatar src={user.photoUrl} />
        ) : (
          <AccountCircle />
        )}
      </IconButton>
      <Menu
        id='account-appbar'
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right'
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right'
        }}
        open={menuOpen}
        onClose={handleClose}
      >
        {isLogined ? (
          <MenuItem onClick={signOut}>ログアウト</MenuItem>
        ) : (
          <MenuItem onClick={loginClick}>ログイン</MenuItem>
        )}
      </Menu>
    </>
  );
};

export default LoginOut;
