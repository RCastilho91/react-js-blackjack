import React, { Component } from 'react';
import { dealCard } from './CardDeck';

class PlayerHand extends Component {
    constructor(props){
        super(props);
        this.state = {
            score: 0,
            hand: []
        }
    }

    dealPlayerCard() {
        var newHand = [ ...this.state.hand, dealCard ];
        this.setState = {
            hand: newHand
        }
    }

    renderHand() {
        return this.state.hand.map(( card ) => {
           return (
              <div className="card">
                  { card }
              </div>
           )
        })
     }

     render(){
         return(
             <div className="player-area">
                 { this.renderHand() }
             </div>
         )
     }
}