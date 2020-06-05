import React from 'react';
import './styles.css';



export default function Game() {
    return(
        <div className="container">
            <div className="header">
                <h1>Blackjack</h1>
            </div>

            <div className="game-area">
                <nav className="game-options">
                    <ul>
                        <li><button className="general-control">Lights</button></li>
                        <li><button className="general-control">Help</button></li>
                    </ul>
                </nav>

                <div className="dealer-area">
                <h2>Dealer</h2>
                <h3>Current total: 10</h3>
                    <div className="card-pile">

                    </div>
                </div>

                <div className="player-area">
                    <h2>You</h2>
                    <h3>Current total: 21!</h3>

                <div className="player-controls">
                    <button className="game-control" value="newgame" onclick="newGame()">New game</button>
                    <button className="game-control" value="hit" onclick="hitMe()">Hit me</button>
                    <button className="game-control" value="stand" onclick="stand()">Stand</button>
                </div>
                </div>

            </div>
        </div>
    );
}