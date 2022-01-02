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
import { tokenState, userState } from './Store/selectors';
import CompanyShop from './Pages/CompanyShop';
import { FetchUserInfos } from './Store/Reducer/Auth/action';

export function HandleRouts() {
    const userInfo = useAppSelector(userState);
    console.log('abcd', userInfo);
    const defaultRoutes = (
        <div>
            <Layout exact path={RouterPathEnum.HOME} component={HomePage} />
            <Layout exact path={RouterPathEnum.SHOP} component={ShopPage} />
        </div>
    );
    if (userInfo === null) {
        return (
            <div>
                {defaultRoutes}
                <Layout exact path={RouterPathEnum.REGISTRATION} component={Registration} />
                <Layout exact path={RouterPathEnum.LOGIN} component={Login} />
            </div>
        );
    }
    if (userInfo?.data.companyAccount) {
        return (
            <div>
                <Layout exact path={RouterPathEnum.COMPANYACCOUNT} component={CompanyAccount} />
                <Layout exact path={RouterPathEnum.COMPANYSHOP} component={CompanyShop} />
                <Layout
                    exact
                    path={RouterPathEnum.RESTAURANTREGISTRATION}
                    component={RestaurantRegistration}
                />
            </div>
        );
    }

    return defaultRoutes;
}

function Router() {
    const token = useAppSelector(tokenState);
    const userInfo = useAppSelector(userState);

    const dispatch = useAppDispatch();
    React.useEffect(() => {
        if (token !== null && userInfo == null) {
            FetchUserInfos(dispatch);
        }
    }, [token, dispatch]);

    return (
        <Switch>
            <Layout exact path={RouterPathEnum.COMPANYACCOUNT} component={CompanyAccount} />
            <Layout exact path={RouterPathEnum.COMPANYSHOP} component={CompanyShop} />
            <Layout exact path={RouterPathEnum.HOME} component={HomePage} />
            <Layout
                exact
                path={RouterPathEnum.RESTAURANTREGISTRATION}
                component={RestaurantRegistration}
            />
            <Layout exact path={RouterPathEnum.REGISTRATION} component={Registration} />
            <Layout exact path={RouterPathEnum.LOGIN} component={Login} />
            <Layout exact path={RouterPathEnum.SHOP} component={ShopPage} />
            <Layout exact={false} path={RouterPathEnum.Error404} component={Error404} />

            <Redirect to={RouterPathEnum.Error404} />
        </Switch>
    );
}

export default Router;
