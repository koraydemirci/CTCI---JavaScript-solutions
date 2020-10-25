/** 
CTCI - 1.3
URLify
Write a method to replace all spaces in a string with '%20'. 
You may assume that the string has sufficient space at the end to hold the additional characters, 
and that you are given the 'true' length of the string. 
(Note: If implementing in Java, please use a character array so that you can
perform this operation in place.)
EXAMPLE
Input: 'Mr John Smith ', 13
Output: 'Mr%20John%20Smith'
I: string, number
O: string
C: optimize
E: empty string, spaces in front, middle and end
time complexity: linear
space complexity: constant
*/

let URLify = (str, n = str.length) => {
  //first pass: count the number of non space characters in the string
  //subtract chars from true length n to see how many spaces we are allowed to replace with %20

  //second pass:
  //if we see a space and there are still spaces left, append '%20' to output string
  //otherwise copy current character
  //when run out of spaces, append the empty string instead

  let output = "";
  let chars = 0;

  for (let s of str) {
    if (s !== " ") {
      chars++;
    }
  }

  let spaces = n - chars;

  for (let s of str) {
    if (s === " " && spaces > 0) {
      output += "%20";
      spaces--;
    } else if (s !== " ") {
      output += s;
    }
  }

  while (spaces > 0) {
    output += "%20";
    spaces--;
  }

  return output;
};

console.log(
  URLify("Mr John Smith ", 13) === "Mr%20John%20Smith",
  URLify("Mr John Smith ", 14) === "Mr%20John%20Smith%20",
  URLify("   hi", 7) === "%20%20%20hi%20%20",
  URLify("   hi ", 3) === "%20hi",
  URLify("", 0) === "",
  URLify("", 2) === "%20%20",
  URLify("hel lo", 5) === "hello"
);
