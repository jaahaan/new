
function printTime() {
    var now = new Date();

    //For Date
    var currDate = now.getDate();
    var currDay = now.getDay();
    var currMonth = now.getMonth();
    var currYear = now.getFullYear();
    var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var monthName = months[currMonth];
    var dayname = days[currDay];
    document.getElementById("date").innerHTML = dayname + ", " + monthName + " " + currDate + ", " + currYear;

    //For Time
    var hour = now.getHours();
    var min = now.getMinutes();
    var sec = now.getSeconds();
    document.getElementById("clock").innerHTML = hour + " : " + min + " : " + sec;
}

//calls the function at specified intervals
//continues calling the function until clearInterval() is called, or the window is closed.
setInterval("printTime()", 1000);

//For slider img
var i = 0;
var img = new Array("../img/stop.png", "../img/Coffee.png", "../img/learncode.png", "../img/grow.png", "../img/spring1.png", "../img/discover.png");
function swapImage() {
    document.slide.src = img[i];
    if (i < img.length - 1) i++;
    else i = 0;
}

setInterval("swapImage()", 3000);