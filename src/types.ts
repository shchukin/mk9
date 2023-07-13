export enum Notation {
  Playstation = 'playstation',
  Xbox = 'xbox',
  Classic = 'classic',
}

export enum KeyVariant {
  Backward = 'backward',
  Up = 'up',
  Forward = 'forward',
  Down = 'down',
  Plus = 'plus',
  Comma = 'comma',
  Fp = 'fp',
  Bp = 'bp',
  Fk = 'fk',
  Bk = 'bk',
  Throw = 'throw',
  Tag = 'tag',
  Stance = 'stance',
  Block = 'block',
}

export type MoveItem = {
  name: string;
  sequence: KeyVariant[];
  comment?: string;
}

export type WarriorDTO = {
  warriorid: number;
  warriorname: string;
}

export type WarriorEntity = {
  id: number;
  name: string;
}

export type GroupDTO = {
  groupid: number;
  sort: number;
  grouptitle: string;
  sequence: string;
}

export type GroupEntity = {
  id: number;
  sort: number;
  title: string;
  sequence?: KeyVariant[];
}

export type MoveDTO = {
  moveid: number;
  warriorid: number;
  groupid: number;
  movename: string;
  movesequence: string;
  comment: string;
}

export type MoveEntity = {
  id: number;
  warriorId: number;
  groupId: number;
  moveName: string;
  moveSequence: KeyVariant[];
  comment?: string;
}

export type WarriorsData = {
  id: number;
  name: string;
  groups: {
    id: number;
    title: string;
    sequence?: KeyVariant[];
    moves: {
      id: number;
      name: string;
      sequence: KeyVariant[];
      comment?: string;
    }[];
  }[];
}[]
