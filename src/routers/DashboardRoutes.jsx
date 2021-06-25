import React from 'react';
import { Redirect, Route, Switch } from 'react-router';

import NavBar from '../components/NavBar';
import Home from '../pages/Home';
import Profile from '../pages/dev/Profile';

const DashBoardRoutes = (props) => {

    return (
        <>
            <NavBar />
            <div>
                <Switch>
                    <Route exact path="/profile" component={Profile} />
                    <Redirect to="/home" />
                </Switch>
            </div>
        </>
    )
}

export default DashBoardRoutes;
