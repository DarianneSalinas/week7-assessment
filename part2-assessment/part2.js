// WEEK 7 ASSESSMENT PART 2

/* Work through the following problems in Javascript (you have seen these problems before). Create a new file for your code. When you have finished with each function, leave a code comment with what you believe the runtime of your code to be.
*/




//#1
// Sum Zero
// Write a function that takes in an array of numbers. The function should return True if any two numberss in list sum to 0, and false otherwise.

const addToZero = arr => {

    for (let i = 0; i < arr.length; i++) {
        for(let j = 0; j < arr.length; j++) {
            if(i !== j && arr[i] + arr[j] ===0 ) {
                return true
            } else {
                return false
            }
        }

    }

}



addToZero([]);
// -> False

addToZero([1]);
// -> False

addToZero([1, 2, 3]);
// -> False

addToZero([1, 2, 3, -2]);
// -> True

//runtime: O(n)


//#2
//Unique Characters
// Write a function that takes in a single word, as a string. 
//It should return True if that word contains only unique characters. Return False otherwise.

// const hasUniqueChars = string => {
//     for (let i = 0; i < string.length; i++) {
//         for (let j = i+1; j < string.length; j++) {
//             if (string[i] === string[j]) {
//                 return false
//             } else {
//                 return true
//             }
//         }
//     }
// }

// hasUniqueChars("Monday");
// // -> True

// hasUniqueChars("Moonday");
// // -> False

//runtime: O(n)



//#3
//Pangram Sentence
//A pangram is a sentence that contains all the letters of the English alphabet at least once, like “The quick brown fox jumps over the lazy dog.”

//Write a function to check a sentence to see if it is a pangram or not.

//For example:

// isPangram("The quick brown fox jumps over the lazy dog!");
// // -> True

// isPangram("I like cats, but not mice");
// // -> False

//runtime:


//#4 
//Longest Word
//Write a function, find_longest_word, that takes a list of words and returns the length of the longest one.

//list of words array
//for loop to loop through array
//variable to hold longest word -> longestWord
//go into each item in array, check which is largest
//if statement

// return longest word -> longestWord.length?

const findLongestWord = listArray => {
 let longestWord = ''
 for (let i = 0; i < listArray.length; i++) {

 }


}






// findLongestWord(["hi", "hello"]);
// // -> 5

//runtime: