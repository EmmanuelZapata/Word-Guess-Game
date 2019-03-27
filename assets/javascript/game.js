//Connecting html to javascript that we want to be able to change.

var displayWord = document.getElementById("word") 
var winText = document.getElementById("win-text");
var guessCount = document.getElementById("guesses-count");
var guessLetters = document.getElementById("guesses-letters");
var guessesLeft = document.getElementById("guesses-left")

// alphabet array and word arrays

var letters = ["a","b", "c", "d", "e", "f", "g", "h", "i", "j", "k","l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x","y", "z"];

var word = ["taco", "burger", "pizza", "salad", "steak"];



//create array of words
//choose random word from array
// function words(){
//     var word = ["taco", "burger", "pizza", "salad", "steak"];
//     var random = [Math.floor(Math.random() * 5)];
//     return word[random].split('')
// };


function callletters (pressedLetter){
var isFound = false;
    for (var i = 0; i < letters.length; i ++){
        if (letters[i].toLowerCase() === pressedLetter){ 
            GuessCount[i] === pressedLetter;
            isFound = true;

    
        }
    }
return isFound;
};





document.onkeyup = function(event){
    var userGuess = event.key;
    var pressedLetter = event.key;


guessLetters.textContent = "Guessed Letters: " + userGuess;
guessCount.textContent = "Guesses: " + pressedLetter;
}



//create underscores based on word choosen
//get user guess
//check if guess is right
//make change to underscore if right
//make change to underscore if wrong