//Global variables
var secretWord = ['guitar', 'bass', 'maracas', 'drums', 'violin' ];
var selectedWord = "";
var lettersinWord = [];
var numBlanks = 0;
var blanksandMatches = []; //_ _ _ _
var incorrectLetter = [];
//counting the wins, losses, guest left and wrong guess.
var winCount = 0;
var losCount = 0;
var guessesLeft = 10;

// Function that starts the game.
function startTheGame () {
	//It will randomly loop through the var secretWord and choose a random word.
	selectedWord = secretWord[Math.floor(Math.random() * secretWord.length)];

	console.log(selectedWord);
}
startTheGame();

