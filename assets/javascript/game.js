
var letters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var wins = 0;
var losses = 0;
var guessesLeft = 9;
var guessesSoFar = [];

function resetScore(){
	guessesLeft = 9;
	guessesSoFar = [];
}

document.onkeyup = function(event) {

	var userGuess = (event.key).toLowerCase()
	var computerChoice = letters[Math.floor(Math.random() * letters.length)];
	console.log(`Random number: ${computerChoice} Guessed number ${userGuess}`);

		if (userGuess === computerChoice) {
			wins++;
			alert('You guessed correctly! Maybe you are a psychic!')
			resetScore();
			console.log(`wins: ${wins}`);
		}
		
		else {
			guessesSoFar.push(userGuess);
			console.log(`guesses so far: ${guessesSoFar}`);
			guessesLeft--;
			alert('Try again!')
			console.log(`guesses left: ${guessesLeft}`);
		}

		if (guessesLeft === 0) {
			losses++;
			resetScore();
			console.log(`losses: ${losses}`);
		}

    	document.getElementById("wins").innerHTML = "<div>Wins: " + wins + "</div>";
    	document.getElementById("losses").innerHTML = "<div>Losses: " + losses + "</div>";
    	document.getElementById("guessesLeft").innerHTML = "<div>Guesses Left: " + guessesLeft + "</div>";
    	document.getElementById("guessesSoFar").innerHTML = "<div>Your Guesses so Far: " + guessesSoFar.join(', ') + "</div>";

} 
