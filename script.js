//console.log("Hello is this working?");

//load the aritable libray and call it air table
var Airtable = require("airtable");
//console.log(Airtable);

// connect our air table base to our website using API key
var base = new Airtable({ apiKey: "keyuZxN16RiqUv9vr" }).base(
    "applmrp6L7vZ2YqB1"
  );

  // get our air table data and specify how to retreieve it.
base("playlist").select({}).eachPage(gotPageOfSongs, gotAllSongs);

// an empty array to hold our  data
const songs = [];

// callback function that receives our data
function gotPageOfSongs(records, fetchNextPage) {
    console.log("gotPageOfSongs()");
    // add the records from this page to our array
    songs.push(...records);
    // request more pages
    fetchNextPage();
  }

  // call back function that is called when all pages are loaded
function gotAllSongs(err) {
    console.log("gotAllSongs()");
  
    // report an error, you'd want to do something better than this in production
    if (err) {
      console.log("error loading data");
      console.error(err);
      return;
    }

  // call functions to log and show the books
  consoleLogSongs();
  showSongs();
}

// just loop through thour air tablee data and console.log it
function consoleLogSongs() {
    console.log("consoleLogSongs()");
    songs.forEach((song) => {
      console.log("song:", song);
    });
  }
  
// look through airtable data, and display them onto our page
  function showSongs() {
    console.log("showSongs()");
    songs.forEach((song) => {
      //add song title
        //var songTitle = document.createElement("h1");
        //songTitle.innerText = song.fields.title;
        //document.body.appendChild(songTitle);
        
        //add artist name to page
        //var songArtist = document.createElement("h1");
        //songArtist.innerText = song.fields.artist;
        //document.body.appendChild(songArtist);
         // adding artist image to page
         //var songImage = document.createElement("img");
         //songImage.src = song.fields.image[0].url;
         //document.body.appendChild(songImage);

         // Creating a new div container
         //This is where our song info will go
         var songContainer = document.createElement("div");
         songContainer.classList.add("song-container");
         document.querySelector(".container").append(songContainer);


         // add song titles to our container
         var songTitle = document.createElement("h1");
         songTitle.classList.add("song-title");
         songTitle.innerText = song.fields.song_title;
         songContainer.append(songTitle);


         // add  artist to our song container
         var songArtist =document.createElement("h1");
         songArtist.classList.add("song-artist");
         songArtist.innerText = song.fields.artist;
         songContainer.append(songArtist);

         // add description to our song container
         var songDescription = document.createElement("p");
         songDescription.classList.add("song-description");
         songDescription.innerText = song.fields.description;
         songContainer.append(songDescription);

         // add image to our song container
         var songImage = document.createElement("img");
         songImage.classList.add("song-image");
         songImage.src = song.fields.song_image[0].url;
         songContainer.append(songImage);

         // add event listener
         // when user clicks on song container
         // image and description will appear or disappear

         songContainer.addEventListener("click", function(){
             songDescription.classList.toggle("active");
         })
         songImage.classList.toggle("active");
         
    });

    
}