/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */

// prints "hi" in the browser's dev tools console




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
// my array!!!!!!!
var westernImage  = [];

// callback function that recieve our data
function gotPageOfWestern(records, fetchNextPage) {
  console.log("gotPageOfWestern()");
  // add the records from this page to our array
  westernImage .push(...records);
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

// call functions to log and show the books
consoleLogWesterns();

try {
  showWesterns();
}catch(e) {
    console.error(e);
  }
}

// just loop through thour air tablee data and console.log it
function consoleLogWesterns() {
  console.log("consoleLogWesterns()");
  westernImage.forEach((western) => {
    console.log("westerns:", western);
  });
}

// look through our airtable data, create elements
function showWesterns() {
  console.log("showWesterns()");
  westernImage.forEach((western) => {
    // airtable에서 western부분 불러오기
    var countryCategory = western.fields.country_category
    countryCategory.forEach((category) => {
      
      if (category == 'western') {


        var flipCardDiv = document.createElement("div")
        flipCardDiv.classList.add("flip-card")
        document.querySelector(".flip-card-container").append(flipCardDiv);

 
        // 1. create div for image to make a flip-card
        var westernFlipCard = document.createElement("div");
        // 2. add class of "flip-card-front" to new div
        westernFlipCard.classList.add("flip-card-front");
        // 3. create a new image
        var westernImage = document.createElement("img");
        // 4. add class of "western-image" to new image
        westernImage.classList.add("western-image");
        // 5. add link "src" to image
        // this is linking my airtable-fields
        westernImage.src = western.fields.img[0].url;
        // 6. add our image to our flip-card-front div
        westernFlipCard.appendChild(westernImage);
        // 7. finally, add our new page with our image to flip-card
        flipCardDiv.append(westernFlipCard);


        // create div for text flip-card-back
        var westernTextCard = document.createElement("div");
        // 2. add class of flip-card-back to new div
        westernTextCard.classList.add("flip-card-back");
        // 3. create new paragraph
        var westernDescription = document.createElement("p");
        // 4. add class to our paragraph
        westernDescription.classList.add("western-description");
        // 5. add description to our paragraph
        westernDescription.innerText = western.fields.description;
        // 6. add our description to our "flip-back-card" (page div)
        westernTextCard.appendChild(westernDescription);
        flipCardDiv.append(westernFlipCard);

        // 7. create a new headline
        var westernTitle = document.createElement("h1");
        // 8. add a class to western title
        westernTitle.classList.add("western-title");
        // 9. add our title from airtable
        westernTitle.innerText = western.fields.title;
        // 9. add title to the "flip-card-back"
        westernTextCard.appendChild(westernTitle);
        // 10. add new page(images, texts and the title) to the "card-container"
        flipCardDiv.append(westernTextCard)

        // get genre field from airtable
        // loop through the array and add each genre as
        // a class to the song container

        // var westernFlipCard = genre_category.fields.genre;
        // westernFlipCard.forEach(function(genre){
        //   westernFlipCard.classList.add(genre)
        // })

        // // add event listener to our filter
        // // to add an active class to our song

        // var filterCard = document.querySelector('.card');
        // filterCard.addEventListener("click", function(){

        //     if (westernFlipCard.classList.contains("card")) {
        //       westernFlipCard.style.background ="red";
        //     } else {
        //       westernFlipCard.style.background = "blue";
        //     }
        // })
        




      }


    })
  });
}

// card individual flipping effect

// var flipCardDiv = document.createElement("div")
// flipCardDiv.classList.add("flip-card")
// document.querySelector(".flip-card-container").append(flipCardDiv);

const cards = document.querySelectorAll(".flip-card");

function flipCard() {
  this.classList.toggle("flip");
}
cards.forEach((card) => card.addEventListener("click", flipCard));

