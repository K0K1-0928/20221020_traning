type BodyData = 'age' | 'height' | 'weight';

type UserInformation = {
  id: string;
  name: string;
};

type ToPropertyWithNumber<Type extends string | number | symbol> = {
  [Property in Type]: number;
};

type ChangeToPropertyWithNumber<Type> = {
  [Property in keyof Type]: number;
};

type Profile = ToPropertyWithNumber<BodyData>;
type UserNumber = ChangeToPropertyWithNumber<UserInformation>;

const user: Profile = {
  age: 20,
  height: 170,
  weight: 60,
};

const userNo: UserNumber = {
  id: 999,
  name: 123,
};

console.log(`Age: ${user.age}`);
console.log(`Name: ${userNo.name}`);
