
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