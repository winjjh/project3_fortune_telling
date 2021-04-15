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


        var flipCardMain = document.createElement("div")
        flipCardMain.classList.add("flip-card")
        document.querySelector(".flip-card-container").append(flipCardMain);


        // 1. create div for image to make a flip-card
        var chinaFlipCard = document.createElement("div");
        // 2. add class of "flip-card-front" to new div
        chinaFlipCard.classList.add("flip-card-front");
        // 3. create a new image
        var chinaImage = document.createElement("img");
        // 4. add class of "western-image" to new image
        chinaImage.classList.add("china-image");
        // 5. add link "src" to image
        // this is linking my airtable-fields
        chinaImage.src = china.fields.img[0].url;
        // 6. add our image to our flip-card-front div
        chinaFlipCard.appendChild(chinaImage);
        // 7. finally, add our new page with our image to flip-card
        flipCardMain.append(chinaFlipCard);


        // create div for text flip-card-back
        var chinaTextCard = document.createElement("div");
        // 2. add class of flip-card-back to new div
        chinaTextCard.classList.add("flip-card-back");
        // 3. create new paragraph
        var chinaDescription = document.createElement("p");
        // 4. add class to our paragraph
        chinaDescription.classList.add("china-description");
        // 5. add description to our paragraph
        chinaDescription.innerText = china.fields.description;
        // 6. add our description to our "flip-back-card" (page div)
        chinaTextCard.appendChild(chinaDescription);
        flipCardMain.append(chinaFlipCard);

        // 7. create a new headline
        var chinaTitle = document.createElement("h1");
        // 8. add a class to western title
        chinaTitle.classList.add("china-title");
        // 9. add our title from airtable
        chinaTitle.innerText = china.fields.title;
        // 9. add title to the "flip-card-back"
        chinaTextCard.appendChild(chinaTitle);
        // 10. add new page(images, texts and the title) to the "card-container"
        flipCardMain.append(chinaTextCard)

        




      }


    })
  });
}


// sound effect
var audio1 = $("#audio1")[0];
$("#image1").mouseenter(function(){
  audio1.play();
  audio1.loop = true;
});
$("#image1").mouseleave(function(){
  audio1.currentTime = 0;
  audio1.pause();
});


var audio2 = $("#audio2")[0];
$("#image2").mouseenter(function(){
  audio2.play();
  audio2.loop = true;
});
$("#image2").mouseleave(function(){
  audio2.currentTime = 0;
  audio2.pause();
});


var audio3 = $("#audio3")[0];
$("#image3").mouseenter(function(){
  audio3.play();
  audio3.loop = true;
});
$("#image3").mouseleave(function(){
  audio3.currentTime = 0;
  audio3.pause();
});


var audio4 = $("#audio4")[0];
$("#image4").mouseenter(function(){
  audio4.play();
  audio4.loop = true;
});
$("#image4").mouseleave(function(){
  audio4.currentTime = 0;
  audio4.pause();
});


var audio5 = $("#audio5")[0];
$("#image5").mouseenter(function(){
  audio5.play();
  audio5.loop = true;
});
$("#image5").mouseleave(function(){
  audio5.currentTime = 0;
  audio5.pause();
});


var audio6 = $("#audio6")[0];
$("#image6").mouseenter(function(){
  audio6.play();
  audio6.loop = true;
});
$("#image6").mouseleave(function(){
  audio6.currentTime = 0;
  audio6.pause();
});


var audio7 = $("#audio7")[0];
$("#image7").mouseenter(function(){
  audio7.play();
  audio7.loop = true;
});
$("#image7").mouseleave(function(){
  audio7.currentTime = 0;
  audio7.pause();
});


var audio8 = $("#audio8")[0];
$("#image8").mouseenter(function(){
  audio8.play();
  audio8.loop = true;
});
$("#image8").mouseleave(function(){
  audio8.currentTime = 0;
  audio8.pause();
});


var audio9 = $("#audio9")[0];
$("#image9").mouseenter(function(){
  audio9.play();
  audio9.loop = true;
});
$("#image9").mouseleave(function(){
  audio9.currentTime = 0;
  audio9.pause();
});