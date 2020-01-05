import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Vote from './Vote';
import Rank from './Rank';

class Router extends React.Component {
    render() {
        return (
            <Switch>
                <Route
                    path='/'
                    render={() => {
                        return <Vote/>;
                    }}
                />
                <Route
                    path='/rank'
                    render={() => {
                        return <Rank/>;
                    }}
                />
            </Switch>
        );
    };
}

export default Router;