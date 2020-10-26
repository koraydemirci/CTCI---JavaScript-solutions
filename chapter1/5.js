/**
CTCI - 1.5

One Away: 

There are three types of edits that can be performed on strings: 
- insert a character,
- remove a character, 
- or replace a character. 
Given two strings, write a function to check if they are
one edit (or zero edits) away.

EXAMPLE
pale, ple -> true
pales, pale -> true
pale, bale -> true
pale, bake -> false 

I: 2 strings
O: boolean
C: optimize
E: empty string, 

time complexity: linear
space complexity: constant
*/

//if insert, then s1's current char should match s2's next char
//if remove, then s1's next char should match s2's current char
//if replace, then s1's next char should match s2's next char

//max one edit
//if diff in lengths is greater than max edit, return false

//iterate through strings at the same time, checking for diff
//store max length for forloop condition
//if diff is found, dec edits, check if edits dropped below zero, if so return false
//when forloop is done, return true

const oneAway1 = (s1, s2) => {
  let edits = 1;

  const s1Length = s1.length;
  const s2Length = s2.length;
  const maxlength = Math.max(s1Length, s2Length);
  const diff = Math.abs(s1Length - s2Length);

  if (diff > edits) {
    return false;
  }

  for (let i = 0, j = 0; i < maxlength || j < maxlength; i++, j++) {
    if (s1[i] !== s2[j]) {
      edits--;
      if (edits < 0) {
        return false;
      }
      if (s1[i] === s2[j + 1]) {
        j++;
      } else if (s1[i + 1] === s2[j]) {
        i++;
      }
    }
  }

  return true;
};

const oneAway = (s1, s2) => {
  let edits = 1;

  const long = s1.length > s2.length ? s1 : s2;
  const short = s1.length <= s2.length ? s1 : s2;
  const diff = long.length - short.length;

  if (diff > edits) {
    return false;
  }

  for (let i = 0, j = 0; i < long.length || j < long.length; i++, j++) {
    if (long[i] !== short[j]) {
      edits--;
      if (edits < 0) {
        return false;
      }
      if (long[i + 1] === short[j]) {
        i++;
      }
    }
  }

  return true;
};

console.log(
  oneAway("pale", "ple") === true, //removed
  oneAway("pales", "pale") === true, //inserted
  oneAway("pale", "bale") === true, //replaced
  oneAway("pale", "bake") === false,
  oneAway("p", "") === true,
  oneAway("", "bake") === false,
  oneAway("pr", "r") === true,
  oneAway("pr", "rp") === false,
  oneAway("brrr", "brrss") === false,
  oneAway("abc", "acs") === false,
  oneAway("aple", "aple") === true
);
