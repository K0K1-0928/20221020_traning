type Suit = 'Spade' | 'Heart' | 'Diamond' | 'Club';
type AceCard = {
  suit: Suit;
  rank: 'A';
};
type FaceCard = {
  suit: Suit;
  rank: 'K' | 'Q' | 'J';
};
type SpotCard = {
  suit: Suit;
  rank: 10 | 9 | 8 | 7 | 6 | 5 | 4 | 3 | 2;
};
type PlayingCard = AceCard | FaceCard | SpotCard;

const isSpotCard = (card: PlayingCard): card is SpotCard => {
  return typeof card.rank === 'number';
};

const spade10: PlayingCard = {
  suit: 'Spade',
  rank: 10,
};

const club8: PlayingCard = {
  suit: 'Club',
  rank: 8,
};

const compareOfNumberRankOnly = (
  card1: PlayingCard,
  card2: PlayingCard
): boolean => {
  if (isSpotCard(card1) && isSpotCard(card2)) {
    return card1.rank > card2.rank;
  }
  return false;
};

console.log(compareOfNumberRankOnly(spade10, club8));
