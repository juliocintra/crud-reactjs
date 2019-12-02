import React from 'react';

import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Home from './components/home/Home';
import ClienteLista from './components/cliente/cliente-lista';
import Header from './components/Header/Header';
import Breadcrumb from './components/Breadcrumb/Breadcrumb';

const Routes = () => (
    <BrowserRouter>
        <Switch>
            {/* <Route exact path="/" component={Header}></Route> */}
            <Route exact path="/" component={Home}></Route>
            <Route exact path="/header" component={Header}></Route>
            <Route exact path="/bread" component={Breadcrumb}></Route>
            <Route exact path="/cliente" component={ClienteLista}></Route>
        </Switch>
    </BrowserRouter>
)

export default Routes;