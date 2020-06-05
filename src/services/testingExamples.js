// testing how functional the ace procedure is
var indexOfAces = [48, 49, 50, 51, 47, 22];

for(var i = 0;i < indexOfAces.length;i++){

    console.log(`Inserting new card in player's hand \n`);

    var currentAce = newGame.cardDeck[indexOfAces[i]];
    newGame.playerHand.push(`${currentAce.Card}${currentAce.Suit}`);
    newGame.playerScore += currentAce.Value;

    console.log(`Current hand: ${ newGame.playerHand }`);
    console.log(`Score prior to ace checking: ${ newGame.playerScore }`);

    aceChecker(player, newGame.playerHand, newGame.playerScore);

    console.log(`Adjusted player score: ${ newGame.playerScore }`);
    console.log('');

}