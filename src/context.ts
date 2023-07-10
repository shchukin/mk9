import React from 'react';
import { Notation } from 'src/types';


interface MKContext {
  showSecondPlayer: boolean;
  playerOneNotation: Notation;
  playerTwoNotation: Notation;

  changeShowSecondPlayer: (value: boolean) => void;
  changePlayerOneNotation: (value: Notation) => void;
  changePlayerTwoNotation: (value: Notation) => void;
}

class MKContextClass implements MKContext {
  showSecondPlayer = false;
  playerOneNotation = Notation.Playstation;
  playerTwoNotation = Notation.Xbox;

  changeShowSecondPlayer(value: boolean) {
    this.showSecondPlayer = value;
  }

  changePlayerOneNotation(value: Notation) {
    this.playerOneNotation = value;
  }

  changePlayerTwoNotation(value: Notation) {
    this.playerTwoNotation = value;
  }
}

export const mkContextValue = new MKContextClass();

export const mkContext = React.createContext<MKContextClass>(mkContextValue);


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
