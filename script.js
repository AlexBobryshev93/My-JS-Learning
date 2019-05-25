var count = 0;

function showDate() {
    var date = new Date();
    document.getElementById("date").innerHTML = "last time: " + date;
    if (count % 10 == 0) alert ("Congs! Buttons were pushed 10 times")
} 