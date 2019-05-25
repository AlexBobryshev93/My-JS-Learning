var count = 0;

function showDate() {
    document.getElementById("date").innerHTML = "last time: " + new Date();
    if (count % 10 == 0) alert ("Congs! Buttons were pushed 10 times")
} 