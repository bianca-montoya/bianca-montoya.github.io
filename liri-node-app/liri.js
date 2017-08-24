var Twitter = require('twitter');
var Spotify = require('node-spotify-api');
var request = require("request");
var fs= require('fs');

var action = process.argv[2];
var userQuery = process.argv[3];
var processLength = process.argv.length;
if(processLength > 4){
    for (var index = 4; index < processLength; index++) {
        userQuery = userQuery + " " + process.argv[index];
        
    }
}


var keys = require("./keys.js");


function myTweets() {
     
    let content='';
var twitterKey = keys.twitterKey;

var client = new Twitter(twitterKey);

var params = {screen_name: 'bwpxxo'};
client.get('statuses/user_timeline', params, function(error, tweets, response) {
 if (!error) {
     var length = tweets.length;
     if (length > 20 ){
         length = 20;
     }
    for (var index = 0; index < length; index++) {
        console.log("Text "+ tweets[index].text); 
        console.log('Created At: '+tweets[index].created_at);
        content = '\n Text '+ tweets[index].text+' '+'Created At: '+tweets[index].created_at;
        writingToFile(content);
    }
 }
});



}

function spotifyThis() {

    if(typeof userQuery==='undefined'){
        userQuery='The Sign';
    }
  
   var spotifyKey = keys.spotifyKey;
   var spotify = new Spotify(spotifyKey);
   console.log(userQuery);

   spotify.search({ type: 'track', query: userQuery }, function(err, data) {
     if (err) {
       return console.log('Error occurred: ' + err);
     }
     var response = data.tracks.items;
     for (var i= 0; i < response.length; i++) {
        console.log(response.length);
        console.log('Artist(s): ' + JSON.stringify(response[i].artists[0].name))
        console.log('The song\'s name: '  + JSON.stringify(response[i].name));
        console.log('A preview link: '   +  JSON.stringify(response[i].href));
        console.log('The album: '  +  JSON.stringify(response[i].album.name));
        content = '\n Artist(s): '+ JSON.stringify(response[i].artists[0].name)+' '+'The song\'s name: '+ JSON.stringify(response[i].name)+' '+'A preview link: '+ JSON.stringify(response[i].href)+' '+'The album: '+JSON.stringify(response[i].href);
        writingToFile(content);
     }

   });

}

function movieThis() {
    
    if(typeof userQuery==='undefined'){
        userQuery='Mr. Nobody';
    }


// Then run a request to the OMDB API with the movie specified
request("http://www.omdbapi.com/?t="+userQuery+"&y=&plot=short&apikey=40e9cece", function(error, response, body) {

//  console.log(userQuery);
  if (!error && response.statusCode === 200) {

   console.log("Title of the movie: " + JSON.parse(body).Title);
   console.log("Year the movie came out: " + JSON.parse(body).Year);
   console.log("IMDB Rating of the movie: " + JSON.parse(body).Ratings[0].value);
   console.log("Rotten Tomatoes Rating of the movie: " +JSON.parse(body).Ratings[1].value);
   console.log("Country where the movie was produced: " + JSON.parse(body).Country);
   console.log("Language of the movie: " + JSON.parse(body).Language);
   console.log("Plot of the movie: " + JSON.parse(body).Plot);
   console.log("Actors in the movie: " + JSON.parse(body).Actors);
   content = '\n Title of the movie: '+ JSON.parse(body).Title+' '+'Year the movie came out: '+ JSON.parse(body).Year+'IMDB Rating of the movie: '+' '+JSON.parse(body).Ratings[0].value+'Rotten Tomatoes Rating of the movie:'+' '+JSON.parse(body).Ratings[1].value+'Country where the movie was produced: '+' '+JSON.parse(body).Country+'Language of the movie: '+' '+JSON.parse(body).Language+'Plot of the movie: '+' '+JSON.parse(body).Plot+'Actors in the movie: '+' '+JSON.parse(body).Actors;
   writingToFile(content);
   
    //console.log("The movie's rating is: " + JSON.parse(body).imdbRating);
  }
});

}

function  doWhat() {
    fs.readFile('random.txt','utf8', function (error,data) {
        if(error){
            console.log(error);
        }
        else{
            var splitData = data.split(',');
            action = splitData[0];
            userQuery = splitData[1];
            spotifyThis();
        }
        
    })

}

if (action === "my-tweets"){
    myTweets();
}

if (action === "spotify-this-song") {
    spotifyThis();
}

if (action === "movie-this"){
    movieThis();
}

if (action === "do-what-it-says"){
    doWhat();
}

function writingToFile(content) {
    fs.appendFile('log.txt', content, (err) => {
        if (err) throw err;
        // console.log('The file has been saved!');
      });
}


// my-tweets
// spotify-this-song
// movie-this 
// do-what-it-says
