import React from 'react';
import { Redirect, Switch } from 'react-router-dom';
import Layout from './Components/Layout/Layout';
import { RouterPathEnum } from './Helpers/enums';
import Error404 from './Pages/Error404';

function Router() {
  return (
    <Switch>
      <Layout
        exact={false}
        path={RouterPathEnum.Error404}
        component={Error404}
      />
      <Redirect to={RouterPathEnum.Error404} />
    </Switch>
  );
}

export default Router;
