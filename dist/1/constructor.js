"use strict";
class Player {
    constructor(n) {
        this.id = `P${String(n)}`;
    }
}
const createPlayable = (playable, n) => {
    return new playable(n);
};
console.log(createPlayable(Player, 9).id);
