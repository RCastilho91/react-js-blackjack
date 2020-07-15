import React, { Component } from 'react';
import CardDeck from './CardDeck';
import { PlayerHand, DealerHand } from './Hands';
import { PlayerScore, DealerScore } from './Scoring';

class NewGame extends Component {

    handleNewGame() {
        new CardDeck().cardDeckCreator();
        new PlayerHand().dealPlayerCard();
        new PlayerHand().dealPlayerCard();
        new DealerHand().dealDealerCard();
    }

    render() {
        return(
            <button className="control-button" onClick={ this.handleNewGame }>
                New Game
            </button>
        )
    }

}

class HitMe extends Component {
    
    handleHitMe() {
        new PlayerHand().dealPlayerCard();
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
        alert( `Player score: ${ PlayerScore.state.playerScore }` )
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