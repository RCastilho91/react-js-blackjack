import React, { Component } from 'react';
import CardDeck from './CardDeck';
import { PlayerHand, DealerHand } from './Hands';


class NewGame extends Component {

    handleNewGame() {
        CardDeck().cardDeckCreator();
        PlayerHand().dealPlayerCard();
        PlayerHand().dealPlayerCard();
        DealerHand().dealDealerCard();
    }

    render() {
        return(
            <button className="control-button" onClick={ this.handleNewGame }>
                New Game
            </button>
        );
    }
}

class HitMe extends Component {
    
    handleHitMe() {
        PlayerHand().dealPlayerCard();
    }
    
    render() {
        return(
            <button className="control-button" onClick={ this.handleHitMe }>
                Hit me
            </button>
        );
    }
}

class Stand extends Component {

    handleStand() {

    }

    render() {
        return(
            <button className="control-button" onClick={ this.handleStand }>
                Stand
            </button>
        );
    }
}

export {
    NewGame,
    HitMe,
    Stand
}