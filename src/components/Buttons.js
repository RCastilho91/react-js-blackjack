import React, { Component } from 'react';
import CardDeck from './CardDeck';

class NewGame extends Component {
    render(){
        return(
            <button className="control-button">
            </button>
        );
    }
}

class HitMe extends Component {
    render(){
        return(
            <button className="control-button">
            </button>
        );
    }
}

class Stand extends Component {
    render(){
        return(
            <button className="control-button">
            </button>
        );
    }
}

export {
    NewGame,
    HitMe,
    Stand
}