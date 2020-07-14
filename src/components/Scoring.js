import React, { Component } from 'react';

class PlayerScore extends Component {
    constructor(props){
        super(props);

        this.state = {
            playerScore: 0
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
            dealerScore: 0
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