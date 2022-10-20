interface CheckNumber {
  count: number;
  method: (arg: number) => boolean;
}

const isOneDigitPositive: CheckNumber = {
  count: 1,
  method: (n: number) => {
    return n >= 0 && n < 10;
  },
};

console.log(isOneDigitPositive.method(isOneDigitPositive.count));
