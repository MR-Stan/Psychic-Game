
// initializing variables
var userWin = 0;
var userLoss = 0;
var guessesRem = 9;
var guesses = [];

var computerChoices = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
// choosing random letter from array
var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

// running function on key stroke
document.onkeyup = function (event) {
    // determining which key
    var input = event.key;
    var userGuess = input.toLowerCase();
    var winText = document.getElementById("wins");
    var lossText = document.getElementById("losses");
    var guessNumText = document.getElementById("guessnum");
    var guessText = document.getElementById("guesses");

    if (guesses.includes(input)) {
        alert("You've already picked " + input + ". Please try again." );
    }
    else {
        guesses.push(input);
        guessText.innerHTML = guesses;
        if (guessesRem > 0) {
            if (userGuess == computerGuess) {
                alert("'" + userGuess + "' was my letter. You WIN!");
                userWin++;
                winText.innerHTML = userWin;
// initialize
            }
            else {
                guessesRem--;
                alert("'" + userGuess + "' is incorrect. You have " + guessesRem + " guesses remaining.");
                guessNumText.innerHTML = guessesRem;
            }
        }
        else {
            alert("You're out of guesses, you lose!");
            userLoss++;
            lossText.innerHTML = userLoss;
// initialize
        }
    }
}
