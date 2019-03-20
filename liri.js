require("dotenv").config();
var keys = require("./keys.js");
var Spotify = require('node-spotify-api');
var spotify = new Spotify(keys.spotify);
var axios = require("axios");
var inquirer = require("inquirer");

function liri() {

  inquirer
    .prompt([
      {
        type: "list",
        message: "What would you like to do?",
        choices: ["Let's look up concerts!", "Let's look up a song!", "Let's look up a movie!", "random"],
        name: "actions"
      }

    ])
    .then(function (res) {
      if (res.actions === "Let's look up concerts!") {
        inquirer.prompt([
          {
            type: "input",
            message: "Name an artist you'd like to see in concert :)",
            name: "name"
          }
        ]).then(function (artist) {
          var queryUrl = "https://rest.bandsintown.com/artists/" + artist.name + "/events?app_id=codingbootcamp";
          axios.get(queryUrl).then(
            function (response) {
              // console.log(response.data[0]);
              console.log("==============================================");
              console.log("Venue Name: " + response.data[0].venue.name + "\n" + "Location: " + response.data[0].venue.city + ", " + response.data[0].venue.region + response.data[0].venue.country
                + "\n" + "Event Date: " + response.data[0].datetime)
              console.log("==============================================");
              liri()
            }
          )
        })
      }

      if (res.actions === "Let's look up a song!") {
        inquirer.prompt([
          {
            type: "input",
            message: "Give me a song :)",
            name: "name"
          }
        ]).then(function (song) {
          spotify.search({ type: 'track', query: song.name }, function (err, data) {
            var info = data.tracks.items[0]
            if (err) {
              return console.log('Error occurred: ' + err);
            }
            console.log("==============================================");
            console.log(info.artists[0].name + "\n" + info.name + "\n" + "Check out a preview of the song: " + 
            info.external_urls.spotify + "\n" + "Album Name: " + info.album.name);
            console.log("==============================================");
            liri()
          });
        })
    }

  if (res.actions === "Let's look up a movie!") {
    inquirer.prompt([
      {
        type: "input",
        message: "What Movie would you like to look up?",
        name: "name"
      }
    ]).then(function (movie) {
      var queryUrls = "http://www.omdbapi.com/?t=" + movie.name + "&y=&plot=short&apikey=trilogy";
      axios.get(queryUrls).then(
        function (response) {
          // console.log(response.data);
          console.log("==============================================");
          console.log("Title: " + response.data.Title + "\n" + "Year: " + response.data.Year + "\n" + "Rating: " + response.data.Rated + "\n" +
            "Rotten Tomatoes Rating: " + response.data.Ratings[1].Value + "\n" + "Country Movie was Produced: " + response.data.Country + "\n" +
            "Languages: " + response.data.Language + "\n" + "Plot: " + response.data.Plot + "\n" + "Actors: " + response.data.Actors)

          console.log("==============================================");
          liri()
        }
      )
    })
  }
  if (res.actions === "random") {





  }

});
}

liri()
