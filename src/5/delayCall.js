// @ts-check

/**
 * @callback CallFunction
 * @param {Date} time
 */

/**
 * コールバック関数の実行を待機する時間 (ミリ秒)
 *
 * @type {number}
 */
const WAIT_TIME = 3000;

/**
 * 一定時間経ってからコールバック関数を実行します。
 *
 * @param {CallFunction} callback
 */
function delayCall(callback) {
  const start = new Date();
  setTimeout(callback, WAIT_TIME, start);
}

delayCall(function (time) {
  console.log(`実行開始時: ${time}`);
  console.log(`現在日時: ${Date()}`);
});
