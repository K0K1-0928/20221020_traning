class Box<Type> {
  constructor(private contents: Type) {}
  call(): void;
  call(count: number): void;

  call(count?: number) {
    if (!count) {
      console.log(this.contents);
      return;
    }
    for (let i = 0; i < count; i++) {
      console.log(`${i + 1}回目: ${this.contents}`);
    }
  }
}

const blackBox = new Box('Black-Sun');
blackBox.call();
blackBox.call(5);
