//Create variables: an array of words, wins, current word, remaining guesses, letters guessed. 
// "Jump", "Relax", "Africa", "Lady", "Centerfold", "Shout"

function playGame () {

var wordChoices = ["jump", "relax", "africa", "lady", "centerfold", "shout"];
var wins = 0;
var remainingGuesses = 10;
var lettersGuessed = [];
var currentWord;
var guessingWord = []; 



// Create variables that hold references to the places in the HTML where we want to display things.
var winsTag = document.getElementById ("wins-text");
var remainingGuessesTag = document.getElementById ("remaining-guesses-text");
var lettersGuessedTag = document.getElementById ("letters-guessed-text");
var currentWordTag = document.getElementById ("current-word-text");
var statusTag = document.getElementById ("status");

// Randomly chooses a word from the options array. This is current word.
var currentWord = wordChoices[Math.floor(Math.random() * wordChoices.length)]; 
console.log(currentWord);

// Initialize the currentWord with underscores " __ ". This is guessing word.
for (var i = 0; i<currentWord.length; i++) {
        guessingWord [i]= " __ ";
};

// Displays guessing word, wins, remaining guesses, and guessed letters
currentWordTag.textContent = guessingWord.join("");
winsTag.textContent = lettersGuessed; 
remainingGuessesTag.textContent = remainingGuesses; 
lettersGuessedTag.textContent = lettersGuessed;

// Use key events to listen for the letter player types and detemines which key was pressed.
document.onkeyup = function(event) {           

    if (event.keyCode >= 65 && event.keyCode <= 90 && remainingGuesses >0) {
        var userGuess = event.key.toLowerCase();
        if (lettersGuessed.includes(userGuess)) {
        remainingGuesses = remainingGuesses + 0}
        else {remainingGuesses --};

        for (var i=0; i < currentWord.length; i++) {
            if (currentWord[i] === userGuess && remainingGuesses >0) {
                guessingWord[i] = userGuess;
            }
    };

    if (lettersGuessed.includes(userGuess)){
        lettersGuessed.push()
        }
    else {lettersGuessed.push(userGuess)};

    if (remainingGuesses === 0 && guessingWord.includes(" __ ")) {
        statusTag.textContent = "Try again!"
    }
    //guessingWord.indexOf(" __ ") === -1
    else if (guessingWord.indexOf(" __ ") === -1) {
        statusTag.textContent = "Great Job! Try again."
        wins ++;
    }
            currentWordTag.textContent = guessingWord.join("");
            winsTag.textContent = wins; 
            remainingGuessesTag.textContent = remainingGuesses; 
            lettersGuessedTag.textContent = lettersGuessed;
    }
};
};
