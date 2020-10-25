/**
 * CTCI - 1.2
 *
 * CHECK PERMUTATION
 * Given two strings, write a method to decide of one is a permutation of the other.
 *
 * I: 2 strings
 * O: boolean
 * C: optimize
 * E: empty string, diff lengths
 */

// time complexity: O(2n) - linear
// space complexity: O(n) - linear

const checkPerm = (str1, str2) => {
  //if two strings have diff lengths, automatically return false
  //one way: sort both strings and compare -- O(n log n)
  //to optimize, we can make a map of one string, and check the second string
  if (str1.length !== str2.length) {
    return false;
  }

  const hash = {};

  for (let s of str1) {
    if (hash[s]) {
      hash[s]++;
    } else {
      hash[s] = 1;
    }
  }

  for (let s of str2) {
    if (hash?.[s] > 0) {
      hash[s]--;
    } else {
      return false;
    }
  }

  return true;
};

console.log(
  checkPerm("", "") === true,
  checkPerm("so", "os") === true,
  checkPerm("sos", "os") === false,
  checkPerm("abc", "abz") === false,
  checkPerm("restful", "fluster") === true,
  checkPerm("baab", "bbba") === false
);
