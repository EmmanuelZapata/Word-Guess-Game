//create array of words
//choose random word from array
// function words(){
//     var word = ["taco", "burger", "pizza", "salad", "steak"];
//     var random = [Math.floor(Math.random() * 5)];
//     return word[random].split('')
// };




var DisplayWord = document.getElementById("word") 
var WinText = document.getElementById("win-text");
var GuessCount = document.getElementById("guesses-count");
var GuessLetters = document.getElementById("guesses-letters");
var letters = ["a","b", "c", "d", "e", "f", "g", "h", "i", "j", "k","l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x","y", "z"];


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


GuessLetters.textContent = "Guessed Letters: " + userGuess;
GuessCount.textContent = "Guesses: " + pressedLetter;
}



//create underscores based on word choosen
//get user guess
//check if guess is right
//make change to underscore if right
//make change to underscore if wrong