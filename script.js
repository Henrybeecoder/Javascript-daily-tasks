
// ##################################################################################
//Task Number 1

// You are going to be given a word. Your job is to return the middle character of the word. 
// If the word's length is odd, return the middle character. 
// If the word's length is even, return the middle 2 characters.

// #Examples:

// Kata.getMiddle("test") should return "es"

// Kata.getMiddle("testing") should return "t"

// Kata.getMiddle("middle") should return "dd"

// Kata.getMiddle("A") should return "A"
// #Input

// A word (string) of length 0 < str < 1000 (In javascript you may get slightly more than 1000 in some test cases due to an error in the test cases). You do not need to test for this. This is only here to tell you that you do not need to worry about your solution timing out.

// #Output

// The middle character(s) of the word represented as a string.

function getMiddle(str) {
   
   let medianIndex = str.length % 2 === 0 ? (str.length) / 2 : (str.length + 1 ) / 2 
   let answer =  str.length % 2 === 0 ? `${str[medianIndex - 1]}${str[medianIndex]}` : str[medianIndex - 1]
console.log(answer)
}

getMiddle("henry")

//TESTS

// Test.assertEquals(getMiddle("test"),"es");
// Test.assertEquals(getMiddle("testing"),"t");
// Test.assertEquals(getMiddle("middle"),"dd");
// Test.assertEquals(getMiddle("A"),"A");

 //########################################################################################################


















 // #################################################################################################################

 // TASK NUMBER 2 

//  In this kata you should simply determine, whether a given year is a leap year or not.
//   In case you don't know the rules, here they are:

// Years divisible by 4 are leap years,
// but years divisible by 100 are not leap years,
// but years divisible by 400 are leap years.
// Tested years are in range 1600 ≤ year ≤ 4000.

function isLeapYear (year) {
 if (year % 4 === 0 || year % 400 === 0) {
    return true
 }
 else {
    return false
 }
}

isLeapYear(2024)

// ##########################################################################################################################











//##########################################################################

//Task Number 3

// Write a function that takes in a string of one or more words, and returns the same string, 
// but with all words that have five or more letters reversed (Just like the name of this Kata). 
// Strings passed in will consist of only letters and spaces. 
// Spaces will be included only when more than one word is present.

// Examples:

// "Hey fellow warriors"  --> "Hey wollef sroirraw" 
// "This is a test        --> "This is a test" 
// "This is another test" --> "This is rehtona test"


function spinWords(string){
 let splitedString = string.split(" ")

const modifiedArray = splitedString.map((x) => {
    if (x.length > 4) {
      
        return x.split("").reverse().join("")
    }
  
    return x
 })

 return modifiedArray.join(" ")
}

spinWords("Henry is a God in human lekelejsjs ejdjdjdidjddodod")



///TEST

// describe("Spinning words",()=>{
//     it("Sample tests",()=>{
//       assert.strictEqual(spinWords("Welcome"), "emocleW");
//       assert.strictEqual(spinWords("Hey fellow warriors"), "Hey wollef sroirraw");
//       assert.strictEqual(spinWords("This is a test"), "This is a test");
//       assert.strictEqual(spinWords("This is another test"), "This is rehtona test");
//       assert.strictEqual(spinWords("You are almost to the last test"), "You are tsomla to the last test");
//       assert.strictEqual(spinWords("Just kidding there is still one more"), "Just gniddik ereht is llits one more");
//       assert.strictEqual(spinWords("Seriously this is the last one"), "ylsuoireS this is the last one");


///########################################################################################################



































///#############################################################################################

// TASK Number 3

// An Arithmetic Progression is defined as one in which there is a constant difference between 
// the consecutive terms of a given series of numbers. 
// You are provided with consecutive elements of an Arithmetic Progression. 
// There is however one hitch: 
// exactly one term from the original series is missing from the set of numbers which have been given to you. 
// The rest of the given series is the same as the original AP. 
// Find the missing term.

// You have to write a function that receives a list, 
// list size will always be at least 3 numbers. 
// The missing term will never be the first or last one.

// Example
// findMissing([1, 3, 5, 9, 11]) == 7
// PS: This is a sample question of the facebook engineer challenge on interviewstreet. 
// I found it quite fun to solve on paper using math, derive the algo that way. Have fun!

var findMissing = function (list) {  
    console.log(list)
    return list [0] ;
    
  }

  findMissing([1,3,5,9]);



  //##################################################################################################################




















  //##########################################################################################################



//   Write a function named first_non_repeating_letter† that takes a string input, 
//   and returns the first character that is not repeated anywhere in the string.

