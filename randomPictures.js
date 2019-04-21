// randomPictures.js generates HTML code for a photo gallery. The number of images to display is
// variable, along with the photo pool.
//
// Future refinements will couple alt text and href link with image pool (library?), and hopefully eventually
// reference an external text document holding image and link data for easier management.

var gallery = document.getElementById("gallery");
var imageList = [
    ["amberJ18-1.jpg", "Woman laying on recliner", ""],
    ["amberJ18-2.jpg", "Woman looking over recliner back", ""],
    ["amberJ18-3.jpg", "Woman with chocolate chip cookies on her eyes", ""],
    ["amberJ18-4.jpg", "Woman on bathroom floor", ""],
    ["borregoDesert18-1.jpg", "Rock climbers resting in Borrego Desert", ""],
    ["borregoDesert18-2.jpg", "Two guys spot a rock climber bouldering in Borrego Desert", ""],
    ["brandonJ18-1.jpg", "Man in colorful clothes outside", ""],
    ["brandonJ18-2.jpg", "Topless man throwing balloons", ""],
    ["brandonJ18-3.jpg", "Topless man models outside on yellow stool", ""],
    ["joannaP18-1.jpg", "Cal Poly grad in gown by wooden arch", ""],
    ["joannaP18-2.jpg", "Cal Poly grad in gown in front of building", ""],
    ["joannaP18-3.jpg", "Woman sits on rock in field of yellow flowers by ocean", ""],
    ["joannaP18-4.jpg", "Cal Poly grad in gown in front of bougainvillea bush", ""],
    ["joshuaTree18-1.jpg", "People by a pond in Joshua Tree National Park", ""],
    ["joshuaTree18-2.jpg", "People climbing on a cliffside in Joshua Tree National Park", ""],
    ["joshuaTree18-3.jpg", "Yellow VW Westfalia in Joshua Tree National Park", ""],
    ["joshuaTree18-4.jpg", "Man photographing sunset in Joshua Tree National Park", ""],
    ["joshuaTree18-5.jpg", "Cat tail seeds fly around the bed of a truck", ""],
    ["joshuaTree18-6.jpg", "Man smiles as the sun sets over Joshua Tree National Park", ""],
    ["missionTrails18-1.jpg", "Man rock climbing in Mission Trails Regional Park", ""],
    ["missionTrails18-2.jpg", "Rock climber on rock face in Mission Trails Regional Park", ""], 
    ["missionTrails18-3.jpg", "Rock climber at top of rock face in Mission Trails Regional Park", ""],
    ["missionTrails18-4.jpg", "Man prepares to rock climb in Mission Trails Regional Park", ""],
    ["yosemite18-1.jpg", "Mountainside in Yosemite National Park", "travel/yosemite18.html"],
    ["yosemite18-2.jpg", "River bank in Yosemite National Park", "travel/yosemite18.html"],
    ["yosemite18-3.jpg", "Jet vapor trail in Yosemite National Park", "travel/yosemite18.html"],
    ["yosemite18-4.jpg", "Lone brown tree on cliffside in Yosemite National Park", "travel/yosemite18.html"],
    ["yosemite18-5.jpg", "Lone boulder in clearing in Yosemite National Park", "travel/yosemite18.html"],
    ["yosemite18-6.jpg", "Tourists wait for night to fall over Half Dome, Yosemite National Park", "travel/yosemite18.html"],
    ["yosemite18-7.jpg", "Man stands at the base of Vernal Falls in Yosemite National Park", "travel/yosemite18.html"],
    ];
var uniqueImages = 0;
var numOfImages = 18; // Choose how many photos to display

// Randomly chooses which pictures in the array will be displayed
while (uniqueImages < numOfImages) {
    var limit = imageList.length - 1;
    var randomNumber = Math.floor(Math.random() * limit);
    var curr = document.createElement("img");
    curr.src = "images/" + imageList[randomNumber][0];
    curr.alt = imageList[randomNumber][1];
    var anchor = document.createElement("a");
    anchor.href = imageList[randomNumber][2];
    anchor.appendChild(curr);
    gallery.appendChild(anchor);
    uniqueImages += 1;
    imageList.splice(randomNumber,1);
}