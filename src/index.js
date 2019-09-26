import React from 'react';
import ReactDOM from 'react-dom';
import './common/css/base.css';
import './index.css';
import CardContainer from './container/card/card';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

ReactDOM.render(
        <Router>
            <Route path="/card" component={CardContainer} />
        </Router> 
    ,
    document.getElementById('root')
);
