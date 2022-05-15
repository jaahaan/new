var navLisks = document.getElementById("navLinks");
function showMenu() {
    navLisks.style.display = "block";
}

function hideMenu() {
    navLisks.style.display = "none";

}

var date = new Date();
document.getElementById("year").innerHTML = date.getFullYear();