import React, { Component } from 'react';

class PlayerScore extends Component {
    constructor(props){
        super(props);

        this.state = {
            playerScore: 0,
            playerStatus: 'play'
        }
    }

    playerBust(){
        this.setState = {
            playerStatus: 'bust'
        }
    }

    playerStands() {
        this.setState = {
            playerStatus: 'stand'
        }
    }

    render() {
        return(
            <div className="score">
                { this.state.playerScore }
            </div>
        );
    }
}

class DealerScore extends Component{
    constructor(props){
        super(props);
        this.state = {
            dealerScore: 0,
            dealerStatus: 'play'
        }
    }

    dealerBust() {
        this.setState = {
            dealerStatus: 'bust'
        }
    }

    dealerStands() {
        this.setState = {
            dealerStatus: 'stand'
        }
    }

    render() {
        return(
            <div className="score">
                { this.state.dealerScore }
            </div>
        );
    }
}

export {
    PlayerScore,
    DealerScore
}