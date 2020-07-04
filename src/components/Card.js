import React from 'react';

export default function Card( name, suit ){
    return(
        <div className="game-card">
            { name } { suit }
        </div>
    );
}