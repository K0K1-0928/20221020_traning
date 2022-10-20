interface NumberToString {
  (s: string): string;
  (n: number): string;
  (n: number, add: number): string;
}

const value: NumberToString = (v: string | number, add?: number): string => {
  if (typeof v === 'string') return v;
  return add ? String(v + add) : String(v);
};

console.log(value('test'));
console.log(value(1));
console.log(value(2, 3));
