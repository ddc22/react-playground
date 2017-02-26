import React from "react";


export default class Header extends React.Component {
    constructor(){
        super();
        this.name="The Header";
    }

    handleChange(e){
        console.log("DEBUG REACT");
        const title = e.target.value;
        this.props.changeTitle(title);
    }
    render(){
        console.log(this.props);
        return(
            <div>
                <h1>The Header! </h1>
                <input value={this.props.title} onChange={this.handleChange.bind(this)} />
            </div>
        );
    }
}
