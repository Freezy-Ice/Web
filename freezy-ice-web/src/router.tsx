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
import ProfilePage from './Pages/Profile';
import AdminPanel from './Pages/AdminPanel';
import AcceptingShops from './Components/AdminPanel/AcceptingShops';
import FlavorsList from './Components/AdminPanel/FlavorsList';
import CategoriesList from './Components/AdminPanel/CategoriesList';

function Router() {
    return (
        <Switch>
            <Layout exact path={RouterPathEnum.HOME} component={HomePage} />
            <Layout
                exact
                path={RouterPathEnum.RESTAURANTREGISTRATION}
                component={RestaurantRegistration}
            />
            <Layout exact path={RouterPathEnum.CATEGORIESLIST} component={CategoriesList} />
            <Layout exact path={RouterPathEnum.FLAVORSLIST} component={FlavorsList} />
            <Layout exact path={RouterPathEnum.ADMINPANEL} component={AdminPanel} />
            <Layout exact path={RouterPathEnum.ACCEPTINGSHOPS} component={AcceptingShops} />
            <Layout exact path={RouterPathEnum.REGISTRATION} component={Registration} />
            <Layout exact path={RouterPathEnum.LOGIN} component={Login} />
            <Layout exact path={RouterPathEnum.SHOP} component={ShopPage} />
            <Layout exact path={RouterPathEnum.PROFILE} component={ProfilePage} />
            <Layout exact={false} path={RouterPathEnum.Error404} component={Error404} />

            <Redirect to={RouterPathEnum.Error404} />
        </Switch>
    );
}

export default Router;
