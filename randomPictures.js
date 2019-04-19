// randomPictures.js generates HTML code for a photo gallery. The number of images to display is
// variable, along with the photo pool.
//
// Future refinements will couple alt text and href link with image pool (library?), and hopefully eventually
// reference an external text document holding image and link data for easier management.

var gallery = document.getElementById("gallery");
var imageList = [["yosemite18-1.jpg", "Mountainside in Yosemite National Park"], ["joshuaTree18-1.jpg", "People by a pond in Joshua Tree National Park"],
    ["yosemite18-2.jpg", "River bank in Yosemite National Park"], ["joshuaTree18-2.jpg", "People climbing on a cliffside in Joshua Tree National Park"],
    ["yosemite18-3.jpg", "Jet vapor trail in Yosemite National Park"], ["joshuaTree18-3.jpg", "Yellow VW Westfalia in Joshua Tree National Park"],
    ["yosemite18-4.jpg", "Lone brown tree on cliffside in Yosemite National Park"], ["joshuaTree18-4.jpg", "Man photographing sunset in Joshua Tree National Park"],
    ["amberJ18-1.jpg", "Woman laying on recliner"], ["missionTrails18-1.jpg", "Man rock climbing in Mission Trails Regional Park"],
    ["amberJ18-2.jpg", "Woman looking over recliner back"], ["missionTrails18-2.jpg", "Rock climber on rock face in Mission Trails Regional Park"], 
    ["amberJ18-3.jpg", "Woman with chocolate chip cookies on her eyes"], ["missionTrails18-3.jpg", "Rock climber at top of rock face in Mission Trails Regional Park"],
    ["brandonJ18-1.jpg", "Man in colorful clothes outside"], ["borregoDesert18-1.jpg", "Rock climbers resting in Borrego Desert"], ["brandonJ18-2.jpg", "Topless man throwing balloons"],
    ["yosemite18-5.jpg", "Lone boulder in clearing in Yosemite National Park"]];
var uniqueImages = 0;
var numOfImages = 18; // Choose how many photos to display

// Randomly chooses which pictures in the array will be displayed
while (uniqueImages < numOfImages) {
    var limit = imageList.length - 1;
    var randomNumber = Math.floor(Math.random() * limit);
    var curr = document.createElement("img");
    curr.src = "images/" + imageList[randomNumber][0];
    curr.alt = imageList[randomNumber][1];
    gallery.appendChild(curr);
    uniqueImages += 1;
    imageList.splice(randomNumber,1);
}