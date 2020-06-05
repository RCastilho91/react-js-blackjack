var cardSuits = ['♦','♣','♥','♠'];
var cardNumericalValues = ["2", "3", "4", "5", "6", "7", "8", "9", "10"];
var cardNominalValues = ["J", "Q", "K", "A"];

export function cardDeckCreator() {

    /* creating counter variables */
    var x = 0;
    var y = 0;

    /* creating an array as a deck of cards */
    var cardDeck = Array();

    /* for numeric values, we'll loop through the list
    Game Card value will equal the card's identity, being parsed as an integer
    Each game card is copied 4 times, once for each card suit */

    /* first loop for each card value */
    for (x = 0; x < cardNumericalValues.length; x++) {
        /* second loop for building one for each suit */
        for (y = 0; y < cardSuits.length; y++){
            /* creating a game card with a numerical value, card name and card suit */
            var gameCard = {
                            Value: parseInt(cardNumericalValues[x]),
                            Card: cardNumericalValues[x],
                            Suit: cardSuits[y]
                        };
            /* adding it to the card deck */
            cardDeck.push(gameCard);
        }
    }

    /* resetting counters and re-running process with nominal values */

    for (x = 0; x < cardNominalValues.length; x++) {

        for (y = 0; y < cardSuits.length; y++) {

            /* conditioning the Ace */
            if(cardNominalValues[x] == "A"){
                gameCard = {
                    Value: 11,
                    Card: cardNominalValues[x],
                    Suit: cardSuits[y]
                }
            } else {
                gameCard = {
                    Value: 10,
                    Card: cardNominalValues[x],
                    Suit: cardSuits[y]
                }
            }

            cardDeck.push(gameCard);

        }
    }

    console.log(cardDeck);
}

export function hit(){
    const randomCard = cardDeck[Math.floor(Math.random() * cardDeck.length)];
    cardDeck.pop(randomCard);
    this.playerScore += randomCard.Value;

    if(this.playerScore > 21){
        this.gameOngoing = false;
        console.log("Bust!")
    } else {
        return(
            renderCard(randomCard.Card, randomCard.Suit)
        );
    }
}

export function stand(){

}


export function dealtoDealer(){

}

export function dealtoPlayer(){

}

const renderCard = ({ number, suit }) => {
    const cardNumberSuit = ( number ) ? `${ number }${ suit }` : null;
    const cardColor = (suit === '♠' || suit === '♣') ? 'black-game-card' : 'red-game-card';

    return (
        <div className= { cardColor }>
          { cardNumberSuit }
        </div>
    );
};