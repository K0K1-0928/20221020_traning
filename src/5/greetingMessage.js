// @ts-check

/**
 * @typedef UserObject
 * @property {string} name
 */

/**
 * 挨拶文を生成します。
 *
 * @param {UserObject} user
 * @return {string}
 */
function getGreetingMessage(user) {
  return `${user.name}さん、こんにちは！`;
}

console.log(getGreetingMessage({ name: 'Taro' }));
