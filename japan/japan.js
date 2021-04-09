/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */

// prints "hi" in the browser's dev tools console
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

document.addEventListener('DOMContentLoaded', function(){
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
              this.nextElementSibling.classList.add('flipped');
            }
         }
      }
})


// get my collection data, select all the records
// specify functions that will recieve the data (in a row)
base ("fortune_telling").select({}).eachPage(gotPageOfImage, gotAllImages);

// an empty array to hold our data
var Images = [];

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
showImages();
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
    
    var countryCategory = image.fields.country_category
    countryCategory.forEach((category) => {
      
      if (category == 'japan') {
        
        // display japan images
        var japanImages = document.createElement("img");
        japanImages.classList.add('japan-image');
        japanImages.srrc = japan.fields.img[0].url;
        document.querySelector.apply(".page").appendChild(japanImages);
      }

      // add description to our song container
      var japanDescription = document.createElement("p");
      japanDescription.classList.add("japan-description");
      japanDescription.innerText = japan.fields.description;
      songContainer.append(japanDescription);

    })
  });
}

