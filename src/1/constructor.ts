interface Character {
  id: string;
}

interface PlayableCharacter {
  new (n: number): Character;
}

class Player implements Character {
  id: string;
  constructor(n: number) {
    this.id = `P${String(n)}`;
  }
}

const createPlayable = (playable: PlayableCharacter, n: number) => {
  return new playable(n);
};

console.log(createPlayable(Player, 9).id);
