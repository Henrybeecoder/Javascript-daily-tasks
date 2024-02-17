
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