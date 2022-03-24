import React from 'react';
import "../App.css";

class Avatar extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <img src={this.props.image}></img>
        );
    }
}


export default (Avatar);