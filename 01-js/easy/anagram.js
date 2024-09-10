/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  
  let str1Sum = 0;
  let str2Sum = 0;

  if (str1.length == str2.length) {
    for( let i = 0; i < str2.length; i++) {
      str1Sum += str1[i].toUpperCase().charCodeAt(0);
      str2Sum += str2[i].toUpperCase().charCodeAt(0);
    }
    if ( str1Sum == str2Sum){
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
}

module.exports = isAnagram;
