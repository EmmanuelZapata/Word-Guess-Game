//Connecting html to javascript that we want to be able to change.

var displayWord = document.getElementById("wins") 
var winText = document.getElementById("losses");
var guessCount = document.getElementById("guesses-count");
var guessesLetters = document.getElementById("guesses-letters")

// alphabet array

var computerLetters = ["a","b", "c", "d", "e", "f", "g", "h", "i", "j", "k","l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x","y", "z"];
var userGuess = [];
//functions
//Random letter choosen.  
document.onkeyup = function(event) {
    var userInput = String.toLowerCase(event.key);
    console.log()
    var computerChoice = computerLetters[Math.floor(Math.random()*computerLetters.length)];
   
};



