function navMenu2() {
    var x = document.getElementById("main-nav");
    if (x.className === "navmenu") {
        x.className += " responsive";
    } else {
        x.className = "navmenu";
    }
}