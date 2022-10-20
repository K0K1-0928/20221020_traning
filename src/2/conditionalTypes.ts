type Rank = `A` | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 'J' | 'Q' | 'K';
type NotNumber<Type> = Type extends number ? Type : never;

type SpotCard = NotNumber<Rank>;

const weakestRank: SpotCard = 2;

console.log(weakestRank);
