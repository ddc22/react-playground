import React from "react";
import ReactDOM from "react-dom";
import Bootstrap from "bootstrap.native";

import {Router, Route, IndexRoute, hashHistory} from "react-router";

import Archived from "./pages/Archived";
import Featured from "./pages/Featured";
import Layout from "./pages/Layout";
import Settings from "./pages/Settings";



const app = document.getElementById('app');

ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/" component={Layout}>
            <Route path="archived/:article" component={Archived}></Route>
            <Route path="featured" component={Featured}></Route>
            <Route path="settings" component={Settings}></Route>
        </Route>
    </Router>
, app);
