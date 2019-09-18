// dom
const guessNumText = document.getElementById("guessnum");
const lossText = document.getElementById("losses");
const winText = document.getElementById("wins");
const guessText = document.getElementById("guesses");

// computer variables
var computerChoices = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

// user variables
var guesses = [];
var guessesRem = 9;
var userLoss = 0;
var userWin = 0;
var input;
var userGuess;

// resets game
var reset = function() {
    guessesRem = 9;
    guesses = [];
    guessNumText.innerHTML = guessesRem;
    guessText.innerHTML = guesses;
    computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
}

// when a key is pressed
document.onkeyup = function (event) {
    input = event.key;
    userGuess = input.toLowerCase(); 

    // verifying input is letter
    if (computerChoices.includes(input)) {

        // verifying input is not a duplicate
        if (! guesses.includes(input)) {
        guesses.push(userGuess); // keeping track of what letters have been used
        guessText.innerHTML = guesses;

            // if final guess doesn't match
            if (guessesRem === 1 && userGuess !== computerGuess) {
                alert("'" + userGuess + "' is incorrect. You're out of guesses, you lose!")
                userLoss++;
                lossText.innerHTML = userLoss;

                // resetting game
                reset();
            }

            // if input matches
            else if (userGuess === computerGuess) {
                alert("'" + userGuess + "' was my letter. You WIN!");
                userWin++;
                winText.innerHTML = userWin;

                // resetting game
                reset();
            }

            // validation criteria met but guess doesn't match
            else {
                guessesRem--;
                guessNumText.innerHTML = guessesRem;
            }
        } 

        // if duplicate entry
        else {
            alert("You've already used '" + userGuess + "'. Try again.");
        }
    }

    // if entry is not a letter
    else {
        alert("Invalid entry. Enter a letter.");
    }
}


