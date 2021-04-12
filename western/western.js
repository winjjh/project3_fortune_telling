//console.log("Hello is this working?");

//load the aritable libray and call it air table
var Airtable = require("airtable");
//console.log(Airtable);

// connect our air table base to our website using API key
var base = new Airtable({ apiKey: "keyuZxN16RiqUv9vr" }).base(
    "applmrp6L7vZ2YqB1"
  );

// get my collection data, select all the records
// specify functions that will recieve the data (in a row)
base ("fortune_telling").select({}).eachPage(gotPageOfWestern, gotAllWestern);

// an empty array to hold our data
var Images = [];

// callback function that recieve our data
function gotPageOfWestern(records, fetchNextPage) {
  console.log("gotPageOfWestern()");
  // add the records from this page to our array
  images.push(...records);
  // request more pages
  fetchNextPage();
}

// call back function that is called when all pages are loaded
function gotAllWestern(err) {
  console.log("gotAllWestern()");

  // report an error, you'd want to do something better than this in production
  if (err) {
    console.log("error loading data");
    console.error(err);
    return;
  }

// call functions to log and show the western images
consoleLogWesterns();
showWesterns();
}

// just loop through thour air tablee data and console.log it
function consoleLogWesterns() {
  console.log("consoleLogWesterns()");
  westerns.forEach((western) => {
    console.log("western:", western);
  });
}

// look through airtable data, and display them onto our page
function showWesterns() {
    console.log("showWesterns()");
    westerns.forEach((western) => {
        
        var westernImage = document.createElement("img")
        westernImage.classList.add("western-image");
        westernImage.src = western.fields.img[0].url;
        flip-card.append(westernImage);
    }