
var numberOfGuesses = 0;
var lettersUsed = [];
var wins = 0;
var currentWord = '';
var s;
var wordArray=[];
var userKey = '';
var keyPressed = [];
var wrongGuesses = 0;

// These are my favorite band names.

  var favBands = ['bethoven','motzart', 'sia', 'halsey', 'depeche'];
  var randomWordChoice = favBands[Math.floor(Math.random() * favBands.length)];

  console.log(randomWordChoice);

  document.getElementById("wrong-guesses").innerHTML = wrongGuesses;

  document.onkeyup = function(event) {

      // Determines which key was pressed.
      var userGuess = event.key;
      // console.log(userGuess);
      // document.getElementById("visCheck");

      if (str.indexOf(event.key) >=0){

        document.getElementById(str.indexOf(event.key)).className = "Show";

      } else { 

      wrongGuesses++;
      console.log("wrong-guesses" + wrongGuesses);

      }
      // console.log(event);

    }

    var str = randomWordChoice;
    var res = str.split("");

    console.log(str);
    console.log(res);


    // Creating a variable to hold our array length.

      var randomWordChoiceLength = favBands.length;
      var x = '';

      for (var i = 0; i < res.length;  i++) {

        x = x + "<div class=\"Letter\"><span class='Hidden' id='"+i+"'>";
        x = x + res[i];
        x = x + "</span></div>";
      
      }
      document.getElementById("WordGuessed").innerHTML = x;

      
      

      

      // // Looping through our myFarm array.
      // for (var j = 0; j < randomWordChoiceLength; j++) {

      //   // Console out the farm animal in the current index.
      //   console.log(favBands[j]);

      //           if (res[j].charAt(0) === " " || favBands[j].charAt(0) === " ");
      //   }

      // }
    
  
  
