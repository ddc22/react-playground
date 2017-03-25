import React from "react";

export default class Featured extends React.Component {

    render(){
        console.log("OBJECT FROM FEATURED PROPS:");
        console.log(this.props);
        return(
            <div>
                <h4>Featured page</h4>
            </div>
        );
    }
}
