import React from "react";

export default class Archived extends React.Component {

    render(){
        console.log(this.props);
        const { params } = this.props;
        const { query } = this.props.location;
        const { article } = params;
        return(
            <div>
                <h4>Archived page PARAMS</h4>
                <h5>{article}</h5>
                <h5>{JSON.stringify(params)}</h5>
                <h5>{JSON.stringify(query)}</h5>
                
            </div>
        );
    }
}
