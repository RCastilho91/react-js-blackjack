import React, { Component } from 'react';

export default class CardDeck extends Component {
    constructor(props){
        super(props);

        this.state = {
            cardDeck: [],
        }
    }

    cardDeckCreator() {
        var x = 0;
        var y = 0;
        const cardSuits = ['♦','♣','♥','♠'];
        const cardNumericalValues = ["2", "3", "4", "5", "6", "7", "8", "9", "10"];
        const cardNominalValues = ["J", "Q", "K", "A"];

        for (x = 0; x < cardNumericalValues.length; x++) {
            for (y = 0; y < cardSuits.length; y++){
                var gameCard = {
                                Card: cardNumericalValues[x],
                                Suit: cardSuits[y],
                                Value: parseInt(cardNumericalValues[x]),
                                Display: `${ cardNumericalValues[x] }${ cardSuits[y] }`,
                                Hidden: true
                            };
                this.state.push(gameCard);
            }
        }
    
        for (x = 0; x < cardNominalValues.length; x++) {
    
            for (y = 0; y < cardSuits.length; y++) {
    
                if(cardNominalValues[x] === "A"){
                    gameCard = {
                        Card: cardNominalValues[x],
                        Suit: cardSuits[y],
                        Value: 11,
                        Display: `${ cardNominalValues[x] }${ cardSuits[y] }`,
                        Hidden: true
                    }
                } else {
                    gameCard = {
                        Card: cardNominalValues[x],
                        Suit: cardSuits[y],
                        Value: 10,
                        Display: `${ cardNominalValues[x] }${ cardSuits[y] }`,
                        Hidden: true
                    }
                }
    
                this.state.cardDeck.push(gameCard);
            }
        }
      }

      componentDidMount() {
          this.cardDeckCreator();
      }

      dealCard(){
        const cardIndex = Math.floor( Math.random() * cardDeck.length );
        const randomCard = this.state.cardDeck[ cardIndex ];

        this.state.cardDeck.splice( cardIndex, 1 );
        
        return randomCard
      }

      render(){
        return(
            <div className="card-stack">
                { this.state.cardDeck.length }
            </div>
        );
        }
}