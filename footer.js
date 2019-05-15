var p = document.createElement("p");
var version = document.createTextNode("Version 1.2.2");
br = document.createElement("br");
var copyright = document.createTextNode("\u00A9 2019 Barrett Lo");
p.appendChild(version);
p.appendChild(br);
p.appendChild(copyright);
document.getElementById("footer").appendChild(p);
