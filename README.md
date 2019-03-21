# Liri Node App :taurus:

## Welcome to my Liri Node App!

#### LIRI stands for Language Interpretation and Recognition Interface and she will help you search Spotify for songs, Bands in Town for concerts, and OMDB for movies.

## This app uses the following node packages: 
- Axios package to retrieve data from Spotify, Bands in Town and OMDB APIs. 
- Moment package to display a shortened concert date for the Bands in Town request 
- Node-Spotify-API to simplify the axios requests from spotify
- DotEnv to store my personal Spotify API keys which are not pushed to gitHub - keeping my keys private
- Chalk to style what is displayed to the user in terminal


## At the start of my webpage, you will see a prompt on the screen displaying Liri's commands:
1) Liri look up concert!
2) Liri look up song! 
3) Liri look up movie! 
4) Liri Spotify a random song! 
5) Goodbye Liri :) 


### See what each of the following commands does:
1) On the first command, <b>Liri look up concert!</b>
    - The user is prompted *"Name an artist you'd like to see in concert :)"*
    - The user will type and submit an artist name.
    - Liri will search Bands In Town API using an axios call and return the following information for that artist's next concert.
        - Name of the venue
        - Venue location
        - Date of the Event
    - If no artist is provided to Liri, than Liri will display the following message: *"You didn't type an artist :( Try Again! From the beginning."* 
    - The user is then returned to the first prompt.
    
#### See Demo of first command:
<img src="https://media.giphy.com/media/yNfH8AGUopyRbR8wQJ/giphy.gif" width="500">

2) On the second command, <b>Liri look up song!</b>
    - The user is prompted *"Give me a song :)"*
    - The user will type and submit a song to Liri.
    - Liri will search Spotify API for that song using an axios call and return the following information for that song.
        - Artist(s) name
        - Song name
        - A preview link of the song from Spotify
        - The album name that the song is from
    - If no song is provided to Liri, Liri will display the message *"You didn't pick a song, so I picked one for you! You're welcome",* and the information for the default song "Blank Space" by Taylor Swift will be displayed.
    - The user is then returned to the first prompt.

#### See Demo of second command:
<img src="https://media.giphy.com/media/jls1vDYVRvgdusS0Yp/giphy.gif" width="500">

3) On the third command, <b> Liri look up movie!</b>
    - The user is prompted *"What Movie would you like to look up?"*
    - The user will type and submit a movie to Liri.
    - Liri will search IMDB API for that movie using an axios call and return the following information regarding that movie. 
        * Title of the movie
        * Year the movie came out
        * IMDB Rating of the movie
        * Rotten Tomatoes Rating of the movie
        * Country where the movie was produced
        * Language of the movie
        * Plot of the movie
        * Actors in the movie
    - If no movie is provided to Liri, Liri will display the message *"You didn't type a movie :( So one will be suggested to you: Mr. Nobody"*, and the information for Mr. Nobody will be displayed.
    - The user is then returned to the first prompt.

#### See Demo of third command:
<img src="https://media.giphy.com/media/8FS4Wgd2qTRlGtlKom/giphy.gif" width="500">

) On the fourth command, <b>Liri Spotify a random song!</b>
    - Using the fs Node package, LIRI will take the text inside of random.txt file and use it to call one of LIRI's commands.
        - Try using this command a few times to see some of the random songs Liri recommends.

#### See Demo of fourth command:
<img src="https://media.giphy.com/media/2djT470LKXKEBrGAxF/giphy.gif" width="500">

5) On the fith command, <b>Goodbye Liri :)</b>
    - Liri will display the following message *"Goodbye Human! Have a fantastic day :)"*
    - The user will exit out of the App
#### See Demo of fith command:
<img src="https://media.giphy.com/media/3dhlQARiCN5Zo5L2A5/giphy.gif" width="500">

## Built With
- JavaScript
- Node packages
    * Axios
    * Moment
    * Node-Spotify-Api
    * DotEnv
    * Chalk

## Authors
Jennifer Powell 