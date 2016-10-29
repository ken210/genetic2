import { BASE_CHAR_CODE } from './constants';

export default class Gene {
  baseChar: string;
  chars: Array<boolean>;
  firstChar: boolean;
  lastChar: boolean;

  constructor(baseChar: string, firstChar: boolean, lastChar: boolean) {
    this.baseChar = baseChar.toUpperCase();
    this.firstChar = firstChar;
    this.lastChar = lastChar;
  }

  getValue(): number {
    const baseValue = this.baseChar.charCodeAt(0) - BASE_CHAR_CODE;
    const multiplier = this.firstChar !== this.lastChar ? 1 : 2;
    return baseValue * multiplier;
  }

  toJSON(): string {
    let first = this.baseChar;
    let last = this.baseChar;
    if (!this.firstChar) {
      first = first.toLowerCase();
    }
    if (!this.lastChar) {
      last = last.toLowerCase();
    }
    return `${first}${last}`;
  }
}
