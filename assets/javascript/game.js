// alphabet array
var computerLetters = ["a","b", "c", "d", "e", "f", "g", "h", "i", "j", "k","l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x","y", "z"];
var letters = [];
//functions
//Random letter choosen.  
document.onkeyup = function(event) {
    //userInput is made into a lowercase  
    var userInput = String(event.key).toLowerCase();
    console.log()
    //computer makes a random choice from array
    var computerChoice = computerLetters[Math.floor(Math.random()*computerLetters.length)];
    //userInput is pushed to guessLetters
    letters = push(userInput);
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



