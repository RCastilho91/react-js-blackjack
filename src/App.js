import React, { Component, useState } from 'react';
import './App.css';

const dealer = "dealer";
const player = "player";
const cardSuits = ['♦','♣','♥','♠'];
const cardNumericalValues = ["2", "3", "4", "5", "6", "7", "8", "9", "10"];
const cardNominalValues = ["J", "Q", "K", "A"];

var cardDeck = [];
var dealerHand = [];
var playerHand = [];
var gameMessage = "";

function App() {

  var [ dealerScore, setDealerScore ] = useState(0);
  var [ playerScore, setPlayerScore ] = useState(0);

  function cardDeckCreator() {

    /* creating counter variables */
    var x = 0;
    var y = 0;

    /* for numeric values, we'll loop through the list
    Game Card value will equal the card's identity, being parsed as an integer
    Each game card is copied 4 times, once for each card suit */

    /* first loop for each card value */
    for (x = 0; x < cardNumericalValues.length; x++) {
        /* second loop for building one for each suit */
        for (y = 0; y < cardSuits.length; y++){
            /* creating a game card with a numerical value, card name and card suit */
            var gameCard = {
                            Card: cardNumericalValues[x],
                            Suit: cardSuits[y],
                            Value: parseInt(cardNumericalValues[x]),
                            Display: `${ cardNumericalValues[x] }${ cardSuits[y] }`,
                            Hidden: true
                        };
            /* adding it to the card deck */
            cardDeck.push(gameCard);
        }
    }

    /* resetting counters and re-running process with nominal values */

    for (x = 0; x < cardNominalValues.length; x++) {

        for (y = 0; y < cardSuits.length; y++) {

            /* conditioning the Ace */
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

            cardDeck.push(gameCard);

        }
    }
    console.log("Deck of cards created!");
    console.log(" ");
    console.log(cardDeck);
  }
  class StandButton extends Component {
    render() {
      return(
        <button className="control-button" onClick={ stand }>Stand</button>
      )
    }
  }

  class HitButton extends Component {
    render() {
      return(
        <button className="control-button" onClick={ () => hit(player) }>Hit</button>
      )
    }
  }

  class NewGameButton extends Component {
    render() {
      return(
        <button className="control-button" onClick={ gameStarter }>New game</button>
      )
    }
  }

  function dealerScoring(value){
    setDealerScore(prevDealerScore => prevDealerScore + value);
    dealerScore += value;
  }

  function playerScoring(value){
    setPlayerScore(prevPlayerScore => prevPlayerScore + value);
    playerScore += value;
  }

  function gameStarter(){
    setPlayerScore(0);
    setDealerScore(0);

    playerScore = 0;
    dealerScore = 0;

    gameMessage = "";
    playerHand.splice(0, playerHand.length);
    dealerHand.splice(0, dealerHand.length);
    cardDeck.splice(0, cardDeck.length);

    cardDeckCreator();
    hit(player);
    hit(dealer);
    hit(player);
  }

  function hit(who){
    const cardIndex = Math.floor(Math.random() * cardDeck.length);
    const randomCard = cardDeck[cardIndex]
    // taking the card out of the deck
    cardDeck.splice(cardIndex, 1);

    console.log(cardDeck[cardIndex]);

    if(who === "dealer"){
      dealerScoring(randomCard.Value);
      dealerHand.push(randomCard.Display);
      gameChecker();
    } else {
      playerScoring(randomCard.Value);
      playerHand.push(randomCard.Display);
      gameChecker();
    }
  }

function gameChecker(){
    if(playerScore > 21){
      gameMessage = "You are bust! House wins!";
      console.log(dealerScore);
      console.log(playerScore);
    }

    if(dealerScore > 21){
      gameMessage = "House is bust! You win!";
      console.log(dealerScore);
      console.log(playerScore);
    }
}

function endGame(){
  if(gameMessage === ""){
    if(playerScore === dealerScore){
      gameMessage = "Game is a tie!";
      console.log(dealerScore);
      console.log(playerScore);
    }
    if(playerScore > dealerScore){
      gameMessage = "You have a better hand! You win!";
      console.log(dealerScore);
      console.log(playerScore);
    }

    if(dealerScore > playerScore) {
      gameMessage = "Dealer has a better hand! House wins!"
      console.log(dealerScore);
      console.log(playerScore);
    }
  }
}

  function stand(){
    while(dealerScore < 17){
      hit(dealer);
    }

    endGame();
  }

  return (
    <div className="container">

      <div className="header">
        <span className="game-title">21!</span>
        <span className="game-sub-title">A free Blackjack web application</span>
      </div>

      <div className="game-area">
        <div className="dealer-area">
          <h1 className="dealer-score-tag">Dealer: { dealerScore }</h1>
          <h2 className="dealer-score">{ dealerHand }</h2>
        </div>

        <div className="player-area">
          <h1 className="player-score-tag">Player: { playerScore }</h1>
          <h2 className="player-score">{ playerHand }</h2>
        </div>

        <h1> { gameMessage } </h1>
        <div className="game-controls">
          <StandButton />
          <HitButton />
          <NewGameButton />
        </div>
      </div>
    </div>
  );
}

export default App;
