import React, { Component } from 'react';
import { PlayerHand, DealerHand } from './Hands';
import { PlayerScore, DealerScore } from './Scoring';
var createCardDeck = require('./CardDeck').cardDeckCreator;
var cardToDealer = require('./Hands').DealerHand.dealDealerHand;
var cardToPlayer = require('./Hands').PlayerHand.dealPlayerHand;
var playerStarts = require('./Scoring').PlayerScore.playerStarts;
var playerScore = require('./Scoring').PlayerScore.state.playerScore;
var dealerStarts = require('./Scoring').DealerScore.dealerStarts;
var dealerScore = require('./Scoring').DealerScore.state.dealerScore;


class NewGame extends Component {

    handleNewGame() {
        createCardDeck();
        
        playerStarts();
        dealerStarts();

        cardToPlayer();
        cardToPlayer();
        cardToDealer();
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
        cardToPlayer();
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
        alert( `Player score: ${ playerScore }` )
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