function openNav() {
    document.getElementById("sidebar").style.top = "50%";
}

function closeNav() {
    document.getElementById("sidebar").style.top = "";
}

function fitTablet(screen) {
    if (screen.matches) {
        closeNav();
    }
}

var screen = window.matchMedia("(min-width: 768px)");
fitTablet(screen);
screen.addListener(fitTablet);