// @ts-check

/**
 * 引数の数値の合計を返します。
 *
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
function sum(a, b) {
  return a + b;
}

console.log(sum(5, 7)); // OK
console.log(sum('hoge', 7)); // Error
