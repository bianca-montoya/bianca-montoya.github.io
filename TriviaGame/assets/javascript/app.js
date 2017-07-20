$(document).ready(function(){


	var answer = "";
	var correct = 0;
	var incorrect = 0;
	var startTime = 30;
	var questionNo = 0;

	var questionOne = new gameQuestion("At the start of the story, who is king of Westeros?", "Eddard Stark", "Robert Baratheon", "Joffrey Baratheon", "Tywin Lannister", "Robert Baratheon", "assets/images/robert-baratheon.png");
	var questionTwo = new gameQuestion("House Greyjoy rules which region?", "Dorne", "The Reach", "Pentos", "The Iron Islands", "The Iron Islands", "assets/images/iron-islands.png");
	var questionThree = new gameQuestion("Where is Jaqen H'ghar really from?", "Essos", "Winterfell", "Braavos", "King's Landing", "Braavos", "assets/images/braavos.png");
	var questionFour = new gameQuestion("What is the main religion in Westeros?", "Old Gods of the Forest", "The Drowned God", "The Lord of Light", "Faith of the Seven", "Faith of the Seven", "assets/images/faith-seven.png");
	var questionFive = new gameQuestion("What is the symbol of House Targaryen?", "A Lion", "A One-Headed Dragon", "A Three-Headed Dragon", "A Wolf", "A Three-Headed Dragon", "assets/images/three-headed-dragon.png");
	var gameQuestions = [questionOne, questionTwo, questionThree, questionFour, questionFive];

	gameQuestions[questionNo].showQuestion();


	function gameQuestion(question, answer1, answer2, answer3, answer4, correctAnswer, img)
		{
				this.question = question;
				this.answer1 = answer1;
				this.answer2 = answer2;
				this.answer3 = answer3;
				this.answer4 = answer4;
				this.correctAnswer = correctAnswer;
				this.img = img;
				this.showQuestion = function(){
					$(".question-div").html(this.question);
					$("#answer-div1").text(this.answer1);
					$("#answer-div2").text(this.answer2);
					$("#answer-div3").text(this.answer3);
					$("#answer-div4").text(this.answer4);
				};
		}

	// This is the function that starts the question timer
	//====================================================================================	

	function questionTimer() 
			{

				 if (startTime > 0) 
				 {

				 	console.log("This shows the startTime or Time Remaining: " + startTime);

				 	startTime--;
				    if (startTime < 10) {
				      startTime = "0" + startTime;
				    }
				    if (startTime <= 0) {
				    	clearInterval(showTime);
				    }

	// Time is displayed in the DOM.

				  	$(".timer-div").html("Time Remaining: " + startTime);

				 }

				 if (parseInt(startTime) == 0) 

				 {
				 	startTime = 30;

				 	console.log("This shows the question No.: " + questionNo);

					$(".game").hide();
			        $(".correct-answer").show();
			        $(".correct-answer-div").html("The correct answer is:");
			        var pic = $("<img>");
			        pic.attr("src", gameQuestions[questionNo].img);
			        pic.attr("width", "200px", "height", "200px");     
			        $("#correct-image").html(pic);
			        incorrect++;
			        $(".correct-answers-div").html("Correct Answers: " + correct);
				 	questionNo++;
			  		$(".incorrect-answers-div").html("Incorrect Answers: " + incorrect);
			        clearInterval(showTime);
					setTimeout(pTime, 3000);

				 }

				 if (questionNo === gameQuestions.length)
					{
						
						$(".game").hide();
				    	$(".restart").show();
				    	
				

			// When user clicks the restart button the game starts again.

						$(".restart").on("click", function()

						{

					    $(".game" ).show();
					    $(".start").hide();
					    $(".restart").hide();
					    $(".correct-answers-div").html("Correct Answers: ");
				  		$(".incorrect-answers-div").html("Incorrect Answers: ");
				  		
				  		clearInterval(showTime);
					    showTime = setInterval(questionTimer, 1000);
				    	answer = "";
						correct = 0;
						incorrect = 0;
						startTime = 30;
						questionNo = 0;

					});


					}

					else

				    {
				    	gameQuestions[questionNo].showQuestion(); 

				    }
			}
//====================================================================================	


	$(".game").hide();
    $(".correct-answer").hide();
    $(".restart").hide();

    $(".start").on("click", function(){

	$(".game" ).show();
	$(".start").hide();

	showTime = setInterval(questionTimer, 1000);

			
    });

	
   // This function checks the user input.

		$(".answer-div").on("click", function(){
			var myChoice = $(this).text();


   // If user input equals correct answer hide game div and show correct answer div with correct image and increase correct count.
			
			if (myChoice === gameQuestions[questionNo].correctAnswer){
		        $(".game").hide();
		        $(".correct-answer").show();
		        $(".correct-answer-div").html("Congratulations! The correct answer is:");
		        var pic = $("<img>");
		        pic.attr("src", gameQuestions[questionNo].img);
		        pic.attr("width", "200px", "height", "200px");     
		        $("#correct-image").html(pic);
		        correct++;
		        $(".correct-answers-div").html("Correct Answers: " + correct);
		  		$(".incorrect-answers-div").html("Incorrect Answers: " + incorrect);

	// This stops the time and after 3 seconds it moves to the next question.

		        clearInterval(showTime);
		        questionNo++;
				setTimeout(pTime, 3000);

		    }

	// If user input is incorrect hide game div and show correct answer div with correct image and increase incorrect count.

		    else {

		        $(".game").hide();
		        $(".correct-answer").show();
		        $(".correct-answer-div").html("Nope! The correct answer was:");
		        var pic = $("<img>");
		        pic.attr("src", gameQuestions[questionNo].img);
		        pic.attr("width", "200px", "height", "200px");     
		        $("#correct-image").html(pic);
		        incorrect++;
		        $(".correct-answers-div").html("Correct Answers: " + correct);
		  		$(".incorrect-answers-div").html("Incorrect Answers: " + incorrect);

	// This stops the time and after 3 seconds it moves to the next question.
		        clearInterval(showTime);
		        questionNo++;
		        setTimeout(pTime, 3000);

			}

		});

//====================================================================================	

   // This function pauses the time.

		function pTime() 
		{   	
	
			$(".game").show();
			$(".correct-answer").hide();
			startTime = 30;
			showTime = setInterval(questionTimer, 1000);


	// The game continues to update the questions displayed until no more questions are left.

			if (questionNo === gameQuestions.length)
			{

	// After game finishes looping through all the questions the game automatically restarts.
			// location.reload(true);

		    	$(".game").hide();
		    	$(".restart").show();
		    	$(".correct-answers-div").html("Correct Answers: ");
		  		$(".incorrect-answers-div").html("Incorrect Answers: ");


	// All variables are reset including the time shown.

		  		clearInterval(showTime);
		    	answer = "";
				correct = 0;
				incorrect = 0;
				startTime = 30;
				questionNo = 0;
				


	// When user clicks the restart button the game starts again.

				$(".restart").on("click", function()

				{

				    $(".game" ).show();
				    $(".start").hide();
				    $(".restart").hide();

				    showTime = setInterval(questionTimer, 1000);
			    	answer = "";
					correct = 0;
					incorrect = 0;
					startTime = 30;
					questionNo = 0;

				});
		    }

		    else
		    { 
		    	gameQuestions[questionNo].showQuestion(); 

		    }

		}

});

