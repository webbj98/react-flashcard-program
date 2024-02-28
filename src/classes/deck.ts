export default class Deck {
  cardIds: Array<number>;

  id: number;

  name: string;

  constructor(id: number, name: string, cardIds: Array<number>) {
    this.cardIds = cardIds;
    this.id = id;
    this.name = name;
  }
}
