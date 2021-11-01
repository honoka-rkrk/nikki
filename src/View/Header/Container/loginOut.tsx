import React, { VFC, useContext, useState, useEffect } from 'react';
import { useHistory } from 'react-router';
import { useSelector } from 'react-redux';

import { UserContext, FirebaseContext } from '../../../Other/Context/contexts';
import CompLoginOut from '../Component/loginOut';
import { RootState } from '../../../Other/Store/rootReducer';

const LoginOut: VFC = () => {
  const { auth } = useContext(FirebaseContext);
  const { user } = useContext(UserContext);
  const [isLogined, setIsLogined] = useState<boolean>(false);
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const history = useHistory();
  const menuOpen = Boolean(anchorEl);
  const signOut =
    auth && user
      ? () => {
          setAnchorEl(null);
          auth.signOut();
          history.replace('/home');
        }
      : () => undefined;

  const handleMenu = (e: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(anchorEl ? null : e.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const loginClick = () => {
    setAnchorEl(null);
    history.push('/login');
  };

  useEffect(() => {
    if (user) {
      setIsLogined(true);
    } else {
      setIsLogined(false);
    }
  }, [user]);
  return (
    <CompLoginOut
      user={user}
      isLogined={isLogined}
      handleMenu={handleMenu}
      anchorEl={anchorEl}
      menuOpen={menuOpen}
      handleClose={handleClose}
      signOut={signOut}
      loginClick={loginClick}
    />
  );
};

export default LoginOut;
