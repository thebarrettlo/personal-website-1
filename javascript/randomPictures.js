// randomPictures.js generates HTML code for a photo gallery. The number of images to display is
// variable, along with the photo pool.
//
// Future refinements will couple alt text and href link with image pool (library?), and hopefully eventually
// reference an external text document holding image and link data for easier management.

var gallery = document.getElementById("randomGallery");
var imageList = [
    ["amberJ18-1.jpg", "Woman laying on recliner", "portraits/amberJ18.html"],
    ["amberJ18-2.jpg", "Woman looking over recliner back", "portraits/amberJ18.html"],
    ["amberJ18-3.jpg", "Woman with chocolate chip cookies on her eyes", "portraits/amberJ18.html"],
    ["amberJ18-4.jpg", "Woman on bathroom floor", "portraits/amberJ18.html"],
    ["amberJ18-5.jpg", "Woman leaning against backyard fence", "portraits/amberJ18.html"],
    ["borregoDesert18-1.jpg", "Rock climbers resting in Borrego Desert", ""],
    ["borregoDesert18-2.jpg", "Two guys spot a rock climber bouldering in Borrego Desert", ""],
    ["brandonJ18-1.jpg", "Man in colorful clothes outside", "portraits/brandonJ18.html"],
    ["brandonJ18-2.jpg", "Topless man throwing balloons toward camera", "portraits/brandonJ18.html"],
    ["brandonJ18-3.jpg", "Topless man sits outside on yellow stool in front of white brick wall", "portraits/brandonJ18.html"],
    ["brandonJ18-4_w500.jpg", "Topless man leans against a dumpster and shopping cart", "portraits/brandonJ18.html"],
    ["brandonJ18-5_w500.jpg", "Man in colorful clothes stares into the sun", "portraits/brandonJ18.html"],
    ["joannaP18-1.jpg", "Cal Poly grad in gown by wooden arch", "portraits/joannaP18.html"],
    ["joannaP18-2.jpg", "Cal Poly grad in gown in front of building", "portraits/joannaP18.html"],
    ["joannaP18-3.jpg", "Woman sits on rock in field of yellow flowers by ocean", "portraits/joannaP18.html"],
    ["joannaP18-4.jpg", "Cal Poly grad in gown in front of bougainvillea bush", "portraits/joannaP18.html"],
    ["joannaP18-5_w500.jpg", "Cal Poly grad in gown struts under trees toward camera", "portraits/joannaP18.html"],
    ["joannaP18-6_w500.jpg", "Cal Poly grad in gown poses confidently", "portraits/joannaP18.html"],
    ["joshuaTree18-1.jpg", "People by a pond in Joshua Tree National Park", "travel/joshuaTree18.html"],
    ["joshuaTree18-2.jpg", "People climbing on a cliffside in Joshua Tree National Park", "travel/joshuaTree18.html"],
    ["joshuaTree18-3.jpg", "Yellow VW Westfalia in Joshua Tree National Park", "travel/joshuaTree18.html"],
    ["joshuaTree18-4.jpg", "Man photographing sunset in Joshua Tree National Park", "travel/joshuaTree18.html"],
    ["joshuaTree18-5.jpg", "Cat tail seeds fly around the bed of a truck", "travel/joshuaTree18.html"],
    ["joshuaTree18-6.jpg", "Man smiles as the sun sets over Joshua Tree National Park", "travel/joshuaTree18.html"],
    ["joshuaTree18-7.jpg", "Landscape of Joshua Tree National Park", "travel/joshuaTree18.html"],
    ["missionTrails18-1.jpg", "Man rock climbing in Mission Trails Regional Park", "travel/missionTrails18.html"],
    ["missionTrails18-2.jpg", "Rock climber on rock face in Mission Trails Regional Park", "travel/missionTrails18.html"], 
    ["missionTrails18-3.jpg", "Rock climber at top of rock face in Mission Trails Regional Park", "travel/missionTrails18.html"],
    ["missionTrails18-4.jpg", "Man prepares to rock climb in Mission Trails Regional Park", "travel/missionTrails18.html"],
    ["missionTrails18-5.jpg", "Man rock climbing with belayer in Mission Trails Regional Park", "travel/missionTrails18.html"],
    ["monsoonSeason18-1_w500.jpg", "Man stands in front of the Timken Museum of Art at Balboa Park", "portraits/monsoonSeason18.html"],
    ["monsoonSeason18-2_w500.jpg", "Man in white button-down shirt in front of tropical plants", "portraits/monsoonSeason18.html"],
    /*["monsoonSeason18-3_w500.jpg", "Three men play croquet in front of the Balboa Park Botanical Garden", "portraits/monsoonSeason18.html"],*/
    ["monsoonSeason18-4_w500.jpg", "Three men play croquet in front of the Balboa Park Botanical Garden", "portraits/monsoonSeason18.html"],
    ["monsoonSeason18-5_w500.jpg", "Three men play air instruments in Balboa Park", "portraits/monsoonSeason18.html"],
    ["monsoonSeason18-6_w500.jpg", "Man in white button-up shirt sits with electric guitar in front of a Spanish tile fountain", "portraits/monsoonSeason18.html"],
    ["monsoonSeason18-7_w500.jpg", "Man in white button-up shirt plays electric guitar in front of a Spanish tile fountain", "portraits/monsoonSeason18.html"],
    ["monsoonSeason18-8_w500.jpg", "Man in white button-up shirt holds a white flower between his lips", "portraits/monsoonSeason18.html"],
    ["monsoonSeason18-9_w500.jpg", "Man in white button-up shirt surrounded by white flowers", "portraits/monsoonSeason18.html"],
    ["monsoonSeason18-10_w500.jpg", "Man in white button-up shirt stands under Spanish archway at top of stairs", "portraits/monsoonSeason18.html"],
    ["monsoonSeason18-11_w500.jpg", "Three men walk through a garden maze", "portraits/monsoonSeason18.html"],
    ["monsoonSeason18-12_w500.jpg", "Three men sit on root of Moreton Bay fig tree", "portraits/monsoonSeason18.html"],
    ["monsoonSeason18-13_w500.jpg", "Three men look up underneath a Moreton Bay fig tree", "portraits/monsoonSeason18.html"],
    ["monsoonSeason18-14_w500.jpg", "Man in white button-up shirt sits on a Moreton Bay fig tree with his electric guitar", "portraits/monsoonSeason18.html"],
    ["yosemite18-1.jpg", "Mountainside in Yosemite National Park", "travel/yosemite18.html"],
    ["yosemite18-2.jpg", "River bank in Yosemite National Park", "travel/yosemite18.html"],
    ["yosemite18-3.jpg", "Jet vapor trail in Yosemite National Park", "travel/yosemite18.html"],
    ["yosemite18-4.jpg", "Lone brown tree on cliffside in Yosemite National Park", "travel/yosemite18.html"],
    ["yosemite18-5.jpg", "Lone boulder in clearing in Yosemite National Park", "travel/yosemite18.html"],
    ["yosemite18-6.jpg", "Tourists wait for night to fall over Half Dome, Yosemite National Park", "travel/yosemite18.html"],
    ["yosemite18-7.jpg", "Man stands at the base of Vernal Falls in Yosemite National Park", "travel/yosemite18.html"],
    ["yosemite18-8.jpg", "Yosemite National Park from Tunnel View", "travel/yosemite18.html"]
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
    curr.onload = function(e) { // Fade in image when loaded
        loadedimg(e);
    };
    var anchor = document.createElement("a");
    anchor.href = imageList[randomNumber][2];
    anchor.appendChild(curr);
    gallery.appendChild(anchor);
    uniqueImages += 1;
    imageList.splice(randomNumber,1);
}

function loadedimg(e) {
    if (!e) e = window.event;
    e.target.style.opacity = 1;
}