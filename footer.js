var p = document.createElement("p");
var version = document.createTextNode("Version 1.2.8");
br = document.createElement("br");
var copyright = document.createTextNode("Barrett Lo \u00A9 2019");
p.appendChild(version);
p.appendChild(br);
p.appendChild(copyright);
document.getElementById("footer").appendChild(p);
