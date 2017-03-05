import React from "react";
import { Link } from "react-router";
import Navbar from "../components/Navbar";
export default class Layout extends React.Component {
    navigate(){
        var {router} = this.props;
        console.log(router.push("/featured"));
    }

    render(){
        return(
            <div>
                <Navbar></Navbar>
                <h4>Layout page</h4>
                <Link class="btn btn-success" to="archived/test" activeClassName="active">archived</Link>
                <Link to="settings" activeClassName="active">
                    <button class="btn btn-default" >settings</button>  
                </Link>
                <button onClick={this.navigate.bind(this)} class="btn btn-danger">featured</button>  

                
                {this.props.children}
            </div>
        );
    }
}
