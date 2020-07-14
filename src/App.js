import React from 'react';
import './App.css';
import { PlayerHand, DealerHand } from './components/Hands';
import { NewGame, HitMe, Stand } from './components/Buttons';
import CardDeck from './components/CardDeck';

export default function App() {
  return(
    <div className="app-container">
      <div className="dealer-area">
        <DealerHand /><p/>
        <CardDeck />
      </div>
      <div className="player-area">
          <PlayerHand />
      </div>
      <div className="game-controls">
        <NewGame />
        <HitMe />
        <Stand />
      </div>
    </div>
  );
}