import React from "react";
import Header from "./Footer";
import Footer from "./Header";

export default class Layout extends React.Component {
    constructor(){
        super();
        this.state={name:"Dehan"};//Set initial state
    }

    changeName(name){
        console.log("CHANGING NAME");
        this.setState({name});
    }


    render(){
        const title="The Title const";
        return(
            <div>
                <Header title={title}/>
                <h4>It works yay!</h4>
                <Footer/>
            </div>
        );
    }
}
