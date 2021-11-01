import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Header from './View/Header/Component/main';

import { routes, RouteProps } from './Other/Route/route';

function App() {
  return (
    <>
      <Header />
      <Switch>
        {routes.map((config: RouteProps) => (
          <Route key={`route_${config.path}`} {...config} />
        ))}
      </Switch>
    </>
  );
}

export default App;
