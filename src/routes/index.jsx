import React from 'react';
import { Switch, HashRouter as Router } from 'react-router-dom';

function RoutesManager(props) {
    return (
       
            <Router>
                <Switch>
                    <Route path="/" component/>
                </Switch>
            </Router>
    )
}

export default RoutesManager;
