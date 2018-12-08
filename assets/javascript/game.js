function playGame() {

// Create varialbles and placeholder to update data on displayed on the screen
    var wordChoices = ['afghanistan','albania','algeria','andorra','angola','argentina','armenia','australia','austria','azerbaijan','bahamas','bahrain','bangladesh','barbados','belarus','belgium','belize','bhutan','bolivia','bosnia','botswana','brazil','brunei','bulgaria','cambodia','canada','chad','chile','china','colombia','congo','costa rica','croatia','cuba','cyprus','czech republic','denmark','dominica','ecuador','egypt','estonia','ethiopia','fiji','finland','france','gambia','georgia','germany','ghana','great britain','greece','guatemala','guinea','haiti','honduras','hungary','iceland','india','indonesia','iran','iraq','israel','italy','jamaica','japan','jordan','kazakhstan','kenya','north korea','south korea','kuwait','kyrgyzstan','laos','latvia','lebanon','libya','liechtenstein','lithuania','luxembourg','macedonia','madagascar','malaysia','maldives','mali','malta','mauritania','mexico','moldova','monaco','mongolia','montenegro','morocco','mozambique','burma','namibia','nepal','new zealand','nicaragua','niger','nigeria','norway','oman','pakistan','panama','papua new guinea','paraguay','peru','philippines','poland','portugal','puerto rico','qatar','romania','russia','rwanda','samoa','saudi arabia','senegal','serbia','singapore','slovakia','slovenia','somalia','south africa','spain','sri lanka','sudan','sweden','switzerland','syria','tajikistan','tanzania','thailand','netherlands','togo','tunisia','turkey','turkmenistan','uganda','ukraine','united arab emirates','united states of america','uruguay','uzbekistan','venezuela','vietnam','yemen','zambia','zimbabwe'];
    
    var wins = 0;
    var remainingGuesses;
    var lettersGuessed;
    var currentWord;
    var guessingWord;
    var userGuess; 
    var word;

    var winsTag = document.getElementById ("wins-text");
    var remainingGuessesTag = document.getElementById ("remaining-guesses-text");
    var lettersGuessedTag = document.getElementById ("letters-guessed-text");
    var currentWordTag = document.getElementById ("current-word-text");
    var statusTag = document.getElementById ("status");

//Create function to reset variables and placeholders' content

//Create function to select a word among available choices
    function selectWord() {
        remainingGuesses = 15;
        lettersGuessed = [];
        guessingWord = [];
        remainingGuessesTag.textContent = remainingGuesses;
        winsTag.textContent = wins;  
        lettersGuessedTag.textContent = lettersGuessed;

        currentWord = wordChoices[Math.floor(Math.random() * wordChoices.length)]; 
        for (var i = 0; i<currentWord.length; i++) {
            if (currentWord[i] === " ") {guessingWord[i] = " "}
            else {guessingWord[i] = " __ ";}
        };        
        currentWordTag.textContent = guessingWord.join("");
        console.log(currentWord);
    };

    selectWord();

//Create event listener and guesss evulation function, calculate wins, check if lost, update remaining guesses, letters guessed
    function makeGuess() {
        document.onkeyup = function(event) {
            if (event.keyCode >= 65 && event.keyCode <= 90) {
                userGuess = event.key.toLowerCase();

                if (!lettersGuessed.includes(userGuess)){
                    lettersGuessed.push(userGuess); 
                    remainingGuesses --;
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
                    selectWord();   
                }
            }; 

            function checkLost(){
                if (remainingGuesses === 0 && guessingWord.includes(" __ ")) {
                    statusTag.textContent = "Try again!";
                    selectWord(); 
                }
            }

            checkWin();
            checkLost();
        };
    };    

    makeGuess();   
};

