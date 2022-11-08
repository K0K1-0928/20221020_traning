// @ts-check

/**
 * @typedef Profile
 * @property {number} id
 * @property {string} name
 * @property {string} password
 * @property {string[]} role
 */

/**
 * ユーザークラスのコンストラクター。
 *
 * @constructor User
 * @param {Profile} props
 */
function User(props) {
  this.id = props.id;
  this.name = props.name;
  this.password = props.password;
  this.role = props.role;
}

const user = new User({
  id: 1,
  name: 'test',
  password: 'password',
  role: ['user'],
});
console.log(user.name);
