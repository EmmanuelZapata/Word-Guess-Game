// alphabet array
var computerLetters = ["a","b", "c", "d", "e", "f", "g", "h", "i", "j", "k","l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x","y", "z"];

// create the vars to 0
var wins = 0;
var losses = 0;
var guessesLeft = 9;
var eachofLetters = null;
var letters = [];

//functions

//Random letter choosen.  
document.onkeyup = function(event) {
    //userInput is made into a lowercase  
    var userInput = event.key.toLowerCase();
    console.log(userInput)

    //computer makes a random choice from array
    var computerChoice = computerLetters[Math.floor(Math.random()*computerLetters.length)];
    
   //count guesses left

    function countGuessesLeft() {
        document.querySelector("#guessesLeft").innerHTML = "Guesses Left: " + guessesLeft;
    }
    // your guessses choosen
    function farUserGuesses() {
        document.querySelector("#letter").innerHTML = "Your Guesses so far: " + letters.join(' ');
    }

    
    //if and else if statement on choices
    if (userInput == computerChoice) {
     //adds a win to win count
      displayWins++;
     alert('You gussed right! You Won!');
     //reseting the guesses back to 9 so that the user can play again
     guessesCount = 9; 
     letters.length = 0;
    }
   
};



