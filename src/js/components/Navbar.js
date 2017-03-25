import React from "react";
import {Link} from "react-router";

export default class Navbar extends React.Component{
    
    render(){
        console.log("OBJECT FROM NAV PROPS:");
        console.log(this.props);
        const {location} = this.props;


        return(
        <nav class="navbar navbar-default">
                <div class="navbar-header">
                    <a class="navbar-brand" href="#"><img src="img/Mas_Holdings_Logo.png"></img></a>
                </div>
                <ul class="nav navbar-nav">
                    <li><Link to="archived/now">Archived</Link></li>
                    <li><Link to="featured">Featured</Link></li>
                    <li><Link to="settings">Settings</Link></li>
                </ul>
                <div class="nav navbar-nav navbar-right header-top-right">
                    <ul class="nav navbar-nav">
                        <li><a href="#"><span class="glyphicon glyphicon-user"></span> Sign Up</a></li>
                        <li><a href="#"><span class="glyphicon glyphicon-log-in"></span> Login</a></li>
                    </ul>
                </div>

        </nav>
        )
    }
}




