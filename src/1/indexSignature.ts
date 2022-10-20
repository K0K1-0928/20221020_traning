interface CorrespondingNumber {
  [key: string]: number;
}

const playingCard: CorrespondingNumber = {
  ace: 1,
  jack: 11,
  queen: 12,
  king: 13,
};

console.log(`King's card ranks ${playingCard.king}.`);