// For example, if given the input 'stress', the function should return 't', 
// since the letter t only occurs once in the string, and occurs first in the string.

// As an added challenge, 
// upper- and lowercase letters are considered the same character, 
// but the function should return the correct case for the initial letter. 
// For example, the input 'sTreSS' should return 'T'.

// If a string contains all repeating characters, it should return an empty string ("");

// † Note: the function is called firstNonRepeatingLetter for historical reasons,
//  but your function should handle any Unicode character.




  function firstNonRepeatingLetter(s) {
    // Convert the string to lowercase to handle case insensitivity
    let sLower = s.toLowerCase();
    
    // Count the occurrences of each character
    let charCount = {};
    for (let char of sLower) {
        charCount[char] = (charCount[char] || 0) + 1;
    }
    
    // Find the first character that has only one occurrence
    for (let char of s) {
        if (charCount[char.toLowerCase()] === 1) {
            return char;
        }
    }
    
    // If all characters are repeating, return an empty string
    return "";
}

// Test cases
console.log(firstNonRepeatingLetter('stress'));  // Output: 't'
console.log(firstNonRepeatingLetter('sTreSS'));  // Output: 'T'
console.log(firstNonRepeatingLetter(''));        // Output: ''
console.log(firstNonRepeatingLetter('aa'));      // Output: ''
console.log(firstNonRepeatingLetter('aabbcc'));  // Output: ''
console.log(firstNonRepeatingLetter('aAbBcC'));  // Output: ''




//###########################################################################################################




























// #####################################################################################################################

//TASK NUMBER 3
// Description
// Middle Earth is about to go to war. 
// The forces of good will have many battles with the forces of evil. 
// Different races will certainly be involved. 
// Each race has a certain worth when battling against others. 
// On the side of good we have the following races, with their associated worth:

// Hobbits: 1
// Men: 2
// Elves: 3
// Dwarves: 3
// Eagles: 4
// Wizards: 10


// On the side of evil we have:

// Orcs: 1
// Men: 2
// Wargs: 2
// Goblins: 2
// Uruk Hai: 3
// Trolls: 5
// Wizards: 10

// Although weather, location, supplies and valor play a part in any battle, 
// if you add up the worth of the side of good and compare it with the worth of the side of evil,
// the side with the larger worth will tend to win.

// Thus, 
// given the count of each of the races on the side of good, 
// followed by the count of each of the races on the side of evil, 
// determine which side wins.

// Input:
// The function will be given two parameters. 
// Each parameter will be a string of multiple integers separated by a single space. 
// Each string will contain the count of each race on the side of good and evil.

// The first parameter will contain the count of each race on the side of good in the following order:

// Hobbits, Men, Elves, Dwarves, Eagles, Wizards.
// The second parameter will contain the count of each race on the side of evil in the following order:

// Orcs, Men, Wargs, Goblins, Uruk Hai, Trolls, Wizards.
// All values are non-negative integers. The resulting sum of the worth for each side will not exceed the limit of a 32-bit integer.

// Output:
// Return "Battle Result: Good triumphs over Evil" if good wins, "Battle Result: Evil eradicates all trace of Good" if evil wins, or "Battle Result: No victor on this battle field" if it ends in a tie.

function goodVsEvil(good, evil) {
   let newGoodArmy = good.split(" ").join("")
   let newBadArmy = evil.split(" ").join("")
   let goodArmySum = 0
   let badArmySum = 0

for (var i = 0; i < newGoodArmy.length; i++){
console.log(goodArmySum += parseInt(newGoodArmy[i]))
}
for (var i = 0; i < newBadArmy.length; i++) {
    console.log(badArmySum += parseInt(newBadArmy[i]))
}
if (goodArmySum == badArmySum) {
    console.log("Battle Result: No victor on this battle field")
}
else if (goodArmySum > badArmySum) {
    console.log("Battle Result: Good triumphs over Evil")
}
else {
    console.log("Battle Result: Evil eradicates all trace of Good")
}

console.log(goodArmySum, badArmySum)


}



goodVsEvil("1 1 1 1 1 2 5 5 6 67 7 7 ", "5 5 5 6 7 7 7")

//TESTS

// assert.equal(goodVsEvil('1 1 1 1 1 1', '1 1 1 1 1 1 1'), 'Battle Result: Evil eradicates all trace of Good');
// assert.equal(goodVsEvil('0 0 0 0 0 10', '0 1 1 1 1 0 0'), 'Battle Result: Good triumphs over Evil');
// assert.equal(goodVsEvil('1 0 0 0 0 0', '1 0 0 0 0 0 0'), 'Battle Result: No victor on this battle field');

//##################################################################################################################