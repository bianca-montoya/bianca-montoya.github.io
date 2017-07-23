$(document).ready(function(){

    $(".thumbnail").hide();

    //Array of animals!
    var animal = ["Goat", "Dog", "Elephant", "Mouse", "Cat", "Pig", "Gorilla", "Horse", "Iguana", "Jellyfish", "Giraffe", "Elephant", "Dinosaur", "Zebra", "Flamingo"];

     function showBtn(){
        $("#bianca").empty();
        for (var i = 0; i< animal.length; i++) {

            //<button class="btn btn-info animal" data-name="Monkey">Monkey</button>
            var newButton1 = $("<button>");
            newButton1.text(animal[i]);
            newButton1.addClass("btn btn-info animal");
            $("#bianca").append(newButton1);
            // $('#gifs').append(newButton1);
        }

    }
        
        showBtn();

    $(document).on('click', '.animal', function() {
    $(".thumbnail").show();
    $(".thumbnail").empty();



        var animal = $(this).text();
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + animal + "&api_key=dc6zaTOxFJmzC&limit=10";

        $.ajax({
            url: queryURL,
            method: 'GET'
        }).done(function(response) {
             console.log(response)

                var results = response.data;

                for (var i = 0; i < results.length; i++) {

                    var gifImg =('<div class="p-class">Rating: '+results[i].rating+'<img class="img-size" src='+results[i].images.fixed_height.url+' data-still='+ results[i].images.fixed_height_still.url+' data-animate='+results[i].images.fixed_height.url+' data-state="animate"></img></div>');
                    $('#gifs').append(gifImg);
                }

            });
          });

            $(document).on("click", ".img-size", function() {

                    var state = $(this).attr("data-state");

                    if (state === "still") {

                    $(this).attr("src", $(this).attr("data-animate"));
                    $(this).attr("data-state", "animate");
                    console.log($(this).attr("data-state"));

                    } else {

                    $(this).attr("src", $(this).attr("data-still"));
                    $(this).attr("data-state", "still");
                    console.log($(this).attr("data-state"));
                    }
                });
  


        
        //This function "adds" the buttons

        // handles the event when clicked
        $(document).on('click', '#theButton', function(){
            // $(".thumbnail").empty();


            var animalButton = $("#gif-input").val();

            if (animalButton =="")
            {
                alert("Invalid Input");
            }
            else
            {

                animal.push(animalButton);
                 showBtn();
            }
            // //adds the new animal

            // var newButton = $("<button>").addClass("btn btn-info animal").attr('data-name', animalButton).append(animalButton);

            // $("#animalsbuttons").append(newButton);
            //     console.log("Work");


            // var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + animalButton + "&api_key=dc6zaTOxFJmzC&limit=10";
            //     console.log(animalButton);

            // $.ajax({
            // url: queryURL,
            // method: 'GET'
            // })

            // .done(function(response) {
            //  console.log(response)

            //     var results = response.data;

            //     for (var i = 0; i < results.length; i++) {

            //         var gifImg =('<div class="p-class">Rating: '+results[i].rating+'<img class="img-size" src='+results[i].images.fixed_height.url+' data-still='+ results[i].images.fixed_height_still.url+' data-animate='+results[i].images.fixed_height.url+' data-state="animate"></img></div>');
            //         $('#gifs').append(gifImg);
            //     }

            //         $(document).on("click", ".img-size", function() {

            //         var state = $(this).attr("data-state");

            //         if (state === "still") {

            //         $(this).attr("src", $(this).attr("data-animate"));
            //         $(this).attr("data-state", "animate");
            //         console.log($(this).attr("data-state"));

            //         } else {

            //         $(this).attr("src", $(this).attr("data-still"));
            //         $(this).attr("data-state", "still");
            //         console.log($(this).attr("data-state"));
            //         }
            //     });
            // });

            // $("#gif-input").val("");
            // return false;
        });

});