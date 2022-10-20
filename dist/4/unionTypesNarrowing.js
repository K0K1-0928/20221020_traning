"use strict";
const isSpotCard = (card) => {
    return typeof card.rank === 'number';
};
const spade10 = {
    suit: 'Spade',
    rank: 10,
};
const club8 = {
    suit: 'Club',
    rank: 8,
};
const compareOfNumberRankOnly = (card1, card2) => {
    if (isSpotCard(card1) && isSpotCard(card2)) {
        return card1.rank > card2.rank;
    }
    return false;
};
console.log(compareOfNumberRankOnly(spade10, club8));
