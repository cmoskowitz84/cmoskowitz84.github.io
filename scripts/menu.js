function navMenu() {
    var x = document.getElementById("socialLinks");
    if (x.className === "socialLinks") {
        x.className += " responsive";
    } else {
        x.className = "socialLinks";
    }
}