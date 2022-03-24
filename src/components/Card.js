import React from 'react';
import axios from 'axios';
import "../App.css";
import Avatar from './Avatar';
import Information from './Information';

class Card extends React.Component {
    constructor(props) {
        super(props);
        let user_axios;
        axios.get('https://randomuser.me/api/')
            .then((response) => {
                const utilisateurs = response.data.results[0];
                // On récupère les données reçues et on modifie le tableau dans l'état
                user_axios = { user: utilisateurs }
            });
        this.state = { user: user_axios };
    }

    componentDidMount() {
        axios.get('https://randomuser.me/api/')
            .then((response) => {
                const utilisateurs = response.data.results[0];
                // On récupère les données reçues et on modifie le tableau dans l'état
                this.setState({ user: utilisateurs })
            })
    }

    handleRefresh = (event) => {
        this.componentDidMount();
    }

    render() {
        if (this.state.user != undefined) {
            let user = this.state.user;
            return (
                <div className='box'>
                    <Avatar image={user.picture.large} />
                    <Information name={user.name} />
                    <button onClick={this.handleRefresh}>Rafraichir</button>
                </div>
            );
        }
        return (
            <div className='box'>
                
            </div>
        );
    }
}


export default (Card);