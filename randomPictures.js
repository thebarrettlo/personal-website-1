// randomPictures.js generates HTML code for a photo gallery. The number of images to display is
// variable, along with the photo pool.
//
// Future refinements will couple alt text and href link with image pool (library?), and hopefully eventually
// reference an external text document holding image and link data for easier management.

var gallery = document.getElementById("gallery");
var imageList = ["_DSC4340.jpg", "_BPL7308.jpg", "_DSC4519.jpg", "_BPL7447.jpg", "_DSC4560.jpg",
    "_BPL7610.jpg", "_DSC4747.jpg", "_BPL7873.jpg", "_DSC9007.jpg", "_BPL8120.jpg", "_DSC9052.jpg",
    "_BPL8296.jpg", "_DSC9710.jpg", "_BPL8306.jpg", "_DSC9992.jpg", "_DSC9992.jpg", "_BPL9129.jpg",
    "_DSC0098.jpg", "_DSC4289.jpg"];
var uniqueImages = [];
var numOfImages = 18; // Choose how many photos to display

// Randomly chooses which pictures in the array will be displayed
while (uniqueImages.length < numOfImages) {
    var limit = imageList.length - 1;
    var randomNumber = Math.floor(Math.random() * limit);
    var curr = document.createElement("img");
    curr.src = "images/" + imageList[randomNumber]
    gallery.appendChild(curr);
    uniqueImages.push(imageList[randomNumber]);
    imageList.splice(randomNumber,1);
}