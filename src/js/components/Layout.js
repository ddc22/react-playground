import React from "react";
import Header from "./Header";
import Footer from "./Footer";

export default class Layout extends React.Component {
    constructor(){
        super();
        this.state={
            title:"THE TITLE"
        };
    }

    changeTitle(title){
        console.log("CHANGING NAME");
        this.setState({title});
    }


    render(){
        return(
            <div>
            <Header changeTitle={this.changeTitle.bind(this)} title={this.state.title} />
                <h4>It works yay! {this.state.title}</h4>
                <Footer/>
            </div>
        );
    }
}
