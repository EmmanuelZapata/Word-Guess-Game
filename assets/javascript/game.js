// alphabet array
var computerLetters = ["a","b", "c", "d", "e", "f", "g", "h", "i", "j", "k","l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x","y", "z"];

// create the vars to 0
var wins = 0;
var losses = 0;
var guessesLeft = 9;
var eachofLetters = null;
var letters = [];

//functions
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


  
document.onkeyup = function(event) {
    //guesses left 
    guessesLeft--;
    //userInput is made into a lowercase  
    var userInput = event.key.toLowerCase();
    console.log(userInput)
    //pushing letters
	letters.push(userInput);
	countGuessesLeft();
	farUserGuesses();
    // if user guesses right push win and restart
	if (userInput === computerChoice){
		wins++;
		document.querySelector("#wins").innerHTML = "Wins: " + wins;
		restart();
    } 
    
    // if user guesses 0 they lose
	else if (guessesLeft === 0) {
		losses++;
		document.querySelector("#lose").innerHTML = "Losses: " + losses;
		restart();
    }

    //restart function
    function restart(){
        guessesLeft = 9;
        letters = [];
        var computerChoice = computerLetters[Math.floor(Math.random()*computerLetters.length)];
    }
  }; 



