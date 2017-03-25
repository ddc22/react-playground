import React from "react";
import { Link } from "react-router";
import Navbar from "../components/Navbar";
export default class Layout extends React.Component {
    navigate(){
        var {router} = this.props;
        //PRogrammatically go to a route
        router.push("/featured")
        //console.log(router.push("/featured"));
    }

    render(){
        console.log("OBJECT FROM LAYOUT PROPS:");
        console.log(this.props);
        const containerStyle ={
            marginTop:"40px",
            marginLeft:"30px"
        }
        return(
            <div>
                <Navbar></Navbar>
                <div style={containerStyle}>
                    <h4>Layout page</h4>
                    <Link class="btn btn-success" to="archived/test" activeClassName="active">archived</Link>
                    <Link to="settings" activeClassName="active">
                        <button class="btn btn-default" >settings</button>  
                    </Link>
                    <button onClick={this.navigate.bind(this)} class="btn btn-danger">featured</button>  

                    
                    {this.props.children}
                </div>
            </div>
            
        );
    }
}
