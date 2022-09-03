import React, {Component} from "react";

class A extends Component{

    constructor(props) {
        super(props);

        this.state={
            id: props.id,
            name: props.name
        }
    };

    render(){

        return(
            <h1>Receiving params: {this.state.id}</h1>
        );
    }
}
export default A;