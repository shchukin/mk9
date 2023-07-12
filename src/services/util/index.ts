import { KeyVariant } from 'src/types';

export class Util {
  static convertStringToKeyVariants(value: string): KeyVariant[] {
    const parts = value.substring(1, value.length - 1).split('][');
    return parts as KeyVariant[];
  }
}