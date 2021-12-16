import React from 'react';
import { Redirect, Switch } from 'react-router-dom';
import HomePage from './Pages/Home';
import Layout from './Components/Layout/Layout';
import Login from './Components/Login';
import { RouterPathEnum } from './Helpers/enums';
import Error404 from './Pages/Error404';
import Registration from './Components/Registration';
import ShopPage from './Pages/Shop';
import RestaurantRegistration from './Components/RestaurantRegistration';
import CompanyAccount from './Pages/CompanyAccount';
import { useAppDispatch, useAppSelector } from './Store';
import { tokenState } from './Store/selectors';
import LoginInterface from './Store/Interface/Auth/AuthInterface';
import { FetchLogin } from './Store/Reducer/Auth/action';
import CompanyShopDetails from './Components/CompanyShop/CompanyShopDetails';

function Router() {
    const token = useAppSelector(tokenState);

    const fetchToken = () => {
        // eslint-disable-next-line
        console.log('router');
    };

    return (
        <Switch>
            <Layout exact path={RouterPathEnum.COMPANYACCOUNT} component={CompanyAccount} />
            <Layout exact path={RouterPathEnum.COMPANYSHOPDETAILS} component={CompanyShopDetails} />
            <Layout exact path={RouterPathEnum.HOME} component={HomePage} />
            <Layout
                exact
                path={RouterPathEnum.RESTAURANTREGISTRATION}
                component={RestaurantRegistration}
            />
            <Layout exact path={RouterPathEnum.REGISTRATION} component={Registration} />
            <Layout exact path={RouterPathEnum.LOGIN} component={Login} login={() => fetchToken} />
            <Layout exact path={RouterPathEnum.SHOP} component={ShopPage} />
            <Layout exact={false} path={RouterPathEnum.Error404} component={Error404} />

            <Redirect to={RouterPathEnum.Error404} />
        </Switch>
    );
}

export default Router;
