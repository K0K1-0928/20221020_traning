"use strict";
const user1 = {
    userName: 'Taro Tanaka',
    displayName: '田中 太郎',
};
const user2 = {
    userName: 'Jane Doe',
};
const callUserName = (user) => {
    const userName = user.displayName || user.userName;
    console.log(userName);
};
callUserName(user1);
callUserName(user2);
