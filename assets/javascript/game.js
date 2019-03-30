//Connecting html to javascript that we want to be able to change.

var displayWord = document.getElementById("wins") 
var winText = document.getElementById("losses");
var guessCount = document.getElementById("guesses-count");
var guessesLetters = document.getElementById("guesses-letters")

// alphabet array and word arrays

var letters = ["a","b", "c", "d", "e", "f", "g", "h", "i", "j", "k","l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x","y", "z"];




//functions


// function word(){
//     var random = [Math.floor(Math.random() * 5)];
//     return word[random].split('')
// };
// displayWord.textContent = "Word: " + word();
// const words = ["taco", "burger", "pizza", "salad", "steak"];
// function chooseWord(array) {
//     return array[Math.floor(Math.random() * array.length)].toUpperCase()
//   }
  
//   function blankWord(word) {
//     return word.replace(/w/g, '_')
//   }
  
//   function fillInWordWithLetter(letter, word) {
//     return word.toLowerCase().split('').map(l =>  {
//       if (l === letter) {
//         return l.toUpperCase()
//       }
//       return '_'
//     }).join(' ')

// function callletters (pressedLetter){
// var isFound = false;
//     for (var i = 0; i < letters.length; i ++){
//         if (letters[i].toLowerCase() === pressedLetter){ 
//             GuessCount[i] === pressedLetter;
//             isFound = true;

    
//         }
//     }
// return isFound;
// };





// document.onkeyup = function(event){
//     var userGuess = event.key;
//     var pressedLetter = event.key;


// guessLetters.textContent = "Guessed Letters: " + userGuess;
// guessCount.textContent = "Guesses: " + pressedLetter;
// }}



//create underscores based on word choosen
//get user guess
//check if guess is right
//make change to underscore if right
//make change to underscore if wrong