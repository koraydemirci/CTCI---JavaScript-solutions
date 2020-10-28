/**
CTCI - 1.6

String Compression: 
Implement a method to perform basic string compression using the counts of repeated characters. 

For example, the string aabcccccaaa would become a2b1c5a3. 
If the "compressed" string would not become smaller than the original string, 
your method should return the original string. You can assume the string 
has only uppercase and lowercase letters (a - z). 

I: string
O: compressed string
C: optimize
E: empty string, compressed string that's same length as the original string
*/

//time complexity: linear
//space complexity: constant

const stringCompression = (str) => {
  //traverse string, keep count of repeated chars
  //if cur and next char is the same, inc count
  //otherwise, concat cur char and count to output string, reset count to 1
  //return compressed string, only if the length is less than the original string, otherwise, return original string

  let count = 1;
  let output = "";

  for (let i = 0; i < str.length; i++) {
    const current = str[i];
    const next = str[i + 1];

    if (current === next) {
      count++;
    } else {
      output += current + count;
      count = 1;
    }
  }

  return output.length < str.length ? output : str;
};

console.log(
  stringCompression("aabcccccaaa") === "a2b1c5a3",
  stringCompression("aa") === "aa",
  stringCompression("aaAAaa") === "aaAAaa",
  stringCompression("aaaAAaa") === "a3A2a2",
  stringCompression("") === ""
);
