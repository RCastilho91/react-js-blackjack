var cardSuits = ['♦','♣','♥','♠'];
var cardNumericalValues = ["2", "3", "4", "5", "6", "7", "8", "9", "10"];
var cardNominalValues = ["J", "Q", "K", "A"];

class Blackjack {
    constructor() {
        this.cardDeck = [];
        this.dealerScore = 0;
        this.dealerHand = [];
        this.playerScore = 0;
        this.playerHand = [];
        this.ongoing = true;
    }
}

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
                            Display: `${ cardNumericalValues[x] }${ cardSuits[y] }`
                        };
            /* adding it to the card deck */
            newGame.cardDeck.push(gameCard);
        }
    }

    /* resetting counters and re-running process with nominal values */

    for (x = 0; x < cardNominalValues.length; x++) {

        for (y = 0; y < cardSuits.length; y++) {

            /* conditioning the Ace */
            if(cardNominalValues[x] == "A"){
                gameCard = {
                    Card: cardNominalValues[x],
                    Suit: cardSuits[y],
                    Value: 11,
                    Display: `${ cardNominalValues[x] }${ cardSuits[y] }`
                }
            } else {
                gameCard = {
                    Card: cardNominalValues[x],
                    Suit: cardSuits[y],
                    Value: 10,
                    Display: `${ cardNominalValues[x] }${ cardSuits[y] }`
                }
            }

            newGame.cardDeck.push(gameCard);

        }
    }

    console.log("Deck of cards created!");
    console.log(" ");
}

// creating a function for dealing cards, regardless of actor
function hit(who){
    console.log(`Dealing a card to ${ who }`);
    // getting a low integer number up to card deck maximum
    const cardIndex = Math.floor(Math.random() * newGame.cardDeck.length);
    const randomCard = newGame.cardDeck[cardIndex]
    // taking the card out of the deck
    newGame.cardDeck.splice(cardIndex, 1);

    // dealing the card to the player
    if(who == 'player'){
        newGame.playerHand.push(`${randomCard.Card}${randomCard.Suit}`);
        newGame.playerScore += randomCard.Value;
        gameStatus();
        gameChecker();
    } else {
        newGame.dealerHand.push(`${randomCard.Card}${randomCard.Suit}`);
        newGame.dealerScore += randomCard.Value;
        gameStatus();
        gameChecker();
    }
}

// creating a function for when player stands
function stand(){
    while(newGame.dealerScore < 17){
        hit(dealer);
    }

    if(newGame.ongoing == true) {
        if(newGame.dealerScore > newGame.playerScore){
            console.log("House has a better hand. House wins!");
        } else if (newGame.playerScore > newGame.dealerScore){
            console.log("You have a better hand! You win!");
        } else {
            console.log("You and the house have equivalent hands. It's a tie!");
        }
    }
}

// creating a function to show the current game status
// for troubleshooting matters
function gameStatus(){
    console.log("Your hand: " + newGame.playerHand);
    console.log("Your score: " + newGame.playerScore);
    console.log("Dealer's hand: " + newGame.dealerHand);
    console.log("Dealer's score: " + newGame.dealerScore);
    console.log("")
}

// function for checking whether either the player or the dealer
// went bust
function gameChecker(){
    if(newGame.playerScore > 21){
        // checking if there are any aces causing the player to bust
        // should there be one, it'll have its value converted from 11 to 1
        aceChecker(player, newGame.playerHand, newGame.playerScore);

        if(newGame.playerScore > 21){
            console.log("You are bust! House wins!");
            newGame.ongoing = false;
        }
    }

    if(newGame.dealerScore > 21){
        console.log("House is bust! You win!");
        newGame.ongoing = false;
    }
}


// creating the function to check a hand for any aces causing a bust
// function will also recalculate the score based on the review
function aceChecker(who, hand, score){
    // creating a list of ace indexes
    // player may have up to four aces, 3 worth 1 point, 1 worth 11 points
    var acesInHand = [];

    for(var i = 0; i < hand.length; i++){
        // checks if card string identifies it as an Ace
        hand[i].startsWith("A") ? acesInHand.push(hand[i]) : null;
    }

    // looping list of aces as long as it's greater than 0
    if(acesInHand.length > 0){

        for(var i = 0; i < acesInHand.length; i++){
            // if player is a bust because of an ace, it'll be refactored to 1
            if(score > 21){
                console.log("Bust identified. Running score reduction.");
                score -= 10;
                acesInHand.splice(i, 1);
            }
        }
    }

    if(who == "player"){
        newGame.playerScore = score;
    } else {
        newGame.dealerScore = score;
    }
}

const player = "player";
const dealer = "dealer";

newGame = new Blackjack();
cardDeckCreator();

console.log(newGame.cardDeck);