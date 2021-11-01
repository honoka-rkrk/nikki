import React from 'react';
import Home from '../../View/Body/Home/Component/main';
import Login from '../../View/Body/Login/Component/main';

export interface RouteProps {
  path: string;
  exact: boolean | undefined;
  component: React.FC;
}

export const routes: RouteProps[] = [
  { path: '/home', exact: undefined, component: Home },
  { path: '/login', exact: undefined, component: Login }
];
