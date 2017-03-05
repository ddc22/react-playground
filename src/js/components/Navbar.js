import React from "react";
import {Link} from "react-router";

export default class Navbar extends React.Component{
    
    render(){
        const {location} = this.props;
        return(
        <nav class="navbar navbar-default">
            <div class="container-fluid">
                <div class="navbar-header">
                    <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                        <span class="sr-only">Toggle navigation</span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                    </button>
                    <a class="navbar-brand" href="#">Brandix</a>
                </div>
                <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul class="nav navbar-nav">
                    <li><Link to="archived/now">Archived</Link></li>
                    <li><Link to="featured">Featured</Link></li>
                    <li><Link to="settings">Settings</Link></li>
                </ul>
                </div>
            </div>
        </nav>
        )
    }
}