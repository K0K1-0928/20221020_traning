// @ts-check

/**
 * ES6のクラス構文で記述したユーザークラス。
 *
 * @class UserES6
 */
class UserES6 {
  /**
   * Creates an instance of UserES6.
   * @param {number} id
   * @param {string} name
   * @param {string} password
   * @param {string[]} role
   * @memberof UserES6
   */
  constructor(id, name, password, role) {
    this.id = id;
    this.name = name;
    this.password = password;
    this.role = role;
  }
  callName() {
    console.log(this.name);
  }
}

const userES6 = new UserES6(1, 'test', 'password', ['user']);
userES6.callName();
