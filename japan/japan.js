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
base ("fortune_telling").select({}).eachPage(gotPageOfImage, gotAllImages);

// an empty array to hold our data
var images = [];

// callback function that recieve our data
function gotPageOfImage(records, fetchNextPage) {
  console.log("gotPageOfImage()");
  // add the records from this page to our array
  images.push(...records);
  // request more pages
  fetchNextPage();
}

// call back function that is called when all pages are loaded
function gotAllImages(err) {
  console.log("gotAllImages()");

  // report an error, you'd want to do something better than this in production
  if (err) {
    console.log("error loading data");
    console.error(err);
    return;
  }

// call functions to log and show the books
consoleLogImages();

try {
  showImages();
}catch(e) {
    console.error(e);
  }
}

// just loop through thour air tablee data and console.log it
function consoleLogImages() {
  console.log("consoleLogImages()");
  images.forEach((image) => {
    console.log("image:", image);
  });
}

// look through our airtable data, create elements
function showImages() {
  console.log("showImages()");
  images.forEach((japan) => {
    
    var countryCategory = japan.fields.country_category
    countryCategory.forEach((category) => {
      
      if (category == 'japan') {

        // 1. create div for image PAGE
        var japanImagePage = document.createElement("div");
        // 2. add class of "page" to new div
        japanImagePage.classList.add("page");
        // 3. create a new image
        var japanImage = document.createElement("img");
        // 4. add class of japan-image to new image
        japanImage.classList.add("japan-image");
        // 5. add link "src to image
        japanImage.src = japan.fields.img[0].url;
        // 6. add our image to our page
        japanImagePage.appendChild(japanImage);
        // 7. finally, add our new page with our image to our book
        document.querySelector("#pages").append(japanImagePage);


        // create div for text PAGE
        var japanTextPage = document.createElement("div");
        // 2. add class of page to new div
        japanTextPage.classList.add("page");
        // 3. create new paragraph
        var japanDescription = document.createElement("p");
        // 4. add class to our paragraph
        japanDescription.classList.add("japan-description");
        // 5. add description to our paragraph
        japanDescription.innerText = japan.fields.description;
        // 6. add our description to our page page (page div)
        japanTextPage.appendChild(japanDescription);


//7. create a new headline
var japanTitle = document.createElement("h1");
// 8. add a class to japan title
japanTitle.classList.add("japan-title")
// 9. add our title from airtable
japanTitle.innerText = japan.fields.title;
// 10. add title to the  book container
japanTextPage.appendChild(japanTitle);
// 7. add new page(image page, text page and the title) to our book container(html에 id="pages"라고 준것에다가 넣기)
document.querySelector("#pages").append(japanTextPage)

        




      }


    })
  });

// run page flipping interaction code after data is added to page
pageFlip()

}






function pageFlip() {
// =======// page flipping interaction begins here =======//
console.log("hi");

var pages = document.getElementsByClassName('page');
for(var i = 0; i < pages.length; i++)
  {
    var page = pages[i];
    if (i % 2 === 0)
      {
        page.style.zIndex = (pages.length - i);
      }
  }

  for(var i = 0; i < pages.length; i++)
    {
      //Or var page = pages[i];
      pages[i].pageNum = i + 1;
      pages[i].onclick=function()
        {
          if (this.pageNum % 2 === 0)
            {
              this.classList.remove('flipped');
              this.previousElementSibling.classList.remove('flipped');
            }
          else
            {
              this.classList.add('flipped');
              this.nextElementSibling.classList.add('flipped')
              ;
            }
         }
      }
// =======// page flipping interaction ends here =======//
    }