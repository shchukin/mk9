import React from 'react';
import { Notation, WarriorsData } from 'src/types';


interface MKContext {
  showSecondPlayer: boolean;
  playerOneNotation: Notation;
  playerTwoNotation: Notation;
  warriorsData: WarriorsData;

  changeShowSecondPlayer: (value: boolean) => void;
  changePlayerOneNotation: (value: Notation) => void;
  changePlayerTwoNotation: (value: Notation) => void;
  setWarriorsData: (data: WarriorsData) => void;
}

class MKContextClass implements MKContext {
  showSecondPlayer = false;
  playerOneNotation = Notation.Playstation;
  playerTwoNotation = Notation.Xbox;
  warriorsData = [] as WarriorsData;

  changeShowSecondPlayer(value: boolean) {
    this.showSecondPlayer = value;
  }

  changePlayerOneNotation(value: Notation) {
    this.playerOneNotation = value;
  }

  changePlayerTwoNotation(value: Notation) {
    this.playerTwoNotation = value;
  }

  setWarriorsData(data: WarriorsData) {
    this.warriorsData = data;
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
