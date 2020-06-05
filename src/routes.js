import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Game from './pages/index';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={ Game } />
            </Switch>
        </BrowserRouter>
    );
}