interface User {
  userName: string;
  displayName?: string;
}

const user1: User = {
  userName: 'Taro Tanaka',
  displayName: '田中 太郎',
};

const user2: User = {
  userName: 'Jane Doe',
};

const callUserName = (user: User) => {
  const userName = user.displayName || user.userName;
  console.log(userName);
};

callUserName(user1);
callUserName(user2);
