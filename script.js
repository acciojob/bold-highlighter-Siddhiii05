function highlight() {
    var boldItems = document.getElementsByTagName("strong");

    for (var i = 0; i < boldItems.length; i++) {
        boldItems[i].style.color = "rgb(0, 128, 0)";
    }
}

function return_normal() {
    var boldItems = document.getElementsByTagName("strong");

    for (var i = 0; i < boldItems.length; i++) {
        boldItems[i].style.color = "rgb(0, 0, 0)";
    }
}