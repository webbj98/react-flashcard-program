import Card from '../classes/card';
import Deck from '../classes/deck';
import saveData from './save_struct.json';

export function LoadSaveData() {
  console.log(`hello there`);
  console.log(`saveData`, saveData);

  const allCards: Card[] = [];
  saveData.cards.map((card) =>
    allCards.push(new Card(card.id, card.front.text, card.back.text)),
  );
  console.log(`allCards`, JSON.stringify(allCards));

  const allDecks: Deck[] = [];
  saveData.decks.map((deck) =>
    allDecks.push(new Deck(deck.id, deck.name, deck.cards)),
  );
  return {
    cards: allCards,
    decks: allDecks,
  };
}

export function Test() {
  return `testing...`;
}
