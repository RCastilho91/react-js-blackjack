import React, { Component } from 'react';
import Card from './Card.js';

class CardDeck extends Component {

    constructor(props){
        super(props);

        this.state ={
            cards: [],
        }
    }


    drawCard() {
        return Card();
    }

    render(){
        return(
            <div className="card-deck">
                { this.state.cards.length }
            </div>
        )
    }
}

export default CardDeck