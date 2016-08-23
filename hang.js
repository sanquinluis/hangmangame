//Global variables
var secretWord = ['guitar', 'bass', 'maracas', 'drums', 'violin', 'bongos', 'congas' ];
var selectedWord = "";
var lettersinWord = [];
var numBlanks = 0;
var blanksandMatches = []; //_ _ _ _
var incorrectLetter = [];
//counting the wins, losses, guest left and wrong guess.
var winCount = 0;
var losseCount = 0;
var guessesLeft = 10;

// Function#1 that starts the game.
function startTheGame () {
	//It will randomly loop through the var secretWord and choose a random word.
	selectedWord = secretWord[Math.floor(Math.random() * secretWord.length)];
	//It will show how many letter are inside the secret word.
	lettersinWord = selectedWord.split("");
	numBlanks = lettersinWord.length;

	//resetting the game
	winCount = 0;
	losseCount = 0;
	guessesLeft = 10;
	incorrectLetter = [];
	blanksandMatches = []; 

	for (var i=0; i<numBlanks; i++){
		blanksandMatches.push("_");
	}
	document.getElementById("thesecret").innerHTML = blanksandMatches.join("  ");
	document.getElementById('guessesL').innerHTML = "Guest Left " + guessesLeft;
	document.getElementById('wins').innerHTML = "Wins " + winCount;
	document.getElementById('losses').innerHTML = "Losses " + losseCount;
	//test
	console.log(selectedWord);
	console.log(lettersinWord);
	console.log(numBlanks);
	console.log(blanksandMatches);

}
//Function #2 that verifies the letter inside the arrays
function checkingletters(letter){
	alert(letter);
	var istheletterthere = false;

	for(var i = 0; i<numBlanks; i++){
		if(selectedWord[i] == letter){
			istheletterthere = true;
		}
	}
	//checking the letter is in word
	if(istheletterthere){
		for(var i = 0; i<numBlanks; i++){
			if(selectedWord[i] = letter){
			}
		}
	}
	 else {
	 	incorrectLetter.push(letter);
	 	guessesLeft--
	 }
	 console.log(blanksandMatches);


}
//calling the function called starttheGame
startTheGame();
//Function #3 onKeyUp event listener.
document.onkeyup = function(event) {
	var letterpressed = String.fromCharCode(event.keyCode).toLowerCase();
	console.log(letterpressed);

}

