import React from "react";
import { Link } from "react-router";
export default class Layout extends React.Component {
    navigate(){
        console.log(this.props.router.push("/featured"));
    }

    render(){
        return(
            <div>
                <h4>Layout page</h4>
                <Link class="btn btn-success" to="archived">archived</Link>
                <Link to="settings">
                    <button class="btn btn-default" >settings</button>  
                </Link>
                <button onClick={this.navigate.bind(this)} class="btn btn-danger">featured</button>  

                
                {this.props.children}
            </div>
        );
    }
}
