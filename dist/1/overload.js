"use strict";
const value = (v, add) => {
    if (typeof v === 'string')
        return v;
    return add ? String(v + add) : String(v);
};
console.log(value('test'));
console.log(value(1));
console.log(value(2, 3));
