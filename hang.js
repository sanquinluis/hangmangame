//Global variables (All Functions have access to them).
//=======================================================================================

//Array of Wrod Option (all lowercases)
var wordsList = ['guitar', 'bass', 'maracas', 'drums', 'violin', 'bongos', 'congas' ];
var chosenWord = ""; //Solution will be held here.
var lettersInChosenWord = []; //This will break the solution into individual letters to be stored in array.
var numBlanks = 0; //This will be the number of blanks we show based on the solution.
var blanksAndSuccesses = []; // Holds a mix of blank and solved letters (ex: 'n, _ _, n _')
var wrongGuesses = []; //Holds all of the wrong guesses.

//Game counter.
var winCounter = 0;
var lossCounter = 0;
var numGuesses = 9;


//Function (Bits of code that we will call upon needed)
//=======================================================================================

//startGame()
//Its how we will start and restart the game. (It's not being run here. It's bing made for future use.)
function startGame() {
	//reset the guesses back to 0
	numGuesses = 9;

	chosenWord = wordsList[Math.floor(Math.random() * wordsList.length)]; //The selected word is chosen randomly.
	lettersInChosenWord = chosenWord.split(""); // The word is broken into individual letters.
	numBlanks = lettersInChosenWord.length; //we count the number of letters in the word.

	console.log(chosenWord); //We print the solution in the console (for testing)

	blanksAndSuccesses = []; //IMPORTANT it resets the guess and success array at each round.
	wrongGuesses = []; // IMPORTANT it resets the wrong guesses from previous rounds.

	// Fill up the blanksAndSuccesses list with appropriate number of blanks. This is based on number of letters in solution.

	for (var i=0; i<numBlanks; i++){
		blanksAndSuccesses.push("_");
	}

	console.log(blanksAndSuccesses); //print the initial blanks in console.

	//Preprints the guessesLeft to 9
	document.getElementById("guessesLeft").innerHTML = numGuesses;
	// Prints the blanks at the beginning of each round in the HTML
	document.getElementById("wordblanks").innerHTML= blanksAndSuccesses.join(" ");

	//Clears thewrong guesses form the previous round.
	document.getElementById('wrongGuesses').innerHTML = wrongGuesses.join(" ");

} //END**StartGame()
//=======================================================================================
//checkLetters() function
// It's where we will do all of the comparisons for matches. This is for future reference. 
function checkLetters (letter) {

	var letterInWord = false; //this boolean will be toggled based on wether or not a user letter is found anywhere in the word.


	//check if a letter exists inside the array at all.
	for (var i=0; i<numBlanks; i++){
		if(chosenWord[i] == letter) {
			letterInWord = true; // if the letter exists the toggle this boolean to true. This will be used on the next step.

		}
	}

	//If the letter exists somewhere in the word, then figure out exactly where it is.
	if(letterInWord){
		//loop through the word
		for (var i=0; i<numBlanks; i++){

			//populate the blanksAndSuccesses with every instance of the letter.
			if(chosenWord[i] == letter) {
				blanksAndSuccesses[i] = letter; //here we set the specific space in blanks and letter equal to the letter when there is a match.			
			}
		}
		console.log(blanksAndSuccesses); // logging for testing.
	}
	//If the letter doesen't exist at all...
	else{
		wrongGuesses.push(letter); //Then we add the letter to the list of wrong letters.
		numGuesses--; //and we substract one of the guesses.
	}

} //END**ofCheckLetters
//=======================================================================================
//roundComplete() function
//Here we will have all of the code that needs to be run after each guess is made.

function roundComplete(){

	//First, log an initial status update in the console telling us how many wins, losses, and guesses are left.
	console.log("WinCount: " + winCounter + " | LossCount: " + lossCounter + " | NumGuesses: " + numGuesses);

	//Update the HTML to reflect the new number of guesses. Also update the correct guesses.

	document.getElementById("guessesLeft").innerHTML= numGuesses;
	document.getElementById("wordblanks").innerHTML = blanksAndSuccesses.join(" "); // This will print the array of guesses and blanks onto the page
	document.getElementById("wrongGuesses").innerHTML = wrongGuesses.join(" "); // This will print the wrong guesses onto the page.

		//If we have gotten al the letter to match the solution.

		if (lettersInChosenWord.toString() == blanksAndSuccesses.toString()) {
			winCounter++; // add to the win counter 
			alert("You win!"); // give the user an alert

			//Update the win counter in the HTML
			document.getElementById("winCounter").innerHTML= winCounter;
			startGame(); //calles the startGame() function to restart the game.
		}
		//if we've run out of guesses
		else if(numGuesses ==0){
			lossCounter++; //add to the loss counter
			alert("You Lose"); //give the user an alert.

			//Update the loss counter un the HTML
			document.getElementById("lossCounter").innerHTML = lossCounter;
			startGame(); //calles the startGame() function to restart the game.
		}

}//END**ofroundComplete

// MAIN PROCESS (THIS IS THE CODE THAT CONTROLS WHAT IS ACTUALLY RUN)
// ==================================================================================================

// Starts the Game by running the startGame() function
startGame();

	//Then initiates the function for capturing key cliks.
	document.onkeyup = function(event) {
		letterGuessed = String.fromCharCode(event.keyCode).toLowerCase(); //Converts all key clicks to lower case letters.

		checkLetters(letterGuessed); //runs the code to check for correctness
		roundComplete(); //runs the code after each round is done.
	}




