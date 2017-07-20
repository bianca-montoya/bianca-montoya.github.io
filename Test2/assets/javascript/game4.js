	var letter ='';
	var s;
	var dash = [];
	var incorrectGuess = [];
	randWord = [];
		
var word =["desmond", "bianca", "omar", "toye"];
var randWord = word[Math.floor(Math.random() * word.length)];

function gameStart()
{
	
	for (var i = 0; i < randWord.length; i++) {
	dash[i] = "_";
	s = dash.join(" ");
		console.log(randWord);
	}

	document.getElementById('dasher').innerHTML = s;
}


document.onkeyup = function(event)
{
  letter = event.key;
 
  
  console.log(letter);

   var n = randWord.includes(letter);

   if (n== true)
	 {

	  for (i=0; i < randWord.length; i++) 
	  {
	  	console.log("true");
	  	if(letter == randWord[i] )

	  	{

	  		
	  		dash[i] = letter;
	  	}
	  	else {
	  		

	  	}

	  }

	document.getElementById('dasher').innerHTML = dash.join(" ");
}
else
{
	incorrectGuess.push(letter);

console.log("false");
}
 document.getElementById('incorrect-guesses').innerHTML = incorrectGuess.join(" ");
}
