import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Vote from './Vote';
import Rank from './Rank';

class Router extends React.Component {
    render() {
        return (
            <Switch>
                <Route
                    exact path='/'
                    component={Vote}
                />
                <Route
                    path='/rank'
                    component={Rank}
                />
            </Switch>
        );
    };
}

export default Router;