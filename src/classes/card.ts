export default class Card {
  frontText: string;

  backText: string;
  // frontImageFile: string;
  // backImageFile: string;

  id: number;

  constructor(id: number, frontText: string, backText: string) {
    this.backText = backText;
    this.frontText = frontText;
    this.id = id; // TODO: Make some global thing that keeps track of ids
  }
}

// module.exports = Card;
