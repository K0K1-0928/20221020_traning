"use strict";
const isOneDigitPositive = {
    count: 1,
    method: (n) => {
        return n >= 0 && n < 10;
    },
};
console.log(isOneDigitPositive.method(isOneDigitPositive.count));
