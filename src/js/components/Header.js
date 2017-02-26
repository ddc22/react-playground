import React from "react";


export default class Header extends React.Component {
    constructor(){
        super();
        this.name="The Header";
    }

    handleChange(e){
        console.log("DEBUG REACT");
        //this.props.changeThisName(e.target.value);
    }
    render(){
        console.log(this.props);
        return(
            <div>
                <h1>The Header! </h1>
                <input onChange={this.handleChange.bind(this)} />
            </div>
        );
    }
}
