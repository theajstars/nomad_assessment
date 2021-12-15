const testString = "WhoOwnsTheNorth?";
const testString2 = "me12gohomenow?";
const testString3 = "!!!!!....!!";
const testString4 =
  "Errors in strategy cannot be correct through tactical maneuvers";
//Create and reverse the alphabet array
const alphabet = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
const alphabetReverse = [
  "z",
  "y",
  "x",
  "w",
  "v",
  "u",
  "t",
  "s",
  "r",
  "q",
  "p",
  "o",
  "n",
  "m",
  "l",
  "k",
  "j",
  "i",
  "h",
  "g",
  "f",
  "e",
  "d",
  "c",
  "b",
  "a",
];
const stringEncode = (str) => {
  //Leave encoded string initially empty
  var encodedString = "";
  const stringArray = str.split("");
  stringArray.map((string) => {
    //Encode each letter in the string
    string = string.toLowerCase();
    const index = alphabet.indexOf(string);
    if (index !== -1) {
      const charEncode = alphabetReverse[index];
      encodedString = encodedString.concat(charEncode);
    } else {
      //If character is not a letter, skip it
      encodedString = encodedString.concat(string);
    }
  });
  return encodedString;
};

const stringFrequency = (str) => {
  var stringFrequencyArray = [];
  var stringArray = Array.from(str.split("")).sort();
  stringArray.map((string) => {
    var count = 0;
    stringArray.map((string2) => {
      if (string === string2) {
        count++;
      }
    });
    //Push Object with string and count into array
    stringFrequencyArray = [...stringFrequencyArray, { string, count }];
  });

  //Remove duplicates from Array
  var filteredStringFrequencyArray = Array.from(
    new Set(stringFrequencyArray.map((elem) => elem.string))
  ).map((string) => {
    return stringFrequencyArray.find((elem) => elem.string === string);
  });

  //Remove non-letters from Array
  filteredStringFrequencyArray = filteredStringFrequencyArray.filter(
    (string) => alphabet.indexOf(string.string.toLowerCase()) !== -1
  );

  return filteredStringFrequencyArray;
};

console.log(stringEncode(testString));
console.log(stringEncode(testString4));
//viilih rm hgizgvtb xzmmlg yv xliivxg gsilfts gzxgrxzo nzmvfevih

console.log(stringFrequency(testString));
console.log(stringFrequency(testString2));
console.log(stringFrequency(testString3));
