import { DealerScore, PlayerScore } from './Scoring';

var dealer = DealerScore.state.dealerScore;
var player = PlayerScore.state.playerScore;
var dealerStatus = DealerScore.state.dealerStatus;
var playerStatus = PlayerScore.state.playerStatus;

export default function gameChecker(){

    var outcome =  null;

    if( player > 21 ){
        outcome = "Player's bust, house wins";
        PlayerScore().playerBust();
    }

    if( dealer > 21 ){
        outcome = "House is bust, player wins";
        DealerScore().dealerBust();
    }

    if( playerStatus & dealerStatus == 'stand' ) {
        if( player > dealer ){
            outcome = "Player wins";
        } else if( dealer > player ){
            outcome = "Dealer wins"
        } else {
            outcome = "Game is a tie"
        }
    }

    return outcome
}