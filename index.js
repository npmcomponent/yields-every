
/**
 * every.
 */

var every = [].every;

/**
 * Test wether or not all elements
 * in the provided array pass the provided
 * test.
 *
 * example:
 *
 *          every([1, 2, 3], function (el, i) {
 *            return 'number' == typeof el;
 *          });
 *          // > true
 *
 * @param {Array} arr
 * @param {Function} fn
 * @return {bool}
 */

module.exports = function (arr, fn) {
  if (every) return every.apply(arr, fn);
  for (var i = 0, l = arr.length; i < l; ++i) {
    if (!fn(arr[i], i)) return false;
  }
  return true;
};
