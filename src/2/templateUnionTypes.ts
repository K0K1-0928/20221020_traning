type Series = 'KamenRider' | 'Ultraman' | 'Gundam';
type Position = 'First' | 'Heisei' | 'Latest';

type PositioningBySeries = `${Position}_${Series}`;

const witchFromMercury: PositioningBySeries = 'Latest_Gundam';

console.log(witchFromMercury);
