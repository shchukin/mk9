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
  label: string;
  comment?: string;
  keyVariants: KeyVariant[];
}
