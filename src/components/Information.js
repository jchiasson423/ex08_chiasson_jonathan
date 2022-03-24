import React from 'react';
import "../App.css";

class Information extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='box'>
                <h3>Bonjour, je m'appelle {this.props.name.first} {this.props.name.last}</h3>
            </div>
        );
    }
}


export default (Information);