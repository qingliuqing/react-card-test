import React from 'react';
import ReactDOM from 'react-dom';
import FastClick from 'fastclick';
import './common/css/base.css';
import './index.css';
import CardContainer from './container/card/card.jsx';
import CardListContainer from './container/cardList/cardList.jsx';

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

// FastClick.attach(document.body);

ReactDOM.render(
        <Router>
            <Switch>
                <Route path="/card/:id" component={CardContainer} />
                <Route path="/card" component={CardContainer} />
                <Route path="/cardList" component={CardListContainer}/>
            </Switch>
        </Router> 
    ,
    document.getElementById('root')
);
