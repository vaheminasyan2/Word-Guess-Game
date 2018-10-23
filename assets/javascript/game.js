function playGame() {

// Create varialbles and placeholder to update data on display
    var wordChoices = ["jump", "relax", "africa", "lady", "centerfold", "shout"];
    var wins = 0;
    var remainingGuesses = 10;
    var lettersGuessed = [];
    var currentWord;
    var guessingWord = [];
    var userGuess; 

    var winsTag = document.getElementById ("wins-text");
    var remainingGuessesTag = document.getElementById ("remaining-guesses-text");
    var lettersGuessedTag = document.getElementById ("letters-guessed-text");
    var currentWordTag = document.getElementById ("current-word-text");
    var statusTag = document.getElementById ("status");

//Create function to reset variables and placeholders' content
    function reset () {
        remainingGuesses = 10;
        lettersGuessed = [];
        guessingWord = [];
        remainingGuessesTag.textContent = remainingGuesses;
        winsTag.textContent = wins;  
        lettersGuessedTag.textContent = lettersGuessed;
    };

//Create function to select a word among available choices
    function selectWord() {
        currentWord = wordChoices[Math.floor(Math.random() * wordChoices.length)]; 
        for (var i = 0; i<currentWord.length; i++) {
            guessingWord [i]= " __ ";
        };
        currentWordTag.textContent = guessingWord.join("");
        remainingGuessesTag.textContent = remainingGuesses;
        console.log(currentWord);
    };

    selectWord();

//Create event listener and guesss evulation function, calculate wins, check if lost, update remaining guesses, letters guessed
    function makeGuess() {
        document.onkeyup = function(event) {
            if (event.keyCode >= 65 && event.keyCode <= 90) {
                userGuess = event.key.toLowerCase();

                if (lettersGuessed.includes(userGuess)){
                    lettersGuessed.push();
                    remainingGuesses = remainingGuesses + 0;
                }
                else {
                    lettersGuessed.push(userGuess); remainingGuesses --;
                }
                lettersGuessedTag.textContent = lettersGuessed;
                remainingGuessesTag.textContent = remainingGuesses; 
            }
            for (var i=0; i < currentWord.length; i++) {
                if (currentWord[i] === userGuess) {
                    guessingWord[i] = userGuess;
                    currentWordTag.textContent = guessingWord.join(""); 
                }
            };

            function checkWin() {
                if (guessingWord.indexOf(" __ ") === -1) {
                    statusTag.textContent = "Great Job! The word was: " + currentWord.toUpperCase() + ". Try new word.";
                    wins ++;
                    winsTag.textContent = wins;
                    reset ();
                    selectWord();   
                }
            }; 

            function checkLost(){
                if (remainingGuesses === 0 && guessingWord.includes(" __ ")) {
                    statusTag.textContent = "Try again!";
                    reset ();
                    selectWord(); 
                }
            }

            checkWin();
            checkLost();
        };
    };    

    makeGuess();   
};

