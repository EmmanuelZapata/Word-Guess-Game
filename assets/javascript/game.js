//create array of words
//choose random word from array
function words(){
    var word = ["taco", "burger", "pizza", "salad", "steak"];
    var random = [Math.floor(Math.random() * 5)];
    return word[random].split('')
};


//create underscores based on word choosen
//get user guess
//check if guess is right
//make change to underscore if right
//make change to underscore if wrong