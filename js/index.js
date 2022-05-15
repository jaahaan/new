
function printTime() {
    var now = new Date();
    var currDate = now.getDate();
    var currDay = now.getDay();
    var currMonth = now.getMonth();
    var currYear = now.getFullYear();
    var days = ["Saturday", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var monthName = months[currMonth];
    var dayname = days[currDay];
    document.getElementById("date").innerHTML = dayname + ", " + monthName + " " + currDate + ", " + currYear;

    var hour = now.getHours();
    var min = now.getMinutes();
    var sec = now.getSeconds();
    document.getElementById("year").innerHTML = " " + currYear;
    document.getElementById("clock").innerHTML = hour + " : " + min + " : " + sec;

}
setInterval("printTime()", 1000);

var i = 0;
var path = new Array();
path[0] = "../img/learn-code.jpeg";
path[1] = "../img/stop.png";
path[2] = "../img/Coffee.png";
path[3] = "../img/spring1.png";
path[4] = "../img/grow.png";
path[5] = "../img/spring2.png";



function swapImage() {
    document.slide.src = path[i];
    if (i < path.length - 1) i++;
    else i = 0;
    setTimeout("swapImage()", 3000);
}
window.onload = swapImage;