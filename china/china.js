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
base ("fortune_telling").select({}).eachPage(gotPageOfChian, gotAllChina);

// an empty array to hold our data
// my array!!!!!!!
var ChinaImage  = [];

// callback function that recieve our data
function gotPageOfChian(records, fetchNextPage) {
  console.log("gotPageOfChian()");
  // add the records from this page to our array
  ChinaImage .push(...records);
  // request more pages
  fetchNextPage();
}

// call back function that is called when all pages are loaded
function gotAllChina(err) {
  console.log("gotAllChina()");

  // report an error, you'd want to do something better than this in production
  if (err) {
    console.log("error loading data");
    console.error(err);
    return;
  }

// call functions to log and show the books
consoleLogChina();

try {
  showChina();
}catch(e) {
    console.error(e);
  }
}

// just loop through thour air tablee data and console.log it
function consoleLogChina() {
  console.log("consoleLogChina()");
  ChinaImage.forEach((china) => {
    console.log("chinas:", china);
  });
}

// look through our airtable data, create elements
function showChina() {
  console.log("showChina()");
  ChinaImage.forEach((china) => {
    // airtable에서 western부분 불러오기
    var countryCategory = china.fields.country_category
    countryCategory.forEach((category) => {
      
      if (category == 'china') {

        // 1. create div for image to make a flip-card
        var chinaFlipCard = document.createElement("div");
        // 2. add class of "flip-card-front" to new div
        chinaFlipCard.classList.add("flip-card-back");
        // 3. create a new image
        var chinaImage = document.createElement("img");
        // 4. add class of "western-image" to new image
        chinaImage.classList.add("western-image");
        // 5. add link "src" to image
        // this is linking my airtable-fields
        chinaImage.src = china.fields.img[0].url;
        // 6. add our image to our flip-card-front div
        chinaFlipCard.appendChild(chinaImage);
        // 7. finally, add our new page with our image to flip-card
        document.querySelector(".flip-card").append(chinaFlipCard);


        // create div for text flip-card-back
        var chinaTextCard = document.createElement("div");
        // 2. add class of flip-card-back to new div
        chinaTextCard.classList.add("flip-card-back");
        // 3. create new paragraph
        var chinaDescription = document.createElement("p");
        // 4. add class to our paragraph
        chinaDescription.classList.add("western-description");
        // 5. add description to our paragraph
        chinaDescription.innerText = china.fields.description;
        // 6. add our description to our "flip-back-card" (page div)
        chinaTextCard.appendChild(chinaDescription);
        document.querySelector(".flip-card").append(chinaFlipCard);

        // 7. create a new headline
        var chinaTitle = document.createElement("h1");
        // 8. add a class to western title
        chinaTitle.classList.add("china-title");
        // 9. add title to the "flip-card-back"
        chinaTextCard.appendChild(chinaTitle);
        // 10. add new page(images, texts and the title) to the "card-container"
        document.querySelector(".flip-card").append(chinaTextCard)

        




      }


    })
  });
}