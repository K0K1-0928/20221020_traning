interface Square {
  get width(): number;
  set width(value: number | string);
  get height(): number;
  set height(value: number | string);
}

const rectangle: Square = {
  width: 10,
  height: 5,
};

console.log(rectangle.width);

rectangle.width = 'Twenty';

console.log(rectangle.width);
