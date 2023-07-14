import React from 'react';

interface PlayerContext {
  playerNumber: number;
}

export class PlayerContextClass implements PlayerContext {
  playerNumber = 0;

  constructor(pNumber: number) {
    this.playerNumber = pNumber;
  }
}

export const playerOneContextValue = new PlayerContextClass(1);

export const playerContext = React.createContext<PlayerContextClass>(new PlayerContextClass(0));

export const playerTwoContextValue = new PlayerContextClass(2);
