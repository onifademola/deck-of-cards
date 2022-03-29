const genRanks = ['Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten', 'Jack', 'Queen', 'King', 'Ace'];

const makeAdeck = () => {
  const suits = ['Hearts', 'Diamonds', 'Clubs', 'Spades'];
  const ranks = [...genRanks];

  const deck = [];

  for (let suitCount = 0; suitCount < 4; suitCount++) {
    for (let rankCount = 0; rankCount < 13; rankCount++) {
      deck.push(`${ranks[rankCount]} of ${suits[suitCount]}`);
    }
  }
  return deck;
};

const shuffleDeck = (deck) => {
  for (var i = 0; i < 52; i++) {
    let tempCard = deck[i];
    let varyingIndex = Math.floor(Math.random() * 52);
    deck[i] = deck[varyingIndex];
    deck[varyingIndex] = tempCard;
  }
  return deck;
};

const convertAcesToQueens = (deck) => {
  for (var i = 0; i < 52; i++) {    
    if (deck[i].split(" ")[0] == 'Ace') {
      const currentDeck = deck[i];
      const restOfString = currentDeck.substring(currentDeck.indexOf(" ")+1);
      deck[i] = `Queen of ${restOfString}`;
    }
  }
  return deck;
}

const countedCardsList = (ranks, deck) => {
  const countedList = [];
  ranks.map(rank => {
    const rankCount = deck.filter(f => f.split(" ")[0] == rank);
    countedList.push(`${rank}: ${rankCount.length}`);
  });
  return countedList;
};

const sortedDeck = makeAdeck();
const shuffledDeck = shuffleDeck([...sortedDeck]);
const aceConvertedDeck = convertAcesToQueens([...sortedDeck]);
const sortedDeckCountList = countedCardsList(genRanks, [...sortedDeck]);
const aceConvertedDeckCountList = countedCardsList(genRanks, [...aceConvertedDeck]);

const printSortedDeck = () => console.log(sortedDeck);
const printAceConvertedDeck = () => console.log(aceConvertedDeck);
const printShuffledDeck = () => console.log(shuffledDeck);
const printSortedDeckCountList = () => console.log(sortedDeckCountList);
const printShuffledDeckCountList = () => console.log(aceConvertedDeckCountList);

printSortedDeckCountList();
printShuffledDeckCountList();