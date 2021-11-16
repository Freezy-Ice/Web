import React from 'react';
import { Redirect, Switch } from 'react-router-dom';
import Home from './Pages/Home';
import Layout from './Components/Layout/Layout';
import Login from './Components/Login';
import { RouterPathEnum } from './Helpers/enums';
import Error404 from './Pages/Error404';
import Registration from './Components/Registration';

function Router() {
    return (
        <Switch>
            <Layout exact path={RouterPathEnum.HOME} component={Home} />
            <Layout exact path={RouterPathEnum.REGISTRATION} component={Registration} />
            <Layout exact path={RouterPathEnum.LOGIN} component={Login} />
            <Layout exact={false} path={RouterPathEnum.Error404} component={Error404} />
            <Redirect to={RouterPathEnum.Error404} />
        </Switch>
    );
}

export default Router;
