
$(document).ready(function(){
	
	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});


  	/*--- Starts new game ---*/
  	$("a.new").click(function(){
  		newGame();
  	})

  	$("#guessButton").click(function(){
  		var userGuess = $('#userGuess').val();
  		game($('#userGuess').val());
  		//('#userGuess').text('') ;


  	});
  	var randomNumber, numberOfUserGueses = 0, userGuesses = []; 


  	function generateRandomNumber(){
  		var min = 1, max = 100;
  		return Math.floor(Math.random() * (max - min + 1) + min);
  	}


  	function newGame(){
  		randomNumber = generateRandomNumber();
  			$("#guessButton").prop("disabled",false);
  			$("#userGuess").prop("disabled", false);
  			$('#feedback').html("Make your Guess!");
  			$('#userGuess').val('');
  			userGuesses = [];
  			numberOfUserGueses = 0;
  			$('#count').html(0);
  		console.log(randomNumber);
  	}

  	function game(userNumber){
  		var feedback = $('#feedback');

  		if(userNumber && userNumber <= 100 && userNumber > 0 && Number(userNumber)){
			
			if(userGuesses.indexOf(userNumber) !== -1){
				feedback.html("You already picked the #" + userNumber);
				event.preventDefault();
				return false;
			}

		//	console.log($("#guessList"));
		//	 $("ul#guessList").append($("li").text(userNumber));
		 $('<li></li>').text(userNumber).appendTo('ul#guessList');

			numberOfUserGueses++;
			$('#count').html(numberOfUserGueses);
			userGuesses.push(userNumber);

			compareValues(randomNumber, userNumber);


  		}else{
  			feedback.html("Please choose a number between 1 and 100");
  		}
  		
  		event.preventDefault();

  	}


  	function compareValues(computerNumber, userNumber){
  		var cNumber = computerNumber / 10,
  		uNumber = userNumber / 10;
  		var feedback = $('#feedback');
  		if(userNumber > computerNumber){
  			feedback.html("You are too high!");

  		}else if(userNumber < computerNumber){
  			feedback.html("You are too low!");

  		}else if(userNumber == computerNumber){
  			feedback.html("That's right you guess my number!");
  			$("#guessButton").prop("disabled",true);
  			$("#userGuess").prop("disabled", true);
  		}
  	}

  	newGame();

});


