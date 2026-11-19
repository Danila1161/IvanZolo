let button = document.getElementById('myButton');
let modal = document.getElementById('myModal')
let krestik52 = document.getElementById('myClose')
let test = document.getElementById('test');
let content = document.getElementById('myContent')
let menuTrigger = document.getElementById('menuTrigger');
let headerMenu = document.getElementById('headerMenu');

menuTrigger.onclick = function() {
    $("#headerMenu").slideToggle(500);
}
$("#headerMenu").click(function() {
    if (headerMenu.style.display === "block") {
        $("headerMenu").slideUp(500)
    }
});

test.onclick = function() {
    test.style.backgroundColor = "red";
    test.style.marginLeft = "100px";
}
button.onclick = function() { 
    modal.style.display = "block";
   
    setTimeout(opacity1, 100);
}
krestik52.onclick = function() {
    content.style.opacity = "0";
    setTimeout(none, 1000);
}
title.onclick = function() {
title.style.color = "black";
}
function opacity1() {
    content.style.opacity = "1"
}
function none() {
     modal.style.display = "none";
}